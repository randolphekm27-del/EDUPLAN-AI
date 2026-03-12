import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, MessageSquare, FormInput, ArrowRight, CheckCircle2, Play, Menu, Check, X, ChevronDown, ChevronUp, ShieldCheck, Star } from 'lucide-react';
import { Button } from '../components/Button';
import { cn } from '../lib/utils';

interface LandingPageProps {
  onEnterApp: () => void;
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-brand-lightgray/20 rounded-[8px] bg-white overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center w-full text-left p-4 font-medium text-brand-black hover:bg-brand-offwhite/50 transition-colors"
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-brand-darkgray/50 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-brand-darkgray/50 shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 text-brand-darkgray/80 font-light text-sm leading-relaxed border-t border-brand-lightgray/10">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function LandingPage({ onEnterApp }: LandingPageProps) {
  const faqs = [
    {
      question: "Puis-je annuler mon abonnement à tout moment ?",
      answer: "Oui, l'abonnement Pro est sans engagement. Vous pouvez l'annuler à tout moment depuis vos paramètres, et vous conserverez vos avantages jusqu'à la fin de la période facturée."
    },
    {
      question: "Comment fonctionne la limite de 5 fiches en version gratuite ?",
      answer: "Avec la formule Découverte, vous pouvez générer jusqu'à 5 fiches pédagogiques par mois calendaire. Le compteur est réinitialisé le 1er de chaque mois."
    },
    {
      question: "Qu'est-ce que l'export filigrané ?",
      answer: "En version gratuite, les documents PDF générés comportent un discret filigrane 'Généré par EduPlan AI' en bas de page. La version Pro supprime ce filigrane et ajoute l'export Word (.docx)."
    },
    {
      question: "Proposez-vous des tarifs pour les écoles entières ?",
      answer: "Absolument. Notre formule Établissement permet de centraliser la facturation et d'offrir EduPlan AI à toute votre équipe pédagogique, avec une bibliothèque partagée."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-offwhite font-sans text-brand-black selection:bg-brand-burgundy/20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-brand-lightgray/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-brand-burgundy flex items-center justify-center shadow-elegant">
              <FileText className="w-4 h-4 text-brand-offwhite" />
            </div>
            <span className="font-serif text-2xl tracking-wide font-semibold text-brand-black">EduPlan AI</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-sm font-medium text-brand-black/80 hover:text-brand-burgundy transition-colors">Accueil</a>
            <a href="#fonctionnalites" className="text-sm font-medium text-brand-black/80 hover:text-brand-burgundy transition-colors">Fonctionnalités</a>
            <a href="#tarifs" className="text-sm font-medium text-brand-black/80 hover:text-brand-burgundy transition-colors">Tarifs</a>
            <button onClick={onEnterApp} className="text-sm font-medium text-brand-black/80 hover:text-brand-burgundy transition-colors">Connexion</button>
          </nav>

          <div className="flex items-center gap-4">
            <Button onClick={onEnterApp} className="hidden md:flex">
              Essayer gratuitement
            </Button>
            <button className="md:hidden p-2 text-brand-black">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="pt-40 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-semibold text-brand-black mb-6 tracking-tight">
            Préparez vos cours en quelques minutes, <span className="text-brand-darkgray italic font-light">pas en quelques heures</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-darkgray/90 mb-10 leading-relaxed font-light max-w-xl">
            Générez des fiches pédagogiques complètes avec l'intelligence artificielle. Une conception élégante pour des enseignants exigeants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={onEnterApp} className="text-base">
              Commencer gratuitement
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base border-brand-darkgray text-brand-darkgray hover:bg-brand-darkgray/5"
            >
              <Play className="w-4 h-4 mr-2" />
              Voir une démo
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Abstract UI Preview */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-lightgray/20 to-transparent rounded-full blur-3xl opacity-50" />
          <div className="relative w-full max-w-md glass-panel rounded-lg p-8 shadow-2xl border border-white/40 transform rotate-2 hover:rotate-0 transition-transform duration-700">
            <div className="flex items-center justify-between mb-6 border-b border-brand-lightgray/30 pb-4">
              <div className="w-24 h-4 bg-brand-lightgray/30 rounded-sm" />
              <div className="w-8 h-8 rounded-full bg-brand-burgundy/10 flex items-center justify-center">
                <FileText className="w-4 h-4 text-brand-burgundy" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-3/4 h-8 bg-brand-black/5 rounded-sm" />
              <div className="w-full h-4 bg-brand-black/5 rounded-sm" />
              <div className="w-5/6 h-4 bg-brand-black/5 rounded-sm" />
              <div className="w-full h-24 bg-brand-black/5 rounded-sm mt-6" />
              <div className="flex gap-3 mt-6">
                <div className="w-1/3 h-10 bg-brand-burgundy/10 rounded-sm" />
                <div className="w-1/3 h-10 bg-brand-lightgray/20 rounded-sm" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Three Methods Section */}
      <section id="fonctionnalites" className="py-32 px-6 bg-white/40 border-y border-brand-lightgray/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-black mb-4">Trois façons de créer vos fiches</h2>
            <div className="w-24 h-1 bg-brand-burgundy mx-auto rounded-full opacity-80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Je décris",
                desc: "Discutez naturellement avec notre IA. Expliquez votre besoin en quelques phrases, elle se charge de structurer la séance.",
                link: "Essayer le chat"
              },
              {
                icon: FormInput,
                title: "Je remplis",
                desc: "Utilisez notre formulaire guidé. Renseignez la matière, le niveau et le sujet pour obtenir une fiche standardisée instantanément.",
                link: "Essayer le formulaire"
              },
              {
                icon: FileText,
                title: "Je transforme",
                desc: "Importez un document brut (texte, article, notes). L'IA en extrait la substantifique moelle pour créer un plan de cours.",
                link: "Essayer l'import"
              }
            ].map((method, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-[#9F9A95]/10 border border-[#9F9A95]/20 rounded-lg p-10 hover:bg-[#9F9A95]/20 transition-colors duration-500 group"
              >
                <div className="w-14 h-14 rounded-full bg-white/60 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <method.icon className="w-6 h-6 text-brand-black" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-brand-black mb-4">{method.title}</h3>
                <p className="text-brand-darkgray leading-relaxed mb-8 font-light">
                  {method.desc}
                </p>
                <button onClick={onEnterApp} className="flex items-center text-brand-burgundy font-medium group-hover:gap-3 transition-all">
                  {method.link} <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-black mb-4">L'excellence dans chaque détail</h2>
          <p className="text-brand-darkgray text-lg max-w-2xl mx-auto font-light">
            Un rendu professionnel, prêt à être imprimé ou partagé avec vos collègues et inspecteurs.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-brand-burgundy/5 blur-3xl rounded-full transform scale-110" />
          
          {/* Floating Document */}
          <div className="relative bg-white rounded-xl p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-brand-lightgray/20 transform md:-rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="flex justify-between items-start border-b border-brand-lightgray/30 pb-6 mb-8">
              <div>
                <h3 className="font-serif text-3xl font-semibold text-brand-burgundy mb-2">La Révolution Française</h3>
                <p className="text-brand-darkgray font-medium">Histoire • 4ème • 55 minutes</p>
              </div>
              <div className="hidden sm:flex gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-lightgray/40" />
                <div className="w-3 h-3 rounded-full bg-brand-lightgray/40" />
                <div className="w-3 h-3 rounded-full bg-brand-lightgray/40" />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-serif text-xl font-medium mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-lightgray" /> Objectifs Pédagogiques
                </h4>
                <ul className="space-y-2 text-brand-black/80 font-light ml-7 list-disc">
                  <li>Comprendre les causes profondes de la Révolution.</li>
                  <li>Identifier les acteurs majeurs de l'année 1789.</li>
                  <li>Analyser un document historique (Cahiers de doléances).</li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif text-xl font-medium mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-lightgray" /> Déroulement
                </h4>
                <div className="bg-brand-offwhite/50 rounded-md p-4 border border-brand-lightgray/20">
                  <div className="hidden sm:grid grid-cols-12 gap-4 text-sm font-medium text-brand-darkgray border-b border-brand-lightgray/20 pb-2 mb-3">
                    <div className="col-span-2">Durée</div>
                    <div className="col-span-3">Phase</div>
                    <div className="col-span-7">Activité</div>
                  </div>
                  <div className="flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-4 text-sm text-brand-black/80 font-light mb-4 sm:mb-3 border-b sm:border-0 border-brand-lightgray/20 pb-3 sm:pb-0">
                    <div className="sm:col-span-2 text-brand-burgundy font-medium">10 min</div>
                    <div className="sm:col-span-3 font-medium">Mise en situation</div>
                    <div className="sm:col-span-7">Analyse collective d'une caricature des trois ordres. Émergence des représentations.</div>
                  </div>
                  <div className="flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-4 text-sm text-brand-black/80 font-light">
                    <div className="sm:col-span-2 text-brand-burgundy font-medium">25 min</div>
                    <div className="sm:col-span-3 font-medium">Recherche</div>
                    <div className="sm:col-span-7">Étude de documents par groupes de 4 (Cahiers de doléances). Remplissage d'un tableau de synthèse.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-32 px-6 bg-white/40 border-t border-brand-lightgray/20">
        <div className="max-w-6xl mx-auto">
          <header className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-black tracking-tight">
              Choisissez la formule qui vous convient
            </h2>
            <p className="text-xl text-brand-darkgray/80 font-medium max-w-2xl mx-auto">
              Gratuit pour découvrir, abordable pour utiliser au quotidien
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Free Plan */}
            <div className="bg-brand-offwhite border border-brand-lightgray/30 rounded-[8px] p-8 shadow-sm flex flex-col h-full">
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-medium text-brand-black mb-2">Découverte</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-brand-black">0 XOF</span>
                  <span className="text-brand-darkgray/60 font-medium">/mois</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-brand-darkgray/90 font-light">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>5 fiches par mois</span>
                </li>
                <li className="flex items-start gap-3 text-brand-darkgray/90 font-light">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Export PDF (filigrané)</span>
                </li>
                <li className="flex items-start gap-3 text-brand-darkgray/90 font-light">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Bibliothèque de base</span>
                </li>
                <li className="flex items-start gap-3 text-brand-darkgray/40 font-light">
                  <X className="w-5 h-5 text-brand-darkgray/30 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Génération de séquences</span>
                </li>
                <li className="flex items-start gap-3 text-brand-darkgray/40 font-light">
                  <X className="w-5 h-5 text-brand-darkgray/30 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Collaboration</span>
                </li>
              </ul>
              
              <Button onClick={onEnterApp} variant="outline" className="w-full bg-transparent border-brand-lightgray/50 text-brand-darkgray hover:text-brand-black hover:border-brand-darkgray/30">
                Commencer
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-[#9F9A95] rounded-[8px] p-8 shadow-2xl relative transform md:-translate-y-4 flex flex-col h-full border border-white/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-brand-burgundy text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm">
                  Populaire
                </span>
              </div>
              
              <div className="mb-8 text-white">
                <h3 className="font-serif text-2xl font-medium mb-2">Pro</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold">3000 XOF</span>
                  <span className="text-white/70 font-medium">/mois</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1 text-white">
                <li className="flex items-start gap-3 font-light">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" strokeWidth={2} />
                  <span>Fiches illimitées</span>
                </li>
                <li className="flex items-start gap-3 font-light">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" strokeWidth={2} />
                  <span>Export PDF sans filigrane</span>
                </li>
                <li className="flex items-start gap-3 font-light">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" strokeWidth={2} />
                  <span>Export Word</span>
                </li>
                <li className="flex items-start gap-3 font-light">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" strokeWidth={2} />
                  <span>Séquences complètes</span>
                </li>
                <li className="flex items-start gap-3 font-light">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" strokeWidth={2} />
                  <span>Génération d'exercices</span>
                </li>
                <li className="flex items-start gap-3 font-light">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" strokeWidth={2} />
                  <span>Collaboration (5 collègues)</span>
                </li>
              </ul>
              
              <Button onClick={onEnterApp} className="w-full bg-brand-burgundy text-white hover:bg-brand-burgundy/90 shadow-elegant hover:shadow-elegant-hover border-none">
                Choisir Pro
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-brand-offwhite border border-brand-lightgray/30 rounded-[8px] p-8 shadow-sm flex flex-col h-full">
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-medium text-brand-black mb-2">Établissement</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-brand-black">Sur devis</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-brand-darkgray/90 font-light">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Comptes illimités</span>
                </li>
                <li className="flex items-start gap-3 text-brand-darkgray/90 font-light">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Administration centralisée</span>
                </li>
                <li className="flex items-start gap-3 text-brand-darkgray/90 font-light">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Bibliothèque commune</span>
                </li>
                <li className="flex items-start gap-3 text-brand-darkgray/90 font-light">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Formation incluse</span>
                </li>
                <li className="flex items-start gap-3 text-brand-darkgray/90 font-light">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Support dédié</span>
                </li>
              </ul>
              
              <Button onClick={onEnterApp} variant="outline" className="w-full bg-transparent border-brand-lightgray/50 text-brand-darkgray hover:text-brand-black hover:border-brand-darkgray/30">
                Nous contacter
              </Button>
            </div>
          </div>

          {/* Testimonials */}
          <div className="pt-16">
            <h3 className="font-serif text-2xl font-medium text-brand-black text-center mb-8">Ils ont choisi la version Pro</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-[8px] border border-brand-lightgray/20 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />)}
                </div>
                <p className="text-brand-darkgray/80 font-light italic mb-4">
                  "EduPlan AI m'a fait gagner un temps précieux. Je passe de 2h de préparation à 20 minutes par séquence. Le passage à la version Pro a été une évidence pour moi."
                </p>
                <div>
                  <p className="font-medium text-brand-black text-sm">Sophie M.</p>
                  <p className="text-xs text-brand-darkgray/60">Professeur des écoles</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-[8px] border border-brand-lightgray/20 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />)}
                </div>
                <p className="text-brand-darkgray/80 font-light italic mb-4">
                  "La qualité des fiches générées et la possibilité de créer des séquences complètes changent la donne. C'est le meilleur investissement pour ma charge de travail."
                </p>
                <div>
                  <p className="font-medium text-brand-black text-sm">Marc D.</p>
                  <p className="text-xs text-brand-darkgray/60">Professeur d'Histoire-Géo</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto pt-16">
            <h3 className="font-serif text-2xl font-medium text-brand-black text-center mb-8">Questions fréquentes</h3>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          {/* Guarantee */}
          <div className="flex flex-col items-center justify-center text-center pt-16">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="font-serif text-xl font-medium text-brand-black mb-2">Garantie de satisfaction</h4>
            <p className="text-brand-darkgray/70 font-light max-w-md">
              Essayez la version Pro sans risque. Si vous n'êtes pas satisfait dans les 14 premiers jours, nous vous remboursons intégralement.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-darkgray text-brand-offwhite py-12 border-t border-brand-black/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 opacity-80" />
            <span className="font-serif text-xl font-semibold tracking-wide">EduPlan AI</span>
          </div>
          
          <div className="flex gap-8 text-sm font-light opacity-80">
            <a href="#" className="hover:text-white hover:opacity-100 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white hover:opacity-100 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white hover:opacity-100 transition-colors">Contact</a>
          </div>
          
          <div className="text-sm font-light opacity-60">
            © 2026 EduPlan AI. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
