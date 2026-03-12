import React, { useState } from 'react';
import { BookOpen, House, PlusCircle, Settings, LogOut, FileText, Menu, X, Layers, Users, BarChart, Star, Bell } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { Dropdown, DropdownItem } from './Dropdown';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: House },
    { id: 'library', label: 'Mes fiches', icon: FileText },
    { id: 'sequences', label: 'Mes séquences', icon: Layers },
    { id: 'shared', label: 'Partagés avec moi', icon: Users },
    { id: 'stats', label: 'Statistiques', icon: BarChart },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen w-full bg-brand-offwhite overflow-hidden font-sans text-brand-black">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-brand-darkgray text-brand-offwhite flex items-center justify-between px-4 z-30 shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-sm bg-brand-burgundy flex items-center justify-center shadow-elegant">
            <FileText className="w-4 h-4 text-brand-offwhite" />
          </div>
          <h1 className="font-serif text-xl tracking-wide font-semibold">EduPlan AI</h1>
        </div>
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 hover:bg-white/10 rounded-md transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-brand-darkgray text-brand-offwhite flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 border-r border-white/5",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 lg:p-8 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-brand-burgundy flex items-center justify-center shadow-elegant">
                <FileText className="w-4 h-4 text-brand-offwhite" />
              </div>
              <h1 className="font-serif text-2xl tracking-wide font-semibold">EduPlan AI</h1>
            </div>
            <button className="lg:hidden p-1 hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6 text-brand-offwhite/70" />
            </button>
          </div>
          
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-[4px] text-sm font-medium transition-all duration-300",
                  activeTab === item.id 
                    ? "bg-brand-burgundy text-white shadow-elegant" 
                    : "text-brand-offwhite/70 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto border-t border-white/10 p-6">
          <button 
            onClick={() => handleTabChange('pricing')}
            className={cn(
              "w-full flex items-center justify-between px-4 py-3 rounded-[4px] text-sm font-medium transition-all duration-300 mb-6",
              activeTab === 'pricing'
                ? "bg-brand-burgundy text-white shadow-elegant"
                : "bg-white/5 text-brand-offwhite hover:bg-white/10 border border-white/10"
            )}
          >
            <div className="flex items-center gap-3">
              <Star className="w-4 h-4 text-amber-400" />
              <span>Passer à Pro</span>
            </div>
          </button>

          <div className="flex items-center gap-3 mb-4">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
              alt="Profile" 
              className="w-10 h-10 rounded-full object-cover border border-white/20"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-medium text-white">Marie Dubois</span>
              <span className="text-xs text-brand-offwhite/60 font-light">Professeur des écoles</span>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-[4px] text-sm font-medium text-brand-offwhite/70 hover:bg-white/5 hover:text-white transition-all duration-300">
            <LogOut className="w-4 h-4" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative pt-16 lg:pt-0 flex flex-col">
        {/* Top Bar */}
        <header className="hidden lg:flex h-16 items-center justify-end px-8 border-b border-brand-lightgray/20 bg-white/50 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <Dropdown
              trigger={
                <button className="relative p-2 text-brand-darkgray hover:bg-brand-lightgray/20 rounded-full transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-burgundy rounded-full border border-white" />
                </button>
              }
              align="right"
            >
              <div className="p-4 border-b border-brand-lightgray/20">
                <h3 className="font-medium text-brand-black">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <DropdownItem>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-sm">Nouvelle fonctionnalité</span>
                    <span className="text-xs text-brand-darkgray/70">Découvrez le nouveau générateur de séquences.</span>
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-sm">Fiche générée</span>
                    <span className="text-xs text-brand-darkgray/70">Votre fiche "La Révolution Française" est prête.</span>
                  </div>
                </DropdownItem>
              </div>
              <div className="p-2 border-t border-brand-lightgray/20 text-center">
                <button className="text-xs font-medium text-brand-burgundy hover:underline">Tout marquer comme lu</button>
              </div>
            </Dropdown>
            
            <Dropdown
              trigger={
                <button className="flex items-center gap-2 hover:bg-brand-lightgray/20 p-1 pr-3 rounded-full transition-colors">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full object-cover border border-brand-lightgray/30"
                  />
                  <span className="text-sm font-medium text-brand-black hidden sm:block">Marie D.</span>
                </button>
              }
              align="right"
            >
              <DropdownItem onClick={() => handleTabChange('settings')}>
                <Settings className="w-4 h-4 mr-2" />
                Paramètres
              </DropdownItem>
              <DropdownItem onClick={() => handleTabChange('pricing')}>
                <Star className="w-4 h-4 mr-2" />
                Abonnement
              </DropdownItem>
              <div className="h-px bg-brand-lightgray/20 my-1" />
              <DropdownItem className="text-red-600 hover:text-red-700 hover:bg-red-50">
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </DropdownItem>
            </Dropdown>
          </div>
        </header>

        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-brand-lightgray/10 to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-10 relative z-10 w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
