import Container from "./Container";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Décris ton projet",
    text: "Envoie une idée, une zone, une taille approximative et quelques références. On vérifie la faisabilité et l’intention.",
  },
  {
    n: "02",
    title: "Échange & validation",
    text: "On affine ensemble : composition, placement, budget et délai. Un acompte peut être demandé pour bloquer le créneau.",
  },
  {
    n: "03",
    title: "Séance au studio",
    text: "Accueil, préparation, séance. À la fin : conseils de soin détaillés pour une cicatrisation propre et durable.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 lg:py-24">
      <Container>
        {/* Header */}
        <Reveal amount={0.7} duration={0.85} y={16}>
          <div className="mb-10 lg:mb-12 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight">
              Prise de rendez-vous
            </h2>
            <p className="max-w-2xl text-zinc-400">
              Un parcours simple, clair et sans surprise — du premier message au
              soin final.
            </p>
          </div>
        </Reveal>

        {/* Steps */}
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              amount={0.75}
              duration={0.8}
              y={16}
              delay={i * 0.08}
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold tracking-[0.22em] text-zinc-300 uppercase">
                    Étape
                  </span>
                  <span className="text-sm font-semibold text-zinc-200">
                    {s.n}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal amount={0.6} duration={0.85} y={14} delay={0.05}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition"
            >
              Demander un rendez-vous
            </a>
            <a
              href="#faq"
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Lire la FAQ
            </a>
            <p className="text-sm text-zinc-400">
              Réponse sous 48h • Nancy & alentours
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
