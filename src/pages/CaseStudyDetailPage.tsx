import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { ArrowRight, Target, TrendingUp, Users } from 'lucide-react';

export const CaseStudyDetailPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const { id } = useParams();

  // Mock data - in produzione verrebbe da un backend
  const caseData = {
    title: '+120% Test Drive in 90 Giorni',
    client: 'Dealer Network Automotive',
    category: 'Automotive',
    year: '2024',
    objective: 'Aumentare le richieste di test drive e preventivi NLT per una rete di 15 concessionarie sul territorio nazionale.',
    solution: 'Abbiamo implementato un portale NLT con configuratore veicoli, campagne Google Ads geo-localizzate per ogni sede e automazioni CRM per il follow-up lead.',
    results: [
      { label: 'Test Drive richiesti', value: '+120%', icon: Target },
      { label: 'Costo per Lead', value: '-28%', icon: TrendingUp },
      { label: 'Conversion Rate', value: '+85%', icon: Users }
    ],
    metrics: [
      { label: 'Lead generati', value: '2.850', period: '90 giorni' },
      { label: 'CPL medio', value: '€16,50', period: 'vs €22,90 pre-campagna' },
      { label: 'Tasso chiusura', value: '18%', period: 'vs 11% medio settore' }
    ],
    stack: ['Google Ads', 'Meta Ads', 'HubSpot CRM', 'React', 'Google Tag Manager'],
    testimonial: {
      quote: 'Il sistema implementato da NDB ha rivoluzionato il nostro processo di acquisizione lead. Oggi generiamo più richieste, di qualità superiore, a costi inferiori.',
      author: 'Marco R.',
      role: 'Marketing Director'
    }
  };

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Case Study', path: '/case-study' },
        { label: caseData.client }
      ]} />

      <section className="py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="mb-16">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
                {caseData.category}
              </Badge>
              <span className="text-[var(--muted)]">{caseData.year}</span>
            </div>
            <h1 className="mb-6">{caseData.title}</h1>
            <p className="text-2xl text-[var(--accent-2)]">{caseData.client}</p>
          </div>

          {/* Results Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {caseData.results.map((result, i) => {
              const Icon = result.icon;
              return (
                <div 
                  key={i}
                  className="rounded-2xl p-8 text-center"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-[var(--accent-2)]" />
                  <div className="text-5xl mb-3 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                    {result.value}
                  </div>
                  <div className="text-[var(--muted)]">{result.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="mb-6">Obiettivo</h2>
                <p className="text-xl text-[var(--muted)]">{caseData.objective}</p>
              </div>

              <div>
                <h2 className="mb-6">Soluzione</h2>
                <p className="text-xl text-[var(--muted)] mb-8">{caseData.solution}</p>
                
                <h3 className="mb-4">Cosa abbiamo fatto:</h3>
                <ul className="space-y-3">
                  {[
                    'Sviluppo portale NLT con configuratore veicoli real-time',
                    'Setup Google Ads geo-localizzato per 15 concessionarie',
                    'Implementazione pixel tracking e GA4 con eventi custom',
                    'Integrazione HubSpot CRM con lead routing automatico',
                    'Creazione workflow email/SMS per follow-up immediato',
                    'A/B test continuo su landing page e form',
                    'Dashboard real-time per ogni location'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-2)] mt-2.5 flex-shrink-0" />
                      <h4 className="text-[var(--muted)]">{item}</h4>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-6">Risultati</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {caseData.metrics.map((metric, i) => (
                    <div key={i} className="rounded-xl p-6" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <div className="text-3xl text-[var(--accent-2)] mb-2">{metric.value}</div>
                      <div className="mb-1">{metric.label}</div>
                      <div className="text-xs text-[var(--muted)]">{metric.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="rounded-2xl p-8 bg-gradient-to-br from-[var(--accent-1)]/10 to-[var(--accent-2)]/10" style={{ border: '1px solid var(--border)' }}>
                <div className="text-4xl text-[var(--accent-2)] mb-4">"</div>
                <p className="text-xl mb-6 italic">{caseData.testimonial.quote}</p>
                <div>
                  <div>{caseData.testimonial.author}</div>
                  <div className="text-sm text-[var(--muted)]">{caseData.testimonial.role}</div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                <h3 className="mb-4">Stack tecnologico</h3>
                <div className="flex flex-wrap gap-2">
                  {caseData.stack.map((tech, i) => (
                    <Badge key={i} variant="outline" className="border-[var(--border)]">
                      <h4>{tech}</h4>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                <h3 className="mb-4">Servizi utilizzati</h3>
                <ul className="space-y-2">
                  {['Lead Generation', 'Martech & AI', 'Web Development'].map((service, i) => (
                    <li key={i} className="text-[var(--muted)]"><h4>• {service}</h4></li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}>
                <h3 className="mb-4">Vuoi risultati simili?</h3>
                <h4 className="text-sm text-[var(--muted)] mb-6">
                  Scopri come possiamo aiutarti a raggiungere i tuoi obiettivi
                </h4>
                <Link to="/contatti">
                  <Button className="w-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
                    Richiedi consulenza
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Cases */}
          <div>
            <h2 className="mb-8">Altri case study</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Lead Generation B2B', 'E-commerce Fashion', 'Martech Implementation'].map((title, i) => (
                <Link key={i} to="/case-study" className="rounded-xl p-6 hover:scale-105 transition-transform" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <h3 className="mb-2">{title}</h3>
                  <h4 className="text-sm text-[var(--muted)] mb-4">Scopri come abbiamo aiutato questo cliente</h4>
                  <span className="text-sm text-[var(--accent-2)]">Leggi il case →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
