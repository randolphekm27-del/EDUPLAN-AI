import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bold, Italic, List, ListOrdered, Image as ImageIcon, Link2, 
  Plus, Sparkles, Search, Lightbulb, BookOpen, Check,
  GripVertical, ChevronDown, MessageSquare, Target
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '../components/Button';

interface EditorProps {
  initialContent?: any;
}

export function Editor({ initialContent }: EditorProps) {
  const [activeSection, setActiveSection] = useState('info');
  const [activeAiTab, setActiveAiTab] = useState<'improve' | 'generate' | 'suggestions' | 'resources'>('improve');
  const [isSaved, setIsSaved] = useState(true);

  const sections = [
    { id: 'info', title: 'Informations générales' },
    { id: 'objectives', title: 'Objectifs pédagogiques' },
    { id: 'skills', title: 'Compétences visées' },
    { id: 'flow', title: 'Déroulement de la séance' },
    { id: 'activities', title: 'Activités élèves' },
    { id: 'trace', title: 'Trace écrite' },
    { id: 'eval', title: 'Évaluation' },
    { id: 'homework', title: 'Devoir maison' },
  ];

  const handleContentChange = () => {
    setIsSaved(false);
    // Simulate autosave
    setTimeout(() => setIsSaved(true), 2000);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] w-full bg-brand-offwhite overflow-hidden">
      {/* Left Column - Table of Contents (20%) */}
      <div className="w-[20%] min-w-[250px] border-r border-brand-lightgray/20 bg-white/50 flex flex-col">
        <div className="p-6 border-b border-brand-lightgray/20">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-darkgray/50">
            Structure de la fiche
          </h3>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-[4px] text-sm font-medium transition-all duration-200 group text-left",
                activeSection === section.id
                  ? "bg-brand-burgundy/10 text-brand-burgundy"
                  : "text-brand-darkgray/70 hover:bg-brand-offwhite hover:text-brand-black"
              )}
            >
              <GripVertical className="w-4 h-4 text-brand-lightgray/50 group-hover:text-brand-darkgray/40 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="flex-1 truncate">{section.title}</span>
            </button>
          ))}
        </div>
        <div className="p-4 border-t border-brand-lightgray/20">
          <button className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium text-brand-darkgray/60 hover:text-brand-burgundy transition-colors">
            <Plus className="w-4 h-4" />
            Ajouter une section
          </button>
        </div>
      </div>

      {/* Center Column - Main Editor (55%) */}
      <div className="flex-1 flex flex-col bg-white relative shadow-[0_0_40px_rgba(0,0,0,0.02)] z-10">
        {/* Toolbar */}
        <div className="h-14 border-b border-brand-lightgray/20 flex items-center justify-between px-6 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-1">
            <button className="p-2 text-brand-darkgray/70 hover:text-brand-black hover:bg-brand-offwhite rounded-[4px] transition-colors"><Bold className="w-4 h-4" /></button>
            <button className="p-2 text-brand-darkgray/70 hover:text-brand-black hover:bg-brand-offwhite rounded-[4px] transition-colors"><Italic className="w-4 h-4" /></button>
            <div className="w-px h-4 bg-brand-lightgray/30 mx-2" />
            <button className="p-2 text-brand-darkgray/70 hover:text-brand-black hover:bg-brand-offwhite rounded-[4px] transition-colors"><List className="w-4 h-4" /></button>
            <button className="p-2 text-brand-darkgray/70 hover:text-brand-black hover:bg-brand-offwhite rounded-[4px] transition-colors"><ListOrdered className="w-4 h-4" /></button>
            <div className="w-px h-4 bg-brand-lightgray/30 mx-2" />
            <button className="p-2 text-brand-darkgray/70 hover:text-brand-black hover:bg-brand-offwhite rounded-[4px] transition-colors"><ImageIcon className="w-4 h-4" /></button>
            <button className="p-2 text-brand-darkgray/70 hover:text-brand-black hover:bg-brand-offwhite rounded-[4px] transition-colors"><Link2 className="w-4 h-4" /></button>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-brand-darkgray/50">
            {isSaved ? (
              <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Enregistré</span>
            ) : (
              <span className="animate-pulse">Enregistrement...</span>
            )}
          </div>
        </div>

        {/* Editor Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="max-w-3xl mx-auto px-12 py-16 space-y-16">
            
            {/* Title Area */}
            <div className="space-y-4">
              <input 
                type="text" 
                defaultValue="La Révolution Française"
                className="w-full text-5xl font-serif font-medium text-brand-black focus:outline-none placeholder:text-brand-lightgray"
                onChange={handleContentChange}
              />
              <div className="flex gap-4 text-brand-darkgray/60 font-medium">
                <input type="text" defaultValue="Histoire-Géographie" className="focus:outline-none hover:bg-brand-offwhite px-2 py-1 -ml-2 rounded transition-colors" onChange={handleContentChange} />
                <span>•</span>
                <input type="text" defaultValue="Classe de 4ème" className="focus:outline-none hover:bg-brand-offwhite px-2 py-1 -ml-2 rounded transition-colors" onChange={handleContentChange} />
                <span>•</span>
                <input type="text" defaultValue="55 minutes" className="focus:outline-none hover:bg-brand-offwhite px-2 py-1 -ml-2 rounded transition-colors" onChange={handleContentChange} />
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              <section id="info" className="group relative">
                <div className="absolute -left-8 top-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1 text-brand-lightgray hover:text-brand-darkgray"><GripVertical className="w-4 h-4" /></button>
                </div>
                <h2 className="font-serif text-2xl font-medium text-brand-black mb-4">Informations générales</h2>
                <textarea 
                  className="w-full min-h-[100px] text-lg text-brand-darkgray font-light leading-relaxed focus:outline-none resize-none"
                  defaultValue="Cette séance introduit les causes profondes de la Révolution française, en se concentrant sur les inégalités sociales, la crise économique et l'influence des Lumières."
                  onChange={handleContentChange}
                />
              </section>

              <section id="objectives" className="group relative">
                <div className="absolute -left-8 top-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1 text-brand-lightgray hover:text-brand-darkgray"><GripVertical className="w-4 h-4" /></button>
                </div>
                <h2 className="font-serif text-2xl font-medium text-brand-black mb-4">Objectifs pédagogiques</h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-brand-darkgray font-light leading-relaxed">
                  <li className="focus:outline-none" contentEditable suppressContentEditableWarning onInput={handleContentChange}>Comprendre la structure de la société d'ordres.</li>
                  <li className="focus:outline-none" contentEditable suppressContentEditableWarning onInput={handleContentChange}>Identifier les causes financières de la crise de la monarchie.</li>
                  <li className="focus:outline-none" contentEditable suppressContentEditableWarning onInput={handleContentChange}>Expliquer l'impact des idées des Lumières sur la remise en cause de l'absolutisme.</li>
                </ul>
              </section>

              <section id="flow" className="group relative">
                <div className="absolute -left-8 top-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1 text-brand-lightgray hover:text-brand-darkgray"><GripVertical className="w-4 h-4" /></button>
                </div>
                <h2 className="font-serif text-2xl font-medium text-brand-black mb-4">Déroulement de la séance</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-16 font-medium text-brand-burgundy shrink-0">10 min</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-brand-black mb-1">Accroche</h4>
                      <p className="text-brand-darkgray font-light leading-relaxed" contentEditable suppressContentEditableWarning onInput={handleContentChange}>
                        Analyse d'une caricature d'époque montrant le Tiers-État portant la noblesse et le clergé.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-16 font-medium text-brand-burgundy shrink-0">25 min</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-brand-black mb-1">Activité de recherche</h4>
                      <p className="text-brand-darkgray font-light leading-relaxed" contentEditable suppressContentEditableWarning onInput={handleContentChange}>
                        Travail en groupes sur des documents sources (cahiers de doléances, extraits de l'Encyclopédie).
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Add Section Button */}
            <div className="pt-8 pb-32 flex justify-center">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-lightgray/30 text-brand-darkgray/60 hover:text-brand-burgundy hover:border-brand-burgundy/30 hover:bg-brand-burgundy/5 transition-all">
                <Plus className="w-4 h-4" />
                <span className="text-sm font-medium">Ajouter une section</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - AI Assistant (25%) */}
      <div className="w-[25%] min-w-[300px] border-l border-brand-lightgray/20 bg-brand-offwhite/50 flex flex-col">
        <div className="p-6 border-b border-brand-lightgray/20">
          <h3 className="font-serif text-lg font-medium text-brand-black flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-burgundy" />
            Assistant IA
          </h3>
        </div>

        {/* AI Tabs */}
        <div className="flex border-b border-brand-lightgray/20 px-2 pt-2">
          {[
            { id: 'improve', icon: Sparkles, label: 'Améliorer' },
            { id: 'generate', icon: Search, label: 'Générer' },
            { id: 'suggestions', icon: Lightbulb, label: 'Idées' },
            { id: 'resources', icon: BookOpen, label: 'Ressources' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveAiTab(tab.id as any)}
              className={cn(
                "flex-1 pb-3 pt-2 px-1 text-[11px] font-medium uppercase tracking-wider flex flex-col items-center gap-1.5 transition-colors relative",
                activeAiTab === tab.id 
                  ? "text-brand-burgundy" 
                  : "text-brand-darkgray/50 hover:text-brand-black"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {activeAiTab === tab.id && (
                <motion.div layoutId="ai-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-burgundy" />
              )}
            </button>
          ))}
        </div>

        {/* AI Content */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <AnimatePresence mode="wait">
            {activeAiTab === 'improve' && (
              <motion.div
                key="improve"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="bg-white p-4 rounded-[4px] border border-brand-lightgray/20 shadow-sm">
                  <p className="text-xs text-brand-darkgray/60 mb-3">Sélectionnez du texte dans l'éditeur pour voir les options d'amélioration.</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start text-sm font-normal">Améliorer la rédaction</Button>
                    <Button variant="outline" className="w-full justify-start text-sm font-normal">Simplifier le vocabulaire</Button>
                    <Button variant="outline" className="w-full justify-start text-sm font-normal">Développer le contenu</Button>
                    <div className="relative">
                      <Button variant="outline" className="w-full justify-between text-sm font-normal">
                        Adapter au niveau <ChevronDown className="w-4 h-4 opacity-50" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeAiTab === 'generate' && (
              <motion.div
                key="generate"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <Button variant="outline" className="w-full justify-start text-sm font-normal py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-brand-burgundy/10 flex items-center justify-center text-brand-burgundy">
                      <ListOrdered className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-brand-black">Générer un QCM</div>
                      <div className="text-xs text-brand-darkgray/60 mt-0.5">Sur la base du contenu actuel</div>
                    </div>
                  </div>
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm font-normal py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-brand-burgundy/10 flex items-center justify-center text-brand-burgundy">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-brand-black">Créer un exercice</div>
                      <div className="text-xs text-brand-darkgray/60 mt-0.5">Questions ouvertes ou analyse</div>
                    </div>
                  </div>
                </Button>
              </motion.div>
            )}

            {activeAiTab === 'suggestions' && (
              <motion.div
                key="suggestions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <div className="bg-white p-4 rounded-[4px] border border-brand-burgundy/20 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-burgundy" />
                  <div className="flex gap-3">
                    <Lightbulb className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-brand-black font-medium mb-1">Ajoutez une activité pratique</p>
                      <p className="text-xs text-brand-darkgray/70 leading-relaxed mb-3">
                        La section "Déroulement" manque d'une activité où les élèves sont actifs.
                      </p>
                      <button className="text-xs font-medium text-brand-burgundy hover:underline">
                        Générer une proposition
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-[4px] border border-brand-lightgray/20 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-lightgray/50" />
                  <div className="flex gap-3">
                    <Target className="w-4 h-4 text-brand-darkgray/50 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-brand-black font-medium mb-1">Précisez le 2ème objectif</p>
                      <p className="text-xs text-brand-darkgray/70 leading-relaxed">
                        "Identifier les causes" pourrait être reformulé avec un verbe d'action plus mesurable.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeAiTab === 'resources' && (
              <motion.div
                key="resources"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <div className="bg-white p-3 rounded-[4px] border border-brand-lightgray/20 shadow-sm flex gap-3 items-center group cursor-pointer hover:border-brand-burgundy/30 transition-colors">
                  <div className="w-12 h-12 bg-brand-lightgray/20 rounded flex items-center justify-center shrink-0">
                    <ImageIcon className="w-5 h-5 text-brand-darkgray/50" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-brand-black truncate">Caricature des 3 ordres</p>
                    <p className="text-xs text-brand-darkgray/60">Image libre de droits</p>
                  </div>
                  <Plus className="w-4 h-4 text-brand-lightgray group-hover:text-brand-burgundy" />
                </div>
                <div className="bg-white p-3 rounded-[4px] border border-brand-lightgray/20 shadow-sm flex gap-3 items-center group cursor-pointer hover:border-brand-burgundy/30 transition-colors">
                  <div className="w-12 h-12 bg-brand-lightgray/20 rounded flex items-center justify-center shrink-0">
                    <Link2 className="w-5 h-5 text-brand-darkgray/50" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-brand-black truncate">Cahiers de doléances</p>
                    <p className="text-xs text-brand-darkgray/60">Archives nationales</p>
                  </div>
                  <Plus className="w-4 h-4 text-brand-lightgray group-hover:text-brand-burgundy" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
