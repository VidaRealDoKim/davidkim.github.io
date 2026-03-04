import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  return (
    <header className="fixed top-0 z-40 w-full">
      <div className="mx-auto mt-4 flex w-[min(1120px,92vw)] items-center justify-between rounded-full border border-border bg-background/85 px-4 py-3 backdrop-blur-md md:px-6">
        <a href="#home" className="text-sm font-semibold tracking-wide text-text">
          David Kim
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted transition-colors duration-300 hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}