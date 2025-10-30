import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { StatCard } from '../components/StatCard';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { ShoppingCart, ArrowRight, CheckCircle2 } from 'lucide-react';

// SEO Meta
// Title: E-commerce Performance & Growth | Shopify, WooCommerce, Magento
// Description: Strategie integrate per far crescere il tuo shop online: Performance Max, CRO checkout, retention e marketplace optimization.

export const EcommercePage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  
  const services = [
    {
      title: 'Performance Max & Shopping',
      desc: 'Campagne Google ottimizzate per massimizzare vendite e ROAS su Search, Shopping, Display e YouTube.',
      items: ['Feed optimization', 'Bid strategy avanzate', 'Asset creativi dinamici', 'Audience signals']
    },
    {
      title: 'Meta Ads per E-commerce',
      desc: 'Catalog ads, dynamic retargeting e campagne di acquisizione su Facebook e Instagram.',
      items: ['Catalog setup', 'Dynamic product ads', 'Retargeting multi-step', 'Lookalike audiences']
    },
    {
      title: 'Checkout & CRO',
      desc: 'Ottimizzazione del funnel di acquisto per ridurre abbandoni e aumentare conversioni.',
      items: ['Checkout optimization', 'Cart abandonment recovery', 'Trust signals', 'A/B testing']
    },
    {
      title: 'Upsell & Cross-sell',
      desc: 'Strategie on-site e post-purchase per aumentare l\'Average Order Value.',
      items: ['Product recommendations', 'Bundle & kit', 'Post-purchase offers', 'Loyalty programs']
    },
    {
      title: 'Email & SMS Retention',
      desc: 'Automazioni per retention, repeat purchase e customer lifetime value.',
      items: ['Welcome series', 'Win-back campaigns', 'VIP programs', 'SMS marketing']
    },
    {
      title: 'Marketplace Performance',
      desc: 'Ottimizzazione vendite su Amazon, eBay e altri marketplace.',
      items: ['Listing optimization', 'PPC campaigns', 'Review management', 'Inventory sync']
    }
  ];

  const platforms = ['Shopify', 'WooCommerce', 'Magento', 'PrestaShop', 'Custom'];

  return (
    <div>
      <Breadcrumb items={[
        { label: t('nav.services'), path: '/servizi' },
        { label: t('servicesMenu.ecommerce') }
      ]} />

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="mb-4">E-commerce Performance & Growth</h1>
              <p className="text-[var(--muted)] mb-6">
                Strategie integrate per far crescere il tuo shop online: Performance Max, CRO checkout, retention e marketplace optimization.
              </p>
              <Link to="/contatti">
                <Button size="lg" className="bg-gradient-to-r from-[var(--accent-2)] to-[var(--accent-1)]">
                  Scopri come aumentare le vendite
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatCard value="+87%" label="Revenue media" />
              <StatCard value="5.2x" label="ROAS medio" />
              <StatCard value="+42%" label="AOV medio" />
              <StatCard value="+65%" label="Customer LTV" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="mb-3">I nostri servizi e-commerce</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Soluzione completa per acquisizione, conversione e retention clienti
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="rounded-2xl p-6 transition-all hover:shadow-lg" 
                style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <h4 className="mb-3">{service.title}</h4>
                <p className="text-sm text-[var(--muted)] mb-4">{service.desc}</p>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-2)] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[var(--muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="mb-4">Piattaforme supportate</h2>
            <h3 className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Esperienza su tutte le principali piattaforme e-commerce e soluzioni custom
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xl text-[var(--muted)]">
            {platforms.map((platform, index) => (
              <React.Fragment key={platform}>
                <h4 className="hover:text-[var(--accent-2)] transition-colors">
                  {platform}
                </h4>
                {index < platforms.length - 1 && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Fai crescere il tuo e-commerce</h2>
            <h3 className="text-xl text-[var(--muted)] mb-8">
              Richiedi un audit gratuito del tuo shop. Ti mostreremo le opportunità di crescita più impattanti.
            </h3>
            <Link to="/contatti">
              <Button size="lg" className="bg-gradient-to-r from-[var(--accent-2)] to-[var(--accent-1)]">
                Richiedi audit gratuito
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <h4 className="sr-only">Call to action per richiedere audit e-commerce</h4>
          </div>
        </div>
      </section>
    </div>
  );
};
