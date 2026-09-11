"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isContactActive = isActivePath(pathname, "/contact");

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

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

        <button
          type="button"
          className={`mobile-menu-button${
            isMenuOpen ? " mobile-menu-button-open" : ""
          }`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="mobile-navigation"
          className={`mobile-nav${isMenuOpen ? " mobile-nav-open" : ""}`}
          aria-label="Mobile navigation"
          aria-hidden={!isMenuOpen}
        >
          <div className="mobile-nav-inner">
            {links.map(({ label, href }, index) => {
              const isActive = isActivePath(pathname, href);

              return (
                <Link
                  key={href}
                  href={href}
                  className={`mobile-nav-link${
                    isActive ? " mobile-nav-link-active" : ""
                  }`}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  <span className="mobile-nav-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{label}</span>
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="mobile-nav-contact"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Talk to ERA
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
