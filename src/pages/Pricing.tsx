import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ChevronDown, ChevronUp, ShieldCheck, Star } from 'lucide-react';
import { Button } from '../components/Button';
import { cn } from '../lib/utils';

export function Pricing() {
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      className="max-w-6xl mx-auto space-y-16 pb-12"
    >
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-brand-black tracking-tight">
          Choisissez la formule qui vous convient
        </h1>
        <p className="text-xl text-brand-darkgray/80 font-medium max-w-2xl mx-auto">
          Gratuit pour découvrir, abordable pour utiliser au quotidien
        </p>
      </header>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Free Plan */}
        <div className="bg-brand-offwhite border border-brand-lightgray/30 rounded-[8px] p-8 shadow-sm flex flex-col h-full">
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-brand-black mb-2">Découverte</h2>
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
          
          <Button variant="outline" className="w-full bg-transparent border-brand-lightgray/50 text-brand-darkgray hover:text-brand-black hover:border-brand-darkgray/30">
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
            <h2 className="font-serif text-2xl font-medium mb-2">Pro</h2>
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
          
          <Button className="w-full bg-brand-burgundy text-white hover:bg-brand-burgundy/90 shadow-elegant hover:shadow-elegant-hover border-none">
            Choisir Pro
          </Button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-brand-offwhite border border-brand-lightgray/30 rounded-[8px] p-8 shadow-sm flex flex-col h-full">
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-brand-black mb-2">Établissement</h2>
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
          
          <Button variant="outline" className="w-full bg-transparent border-brand-lightgray/50 text-brand-darkgray hover:text-brand-black hover:border-brand-darkgray/30">
            Nous contacter
          </Button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="pt-8">
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
      <div className="max-w-3xl mx-auto pt-8">
        <h3 className="font-serif text-2xl font-medium text-brand-black text-center mb-8">Questions fréquentes</h3>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* Guarantee */}
      <div className="flex flex-col items-center justify-center text-center pt-8 pb-4">
        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
          <ShieldCheck className="w-6 h-6 text-emerald-600" />
        </div>
        <h4 className="font-serif text-xl font-medium text-brand-black mb-2">Garantie de satisfaction</h4>
        <p className="text-brand-darkgray/70 font-light max-w-md">
          Essayez la version Pro sans risque. Si vous n'êtes pas satisfait dans les 14 premiers jours, nous vous remboursons intégralement.
        </p>
      </div>
    </motion.div>
  );
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
