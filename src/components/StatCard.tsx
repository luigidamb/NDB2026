import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => {
  return (
    <div className="text-center">
      {icon && <div className="text-4xl mb-3">{icon}</div>}
      <h3 className="mb-2 bg-gradient-to-r from-[var(--accent-1)] via-[var(--accent-rose)] to-[var(--accent-2)] bg-clip-text text-transparent">
        {value}
      </h3>
      <p className="text-[var(--muted)]">{label}</p>
    </div>
  );
};
