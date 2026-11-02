import type { ReactNode } from 'react';

// One capture group per token so `split` keeps the tokens: `**bold**` or `[label](https://…)`.
const INLINE_TOKEN = /(\*\*[^*\s][^*]*\*\*|\[[^\]]+\]\(https?:\/\/[^)\s]+\))/g;
const LINK_TOKEN = /^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/;

/** Renders `**bold**` spans and external `[label](url)` links inside one line; the rest stays plain text. */
export function renderInlineMarkdown(text: string): ReactNode[] {
  return text.split(INLINE_TOKEN).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={index} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const link = part.match(LINK_TOKEN);
    if (link) {
      return (
        <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer" className="link-wavy break-all">
          {link[1]}
        </a>
      );
    }
    return part;
  });
}

/**
 * Minimal renderer for the markdown subset used in a project's `full_description`:
 * `## ` headings, `- ` bullets, `![alt](src)` figures, paragraphs, inline bold and external links.
 * Table rows (`|`) are skipped on purpose; structured facts live in dedicated fields.
 */
export function renderProjectMarkdown(markdown: string): ReactNode[] {
  return markdown
    .trim()
    .split('\n')
    .map((line, index) => {
      const value = line.trim();
      if (!value || value.startsWith('|')) return null;

      if (value.startsWith('## ')) {
        return (
          <h2 key={index} className="mb-4 mt-10 text-2xl font-bold tracking-tight text-ink md:text-3xl">
            {value.slice(3)}
          </h2>
        );
      }

      if (value.startsWith('- ')) {
        return (
          <div key={index} className="mb-3 flex gap-3 text-ink-soft">
            <span className="mt-0.5 shrink-0 font-bold text-accent" aria-hidden="true">→</span>
            <span className="leading-relaxed">{renderInlineMarkdown(value.slice(2))}</span>
          </div>
        );
      }

      if (value.startsWith('![')) {
        const match = value.match(/!\[(.*?)\]\((.*?)\)/);
        if (!match) return null;
        return (
          <figure key={index} className="my-10 overflow-hidden rounded-2xl border-2 border-ink bg-card shadow-sketch-sm">
            <img src={match[2]} alt={match[1]} className="w-full object-cover" />
            <figcaption className="border-t-2 border-ink px-5 py-3 font-hand text-lg text-ink-soft">
              {match[1]}
            </figcaption>
          </figure>
        );
      }

      return (
        <p key={index} className="mb-5 text-base leading-relaxed text-ink-soft md:text-lg">
          {renderInlineMarkdown(value)}
        </p>
      );
    });
}
