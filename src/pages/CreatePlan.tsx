import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, BookOpen, Target, Clock, CheckCircle2 } from 'lucide-react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Select } from '../components/Select';

interface CreatePlanProps {
  setActiveTab: (tab: string) => void;
}

export function CreatePlan({ setActiveTab }: CreatePlanProps) {
  const [step, setStep] = useState(1);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto space-y-8 pb-12">
      <header className="text-center mb-12">
        <div className="w-16 h-16 bg-brand-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-8 h-8 text-brand-burgundy" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brand-black mb-4">Créer une nouvelle fiche</h2>
        <p className="text-brand-darkgray/80 font-medium text-lg">Laissez l'IA structurer votre prochain cours avec élégance.</p>
      </header>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-12">
        {[1, 2, 3].map((s, i) => (
          <React.Fragment key={s}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg transition-colors duration-300 ${step >= s ? 'bg-brand-burgundy text-white shadow-elegant' : 'bg-white border border-brand-lightgray/50 text-brand-darkgray/50'}`}>
              {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
            </div>
            {i < 2 && (
              <div className={`w-16 sm:w-24 h-px mx-2 transition-colors duration-300 ${step > s ? 'bg-brand-burgundy' : 'bg-brand-lightgray/50'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="glass-panel bg-white/70 rounded-[4px] p-6 sm:p-10 border border-brand-lightgray/30 shadow-sm relative overflow-hidden">
        {/* Decorative watermark */}
        <BookOpen className="absolute -bottom-10 -right-10 w-64 h-64 text-brand-lightgray/10 pointer-events-none" />
        
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
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-black/80">Sujet principal de la séance</label>
            <Input placeholder="Ex: Les causes de la Révolution Française..." className="bg-white text-lg py-4" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-black/80 flex items-center gap-2"><Clock className="w-4 h-4 text-brand-burgundy" /> Durée prévue</label>
            <Select className="bg-white w-full sm:w-1/2">
              <option>55 minutes</option>
              <option>1h30</option>
              <option>2 heures</option>
            </Select>
          </div>

          <div className="pt-8 border-t border-brand-lightgray/30 flex justify-between items-center">
            <Button variant="ghost" className="text-brand-darkgray hover:text-brand-black" onClick={() => setActiveTab('dashboard')}>Annuler</Button>
            <Button className="gap-2 px-8 py-4 text-lg shadow-elegant hover:shadow-elegant-hover group">
              <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
              Générer la fiche
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
