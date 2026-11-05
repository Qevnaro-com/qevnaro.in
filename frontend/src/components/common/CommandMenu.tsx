import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Code2, Cpu, TrendingUp, Sparkles, Phone, FileText } from 'lucide-react';

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Services' | 'Actions';
  href?: string;
  action?: () => void;
  icon: React.ComponentType<{ className?: string }>;
}

export const CommandMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery('');
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  const ITEMS: CommandItem[] = [
    { id: 'home', title: 'Home Overview', category: 'Navigation', href: '/', icon: Sparkles },
    { id: 'work', title: 'Our Work & Case Studies', category: 'Navigation', href: '/work', icon: FileText },
    { id: 'services', title: 'All Services Directory', category: 'Navigation', href: '/services', icon: Code2 },
    { id: 'contact', title: 'Contact & Book Consultation', category: 'Actions', href: '/contact', icon: Phone },
    { id: 'web-dev', title: 'Web Development & Platforms', category: 'Services', href: '/services/web-development', icon: Code2 },
    { id: 'ai-agents', title: 'AI Automation & Agents', category: 'Services', href: '/services/ai-automation', icon: Cpu },
    { id: 'seo-geo', title: 'Search & GEO Optimization', category: 'Services', href: '/services/seo', icon: TrendingUp },
    { id: 'branding', title: 'Brand & Creative Systems', category: 'Services', href: '/services/branding', icon: Sparkles },
  ];

  const filtered = ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase())
  );

  const executeItem = (item: CommandItem) => {
    handleClose();
    if (item.href) navigate(item.href);
    if (item.action) item.action();
  };

  return (
    <>
      {/* Floating Shortcut Pill on Desktop & Mobile */}
      <button
        onClick={handleOpen}
        aria-label="Open command palette"
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-[#0d1017]/90 px-3.5 py-1.5 font-mono text-xs text-zinc-400 shadow-xl backdrop-blur-md transition-all hover:border-white/20 hover:text-white active:scale-95 cursor-pointer"
      >
        <Search className="h-3.5 w-3.5 text-sky-400" />
        <span>Quick Jump</span>
        <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-zinc-300 font-sans">⌘K</kbd>
      </button>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.18 }}
              className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0c1017] p-2 shadow-2xl shadow-black overflow-hidden z-10"
            >
              {/* Search Bar Input */}
              <div className="flex items-center gap-3 border-b border-white/5 px-3 py-2.5">
                <Search className="h-4 w-4 text-sky-400 flex-shrink-0" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent font-sans text-sm text-white placeholder-zinc-500 focus:outline-none"
                />
                <button
                  onClick={handleClose}
                  className="rounded-md p-1 text-zinc-500 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="max-h-72 overflow-y-auto p-1.5 space-y-1 scrollbar-none">
                {filtered.length === 0 ? (
                  <div className="py-8 text-center font-mono text-xs text-zinc-500">
                    No matching destinations found.
                  </div>
                ) : (
                  filtered.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => executeItem(item)}
                        className="group flex w-full items-center justify-between rounded-xl px-3 py-2 text-left font-sans text-xs transition-colors hover:bg-white/[0.06] cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-3.5 w-3.5 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                          <span className="text-zinc-200 group-hover:text-white font-medium">{item.title}</span>
                          <span className="font-mono text-[10px] text-zinc-600">[{item.category}]</span>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 text-zinc-600 group-hover:text-sky-400 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    );
                  })
                )}
              </div>

              {/* Dialog Footer */}
              <div className="flex items-center justify-between border-t border-white/5 px-3 py-2 font-mono text-[10px] text-zinc-500">
                <span>Navigate with arrow keys</span>
                <span>ESC to exit</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandMenu;
