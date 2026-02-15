import aboutImg from "../assets/about.jpg";
import Container from "./Container";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="apropos" className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Portrait */}
          <Reveal amount={0.7} duration={0.85} y={18}>
            <div className="w-full max-w-xs mx-auto lg:mx-0">
              <div className="aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img
                  src={aboutImg}
                  alt="Tattoo artist"
                  className="h-full w-full object-cover grayscale"
                  draggable="false"
                />
              </div>
            </div>
          </Reveal>

          {/* Texte */}
          <Reveal amount={0.7} duration={0.9} y={18} delay={0.08}>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                À propos
              </h2>

              <p className="mt-4 text-zinc-300 leading-relaxed">
                Passionné par le dessin et l’esthétique minimaliste, je me
                spécialise dans le blackwork, le dotwork et les compositions
                ornementales. Mon approche privilégie la précision du trait, la
                lisibilité des formes et l’harmonie avec le corps.
              </p>

              <p className="mt-4 text-zinc-400 leading-relaxed">
                Chaque projet est conçu sur mesure, dans un cadre calme et
                professionnel, avec une attention particulière portée à
                l’hygiène, au confort et à la cicatrisation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-400">
                <span>• Matériel stérile à usage unique</span>
                <span>• Conseils personnalisés</span>
                <span>• Studio privé sur rendez-vous</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
