import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { Badge } from '../components/ui/badge';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';

export const CaseStudyListPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const [activeFilter, setActiveFilter] = useState('Tutti');
  
  const categories = ['Tutti', 'E-commerce', 'Lead Generation', 'Automotive', 'Martech'];
  
  const cases = [
    {
      id: 'dealer-automotive',
      title: '+120% Test Drive in 90 Giorni',
      client: 'Dealer Network Automotive',
      category: 'Automotive',
      description: 'Funnel NLT integrato con geo-ads e CRM automation per generare richieste qualificate di test drive e preventivi.',
      metrics: [
        { label: 'Test Drive', value: '+120%' },
        { label: 'CPL', value: '-28%' },
        { label: 'Conv. Rate', value: '+85%' }
      ]
    },
    {
      id: 'b2b-saas',
      title: 'CPL Ridotto del 35% in 3 Mesi',
      client: 'SaaS B2B Platform',
      category: 'Lead Generation',
      description: 'Strategia multi-canale su LinkedIn e Google con lead nurturing automatizzato e scoring predittivo.',
      metrics: [
        { label: 'CPL', value: '-35%' },
        { label: 'SQL', value: '+92%' },
        { label: 'Pipeline', value: '+€180k' }
      ]
    },
    {
      id: 'ecommerce-fashion',
      title: '+75% Vendite con CRO + Google Ads',
      client: 'Fashion E-commerce',
      category: 'E-commerce',
      description: 'Ottimizzazione checkout, Performance Max e strategie di retention email per crescita sostenibile.',
      metrics: [
        { label: 'Vendite', value: '+75%' },
        { label: 'ROAS', value: '4.8x' },
        { label: 'AOV', value: '+32%' }
      ]
    },
    {
      id: 'beauty-ecommerce',
      title: 'ROAS 6.2x con Performance Max',
      client: 'Beauty D2C Brand',
      category: 'E-commerce',
      description: 'Migrazione da Shopping classico a Performance Max con creative testing e audience expansion.',
      metrics: [
        { label: 'ROAS', value: '6.2x' },
        { label: 'Revenue', value: '+142%' },
        { label: 'New Customers', value: '+95%' }
      ]
    },
    {
      id: 'b2b-crm',
      title: '+200% Lead Qualificati con HubSpot',
      client: 'Manufacturing B2B',
      category: 'Martech',
      description: 'Implementazione HubSpot con lead scoring, automazioni e integrazione Salesforce.',
      metrics: [
        { label: 'Lead qualificati', value: '+200%' },
        { label: 'Sales velocity', value: '-40%' },
        { label: 'Win rate', value: '+58%' }
      ]
    },
    {
      id: 'real-estate-leads',
      title: '€8 CPL per Richieste Immobiliari',
      client: 'Real Estate Group',
      category: 'Lead Generation',
      description: 'Campagne Facebook e Google Ads con landing page geo-localizzate per progetti immobiliari.',
      metrics: [
        { label: 'CPL', value: '€8' },
        { label: 'Lead/mese', value: '450+' },
        { label: 'Conv. Rate', value: '12.5%' }
      ]
    }
  ];

  const filteredCases = activeFilter === 'Tutti' 
    ? cases 
    : cases.filter(c => c.category === activeFilter);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Case Study' }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-10">
            <h1 className="mb-4">Case Study & Success Stories</h1>
            <p className="text-[var(--muted)]">
              Risultati concreti ottenuti dai nostri clienti attraverso strategie data-driven e performance marketing.
            </p>
          </div>

          <h2 className="mb-4">Filtra per categoria</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={activeFilter === cat ? 'default' : 'outline'}
                className={`cursor-pointer px-4 py-2 ${
                  activeFilter === cat 
                    ? 'bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] !text-white' 
                    : 'border-[var(--border)] hover:bg-white/5'
                }`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>

          <h3 className="mb-6">I nostri progetti di successo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((caseStudy) => (
              <div key={caseStudy.id}>
                <h4 className="sr-only">{caseStudy.title}</h4>
                <CaseStudyCard {...caseStudy} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
