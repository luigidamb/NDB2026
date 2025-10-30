import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { StatCard } from '../components/StatCard';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { TrendingUp, TestTube, Eye, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

// SEO Meta
// Title: Conversion Rate Optimization (CRO) | A/B Testing e Ottimizzazione Funnel
// Description: Aumenta le conversioni del tuo sito con A/B test scientifici, analisi comportamentali e personalizzazioni dinamiche.

export const CROPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  
  const methods = [
    {
      icon: TestTube,
      color: 'var(--accent-1)',
      title: 'A/B Testing',
      description: 'Test scientifici su headline, CTA, layout, form e pricing per identificare le varianti vincenti.'
    },
    {
      icon: Eye,
      color: 'var(--accent-2)',
      title: 'Analisi Comportamentale',
      description: 'Heatmap, click tracking, session recording e analisi del funnel per capire dove perdi utenti.'
    },
    {
      icon: Sparkles,
      color: 'var(--accent-rose)',
      title: 'Personalizzazione',
      description: 'Contenuti e offerte dinamiche basate su sorgente traffico, comportamento e dati utente.'
    },
    {
      icon: TrendingUp,
      color: 'var(--success)',
      title: 'Ottimizzazione Continua',
      description: 'Iterazioni mensili con roadmap di test prioritizzata per uplift incrementale costante.'
    }
  ];

  const testAreas = [
    'Headline e value proposition',
    'Call-to-action (copy, colore, posizione)',
    'Form (numero campi, layout, copy)',
    'Layout e architettura informazione',
    'Immagini, video e social proof',
    'Pricing e offerte promozionali',
    'Checkout flow (e-commerce)',
    'Navigation e menu'
  ];

  const process = [
    {
      step: '1',
      title: 'Audit & Analisi',
      description: 'Analizziamo analytics, heatmap e funnel per identificare i colli di bottiglia.'
    },
    {
      step: '2',
      title: 'Ipotesi e Prioritizzazione',
      description: 'Definiamo ipotesi di test con framework ICE (Impact, Confidence, Ease).'
    },
    {
      step: '3',
      title: 'Design & Implementazione',
      description: 'Creiamo le varianti e configuriamo i test con strumenti enterprise.'
    },
    {
      step: '4',
      title: 'Analisi & Iteration',
      description: 'Monitoriamo i risultati, dichiariamo i vincitori e implementiamo nuove iterazioni.'
    }
  ];

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Servizi', path: '/servizi' },
        { label: 'CRO' }
      ]} />

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="mb-4">Conversion Rate Optimization</h1>
              <p className="text-[var(--muted)] mb-6">
                Trasforma più visitatori in clienti attraverso test scientifici, analisi comportamentali e ottimizzazioni continue del funnel.
              </p>
              <Link to="/contatti">
                <Button size="lg" className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
                  Richiedi CRO Audit Gratuito
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatCard value="+47%" label="Conversioni medie" />
              <StatCard value="280+" label="Test eseguiti" />
              <StatCard value="€2.4M" label="Revenue incrementale" />
              <StatCard value="92%" label="Test vincenti" />
            </div>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="mb-3">Come ottimizziamo le tue conversioni</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Approccio data-driven con metodologie scientifiche e strumenti enterprise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methods.map((method, index) => (
              <div 
                key={index}
                className="rounded-2xl p-6 transition-all hover:shadow-lg"
                style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <method.icon className="w-10 h-10 mb-3" style={{ color: method.color }} />
                <h3 className="mb-2">{method.title}</h3>
                <small className="text-[var(--muted)] block">
                  {method.description}
                </small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Areas & Process */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Test Areas */}
            <div>
              <div className="mb-6">
                <h2 className="mb-3">Cosa testiamo</h2>
                <p className="text-[var(--muted)]">
                  Ogni elemento del tuo sito può essere ottimizzato per aumentare le conversioni
                </p>
              </div>
              <ul className="space-y-2">
                {testAreas.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-2)] mt-0.5 flex-shrink-0" />
                    <small className="text-[var(--muted)]">{item}</small>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <div className="mb-6">
                <h2 className="mb-3">Il nostro processo</h2>
                <p className="text-[var(--muted)]">
                  Metodologia scientifica in 4 step per risultati misurabili e ripetibili
                </p>
              </div>
              <div className="space-y-4">
                {process.map((item, index) => (
                  <div 
                    key={index}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center">
                        <span className="text-white text-sm">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-1">{item.title}</h3>
                      <small className="text-[var(--muted)] block">
                        {item.description}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Inizia a ottimizzare le tue conversioni</h2>
            <h3 className="text-xl text-[var(--muted)] mb-8">
              Richiedi un CRO Audit gratuito. Ti mostreremo le opportunità di ottimizzazione più impattanti.
            </h3>
            <Link to="/contatti">
              <Button size="lg" className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
                Richiedi audit gratuito
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <h4 className="sr-only">Call to action per richiedere audit CRO</h4>
          </div>
        </div>
      </section>
    </div>
  );
};
