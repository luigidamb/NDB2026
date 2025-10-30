import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { Code, Zap, Search, Smartphone, ArrowRight } from 'lucide-react';

// SEO Meta
// Title: Web Development | Siti Corporate, E-commerce, Landing Page, Web App
// Description: Sviluppo siti web e piattaforme digitali performanti, SEO-friendly e orientate alla conversione con React, Next.js, Shopify.

export const WebDevelopmentPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  
  const features = [
    { 
      icon: Code, 
      title: 'Performance by Design', 
      desc: 'Core Web Vitals ottimizzati, codice pulito e velocità di caricamento' 
    },
    { 
      icon: Search, 
      title: 'SEO-First', 
      desc: 'Struttura, markup e contenuti pensati per il posizionamento organico' 
    },
    { 
      icon: Zap, 
      title: 'Conversion-Oriented', 
      desc: 'UX e architettura progettate per massimizzare le conversioni' 
    },
    { 
      icon: Smartphone, 
      title: 'Mobile-First', 
      desc: 'Design responsivo e ottimizzato per ogni dispositivo' 
    }
  ];

  const projects = [
    {
      title: 'Siti Corporate',
      desc: 'Siti istituzionali, portfolio e presentazioni aziendali con CMS headless e gestione autonoma.',
      tech: ['React/Next.js', 'WordPress Headless', 'Strapi/Contentful', 'Tailwind CSS']
    },
    {
      title: 'E-commerce',
      desc: 'Shop online D2C e B2B con integrazioni ERP, CRM e marketplace.',
      tech: ['Shopify/Shopify Plus', 'WooCommerce', 'Magento', 'Custom Node.js']
    },
    {
      title: 'Landing Page',
      desc: 'Landing ad alta conversione per campagne advertising e lead generation.',
      tech: ['React', 'Unbounce', 'Webflow', 'A/B testing integrato']
    },
    {
      title: 'Web App & Portali',
      desc: 'Piattaforme custom, configuratori, portali B2B e applicazioni complesse.',
      tech: ['React/Vue', 'Node.js/Python', 'PostgreSQL/MongoDB', 'API REST/GraphQL']
    }
  ];

  return (
    <div>
      <Breadcrumb items={[
        { label: t('nav.services'), path: '/servizi' },
        { label: t('servicesMenu.webDev') }
      ]} />

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-8">
            <h1 className="mb-4">Realizzazioni Web & Piattaforme Digitali</h1>
            <p className="text-[var(--muted)] mb-6">
              Sviluppiamo siti corporate, e-commerce e landing page progettati per la performance, la conversione e la crescita.
            </p>
            <Link to="/contatti">
              <Button size="lg" className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
                Parla con un Solution Architect
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="mb-3">Il nostro approccio</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Sviluppo web pensato per performance, SEO e conversioni
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="rounded-2xl p-6 text-center transition-all hover:shadow-lg" 
                style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <feature.icon className="w-10 h-10 mx-auto mb-3 text-[var(--accent-2)]" />
                <h3 className="mb-2">{feature.title}</h3>
                <small className="text-[var(--muted)] block">{feature.desc}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Cosa realizziamo</h2>
            <h3 className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Soluzioni web su misura con le tecnologie più moderne
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className="rounded-2xl p-8 transition-all hover:shadow-lg" 
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <h4 className="mb-4">{project.title}</h4>
                <p className="text-[var(--muted)] mb-6">{project.desc}</p>
                <div>
                  <p className="text-sm mb-3">Stack tecnologico:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span 
                        key={j} 
                        className="px-3 py-1 rounded-lg text-xs" 
                        style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Realizziamo il tuo progetto web</h2>
            <h3 className="text-xl text-[var(--muted)] mb-8">
              Hai un'idea o un progetto? Parliamone insieme e troviamo la soluzione migliore.
            </h3>
            <Link to="/contatti">
              <Button size="lg" className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
                Richiedi preventivo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <h4 className="sr-only">Call to action per richiedere preventivo web development</h4>
          </div>
        </div>
      </section>
    </div>
  );
};
