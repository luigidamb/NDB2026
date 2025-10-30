import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { StatCard } from '../components/StatCard';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { BrainCircuit, Database, Zap, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';

// SEO Meta
// Title: Martech & AI | Marketing Automation, CRM, Lead Scoring Predittivo
// Description: Stack tecnologico avanzato con CRM, AI e data orchestration per automatizzare, personalizzare e scalare le attività di marketing.

export const MartechAIPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  
  const solutions = [
    {
      icon: Database,
      color: 'var(--accent-1)',
      title: 'CRM & Marketing Automation',
      description: 'Implementazione e ottimizzazione di HubSpot, Salesforce, ActiveCampaign e Marketo per automatizzare lead nurturing, email marketing e sales enablement.',
      features: [
        'Setup e configurazione CRM',
        'Workflow automation',
        'Email nurturing multi-step',
        'Sales & marketing alignment'
      ]
    },
    {
      icon: BrainCircuit,
      color: 'var(--accent-rose)',
      title: 'Lead Scoring Predittivo',
      description: 'Algoritmi di machine learning per identificare i lead con maggiore probabilità di conversione e prioritizzare l\'attività commerciale.',
      features: [
        'Modelli predittivi custom',
        'Scoring comportamentale e firmografico',
        'Integrazione CRM real-time',
        'Dashboard prioritizzazione lead'
      ]
    },
    {
      icon: Bot,
      color: 'var(--accent-2)',
      title: 'Chatbot AI Conversazionali',
      description: 'Assistenti virtuali basati su LLM per qualificare lead 24/7, rispondere a domande e prenotare appuntamenti in modo naturale.',
      features: [
        'Natural language processing',
        'Qualificazione lead automatica',
        'Integrazione CRM e calendar',
        'Training su contenuti aziendali'
      ]
    },
    {
      icon: Zap,
      color: 'var(--success)',
      title: 'Data Orchestration & CDP',
      description: 'Unificazione dati da tutti i touchpoint (web, ads, CRM, email) per una customer view completa e attivazione cross-canale.',
      features: [
        'Customer Data Platform',
        'Segmentazione avanzata',
        'Data enrichment',
        'Attivazione audience multi-canale'
      ]
    }
  ];

  const tools = [
    'HubSpot',
    'Salesforce',
    'ActiveCampaign',
    'Marketo',
    'Segment',
    'Google Tag Manager',
    'Zapier',
    'Make'
  ];

  return (
    <div>
      <Breadcrumb items={[
        { label: t('nav.services'), path: '/servizi' },
        { label: t('servicesMenu.martechAi') }
      ]} />

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="mb-4">Martech & AI per la Conversione</h1>
              <p className="text-[var(--muted)] mb-6">
                Stack tecnologico avanzato per automatizzare, personalizzare e scalare le tue attività di marketing con CRM, AI e data orchestration.
              </p>
              <Link to="/contatti">
                <Button size="lg" className="bg-gradient-to-r from-[var(--accent-rose)] to-[var(--accent-1)]">
                  Valuta la tua maturità Martech
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatCard value="85%" label="Automazione processi" />
              <StatCard value="+120%" label="Lead scoring accuracy" />
              <StatCard value="40h/mese" label="Tempo risparmiato" />
              <StatCard value="15+" label="Integrazioni attive" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="mb-3">Le nostre soluzioni</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Tecnologie AI e automation per ottimizzare ogni fase del customer journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="rounded-2xl p-6 transition-all hover:shadow-lg" 
                style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <solution.icon className="w-10 h-10 mb-3" style={{ color: solution.color }} />
                <h3 className="mb-3">{solution.title}</h3>
                <p className="text-[var(--muted)] mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-2)] mt-0.5 flex-shrink-0" />
                      <small className="text-[var(--muted)]">{feature}</small>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div 
            className="rounded-2xl p-12 text-center" 
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <h2 className="mb-4">Stack tecnologico</h2>
            <h3 className="text-[var(--muted)] mb-8 max-w-2xl mx-auto">
              Lavoriamo con i migliori tool del mercato per garantire integrazione e scalabilità
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-[var(--muted)]">
              {tools.map((tool, index) => (
                <React.Fragment key={tool}>
                  <h4 className="hover:text-[var(--accent-2)] transition-colors">
                    {tool}
                  </h4>
                  {index < tools.length - 1 && <span>•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Potenzia il tuo stack Martech</h2>
            <h3 className="text-xl text-[var(--muted)] mb-8">
              Richiedi una valutazione della tua maturità Martech e scopri come automatizzare e scalare il marketing.
            </h3>
            <Link to="/contatti">
              <Button size="lg" className="bg-gradient-to-r from-[var(--accent-rose)] to-[var(--accent-1)]">
                Richiedi valutazione
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <h4 className="sr-only">Call to action per richiedere valutazione Martech</h4>
          </div>
        </div>
      </section>
    </div>
  );
};
