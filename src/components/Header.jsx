import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import obsidianLogo from "../assets/obsidian-logo.png";
import Container from "./Container";

const links = [
  { href: "#expertises", label: "Expertises" },
  { href: "#galerie", label: "Galerie" },
  { href: "#apropos", label: "À propos" },
  { href: "#process", label: "Process / RDV" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm text-zinc-300 hover:text-white transition whitespace-nowrap"
  >
    {children}
  </a>
);

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock scroll + close on ESC
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center gap-4">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <img
              src={obsidianLogo}
              alt="Obsidian Ink Logo"
              className="h-10 w-auto object-contain select-none"
              draggable="false"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex shrink-0 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition"
          >
            Prendre RDV
          </a>

          {/* Mobile burger */}
          <button
            type="button"
            className="ml-auto md:hidden inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 text-zinc-100 hover:bg-white/10 transition"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </Container>

      {/* Mobile overlay + drawer */}
      {createPortal(
        <div
          className={`fixed inset-0 z-[99999] md:hidden transition ${
            open ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-hidden={!open}
        >
          {/* Backdrop */}
          <div
            onClick={close}
            className={`absolute inset-0 bg-black/80 transition-opacity duration-200 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Drawer */}
          <div
            role="dialog"
            aria-modal="true"
            className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-zinc-950 border-l border-white/10 shadow-2xl transition-transform duration-250 ease-out ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <img
                src={obsidianLogo}
                alt="Obsidian Ink"
                className="h-9 w-auto object-contain select-none opacity-90"
                draggable="false"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
                aria-label="Fermer"
                onClick={close}
              >
                <X size={20} className="text-zinc-300" />
              </button>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-76px)] overflow-y-auto px-6 py-6">
              <nav className="flex flex-col gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-100 hover:bg-white/10 transition"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="mt-7">
                <a
                  href="#contact"
                  onClick={close}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition"
                >
                  Prendre RDV
                </a>

                <p className="mt-4 text-xs text-zinc-400">
                  Réponse sous 48h • Nancy & alentours
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </header>
  );
}
