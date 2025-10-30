import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { StatCard } from '../components/StatCard';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { BrainCircuit, Zap, TrendingUp, Bot, LineChart, GraduationCap, ArrowRight, CheckCircle2, Target, Layers } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

// SEO Meta
// Title: Consulenza AI per Aziende | Intelligenza Artificiale & Automazione
// Description: Trasformazione digitale con AI: automazione processi, predictive analytics, chatbot AI e formazione. Consulenza personalizzata per PMI e grandi aziende.

export const ConsulenzaAIPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  const ambiti = [
    {
      icon: Target,
      title: language === 'it' ? 'AI Strategy & Audit' : 'AI Strategy & Audit',
      description: language === 'it' 
        ? 'Roadmap strategica, analisi dati esistenti e identificazione KPI per progetti AI di successo.'
        : 'Strategic roadmap, existing data analysis, and KPI identification for successful AI projects.'
    },
    {
      icon: Zap,
      title: language === 'it' ? 'Automazione Processi (RPA + AI)' : 'Process Automation (RPA + AI)',
      description: language === 'it'
        ? 'Ottimizzazione back office, CRM, HR e workflow ripetitivi con automazione intelligente.'
        : 'Back office, CRM, HR optimization and repetitive workflow automation with intelligent automation.'
    },
    {
      icon: TrendingUp,
      title: language === 'it' ? 'AI Marketing' : 'AI Marketing',
      description: language === 'it'
        ? 'Modelli predittivi, lead scoring automatico, personalizzazione dinamica e campaign optimization.'
        : 'Predictive models, automatic lead scoring, dynamic personalization, and campaign optimization.'
    },
    {
      icon: LineChart,
      title: language === 'it' ? 'Predictive Analytics' : 'Predictive Analytics',
      description: language === 'it'
        ? 'Previsioni trend, demand forecasting, decision intelligence e analisi predittive avanzate.'
        : 'Trend forecasting, demand forecasting, decision intelligence, and advanced predictive analytics.'
    },
    {
      icon: Bot,
      title: language === 'it' ? 'AI Conversazionale' : 'Conversational AI',
      description: language === 'it'
        ? 'Chatbot intelligenti, assistenti virtuali multilingua e automazione customer service.'
        : 'Intelligent chatbots, multilingual virtual assistants, and customer service automation.'
    },
    {
      icon: GraduationCap,
      title: language === 'it' ? 'Formazione AI' : 'AI Training',
      description: language === 'it'
        ? 'Training team, change management e academy interna per adozione AI efficace.'
        : 'Team training, change management, and internal academy for effective AI adoption.'
    }
  ];

  const methodology = [
    {
      number: '01',
      title: language === 'it' ? 'Audit e Data Discovery' : 'Audit & Data Discovery',
      description: language === 'it'
        ? 'Analisi completa dei dati disponibili, infrastruttura esistente e identificazione opportunità.'
        : 'Complete analysis of available data, existing infrastructure, and opportunity identification.'
    },
    {
      number: '02',
      title: language === 'it' ? 'Identificazione Use Case' : 'Use Case Identification',
      description: language === 'it'
        ? 'Prioritizzazione progetti AI in base a ROI atteso, feasibility e impatto sul business.'
        : 'AI project prioritization based on expected ROI, feasibility, and business impact.'
    },
    {
      number: '03',
      title: language === 'it' ? 'Proof of Concept' : 'Proof of Concept',
      description: language === 'it'
        ? 'Sviluppo e test di prototipi AI su dataset reali per validare efficacia e performance.'
        : 'Development and testing of AI prototypes on real datasets to validate effectiveness and performance.'
    },
    {
      number: '04',
      title: language === 'it' ? 'Integrazione e Formazione' : 'Integration & Training',
      description: language === 'it'
        ? 'Implementazione in produzione, integrazione con sistemi esistenti e training del team.'
        : 'Production implementation, integration with existing systems, and team training.'
    },
    {
      number: '05',
      title: language === 'it' ? 'Monitoraggio Continuo' : 'Continuous Monitoring',
      description: language === 'it'
        ? 'Misurazione KPI, ottimizzazione modelli AI e miglioramento continuo delle performance.'
        : 'KPI measurement, AI model optimization, and continuous performance improvement.'
    }
  ];

  const cases = [
    {
      sector: 'Retail',
      result: '+40%',
      metric: language === 'it' ? 'produttività' : 'productivity',
      description: language === 'it' 
        ? 'Automazione RPA per gestione ordini e inventory management'
        : 'RPA automation for order management and inventory management'
    },
    {
      sector: 'E-commerce',
      result: '+32%',
      metric: language === 'it' ? 'conversion rate' : 'conversion rate',
      description: language === 'it'
        ? 'AI personalization engine con recommendation dinamiche'
        : 'AI personalization engine with dynamic recommendations'
    },
    {
      sector: language === 'it' ? 'Servizi' : 'Services',
      result: '-25%',
      metric: language === 'it' ? 'tempi risposta' : 'response time',
      description: language === 'it'
        ? 'Chatbot AI multilingua per customer support H24'
        : 'Multilingual AI chatbot for 24/7 customer support'
    }
  ];

  const faqs = [
    {
      question: language === 'it' 
        ? "Cos'è la consulenza AI per aziende?"
        : "What is AI consulting for businesses?",
      answer: language === 'it'
        ? "La consulenza AI è un servizio strategico che aiuta le aziende a identificare, progettare e implementare soluzioni di intelligenza artificiale per ottimizzare processi, ridurre costi e migliorare le performance. Partiamo sempre da un'analisi dei dati esistenti e delle esigenze specifiche del business per proporre use case concreti e misurabili."
        : "AI consulting is a strategic service that helps companies identify, design, and implement artificial intelligence solutions to optimize processes, reduce costs, and improve performance. We always start with an analysis of existing data and specific business needs to propose concrete and measurable use cases."
    },
    {
      question: language === 'it'
        ? "Quanto costa un progetto AI?"
        : "How much does an AI project cost?",
      answer: language === 'it'
        ? "Il costo varia in base alla complessità del progetto, alla quantità di dati da processare e al livello di integrazione richiesto. Un Proof of Concept parte da €15.000, mentre progetti enterprise possono arrivare a €100.000+. Offriamo sempre una consulenza iniziale gratuita per valutare l'investimento necessario e il ROI atteso."
        : "The cost varies based on project complexity, amount of data to process, and required integration level. A Proof of Concept starts from €15,000, while enterprise projects can reach €100,000+. We always offer a free initial consultation to assess the necessary investment and expected ROI."
    },
    {
      question: language === 'it'
        ? "Serve un'infrastruttura dati interna?"
        : "Is an internal data infrastructure required?",
      answer: language === 'it'
        ? "Non necessariamente. Lavoriamo con aziende di ogni dimensione e maturità digitale. Se i dati sono frammentati o poco strutturati, la consulenza include anche una fase di data preparation e orchestrazione. In alcuni casi proponiamo soluzioni cloud-based che non richiedono investimenti infrastrutturali pesanti."
        : "Not necessarily. We work with companies of all sizes and digital maturity. If data is fragmented or poorly structured, consulting also includes a data preparation and orchestration phase. In some cases, we propose cloud-based solutions that don't require heavy infrastructure investments."
    },
    {
      question: language === 'it'
        ? "Quanto tempo serve per ottenere risultati?"
        : "How long does it take to see results?",
      answer: language === 'it'
        ? "Dipende dal progetto. Un chatbot AI può essere operativo in 4-6 settimane. Un sistema di predictive analytics richiede 2-3 mesi per la raccolta dati e il training dei modelli. Progetti complessi di automazione possono richiedere 6-12 mesi. Lavoriamo sempre con milestone incrementali per mostrare valore progressivo."
        : "It depends on the project. An AI chatbot can be operational in 4-6 weeks. A predictive analytics system requires 2-3 months for data collection and model training. Complex automation projects may require 6-12 months. We always work with incremental milestones to show progressive value."
    },
    {
      question: language === 'it'
        ? "Offrite formazione al team?"
        : "Do you offer team training?",
      answer: language === 'it'
        ? "Assolutamente sì. Ogni progetto AI include una fase di knowledge transfer e formazione personalizzata per il team interno. Offriamo anche percorsi formativi dedicati (AI Literacy, AI for Marketing, AI for Operations) e supporto continuativo per garantire l'autonomia nella gestione delle soluzioni implementate."
        : "Absolutely yes. Every AI project includes a knowledge transfer phase and personalized training for the internal team. We also offer dedicated training paths (AI Literacy, AI for Marketing, AI for Operations) and ongoing support to ensure autonomy in managing implemented solutions."
    }
  ];

  return (
    <div>
      <Breadcrumb items={[{ label: language === 'it' ? 'Consulenza AI' : 'AI Consulting' }]} />

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">
                {language === 'it' 
                  ? 'Consulenza AI per Aziende e Processi Digitali'
                  : 'AI Consulting for Companies and Digital Processes'}
              </h1>
              <p className="text-2xl mb-4" style={{ color: 'var(--accent-1)' }}>
                {language === 'it'
                  ? 'Intelligenza artificiale per far crescere la tua azienda.'
                  : 'Artificial intelligence to grow your business.'}
              </p>
              <p className="text-xl text-[var(--muted)] mb-8">
                {language === 'it'
                  ? 'Ti accompagniamo nella trasformazione digitale con soluzioni AI che ottimizzano i processi, migliorano le performance e semplificano le decisioni.'
                  : 'We guide you through digital transformation with AI solutions that optimize processes, improve performance, and simplify decisions.'}
              </p>
              <Link to="/contatti">
                <Button size="lg" className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
                  {language === 'it' ? 'Richiedi una Consulenza AI gratuita' : 'Request a Free AI Consultation'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] opacity-10 absolute inset-0 blur-3xl"></div>
              <div className="relative p-8 rounded-2xl border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                <BrainCircuit className="w-full h-auto" style={{ color: 'var(--accent-1)' }} strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">
              {language === 'it' 
                ? 'Dati, automazione e intelligenza: il nuovo vantaggio competitivo'
                : 'Data, automation and intelligence: the new competitive advantage'}
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              {language === 'it'
                ? "L'intelligenza artificiale è la chiave per migliorare efficienza, qualità e redditività. Con la nostra consulenza AI, aiutiamo imprese e PMI a:"
                : 'Artificial intelligence is the key to improving efficiency, quality and profitability. With our AI consulting, we help companies and SMEs to:'}
            </p>
          </div>

          <h3 className="mb-6">
            {language === 'it' ? 'Benefici chiave dell\'AI' : 'Key AI Benefits'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              language === 'it' ? 'Automatizzare processi ripetitivi' : 'Automate repetitive processes',
              language === 'it' ? 'Ridurre i costi operativi' : 'Reduce operational costs',
              language === 'it' ? 'Anticipare trend e comportamenti' : 'Anticipate trends and behaviors',
              language === 'it' ? 'Migliorare la produttività dei team' : 'Improve team productivity',
              language === 'it' ? 'Innovare prodotti e servizi' : 'Innovate products and services'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--background)' }}>
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-1)' }} />
                <h4 className="text-lg">{benefit}</h4>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatCard 
              value="+35%" 
              label={language === 'it' ? 'Efficienza media progetti AI' : 'Average AI project efficiency'} 
            />
            <StatCard 
              value="82%" 
              label={language === 'it' ? 'CEO considerano AI vantaggio competitivo' : 'CEOs consider AI a competitive advantage'} 
            />
          </div>
          <p className="text-sm text-[var(--muted)] text-center mt-4">
            {language === 'it' ? 'Fonte: McKinsey Global AI Survey 2025' : 'Source: McKinsey Global AI Survey 2025'}
          </p>
        </div>
      </section>

      {/* Ambiti Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">
              {language === 'it' 
                ? "Dove interveniamo con l'intelligenza artificiale"
                : 'Where we intervene with artificial intelligence'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ambiti.map((ambito, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border transition-all hover:shadow-lg"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center mb-4">
                  <ambito.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-3">{ambito.title}</h3>
                <p className="text-[var(--muted)]">{ambito.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">
              {language === 'it' 
                ? 'Un metodo concreto, dal dato al risultato'
                : 'A concrete method, from data to results'}
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {methodology.map((step, index) => (
              <div 
                key={index}
                className="flex gap-6 p-6 rounded-xl border"
                style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
              >
                <div className="flex-shrink-0">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
                      color: 'white'
                    }}
                  >
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2">{step.title}</h4>
                  <p className="text-[var(--muted)]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl" style={{ color: 'var(--accent-1)' }}>
              {language === 'it'
                ? 'Ogni progetto AI parte dai tuoi dati e finisce con risultati misurabili.'
                : 'Every AI project starts from your data and ends with measurable results.'}
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">
              {language === 'it' 
                ? 'AI che genera risultati concreti'
                : 'AI that generates concrete results'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {cases.map((caseItem, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl text-center border"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div className="text-sm uppercase tracking-wide mb-2" style={{ color: 'var(--muted)' }}>
                  {caseItem.sector}
                </div>
                <div className="text-5xl mb-2" style={{ 
                  background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {caseItem.result}
                </div>
                <div className="text-xl mb-4">{caseItem.metric}</div>
                <p className="text-sm text-[var(--muted)]">{caseItem.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contatti">
              <Button variant="outline" size="lg">
                {language === 'it' ? 'Scopri come applicare l\'AI al tuo business' : 'Discover how to apply AI to your business'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">
              {language === 'it'
                ? 'Vuoi portare l\'AI nella tua azienda?'
                : 'Want to bring AI to your company?'}
            </h2>
            <p className="text-xl text-[var(--muted)] mb-8">
              {language === 'it'
                ? 'Richiedi una consulenza personalizzata: analizziamo i tuoi flussi, i dati disponibili e individuiamo le soluzioni AI più efficaci per il tuo business.'
                : 'Request a personalized consultation: we analyze your workflows, available data, and identify the most effective AI solutions for your business.'}
            </p>
            <Link to="/contatti">
              <Button size="lg" className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
                {language === 'it' ? 'Prenota una Consulenza AI' : 'Book an AI Consultation'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">
              {language === 'it' ? 'Domande Frequenti' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-[var(--muted)]">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};
