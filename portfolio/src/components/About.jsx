import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { principles, facts, milestones } from "../data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <SectionHeading n="01" label="About">
        Engineering that holds up, from the <em className="text-pink-300">API</em> to the last pixel.
      </SectionHeading>

      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal className="space-y-5 text-lg leading-relaxed text-pink-100/65">
          <p>
            I'm a Computer Science & Engineering undergraduate at Shivalik College of Engineering in Dehradun, and a
            full-stack developer working mainly with the <strong className="text-white">MERN stack and Next.js</strong>.
          </p>
          <p>
            I've interned as a Full Stack Engineer at Zetheta Algorithms and worked as a Web Developer at C4 Cause,
            where I built and deployed client websites. On my own I shipped Backora, a backend-as-a-service, and
            ShrinkIt.io, a URL shortener, both with real authentication and API security.
          </p>
          <p>
            I'm drawn to authentication, API security and backend architecture, and I'm working towards becoming a
            software engineer who builds systems other people can rely on.
          </p>
        </Reveal>

        <Reveal delay={100} className="space-y-4">
          {principles.map(([title, text], i) => (
            <div key={title} className="card flex gap-5 p-5">
              <span className="font-display text-3xl italic text-pink-300">{["i.", "ii.", "iii."][i]}</span>
              <div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-pink-100/60">{text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-pink-400/15 bg-pink-400/15">
            {facts.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 bg-[#140810] p-5 sm:flex-row sm:justify-between">
                <dt className="font-mono text-xs uppercase tracking-widest text-pink-100/50">{k}</dt>
                <dd className="text-white sm:text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
   #0d050a
   
        <Reveal delay={100}>
          <h3 className="mb-6 font-display text-2xl text-white">Milestones</h3>
          <ol className="ml-2 space-y-6 border-l border-pink-400/25 pl-7">
            {milestones.map(([when, what]) => (
              <li key={when + what} className="relative">
                <span className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full bg-pink-400 ring-4 ring-[#0d050a]" />
                <p className="font-mono text-xs uppercase tracking-widest text-pink-300">{when}</p>
                <p className="mt-1 text-sm text-pink-100/70">{what}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
