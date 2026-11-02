import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { achievements } from "../data";

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <SectionHeading n="05" label="Recognition">
        Proof, <em className="text-pink-300">on the record.</em>
      </SectionHeading>
      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map(([big, eyebrow, title, text], i) => (
          <Reveal key={title} delay={i * 100}>
            <div className="card h-full p-7">
              <div className="font-display text-6xl font-light italic text-pink-300">{big}</div>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-pink-100/50">{eyebrow}</p>
              <h3 className="mt-2 font-display text-2xl text-white">{title}</h3>
              <p className="mt-3 text-sm text-pink-100/65">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
