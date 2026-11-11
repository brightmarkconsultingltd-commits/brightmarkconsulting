import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = { title: "Contact | Brightmark Consulting Ltd" };

export default function Contact() {
  return (
    <>
      <section className="hero small">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Ready to move forward?</h1>
          <p className="lead">Tell us where you are, where you want to be, and let's work out how to get there together.</p>
        </div>
      </section>
      <section className="section">
        <div className="container two-col contact">
          <ContactForm />
          <aside className="card">
            <h3>Get in touch</h3>
            <p><strong>General enquiries</strong><br /><a href={`mailto:${site.email}`}>{site.email}</a></p>
            <p><strong>Phone</strong><br /><a href={site.phoneHref}>{site.phone}</a></p>
            <p><strong>WhatsApp</strong><br /><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">Chat with us</a></p>
            <p className="muted">{site.blurb}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
