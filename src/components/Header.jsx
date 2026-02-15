import obsidianLogo from "../assets/obsidian-logo.png";
import Container from "./Container";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm text-zinc-300 hover:text-white transition whitespace-nowrap"
  >
    {children}
  </a>
);

export default function Header() {
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

          {/* Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
            <NavLink href="#expertises">Expertises</NavLink>
            <NavLink href="#galerie">Galerie</NavLink>
            <NavLink href="#apropos">À propos</NavLink>
            <NavLink href="#process">Process / RDV</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="shrink-0 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition"
          >
            Prendre RDV
          </a>
        </div>
      </Container>
    </header>
  );
}
