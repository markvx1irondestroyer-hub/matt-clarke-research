/*
 * DESIGN: Dark Academic / Research Terminal
 * Footer: Minimal, monospace metadata, teal accent links
 */
export default function Footer() {
  return (
    <footer className="border-t border-border/60 mt-20">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-foreground font-semibold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Matt Clarke
            </div>
            <div className="mono-label text-muted-foreground">
              Independent Research &amp; Development · Rural Canada
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a
              href="https://clarkescustomcreations.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Substack
            </a>
            <span className="mono-label text-muted-foreground">
              © 2026 Matt Clarke. All rights reserved.
            </span>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border/40">
          <p className="text-muted-foreground text-xs" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
            This research is offered openly for the benefit of the field. Please credit the origin if adopted or referenced.
          </p>
        </div>
      </div>
    </footer>
  );
}
