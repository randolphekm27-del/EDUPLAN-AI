import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, FileText, MoreVertical, Download, Edit3, Trash2 } from 'lucide-react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { LibraryCard } from '../components/Cards';

export function Library() {
  const documents = [
    { id: 1, title: 'La Révolution Française - Séance 1', subject: 'Histoire', grade: '4ème', date: '12 Mars 2026', type: 'Fiche de préparation' },
    { id: 2, title: 'Évaluation : Les fractions', subject: 'Mathématiques', grade: 'CM1', date: '10 Mars 2026', type: 'Évaluation' },
    { id: 3, title: 'Le cycle de l\'eau', subject: 'Sciences', grade: 'CE2', date: '08 Mars 2026', type: 'Activité' },
    { id: 4, title: 'Poésie : Le Corbeau et le Renard', subject: 'Français', grade: '6ème', date: '05 Mars 2026', type: 'Fiche de préparation' },
    { id: 5, title: 'Introduction à l\'anglais', subject: 'Langues', grade: 'CP', date: '01 Mars 2026', type: 'Séquence' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-brand-lightgray/30 pb-6 gap-4">
        <div>
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">Mes Fiches</h2>
          <p className="text-brand-darkgray/80 font-medium">Retrouvez et gérez tout votre contenu pédagogique.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-darkgray/50" />
            <Input placeholder="Rechercher..." className="pl-9 bg-white/60" />
          </div>
          <Button variant="outline" className="bg-white/60 border-brand-lightgray/50 px-3">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {documents.map((doc, i) => (
          <motion.div key={doc.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <LibraryCard
              title={doc.title}
              metadata={`${doc.subject} • ${doc.grade} • ${doc.date}`}
              icon={FileText}
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
    </motion.div>
  );
}
