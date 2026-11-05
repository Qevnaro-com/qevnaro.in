import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export const Accordion = ({ items }: { items: { q: string; a: string }[] }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3.5">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`card-glow rounded-2xl border transition-all duration-300 ${
              isOpen
                ? 'border-brand-blue/50 bg-surface/90 shadow-[0_8px_32px_rgba(37,99,235,0.14)]'
                : 'border-line bg-surface/40 hover:border-line-strong hover:bg-surface/70'
            }`}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
              >
                <span className={`font-display text-base font-semibold transition-colors sm:text-lg ${isOpen ? 'text-fg' : 'text-fg-soft'}`}>
                  {f.q}
                </span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? 'rotate-45 border-transparent bg-gradient-to-br from-brand-blue to-accent-cyan text-ink shadow-[0_0_16px_rgba(56,189,248,0.5)]'
                      : 'border-line-strong text-fg-muted hover:border-fg/40 hover:text-fg'
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-${i}`}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-line/40 px-5 pb-6 pt-4 text-sm leading-relaxed text-fg-soft sm:px-6 sm:text-base">
                    <p>{f.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
