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
            <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5" />
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide whitespace-nowrap">
                Obsidian Ink
              </p>
              <p className="text-xs text-zinc-400 whitespace-nowrap">
                Tattoo Studio • Nancy
              </p>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
            <NavLink href="#expertises">Expertises</NavLink>
            <NavLink href="#galerie">Galerie</NavLink>
            <NavLink href="#apropos">À propos</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="shrink-0 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition"
          >
            Réserver
          </a>
        </div>
      </Container>
    </header>
  );
}
