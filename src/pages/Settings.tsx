import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Bell, Shield, CreditCard, Crown, Check, Camera, Key, Smartphone, Download, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profil & Identité', icon: User },
    { id: 'billing', label: 'Abonnement', icon: CreditCard },
    { id: 'security', label: 'Sécurité', icon: Shield },
    { id: 'notifications', label: 'Préférences', icon: Bell },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
      className="max-w-5xl mx-auto space-y-8 pb-12"
    >
      <header className="border-b border-brand-lightgray/30 pb-8">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brand-black mb-3">Paramètres</h2>
        <p className="text-brand-darkgray/80 font-medium text-lg">Gérez votre espace personnel et vos préférences d'enseignement.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-64 shrink-0">
          <nav className="flex flex-col space-y-1">
            {tabs.map((tab) => (
              <button 
                key={tab.id} 
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-4 py-4 text-sm font-medium transition-all duration-300 border-b border-brand-lightgray/20 last:border-0 ${
                  activeTab === tab.id 
                    ? 'text-brand-burgundy bg-brand-burgundy/5' 
                    : 'text-brand-darkgray hover:text-brand-black hover:bg-white/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-brand-burgundy' : 'text-brand-darkgray/60'}`} />
                  <span className="uppercase tracking-wider text-xs">{tab.label}</span>
                </div>
                {activeTab === tab.id && (
                  <motion.div layoutId="activeTabIndicator">
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <motion.div 
                key="profile"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="glass-panel bg-white/60 rounded-[4px] p-6 sm:p-8 border border-brand-lightgray/30 shadow-sm">
                  <h3 className="font-serif text-2xl font-medium text-brand-black mb-8">Identité visuelle</h3>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-8">
                    <div className="relative group cursor-pointer">
                      <div className="w-24 h-24 rounded-full overflow-hidden border border-brand-lightgray/50 shadow-elegant">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="absolute inset-0 bg-brand-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Camera className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-3 mb-2">
                        <Button variant="outline" size="sm" className="bg-white hover:bg-brand-lightgray/10 border-brand-lightgray/50 text-brand-black">Modifier la photo</Button>
                        <Button variant="ghost" size="sm" className="text-brand-darkgray hover:text-red-600">Supprimer</Button>
                      </div>
                      <p className="text-xs text-brand-darkgray/60 font-light">Format recommandé : Carré, 500x500px. Max 2MB.</p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-brand-lightgray/30 mb-8" />

                  <h3 className="font-serif text-2xl font-medium text-brand-black mb-6">Informations personnelles</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-brand-darkgray/80 uppercase tracking-wider">Prénom</label>
                        <Input defaultValue="Marie" className="bg-white/80 focus:bg-white border-brand-lightgray/40" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-brand-darkgray/80 uppercase tracking-wider">Nom</label>
                        <Input defaultValue="Dubois" className="bg-white/80 focus:bg-white border-brand-lightgray/40" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-brand-darkgray/80 uppercase tracking-wider">Adresse email professionnelle</label>
                      <Input defaultValue="marie.dubois@education.fr" type="email" className="bg-white/80 focus:bg-white border-brand-lightgray/40" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-brand-darkgray/80 uppercase tracking-wider">Établissement</label>
                      <Input defaultValue="École Primaire Victor Hugo" className="bg-white/80 focus:bg-white border-brand-lightgray/40" />
                    </div>
                    <div className="pt-6 flex justify-end">
                      <Button className="gap-2 px-8 py-3 shadow-elegant hover:shadow-elegant-hover w-full sm:w-auto">
                        <Check className="w-4 h-4" />
                        Enregistrer
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}

            {activeTab === 'billing' && (
              <motion.div 
                key="billing"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Premium Membership Card */}
                <div className="relative overflow-hidden rounded-[4px] bg-brand-black text-white p-6 sm:p-8 lg:p-10 shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-burgundy/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Crown className="w-6 h-6 text-brand-burgundy" />
                        <span className="font-serif text-2xl font-medium tracking-wide">EduPlan Excellence</span>
                      </div>
                      <p className="text-white/60 font-light max-w-md mb-6">
                        Vous bénéficiez d'un accès illimité à toutes les fonctionnalités de l'intelligence artificielle et à la bibliothèque de modèles premium.
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="bg-white/10 px-3 py-1.5 rounded-sm backdrop-blur-sm border border-white/10">
                          <span className="text-white/50 mr-2">Statut</span>
                          <span className="text-emerald-400 font-medium">Actif</span>
                        </div>
                        <div className="bg-white/10 px-3 py-1.5 rounded-sm backdrop-blur-sm border border-white/10">
                          <span className="text-white/50 mr-2">Renouvellement</span>
                          <span className="text-white font-medium">12 Mars 2027</span>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 w-full lg:w-auto">
                      <Button variant="outline" className="w-full lg:w-auto border-white/20 text-white hover:bg-white hover:text-brand-black transition-colors py-3 px-6">
                        Gérer l'abonnement
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Invoices */}
                <div className="glass-panel bg-white/60 rounded-[4px] p-6 sm:p-8 border border-brand-lightgray/30 shadow-sm">
                  <h3 className="font-serif text-xl font-medium text-brand-black mb-6">Historique de facturation</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[500px]">
                      <thead>
                        <tr className="border-b border-brand-lightgray/30 text-xs uppercase tracking-wider text-brand-darkgray/70 font-semibold">
                          <th className="pb-4 font-medium">Date</th>
                          <th className="pb-4 font-medium">Description</th>
                          <th className="pb-4 font-medium">Montant</th>
                          <th className="pb-4 font-medium text-right">Facture</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brand-lightgray/20">
                        {[
                          { date: '12 Mars 2026', desc: 'Abonnement Annuel Excellence', amount: '149.00 €' },
                          { date: '12 Mars 2025', desc: 'Abonnement Annuel Excellence', amount: '149.00 €' },
                        ].map((invoice, i) => (
                          <tr key={i} className="group">
                            <td className="py-4 text-sm text-brand-black">{invoice.date}</td>
                            <td className="py-4 text-sm text-brand-darkgray/80">{invoice.desc}</td>
                            <td className="py-4 text-sm font-medium text-brand-black">{invoice.amount}</td>
                            <td className="py-4 text-right">
                              <button className="inline-flex items-center justify-center w-8 h-8 rounded-sm text-brand-darkgray hover:text-brand-burgundy hover:bg-brand-burgundy/10 transition-colors">
                                <Download className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'security' && (
              <motion.div 
                key="security"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="glass-panel bg-white/60 rounded-[4px] p-6 sm:p-8 border border-brand-lightgray/30 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <Key className="w-5 h-5 text-brand-burgundy" />
                    <h3 className="font-serif text-2xl font-medium text-brand-black">Mot de passe</h3>
                  </div>
                  <form className="space-y-6 max-w-md">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-brand-darkgray/80 uppercase tracking-wider">Mot de passe actuel</label>
                      <Input type="password" placeholder="••••••••" className="bg-white/80 focus:bg-white border-brand-lightgray/40" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-brand-darkgray/80 uppercase tracking-wider">Nouveau mot de passe</label>
                      <Input type="password" placeholder="••••••••" className="bg-white/80 focus:bg-white border-brand-lightgray/40" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-brand-darkgray/80 uppercase tracking-wider">Confirmer le nouveau mot de passe</label>
                      <Input type="password" placeholder="••••••••" className="bg-white/80 focus:bg-white border-brand-lightgray/40" />
                    </div>
                    <Button className="mt-4 w-full sm:w-auto">Mettre à jour le mot de passe</Button>
                  </form>
                </div>

                <div className="glass-panel bg-white/60 rounded-[4px] p-6 sm:p-8 border border-brand-lightgray/30 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Smartphone className="w-5 h-5 text-brand-black" />
                      <h3 className="font-serif text-xl font-medium text-brand-black">Authentification à deux facteurs</h3>
                    </div>
                    <p className="text-sm text-brand-darkgray/80 max-w-md">Ajoutez une couche de sécurité supplémentaire à votre compte en exigeant un code lors de la connexion.</p>
                  </div>
                  <Button variant="outline" className="shrink-0 w-full lg:w-auto bg-white hover:bg-brand-lightgray/10 border-brand-lightgray/50 text-brand-black">
                    Activer la 2FA
                  </Button>
                </div>
              </motion.div>
            )}

            {activeTab === 'notifications' && (
              <motion.div 
                key="notifications"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="glass-panel bg-white/60 rounded-[4px] p-6 sm:p-8 border border-brand-lightgray/30 shadow-sm">
                  <h3 className="font-serif text-2xl font-medium text-brand-black mb-8">Préférences de communication</h3>
                  
                  <div className="space-y-6">
                    {[
                      { title: 'Nouveautés EduPlan AI', desc: 'Soyez informé des nouvelles fonctionnalités et modèles d\'IA.', defaultChecked: true },
                      { title: 'Rappels de séquences', desc: 'Recevez un email hebdomadaire pour préparer vos prochaines séances.', defaultChecked: true },
                      { title: 'Activité collaborative', desc: 'Lorsqu\'un collègue partage une fiche avec vous.', defaultChecked: true },
                      { title: 'Conseils pédagogiques', desc: 'Notre newsletter mensuelle avec des astuces d\'enseignement.', defaultChecked: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start justify-between gap-4 py-4 border-b border-brand-lightgray/20 last:border-0 last:pb-0">
                        <div>
                          <h4 className="text-sm font-medium text-brand-black mb-1">{item.title}</h4>
                          <p className="text-xs text-brand-darkgray/70">{item.desc}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                          <input type="checkbox" className="sr-only peer" defaultChecked={item.defaultChecked} />
                          <div className="w-11 h-6 bg-brand-lightgray/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-burgundy"></div>
                        </label>
                      </div>
                    ))}
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
