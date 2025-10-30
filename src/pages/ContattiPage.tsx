import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

export const ContattiPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  
  return (
    <div>
      <Breadcrumb items={[{ label: t('nav.contact') }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div>
              <h1 className="mb-6">Parla con un esperto</h1>
              <p className="text-xl text-[var(--muted)] mb-12">
                Raccontaci il tuo progetto. Ti risponderemo entro 24 ore con un'analisi preliminare 
                e una proposta personalizzata. Zero impegno.
              </p>

              <h2 className="mb-6">I nostri contatti</h2>
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2">Email</h3>
                    <h4 className="text-[var(--muted)]">
                      <a href="mailto:info@ndbwebservice.com" className="hover:text-[var(--accent-2)] transition-colors">
                        info@ndbwebservice.com
                      </a>
                    </h4>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2">Telefono</h3>
                    <h4 className="text-[var(--muted)]">
                      <a href="tel:+39XXXXXXXXX" className="hover:text-[var(--accent-2)] transition-colors">
                        +39 XXX XXX XXXX
                      </a>
                    </h4>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2">Sede</h3>
                    <h4 className="text-[var(--muted)]">
                      Centro Direzionale, Isola E7<br />
                      80143 Napoli, Italia
                    </h4>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2">Orari</h3>
                    <h4 className="text-[var(--muted)]">
                      Lun - Ven: 9:00 - 18:00<br />
                      Sab - Dom: Chiuso
                    </h4>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-8 bg-gradient-to-br from-[var(--accent-1)]/10 to-[var(--accent-2)]/10" style={{ border: '1px solid var(--border)' }}>
                <h3 className="mb-4">✓ Cosa succede dopo</h3>
                <ul className="space-y-3 text-sm text-[var(--muted)]">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent-2)] flex-shrink-0">1.</span>
                    <h4>Analizziamo la tua richiesta e il tuo business</h4>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent-2)] flex-shrink-0">2.</span>
                    <h4>Ti contattiamo entro 24h per una call conoscitiva</h4>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent-2)] flex-shrink-0">3.</span>
                    <h4>Ti proponiamo una strategia e un preventivo personalizzato</h4>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent-2)] flex-shrink-0">4.</span>
                    <h4>Iniziamo a lavorare insieme sui tuoi obiettivi</h4>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                <h2 className="mb-8">Richiedi una consulenza</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">Nome *</Label>
                      <Input 
                        id="firstName" 
                        className="bg-[var(--bg)] border-[var(--border)] mt-2" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Cognome *</Label>
                      <Input 
                        id="lastName" 
                        className="bg-[var(--bg)] border-[var(--border)] mt-2" 
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email aziendale *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      className="bg-[var(--bg)] border-[var(--border)] mt-2" 
                      required 
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Azienda *</Label>
                    <Input 
                      id="company" 
                      className="bg-[var(--bg)] border-[var(--border)] mt-2" 
                      required 
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefono</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      className="bg-[var(--bg)] border-[var(--border)] mt-2" 
                    />
                  </div>

                  <div>
                    <Label htmlFor="services">Servizi di interesse *</Label>
                    <Select>
                      <SelectTrigger className="bg-[var(--bg)] border-[var(--border)] mt-2">
                        <SelectValue placeholder="Seleziona uno o più servizi" />
                      </SelectTrigger>
                      <SelectContent className="bg-[var(--surface)] border-[var(--border)]">
                        <SelectItem value="lead-gen">Lead Generation</SelectItem>
                        <SelectItem value="cro">CRO</SelectItem>
                        <SelectItem value="martech">Martech & AI</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="web-dev">Web Development</SelectItem>
                        <SelectItem value="automotive">Automotive</SelectItem>
                        <SelectItem value="altro">Altro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budget">Budget mensile indicativo</Label>
                    <Select>
                      <SelectTrigger className="bg-[var(--bg)] border-[var(--border)] mt-2">
                        <SelectValue placeholder="Seleziona un range" />
                      </SelectTrigger>
                      <SelectContent className="bg-[var(--surface)] border-[var(--border)]">
                        <SelectItem value="1k-3k">€1.000 - €3.000</SelectItem>
                        <SelectItem value="3k-5k">€3.000 - €5.000</SelectItem>
                        <SelectItem value="5k-10k">€5.000 - €10.000</SelectItem>
                        <SelectItem value="10k-20k">€10.000 - €20.000</SelectItem>
                        <SelectItem value="20k+">€20.000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Raccontaci il tuo progetto *</Label>
                    <Textarea 
                      id="message" 
                      rows={5}
                      className="bg-[var(--bg)] border-[var(--border)] mt-2" 
                      placeholder="Descrivi i tuoi obiettivi, sfide attuali e cosa ti aspetti da una collaborazione con noi..."
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox id="privacy" className="mt-1" required />
                    <Label htmlFor="privacy" className="text-sm text-[var(--muted)] cursor-pointer">
                      Acconsento al trattamento dei miei dati personali secondo la Privacy Policy di NDB Web Service. 
                      I dati saranno utilizzati esclusivamente per rispondere alla richiesta.
                    </Label>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox id="marketing" className="mt-1" />
                    <Label htmlFor="marketing" className="text-sm text-[var(--muted)] cursor-pointer">
                      Acconsento a ricevere comunicazioni marketing su servizi, case study e insights (puoi disiscriverti in qualsiasi momento)
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]"
                  >
                    Invia richiesta
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-xs text-center text-[var(--muted)]">
                    Ti risponderemo entro 24 ore lavorative
                  </p>
                </form>
              </div>

              {/* Calendly CTA */}
              <div className="mt-8 rounded-2xl p-6 text-center" style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}>
                <h3 className="mb-3">Oppure prenota direttamente una call</h3>
                <h4 className="text-sm text-[var(--muted)] mb-6">
                  Scegli un orario comodo nel nostro calendario
                </h4>
                <Button variant="outline" className="border-[var(--border)]">
                  Prenota una call gratuita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
