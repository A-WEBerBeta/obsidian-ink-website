import obsidianLogo from "../assets/obsidian-logo.png";
import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center">
            <img
              src={obsidianLogo}
              alt="Obsidian Ink Logo"
              className="h-12 w-auto object-contain select-none opacity-90"
              draggable="false"
            />

            <p className="mt-3 text-sm text-zinc-500 text-center md:text-left">
              © {year} — AWeb (projet portfolio)
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="#expertises"
              className="text-zinc-400 hover:text-white transition"
            >
              Expertises
            </a>

            <a
              href="#galerie"
              className="text-zinc-400 hover:text-white transition"
            >
              Galerie
            </a>

            <a
              href="#apropos"
              className="text-zinc-400 hover:text-white transition"
            >
              À propos
            </a>

            <a
              href="#process"
              className="text-zinc-400 hover:text-white transition"
            >
              RDV
            </a>

            <a
              href="#faq"
              className="text-zinc-400 hover:text-white transition"
            >
              FAQ
            </a>

            <a
              href="#contact"
              className="text-zinc-400 hover:text-white transition"
            >
              Contact
            </a>

            <a
              href="#top"
              className="text-zinc-400 hover:text-white transition"
            >
              Haut ↑
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
