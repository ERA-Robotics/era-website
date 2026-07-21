import Link from "next/link";
import Logo from "@/components/Logo";

const links = [
  ["Solutions", "/solutions"],
  ["Products", "/products"],
  ["Industries", "/industries"],
  ["Deployments", "/deployments"],
  ["Resources", "/resources"],
  ["About", "/about"]
];

export default function Header() {
  return (
    <header className="header">
      <div className="shell header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={
                label === "Deployments"
                  ? "nav-link nav-link-featured"
                  : "nav-link"
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="pill pill-light header-button">
          Talk to ERA
        </Link>
      </div>
    </header>
  );
}
