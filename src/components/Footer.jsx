import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <p className="text-sm text-center text-zinc-400">
          © {new Date().getFullYear()} Obsidian Ink — projet portfolio (fictif)
        </p>
      </Container>
    </footer>
  );
}
