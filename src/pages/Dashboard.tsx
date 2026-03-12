import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Plus, FileText, BookOpen, Calculator, Globe, FlaskConical, Music, ArrowRight, Edit3, Download, Trash2, Bell } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { LibraryCard } from '../components/Cards';
import { useNotification } from '../hooks/useNotification';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

export function Dashboard({ setActiveTab }: DashboardProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { notify } = useNotification();

  const resumePlans = [
    { id: 1, title: 'La Révolution Française', subject: 'Histoire', grade: '4ème', date: 'Modifié il y a 2h', progress: 75 },
    { id: 2, title: 'Les fractions simples', subject: 'Mathématiques', grade: 'CM1', date: 'Modifié hier', progress: 40 },
    { id: 3, title: 'Le cycle de l\'eau', subject: 'Sciences', grade: 'CE2', date: 'Modifié le 10 Mars', progress: 90 },
  ];

  const recentPlans = [
    { id: 4, title: 'Introduction à la poésie', subject: 'Français', icon: BookOpen, date: '05 Mars 2026' },
    { id: 5, title: 'Les états de la matière', subject: 'Physique', icon: FlaskConical, date: '01 Mars 2026' },
    { id: 6, title: 'Guerre Froide', subject: 'Histoire', icon: Globe, date: '28 Fév 2026' },
    { id: 7, title: 'Théorème de Pythagore', subject: 'Mathématiques', icon: Calculator, date: '25 Fév 2026' },
    { id: 8, title: 'Le système solaire', subject: 'Sciences', icon: Globe, date: '20 Fév 2026' },
    { id: 9, title: 'Les instruments à cordes', subject: 'Musique', icon: Music, date: '18 Fév 2026' },
  ];

  const popularTemplates = [
    { id: 10, title: 'Séquence complète (5 séances)', category: 'Modèle de séquence' },
    { id: 11, title: 'Fiche d\'évaluation sommative', category: 'Évaluation' },
    { id: 12, title: 'Activité de groupe (Jigsaw)', category: 'Méthodologie' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-12 pb-12"
    >
      {/* Top Bar: Search and Action */}
      <header className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-8">
        <div 
          className={`relative flex-1 transition-all duration-500 ease-in-out ${isSearchFocused ? 'md:max-w-2xl' : 'md:max-w-xl'}`}
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-darkgray/40" />
          <Input 
            placeholder="Rechercher une fiche, un sujet..." 
            className="pl-12 py-3 md:py-4 bg-white/60 focus:bg-white shadow-sm border-brand-lightgray/30 w-full text-base"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button 
            onClick={() => notify('success', 'Notification de test', 'Ceci est un test du système de notification.')} 
            variant="outline"
            className="gap-2 w-full sm:w-auto py-3 md:py-4 px-6 bg-white"
          >
            <Bell className="w-5 h-5" />
            <span className="font-medium">Test Notification</span>
          </Button>
          <Button 
            onClick={() => setActiveTab('create-transform')} 
            variant="outline"
            className="gap-2 w-full sm:w-auto py-3 md:py-4 px-6 bg-white"
          >
            <FileText className="w-5 h-5" />
            <span className="font-medium">Transformer un document</span>
          </Button>
          <Button 
            onClick={() => setActiveTab('create-prompt')} 
            className="gap-2 w-full sm:w-auto py-3 md:py-4 px-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <Plus className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Nouvelle fiche</span>
            {/* Subtle pulse effect */}
            <div className="absolute inset-0 border-2 border-brand-burgundy rounded-[4px] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] opacity-50" />
          </Button>
        </div>
      </header>

      {/* Section: Reprendre où j'en étais */}
      <section>
        <h3 className="font-serif text-xl font-medium text-brand-black mb-6 flex items-center gap-2">
          Reprendre où j'en étais
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {resumePlans.map((plan, i) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <LibraryCard
                title={plan.title}
                metadata={`${plan.subject} • ${plan.grade} • ${plan.date}`}
                icon={FileText}
                progress={plan.progress}
                actions={
                  <>
                    <button className="p-1.5 text-brand-darkgray hover:text-brand-burgundy hover:bg-brand-burgundy/10 rounded-sm transition-colors"><Edit3 className="w-4 h-4" /></button>
                    <button className="p-1.5 text-brand-darkgray hover:text-brand-burgundy hover:bg-brand-burgundy/10 rounded-sm transition-colors"><Download className="w-4 h-4" /></button>
                    <button className="p-1.5 text-brand-darkgray hover:text-red-600 hover:bg-red-50 rounded-sm transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section: Mes fiches récentes */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h3 className="font-serif text-xl font-medium text-brand-black">Mes fiches récentes</h3>
          <button onClick={() => setActiveTab('library')} className="text-sm text-brand-burgundy font-medium hover:underline flex items-center gap-1">
            Voir tout <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {recentPlans.map((plan, i) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
            >
              <LibraryCard
                title={plan.title}
                metadata={`${plan.subject} • ${plan.date}`}
                icon={plan.icon}
                actions={
                  <>
                    <button className="p-1.5 text-brand-darkgray hover:text-brand-burgundy hover:bg-brand-burgundy/10 rounded-sm transition-colors"><Edit3 className="w-4 h-4" /></button>
                    <button className="p-1.5 text-brand-darkgray hover:text-brand-burgundy hover:bg-brand-burgundy/10 rounded-sm transition-colors"><Download className="w-4 h-4" /></button>
                    <button className="p-1.5 text-brand-darkgray hover:text-red-600 hover:bg-red-50 rounded-sm transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section: Modèles populaires */}
      <section>
        <h3 className="font-serif text-xl font-medium text-brand-black mb-6">Modèles populaires</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTemplates.map((template, i) => (
            <motion.div 
              key={template.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
              className="border border-brand-lightgray/30 bg-white/30 rounded-[4px] p-4 hover:bg-white hover:border-brand-burgundy/30 hover:shadow-sm transition-all duration-300 cursor-pointer group flex justify-between items-center"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-darkgray/50 mb-1 block">{template.category}</span>
                <h4 className="font-serif text-sm font-medium text-brand-black group-hover:text-brand-burgundy transition-colors">{template.title}</h4>
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-lightgray/20 flex items-center justify-center group-hover:bg-brand-burgundy/10 transition-colors shrink-0">
                <Plus className="w-4 h-4 text-brand-darkgray group-hover:text-brand-burgundy transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
