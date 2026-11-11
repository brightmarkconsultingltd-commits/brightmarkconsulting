import Link from "next/link";
import { site } from "@/lib/site";

const steps = [
  ["Diagnose", "Understanding constraints, context, and work already underway."],
  ["Design", "Shaping strategies, systems, and plans that fit the client's operating environment."],
  ["Deliver", "Supporting implementation with project management and clear communication."],
  ["Strengthen", "Building internal capability so progress is owned by the team."],
  ["Sustain", "Leaving better routines, visibility, and a stronger foundation."],
];
const values = ["Clarity", "Integrity", "Excellence", "Partnership", "Innovation", "Sustainability"];
const pillars = ["See what matters most", "Get work moving", "Build lasting capability"];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Brightmark Consulting Ltd</p>
          <h1>Clarity, Capability &amp; Growth; partnership over prescription.</h1>
          <p className="lead">
            Brightmark works with startups, SMEs, NGOs, and public and private institutions to provide clarity, build capability, and support growth.
          </p>
          <div className="actions">
            <Link href="/contact" className="btn">Start a Conversation</Link>
            <a href="#services" className="btn btn-ghost">Explore Our Services</a>
          </div>
          <ul className="pillars">{pillars.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <h2>Explore our services</h2>
          <div className="grid grid-4">
            {site.services.map(([t, d]) => (
              <article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Trusted across sectors</h2>
          <p className="muted center">
            Our consultants have worked in aviation, meteorology, ICT, construction, business strategy, and public service delivery.
          </p>
          <div className="logos">
            {Array.from({ length: 10 }, (_, i) => (
              <img key={i} src={`/${i + 1}.jpg`} alt={`Brightmark client logo ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>How we work</h2>
          <ol className="steps">
            {steps.map(([t, d], i) => (
              <li key={t}><span className="num">{i + 1}</span><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>What we stand for</h2>
          <ul className="values">{values.map((v) => <li key={v}>{v}</li>)}</ul>
        </div>
      </section>

      <section className="cta">
        <div className="container center">
          <h2>Ready to move forward?</h2>
          <p>Tell us where you are now and where you want to be. We will help you map the way there together.</p>
          <div className="actions center-actions">
            <Link href="/contact" className="btn btn-light">Contact Brightmark</Link>
            <Link href="/about" className="btn btn-ghost-light">Learn About Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
