import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const links = [
    ["GitHub", "@" + profile.githubUser, profile.github],
    profile.linkedin && ["LinkedIn", "Naveen Negi", profile.linkedin],
    profile.portfolio && ["Portfolio", "Visit", profile.portfolio],
    ["Phone", profile.phone, "tel:" + profile.phone.replace(/\s/g, "")],
  ].filter(Boolean);

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <Reveal className="hero-bg rounded-3xl border border-pink-400/20 p-8 md:p-16">
        <SectionHeading n="07" label="Contact">
          Let's build something <em className="text-pink-300">worth explaining.</em>
        </SectionHeading>
        <p className="max-w-xl text-lg text-pink-100/65">
          Have a problem worth solving, or want to talk backend systems and secure APIs? I'm open to internships and
          junior full-stack roles, and my inbox is open.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href={"mailto:" + profile.email} className="rounded-full bg-gradient-to-br from-[#8a1a40] to-[#5e0f2c] px-7 py-4 font-semibold text-white transition hover:brightness-125">
            {profile.email}
          </a>
          <button onClick={copy} className="rounded-full border border-pink-400/25 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
            {copied ? "Copied ✓" : "Copy email"}
          </button>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(([k, v, href]) => (
            <li key={k}>
              <a href={href} target="_blank" rel="noreferrer" className="card block p-4">
                <div className="font-mono text-[11px] uppercase tracking-widest text-pink-100/50">{k}</div>
                <div className="mt-1 text-white">{v}</div>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
