import { stats } from "../data";

export default function Stats() {
  return (
    <section className="border-y border-pink-900/30 bg-[#140810]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4 lg:px-12">
        {stats.map(([value, label]) => (
          <div key={label}>
            <div className="font-display text-5xl font-light text-white">{value}</div>
            <div className="mt-1 text-sm text-pink-100/60">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


