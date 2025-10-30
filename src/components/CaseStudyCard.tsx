import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  metrics: { label: string; value: string }[];
  image?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  title,
  client,
  category,
  description,
  metrics,
  image
}) => {
  return (
    <Link to={`/case-study/${id}`} className="h-full block">
      <div 
        className="group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] h-full flex flex-col"
        style={{ 
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)'
        }}
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[var(--accent-1)]/20 to-[var(--accent-2)]/20 flex-shrink-0">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl opacity-20">📊</div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Badge className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm border-white/20">
            {category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <small className="text-[var(--accent-2)] mb-2 block h-5">{client}</small>
          <h4 className="mb-3 group-hover:text-[var(--accent-2)] transition-colors min-h-[3.5rem]">{title}</h4>
          <p className="text-[var(--muted)] mb-6 line-clamp-2 min-h-[3rem]">{description}</p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {metrics.slice(0, 3).map((metric, index) => (
              <div key={index}>
                <h5 className="text-[var(--accent-2)] mb-1">{metric.value}</h5>
                <small className="text-[var(--muted)] block">{metric.label}</small>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[var(--accent-2)] group-hover:gap-3 transition-all mt-auto">
            <small className="block">Leggi il case study</small>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};
