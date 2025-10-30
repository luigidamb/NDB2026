import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { StatCard } from '../components/StatCard';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { Car, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

// SEO Meta
// Title: Automotive Marketing | Lead Generation per Dealer, Broker, NLT
// Description: 300.000+ lead generati per dealer, broker e OEM. Funnel NLT, geo-ads, configuratori e automazioni CRM dedicate al settore automotive.

export const AutomotivePage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  
  return (
    <div>
      <Breadcrumb items={[{ label: t('nav.automotive') }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-10 h-10 text-[var(--accent-2)]" />
                <h1>Automotive Marketing & Lead Generation</h1>
              </div>
              <p className="text-[var(--muted)] mb-6">
                Oltre 300.000 lead generati in 10 anni per dealer, broker e OEM. Funnel NLT, geo-ads, configuratori e automazioni CRM dedicate al settore automotive.
              </p>
              <Link to="/contatti">
                <Button size="lg" className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
                  Ottieni più richieste qualificate
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatCard value="300k+" label="Lead generati" icon="🚗" />
              <StatCard value="+120%" label="Test drive medi" icon="📈" />
              <StatCard value="€18" label="CPL medio NLT" icon="💰" />
              <StatCard value="10 anni" label="Esperienza automotive" icon="🏆" />
            </div>
          </div>

          <h2 className="mb-8">Soluzioni per il settore automotive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
              <h3 className="mb-3">Portali NLT (Noleggio Lungo Termine)</h3>
              <p className="text-[var(--muted)] mb-4">
                Configuratori intelligenti, preventivazione istantanea e funnel ottimizzati per generare richieste di preventivo qualificate.
              </p>
              <ul className="space-y-2">
                {[
                  'Configuratore veicoli con filtri avanzati',
                  'Calcolo rata in tempo reale',
                  'Form lead multi-step ottimizzato',
                  'Integrazione CRM automotive',
                  'Landing page per campagne ads'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-2)] mt-2 flex-shrink-0" />
                    <small className="text-[var(--muted)]">{item}</small>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
              <MapPin className="w-10 h-10 text-[var(--accent-2)] mb-4" />
              <h3 className="mb-4">Geo-Advertising Multi-Location</h3>
              <h4 className="text-[var(--muted)] mb-6">
                Campagne Google e Meta geo-localizzate per dealer network con budget allocation dinamica e reportistica per concessionaria.
              </h4>
              <ul className="space-y-2">
                {[
                  'Campagne locali per ogni sede',
                  'Inventory ads dinamici',
                  'Promozioni geo-targetizzate',
                  'Click-to-call e indicazioni stradali',
                  'Dashboard multi-location'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-2)] mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
              <Phone className="w-10 h-10 text-[var(--accent-2)] mb-4" />
              <h3 className="mb-4">Automazioni CRM & Follow-up</h3>
              <h4 className="text-[var(--muted)] mb-6">
                Lead routing automatico, nurturing personalizzato e scoring per massimizzare il tasso di chiusura dei venditori.
              </h4>
              <ul className="space-y-2">
                {[
                  'Assegnazione lead automatica',
                  'Email & SMS follow-up',
                  'Lead scoring comportamentale',
                  'Reminder test drive',
                  'Gestione appuntamenti'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-2)] mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
              <Mail className="w-10 h-10 text-[var(--accent-2)] mb-4" />
              <h3 className="mb-4">Campagne Performance</h3>
              <h4 className="text-[var(--muted)] mb-6">
                Google Search, Performance Max e Meta Ads ottimizzate per generare richieste di test drive, preventivi NLT e appuntamenti.
              </h4>
              <ul className="space-y-2">
                {[
                  'Keyword research automotive',
                  'Remarketing dinamico veicoli',
                  'Audience in-market',
                  'Video ads YouTube',
                  'Ottimizzazione CPL continua'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-2)] mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl p-12 bg-gradient-to-br from-[var(--accent-1)]/10 to-[var(--accent-2)]/10" style={{ border: '1px solid var(--border)' }}>
            <h2 className="mb-6 text-center">Partnership automotive</h2>
            <h3 className="text-center text-[var(--muted)] mb-8 max-w-2xl mx-auto">
              Collaboriamo con dealer, broker, rent-a-car e OEM per generare lead qualificati e aumentare le vendite.
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-[var(--muted)]">
              <h4>Dealer Network</h4>
              <span>•</span>
              <h4>Broker NLT</h4>
              <span>•</span>
              <h4>Rent-a-car</h4>
              <span>•</span>
              <h4>Service & Ricambi</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Aumenta i tuoi lead automotive</h2>
            <h3 className="text-xl text-[var(--muted)] mb-8">
              Contattaci per una consulenza gratuita e scopri come generare più richieste qualificate per il tuo business automotive.
            </h3>
            <Link to="/contatti">
              <Button size="lg" className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
                Richiedi consulenza gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <h4 className="sr-only">Call to action per consulenza automotive</h4>
          </div>
        </div>
      </section>
    </div>
  );
};
