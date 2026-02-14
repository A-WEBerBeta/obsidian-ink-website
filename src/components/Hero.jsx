import { Instagram, Mail, MapPin } from "lucide-react";
import headerImg from "../assets/header.jpg";
import Container from "./Container";

export default function Hero() {
  return (
    <section id="top" className="py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* LEFT */}
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-zinc-300 uppercase">
              Blackwork • Dotwork • Ornemental
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Le corps comme toile, le trait comme signature.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300">
              Lignes nettes, compositions maîtrisées et sens du détail. Un
              travail sur mesure pour des pièces fortes, élégantes et
              intemporelles.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#galerie"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Voir la galerie
              </a>

              <a
                href="#contact"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition"
              >
                Demander un rendez-vous
              </a>
            </div>

            {/* chips infos */}
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm text-zinc-300">
                <MapPin size={16} className="text-zinc-200" />
                Nancy & alentours
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm text-zinc-300">
                <Mail size={16} className="text-zinc-200" />
                réponse sous 48h
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm text-zinc-300">
                <Instagram size={16} className="text-zinc-200" />
                @obsidian.ink
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative w-full max-w-lg mx-auto">
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img
                src={headerImg}
                alt="Tattoo work"
                className="w-full aspect-[4/5] object-cover block grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition duration-500"
                draggable="false"
              />

              {/* overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            {/* badge */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-300 backdrop-blur">
              <span className="text-white font-semibold">Créneaux</span> • sur
              demande
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
