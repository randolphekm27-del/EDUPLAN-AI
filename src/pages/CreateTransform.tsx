import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UploadCloud, FileText, File, FileType2, CheckCircle2, Loader2, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { cn } from '../lib/utils';

interface CreateTransformProps {
  onTransform: (content: string | File) => void;
}

export function CreateTransform({ onTransform }: CreateTransformProps) {
  const [activeTab, setActiveTab] = useState<'paste' | 'upload'>('paste');
  const [text, setText] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    // Auto-start analysis for demo purposes
    startAnalysis(selectedFile);
  };

  const startAnalysis = (content: string | File) => {
    setIsAnalyzing(true);
    setProgress(0);
    
    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsAnalyzing(false);
            onTransform(content);
          }, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 300);
  };

  const handleTextSubmit = () => {
    if (text.trim()) {
      startAnalysis(text);
    }
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center max-w-2xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[8px] p-12 shadow-elegant border border-brand-lightgray/20 text-center w-full relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-lightgray/20">
            <motion.div 
              className="h-full bg-brand-burgundy"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          
          <div className="relative w-32 h-32 mx-auto mb-8">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle 
                className="text-brand-lightgray/20 stroke-current" 
                strokeWidth="4" 
                cx="50" cy="50" r="40" 
                fill="transparent" 
              />
              <motion.circle 
                className="text-brand-burgundy stroke-current" 
                strokeWidth="4" 
                strokeLinecap="round" 
                cx="50" cy="50" r="40" 
                fill="transparent" 
                strokeDasharray="251.2"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 251.2 - (251.2 * progress) / 100 }}
                transition={{ ease: "linear", duration: 0.3 }}
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <Sparkles className="w-6 h-6 text-brand-burgundy mb-1 animate-pulse" />
              <span className="font-serif text-xl font-medium text-brand-black">{progress}%</span>
            </div>
          </div>
          
          <h3 className="font-serif text-2xl font-medium text-brand-black mb-3">Analyse en cours...</h3>
          <p className="text-brand-darkgray/70 font-light">
            L'IA structure votre document et extrait les concepts clés.
          </p>
          
          <div className="mt-8 space-y-3 text-sm text-brand-darkgray/60 font-light text-left max-w-sm mx-auto">
            <div className="flex items-center gap-3">
              <CheckCircle2 className={cn("w-4 h-4 transition-colors", progress > 20 ? "text-brand-burgundy" : "text-brand-lightgray")} />
              <span>Lecture du contenu</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className={cn("w-4 h-4 transition-colors", progress > 50 ? "text-brand-burgundy" : "text-brand-lightgray")} />
              <span>Identification des objectifs</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className={cn("w-4 h-4 transition-colors", progress > 80 ? "text-brand-burgundy" : "text-brand-lightgray")} />
              <span>Structuration de la fiche</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
      className="min-h-[80vh] flex flex-col items-center justify-center max-w-4xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-black mb-4 tracking-tight">
          Transformez votre contenu existant en fiche pédagogique
        </h2>
        <p className="text-brand-darkgray/70 text-lg font-light">
          L'IA analyse votre document et le structure automatiquement.
        </p>
      </div>

      <div className="w-full max-w-3xl bg-white rounded-[8px] shadow-sm border border-brand-lightgray/20 overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-brand-lightgray/20">
          <button
            onClick={() => setActiveTab('paste')}
            className={cn(
              "flex-1 py-4 text-sm font-medium transition-colors flex items-center justify-center gap-2",
              activeTab === 'paste' 
                ? "text-brand-burgundy border-b-2 border-brand-burgundy bg-brand-burgundy/5" 
                : "text-brand-darkgray/60 hover:text-brand-black hover:bg-brand-offwhite/50"
            )}
          >
            <FileText className="w-4 h-4" />
            Coller du texte
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={cn(
              "flex-1 py-4 text-sm font-medium transition-colors flex items-center justify-center gap-2",
              activeTab === 'upload' 
                ? "text-brand-burgundy border-b-2 border-brand-burgundy bg-brand-burgundy/5" 
                : "text-brand-darkgray/60 hover:text-brand-black hover:bg-brand-offwhite/50"
            )}
          >
            <UploadCloud className="w-4 h-4" />
            Importer un fichier
          </button>
        </div>

        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'paste' ? (
              <motion.div
                key="paste"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Collez votre contenu ici (texte de cours, notes, chapitre...)"
                  className="w-full h-64 resize-none p-6 bg-brand-offwhite/50 border border-brand-lightgray/30 rounded-[4px] text-brand-black focus:outline-none focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy transition-colors placeholder:text-brand-darkgray/40 font-light leading-relaxed"
                />
                <div className="flex justify-end">
                  <Button 
                    onClick={handleTextSubmit}
                    disabled={!text.trim()}
                    className="px-8 py-3 shadow-elegant hover:shadow-elegant-hover flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Transformer en fiche
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="upload"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={cn(
                    "w-full h-64 border-2 border-dashed rounded-[4px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 relative overflow-hidden group",
                    isDragging 
                      ? "border-brand-burgundy bg-brand-burgundy/5" 
                      : "border-brand-lightgray/40 bg-brand-offwhite/30 hover:border-brand-burgundy/50 hover:bg-brand-offwhite/80"
                  )}
                >
                  {/* Subtle glow effect on drag */}
                  <div className={cn(
                    "absolute inset-0 bg-brand-burgundy/5 transition-opacity duration-300 pointer-events-none",
                    isDragging ? "opacity-100" : "opacity-0"
                  )} />

                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
                    className="hidden" 
                    accept=".pdf,.doc,.docx,.txt"
                  />
                  
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <UploadCloud className={cn(
                      "w-8 h-8 transition-colors duration-300",
                      isDragging ? "text-brand-burgundy" : "text-brand-darkgray/60 group-hover:text-brand-burgundy"
                    )} />
                  </div>
                  
                  <h3 className="font-serif text-xl font-medium text-brand-black mb-2">
                    Cliquez pour importer ou glissez-déposez
                  </h3>
                  <p className="text-sm text-brand-darkgray/60 font-light mb-6">
                    Même un document désordonné sera parfaitement structuré.
                  </p>
                  
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white border border-brand-lightgray/30 rounded-full text-xs font-medium text-brand-darkgray/70">PDF</span>
                    <span className="px-3 py-1 bg-white border border-brand-lightgray/30 rounded-full text-xs font-medium text-brand-darkgray/70">DOCX</span>
                    <span className="px-3 py-1 bg-white border border-brand-lightgray/30 rounded-full text-xs font-medium text-brand-darkgray/70">TXT</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
