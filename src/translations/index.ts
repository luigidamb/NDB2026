import { Language } from '../components/LanguageContext';

export const translations = {
  // Navigation
  nav: {
    home: { it: 'Home', en: 'Home' },
    services: { it: 'Servizi', en: 'Services' },
    consulenzaAi: { it: 'Consulenza AI', en: 'AI Consulting' },
    automotive: { it: 'Automotive', en: 'Automotive' },
    caseStudy: { it: 'Case Study', en: 'Case Studies' },
    about: { it: 'Chi Siamo', en: 'About Us' },
    blog: { it: 'Blog', en: 'Blog' },
    careers: { it: 'Careers', en: 'Careers' },
    contact: { it: 'Contattaci', en: 'Contact Us' },
    lightTheme: { it: 'Tema Chiaro', en: 'Light Theme' },
    darkTheme: { it: 'Tema Scuro', en: 'Dark Theme' },
  },

  // Services submenu
  servicesMenu: {
    leadGeneration: { it: 'Lead Generation', en: 'Lead Generation' },
    cro: { it: 'CRO', en: 'CRO' },
    martechAi: { it: 'Martech & AI', en: 'Martech & AI' },
    ecommerce: { it: 'E-commerce', en: 'E-commerce' },
    webDev: { it: 'Web Development', en: 'Web Development' },
  },

  // Footer
  footer: {
    tagline: { 
      it: 'Performance marketing data-driven dal 2001', 
      en: 'Data-driven performance marketing since 2001' 
    },
    services: { it: 'Servizi', en: 'Services' },
    company: { it: 'Azienda', en: 'Company' },
    resources: { it: 'Risorse', en: 'Resources' },
    legal: { it: 'Legal', en: 'Legal' },
    privacy: { it: 'Privacy Policy', en: 'Privacy Policy' },
    terms: { it: 'Termini e Condizioni', en: 'Terms & Conditions' },
    cookie: { it: 'Cookie Policy', en: 'Cookie Policy' },
    rights: { it: '© 2024 NDB Web Service. Tutti i diritti riservati.', en: '© 2024 NDB Web Service. All rights reserved.' },
    vat: { it: 'P.IVA', en: 'VAT' },
  },

  // Common
  common: {
    readMore: { it: 'Scopri di più', en: 'Learn More' },
    contactUs: { it: 'Contattaci', en: 'Contact Us' },
    back: { it: 'Indietro', en: 'Back' },
    next: { it: 'Avanti', en: 'Next' },
    submit: { it: 'Invia', en: 'Submit' },
    loading: { it: 'Caricamento...', en: 'Loading...' },
    viewAll: { it: 'Vedi tutti', en: 'View All' },
    readArticle: { it: 'Leggi articolo', en: 'Read Article' },
    viewCaseStudy: { it: 'Vedi case study', en: 'View Case Study' },
  },

  // Home Page
  home: {
    hero: {
      title: { 
        it: 'Dati. Performance. Risultati.', 
        en: 'Data. Performance. Results.' 
      },
      subtitle: { 
        it: 'Performance marketing data-driven che genera lead qualificati e massimizza il ROI lungo tutto il funnel di conversione.', 
        en: 'Data-driven performance marketing that generates qualified leads and maximizes ROI throughout the conversion funnel.' 
      },
      cta: { it: 'Richiedi consulenza gratuita', en: 'Request Free Consultation' },
    },
    stats: {
      leads: { it: 'Lead generati', en: 'Leads Generated' },
      roi: { it: 'ROI medio', en: 'Average ROI' },
      experience: { it: 'Anni di esperienza', en: 'Years of Experience' },
      clients: { it: 'Clienti attivi', en: 'Active Clients' },
    },
    services: {
      title: { it: 'I nostri servizi', en: 'Our Services' },
      subtitle: { 
        it: 'Soluzioni data-driven per ogni fase del funnel', 
        en: 'Data-driven solutions for every funnel stage' 
      },
      leadGen: {
        title: { it: 'Lead Generation & Performance Ads', en: 'Lead Generation & Performance Ads' },
        desc: { 
          it: 'Acquisizione qualificata su Google, Meta, LinkedIn e TikTok con modelli CPL, CPA e CPO.', 
          en: 'Qualified acquisition on Google, Meta, LinkedIn and TikTok with CPL, CPA and CPO models.' 
        },
        feature1: { it: 'Campagne multi-canale data-driven', en: 'Multi-channel data-driven campaigns' },
        feature2: { it: 'Landing page ad alta conversione', en: 'High-conversion landing pages' },
        feature3: { it: 'Retargeting e audience optimization', en: 'Retargeting and audience optimization' },
        feature4: { it: 'Tracciamento end-to-end', en: 'End-to-end tracking' },
      },
      martech: {
        title: { it: 'Martech & AI', en: 'Martech & AI' },
        desc: { 
          it: 'CRM, automazioni marketing, lead scoring predittivo e chatbot AI per massimizzare la conversione.', 
          en: 'CRM, marketing automation, predictive lead scoring and AI chatbots to maximize conversion.' 
        },
        feature1: { it: 'CRM & Marketing Automation', en: 'CRM & Marketing Automation' },
        feature2: { it: 'Lead scoring predittivo', en: 'Predictive lead scoring' },
        feature3: { it: 'Chatbot AI conversazionali', en: 'Conversational AI chatbots' },
        feature4: { it: 'Orchestrazione dati e CDP', en: 'Data orchestration and CDP' },
      },
      cro: {
        title: { it: 'Conversion Rate Optimization', en: 'Conversion Rate Optimization' },
        desc: { 
          it: 'A/B test continuo, analisi funnel e personalizzazioni per aumentare le conversioni.', 
          en: 'Continuous A/B testing, funnel analysis and personalization to increase conversions.' 
        },
        feature1: { it: 'A/B testing e multivariate', en: 'A/B and multivariate testing' },
        feature2: { it: 'Heatmap e session recording', en: 'Heatmaps and session recording' },
        feature3: { it: 'Personalizzazione dinamica', en: 'Dynamic personalization' },
        feature4: { it: 'Test scientifici con uplift misurato', en: 'Scientific testing with measured uplift' },
      },
      ecom: {
        title: { it: 'E-commerce Growth', en: 'E-commerce Growth' },
        desc: { 
          it: 'Strategia omnicanale end-to-end per aumentare traffico, conversion rate e AOV.', 
          en: 'End-to-end omnichannel strategy to increase traffic, conversion rate and AOV.' 
        },
        feature1: { it: 'Google Shopping & Feed optimization', en: 'Google Shopping & Feed optimization' },
        feature2: { it: 'Amazon & Marketplace ads', en: 'Amazon & Marketplace ads' },
        feature3: { it: 'Email & SMS automation', en: 'Email & SMS automation' },
        feature4: { it: 'Post-purchase retention', en: 'Post-purchase retention' },
      },
      webdev: {
        title: { it: 'Web Development', en: 'Web Development' },
        desc: { 
          it: 'Siti performanti, scalabili e conversion-focused con tecnologie moderne.', 
          en: 'High-performance, scalable and conversion-focused websites with modern technologies.' 
        },
        feature1: { it: 'React, Next.js & headless CMS', en: 'React, Next.js & headless CMS' },
        feature2: { it: 'Core Web Vitals optimization', en: 'Core Web Vitals optimization' },
        feature3: { it: 'SEO technical & structured data', en: 'Technical SEO & structured data' },
        feature4: { it: 'API integration & automazioni', en: 'API integration & automation' },
      },
      automotive: {
        title: { it: 'Automotive Marketing', en: 'Automotive Marketing' },
        desc: { 
          it: 'Lead generation concessionari, CRO configuratori, omnicanale dealer-focused.', 
          en: 'Dealership lead generation, configurator CRO, dealer-focused omnichannel.' 
        },
        feature1: { it: 'Test drive & preventivi qualificati', en: 'Qualified test drives & quotes' },
        feature2: { it: 'Configurator optimization', en: 'Configurator optimization' },
        feature3: { it: 'Drive-to-store campaigns', en: 'Drive-to-store campaigns' },
        feature4: { it: 'Dealer network automation', en: 'Dealer network automation' },
      },
    },
    cta: {
      title: { 
        it: 'Pronto a far crescere il tuo business?', 
        en: 'Ready to grow your business?' 
      },
      subtitle: { 
        it: 'Parliamo dei tuoi obiettivi e costruiamo insieme una strategia data-driven su misura.', 
        en: "Let's discuss your goals and build a tailored data-driven strategy together." 
      },
    },
    method: {
      title: { it: 'Il nostro metodo', en: 'Our Method' },
      subtitle: { it: 'Approccio data-driven in 4 fasi', en: 'Data-driven approach in 4 phases' },
      step1: {
        title: { it: 'Analisi', en: 'Analysis' },
        desc: { 
          it: 'Audit completo di traffico, conversioni e stack tecnologico. Identifichiamo le opportunità di crescita.', 
          en: 'Complete audit of traffic, conversions and tech stack. We identify growth opportunities.' 
        },
      },
      step2: {
        title: { it: 'Strategia', en: 'Strategy' },
        desc: { 
          it: 'Roadmap personalizzata con KPI chiari, budget allocation e piano di test scientifici.', 
          en: 'Personalized roadmap with clear KPIs, budget allocation and scientific testing plan.' 
        },
      },
      step3: {
        title: { it: 'Implementazione', en: 'Implementation' },
        desc: { 
          it: 'Setup campagne, CRM, tracking, landing page e automazioni. Sprint agili e QA rigoroso.', 
          en: 'Campaign setup, CRM, tracking, landing pages and automation. Agile sprints and rigorous QA.' 
        },
      },
      step4: {
        title: { it: 'Ottimizzazione', en: 'Optimization' },
        desc: { 
          it: 'Monitoraggio continuo, A/B test, analisi dati e iterazioni per migliorare le performance.', 
          en: 'Continuous monitoring, A/B testing, data analysis and iterations to improve performance.' 
        },
      },
    },
    cases: {
      title: { it: 'Case study in evidenza', en: 'Featured Case Studies' },
      subtitle: { it: 'Risultati reali, misurabili', en: 'Real, measurable results' },
      case1: {
        title: { it: '+120% Test Drive in 90 Giorni', en: '+120% Test Drives in 90 Days' },
        client: { it: 'Dealer Network Automotive', en: 'Automotive Dealer Network' },
        category: { it: 'Automotive', en: 'Automotive' },
        desc: { 
          it: 'Funnel NLT integrato con geo-ads e CRM automation per generare richieste qualificate.', 
          en: 'Integrated NLT funnel with geo-ads and CRM automation to generate qualified requests.' 
        },
        metric1Label: { it: 'Test Drive', en: 'Test Drives' },
        metric2Label: { it: 'CPL', en: 'CPL' },
        metric3Label: { it: 'Conv. Rate', en: 'Conv. Rate' },
      },
      case2: {
        title: { it: 'CPL Ridotto del 35% in 3 Mesi', en: 'CPL Reduced 35% in 3 Months' },
        client: { it: 'SaaS B2B', en: 'B2B SaaS' },
        category: { it: 'Lead Generation', en: 'Lead Generation' },
        desc: { 
          it: 'Strategia multi-canale su LinkedIn e Google con lead nurturing automatizzato.', 
          en: 'Multi-channel strategy on LinkedIn and Google with automated lead nurturing.' 
        },
        metric1Label: { it: 'CPL', en: 'CPL' },
        metric2Label: { it: 'SQL', en: 'SQL' },
        metric3Label: { it: 'Pipeline', en: 'Pipeline' },
      },
      case3: {
        title: { it: '+75% Vendite con CRO + Google Ads', en: '+75% Sales with CRO + Google Ads' },
        client: { it: 'E-commerce Fashion', en: 'Fashion E-commerce' },
        category: { it: 'E-commerce', en: 'E-commerce' },
        desc: { 
          it: 'Ottimizzazione checkout, Performance Max e strategie di retention.', 
          en: 'Checkout optimization, Performance Max and retention strategies.' 
        },
        metric1Label: { it: 'Vendite', en: 'Sales' },
        metric2Label: { it: 'ROAS', en: 'ROAS' },
        metric3Label: { it: 'AOV', en: 'AOV' },
      },
    },
    blog: {
      title: { it: 'Dal blog', en: 'From the Blog' },
      subtitle: { it: 'Insights e strategie', en: 'Insights and Strategies' },
    },
    partners: {
      title: { it: 'Partnership e Certificazioni', en: 'Partnerships & Certifications' },
    },
  },

  // Services Page
  servizi: {
    hero: {
      title: { it: 'Servizi di Performance Marketing', en: 'Performance Marketing Services' },
      subtitle: { 
        it: 'Soluzioni data-driven integrate per generare lead, ottimizzare conversioni e massimizzare il ROI lungo tutto il funnel.', 
        en: 'Integrated data-driven solutions to generate leads, optimize conversions, and maximize ROI throughout the funnel.' 
      },
    },
    approach: {
      title: { it: 'Il nostro approccio', en: 'Our Approach' },
      subtitle: { 
        it: 'Metodologia data-driven end-to-end', 
        en: 'End-to-end data-driven methodology' 
      },
      step1: {
        title: { it: 'Analisi & Strategia', en: 'Analysis & Strategy' },
        desc: { 
          it: 'Audit completo, analisi competitor, definizione KPI e roadmap data-driven personalizzata.', 
          en: 'Complete audit, competitor analysis, KPI definition, and personalized data-driven roadmap.' 
        },
      },
      step2: {
        title: { it: 'Implementazione', en: 'Implementation' },
        desc: { 
          it: 'Setup tracking avanzato, configurazione piattaforme, automazioni e testing framework.', 
          en: 'Advanced tracking setup, platform configuration, automation, and testing framework.' 
        },
      },
      step3: {
        title: { it: 'Ottimizzazione', en: 'Optimization' },
        desc: { 
          it: 'A/B testing continuo, analisi performance, ottimizzazione campagne e CRO iterativo.', 
          en: 'Continuous A/B testing, performance analysis, campaign optimization, and iterative CRO.' 
        },
      },
      step4: {
        title: { it: 'Scale & Growth', en: 'Scale & Growth' },
        desc: { 
          it: 'Scaling controllato, espansione canali, automazione processi e reporting avanzato.', 
          en: 'Controlled scaling, channel expansion, process automation, and advanced reporting.' 
        },
      },
    },
    cta: {
      title: { 
        it: 'Hai bisogno di una strategia su misura?', 
        en: 'Need a tailored strategy?' 
      },
      subtitle: { 
        it: 'Parliamo dei tuoi obiettivi e troviamo la soluzione migliore per il tuo business.', 
        en: "Let's discuss your goals and find the best solution for your business." 
      },
    },
    whyChoose: {
      title: { it: 'Perché scegliere NDB', en: 'Why Choose NDB' },
      reason1: {
        title: { it: 'Data-Driven', en: 'Data-Driven' },
        desc: { 
          it: 'Ogni decisione è supportata da dati, test e analisi approfondite. Zero improvvisazione.', 
          en: 'Every decision is backed by data, testing, and deep analysis. Zero improvisation.' 
        },
      },
      reason2: {
        title: { it: 'Performance First', en: 'Performance First' },
        desc: { 
          it: 'Non ci interessano le vanity metrics. Ci concentriamo su KPI che impattano il business.', 
          en: "We don't care about vanity metrics. We focus on KPIs that impact the business." 
        },
      },
      reason3: {
        title: { it: 'Partnership di Lungo Periodo', en: 'Long-Term Partnership' },
        desc: { 
          it: 'Lavoriamo come un\'estensione del tuo team, con trasparenza e condivisione degli obiettivi.', 
          en: 'We work as an extension of your team, with transparency and shared goals.' 
        },
      },
    },
  },

  // Lead Generation Page
  leadGen: {
    hero: {
      title: { it: 'Lead Generation B2B & B2C', en: 'B2B & B2C Lead Generation' },
      subtitle: { 
        it: 'Campagne multi-canale data-driven che generano lead qualificati pronti alla conversione. 350.000+ lead generati dal 2001.', 
        en: 'Multi-channel data-driven campaigns that generate qualified leads ready for conversion. 350,000+ leads generated since 2001.' 
      },
    },
    results: {
      title: { it: 'Risultati misurabili', en: 'Measurable Results' },
      leads: { it: 'Lead generati', en: 'Leads Generated' },
      cpl: { it: 'Riduzione CPL medio', en: 'Average CPL Reduction' },
      quality: { it: 'Lead qualificati', en: 'Qualified Leads' },
      roi: { it: 'ROI medio campagne', en: 'Average Campaign ROI' },
    },
    channels: {
      title: { it: 'Canali & Tecnologie', en: 'Channels & Technologies' },
      subtitle: { it: 'Approccio multi-canale integrato', en: 'Integrated multi-channel approach' },
      paid: {
        title: { it: 'Paid Advertising', en: 'Paid Advertising' },
        desc: { 
          it: 'Google Ads, Meta Ads, LinkedIn Ads ottimizzati per generazione lead con tracking avanzato e bid automation.', 
          en: 'Google Ads, Meta Ads, LinkedIn Ads optimized for lead generation with advanced tracking and bid automation.' 
        },
      },
      organic: {
        title: { it: 'SEO & Content', en: 'SEO & Content' },
        desc: { 
          it: 'Strategie SEO data-driven e content marketing per attrarre lead organici qualificati lungo tutto il funnel.', 
          en: 'Data-driven SEO strategies and content marketing to attract qualified organic leads throughout the funnel.' 
        },
      },
      automation: {
        title: { it: 'Marketing Automation', en: 'Marketing Automation' },
        desc: { 
          it: 'Nurturing automatizzato, lead scoring, segmentazione dinamica e personalizzazione su larga scala.', 
          en: 'Automated nurturing, lead scoring, dynamic segmentation, and large-scale personalization.' 
        },
      },
    },
    process: {
      title: { it: 'Il nostro processo', en: 'Our Process' },
      attract: {
        title: { it: 'Attract', en: 'Attract' },
        desc: { 
          it: 'Campagne multi-canale per attrarre il target ideale con messaggi data-driven personalizzati.', 
          en: 'Multi-channel campaigns to attract the ideal target with personalized data-driven messages.' 
        },
      },
      capture: {
        title: { it: 'Capture', en: 'Capture' },
        desc: { 
          it: 'Landing page ottimizzate, form intelligenti e lead magnet ad alto valore percepito.', 
          en: 'Optimized landing pages, intelligent forms, and high-perceived-value lead magnets.' 
        },
      },
      qualify: {
        title: { it: 'Qualify', en: 'Qualify' },
        desc: { 
          it: 'Lead scoring automatico, qualification framework e segmentazione basata su comportamento.', 
          en: 'Automatic lead scoring, qualification framework, and behavior-based segmentation.' 
        },
      },
      nurture: {
        title: { it: 'Nurture', en: 'Nurture' },
        desc: { 
          it: 'Email automation, remarketing dinamico e contenuti personalizzati per ogni fase del funnel.', 
          en: 'Email automation, dynamic remarketing, and personalized content for each funnel stage.' 
        },
      },
    },
  },

  // CRO Page
  cro: {
    hero: {
      title: { it: 'Conversion Rate Optimization', en: 'Conversion Rate Optimization' },
      subtitle: { 
        it: 'Ottimizzazione scientifica basata su dati, A/B testing e UX research per massimizzare le conversioni e il revenue per visitatore.', 
        en: 'Scientific optimization based on data, A/B testing, and UX research to maximize conversions and revenue per visitor.' 
      },
    },
    impact: {
      title: { it: 'Impatto misurabile', en: 'Measurable Impact' },
      conversion: { it: 'Aumento conversioni medio', en: 'Average Conversion Increase' },
      revenue: { it: 'Revenue per visitatore', en: 'Revenue per Visitor' },
      tests: { it: 'A/B test eseguiti', en: 'A/B Tests Executed' },
      roi: { it: 'ROI medio CRO', en: 'Average CRO ROI' },
    },
    methodology: {
      title: { it: 'Metodologia CRO', en: 'CRO Methodology' },
      subtitle: { it: 'Approccio scientifico data-driven', en: 'Scientific data-driven approach' },
      research: {
        title: { it: 'Research & Analysis', en: 'Research & Analysis' },
        desc: { 
          it: 'Analytics audit, heatmaps, session recording, user testing e analisi quantitativa/qualitativa.', 
          en: 'Analytics audit, heatmaps, session recording, user testing, and quantitative/qualitative analysis.' 
        },
      },
      hypothesis: {
        title: { it: 'Hypothesis Generation', en: 'Hypothesis Generation' },
        desc: { 
          it: 'Framework ICE per prioritizzazione, identificazione friction points e opportunità di quick wins.', 
          en: 'ICE framework for prioritization, friction point identification, and quick win opportunities.' 
        },
      },
      testing: {
        title: { it: 'Testing & Validation', en: 'Testing & Validation' },
        desc: { 
          it: 'A/B test, multivariate test, validazione statistica e iterazione basata su risultati.', 
          en: 'A/B testing, multivariate testing, statistical validation, and result-based iteration.' 
        },
      },
      implementation: {
        title: { it: 'Implementation & Scale', en: 'Implementation & Scale' },
        desc: { 
          it: 'Rollout winning variants, documentazione learnings e scaling su tutti i touchpoint.', 
          en: 'Rollout winning variants, document learnings, and scale across all touchpoints.' 
        },
      },
    },
    areas: {
      title: { it: 'Aree di ottimizzazione', en: 'Optimization Areas' },
      landing: {
        title: { it: 'Landing Pages', en: 'Landing Pages' },
        desc: { 
          it: 'Hero section, value proposition, form design, trust signals e call-to-action ottimizzati.', 
          en: 'Optimized hero section, value proposition, form design, trust signals, and call-to-action.' 
        },
      },
      checkout: {
        title: { it: 'Checkout & Funnel', en: 'Checkout & Funnel' },
        desc: { 
          it: 'Riduzione friction, cart abandonment recovery, upsell/cross-sell e payment optimization.', 
          en: 'Friction reduction, cart abandonment recovery, upsell/cross-sell, and payment optimization.' 
        },
      },
      mobile: {
        title: { it: 'Mobile Experience', en: 'Mobile Experience' },
        desc: { 
          it: 'Mobile-first design, speed optimization, touch-friendly UI e progressive web app.', 
          en: 'Mobile-first design, speed optimization, touch-friendly UI, and progressive web app.' 
        },
      },
    },
  },

  // Martech & AI Page
  martech: {
    hero: {
      title: { it: 'Martech & AI', en: 'Martech & AI' },
      subtitle: { 
        it: 'Stack tecnologico integrato e AI-powered per automatizzare, personalizzare e scalare le tue attività di marketing con intelligenza.', 
        en: 'Integrated tech stack and AI-powered solutions to automate, personalize, and scale your marketing activities intelligently.' 
      },
    },
    stats: {
      title: { it: 'Tecnologie & impatto', en: 'Technologies & Impact' },
      tools: { it: 'Tool integrati', en: 'Integrated Tools' },
      efficiency: { it: 'Efficienza operativa', en: 'Operational Efficiency' },
      automation: { it: 'Processi automatizzati', en: 'Automated Processes' },
      personalization: { it: 'Personalizzazione dinamica', en: 'Dynamic Personalization' },
    },
    stack: {
      title: { it: 'Martech Stack', en: 'Martech Stack' },
      subtitle: { it: 'Tecnologie che utilizziamo', en: 'Technologies We Use' },
      analytics: {
        title: { it: 'Analytics & BI', en: 'Analytics & BI' },
        desc: { 
          it: 'GA4, GTM, Looker Studio, Mixpanel, Amplitude per tracking completo e insights azionabili.', 
          en: 'GA4, GTM, Looker Studio, Mixpanel, Amplitude for complete tracking and actionable insights.' 
        },
      },
      automation: {
        title: { it: 'Marketing Automation', en: 'Marketing Automation' },
        desc: { 
          it: 'HubSpot, Marketo, ActiveCampaign, Klaviyo per nurturing, segmentazione e personalizzazione.', 
          en: 'HubSpot, Marketo, ActiveCampaign, Klaviyo for nurturing, segmentation, and personalization.' 
        },
      },
      cdp: {
        title: { it: 'CDP & Data', en: 'CDP & Data' },
        desc: { 
          it: 'Segment, mParticle, customer data unification e single customer view cross-canale.', 
          en: 'Segment, mParticle, customer data unification, and cross-channel single customer view.' 
        },
      },
      ai: {
        title: { it: 'AI & Machine Learning', en: 'AI & Machine Learning' },
        desc: { 
          it: 'Predictive analytics, recommendation engines, chatbot AI e content generation automation.', 
          en: 'Predictive analytics, recommendation engines, AI chatbots, and content generation automation.' 
        },
      },
    },
    ai: {
      title: { it: 'AI Applications', en: 'AI Applications' },
      predictive: {
        title: { it: 'Predictive Analytics', en: 'Predictive Analytics' },
        desc: { 
          it: 'Lead scoring predittivo, churn prevention, lifetime value forecasting e next-best-action.', 
          en: 'Predictive lead scoring, churn prevention, lifetime value forecasting, and next-best-action.' 
        },
      },
      personalization: {
        title: { it: 'Hyper-Personalization', en: 'Hyper-Personalization' },
        desc: { 
          it: 'Content dinamico 1:1, product recommendations, dynamic pricing e email personalization.', 
          en: '1:1 dynamic content, product recommendations, dynamic pricing, and email personalization.' 
        },
      },
      automation: {
        title: { it: 'Intelligent Automation', en: 'Intelligent Automation' },
        desc: { 
          it: 'Bid automation, budget allocation dinamica, creative optimization e automated reporting.', 
          en: 'Bid automation, dynamic budget allocation, creative optimization, and automated reporting.' 
        },
      },
    },
  },

  // E-commerce Page
  ecommerce: {
    hero: {
      title: { it: 'E-commerce Growth', en: 'E-commerce Growth' },
      subtitle: { 
        it: 'Strategie data-driven end-to-end per far crescere il tuo e-commerce: acquisizione, conversione, retention e AOV optimization.', 
        en: 'End-to-end data-driven strategies to grow your e-commerce: acquisition, conversion, retention, and AOV optimization.' 
      },
    },
    results: {
      title: { it: 'E-commerce results', en: 'E-commerce Results' },
      revenue: { it: 'Revenue gestito', en: 'Revenue Managed' },
      roas: { it: 'ROAS medio', en: 'Average ROAS' },
      aov: { it: 'Aumento AOV', en: 'AOV Increase' },
      retention: { it: 'Retention rate', en: 'Retention Rate' },
    },
    services: {
      title: { it: 'Servizi E-commerce', en: 'E-commerce Services' },
      acquisition: {
        title: { it: 'Traffic Acquisition', en: 'Traffic Acquisition' },
        desc: { 
          it: 'Google Shopping, Meta Catalog Ads, Paid Social ottimizzati per ROAS e customer acquisition.', 
          en: 'Google Shopping, Meta Catalog Ads, Paid Social optimized for ROAS and customer acquisition.' 
        },
      },
      conversion: {
        title: { it: 'Conversion Optimization', en: 'Conversion Optimization' },
        desc: { 
          it: 'Product page CRO, checkout optimization, cart recovery e on-site personalization.', 
          en: 'Product page CRO, checkout optimization, cart recovery, and on-site personalization.' 
        },
      },
      retention: {
        title: { it: 'Customer Retention', en: 'Customer Retention' },
        desc: { 
          it: 'Email automation, loyalty programs, customer segmentation e win-back campaigns.', 
          en: 'Email automation, loyalty programs, customer segmentation, and win-back campaigns.' 
        },
      },
      analytics: {
        title: { it: 'Analytics & Insights', en: 'Analytics & Insights' },
        desc: { 
          it: 'Enhanced ecommerce tracking, cohort analysis, RFM segmentation e predictive LTV.', 
          en: 'Enhanced ecommerce tracking, cohort analysis, RFM segmentation, and predictive LTV.' 
        },
      },
    },
    platforms: {
      title: { it: 'Piattaforme E-commerce', en: 'E-commerce Platforms' },
      subtitle: { 
        it: 'Esperienza su tutte le principali piattaforme', 
        en: 'Experience on all major platforms' 
      },
    },
  },

  // Web Development Page
  webDev: {
    hero: {
      title: { it: 'Web Development', en: 'Web Development' },
      subtitle: { 
        it: 'Sviluppo web performante, scalabile e conversion-focused con tecnologie moderne e best practices SEO/performance.', 
        en: 'High-performance, scalable, and conversion-focused web development with modern technologies and SEO/performance best practices.' 
      },
    },
    approach: {
      title: { it: 'Tech Stack', en: 'Tech Stack' },
      frontend: {
        title: { it: 'Frontend', en: 'Frontend' },
        desc: { 
          it: 'React, Next.js, TypeScript, Tailwind CSS per UI performanti e manutenibili.', 
          en: 'React, Next.js, TypeScript, Tailwind CSS for performant and maintainable UIs.' 
        },
      },
      backend: {
        title: { it: 'Backend', en: 'Backend' },
        desc: { 
          it: 'Node.js, Python, API RESTful/GraphQL, database SQL/NoSQL scalabili.', 
          en: 'Node.js, Python, RESTful/GraphQL APIs, scalable SQL/NoSQL databases.' 
        },
      },
      performance: {
        title: { it: 'Performance', en: 'Performance' },
        desc: { 
          it: 'Core Web Vitals optimization, lazy loading, CDN, caching strategies.', 
          en: 'Core Web Vitals optimization, lazy loading, CDN, caching strategies.' 
        },
      },
      seo: {
        title: { it: 'SEO Technical', en: 'Technical SEO' },
        desc: { 
          it: 'Structured data, SSR/SSG, sitemap automation, performance optimization.', 
          en: 'Structured data, SSR/SSG, sitemap automation, performance optimization.' 
        },
      },
    },
    services: {
      title: { it: 'Web Development Services', en: 'Web Development Services' },
      custom: {
        title: { it: 'Custom Development', en: 'Custom Development' },
        desc: { 
          it: 'Applicazioni web custom, dashboard, configuratori prodotto e tool interni.', 
          en: 'Custom web applications, dashboards, product configurators, and internal tools.' 
        },
      },
      cms: {
        title: { it: 'CMS & Headless', en: 'CMS & Headless' },
        desc: { 
          it: 'WordPress, Contentful, Strapi, Sanity per content management flessibile.', 
          en: 'WordPress, Contentful, Strapi, Sanity for flexible content management.' 
        },
      },
      integration: {
        title: { it: 'API Integration', en: 'API Integration' },
        desc: { 
          it: 'Integrazione CRM, ERP, payment gateways, marketing automation e third-party APIs.', 
          en: 'CRM, ERP, payment gateways, marketing automation, and third-party API integration.' 
        },
      },
    },
  },

  // Automotive Page
  automotive: {
    hero: {
      title: { it: 'Automotive Marketing', en: 'Automotive Marketing' },
      subtitle: { 
        it: 'Soluzioni specializzate per il settore automotive: lead generation concessionari, CRO configuratori, strategie omnicanale dealer-focused.', 
        en: 'Specialized solutions for the automotive sector: dealership lead generation, configurator CRO, dealer-focused omnichannel strategies.' 
      },
    },
    expertise: {
      title: { it: 'Automotive Expertise', en: 'Automotive Expertise' },
      dealers: { it: 'Concessionari', en: 'Dealerships' },
      brands: { it: 'Brand automotive', en: 'Automotive Brands' },
      leads: { it: 'Test drive generati/anno', en: 'Test Drives/Year' },
      conversion: { it: 'Tasso conversione medio', en: 'Average Conversion Rate' },
    },
    services: {
      title: { it: 'Servizi Automotive', en: 'Automotive Services' },
      leadGen: {
        title: { it: 'Dealership Lead Gen', en: 'Dealership Lead Gen' },
        desc: { 
          it: 'Campagne geo-localizzate per test drive, valutazione usato, finanziamenti e service.', 
          en: 'Geo-targeted campaigns for test drives, trade-ins, financing, and service.' 
        },
      },
      configurator: {
        title: { it: 'Configurator CRO', en: 'Configurator CRO' },
        desc: { 
          it: 'Ottimizzazione configuratori online per massimizzare preventivi e lead qualificati.', 
          en: 'Online configurator optimization to maximize quotes and qualified leads.' 
        },
      },
      omnichannel: {
        title: { it: 'Omnichannel Strategy', en: 'Omnichannel Strategy' },
        desc: { 
          it: 'Integrazione online-offline, drive-to-store, in-dealer experience e follow-up automation.', 
          en: 'Online-offline integration, drive-to-store, in-dealer experience, and follow-up automation.' 
        },
      },
      remarketing: {
        title: { it: 'Automotive Remarketing', en: 'Automotive Remarketing' },
        desc: { 
          it: 'Dynamic remarketing configurazioni, cart abandonment, eventi concessionario.', 
          en: 'Dynamic remarketing for configurations, cart abandonment, dealership events.' 
        },
      },
    },
    solutions: {
      title: { it: 'Soluzioni verticali', en: 'Vertical Solutions' },
      oem: {
        title: { it: 'OEM & Brand', en: 'OEM & Brand' },
        desc: { 
          it: 'Campagne nazionali brand awareness, product launch, lead distribution rete dealer.', 
          en: 'National brand awareness campaigns, product launches, dealer network lead distribution.' 
        },
      },
      dealer: {
        title: { it: 'Dealer Group', en: 'Dealer Group' },
        desc: { 
          it: 'Multi-location management, stock velocity optimization, local marketing automation.', 
          en: 'Multi-location management, stock velocity optimization, local marketing automation.' 
        },
      },
      aftermarket: {
        title: { it: 'Aftermarket', en: 'Aftermarket' },
        desc: { 
          it: 'Service retention, upsell ricambi, loyalty programs e customer lifetime value optimization.', 
          en: 'Service retention, parts upsell, loyalty programs, and customer lifetime value optimization.' 
        },
      },
    },
  },

  // Case Study List Page
  caseStudyList: {
    hero: {
      title: { it: 'Case Study', en: 'Case Studies' },
      subtitle: { 
        it: 'Progetti reali, risultati misurabili. Scopri come aiutiamo i nostri clienti a raggiungere obiettivi concreti con strategie data-driven.', 
        en: 'Real projects, measurable results. Discover how we help our clients achieve concrete goals with data-driven strategies.' 
      },
    },
    filters: {
      all: { it: 'Tutti', en: 'All' },
      leadGen: { it: 'Lead Generation', en: 'Lead Generation' },
      cro: { it: 'CRO', en: 'CRO' },
      ecommerce: { it: 'E-commerce', en: 'E-commerce' },
      automotive: { it: 'Automotive', en: 'Automotive' },
    },
    results: { it: 'Risultati', en: 'Results' },
  },

  // About Page
  about: {
    hero: {
      title: { it: 'Chi Siamo', en: 'About Us' },
      subtitle: { 
        it: 'Dal 2001 aiutiamo aziende B2B e B2C a crescere con performance marketing data-driven, tecnologia e ottimizzazione continua.', 
        en: 'Since 2001, we help B2B and B2C companies grow with data-driven performance marketing, technology, and continuous optimization.' 
      },
    },
    mission: {
      title: { it: 'La nostra missione', en: 'Our Mission' },
      desc: { 
        it: 'Trasformare i dati in azioni concrete che generano risultati misurabili e crescita sostenibile per i nostri clienti.', 
        en: 'Transform data into concrete actions that generate measurable results and sustainable growth for our clients.' 
      },
    },
    values: {
      title: { it: 'I nostri valori', en: 'Our Values' },
      datadriven: {
        title: { it: 'Data-Driven', en: 'Data-Driven' },
        desc: { 
          it: 'Ogni decisione basata su dati, test e metriche verificabili.', 
          en: 'Every decision based on data, testing, and verifiable metrics.' 
        },
      },
      transparency: {
        title: { it: 'Trasparenza', en: 'Transparency' },
        desc: { 
          it: 'Reportistica chiara, comunicazione diretta e risultati misurabili.', 
          en: 'Clear reporting, direct communication, and measurable results.' 
        },
      },
      innovation: {
        title: { it: 'Innovazione', en: 'Innovation' },
        desc: { 
          it: 'Tecnologie all\'avanguardia e sperimentazione continua.', 
          en: 'Cutting-edge technologies and continuous experimentation.' 
        },
      },
      results: {
        title: { it: 'Orientamento ai Risultati', en: 'Results-Oriented' },
        desc: { 
          it: 'Focus su ROI, conversioni e crescita business del cliente.', 
          en: 'Focus on ROI, conversions, and client business growth.' 
        },
      },
    },
    team: {
      title: { it: 'Il team', en: 'The Team' },
      subtitle: { 
        it: 'Esperti specializzati in ogni area del performance marketing', 
        en: 'Experts specialized in every area of performance marketing' 
      },
    },
    cta: {
      title: { it: 'Vuoi entrare nel team?', en: 'Want to Join the Team?' },
      subtitle: { 
        it: 'Cerchiamo talenti appassionati di data, performance e risultati concreti.', 
        en: 'We\'re looking for talents passionate about data, performance, and concrete results.' 
      },
      button: { it: 'Vedi posizioni aperte', en: 'View Open Positions' },
    },
  },

  // Blog List Page
  blogList: {
    hero: {
      title: { it: 'Blog', en: 'Blog' },
      subtitle: { 
        it: 'Insights, strategie e best practices su performance marketing, CRO, lead generation e tecnologie martech.', 
        en: 'Insights, strategies, and best practices on performance marketing, CRO, lead generation, and martech technologies.' 
      },
    },
    categories: {
      all: { it: 'Tutti gli articoli', en: 'All Articles' },
      leadGen: { it: 'Lead Generation', en: 'Lead Generation' },
      cro: { it: 'CRO', en: 'CRO' },
      martech: { it: 'Martech', en: 'Martech' },
      ecommerce: { it: 'E-commerce', en: 'E-commerce' },
      analytics: { it: 'Analytics', en: 'Analytics' },
    },
    readTime: { it: 'min di lettura', en: 'min read' },
  },

  // Careers Page
  careers: {
    hero: {
      title: { it: 'Lavora con noi', en: 'Work With Us' },
      subtitle: { 
        it: 'Entra in un team di esperti appassionati di data, performance e risultati concreti. Cresci professionalmente in un ambiente dinamico e meritocratico.', 
        en: 'Join a team of experts passionate about data, performance, and concrete results. Grow professionally in a dynamic, merit-based environment.' 
      },
    },
    why: {
      title: { it: 'Perché NDB', en: 'Why NDB' },
      growth: {
        title: { it: 'Crescita Professionale', en: 'Professional Growth' },
        desc: { 
          it: 'Formazione continua, certificazioni, progetti sfidanti su clienti enterprise.', 
          en: 'Continuous training, certifications, challenging projects with enterprise clients.' 
        },
      },
      tech: {
        title: { it: 'Tech Stack Avanzato', en: 'Advanced Tech Stack' },
        desc: { 
          it: 'Lavora con le tecnologie più innovative: AI, automation, analytics avanzati.', 
          en: 'Work with cutting-edge technologies: AI, automation, advanced analytics.' 
        },
      },
      culture: {
        title: { it: 'Cultura Data-Driven', en: 'Data-Driven Culture' },
        desc: { 
          it: 'Decisioni basate su dati, testing continuo, approccio scientifico al marketing.', 
          en: 'Data-based decisions, continuous testing, scientific approach to marketing.' 
        },
      },
      flexibility: {
        title: { it: 'Flessibilità', en: 'Flexibility' },
        desc: { 
          it: 'Remote working, orari flessibili, work-life balance rispettato.', 
          en: 'Remote working, flexible hours, respected work-life balance.' 
        },
      },
    },
    positions: {
      title: { it: 'Posizioni aperte', en: 'Open Positions' },
      apply: { it: 'Candidati', en: 'Apply' },
      remote: { it: 'Remote', en: 'Remote' },
      hybrid: { it: 'Ibrido', en: 'Hybrid' },
      fulltime: { it: 'Full-time', en: 'Full-time' },
    },
    spontaneous: {
      title: { it: 'Candidatura spontanea', en: 'Spontaneous Application' },
      desc: { 
        it: 'Non trovi la posizione giusta ma pensi di poter contribuire al team? Inviaci la tua candidatura spontanea.', 
        en: 'Can\'t find the right position but think you can contribute to the team? Send us your spontaneous application.' 
      },
      button: { it: 'Invia CV', en: 'Send CV' },
    },
  },

  // Contact Page
  contact: {
    hero: {
      title: { it: 'Contattaci', en: 'Contact Us' },
      subtitle: { 
        it: 'Parliamo del tuo progetto. Richiedi una consulenza gratuita o un preventivo personalizzato.', 
        en: 'Let\'s talk about your project. Request a free consultation or personalized quote.' 
      },
    },
    form: {
      name: { it: 'Nome e Cognome', en: 'Full Name' },
      email: { it: 'Email', en: 'Email' },
      phone: { it: 'Telefono', en: 'Phone' },
      company: { it: 'Azienda', en: 'Company' },
      service: { it: 'Servizio di interesse', en: 'Service of Interest' },
      selectService: { it: 'Seleziona un servizio', en: 'Select a service' },
      message: { it: 'Messaggio', en: 'Message' },
      privacy: { 
        it: 'Accetto la privacy policy e il trattamento dei dati personali', 
        en: 'I accept the privacy policy and personal data processing' 
      },
      submit: { it: 'Invia richiesta', en: 'Send Request' },
      success: { 
        it: 'Richiesta inviata con successo! Ti contatteremo presto.', 
        en: 'Request sent successfully! We\'ll contact you soon.' 
      },
    },
    info: {
      title: { it: 'Informazioni', en: 'Information' },
      address: { it: 'Indirizzo', en: 'Address' },
      phone: { it: 'Telefono', en: 'Phone' },
      email: { it: 'Email', en: 'Email' },
      hours: { it: 'Orari', en: 'Hours' },
      hoursValue: { it: 'Lun-Ven: 9:00 - 18:00', en: 'Mon-Fri: 9:00 AM - 6:00 PM' },
    },
  },
};

export const useTranslations = (language: Language) => {
  const t = (path: string): string => {
    const keys = path.split('.');
    let value: any = translations;
    
    for (const key of keys) {
      value = value?.[key];
      if (!value) return path;
    }
    
    return value[language] || value['it'] || path;
  };

  return { t };
};
