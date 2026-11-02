import type { ReactNode } from 'react';

/** Renders `**bold**` spans inside a single line; everything else stays plain text. */
export function renderInlineMarkdown(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**') && part.length > 4 ? (
      <strong key={index} className="font-semibold text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

/**
 * Minimal renderer for the markdown subset used in a project's `full_description`:
 * `## ` headings, `- ` bullets, `![alt](src)` figures, paragraphs and inline bold.
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
