export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  )
}
