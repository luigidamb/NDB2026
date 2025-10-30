import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { StatCard } from '../components/StatCard';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { Target, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';

export const ChiSiamoPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const pillars = [
    {
      icon: Target,
      title: 'Data-Driven',
      description: 'Ogni decisione è supportata da dati, analisi e test scientifici. Mai improvvisazione.'
    },
    {
      icon: TrendingUp,
      title: 'Performance First',
      description: 'Ci concentriamo su KPI che impattano il business: lead, vendite, ROI. Zero vanity metrics.'
    },
    {
      icon: Users,
      title: 'Team Dedicato',
      description: 'Specialist certificati che lavorano come estensione del tuo team, con trasparenza totale.'
    },
    {
      icon: Award,
      title: 'Test & Learn',
      description: 'Ottimizzazione continua attraverso A/B test, iterazioni rapide e cultura dell\'apprendimento.'
    }
  ];

  const method = [
    {
      number: '01',
      title: 'Analisi',
      description: 'Audit completo di traffico, conversioni, stack tecnologico e competitor per identificare le opportunità.'
    },
    {
      number: '02',
      title: 'Strategia',
      description: 'Roadmap personalizzata con KPI chiari, budget allocation ottimale e piano di test prioritizzato.'
    },
    {
      number: '03',
      title: 'Implementazione',
      description: 'Setup campagne, CRM, tracking, landing e automazioni. Sprint agili con QA rigoroso.'
    },
    {
      number: '04',
      title: 'Ottimizzazione',
      description: 'Monitoraggio real-time, A/B test continuo, analisi dati e iterazioni per migliorare le performance.'
    }
  ];

  return (
    <div>
      <Breadcrumb items={[{ label: 'Chi Siamo' }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="mb-4">Chi Siamo</h1>
            <p className="text-[var(--muted)]">
              Dal 2001 aiutiamo aziende B2B e B2C a crescere attraverso strategie digitali data-driven, 
              Martech & AI e performance marketing. Non siamo una classica agenzia: siamo partner di lungo periodo 
              focalizzati su risultati misurabili.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <StatCard value="20+" label="Anni di esperienza" />
            <StatCard value="350k+" label="Lead generati" />
            <StatCard value="+84%" label="ROI medio clienti" />
            <StatCard value="94%" label="Client retention" />
          </div>

          <h2 className="mb-8">La nostra mission</h2>
          <p className="text-[var(--muted)] mb-16 max-w-4xl">
            Trasformare i dati in decisioni, il traffico in clienti e gli investimenti in crescita sostenibile. 
            Crediamo in un marketing scientifico, trasparente e orientato ai risultati di business, non alle vanity metrics.
          </p>

          <h2 className="mb-8">I nostri pillar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="mb-2">{pillar.title}</h3>
                  <small className="text-[var(--muted)] block">{pillar.description}</small>
                </div>
              );
            })}
          </div>

          <div className="rounded-3xl p-8 md:p-10 mb-16" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
            <h2 className="mb-8 text-center">Il Metodo NDB</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {method.map((step, i) => (
                <div key={i} className="relative">
                  <div className="text-5xl mb-3 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent opacity-50">
                    {step.number}
                  </div>
                  <h3 className="mb-2">{step.title}</h3>
                  <small className="text-[var(--muted)] block">{step.description}</small>
                  {i < method.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-[var(--accent-2)] to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <h2 className="mb-12">Stack tecnologico</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
              <h3 className="mb-4">Advertising & Analytics</h3>
              <div className="space-y-2 text-sm text-[var(--muted)]">
                <h4>• Google Ads & Analytics 4</h4>
                <h4>• Meta Ads Manager</h4>
                <h4>• LinkedIn Campaign Manager</h4>
                <h4>• TikTok Ads</h4>
                <h4>• Google Tag Manager</h4>
              </div>
            </div>

            <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
              <h3 className="mb-4">Martech & CRM</h3>
              <div className="space-y-2 text-sm text-[var(--muted)]">
                <h4>• HubSpot (Diamond Partner)</h4>
                <h4>• Salesforce</h4>
                <h4>• ActiveCampaign</h4>
                <h4>• Marketo</h4>
                <h4>• Segment CDP</h4>
              </div>
            </div>

            <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
              <h3 className="mb-4">Development & CRO</h3>
              <div className="space-y-2 text-sm text-[var(--muted)]">
                <h4>• React / Next.js</h4>
                <h4>• Shopify / WooCommerce</h4>
                <h4>• Optimizely / VWO</h4>
                <h4>• Hotjar / FullStory</h4>
                <h4>• Webflow / WordPress</h4>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-12 bg-gradient-to-br from-[var(--accent-1)]/10 to-[var(--accent-2)]/10 text-center" style={{ border: '1px solid var(--border)' }}>
            <h3 className="mb-4">Partnership & Certificazioni</h3>
            <p className="text-[var(--muted)] mb-8 max-w-2xl mx-auto">
              Siamo partner certificati dei principali player del digital marketing
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div>🏆 Google Premier Partner</div>
              <div>🏆 Meta Business Partner</div>
              <div>🏆 HubSpot Diamond Partner</div>
              <div>🏆 Shopify Partner</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 text-center">
          <h2 className="mb-6">Vuoi entrare nel team?</h2>
          <p className="text-xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
            Siamo sempre alla ricerca di talenti appassionati di performance marketing, AI e Martech.
          </p>
          <Link to="/careers">
            <Button size="lg" className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
              Vedi le posizioni aperte
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
