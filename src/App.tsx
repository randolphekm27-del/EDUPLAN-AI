/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { CreatePlan } from './pages/CreatePlan';
import { CreatePrompt } from './pages/CreatePrompt';
import { CreateForm } from './pages/CreateForm';
import { CreateTransform } from './pages/CreateTransform';
import { Editor } from './pages/Editor';
import { CreateSequence } from './pages/CreateSequence';
import { SequenceView } from './pages/SequenceView';
import { Library } from './pages/Library';
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './pages/AuthPage';
import { Sequences } from './pages/Sequences';
import { Shared } from './pages/Shared';
import { Stats } from './pages/Stats';
import { Settings } from './pages/Settings';
import { Pricing } from './pages/Pricing';
import { NotificationProvider } from './hooks/useNotification';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'auth' | 'app'>('landing');
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleNavigateToAuth = () => {
    setCurrentView('auth');
  };

  const handleLogin = () => {
    setCurrentView('app');
  };

  const renderContent = () => {
    if (currentView === 'landing') {
      return <LandingPage onEnterApp={handleNavigateToAuth} />;
    }

    if (currentView === 'auth') {
      return <AuthPage onLogin={handleLogin} onBack={() => setCurrentView('landing')} />;
    }

    return (
      <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
        {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} />}
        {activeTab === 'create' && <CreatePlan setActiveTab={setActiveTab} />}
        {activeTab === 'create-prompt' && <CreatePrompt setActiveTab={setActiveTab} />}
        {activeTab === 'create-form' && (
          <CreateForm 
            onGenerate={(data) => {
              if (data.mode === 'prompt') {
                setActiveTab('create-prompt');
              } else {
                console.log(data);
                setActiveTab('editor');
              }
            }} 
          />
        )}
        {activeTab === 'create-transform' && (
          <CreateTransform 
            onTransform={(content) => {
              console.log(content);
              setActiveTab('editor');
            }} 
          />
        )}
        {activeTab === 'editor' && <Editor />}
        {activeTab === 'library' && <Library />}
        {activeTab === 'sequences' && <Sequences setActiveTab={setActiveTab} />}
        {activeTab === 'create-sequence' && <CreateSequence setActiveTab={setActiveTab} />}
        {activeTab === 'sequence-view' && (
          <SequenceView 
            onBack={() => setActiveTab('sequences')}
            onGenerateSheet={() => setActiveTab('create-prompt')}
          />
        )}
        {activeTab === 'shared' && <Shared />}
        {activeTab === 'stats' && <Stats />}
        {activeTab === 'settings' && <Settings />}
        {activeTab === 'pricing' && <Pricing />}
      </Layout>
    );
  };

  return (
    <NotificationProvider>
      {renderContent()}
    </NotificationProvider>
  );
}
