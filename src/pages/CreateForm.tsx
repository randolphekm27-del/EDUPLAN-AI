import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  GraduationCap, 
  Clock, 
  FileText, 
  List, 
  ChevronDown, 
  ChevronUp, 
  Target, 
  Activity, 
  Hash, 
  BarChart,
  Sparkles,
  Check
} from 'lucide-react';
import { Button } from '../components/Button';
import { cn } from '../lib/utils';

interface CreateFormProps {
  onGenerate: (data: any) => void;
}

export function CreateForm({ onGenerate }: CreateFormProps) {
  const [formData, setFormData] = useState({
    subject: '',
    level: '',
    duration: '60',
    theme: '',
    prerequisites: '',
    objectives: [] as string[],
    activityTypes: [] as string[],
    exerciseCount: 3,
    difficulty: 'Moyen'
  });

  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [currentObjective, setCurrentObjective] = useState('');

  const subjects = ['Mathématiques', 'Français', 'Histoire-Géographie', 'Sciences', 'Anglais', 'Physique-Chimie'];
  const levels = ['CP', 'CE1', 'CE2', 'CM1', 'CM2', '6ème', '5ème', '4ème', '3ème', 'Seconde', 'Première', 'Terminale'];
  const activityOptions = ['Découverte', 'Application', 'Évaluation', 'Travail de groupe', 'Manipulation'];
  const difficultyOptions = ['Facile', 'Moyen', 'Difficile'];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddObjective = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentObjective.trim()) {
      e.preventDefault();
      if (!formData.objectives.includes(currentObjective.trim())) {
        handleInputChange('objectives', [...formData.objectives, currentObjective.trim()]);
      }
      setCurrentObjective('');
    }
  };

  const removeObjective = (objToRemove: string) => {
    handleInputChange('objectives', formData.objectives.filter(obj => obj !== objToRemove));
  };

  const toggleActivity = (activity: string) => {
    const current = formData.activityTypes;
    if (current.includes(activity)) {
      handleInputChange('activityTypes', current.filter(a => a !== activity));
    } else {
      handleInputChange('activityTypes', [...current, activity]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full h-full flex flex-col lg:flex-row gap-8">
      {/* Left Column - Form (60%) */}
      <div className="w-full lg:w-[60%] flex flex-col h-full overflow-y-auto pr-2 pb-24 lg:pb-0 custom-scrollbar">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h2 className="font-serif text-3xl font-medium text-brand-black mb-2">Remplissez les informations</h2>
            <p className="text-brand-darkgray/70 font-light">Détaillez votre besoin pour une fiche sur mesure.</p>
          </div>
          <button 
            onClick={() => onGenerate({ mode: 'prompt' })} // We'll use this to navigate back
            className="text-sm text-brand-darkgray/60 hover:text-brand-burgundy transition-colors font-medium flex items-center gap-2 px-4 py-2 rounded-full border border-brand-lightgray/30 hover:border-brand-burgundy/30 bg-white"
          >
            Passer en mode prompt
          </button>
        </div>

        <div className="space-y-8">
          {/* Informations générales */}
          <section className="bg-white p-6 md:p-8 rounded-[4px] shadow-sm border border-brand-lightgray/20">
            <h3 className="font-serif text-xl font-medium text-brand-black mb-6 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-brand-burgundy"></span>
              Informations générales
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Matière */}
                <div className="space-y-2">
                  <label className="text-sm font-light text-brand-darkgray flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-brand-burgundy/70" />
                    Matière
                  </label>
                  <div className="relative">
                    <select 
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full appearance-none bg-brand-offwhite/50 border border-brand-lightgray/30 rounded-[4px] py-3 pl-4 pr-10 text-brand-black focus:outline-none focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy transition-colors"
                    >
                      <option value="" disabled>Sélectionner une matière</option>
                      {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-darkgray/50 pointer-events-none" />
                  </div>
                </div>

                {/* Niveau */}
                <div className="space-y-2">
                  <label className="text-sm font-light text-brand-darkgray flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-brand-burgundy/70" />
                    Niveau
                  </label>
                  <div className="relative">
                    <select 
                      value={formData.level}
                      onChange={(e) => handleInputChange('level', e.target.value)}
                      className="w-full appearance-none bg-brand-offwhite/50 border border-brand-lightgray/30 rounded-[4px] py-3 pl-4 pr-10 text-brand-black focus:outline-none focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy transition-colors"
                    >
                      <option value="" disabled>Sélectionner un niveau</option>
                      {levels.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-darkgray/50 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Thème */}
              <div className="space-y-2">
                <label className="text-sm font-light text-brand-darkgray flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-burgundy/70" />
                  Thème de la leçon
                </label>
                <input 
                  type="text"
                  value={formData.theme}
                  onChange={(e) => handleInputChange('theme', e.target.value)}
                  placeholder="Ex: La Révolution française, Les fractions..."
                  className="w-full bg-brand-offwhite/50 border border-brand-lightgray/30 rounded-[4px] py-3 px-4 text-brand-black focus:outline-none focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy transition-colors placeholder:text-brand-darkgray/30"
                />
              </div>

              {/* Durée */}
              <div className="space-y-2">
                <label className="text-sm font-light text-brand-darkgray flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-burgundy/70" />
                  Durée (en minutes) : <span className="font-medium text-brand-black">{formData.duration} min</span>
                </label>
                <input 
                  type="range"
                  min="15"
                  max="120"
                  step="5"
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  className="w-full accent-brand-burgundy"
                />
              </div>

              {/* Prérequis */}
              <div className="space-y-2">
                <label className="text-sm font-light text-brand-darkgray flex items-center gap-2">
                  <List className="w-4 h-4 text-brand-burgundy/70" />
                  Prérequis (optionnel)
                </label>
                <textarea 
                  value={formData.prerequisites}
                  onChange={(e) => handleInputChange('prerequisites', e.target.value)}
                  placeholder="Ce que les élèves doivent déjà savoir..."
                  rows={2}
                  className="w-full bg-brand-offwhite/50 border border-brand-lightgray/30 rounded-[4px] py-3 px-4 text-brand-black focus:outline-none focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy transition-colors placeholder:text-brand-darkgray/30 resize-none"
                />
              </div>
            </div>
          </section>

          {/* Options avancées */}
          <section className="bg-white rounded-[4px] shadow-sm border border-brand-lightgray/20 overflow-hidden">
            <button 
              onClick={() => setAdvancedOpen(!advancedOpen)}
              className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-brand-offwhite/30 transition-colors"
            >
              <h3 className="font-serif text-xl font-medium text-brand-black flex items-center gap-2">
                <span className="w-6 h-[1px] bg-brand-darkgray/30"></span>
                Options avancées
              </h3>
              {advancedOpen ? <ChevronUp className="w-5 h-5 text-brand-darkgray/50" /> : <ChevronDown className="w-5 h-5 text-brand-darkgray/50" />}
            </button>

            <AnimatePresence>
              {advancedOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 md:p-8 pt-0 space-y-6 border-t border-brand-lightgray/10">
                    {/* Objectifs spécifiques */}
                    <div className="space-y-2">
                      <label className="text-sm font-light text-brand-darkgray flex items-center gap-2">
                        <Target className="w-4 h-4 text-brand-burgundy/70" />
                        Objectifs spécifiques (Appuyez sur Entrée)
                      </label>
                      <input 
                        type="text"
                        value={currentObjective}
                        onChange={(e) => setCurrentObjective(e.target.value)}
                        onKeyDown={handleAddObjective}
                        placeholder="Ex: Comprendre l'addition..."
                        className="w-full bg-brand-offwhite/50 border border-brand-lightgray/30 rounded-[4px] py-3 px-4 text-brand-black focus:outline-none focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy transition-colors placeholder:text-brand-darkgray/30"
                      />
                      {formData.objectives.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {formData.objectives.map(obj => (
                            <span key={obj} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-burgundy/10 text-brand-burgundy text-xs font-medium border border-brand-burgundy/20">
                              {obj}
                              <button onClick={() => removeObjective(obj)} className="hover:text-brand-burgundy/70">
                                &times;
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Type d'activités */}
                    <div className="space-y-3">
                      <label className="text-sm font-light text-brand-darkgray flex items-center gap-2">
                        <Activity className="w-4 h-4 text-brand-burgundy/70" />
                        Type d'activités
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {activityOptions.map(activity => (
                          <label key={activity} className="flex items-center gap-3 cursor-pointer group">
                            <div className={cn(
                              "w-5 h-5 rounded-[2px] border flex items-center justify-center transition-colors",
                              formData.activityTypes.includes(activity) 
                                ? "bg-brand-burgundy border-brand-burgundy text-white" 
                                : "border-brand-lightgray/50 bg-brand-offwhite/50 group-hover:border-brand-burgundy/50"
                            )}>
                              {formData.activityTypes.includes(activity) && <Check className="w-3 h-3" />}
                            </div>
                            <span className="text-sm text-brand-black font-light">{activity}</span>
                            <input 
                              type="checkbox" 
                              className="hidden"
                              checked={formData.activityTypes.includes(activity)}
                              onChange={() => toggleActivity(activity)}
                            />
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Nombre d'exercices */}
                      <div className="space-y-2">
                        <label className="text-sm font-light text-brand-darkgray flex items-center gap-2">
                          <Hash className="w-4 h-4 text-brand-burgundy/70" />
                          Nombre d'exercices : <span className="font-medium text-brand-black">{formData.exerciseCount}</span>
                        </label>
                        <input 
                          type="range"
                          min="1"
                          max="10"
                          step="1"
                          value={formData.exerciseCount}
                          onChange={(e) => handleInputChange('exerciseCount', parseInt(e.target.value))}
                          className="w-full accent-brand-burgundy"
                        />
                      </div>

                      {/* Difficulté */}
                      <div className="space-y-3">
                        <label className="text-sm font-light text-brand-darkgray flex items-center gap-2">
                          <BarChart className="w-4 h-4 text-brand-burgundy/70" />
                          Difficulté
                        </label>
                        <div className="flex gap-2">
                          {difficultyOptions.map(diff => (
                            <button
                              key={diff}
                              onClick={() => handleInputChange('difficulty', diff)}
                              className={cn(
                                "flex-1 py-2 px-3 rounded-[4px] text-xs font-medium border transition-all",
                                formData.difficulty === diff
                                  ? "bg-brand-burgundy text-white border-brand-burgundy shadow-sm"
                                  : "bg-brand-offwhite/50 text-brand-darkgray border-brand-lightgray/30 hover:border-brand-burgundy/30"
                              )}
                            >
                              {diff}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          <Button 
            onClick={() => onGenerate(formData)}
            className="w-full py-4 text-lg shadow-elegant hover:shadow-elegant-hover transition-all duration-300 flex justify-center items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Générer la fiche
          </Button>
        </div>
      </div>

      {/* Right Column - Live Preview (40%) */}
      <div className="hidden lg:block lg:w-[40%] h-[calc(100vh-8rem)] sticky top-8">
        <div className="bg-white w-full h-full rounded-[4px] shadow-elegant border border-brand-lightgray/20 p-8 flex flex-col overflow-hidden relative">
          {/* Subtle grid background for the preview area */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />
          
          <div className="relative z-10 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-8 border-b border-brand-lightgray/20 pb-6">
              <div>
                <h4 className="font-serif text-2xl text-brand-black mb-2">
                  {formData.theme || "Titre de la leçon"}
                </h4>
                <div className="flex gap-3 text-xs font-medium text-brand-darkgray/60 uppercase tracking-wider">
                  <span>{formData.subject || "Matière"}</span>
                  <span>•</span>
                  <span>{formData.level || "Niveau"}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-brand-offwhite rounded-full text-xs font-medium text-brand-darkgray border border-brand-lightgray/30">
                  {formData.duration} min
                </span>
              </div>
            </div>

            <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2 opacity-80">
              {/* Preview Content Blocks */}
              <div className="space-y-2">
                <div className="h-4 w-1/3 bg-brand-lightgray/30 rounded-sm animate-pulse" />
                <div className="h-3 w-full bg-brand-lightgray/20 rounded-sm" />
                <div className="h-3 w-5/6 bg-brand-lightgray/20 rounded-sm" />
              </div>

              {formData.objectives.length > 0 && (
                <div className="space-y-3">
                  <h5 className="text-sm font-medium text-brand-black">Objectifs</h5>
                  <ul className="space-y-2">
                    {formData.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-brand-darkgray">
                        <span className="w-1 h-1 rounded-full bg-brand-burgundy mt-1.5 shrink-0" />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-4 mt-8">
                <div className="h-4 w-1/4 bg-brand-lightgray/30 rounded-sm" />
                <div className="p-4 border border-brand-lightgray/20 rounded-sm bg-brand-offwhite/30 space-y-3">
                  <div className="h-3 w-full bg-brand-lightgray/20 rounded-sm" />
                  <div className="h-3 w-4/5 bg-brand-lightgray/20 rounded-sm" />
                </div>
                {Array.from({ length: Math.min(formData.exerciseCount, 3) }).map((_, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-brand-lightgray/20 flex items-center justify-center shrink-0 text-[10px] text-brand-darkgray font-medium">
                      {i + 1}
                    </div>
                    <div className="space-y-2 flex-1 pt-1">
                      <div className="h-2 w-full bg-brand-lightgray/20 rounded-sm" />
                      <div className="h-2 w-2/3 bg-brand-lightgray/20 rounded-sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-brand-lightgray/20 flex justify-between items-center text-[10px] text-brand-darkgray/40 uppercase tracking-widest">
              <span>EduPlan AI</span>
              <span>Aperçu en direct</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
