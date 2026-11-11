import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src="/brightmark_logo.jpeg" alt="Brightmark Consulting" className="footer-logo" />
          <p className="footer-blurb">{site.blurb}</p>
          <ul className="socials">
            {site.socials.map(([name, href]) => (
              <li key={name}><a href={href} target="_blank" rel="noopener noreferrer">{name}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Navigate</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Focus areas</h4>
          <ul>{site.focusAreas.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={site.phoneHref}>{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp us</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{site.tagline}</span>
        <span>© 2026 Brightmark Consulting Ltd. All rights reserved.</span>
      </div>
    </footer>
  );
}
