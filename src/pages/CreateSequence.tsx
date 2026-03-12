import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, BookOpen, Target, Layers, CheckCircle2 } from 'lucide-react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Select } from '../components/Select';

interface CreateSequenceProps {
  setActiveTab: (tab: string) => void;
}

export function CreateSequence({ setActiveTab }: CreateSequenceProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call and generation
    setTimeout(() => {
      setActiveTab('sequence-view');
    }, 2500);
  };

  if (isGenerating) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center max-w-2xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[8px] p-12 shadow-elegant border border-brand-lightgray/20 text-center w-full relative overflow-hidden"
        >
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-brand-lightgray/20 rounded-full" />
            <motion.div 
              className="absolute inset-0 border-4 border-brand-burgundy rounded-full border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Layers className="w-8 h-8 text-brand-burgundy" />
            </div>
          </div>
          
          <h3 className="font-serif text-2xl font-medium text-brand-black mb-3">Conception de la séquence...</h3>
          <p className="text-brand-darkgray/70 font-light">
            L'IA analyse le programme et structure la progression pédagogique.
          </p>
          
          <div className="mt-8 space-y-3 text-sm text-brand-darkgray/60 font-light text-left max-w-sm mx-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-burgundy" />
              <span>Définition des objectifs globaux</span>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-burgundy" />
              <span>Découpage en séances cohérentes</span>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-burgundy" />
              <span>Alignement avec les compétences du socle</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto space-y-8 pb-12">
      <header className="text-center mb-12">
        <div className="w-16 h-16 bg-brand-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Layers className="w-8 h-8 text-brand-burgundy" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brand-black mb-4">Créer une nouvelle séquence</h2>
        <p className="text-brand-darkgray/80 font-medium text-lg">Planifiez une progression pédagogique complète sur plusieurs séances.</p>
      </header>

      <div className="glass-panel bg-white/70 rounded-[4px] p-6 sm:p-10 border border-brand-lightgray/30 shadow-sm relative overflow-hidden">
        <Layers className="absolute -bottom-10 -right-10 w-64 h-64 text-brand-lightgray/10 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-brand-black/80 flex items-center gap-2"><BookOpen className="w-4 h-4 text-brand-burgundy" /> Matière</label>
              <Select className="bg-white">
                <option>Sélectionner...</option>
                <option>Histoire-Géographie</option>
                <option>Français</option>
                <option>Mathématiques</option>
                <option>Sciences</option>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-brand-black/80 flex items-center gap-2"><Target className="w-4 h-4 text-brand-burgundy" /> Niveau</label>
              <Select className="bg-white">
                <option>Sélectionner...</option>
                <option>6ème</option>
                <option>5ème</option>
                <option>4ème</option>
                <option>3ème</option>
                <option>2nde</option>
                <option>1ère</option>
                <option>Terminale</option>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-black/80">Thème global de la séquence</label>
            <Input placeholder="Ex: La Révolution Française, Les fonctions affines..." className="bg-white text-lg py-4" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-black/80 flex items-center gap-2"><Layers className="w-4 h-4 text-brand-burgundy" /> Nombre de séances souhaité</label>
            <Select className="bg-white w-full sm:w-1/2">
              <option>Laisser l'IA décider</option>
              <option>3 séances (Séquence courte)</option>
              <option>5-6 séances (Séquence standard)</option>
              <option>8+ séances (Séquence longue)</option>
            </Select>
          </div>

          <div className="pt-8 border-t border-brand-lightgray/30 flex justify-between items-center">
            <Button variant="ghost" className="text-brand-darkgray hover:text-brand-black" onClick={() => setActiveTab('sequences')}>Annuler</Button>
            <Button onClick={handleGenerate} className="gap-2 px-8 py-4 text-lg shadow-elegant hover:shadow-elegant-hover group">
              <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
              Générer la séquence
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
