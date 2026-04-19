/*
 * DESIGN: Dark Academic / Research Terminal
 * Author Contact: Social media and contact links in a dedicated section
 */
import { ExternalLink, Mail, Facebook, Twitter, Instagram, Youtube, Music } from "lucide-react";

export default function AuthorContact() {
  const socialLinks = [
    {
      label: "Email",
      href: "mailto:th3artistunknown@gmail.com",
      icon: Mail,
      color: "text-primary",
    },
    {
      label: "Substack",
      href: "https://clarkescustomcreations.substack.com",
      icon: ExternalLink,
      color: "text-primary",
    },
    {
      label: "Facebook - Clarkes Custom Creations",
      href: "https://www.facebook.com/share/1Hxtd7JoSG/",
      icon: Facebook,
      color: "text-blue-500",
    },
    {
      label: "Facebook - Personal",
      href: "https://www.facebook.com/share/14X8eiJQU2U/",
      icon: Facebook,
      color: "text-blue-500",
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/ClarkeCustoms",
      icon: Twitter,
      color: "text-slate-400",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/clarkescustomcreation?igsh=MWE4d283cXZ2OXY4Yw==",
      icon: Instagram,
      color: "text-pink-500",
    },
    {
      label: "YouTube - Clarkes Custom Creations",
      href: "https://youtube.com/@clarkescustomcreations?si=d5FR80nMn-pCjo6U",
      icon: Youtube,
      color: "text-red-600",
    },
    {
      label: "YouTube - TH3 Artist-Unknown Albums",
      href: "https://youtube.com/@th3artist-uknown?si=SGHT3TvIk2v-TWIm",
      icon: Music,
      color: "text-red-600",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@clarkescustomcrea?_r=1&_t=ZS-95fcJ9v8oQ4",
      icon: ExternalLink,
      color: "text-slate-300",
    },
  ];

  return (
    <div className="rounded-sm border border-border/60 bg-card p-5 mt-6">
      <div className="mono-label text-primary mb-4">Connect</div>
      <div className="space-y-3">
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-full"
            >
              <IconComponent size={14} className={link.color} />
              <span style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                {link.label}
              </span>
              <ExternalLink size={11} className="ml-auto opacity-50" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
