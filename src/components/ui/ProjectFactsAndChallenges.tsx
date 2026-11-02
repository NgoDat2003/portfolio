import type { ProjectChallenge } from '../../data/projects';

export interface ProjectFact {
  label: string;
  value?: string;
}

/** Case-study fact grid under the project title; facts without a value are hidden. */
export function ProjectFactsList({ facts }: { facts: ProjectFact[] }) {
  const visibleFacts = facts.filter((fact): fact is Required<ProjectFact> => Boolean(fact.value));

  return (
    <dl className="grid flex-1 grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
      {visibleFacts.map((fact) => (
        <div key={fact.label}>
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{fact.label}</dt>
          <dd className="mt-1 text-base font-semibold leading-snug text-ink">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** "Thử thách & giải pháp" cards; renders nothing for projects without challenges. */
export function ProjectChallengesSection({ challenges }: { challenges?: ProjectChallenge[] }) {
  if (!challenges?.length) return null;

  return (
    <section className="mt-12" aria-labelledby="project-challenges-heading">
      <p className="font-hand text-xl text-accent-dark">bài toán thật, cách giải thật</p>
      <h2 id="project-challenges-heading" className="mt-1 text-2xl font-bold tracking-tight text-ink md:text-3xl">
        Thử thách &amp; giải pháp
      </h2>

      <ol className="mt-6 space-y-5">
        {challenges.map((challenge, index) => (
          <li key={challenge.title} className="sketch-card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-marker font-bold text-ink"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="pt-1 text-lg font-bold leading-snug text-ink md:text-xl">{challenge.title}</h3>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border-2 border-dashed border-ink/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Vấn đề</p>
                <p className="mt-2 leading-relaxed text-ink-soft">{challenge.problem}</p>
              </div>
              <div className="rounded-xl border-2 border-ink bg-pastel-sage p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">Giải pháp</p>
                <p className="mt-2 leading-relaxed text-ink">{challenge.solution}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
