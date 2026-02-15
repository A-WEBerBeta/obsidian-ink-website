import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Container from "./Container";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Comment prendre rendez-vous ?",
    a: "Envoie une demande via le formulaire (zone, taille, style, références). Je réponds sous 48h avec des questions complémentaires et une proposition de créneau.",
  },
  {
    q: "Est-ce que vous faites du sur-mesure ?",
    a: "Oui. Chaque projet est adapté à la morphologie, au placement et à l’intention. Les références servent de point de départ, pas de copie.",
  },
  {
    q: "Faut-il verser un acompte ?",
    a: "Un acompte peut être demandé pour confirmer le créneau. Il couvre le temps de préparation/dessin et sécurise la réservation.",
  },
  {
    q: "Combien de temps pour cicatriser ?",
    a: "En général 2 à 4 semaines selon la zone et ta peau. Des conseils de soin détaillés sont donnés après la séance pour une cicatrisation propre.",
  },
  {
    q: "Puis-je venir avec une idée vague ?",
    a: "Oui. Même une intention suffit : thème, zone, ambiance. On construit ensuite une proposition claire ensemble.",
  },
];

function Item({ q, a, isOpen, onToggle }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-zinc-100">{q}</span>
        <ChevronDown
          size={18}
          className={`text-zinc-300 transition ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-sm leading-relaxed text-zinc-400">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  // ✅ rien d'ouvert par défaut
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="py-16 lg:py-24">
      <Container>
        {/* Header */}
        <Reveal amount={0.7} duration={0.85} y={16}>
          <div className="mb-10 lg:mb-12">
            <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
            <p className="mt-2 max-w-2xl text-zinc-400">
              Les questions les plus fréquentes — pour que tout soit clair avant
              de te lancer.
            </p>
          </div>
        </Reveal>

        {/* Items */}
        <Reveal amount={0.6} duration={0.9} y={18}>
          <div className="grid gap-4 lg:grid-cols-2">
            {FAQS.map((item, idx) => (
              <Item
                key={item.q}
                q={item.q}
                a={item.a}
                isOpen={openIndex === idx}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === idx ? -1 : idx))
                }
              />
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal amount={0.6} duration={0.85} y={14} delay={0.05}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition"
            >
              Prendre RDV
            </a>
            <p className="text-sm text-zinc-400">
              Réponse sous 48h • Sur rendez-vous
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
