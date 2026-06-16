export function SectionHeader({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return <div data-reveal="up" className={`mb-10 md:mb-14 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}><p className="eyebrow mb-5 text-navy/45">{eyebrow}</p><h2 className="text-4xl font-medium leading-[1.02] tracking-[-.055em] md:text-6xl">{title}</h2>{copy && <p className="mt-6 max-w-2xl text-sm leading-7 text-navy/60 md:text-base">{copy}</p>}</div>;
}
