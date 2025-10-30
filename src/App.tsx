import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import { LanguageProvider } from './components/LanguageContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServiziPage } from './pages/ServiziPage';
import { LeadGenerationPage } from './pages/LeadGenerationPage';
import { CROPage } from './pages/CROPage';
import { MartechAIPage } from './pages/MartechAIPage';
import { EcommercePage } from './pages/EcommercePage';
import { WebDevelopmentPage } from './pages/WebDevelopmentPage';
import { ConsulenzaAIPage } from './pages/ConsulenzaAIPage';
import { AutomotivePage } from './pages/AutomotivePage';
import { CaseStudyListPage } from './pages/CaseStudyListPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { ChiSiamoPage } from './pages/ChiSiamoPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { CareersPage } from './pages/CareersPage';
import { ContattiPage } from './pages/ContattiPage';
import './styles/globals.css';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />
              
              {/* Servizi */}
              <Route path="/servizi" element={<ServiziPage />} />
              <Route path="/servizi/lead-generation" element={<LeadGenerationPage />} />
              <Route path="/servizi/cro" element={<CROPage />} />
              <Route path="/servizi/martech-ai" element={<MartechAIPage />} />
              <Route path="/servizi/ecommerce" element={<EcommercePage />} />
              <Route path="/servizi/web-development" element={<WebDevelopmentPage />} />
              
              {/* Consulenza AI */}
              <Route path="/consulenza-ai" element={<ConsulenzaAIPage />} />
              
              {/* Automotive */}
              <Route path="/automotive" element={<AutomotivePage />} />
              
              {/* Case Study */}
              <Route path="/case-study" element={<CaseStudyListPage />} />
              <Route path="/case-study/:id" element={<CaseStudyDetailPage />} />
              
              {/* Chi Siamo */}
              <Route path="/chi-siamo" element={<ChiSiamoPage />} />
              
              {/* Blog */}
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogArticlePage />} />
              
              {/* Careers */}
              <Route path="/careers" element={<CareersPage />} />
              
              {/* Contatti */}
              <Route path="/contatti" element={<ContattiPage />} />
              
              {/* Catch-all route - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
