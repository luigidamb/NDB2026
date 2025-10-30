import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceCard } from '../components/ServiceCard';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { Target, BrainCircuit, TrendingUp, ShoppingCart, Code } from 'lucide-react';

// SEO Meta
// Title: Servizi Digitali | Lead Generation, Martech & AI, CRO, E-commerce
// Description: Soluzioni data-driven lungo tutto il funnel: acquisizione, conversione, retention e crescita.

export const ServiziPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const services = [
    {
      icon: Target,
      title: t('home.services.leadGen.title'),
      description: t('home.services.leadGen.desc'),
      features: [
        t('home.services.leadGen.feature1'),
        t('home.services.leadGen.feature2'),
        t('home.services.leadGen.feature3'),
        t('home.services.leadGen.feature4')
      ],
      link: '/servizi/lead-generation'
    },
    {
      icon: TrendingUp,
      title: t('home.services.cro.title'),
      description: t('home.services.cro.desc'),
      features: [
        t('home.services.cro.feature1'),
        t('home.services.cro.feature2'),
        t('home.services.cro.feature3'),
        t('home.services.cro.feature4')
      ],
      link: '/servizi/cro'
    },
    {
      icon: BrainCircuit,
      title: t('home.services.martech.title'),
      description: t('home.services.martech.desc'),
      features: [
        t('home.services.martech.feature1'),
        t('home.services.martech.feature2'),
        t('home.services.martech.feature3'),
        t('home.services.martech.feature4')
      ],
      link: '/servizi/martech-ai',
      gradient: 'from-[var(--accent-rose)] to-[var(--accent-1)]'
    },
    {
      icon: ShoppingCart,
      title: t('home.services.ecom.title'),
      description: t('home.services.ecom.desc'),
      features: [
        t('home.services.ecom.feature1'),
        t('home.services.ecom.feature2'),
        t('home.services.ecom.feature3'),
        t('home.services.ecom.feature4')
      ],
      link: '/servizi/ecommerce',
      gradient: 'from-[var(--accent-2)] to-[var(--accent-1)]'
    },
    {
      icon: Code,
      title: t('home.services.webdev.title'),
      description: t('home.services.webdev.desc'),
      features: [
        t('home.services.webdev.feature1'),
        t('home.services.webdev.feature2'),
        t('home.services.webdev.feature3'),
        t('home.services.webdev.feature4')
      ],
      link: '/servizi/web-development'
    }
  ];

  return (
    <div>
      <Breadcrumb items={[{ label: t('nav.services') }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-8">
            <h1 className="mb-4">{t('servizi.hero.title')}</h1>
            <p className="text-[var(--muted)]">
              {t('servizi.hero.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}>
                <ServiceCard {...service} headingLevel="h3" />
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-24">
            <h2 className="mb-12 text-center">{t('servizi.whyChoose.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="mb-3">{t('servizi.whyChoose.reason1.title')}</h3>
                <h4 className="text-[var(--muted)]">
                  {t('servizi.whyChoose.reason1.desc')}
                </h4>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="mb-3">{t('servizi.whyChoose.reason2.title')}</h3>
                <h4 className="text-[var(--muted)]">
                  {t('servizi.whyChoose.reason2.desc')}
                </h4>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="mb-3">{t('servizi.whyChoose.reason3.title')}</h3>
                <h4 className="text-[var(--muted)]">
                  {t('servizi.whyChoose.reason3.desc')}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
