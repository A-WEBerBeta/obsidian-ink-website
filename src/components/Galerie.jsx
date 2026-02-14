import { useState } from "react";
import Container from "./Container";

/* Images de démo — remplace par les tiennes plus tard */
const items = [
  {
    src: "https://images.unsplash.com/photo-1603575448360-153f093fd0db?w=900",
    style: "Blackwork",
  },
  {
    src: "https://images.unsplash.com/photo-1603484477859-abe6a73f9366?w=900",
    style: "Dotwork",
  },
  {
    src: "https://images.unsplash.com/photo-1590246814883-57bfe8c1d5f7?w=900",
    style: "Ornemental",
  },
  {
    src: "https://images.unsplash.com/photo-1541446654331-66c7e7f1a0b3?w=900",
    style: "Blackwork",
  },
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900",
    style: "Dotwork",
  },
  {
    src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900",
    style: "Ornemental",
  },
];

const filters = ["Tous", "Blackwork", "Dotwork", "Ornemental"];

export default function Gallery() {
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous" ? items : items.filter((item) => item.style === active);

  return (
    <section id="galerie" className="py-16">
      <Container>
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight">Galerie</h2>
          <p className="mt-2 max-w-xl text-zinc-400">
            Sélection de réalisations récentes.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm transition
                ${
                  active === f
                    ? "border-white bg-white text-zinc-950"
                    : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-[340px] object-cover block grayscale brightness-90 transition duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                draggable="false"
              />

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

              {/* Label */}
              <div className="absolute bottom-3 left-3 rounded-full bg-zinc-950/80 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
                {item.style}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
