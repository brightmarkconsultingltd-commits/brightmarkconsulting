import Link from "next/link";

export const metadata = { title: "About | Brightmark Consulting Ltd" };

const serve = [
  ["Startups & SMEs", "Sharper priorities, flexible systems, and practical execution support."],
  ["NGOs & Institutions", "Grounded local knowledge, practical training, and delivery structures."],
  ["Public & Private Organizations", "Support for complex initiatives and large-scale coordination."],
];
const photos = [
  ["training-group", "Facilitators and participants at the Monitoring and Evaluation training programme"],
  ["performance-indices-session", "Facilitator presenting a session on project performance indices"],
  ["facilitator-presenting", "Facilitator explaining reporting responsibilities during a training session"],
  ["facilitator-session", "Facilitator leading an interactive project management session"],
  ["facilitator-with-participants", "Participants listening as a facilitator explains a project management concept"],
  ["integrated-project-session", "Facilitator discussing integrated project management during the programme"],
  ["facilitator-portrait", "Brightmark facilitator in conversation during the training programme"],
];
const expect = [
  "A deep understanding of your organization before we make recommendations",
  "Solutions designed for your context, not copied from a template",
  "Tools and routines your team can own",
  "A balanced approach across strategy, people, process, and accountability",
];
const sectors = ["Meteorology", "Aviation", "ICT", "Construction", "Business strategy", "Public service delivery", "Training and facilitation", "Organizational support"];

export default function About() {
  return (
    <>
      <section className="hero small">
        <div className="container">
          <p className="eyebrow">About Brightmark</p>
          <h1>Insight, delivery, and partnership built around each organization.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="card"><h3>Vision</h3><p>To be a genuine partner for growth and lasting change, through strategy, targeted capability building, and real support.</p></div>
          <div className="card"><h3>Mission</h3><p>To walk alongside entrepreneurs, teams, and institutions with practical consulting, capacity building, training, project management, and organizational support.</p></div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>What Brightmark stands for</h2>
          <p className="muted">Clear thinking, practical delivery, and capability that lasts.</p>
          <ul className="ticks">
            <li>Practical guidance over polished theory</li>
            <li>Usable systems</li>
            <li>Respect for organizational context</li>
            <li>Sustained support from planning through delivery</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Who we serve</h2>
          <div className="grid grid-3">
            {serve.map(([t, d]) => <article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}
          </div>
          <h2 className="mt">How our work connects</h2>
          <p className="muted">Strategy becomes direction, training becomes capability, projects become results, and operations become systems.</p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Training in action</h2>
          <p className="muted">Featured programme: a 5-Day Training on Monitoring and Evaluation for Project Managers.</p>
          <div className="gallery">
            {photos.map(([f, alt]) => <img key={f} src={`/training/${f}.jpeg`} alt={alt} loading="lazy" />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <h2>What clients can expect</h2>
            <ul className="ticks">{expect.map((e) => <li key={e}>{e}</li>)}</ul>
          </div>
          <div>
            <h2>Sector perspective</h2>
            <p className="muted">Experience across:</p>
            <ul className="chips">{sectors.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Our team</h2>
          <div className="grid grid-2">
            <article className="person">
              <img src="/uche.jpg" alt="Uche Ogbunugafor, M. Sc, PMP" />
              <div>
                <h3>Uche Ogbunugafor, M.Sc, PMP</h3>
                <p className="role">CEO / Head Consultant</p>
                <p>A telecommunications engineer with over a decade of multi-stakeholder project delivery in aviation, meteorological systems, and IT infrastructure.</p>
                <Link href="/contact" className="btn btn-sm">Contact Brightmark</Link>
              </div>
            </article>
            <article className="person">
              <img src="/chi.jpg" alt="Chinemerem Ugonnaya" />
              <div>
                <h3>Chinemerem Ugonnaya</h3>
                <p className="role">Co-Founder / COO</p>
                <p>An administrative consultant and operations leader with over ten years of experience in process and strategic planning.</p>
                <Link href="/contact" className="btn btn-sm">Contact Brightmark</Link>
              </div>
            </article>
          </div>
          <p className="muted center mt">An extended network of associate consultants and specialists supplements the core team.</p>
        </div>
      </section>

      <section className="cta">
        <div className="container center">
          <h2>Let's talk about your project</h2>
          <div className="actions center-actions"><Link href="/contact" className="btn btn-light">Discuss your project</Link></div>
        </div>
      </section>
    </>
  );
}
