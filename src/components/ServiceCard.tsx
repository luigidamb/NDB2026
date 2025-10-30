import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from './ui/button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  link: string;
  gradient?: string;
  headingLevel?: 'h3' | 'div';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  link,
  gradient = 'from-[var(--accent-1)] to-[var(--accent-2)]',
  headingLevel = 'h3'
}) => {
  const TitleTag = headingLevel;
  return (
    <div 
      className="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full flex flex-col"
      style={{ 
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)'
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`} />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 flex-shrink-0`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        <TitleTag className="mb-2 min-h-[2.5rem]">{title}</TitleTag>
        <p className="text-[var(--muted)] mb-4 min-h-[3rem]">{description}</p>

        <ul className="space-y-2 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-2)] mt-2 flex-shrink-0" />
              <small className="text-[var(--muted)]">{feature}</small>
            </li>
          ))}
        </ul>

        <Link to={link} className="mt-auto">
          <Button 
            variant="ghost" 
            className="group/btn p-0 h-auto hover:bg-transparent text-[var(--accent-2)] text-base"
          >
            Scopri di più
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
