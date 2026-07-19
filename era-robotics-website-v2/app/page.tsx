import Link from "next/link";
import CardGrid from "@/components/CardGrid";

const solutions = [
  {
    title: "Commercial Robotics",
    body: "Autonomous systems for cleaning, delivery, logistics and service operations.",
    href: "/solutions"
  },
  {
    title: "Physical AI",
    body: "Machine perception, spatial intelligence and autonomous decision-making for the physical world.",
    href: "/solutions#physical-ai"
  },
  {
    title: "Edge Computing",
    body: "High-performance AI inference close to where machines and operations happen.",
    href: "/solutions#edge-ai"
  },
  {
    title: "AI Vision",
    body: "Computer vision systems that help machines inspect, understand and respond.",
    href: "/solutions#ai-vision"
  },
  {
    title: "Integration Services",
    body: "Deployment, workflow integration, commissioning and local lifecycle support.",
    href: "/solutions#integration"
  }
];

const industries = [
  ["Retail", "Autonomous cleaning, customer service and operational intelligence."],
  ["Healthcare", "Reliable automation for complex, safety-conscious environments."],
  ["Hospitality", "Robotics that enhance guest experience and reduce repetitive work."],
  ["Logistics", "Autonomous movement, workflow automation and edge intelligence."],
  ["Manufacturing", "Connected robotics, vision systems and intelligent operations."],
  ["Facilities Management", "Scalable automation for multi-site facility portfolios."]
];

const cases = [
  {
    tag: "RETAIL",
    title: "Enterprise Retail Deployment",
    body: "Autonomous cleaning systems deployed across large-format retail environments.",
    href: "/case-studies"
  },
  {
    tag: "LOGISTICS",
    title: "Smart Logistics Automation",
    body: "Robotics and Physical AI improving movement and warehouse workflows.",
    href: "/case-studies"
  },
  {
    tag: "HOSPITALITY",
    title: "Hospitality Transformation",
    body: "Service robotics supporting guest experience and operational efficiency.",
    href: "/case-studies"
  }
];

const insights = [
  {
    tag: "PHYSICAL AI",
    title: "Physical AI in the Field",
    body: "How machine perception and edge intelligence move automation from screen to site.",
    href: "/resources"
  },
  {
    tag: "EDGE AI",
    title: "Why Intelligence Belongs at the Edge",
    body: "The role of low-latency inference in responsive autonomous systems.",
    href: "/resources"
  },
  {
    tag: "COMMERCIAL ROBOTICS",
    title: "Robotics Beyond Pilots",
    body: "What it takes to deploy robots reliably inside enterprise environments.",
    href: "/resources"
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-art" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={index}></span>
          ))}
        </div>
        <div className="hero-shade"></div>
        <div className="shell hero-content">
          <p className="kicker">ROBOTICS · PHYSICAL AI · EDGE INTELLIGENCE</p>
          <h1>Engineering Intelligence for the Physical World.</h1>
          <p className="hero-subtitle">
            ERA Robotics designs, integrates and deploys intelligent robotics,
            edge AI and Physical AI solutions for enterprise operations across
            Australia and New Zealand.
          </p>
          <div className="button-row">
            <Link href="/solutions" className="pill pill-light">Explore Solutions</Link>
            <Link href="/contact" className="pill pill-outline">Talk to ERA</Link>
          </div>
        </div>
      </section>

      <section className="section trusted">
        <div className="shell">
          <p className="kicker">ENTERPRISE EXPERIENCE</p>
          <h2>Trusted across real operating environments in Australia and New Zealand.</h2>
          <div className="logo-cloud">
            {["Coles", "Kmart", "Konica Minolta", "Officeworks", "ISS", "GJK"].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
          <p className="legal-note">
            Representative market experience. Publication of specific customer relationships and logos is subject to written approval.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="kicker">WHAT WE BUILD</p>
          <h2>Solutions for intelligent operations.</h2>
          <p className="section-copy">
            One partner for robotics, Physical AI, edge computing, vision systems and enterprise integration.
          </p>
          <CardGrid items={solutions} columns={3} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <p className="kicker">INDUSTRIES</p>
          <h2>Automation designed around the environment.</h2>
          <p className="section-copy">
            Technology creates value only when it fits the site, the workflow and the people using it.
          </p>
          <div className="industry-grid">
            {industries.map(([title, body]) => (
              <Link href="/industries" className="industry-card" key={title}>
                <div className="industry-visual"><span></span></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section physical-ai-section">
        <div className="shell">
          <p className="kicker">OUR DIRECTION</p>
          <h2>From autonomous machines to Physical AI.</h2>
          <p className="section-copy wide">
            ERA connects robotics, machine perception, edge intelligence and enterprise workflows—turning isolated machines into intelligent operational systems.
          </p>

          <div className="platform-map">
            <div className="node">Robotics</div>
            <div className="connector"></div>
            <div className="node featured">ERA Integration Layer</div>
            <div className="connector"></div>
            <div className="node">Enterprise Systems</div>
          </div>

          <div className="pillars">
            <article>
              <h3>Robotics</h3>
              <p>Commercial robotic systems for real-world operations.</p>
            </article>
            <article>
              <h3>Physical AI</h3>
              <p>Perception, spatial intelligence and autonomous decision-making.</p>
            </article>
            <article>
              <h3>Enterprise Integration</h3>
              <p>Connected workflows, data and business systems.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="kicker">PROOF IN THE FIELD</p>
          <h2>Featured case studies.</h2>
          <p className="section-copy">
            Commercial deployments and pilots designed around measurable operational outcomes.
          </p>
          <CardGrid items={cases} columns={3} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell why-grid">
          <div>
            <p className="kicker">WHY ERA</p>
            <h2>Built for enterprise deployment—not just demonstrations.</h2>
          </div>
          <div className="why-list">
            {[
              ["01", "Local capability", "Deployment, training and support across Australia and New Zealand."],
              ["02", "Integration mindset", "Robotics connected to workflows, data and enterprise systems."],
              ["03", "Multi-industry experience", "Practical experience across retail, facilities, hospitality and logistics."],
              ["04", "AI-forward direction", "A clear pathway from robotics deployment to edge AI and Physical AI."]
            ].map(([number, title, body]) => (
              <article key={title}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="kicker">LATEST INSIGHTS</p>
          <h2>Ideas shaping intelligent automation.</h2>
          <CardGrid items={insights} columns={3} />
        </div>
      </section>
    </main>
  );
}
