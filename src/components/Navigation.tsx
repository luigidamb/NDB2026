import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { Menu, X, ChevronDown, Sun, Moon, Languages } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { useTranslations } from '../translations';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslations(language);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  const navItems = [
    { label: t('nav.home'), path: '/' },
    {
      label: t('nav.services'),
      path: '/servizi',
      submenu: [
        { label: t('servicesMenu.leadGeneration'), path: '/servizi/lead-generation' },
        { label: t('servicesMenu.cro'), path: '/servizi/cro' },
        { label: t('servicesMenu.martechAi'), path: '/servizi/martech-ai' },
        { label: t('servicesMenu.ecommerce'), path: '/servizi/ecommerce' },
        { label: t('servicesMenu.webDev'), path: '/servizi/web-development' },
      ],
    },
    { label: t('nav.consulenzaAi'), path: '/consulenza-ai' },
    { label: t('nav.automotive'), path: '/automotive' },
    { label: t('nav.caseStudy'), path: '/case-study' },
    { label: t('nav.about'), path: '/chi-siamo' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}>
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 transition-colors hover:text-[var(--accent-2)] whitespace-nowrap ${
                    location.pathname === item.path ? 'text-[var(--accent-2)]' : 'text-[var(--text)]'
                  }`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {item.submenu && activeDropdown === item.label && (
                  <div 
                    className="absolute left-0 pt-8 min-w-[240px]"
                    style={{ top: '100%' }}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div 
                      className="py-2 rounded-xl shadow-xl"
                      style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2 transition-colors hover:bg-white/5"
                          style={{ color: 'var(--text)' }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg" style={{ backgroundColor: 'var(--surface)' }}>
              <button
                onClick={() => setLanguage('it')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'it' ? 'text-[var(--accent-2)]' : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                IT
              </button>
              <span className="text-[var(--border)]">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'en' ? 'text-[var(--accent-2)]' : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                EN
              </button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            <Link to="/contatti">
              <Button className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] hover:opacity-90">
                {t('nav.contact')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[340px] p-6 overflow-y-auto" style={{ backgroundColor: 'var(--bg)', borderLeft: '1px solid var(--border)' }}>
              <SheetTitle className="sr-only">{t('nav.menu') || 'Menu di navigazione'}</SheetTitle>
              <SheetDescription className="sr-only">
                {t('nav.menuDescription') || 'Navigazione principale del sito'}
              </SheetDescription>
              <div className="flex flex-col h-full">
                {/* Navigation Links */}
                <div className="flex flex-col gap-1 mb-6">
                  {navItems.map((item) => (
                    <div key={item.path} className="flex flex-col">
                      {item.submenu ? (
                        <>
                          <button
                            onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === item.label ? null : item.label)}
                            className="flex items-center justify-between w-full py-3 px-4 rounded-lg transition-colors hover:bg-white/5"
                            style={{ color: 'var(--text)' }}
                          >
                            <span>{item.label}</span>
                            <ChevronDown 
                              className={`w-4 h-4 transition-transform ${
                                mobileSubmenuOpen === item.label ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>
                          {mobileSubmenuOpen === item.label && (
                            <div className="flex flex-col gap-1 ml-4 mt-1 mb-2">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  onClick={() => setMobileOpen(false)}
                                  className="py-2 px-4 rounded-lg transition-colors hover:bg-white/5"
                                  style={{ 
                                    color: location.pathname === subItem.path ? 'var(--accent-2)' : 'var(--muted)'
                                  }}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={() => setMobileOpen(false)}
                          className="py-3 px-4 rounded-lg transition-colors hover:bg-white/5"
                          style={{ 
                            color: location.pathname === item.path ? 'var(--accent-2)' : 'var(--text)'
                          }}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div className="mt-auto pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                  {/* Language Switcher */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Languages className="w-4 h-4" style={{ color: 'var(--muted)' }} />
                      <span className="text-sm" style={{ color: 'var(--muted)' }}>
                        {t('nav.language') || 'Lingua'}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setLanguage('it')}
                        className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                          language === 'it' 
                            ? 'bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] text-white' 
                            : 'hover:bg-white/5'
                        }`}
                        style={{ color: language === 'it' ? 'white' : 'var(--muted)' }}
                      >
                        Italiano
                      </button>
                      <button
                        onClick={() => setLanguage('en')}
                        className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                          language === 'en' 
                            ? 'bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] text-white' 
                            : 'hover:bg-white/5'
                        }`}
                        style={{ color: language === 'en' ? 'white' : 'var(--muted)' }}
                      >
                        English
                      </button>
                    </div>
                  </div>

                  {/* Theme Toggle */}
                  <Button
                    variant="outline"
                    onClick={toggleTheme}
                    className="w-full justify-start gap-3 mb-4 h-12"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    {theme === 'light' ? (
                      <>
                        <Moon className="w-5 h-5" />
                        <span>{t('nav.darkTheme')}</span>
                      </>
                    ) : (
                      <>
                        <Sun className="w-5 h-5" />
                        <span>{t('nav.lightTheme')}</span>
                      </>
                    )}
                  </Button>

                  {/* Contact Button */}
                  <Link to="/contatti" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] hover:opacity-90 h-12">
                      {t('nav.contact')}
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
