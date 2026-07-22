"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const links = [
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Deployments", href: "/deployments" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
] as const;

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const isContactActive = isActivePath(pathname, "/contact");

  return (
    <header className="header">
      <div className="shell header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(({ label, href }) => {
            const isActive = isActivePath(pathname, href);

            return (
              <Link
                key={href}
                href={href}
                className={`nav-link${isActive ? " nav-link-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className={`pill pill-light header-button${
            isContactActive ? " header-button-active" : ""
          }`}
          aria-current={isContactActive ? "page" : undefined}
        >
          Talk to ERA
        </Link>
      </div>
    </header>
  );
}
