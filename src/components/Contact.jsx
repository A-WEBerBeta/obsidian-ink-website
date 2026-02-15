import {
  Check,
  ChevronDown,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import Container from "./Container";
import Reveal from "./Reveal";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  style: "Blackwork",
  placement: "",
  size: "",
  message: "",
};

function Toast({ open, onClose, title, text }) {
  if (!open) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-9999 w-[calc(100%-3rem)] max-w-sm">
      <div className="rounded-3xl border border-white/10 bg-zinc-950/90 p-4 text-zinc-100 shadow-xl backdrop-blur">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-2xl border border-white/10 bg-white/5 p-2">
            <Check size={18} className="text-zinc-100" />
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold">{title}</p>
            <p className="mt-1 text-sm text-zinc-400">{text}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-2 py-1 text-sm text-zinc-300 hover:text-white transition"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [toastOpen, setToastOpen] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();

    // Portfolio: on simule l’envoi
    setToastOpen(true);

    // reset
    setForm(INITIAL_FORM);

    // auto-close
    window.clearTimeout(window.__toastTimer);
    window.__toastTimer = window.setTimeout(() => setToastOpen(false), 3200);
  }

  const inputBase =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20";

  return (
    <>
      <Toast
        open={toastOpen}
        onClose={() => setToastOpen(false)}
        title="Demande envoyée (simulation)"
        text="Ton message est prêt. Sur un vrai site : envoi email / Calendly / WhatsApp."
      />

      <section id="contact" className="py-16 lg:py-24">
        <Container>
          {/* Header */}
          <Reveal amount={0.7} duration={0.85} y={16}>
            <div className="mb-10 lg:mb-12">
              <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
              <p className="mt-2 max-w-2xl text-zinc-400">
                Pour une demande de projet, indique une zone, une taille
                approximative et des références. Réponse sous 48h.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form */}
            <Reveal amount={0.6} duration={0.9} y={18}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">
                  Demande de rendez-vous
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  (Portfolio fictif — formulaire non envoyé)
                </p>

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-6 lg:gap-10 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-semibold tracking-wide text-zinc-300 uppercase">
                        Nom
                      </label>
                      <input
                        className={inputBase}
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        placeholder="Ton nom"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold tracking-wide text-zinc-300 uppercase">
                        Email
                      </label>
                      <input
                        className={inputBase}
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="ton@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 lg:gap-10 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-semibold tracking-wide text-zinc-300 uppercase">
                        Téléphone (optionnel)
                      </label>
                      <input
                        className={inputBase}
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        placeholder="06..."
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold tracking-wide text-zinc-300 uppercase">
                        Style
                      </label>

                      <div className="relative">
                        <select
                          className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-white/20"
                          name="style"
                          value={form.style}
                          onChange={onChange}
                        >
                          <option className="bg-zinc-950 text-zinc-100">
                            Blackwork
                          </option>
                          <option className="bg-zinc-950 text-zinc-100">
                            Dotwork
                          </option>
                          <option className="bg-zinc-950 text-zinc-100">
                            Ornemental
                          </option>
                        </select>

                        <ChevronDown
                          size={18}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-300"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 lg:gap-10 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-semibold tracking-wide text-zinc-300 uppercase">
                        Zone
                      </label>
                      <input
                        className={inputBase}
                        name="placement"
                        value={form.placement}
                        onChange={onChange}
                        placeholder="Avant-bras, dos, épaule…"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold tracking-wide text-zinc-300 uppercase">
                        Taille approx.
                      </label>
                      <input
                        className={inputBase}
                        name="size"
                        value={form.size}
                        onChange={onChange}
                        placeholder="ex: 10cm, A5…"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold tracking-wide text-zinc-300 uppercase">
                      Message / références
                    </label>
                    <textarea
                      className={`${inputBase} min-h-35 resize-none`}
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      placeholder="Décris ton idée + liens Instagram/Pinterest si tu en as…"
                      required
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition"
                    >
                      Envoyer la demande
                    </button>

                    <p className="text-sm text-zinc-400">
                      Réponse sous 48h • Sur rendez-vous
                    </p>
                  </div>
                </form>
              </div>
            </Reveal>

            {/* Info card */}
            <Reveal amount={0.6} duration={0.9} y={18} delay={0.08}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">Infos studio</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Pour un vrai site client, ici on mettrait les infos exactes +
                  un lien de réservation (Insta/WhatsApp/Calendly).
                </p>

                <div className="mt-6 space-y-3 text-sm text-zinc-300">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-zinc-200" />
                    <span>Nancy & alentours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-zinc-200" />
                    <span>contact@obsidian-ink.fr</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-zinc-200" />
                    <span>06 00 00 00 00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram size={18} className="text-zinc-200" />
                    <span>@obsidian.ink</span>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                  <p className="text-sm text-zinc-300 font-semibold">
                    Conseils pour une demande efficace
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-400 list-disc pl-5">
                    <li>Zone + taille approximative</li>
                    <li>2–3 références max (liens)</li>
                    <li>Budget/délai si tu en as</li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#galerie"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    Voir les réalisations
                  </a>
                  <a
                    href="#process"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    Comment ça marche
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
