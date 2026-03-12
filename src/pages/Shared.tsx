import React from 'react';
import { motion } from 'motion/react';
import { Eye, Download, Search } from 'lucide-react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Shared() {
  const sharedDocs = [
    { id: 1, title: 'Évaluation - Les volcans', author: 'Claire M.', role: 'Professeur SVT', date: 'Aujourd\'hui', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
    { id: 2, title: 'Activité lecture - Le Petit Prince', author: 'Thomas L.', role: 'Professeur des écoles', date: 'Hier', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
    { id: 3, title: 'Séquence Gymnastique', author: 'Sarah B.', role: 'Professeur EPS', date: '10 Mars', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-brand-lightgray/30 pb-6 gap-4">
        <div>
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">Partagés avec moi</h2>
          <p className="text-brand-darkgray/80 font-medium">Ressources collaboratives de votre établissement.</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-darkgray/50" />
          <Input placeholder="Rechercher..." className="pl-9 bg-white/60" />
        </div>
      </header>

      <div className="bg-white/40 border border-brand-lightgray/20 rounded-[4px] overflow-hidden">
        <div className="divide-y divide-brand-lightgray/20">
          {sharedDocs.map((doc, i) => (
            <motion.div key={doc.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-white/60 transition-colors group">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-lightgray/30 shrink-0">
                  <img src={doc.avatar} alt={doc.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-brand-black group-hover:text-brand-burgundy transition-colors">{doc.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-brand-darkgray/70">
                    <span className="font-medium text-brand-black/80">{doc.author}</span>
                    <span>•</span>
                    <span>{doc.role}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 ml-16 sm:ml-0">
                <span className="text-sm text-brand-darkgray/60">{doc.date}</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0 flex items-center justify-center bg-white/50 border-brand-lightgray/50 text-brand-darkgray hover:text-brand-burgundy hover:border-brand-burgundy">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0 flex items-center justify-center bg-white/50 border-brand-lightgray/50 text-brand-darkgray hover:text-brand-burgundy hover:border-brand-burgundy">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
