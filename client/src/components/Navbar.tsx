/*
 * DESIGN: Dark Academic / Research Terminal
 * Navbar: Deep navy surface, teal accent on active links, monospace metadata labels
 */
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Research" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center teal-glow">
            <span className="text-primary font-bold text-sm" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>MC</span>
          </div>
          <div>
            <div className="text-foreground font-semibold text-sm leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Matt Clarke
            </div>
            <div className="mono-label text-muted-foreground" style={{ fontSize: '0.65rem' }}>
              Independent AI Research
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? "text-primary bg-primary/10 border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://clarkescustomcreations.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-sm text-sm font-medium border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-200"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Substack ↗
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <div className="container py-4 flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-sm text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://clarkescustomcreations.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-sm text-sm font-medium border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-200"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              Substack ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
