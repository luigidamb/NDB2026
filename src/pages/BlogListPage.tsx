import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { BlogCard } from '../components/BlogCard';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { Search } from 'lucide-react';

export const BlogListPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const [activeCategory, setActiveCategory] = useState('Tutti');
  
  const categories = ['Tutti', 'Lead Generation', 'Martech & Automation', 'CRO & UX', 'Automotive', 'E-commerce'];
  
  const posts = [
    {
      slug: 'ai-lead-generation-2025',
      title: 'Come l\'AI sta trasformando la Lead Generation nel 2025',
      excerpt: 'Dalle audience predittive ai chatbot conversazionali: scopri come l\'intelligenza artificiale sta cambiando il modo di acquisire e qualificare lead B2B e B2C.',
      category: 'Martech & Automation',
      date: '15 Ott 2025',
      readTime: '8 min'
    },
    {
      slug: 'automotive-lead-gen-best-practices',
      title: 'Lead Generation Automotive: Best Practices e KPI da Monitorare',
      excerpt: 'Strategie vincenti per dealer e broker: geo-targeting, configuratori NLT, automazioni CRM e metriche che contano davvero.',
      category: 'Automotive',
      date: '10 Ott 2025',
      readTime: '10 min'
    },
    {
      slug: 'cro-ecommerce-checklist',
      title: 'CRO per E-commerce: Checklist Completa per +30% Conversioni',
      excerpt: 'Dalla homepage al checkout: tutti i touchpoint da ottimizzare per trasformare più visitatori in clienti paganti.',
      category: 'CRO & UX',
      date: '5 Ott 2025',
      readTime: '12 min'
    },
    {
      slug: 'google-performance-max-guide',
      title: 'Performance Max: Guida Completa per E-commerce 2025',
      excerpt: 'Come configurare, ottimizzare e scalare campagne Performance Max per massimizzare ROAS e vendite.',
      category: 'E-commerce',
      date: '28 Set 2025',
      readTime: '15 min'
    },
    {
      slug: 'lead-scoring-predittivo-hubspot',
      title: 'Lead Scoring Predittivo con HubSpot e Machine Learning',
      excerpt: 'Implementare algoritmi di ML per identificare i lead con maggiore probabilità di conversione.',
      category: 'Martech & Automation',
      date: '20 Set 2025',
      readTime: '9 min'
    },
    {
      slug: 'linkedin-ads-b2b-strategy',
      title: 'LinkedIn Ads per B2B: Strategie di Targeting Avanzato',
      excerpt: 'Come utilizzare LinkedIn per generare lead B2B qualificati con targeting job title, company size e intent signals.',
      category: 'Lead Generation',
      date: '12 Set 2025',
      readTime: '11 min'
    }
  ];

  const filteredPosts = activeCategory === 'Tutti' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Blog & Insights' }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="mb-6">Blog & Insights</h1>
            <p className="text-xl text-[var(--muted)]">
              Guide, strategie e best practices sul performance marketing. Tutto quello che devi sapere per far crescere il tuo business online.
            </p>
          </div>

          <h2 className="mb-6">Cerca articoli</h2>
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
              <Input 
                placeholder="Cerca articoli..." 
                className="pl-12 bg-[var(--surface)] border-[var(--border)]"
              />
            </div>
          </div>

          <h3 className="mb-6">Filtra per categoria</h3>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={activeCategory === cat ? 'default' : 'outline'}
                className={`cursor-pointer px-4 py-2 ${
                  activeCategory === cat 
                    ? 'bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]' 
                    : 'border-[var(--border)] hover:bg-white/5'
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>

          <h2 className="mb-8">Ultimi articoli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div key={post.slug}>
                <h4 className="sr-only">{post.title}</h4>
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
