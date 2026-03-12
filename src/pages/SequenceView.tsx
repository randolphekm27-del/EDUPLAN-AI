import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Edit3, Download, Plus, Clock, Target, 
  FileText, CheckCircle2, Circle, ChevronRight, Sparkles,
  BookOpen, LayoutList
} from 'lucide-react';
import { Button } from '../components/Button';
import { cn } from '../lib/utils';

interface SequenceViewProps {
  onBack: () => void;
  onGenerateSheet: () => void;
}

export function SequenceView({ onBack, onGenerateSheet }: SequenceViewProps) {
  const [activeSessionId, setActiveSessionId] = useState<number | null>(null);

  const sequence = {
    title: "La Révolution Française",
    subject: "Histoire-Géographie",
    grade: "4ème",
    totalSessions: 6,
    progress: 33, // 2 out of 6
    skills: [
      "Se repérer dans le temps : construire des repères historiques",
      "Analyser et comprendre des documents",
      "Pratiquer différents langages en histoire et en géographie",
      "Coopérer et mutualiser"
    ],
    sessions: [
      {
        id: 1,
        title: "Les causes de la Révolution",
        duration: "55 min",
        objectives: [
          "Comprendre la structure de la société d'ordres.",
          "Identifier les causes financières de la crise.",
          "Expliquer l'impact des idées des Lumières."
        ],
        hasSheet: true,
        sheetTitle: "Fiche : Causes de la Révolution"
      },
      {
        id: 2,
        title: "L'année 1789 : la fin de l'Ancien Régime",
        duration: "1h30",
        objectives: [
          "Raconter les événements majeurs de 1789.",
          "Comprendre la portée de la DDHC.",
          "Analyser la fin des privilèges."
        ],
        hasSheet: true,
        sheetTitle: "Fiche : 1789, année charnière"
      },
      {
        id: 3,
        title: "L'échec de la monarchie constitutionnelle",
        duration: "55 min",
        objectives: [
          "Expliquer la fuite à Varennes et ses conséquences.",
          "Comprendre la chute de la royauté (10 août 1792).",
          "Identifier les nouveaux acteurs politiques."
        ],
        hasSheet: false
      },
      {
        id: 4,
        title: "La Première République et la Terreur",
        duration: "55 min",
        objectives: [
          "Définir la République et la Terreur.",
          "Comprendre le rôle de Robespierre.",
          "Analyser les violences politiques de la période."
        ],
        hasSheet: false
      },
      {
        id: 5,
        title: "Le Consulat et l'Empire",
        duration: "1h30",
        objectives: [
          "Expliquer l'arrivée au pouvoir de Napoléon Bonaparte.",
          "Identifier les masses de granit (Code civil, lycées...).",
          "Comprendre la diffusion des idées révolutionnaires en Europe."
        ],
        hasSheet: false
      },
      {
        id: 6,
        title: "Évaluation sommative",
        duration: "55 min",
        objectives: [
          "Vérifier l'acquisition des connaissances sur la période.",
          "Évaluer la capacité à analyser un document historique.",
          "Rédiger un développement construit."
        ],
        hasSheet: false
      }
    ]
  };

  const scrollToSession = (id: number) => {
    const element = document.getElementById(`session-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setActiveSessionId(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto pb-24">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-darkgray/60 hover:text-brand-burgundy transition-colors mb-6 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux séquences
        </button>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-brand-black mb-4 tracking-tight">
              Séquence sur {sequence.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-brand-darkgray/70 font-medium">
              <span className="bg-white border border-brand-lightgray/30 px-3 py-1 rounded-full text-sm shadow-sm">
                {sequence.subject}
              </span>
              <span className="bg-white border border-brand-lightgray/30 px-3 py-1 rounded-full text-sm shadow-sm">
                {sequence.grade}
              </span>
              <span className="bg-white border border-brand-lightgray/30 px-3 py-1 rounded-full text-sm shadow-sm flex items-center gap-1.5">
                <LayoutList className="w-4 h-4" />
                {sequence.totalSessions} séances
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2 bg-white">
              <Edit3 className="w-4 h-4" />
              Modifier
            </Button>
            <Button variant="outline" className="gap-2 bg-white">
              <Download className="w-4 h-4" />
              Exporter
            </Button>
          </div>
        </div>
      </motion.header>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Timeline (70%) */}
        <div className="w-full lg:w-[70%] relative">
          {/* Timeline Header */}
          <div className="flex justify-between items-center mb-12 sticky top-0 bg-brand-offwhite/90 backdrop-blur-md py-4 z-20 border-b border-brand-lightgray/20">
            <h2 className="font-serif text-2xl font-medium text-brand-black">Déroulement</h2>
            <Button className="gap-2 shadow-elegant hover:shadow-elegant-hover text-sm px-4 py-2">
              <Plus className="w-4 h-4" />
              Ajouter une séance
            </Button>
          </div>

          {/* Timeline Line */}
          <div className="absolute left-8 top-24 bottom-0 w-px bg-brand-lightgray/40 hidden md:block" />

          {/* Sessions */}
          <div className="space-y-12 relative z-10">
            {sequence.sessions.map((session, index) => (
              <motion.div 
                key={session.id}
                id={`session-${session.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveSessionId(session.id)}
                onMouseLeave={() => setActiveSessionId(null)}
                className="relative flex flex-col md:flex-row gap-6 md:gap-10 group"
              >
                {/* Timeline Node */}
                <div className="hidden md:flex flex-col items-center shrink-0 w-16 relative z-10">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center font-serif text-xl transition-all duration-300 shadow-sm",
                    session.hasSheet 
                      ? "bg-brand-burgundy text-white" 
                      : "bg-white border-2 border-brand-lightgray/40 text-brand-darkgray/50 group-hover:border-brand-burgundy/50 group-hover:text-brand-burgundy"
                  )}>
                    {session.id}
                  </div>
                </div>

                {/* Session Card */}
                <div className={cn(
                  "flex-1 bg-white rounded-[8px] p-6 md:p-8 border transition-all duration-300 cursor-pointer",
                  activeSessionId === session.id 
                    ? "border-brand-burgundy/30 shadow-elegant-hover scale-[1.01]" 
                    : "border-brand-lightgray/20 shadow-sm hover:border-brand-burgundy/20 hover:shadow-elegant"
                )}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="md:hidden w-8 h-8 rounded-full bg-brand-burgundy/10 text-brand-burgundy flex items-center justify-center font-serif text-sm">
                          {session.id}
                        </span>
                        <h3 className="font-serif text-2xl font-medium text-brand-black group-hover:text-brand-burgundy transition-colors">
                          {session.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-brand-darkgray/60 font-medium">
                        <Clock className="w-4 h-4" />
                        {session.duration}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-brand-darkgray/80 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-brand-burgundy/70" />
                      Objectifs principaux
                    </h4>
                    <ul className="space-y-2">
                      {session.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-brand-darkgray font-light leading-relaxed">
                          <span className="text-brand-burgundy/50 mt-1">•</span>
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-brand-lightgray/20 flex items-center justify-between">
                    {session.hasSheet ? (
                      <div className="flex items-center gap-3 p-3 bg-brand-offwhite/50 rounded-[4px] border border-brand-lightgray/30 w-full sm:w-auto hover:border-brand-burgundy/30 transition-colors">
                        <div className="w-10 h-10 bg-white rounded shadow-sm flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5 text-brand-burgundy" />
                        </div>
                        <div className="flex-1 min-w-0 pr-4">
                          <p className="text-sm font-medium text-brand-black truncate">{session.sheetTitle}</p>
                          <p className="text-xs text-brand-darkgray/60 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Prête
                          </p>
                        </div>
                        <Button variant="ghost" className="text-brand-burgundy hover:bg-brand-burgundy/5 px-3 py-1.5 text-sm h-auto">
                          Ouvrir
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        onClick={(e) => { e.stopPropagation(); onGenerateSheet(); }}
                        variant="outline" 
                        className="w-full sm:w-auto gap-2 text-brand-burgundy border-brand-burgundy/20 hover:bg-brand-burgundy/5 hover:border-brand-burgundy/40"
                      >
                        <Sparkles className="w-4 h-4" />
                        Générer la fiche avec l'IA
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Side Panel (30%) */}
        <div className="w-full lg:w-[30%] space-y-8">
          {/* Progress Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[8px] p-6 border border-brand-lightgray/20 shadow-sm"
          >
            <h3 className="font-serif text-lg font-medium text-brand-black mb-4">Progression</h3>
            <div className="flex justify-between items-end mb-2">
              <span className="text-3xl font-light text-brand-black">
                {sequence.sessions.filter(s => s.hasSheet).length}
                <span className="text-lg text-brand-darkgray/40">/{sequence.totalSessions}</span>
              </span>
              <span className="text-sm font-medium text-brand-darkgray/60 mb-1">fiches prêtes</span>
            </div>
            <div className="h-2 w-full bg-brand-lightgray/30 rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-brand-burgundy rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${sequence.progress}%` }}
              />
            </div>
          </motion.div>

          {/* Mini Timeline Overview */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[8px] p-6 border border-brand-lightgray/20 shadow-sm sticky top-24"
          >
            <h3 className="font-serif text-lg font-medium text-brand-black mb-6">Vue d'ensemble</h3>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-lightgray/30 before:to-transparent">
              {sequence.sessions.map((session) => (
                <button
                  key={session.id}
                  onClick={() => scrollToSession(session.id)}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active w-full text-left"
                >
                  <div className={cn(
                    "flex items-center justify-center w-6 h-6 rounded-full border-2 bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors duration-200 z-10",
                    activeSessionId === session.id ? 'border-brand-burgundy' : (session.hasSheet ? 'border-brand-burgundy/50' : 'border-brand-lightgray/40')
                  )}>
                    {session.hasSheet ? (
                      <div className="w-2 h-2 bg-brand-burgundy rounded-full" />
                    ) : (
                      <div className={cn("w-2 h-2 rounded-full transition-colors", activeSessionId === session.id ? "bg-brand-burgundy" : "bg-transparent")} />
                    )}
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] p-2 rounded transition-colors group-hover:bg-brand-offwhite">
                    <p className={cn(
                      "text-xs font-medium truncate transition-colors",
                      activeSessionId === session.id ? "text-brand-burgundy" : "text-brand-darkgray/70 group-hover:text-brand-black"
                    )}>
                      S{session.id}. {session.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[8px] p-6 border border-brand-lightgray/20 shadow-sm"
          >
            <h3 className="font-serif text-lg font-medium text-brand-black mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-burgundy" />
              Compétences visées
            </h3>
            <ul className="space-y-3">
              {sequence.skills.map((skill, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-brand-darkgray/80 font-light leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600/70 shrink-0 mt-0.5" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
