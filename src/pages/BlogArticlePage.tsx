import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { Calendar, Clock, Share2, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export const BlogArticlePage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const { slug } = useParams();

  const article = {
    title: 'Come l\'AI sta trasformando la Lead Generation nel 2025',
    category: 'Martech & Automation',
    date: '15 Ottobre 2025',
    readTime: '8 min',
    author: 'Team NDB',
    excerpt: 'Dalle audience predittive ai chatbot conversazionali: scopri come l\'intelligenza artificiale sta cambiando il modo di acquisire e qualificare lead.',
  };

  const relatedPosts = [
    { slug: 'lead-scoring-predittivo', title: 'Lead Scoring Predittivo con HubSpot', category: 'Martech' },
    { slug: 'linkedin-ads-b2b', title: 'LinkedIn Ads per B2B', category: 'Lead Generation' },
    { slug: 'chatbot-ai-conversazionali', title: 'Chatbot AI per Qualificazione Lead', category: 'Martech' }
  ];

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Blog', path: '/blog' },
        { label: article.title }
      ]} />

      <article className="py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Badge className="mb-6 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
                {article.category}
              </Badge>
              <h1 className="mb-6">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-[var(--muted)] mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>di {article.author}</span>
                </div>
              </div>
              <p className="text-xl text-[var(--muted)]">{article.excerpt}</p>
            </div>

            {/* Table of Contents */}
            <div className="rounded-2xl p-6 mb-12" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
              <h3 className="mb-4">Indice dei contenuti</h3>
              <nav className="space-y-2">
                {[
                  'Il ruolo dell\'AI nella lead generation moderna',
                  'Audience predittive e lookalike avanzati',
                  'Chatbot AI conversazionali per la qualificazione',
                  'Lead scoring predittivo con machine learning',
                  'Personalizzazione dinamica dei contenuti',
                  'Best practices e casi d\'uso reali'
                ].map((item, i) => (
                  <a key={i} href={`#section-${i}`} className="block text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">
                    <h4>{i + 1}. {item}</h4>
                  </a>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none space-y-8 mb-16">
              <div id="section-0">
                <h2>Il ruolo dell'AI nella lead generation moderna</h2>
                <p className="text-[var(--muted)]">
                  L'intelligenza artificiale sta rivoluzionando il modo in cui le aziende generano e qualificano lead. 
                  Non si tratta più di semplice automazione: gli algoritmi di machine learning sono in grado di analizzare 
                  migliaia di segnali comportamentali, predire l'intent dell'utente e personalizzare l'esperienza in tempo reale.
                </p>
                <p className="text-[var(--muted)]">
                  Secondo una recente ricerca, le aziende che utilizzano AI per la lead generation vedono un aumento medio 
                  del 50% nella qualità dei lead e una riduzione del 30% nel CPL (Cost Per Lead).
                </p>
              </div>

              <div className="rounded-2xl p-8 my-8 bg-gradient-to-br from-[var(--accent-1)]/10 to-[var(--accent-2)]/10" style={{ border: '1px solid var(--border)' }}>
                <h3 className="mb-4">💡 Key Takeaway</h3>
                <h4 className="text-[var(--muted)] mb-0">
                  L'AI non sostituisce i marketer, ma amplifica le loro capacità permettendo di focalizzarsi su strategia 
                  e creatività mentre gli algoritmi gestiscono ottimizzazione e personalizzazione.
                </h4>
              </div>

              <div id="section-1">
                <h2>Audience predittive e lookalike avanzati</h2>
                <p className="text-[var(--muted)]">
                  Le piattaforme pubblicitarie moderne utilizzano AI per creare audience predittive basate non solo su 
                  dati demografici, ma su centinaia di segnali comportamentali. Google Performance Max e Meta Advantage+ 
                  sono esempi di come l'AI possa identificare automaticamente gli utenti con maggiore probabilità di conversione.
                </p>
                <ul className="space-y-2 text-[var(--muted)]">
                  <li>• Analisi del percorso utente attraverso touchpoint multipli</li>
                  <li>• Identificazione di pattern non visibili all'occhio umano</li>
                  <li>• Espansione automatica verso audience simili qualificate</li>
                  <li>• Ottimizzazione real-time della bid strategy</li>
                </ul>
              </div>

              <div id="section-2">
                <h2>Chatbot AI conversazionali per la qualificazione</h2>
                <p className="text-[var(--muted)]">
                  I chatbot basati su Large Language Models (LLM) come GPT-4 hanno portato la qualificazione lead 24/7 
                  a un livello completamente nuovo. Non si limitano a seguire script predefiniti, ma conducono conversazioni 
                  naturali adattandosi al contesto.
                </p>
                <p className="text-[var(--muted)]">
                  Un chatbot AI ben configurato può qualificare fino al 60% dei lead in autonomia, passando al team sales 
                  solo quelli più promettenti con tutte le informazioni già raccolte e organizzate nel CRM.
                </p>
              </div>

              <div className="rounded-2xl p-6 my-8" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                <h3 className="mb-4">📊 Dati reali da un nostro case</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-2xl text-[var(--accent-2)] mb-1">+85%</div>
                    <h4 className="text-sm text-[var(--muted)]">Lead qualificati</h4>
                  </div>
                  <div>
                    <div className="text-2xl text-[var(--accent-2)] mb-1">-40%</div>
                    <h4 className="text-sm text-[var(--muted)]">Tempo sales</h4>
                  </div>
                  <div>
                    <div className="text-2xl text-[var(--accent-2)] mb-1">24/7</div>
                    <h4 className="text-sm text-[var(--muted)]">Disponibilità</h4>
                  </div>
                </div>
              </div>

              <div id="section-3">
                <h2>Lead scoring predittivo con machine learning</h2>
                <p className="text-[var(--muted)]">
                  Il lead scoring tradizionale si basa su regole fisse (es: "+10 punti se apre email, +20 se visita pricing"). 
                  Gli algoritmi di ML analizzano invece migliaia di combinazioni di comportamenti per predire la probabilità 
                  di conversione in modo molto più accurato.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h3 className="mb-8">Domande Frequenti</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    q: 'Quali strumenti AI sono essenziali per la lead generation?',
                    a: 'I tool fondamentali includono: piattaforme ads con AI (Google Performance Max, Meta Advantage+), CRM con scoring predittivo (HubSpot, Salesforce Einstein), chatbot LLM-based, e CDP per unificare i dati.'
                  },
                  {
                    q: 'È difficile implementare soluzioni AI?',
                    a: 'Dipende dalla complessità. Chatbot e lead scoring predittivo possono essere implementati in 2-4 settimane. Soluzioni custom richiedono più tempo ma offrono vantaggio competitivo maggiore.'
                  },
                  {
                    q: 'Quali risultati posso aspettarmi?',
                    a: 'In media vediamo: +40-60% qualità lead, -25-35% CPL, +50% efficienza team sales. I risultati variano in base a settore, volume dati e implementazione.'
                  }
                ].map((faq, i) => (
                  <AccordionItem 
                    key={i}
                    value={`faq-${i}`}
                    className="rounded-xl px-6"
                    style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--muted)]">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-12 text-center bg-gradient-to-br from-[var(--accent-1)]/10 to-[var(--accent-2)]/10 mb-16" style={{ border: '1px solid var(--border)' }}>
              <h3 className="mb-4">Vuoi implementare AI nella tua lead generation?</h3>
              <p className="text-[var(--muted)] mb-8 max-w-2xl mx-auto">
                Parliamo di come chatbot, lead scoring predittivo e audience AI possono aumentare le tue conversioni.
              </p>
              <Link to="/contatti">
                <Button size="lg" className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
                  Richiedi consulenza
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Related Posts */}
            <div>
              <h2 className="mb-8">Articoli correlati</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((post, i) => (
                  <Link key={i} to={`/blog/${post.slug}`} className="rounded-xl p-6 hover:scale-105 transition-transform" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <Badge className="mb-3 bg-white/10"><h4>{post.category}</h4></Badge>
                    <h3 className="mb-2">{post.title}</h3>
                    <h4 className="text-sm text-[var(--accent-2)]">Leggi l'articolo →</h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
