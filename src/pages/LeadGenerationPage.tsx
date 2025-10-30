import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { StatCard } from '../components/StatCard';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { Target, TrendingUp, Users, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

// SEO Meta
// Title: Lead Generation & Performance Advertising | Google Ads, Meta, LinkedIn
// Description: Genera lead qualificati con campagne data-driven su Google, Meta, LinkedIn e TikTok. Modelli CPL, CPA e performance-based.

export const LeadGenerationPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const channels = [
    {
      icon: '🔍',
      name: 'Google Ads',
      description: 'Search, Display, Performance Max per intercettare la domanda consapevole'
    },
    {
      icon: '📘',
      name: 'Meta Ads',
      description: 'Facebook e Instagram per domanda latente e retargeting avanzato'
    },
    {
      icon: '💼',
      name: 'LinkedIn Ads',
      description: 'Lead Generation B2B con targeting professionale preciso'
    },
    {
      icon: '🎵',
      name: 'TikTok Ads',
      description: 'Video ads per audience giovani e trend-driven'
    }
  ];

  const approach = [
    {
      title: 'Analisi e Strategia',
      items: [
        'Definizione ICP (Ideal Customer Profile)',
        'Analisi competitor e benchmark di settore',
        'Keyword research e audience building',
        'Stima volumi e CPL attesi per canale'
      ]
    },
    {
      title: 'Setup Campagne',
      items: [
        'Configurazione tracking (GA4, GTM, pixel)',
        'Creazione landing page ottimizzate',
        'Setup campagne multi-canale',
        'Implementazione form e lead magnet'
      ]
    },
    {
      title: 'Ottimizzazione Continua',
      items: [
        'Bid strategy optimization',
        'A/B test su creatività e messaggi',
        'Audience expansion e lookalike',
        'Retargeting multi-step'
      ]
    },
    {
      title: 'Reporting & Insights',
      items: [
        'Dashboard real-time con KPI principali',
        'Attribution multi-touch',
        'Lead quality scoring',
        'Raccomandazioni strategiche mensili'
      ]
    }
  ];

  const features = [
    {
      icon: Target,
      title: 'Targeting Avanzato',
      description: 'Lookalike, custom audiences, intent signals e remarketing multi-step'
    },
    {
      icon: TrendingUp,
      title: 'Landing Page Ottimizzate',
      description: 'Design, copy e CRO per massimizzare il conversion rate'
    },
    {
      icon: Users,
      title: 'Lead Nurturing',
      description: 'Email automation e follow-up per aumentare la conversion'
    },
    {
      icon: Zap,
      title: 'Integrazione CRM',
      description: 'Connessione real-time con HubSpot, Salesforce, Pipedrive e altri'
    },
    {
      icon: CheckCircle2,
      title: 'Lead Quality Scoring',
      description: 'Validazione, enrichment e scoring automatico dei lead'
    },
    {
      icon: TrendingUp,
      title: 'Reporting Avanzato',
      description: 'Dashboard real-time e report mensili con insights azionabili'
    }
  ];

  const faqs = [
    {
      question: 'Quale CPL posso aspettarmi?',
      answer: 'Il CPL (Cost Per Lead) varia significativamente in base a settore, target, competitività e canale. In media lavoriamo con CPL che vanno da €15 per settori B2C a €80-150 per B2B complessi. Forniamo sempre benchmark di settore durante l\'analisi iniziale.'
    },
    {
      question: 'Offrite modelli di pricing performance-based?',
      answer: 'Sì, dove applicabile offriamo modelli PPL (Pay Per Lead) o CPA (Cost Per Acquisition). Questo è possibile dopo una fase iniziale di test per validare i volumi e la qualità dei lead. Richiedi una valutazione personalizzata.'
    },
    {
      question: 'Quanto tempo serve per vedere risultati?',
      answer: 'Le prime conversioni arrivano solitamente entro 2-4 settimane. L\'ottimizzazione delle campagne richiede 60-90 giorni per raccogliere dati sufficienti e stabilizzare le performance. Il miglioramento è continuo nei mesi successivi.'
    },
    {
      question: 'Come garantite la qualità dei lead?',
      answer: 'Implementiamo lead scoring, form validation, filtri anti-spam e collaboriamo strettamente con il tuo team sales per definire criteri di qualificazione. Monitoriamo costantemente il tasso di conversione lead-to-customer.'
    },
    {
      question: 'Integrate i lead con il nostro CRM?',
      answer: 'Assolutamente sì. Integriamo i lead con il tuo CRM (HubSpot, Salesforce, Pipedrive, ecc.) in tempo reale, con enrichment dati e assegnazione automatica al sales owner corretto.'
    }
  ];

  return (
    <div>
      <Breadcrumb items={[
        { label: t('nav.services'), path: '/servizi' },
        { label: t('servicesMenu.leadGeneration') }
      ]} />

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="mb-4">{t('leadGen.hero.title')}</h1>
              <p className="text-[var(--muted)] mb-6">
                {t('leadGen.hero.subtitle')}
              </p>
              <Link to="/contatti">
                <Button size="lg" className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
                  {t('common.contactUs')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatCard value="350k+" label={t('leadGen.results.leads')} />
              <StatCard value="-32%" label={t('leadGen.results.cpl')} />
              <StatCard value="4.2x" label={t('leadGen.results.quality')} />
              <StatCard value="94%" label={t('leadGen.results.roi')} />
            </div>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="mb-3">{t('leadGen.channels.title')}</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Campagne multi-canale orchestrate per massimizzare reach e performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <div 
                key={index}
                className="rounded-2xl p-6 text-center transition-all hover:shadow-lg"
                style={{ 
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--border)'
                }}
              >
                <div className="text-4xl mb-3">{channel.icon}</div>
                <h4 className="mb-2">{channel.name}</h4>
                <small className="text-[var(--muted)] block">{channel.description}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="mb-3">Il nostro approccio</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Metodologia data-driven in 4 step per risultati misurabili
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((phase, index) => (
              <div 
                key={index}
                className="rounded-2xl p-6"
                style={{ 
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)'
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">{index + 1}</span>
                  </div>
                  <h4>{phase.title}</h4>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-2)] mt-0.5 flex-shrink-0" />
                      <small className="text-[var(--muted)]">{item}</small>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="mb-3">Cosa include il servizio</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Soluzione completa dalla strategia all'ottimizzazione continua
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 rounded-2xl transition-all hover:shadow-lg"
                style={{ 
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--border)'
                }}
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h5 className="mb-1">{feature.title}</h5>
                  <small className="text-[var(--muted)] block">
                    {feature.description}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="mb-3">Domande Frequenti</h2>
              <p className="text-[var(--muted)]">
                Tutto quello che devi sapere sulla lead generation
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="rounded-xl px-6"
                  style={{ 
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h4>{faq.question}</h4>
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--muted)]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Inizia a generare lead qualificati</h2>
            <h3 className="text-xl text-[var(--muted)] mb-8">
              Richiedi un'analisi gratuita del tuo potenziale di lead generation. 
              Ti mostreremo volumi stimati, CPL e strategie consigliate.
            </h3>
            <Link to="/contatti">
              <Button size="lg" className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
                Richiedi analisi gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <h4 className="sr-only">Call to action per richiedere analisi</h4>
          </div>
        </div>
      </section>
    </div>
  );
};
