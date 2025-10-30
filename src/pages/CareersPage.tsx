import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useLanguage } from '../components/LanguageContext';
import { useTranslations } from '../translations';
import { TrendingUp, Users, Lightbulb, Award, MapPin, Briefcase, ArrowRight } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const values = [
    {
      icon: TrendingUp,
      title: 'Crescita Continua',
      description: 'Budget formazione, certificazioni e accesso ai migliori tool del settore'
    },
    {
      icon: Users,
      title: 'Team Collaborativo',
      description: 'Ambiente stimolante con professionisti appassionati e competenti'
    },
    {
      icon: Lightbulb,
      title: 'Cultura Test & Learn',
      description: 'Sperimentazione, innovazione e apprendimento dagli errori'
    },
    {
      icon: Award,
      title: 'Risultati che Contano',
      description: 'Lavoriamo su progetti sfidanti con KPI reali e impatto misurabile'
    }
  ];

  const openPositions = [
    {
      title: 'Performance Marketing Specialist',
      type: 'Full-time',
      location: 'Napoli / Remote',
      description: 'Cerchiamo uno specialist per gestire campagne Google Ads, Meta e LinkedIn per clienti B2B e B2C.',
      requirements: ['2+ anni esperienza Google/Meta Ads', 'Conoscenza analytics e tracking', 'Inglese fluente'],
    },
    {
      title: 'CRO Analyst',
      type: 'Full-time',
      location: 'Napoli / Remote',
      description: 'Analisi dati, A/B testing e ottimizzazione funnel per massimizzare le conversioni dei clienti.',
      requirements: ['Esperienza con tool CRO (Optimizely, VWO, Hotjar)', 'Capacità analitiche e pensiero critico', 'Conoscenza statistica per A/B test'],
    },
    {
      title: 'Martech Developer',
      type: 'Full-time',
      location: 'Napoli / Hybrid',
      description: 'Implementazione stack Martech: CRM, automazioni, integrazioni API e tracking avanzato.',
      requirements: ['Conoscenza HubSpot/Salesforce', 'JavaScript, API REST, GTM', 'Esperienza con automazioni marketing'],
    }
  ];

  return (
    <div>
      <Breadcrumb items={[{ label: 'Lavora con noi' }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="mb-6">Lavora con noi</h1>
            <p className="text-xl text-[var(--muted)]">
              Unisciti a un team di specialist appassionati di performance marketing, AI e Martech. 
              Lavoriamo su progetti sfidanti con clienti ambiziosi e tecnologie all'avanguardia.
            </p>
          </div>

          <h2 className="mb-12">Perché NDB</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <h4 className="text-sm text-[var(--muted)]">{value.description}</h4>
                </div>
              );
            })}
          </div>

          <h2 className="mb-12">Posizioni aperte</h2>
          <div className="space-y-6 mb-24">
            {openPositions.map((position, i) => (
              <div 
                key={i}
                className="rounded-2xl p-8"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="mb-3">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <h4>{position.type}</h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <h4>{position.location}</h4>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] whitespace-nowrap">
                    Candidati ora
                  </Button>
                </div>

                <h4 className="text-[var(--muted)] mb-6">{position.description}</h4>

                <div>
                  <h4 className="mb-3">Requisiti:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, j) => (
                      <li key={j} className="flex items-start gap-3 text-[var(--muted)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-2)] mt-2 flex-shrink-0" />
                        <h4>{req}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-12" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
            <h2 className="mb-8 text-center">Candidatura spontanea</h2>
            <p className="text-center text-[var(--muted)] mb-12 max-w-2xl mx-auto">
              Non hai trovato la posizione giusta ma pensi di poter contribuire al team? 
              Inviaci il tuo CV e raccontaci cosa sai fare.
            </p>

            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Nome e Cognome *</Label>
                  <Input 
                    id="name" 
                    className="bg-[var(--bg)] border-[var(--border)] mt-2" 
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    className="bg-[var(--bg)] border-[var(--border)] mt-2" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Telefono</Label>
                  <Input 
                    id="phone" 
                    className="bg-[var(--bg)] border-[var(--border)] mt-2" 
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input 
                    id="linkedin" 
                    placeholder="https://linkedin.com/in/..."
                    className="bg-[var(--bg)] border-[var(--border)] mt-2" 
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="role">Ruolo di interesse</Label>
                <Input 
                  id="role" 
                  placeholder="es: Performance Marketing Specialist"
                  className="bg-[var(--bg)] border-[var(--border)] mt-2" 
                />
              </div>

              <div>
                <Label htmlFor="message">Presentati e racconta le tue competenze *</Label>
                <Textarea 
                  id="message" 
                  rows={6}
                  className="bg-[var(--bg)] border-[var(--border)] mt-2" 
                  placeholder="Parlaci della tua esperienza, competenze tecniche e cosa ti motiva..."
                  required
                />
              </div>

              <div>
                <Label htmlFor="cv">Curriculum Vitae (PDF) *</Label>
                <Input 
                  id="cv" 
                  type="file"
                  accept=".pdf"
                  className="bg-[var(--bg)] border-[var(--border)] mt-2" 
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]"
              >
                Invia candidatura
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-xs text-center text-[var(--muted)]">
                Inviando il form accetti il trattamento dei tuoi dati personali secondo la nostra Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 text-center">
          <h2 className="mb-6">Seguici su LinkedIn</h2>
          <p className="text-xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
            Rimani aggiornato sulle nuove posizioni, case study e insights dal team.
          </p>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-[var(--border)]">
              Seguici su LinkedIn
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};
