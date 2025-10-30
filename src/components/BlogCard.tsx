import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { Badge } from './ui/badge';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  excerpt,
  category,
  date,
  readTime,
  image
}) => {
  return (
    <Link to={`/blog/${slug}`} className="h-full block">
      <article 
        className="group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] h-full flex flex-col"
        style={{ 
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)'
        }}
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[var(--accent-1)]/20 to-[var(--accent-2)]/20 flex-shrink-0">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl opacity-20">📝</div>
            </div>
          )}
          <Badge className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm border-white/20">
            {category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-4 text-[var(--muted)] mb-4 h-5">
            <small className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </small>
            <small className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </small>
          </div>

          <h4 className="mb-3 group-hover:text-[var(--accent-2)] transition-colors line-clamp-2 min-h-[3.5rem]">
            {title}
          </h4>
          
          <p className="text-[var(--muted)] line-clamp-3 min-h-[4.5rem]">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
};
