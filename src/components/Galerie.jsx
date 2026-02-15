import { useMemo, useState } from "react";
import blackImg1 from "../assets/galerie/black-1.jpg";
import blackImg2 from "../assets/galerie/black-2.jpg";
import dotImg1 from "../assets/galerie/dot-1.jpg";
import dotImg2 from "../assets/galerie/dot-2.jpg";
import ornImg1 from "../assets/galerie/orn-1.jpg";
import ornImg2 from "../assets/galerie/orn-2.jpg";
import Container from "./Container";
import Reveal from "./Reveal";

const ITEMS = [
  { src: blackImg1, style: "Blackwork" },
  { src: dotImg1, style: "Dotwork" },
  { src: ornImg1, style: "Ornemental" },
  { src: blackImg2, style: "Blackwork" },
  { src: dotImg2, style: "Dotwork" },
  { src: ornImg2, style: "Ornemental" },
];

const FILTERS = ["Tous", "Blackwork", "Dotwork", "Ornemental"];

export default function Gallery() {
  const [active, setActive] = useState("Tous");

  const filtered = useMemo(() => {
    if (active === "Tous") return ITEMS;
    return ITEMS.filter((item) => item.style === active);
  }, [active]);

  return (
    <section id="galerie" className="py-16 lg:py-24">
      <Container>
        {/* Header */}
        <Reveal amount={0.7} duration={0.8} y={16}>
          <div className="mb-10 lg:mb-12">
            <h2 className="text-2xl font-semibold tracking-tight">Galerie</h2>
            <p className="mt-2 max-w-xl text-zinc-400">
              Sélection de réalisations récentes.
            </p>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal amount={0.7} duration={0.8} y={16} delay={0.05}>
          <div className="mb-8 flex flex-wrap gap-3">
            {FILTERS.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={`rounded-full border px-4 py-2 text-sm transition whitespace-nowrap
                    ${
                      isActive
                        ? "border-white bg-white text-zinc-950"
                        : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                    }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid (no wrapper reveal) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <Reveal
              key={`${item.style}-${i}`}
              amount={0.2}
              duration={0.7}
              y={14}
              delay={i * 0.04}
            >
              <figure className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="aspect-4/5 w-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={`${item.style} tattoo`}
                    className="h-full w-full object-cover block grayscale brightness-90 transition duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                    loading="lazy"
                    draggable="false"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                <figcaption className="absolute bottom-3 left-3 rounded-full bg-zinc-950/80 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
                  {item.style}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
