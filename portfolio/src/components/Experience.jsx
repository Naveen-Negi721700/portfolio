import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience, education } from "../data";

function Entry({ when, title, org, children, badge }) {
  return (
    <div className="relative">
      <span className="absolute -left-[35px] top-2 h-3 w-3 rounded-full bg-pink-400 ring-4 ring-[#0d050a]" />
      <p className="font-mono text-xs uppercase tracking-widest text-pink-300">{when}</p>
      <h4 className="mt-1 text-xl font-semibold text-white">{title}</h4>
      <p className="text-pink-100/60">{org}</p>
      {badge && <span className="mt-2 inline-block rounded-full border border-pink-400/25 px-3 py-1 text-xs text-pink-100/70">{badge}</span>}
      {children}
    </div>
  );


}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <SectionHeading n="06" label="Experience & education">
        The path <em className="text-pink-300">so far.</em>
      </SectionHeading>

      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <h3 className="mb-8 font-display text-2xl text-white">Experience</h3>
          <div className="ml-2 space-y-10 border-l border-pink-400/25 pl-7">
            {experience.map(([when, title, org, points]) => (
              <Entry key={title} when={when} title={title} org={org}>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-pink-100/70">
                  {points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </Entry>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="mb-8 font-display text-2xl text-white">Education</h3>
          <div className="ml-2 space-y-10 border-l border-pink-400/25 pl-7">
            {education.map(([when, title, org, badge]) => (
              <Entry key={title} when={when} title={title} org={org} badge={badge} />
            ))}
          </div>

          <h3 className="mb-4 mt-14 font-display text-2xl text-white">Certifications</h3>
          <ul className="space-y-2 text-sm text-pink-100/70">
            <li className="card p-4">GeeksforGeeks — 160 Days DSA Challenge</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
