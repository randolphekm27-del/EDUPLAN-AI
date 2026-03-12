import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Loader2, Sparkles, Lightbulb } from 'lucide-react';
import { Button } from '../components/Button';

interface CreatePromptProps {
  setActiveTab: (tab: string) => void;
}

export function CreatePrompt({ setActiveTab }: CreatePromptProps) {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const suggestions = [
    "Fractions CM1",
    "Révolution française 4ème",
    "Present perfect 3ème"
  ];

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
      // Navigate to library after generation
      setActiveTab('library');
    }, 3000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
      className="min-h-[80vh] flex flex-col items-center justify-center max-w-4xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-12 relative w-full">
        <div className="absolute top-0 right-0 hidden md:block">
          <button 
            onClick={() => setActiveTab('create-form')}
            className="text-sm text-brand-darkgray/60 hover:text-brand-burgundy transition-colors font-medium flex items-center gap-2 px-4 py-2 rounded-full border border-brand-lightgray/30 hover:border-brand-burgundy/30 bg-white"
          >
            Passer en mode formulaire
          </button>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-black mb-4 tracking-tight">
          Créez votre fiche en décrivant votre cours
        </h2>
        <p className="text-brand-darkgray/70 text-lg font-light mb-6">
          Une approche naturelle et apaisante pour concevoir vos séances.
        </p>
        <div className="md:hidden flex justify-center">
          <button 
            onClick={() => setActiveTab('create-form')}
            className="text-sm text-brand-darkgray/60 hover:text-brand-burgundy transition-colors font-medium flex items-center gap-2 px-4 py-2 rounded-full border border-brand-lightgray/30 hover:border-brand-burgundy/30 bg-white"
          >
            Passer en mode formulaire
          </button>
        </div>
      </div>

      <div className="w-full max-w-3xl relative mb-8">
        <motion.div 
          animate={{ 
            boxShadow: isFocused ? '0 0 30px rgba(126, 11, 11, 0.08)' : '0 0 0px rgba(126, 11, 11, 0)',
            borderColor: isFocused ? 'rgba(126, 11, 11, 0.2)' : 'rgba(159, 154, 149, 0.2)'
          }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-[8px] border border-brand-lightgray/20 overflow-hidden"
        >
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Décrivez votre cours en langage naturel... Exemple : Créer une fiche sur la photosynthèse pour une classe de 5ème, durée 55 minutes..."
            className="w-full h-48 md:h-56 resize-none p-6 md:p-8 text-lg text-brand-black placeholder:text-brand-darkgray/40 focus:outline-none bg-transparent font-light leading-relaxed"
            disabled={isGenerating}
          />
          
          <div className="absolute bottom-6 right-6 flex items-center gap-3">
            <button 
              type="button"
              className="p-3 text-brand-darkgray/40 hover:text-brand-burgundy hover:bg-brand-burgundy/5 rounded-full transition-colors"
              title="Dictée vocale"
            >
              <Mic className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center mb-12 w-full">
        <Button 
          onClick={handleGenerate} 
          disabled={!prompt.trim() || isGenerating}
          variant={isGenerating ? "outline" : "default"}
          className={`w-full sm:w-auto px-12 py-4 text-lg shadow-elegant hover:shadow-elegant-hover transition-all duration-300 min-w-[280px] flex justify-center items-center ${
            isGenerating ? 'bg-white border-brand-burgundy/20 text-brand-burgundy' : ''
          }`}
        >
          <AnimatePresence mode="wait">
            {isGenerating ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-3"
              >
                <Loader2 className="w-5 h-5 animate-spin text-brand-burgundy" />
                <span className="font-medium">Génération en cours...</span>
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">Générer la fiche</span>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
        <p className="text-sm text-brand-darkgray/50 mt-4 font-light">
          L'IA générera votre fiche en moins de 10 secondes
        </p>
      </div>

      <div className="w-full max-w-2xl flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-2 text-brand-darkgray/60 font-medium whitespace-nowrap">
          <Lightbulb className="w-4 h-4 text-brand-burgundy/60" />
          Suggérer des idées :
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {suggestions.map((suggestion, i) => (
            <button
              key={i}
              onClick={() => setPrompt(suggestion)}
              className="px-4 py-2 rounded-full bg-white border border-brand-lightgray/30 text-brand-darkgray hover:text-brand-burgundy hover:border-brand-burgundy/30 hover:bg-brand-burgundy/5 transition-all duration-300 font-light"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
