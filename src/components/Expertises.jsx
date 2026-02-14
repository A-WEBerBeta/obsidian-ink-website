import blackworkImg from "../assets/domaines/blackwork.jpg";
import dotworkImg from "../assets/domaines/dotwork.jpg";
import ornementalImg from "../assets/domaines/ornemental.jpg";
import Container from "./Container";

export default function Expertises() {
  return (
    <section id="expertises" className="py-16">
      <Container>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Domaines d’expression
          </h2>
          <p className="mt-2 max-w-xl text-zinc-400">
            Trois approches artistiques complémentaires, adaptées à chaque
            projet.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Blackwork */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]">
            <img
              src={blackworkImg}
              alt="Blackwork"
              className="w-full object-cover block rounded-2xl grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition duration-500"
              draggable="false"
            />
            <h3 className="text-lg font-semibold mt-4">Blackwork</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Motifs graphiques puissants, contrastes nets et aplats noirs
              profonds pour un rendu intemporel.
            </p>

            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -inset-1 rounded-3xl border border-white/20" />
            </div>
          </div>

          {/* Dotwork */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]">
            <img
              src={dotworkImg}
              alt="Blackwork"
              className="w-full object-cover block rounded-2xl grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition duration-500"
              draggable="false"
            />
            <h3 className="text-lg font-semibold mt-4">Dotwork</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Travail minutieux par accumulation de points, offrant texture,
              profondeur et subtilité.
            </p>

            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -inset-1 rounded-3xl border border-white/20" />
            </div>
          </div>

          {/* Ornemental */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]">
            <img
              src={ornementalImg}
              alt="Blackwork"
              className="w-full object-cover block rounded-2xl grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition duration-500"
              draggable="false"
            />
            <h3 className="text-lg font-semibold mt-4">Ornemental</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Lignes élégantes et motifs inspirés de l’architecture et des arts
              décoratifs pour sublimer le corps.
            </p>

            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -inset-1 rounded-3xl border border-white/20" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
