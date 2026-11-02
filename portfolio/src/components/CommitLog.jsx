import { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data";

const LEVELS = ["bg-white/[0.06]", "bg-pink-900", "bg-pink-700", "bg-pink-500", "bg-pink-300"];

export default function CommitLog() {
  const [days, setDays] = useState(null);
  const [error, setError] = useState(false);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${profile.githubUser}?y=last`)
      .then((r) => r.json())
      .then((d) => setDays(d.contributions))
      .catch(() => setError(true));
  }, []);

  const summary = useMemo(() => {
    if (!days) return null;
    let total = 0, active = 0, run = 0, best = 0, busiest = days[0];
    days.forEach((d) => {
      total += d.count;
      if (d.count > 0) { active++; run++; best = Math.max(best, run); } else run = 0;
      if (d.count > busiest.count) busiest = d;
    });
    return { total, active, best, busiest };
  }, [days]);

  const pad = days ? new Date(days[0].date).getUTCDay() : 0; // align first day to its weekday row

  return (
    <section id="commits" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <SectionHeading n="02" label="Commit log">
        A year of building, <em className="text-pink-300">one square</em> at a time.
      </SectionHeading>

      <Reveal className="card p-6">
        {error && <p className="text-pink-100/60">Couldn't load contribution data right now.</p>}
        {!days && !error && <p className="text-pink-100/60">Loading contribution data…</p>}
        {days && (
          <>
            <div className="mb-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                ["Contributions", summary.total],
                ["Active days", summary.active],
                ["Longest streak", `${summary.best} days`],
                ["Busiest day", `${summary.busiest.count}`],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-pink-100/50">{k}</div>
                  <div className="font-display text-3xl text-white">{v}</div>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto pb-2">
              <div className="grid grid-flow-col grid-rows-7 gap-[3px]" style={{ width: "max-content" }}>
                {Array.from({ length: pad }).map((_, i) => <span key={"p" + i} className="h-3 w-3" />)}
                {days.map((d) => (
                  <span
                    key={d.date}
                    tabIndex={0}
                    onMouseEnter={() => setHover(d)}
                    onFocus={() => setHover(d)}
                    className={`h-3 w-3 rounded-[3px] ${LEVELS[d.level]}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-pink-100/50">
              <span>{hover ? `${hover.count} contributions on ${hover.date}` : "Hover or focus a day to inspect it."}</span>
              <span className="flex items-center gap-1">
                Less {LEVELS.map((l) => <i key={l} className={`h-3 w-3 rounded-[3px] ${l}`} />)} More
              </span>
            </div>
          </>
        )}
      </Reveal>
    </section>
  );
}
