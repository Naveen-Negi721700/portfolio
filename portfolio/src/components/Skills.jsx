import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills, fundamentals } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <SectionHeading n="04" label="Toolkit">
        Tools I reach for, <em className="text-pink-300">and why.</em>
      </SectionHeading>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map(([n, title, items, note], i) => (
          <Reveal key={title} delay={i * 60}>
            <div className="card h-full p-6">
              <p className="font-mono text-xs tracking-widest text-pink-300">{n} {title}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s} className="rounded-full border border-pink-400/25 bg-pink-400/5 px-3 py-1.5 text-sm text-white">{s}</li>
                ))}
                {/* <div></div> */}
              </ul>
              <p className="mt-4 text-sm text-pink-100/55">{note}</p>
            </div>
          </Reveal>
        ))}

        <Reveal delay={300}>
          <div className="card h-full p-6">
            <p className="font-mono text-xs tracking-widest text-pink-300">06 Fundamentals</p>
            <p className="mt-4 font-display text-xl leading-relaxed text-white">
              {fundamentals.map((f, i) => (
                <span key={f}>{f}{i < fundamentals.length - 1 && <span className="px-2 text-pink-400">/</span>}</span>
              ))}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
