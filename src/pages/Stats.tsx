import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Clock, FileText, TrendingUp, Star, Crown } from 'lucide-react';

export function Stats() {
  const statCards = [
    { title: 'Fiches générées', value: '142', icon: FileText, trend: '+12% ce mois' },
    { title: 'Heures économisées', value: '71h', icon: Clock, trend: '+5h cette semaine' },
    { title: 'Séquences complétées', value: '18', icon: BarChart, trend: '+2 ce mois' },
    { title: 'Note moyenne', value: '14.5', icon: Star, trend: '+0.5 ce trimestre' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
      <header className="border-b border-brand-lightgray/30 pb-6">
        <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">Statistiques & Impact</h2>
        <p className="text-brand-darkgray/80 font-medium">Visualisez le temps gagné et votre productivité.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-panel bg-white/60 rounded-[4px] p-6 border border-brand-lightgray/20">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-sm bg-brand-burgundy/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-brand-burgundy" />
              </div>
              <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-sm flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> {stat.trend}
              </span>
            </div>
            <h3 className="text-sm font-medium text-brand-darkgray/70 mb-1 uppercase tracking-wider">{stat.title}</h3>
            <p className="font-serif text-4xl font-semibold text-brand-black">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel bg-white/60 rounded-[4px] p-6 border border-brand-lightgray/20">
          <h3 className="font-serif text-xl font-medium text-brand-black mb-6">Répartition par matière</h3>
          <div className="space-y-4">
            {[
              { label: 'Histoire-Géo', value: 45 },
              { label: 'Français', value: 30 },
              { label: 'Mathématiques', value: 15 },
              { label: 'Sciences', value: 10 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span className="text-brand-black/80">{item.label}</span>
                  <span className="text-brand-darkgray/70">{item.value}%</span>
                </div>
                <div className="h-2 w-full bg-brand-lightgray/30 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-burgundy rounded-full" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-panel bg-white/60 rounded-[4px] p-6 border border-brand-lightgray/20 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-brand-burgundy/10 flex items-center justify-center mb-4">
            <Crown className="w-8 h-8 text-brand-burgundy" />
          </div>
          <h3 className="font-serif text-2xl font-medium text-brand-black mb-2">Statut Premium</h3>
          <p className="text-brand-darkgray/80 mb-6 max-w-sm">Vous faites partie des enseignants les plus productifs de la plateforme. Continuez ainsi !</p>
        </div>
      </div>
    </motion.div>
  );
}
