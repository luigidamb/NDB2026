import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="py-6 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-[var(--muted)]" />
              {item.path ? (
                <Link 
                  to={item.path}
                  className="text-sm text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-sm text-[var(--text)]">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
