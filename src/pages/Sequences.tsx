import React from 'react';
import { motion } from 'motion/react';
import { Layers, Plus, MoreVertical, Calendar, FileText } from 'lucide-react';
import { Button } from '../components/Button';

interface SequencesProps {
  setActiveTab: (tab: string) => void;
}

export function Sequences({ setActiveTab }: SequencesProps) {
  const sequences = [
    { id: 1, title: 'La Seconde Guerre Mondiale', subject: 'Histoire', grade: '3ème', lessons: 6, duration: '3 semaines', progress: 100 },
    { id: 2, title: 'Les fractions et décimaux', subject: 'Mathématiques', grade: 'CM1', lessons: 8, duration: '4 semaines', progress: 25 },
    { id: 3, title: 'La poésie romantique', subject: 'Français', grade: '1ère', lessons: 4, duration: '2 semaines', progress: 0 },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-brand-lightgray/30 pb-6 gap-4">
        <div>
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">Mes Séquences</h2>
          <p className="text-brand-darkgray/80 font-medium">Organisez vos cours sur le long terme.</p>
        </div>
        <Button className="gap-2" onClick={() => setActiveTab('create-sequence')}>
          <Plus className="w-4 h-4" />
          Nouvelle séquence
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sequences.map((seq, i) => (
          <motion.div 
            key={seq.id} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.1 }} 
            onClick={() => setActiveTab('sequence-view')}
            className="glass-panel bg-white/60 rounded-[4px] p-6 hover:shadow-elegant-hover transition-all duration-300 border border-brand-lightgray/20 group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-sm bg-brand-darkgray/5 flex items-center justify-center group-hover:bg-brand-burgundy/10 transition-colors">
                <Layers className="w-5 h-5 text-brand-darkgray group-hover:text-brand-burgundy transition-colors" />
              </div>
              <button className="text-brand-darkgray/40 hover:text-brand-black transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            <h3 className="font-serif text-xl font-medium text-brand-black mb-2 group-hover:text-brand-burgundy transition-colors">{seq.title}</h3>
            <div className="flex gap-2 mb-6">
              <span className="text-xs font-medium bg-brand-lightgray/20 px-2 py-1 rounded-sm uppercase tracking-wider">{seq.subject}</span>
              <span className="text-xs font-medium bg-brand-lightgray/20 px-2 py-1 rounded-sm uppercase tracking-wider">{seq.grade}</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm text-brand-darkgray/70">
                <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> {seq.lessons} séances</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {seq.duration}</span>
              </div>
              <div className="h-1 w-full bg-brand-lightgray/30 rounded-full overflow-hidden">
                <div className="h-full bg-brand-burgundy rounded-full" style={{ width: `${seq.progress}%` }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
