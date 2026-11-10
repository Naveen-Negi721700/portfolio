import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects, profile } from "../data";

function ProjectCard({ p, i }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={(i % 2) * 100}>
      <article className="card flex h-full flex-col p-7">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-pink-300">
          <span>0{i + 1}</span>
          <span>{p.tag}</span>
        </div>
        <h3 className="mt-5 font-display text-3xl text-white">{p.name}</h3>
        <p className="mt-3 text-pink-100/65">{p.blurb}</p>

        <ul className="mt-6 grid grid-cols-3 gap-3">
          {p.stats.map(([v, l]) => (
            <li key={l} className="rounded-xl border border-pink-400/15 bg-black/20 p-3">
              <div className="font-display text-xl text-white">{v}</div>
              <div className="text-[11px] text-pink-100/50">{l}</div>
            </li>   
          ))}        
          
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="rounded-full border border-pink-400/20 px-3 py-1 text-xs text-pink-100/70">{s}</span>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} aria-expanded={open} className="mt-6 self-start text-sm font-semibold text-pink-300 hover:text-white">
          {open ? "Hide case study −" : "Case study +"}
        </button>

        {open && (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-pink-100/70">
            {p.points.map((x) => <li key={x}>{x}</li>)}
          </ul>
        )}

        <div className="mt-auto flex gap-5 pt-6 text-sm font-semibold">
          <a href={p.repo || profile.github} target="_blank" rel="noreferrer" className="text-white hover:text-pink-300">Repository ↗</a>
          {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-white hover:text-pink-300">Live demo ↗</a>}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <SectionHeading n="03" label="Selected work">
        Products, not <em className="text-pink-300">assignments.</em>
      </SectionHeading>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
      </div>
      <a href={profile.github + "?tab=repositories"} target="_blank" rel="noreferrer" className="mt-10 inline-block text-sm font-semibold text-pink-300 hover:text-white">
        More experiments on GitHub ↗
      </a>
    </section>
  );
}


