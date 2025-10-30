import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ServiceCard } from '../components/ServiceCard';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { BlogCard } from '../components/BlogCard';
import { StatCard } from '../components/StatCard';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { 
  Target, 
  BrainCircuit, 
  TrendingUp, 
  ShoppingCart, 
  Code, 
  ArrowRight,
  CheckCircle2,
  Car
} from 'lucide-react';

// SEO Meta
// Title: NDB Web Service | Martech, AI & Performance Marketing
// Description: Dal 2001 aiutiamo brand a crescere con lead generation, Martech & AI, CRO ed e-commerce performance. Dati, performance, risultati misurabili.

export const HomePage: React.FC = () => {
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

  const methodSteps = [
    {
      number: '01',
      title: t('home.method.step1.title'),
      description: t('home.method.step1.desc')
    },
    {
      number: '02',
      title: t('home.method.step2.title'),
      description: t('home.method.step2.desc')
    },
    {
      number: '03',
      title: t('home.method.step3.title'),
      description: t('home.method.step3.desc')
    },
    {
      number: '04',
      title: t('home.method.step4.title'),
      description: t('home.method.step4.desc')
    }
  ];

  const cases = [
    {
      id: 'dealer-automotive',
      title: t('home.cases.case1.title'),
      client: t('home.cases.case1.client'),
      category: t('home.cases.case1.category'),
      description: t('home.cases.case1.desc'),
      metrics: [
        { label: t('home.cases.case1.metric1Label'), value: '+120%' },
        { label: t('home.cases.case1.metric2Label'), value: '-28%' },
        { label: t('home.cases.case1.metric3Label'), value: '+85%' }
      ]
    },
    {
      id: 'b2b-saas',
      title: t('home.cases.case2.title'),
      client: t('home.cases.case2.client'),
      category: t('home.cases.case2.category'),
      description: t('home.cases.case2.desc'),
      metrics: [
        { label: t('home.cases.case2.metric1Label'), value: '-35%' },
        { label: t('home.cases.case2.metric2Label'), value: '+92%' },
        { label: t('home.cases.case2.metric3Label'), value: '+€180k' }
      ]
    },
    {
      id: 'ecommerce-fashion',
      title: t('home.cases.case3.title'),
      client: t('home.cases.case3.client'),
      category: t('home.cases.case3.category'),
      description: t('home.cases.case3.desc'),
      metrics: [
        { label: t('home.cases.case3.metric1Label'), value: '+75%' },
        { label: t('home.cases.case3.metric2Label'), value: '4.8x' },
        { label: t('home.cases.case3.metric3Label'), value: '+32%' }
      ]
    }
  ];

  const blogPosts = [
    {
      slug: 'ai-lead-generation-2025',
      title: 'Come l\'AI sta trasformando la Lead Generation nel 2025',
      excerpt: 'Dalle audience predittive ai chatbot conversazionali: scopri come l\'intelligenza artificiale sta cambiando il modo di acquisire e qualificare lead.',
      category: 'Martech & AI',
      date: '15 Ott 2025',
      readTime: '8 min'
    },
    {
      slug: 'automotive-lead-gen-best-practices',
      title: 'Lead Generation Automotive: Best Practices e KPI',
      excerpt: 'Strategie vincenti per dealer e broker: geo-targeting, configuratori, NLT e automazioni CRM che funzionano.',
      category: 'Automotive',
      date: '10 Ott 2025',
      readTime: '10 min'
    },
    {
      slug: 'cro-ecommerce-checklist',
      title: 'CRO per E-commerce: Checklist Completa per +30% Conversioni',
      excerpt: 'Dalla homepage al checkout: tutti i touchpoint da ottimizzare per trasformare più visitatori in clienti.',
      category: 'CRO & UX',
      date: '5 Ott 2025',
      readTime: '12 min'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-[var(--accent-1)] via-[var(--accent-rose)] to-[var(--accent-2)] animate-pulse" />
        </div>

        <div className="relative max-w-[1360px] mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4">
              {t('home.hero.title')}
            </h1>
            <p className="text-[var(--muted)] mb-6 max-w-3xl mx-auto">
              {t('home.hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link to="/contatti">
                <Button size="lg" className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] hover:opacity-90 px-8">
                  {t('home.hero.cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/servizi">
                <Button size="lg" variant="outline" className="px-8 border-[var(--border)] hover:bg-white/5">
                  {t('common.readMore')}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              <StatCard value="350.000+" label={t('home.stats.leads')} icon="🎯" />
              <StatCard value="+84%" label={t('home.stats.roi')} icon="📈" />
              <StatCard value="20+" label={t('home.stats.experience')} icon="🏆" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-8 md:py-12 border-y" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <p className="text-center text-[var(--muted)] mb-6">{t('home.partners.title')}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <h4>Google Premier Partner</h4>
            <h4>Meta Business Partner</h4>
            <h4>HubSpot Partner</h4>
            <h4>Shopify Partner</h4>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="mb-3">{t('home.services.title')}</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} headingLevel="h3" />
            ))}
          </div>

          {/* Consulenza AI Highlight */}
          <div 
            className="mt-6 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-[var(--accent-1)]/10 to-[var(--accent-2)]/10"
            style={{ border: '1px solid var(--border)' }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center">
                  <BrainCircuit className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-2">
                  {language === 'it' ? 'Consulenza AI' : 'AI Consulting'}
                </h3>
                <p className="text-[var(--muted)] mb-4">
                  {language === 'it' 
                    ? 'Trasformazione digitale con intelligenza artificiale. Automazione processi, predictive analytics e chatbot AI per far crescere il tuo business.'
                    : 'Digital transformation with artificial intelligence. Process automation, predictive analytics and AI chatbots to grow your business.'}
                  {' '}
                  <strong className="text-[var(--accent-2)]">
                    {language === 'it' ? '+35% efficienza media progetti AI' : '+35% average AI project efficiency'}
                  </strong>
                </p>
                <Link to="/consulenza-ai">
                  <Button variant="ghost" className="text-[var(--accent-2)] hover:bg-transparent">
                    {language === 'it' ? 'Scopri la Consulenza AI' : 'Discover AI Consulting'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Automotive Highlight */}
          <div 
            className="mt-6 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-[var(--accent-1)]/10 to-[var(--accent-2)]/10"
            style={{ border: '1px solid var(--border)' }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center">
                  <Car className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-2">Automotive Marketing</h3>
                <p className="text-[var(--muted)] mb-4">
                  Funnel NLT, geo-ads e automazioni dedicate. <strong className="text-[var(--accent-2)]">300.000+ lead generati in 10 anni</strong> per dealer e broker.
                </p>
                <Link to="/automotive">
                  <Button variant="ghost" className="text-[var(--accent-2)] hover:bg-transparent">
                    Scopri le soluzioni automotive
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="mb-3">{t('home.method.title')}</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              {t('home.method.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodSteps.map((step, index) => (
              <div key={index} className="relative">
                <div 
                  className="rounded-2xl p-6 h-full"
                  style={{ 
                    backgroundColor: 'var(--bg)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <div className="text-5xl mb-3 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent opacity-50">
                    {step.number}
                  </div>
                  <h4 className="mb-2">{step.title}</h4>
                  <p className="text-[var(--muted)]">{step.description}</p>
                </div>
                {index < methodSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[var(--accent-2)] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="mb-2">{t('home.cases.title')}</h2>
              <p className="text-[var(--muted)]">
                {t('home.cases.subtitle')}
              </p>
            </div>
            <Link to="/case-study" className="hidden md:block">
              <Button variant="outline" className="border-[var(--border)]">
                {t('common.viewAll')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {cases.map((caseStudy) => (
              <div key={caseStudy.id}>
                <h4 className="sr-only">{caseStudy.title}</h4>
                <CaseStudyCard {...caseStudy} />
              </div>
            ))}
          </div>

          <div className="md:hidden text-center">
            <Link to="/case-study">
              <Button variant="outline" className="border-[var(--border)]">
                {t('common.viewAll')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="mb-2">{t('home.blog.title')}</h2>
              <p className="text-[var(--muted)]">
                {t('home.blog.subtitle')}
              </p>
            </div>
            <Link to="/blog" className="hidden md:block">
              <Button variant="outline" className="border-[var(--border)]">
                {t('common.viewAll')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((post) => (
              <div key={post.slug}>
                <h4 className="sr-only">{post.title}</h4>
                <BlogCard {...post} />
              </div>
            ))}
          </div>

          <div className="md:hidden text-center">
            <Link to="/blog">
              <Button variant="outline" className="border-[var(--border)]">
                {t('common.viewAll')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div 
            className="rounded-3xl p-8 md:p-10 text-center relative overflow-hidden"
            style={{ 
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-1)]/10 via-transparent to-[var(--accent-2)]/10 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="mb-3">{t('home.cta.title')}</h2>
              <p className="text-[var(--muted)] mb-6">
                {t('home.cta.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link to="/contatti">
                  <Button size="lg" className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] hover:opacity-90">
                    {t('common.contactUs')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--muted)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--success)]" />
                  <h4>Risposta in 24h</h4>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--success)]" />
                  <h4>Analisi gratuita</h4>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--success)]" />
                  <h4>Nessun impegno</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
