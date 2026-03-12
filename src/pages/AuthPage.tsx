import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Mail, Lock, User, GraduationCap, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Select } from '../components/Select';

interface AuthPageProps {
  onLogin: () => void;
  onBack?: () => void;
}

export function AuthPage({ onLogin, onBack }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    onLogin();
  };

  return (
    <div className="min-h-screen flex font-sans text-brand-black bg-brand-offwhite selection:bg-brand-burgundy/20">
      {/* Left Column - Form (60%) */}
      <div className="w-full lg:w-[60%] flex flex-col relative">
        {/* Logo */}
        <div className="absolute top-8 left-8 sm:top-12 sm:left-12 flex items-center gap-4">
          {onBack && (
            <button 
              onClick={onBack}
              className="p-2 -ml-2 text-brand-darkgray/60 hover:text-brand-burgundy hover:bg-brand-burgundy/5 rounded-full transition-colors"
              title="Retour à l'accueil"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-brand-burgundy flex items-center justify-center shadow-elegant">
              <FileText className="w-4 h-4 text-brand-offwhite" />
            </div>
            <span className="font-serif text-xl tracking-wide font-semibold text-brand-black">EduPlan AI</span>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 sm:px-12 md:px-24 py-24">
          <div className="w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-serif text-4xl font-semibold mb-2 text-brand-black">
                {isLogin ? 'Connexion' : 'Créer un compte'}
              </h1>
              <p className="text-brand-darkgray/80 font-light mb-10">
                {isLogin 
                  ? 'Ravi de vous revoir. Accédez à vos fiches de préparation.' 
                  : 'Rejoignez l\'excellence pédagogique et gagnez un temps précieux.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <AnimatePresence mode="wait">
                  {!isLogin && (
                    <motion.div
                      key="register-fields"
                      initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                      exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-5"
                    >
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-darkgray/50" />
                        <Input 
                          placeholder="Nom complet" 
                          className="pl-10 bg-white/60 focus:bg-white" 
                          required={!isLogin}
                        />
                      </div>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-darkgray/50 z-10" />
                        <Select className="pl-10 bg-white/60 focus:bg-white" required={!isLogin}>
                          <option value="">Niveau d'enseignement</option>
                          <option value="maternelle">Maternelle</option>
                          <option value="elementaire">Élémentaire</option>
                          <option value="college">Collège</option>
                          <option value="lycee">Lycée</option>
                          <option value="superieur">Supérieur</option>
                        </Select>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-darkgray/50" />
                  <Input 
                    type="email" 
                    placeholder="Adresse email" 
                    className="pl-10 bg-white/60 focus:bg-white" 
                    required 
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-darkgray/50" />
                  <Input 
                    type="password" 
                    placeholder="Mot de passe" 
                    className="pl-10 bg-white/60 focus:bg-white" 
                    required 
                  />
                </div>

                <AnimatePresence mode="wait">
                  {!isLogin && (
                    <motion.div
                      key="confirm-password"
                      initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                      exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-darkgray/50" />
                        <Input 
                          type="password" 
                          placeholder="Confirmer le mot de passe" 
                          className="pl-10 bg-white/60 focus:bg-white" 
                          required={!isLogin}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-between pt-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-4 h-4 border border-brand-lightgray rounded-[3px] group-hover:border-brand-burgundy transition-colors">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="absolute inset-0 bg-brand-burgundy scale-0 peer-checked:scale-100 transition-transform rounded-[2px]" />
                    </div>
                    <span className="text-sm text-brand-darkgray/80 font-light select-none">Se souvenir de moi</span>
                  </label>
                  
                  {isLogin && (
                    <a href="#" className="text-sm text-brand-darkgray hover:text-brand-burgundy font-medium transition-colors">
                      Mot de passe oublié ?
                    </a>
                  )}
                </div>

                <Button type="submit" className="w-full mt-6 text-base py-6">
                  {isLogin ? 'Se connecter' : 'Créer mon compte'}
                </Button>
              </form>

              <div className="mt-8">
                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-brand-lightgray/30"></div>
                  <span className="flex-shrink-0 mx-4 text-brand-darkgray/50 text-sm font-light">ou</span>
                  <div className="flex-grow border-t border-brand-lightgray/30"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Button variant="outline" type="button" className="w-full bg-white/50 hover:bg-white border-brand-lightgray/50 text-brand-black/80 font-medium flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" type="button" className="w-full bg-white/50 hover:bg-white border-brand-lightgray/50 text-brand-black/80 font-medium flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 21 21">
                      <path fill="#f25022" d="M1 1h9v9H1z" />
                      <path fill="#00a4ef" d="M1 11h9v9H1z" />
                      <path fill="#7fba00" d="M11 1h9v9h-9z" />
                      <path fill="#ffb900" d="M11 11h9v9h-9z" />
                    </svg>
                    Microsoft
                  </Button>
                </div>
              </div>

              <p className="mt-10 text-center text-sm text-brand-darkgray/80 font-light">
                {isLogin ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}
                <button 
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-brand-burgundy font-medium hover:underline focus:outline-none"
                >
                  {isLogin ? "S'inscrire" : "Se connecter"}
                </button>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right Column - Visual (40%) */}
      <div className="hidden lg:block lg:w-[40%] relative overflow-hidden bg-brand-darkgray">
        {/* Abstract Image Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop")',
          }}
        />
        
        {/* Elegant Overlays */}
        <div className="absolute inset-0 bg-brand-darkgray/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-darkgray/80 via-brand-burgundy/40 to-brand-burgundy/80 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />

        {/* Decorative Geometric Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-12 h-1 bg-white/30 mb-8 rounded-full" />
            <h2 className="font-serif text-4xl font-semibold mb-4 leading-tight">
              L'art d'enseigner,<br />sublimé par l'IA.
            </h2>
            <p className="text-white/70 font-light text-lg max-w-md leading-relaxed">
              Rejoignez des milliers d'enseignants qui ont choisi l'élégance et l'efficacité pour la préparation de leurs cours.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
