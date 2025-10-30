import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTranslations } from '../translations';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  return (
    <footer className="border-t mt-24" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Logo variant="inverse" />
            <p className="mt-6 text-[var(--muted)] max-w-sm">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Servizi */}
          <div className="lg:col-span-2">
            <h5 className="mb-4">{t('footer.services')}</h5>
            <ul className="space-y-3">
              <li><Link to="/servizi/lead-generation" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">{t('servicesMenu.leadGeneration')}</Link></li>
              <li><Link to="/servizi/cro" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">{t('servicesMenu.cro')}</Link></li>
              <li><Link to="/servizi/martech-ai" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">{t('servicesMenu.martechAi')}</Link></li>
              <li><Link to="/servizi/ecommerce" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">{t('servicesMenu.ecommerce')}</Link></li>
              <li><Link to="/servizi/web-development" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">{t('servicesMenu.webDev')}</Link></li>
              <li><Link to="/consulenza-ai" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">{t('nav.consulenzaAi')}</Link></li>
              <li><Link to="/automotive" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">{t('nav.automotive')}</Link></li>
            </ul>
          </div>

          {/* Azienda */}
          <div className="lg:col-span-2">
            <h5 className="mb-4">{t('footer.company')}</h5>
            <ul className="space-y-3">
              <li><Link to="/chi-siamo" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/case-study" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">{t('nav.caseStudy')}</Link></li>
              <li><Link to="/contatti" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Risorse */}
          <div className="lg:col-span-2">
            <h5 className="mb-4">{t('footer.resources')}</h5>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">{t('nav.blog')}</Link></li>
              <li><Link to="/careers" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">{t('nav.careers')}</Link></li>
            </ul>
          </div>

          {/* Contatti */}
          <div className="lg:col-span-3">
            <h5 className="mb-4">{t('nav.contact')}</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--accent-2)] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@ndbwebservice.com" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors break-all">
                  info@ndbwebservice.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--accent-2)] mt-0.5 flex-shrink-0" />
                <span className="text-[var(--muted)]">+39 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--accent-2)] mt-0.5 flex-shrink-0" />
                <span className="text-[var(--muted)]">Centro Direzionale<br />Napoli, Italia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--border)' }}>
          <p className="text-sm text-[var(--muted)]">
            {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/cookie" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors">
              {t('footer.cookie')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
