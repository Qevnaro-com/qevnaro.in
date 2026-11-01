import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Breadcrumbs = ({ items }: { items: { label: string; to?: string }[] }) => (
  <nav aria-label="Breadcrumb" className="mb-6">
    <ol className="flex flex-wrap items-center gap-1.5 text-xs text-fg-muted">
      <li><Link to="/" className="hover:text-fg transition-colors">Home</Link></li>
      {items.map((it, i) => (
        <li key={i} className="flex items-center gap-1.5">
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          {it.to ? (
            <Link to={it.to} className="hover:text-fg transition-colors">{it.label}</Link>
          ) : (
            <span aria-current="page" className="text-fg-soft">{it.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
