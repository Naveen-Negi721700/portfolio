export default function SectionHeading({ n, label, children }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-pink-300">
        <b className="mr-3 font-medium text-pink-400">{n}</b>
        {label}
      </p>
      <h2 className="mt-4 max-w-3xl font-display text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
        {children}
      </h2>
    </div>
  );
}
