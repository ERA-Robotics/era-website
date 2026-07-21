import Link from "next/link";
import Logo from "@/components/Logo";

const links = [
  ["Solutions", "/solutions"],
  ["Industries", "/industries"],
  ["Products", "/products"],
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
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="pill pill-light header-button">
          Talk to ERA
        </Link>
      </div>
    </header>
  );
}
