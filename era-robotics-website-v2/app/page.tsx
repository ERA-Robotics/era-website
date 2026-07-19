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
        <video
  className="hero-video"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  aria-hidden="true"
>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>

<div className="hero-shade" aria-hidden="true"></div>
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

    <h2>
      Proven in complex, real-world operating environments.
    </h2>

    <p className="section-copy wide">
      ERA Robotics supports commercial automation projects from initial site
      assessment through deployment, integration, training and ongoing
      lifecycle support across Australia and New Zealand.
    </p>

    <div className="experience-grid">
      <article>
        <span className="experience-number">AU + NZ</span>
        <h3>Regional capability</h3>
        <p>
          Local deployment and support for enterprise operations across
          Australia and New Zealand.
        </p>
      </article>

      <article>
        <span className="experience-number">Multi-site</span>
        <h3>Scalable deployment</h3>
        <p>
          Structured rollout processes designed for single locations and
          distributed enterprise portfolios.
        </p>
      </article>

      <article>
        <span className="experience-number">End-to-end</span>
        <h3>Lifecycle delivery</h3>
        <p>
          Site assessment, solution design, commissioning, training,
          integration and ongoing support.
        </p>
      </article>

      <article>
        <span className="experience-number">Cross-sector</span>
        <h3>Operational experience</h3>
        <p>
          Practical experience across retail, facilities, hospitality,
          logistics and commercial environments.
        </p>
      </article>
    </div>

    <p className="legal-note">
      Selected project details and customer references are available through
      private consultation, subject to confidentiality obligations.
    </p>
  </div>
</section>

<section className="section solutions-section">
  <div className="shell">
    <div className="section-heading-row">
      <div>
        <p className="kicker">WHAT WE BUILD</p>
        <h2>Five capabilities. One integrated platform.</h2>
      </div>

      <p className="section-copy">
        ERA brings together robotics, Physical AI, edge computing, computer
        vision and enterprise integration to build intelligent operational
        systems.
      </p>
    </div>

    <div className="solutions-grid">
      {solutions.map((solution, index) => (
        <Link
          href={solution.href}
          className={`solution-card solution-card-${index + 1}`}
          key={solution.title}
        >
          <div className="solution-card-top">
            <span className="solution-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="solution-arrow" aria-hidden="true">
              ↗
            </span>
          </div>

          <div className="solution-visual" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="solution-card-copy">
            <h3>{solution.title}</h3>
            <p>{solution.body}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

<section className="section section-alt industries-section">
  <div className="shell">
    <div className="section-heading-row">
      <div>
        <p className="kicker">INDUSTRIES</p>
        <h2>Automation shaped around real operating environments.</h2>
      </div>

      <p className="section-copy">
        Every industry has different workflows, risks, service expectations and
        physical constraints. ERA designs automation around the environment,
        rather than forcing the environment around the technology.
      </p>
    </div>

    <div className="industries-layout">
      <Link href="/industries#retail" className="industry-feature">
        <div className="industry-feature-visual" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="industry-feature-top">
          <span className="industry-index">01</span>
          <span className="industry-arrow">↗</span>
        </div>

        <div className="industry-feature-copy">
          <p className="industry-label">FEATURED INDUSTRY</p>
          <h3>Retail</h3>
          <p>
            Autonomous cleaning, customer-facing robotics and operational
            intelligence for complex, high-traffic environments.
          </p>
        </div>
      </Link>

      <div className="industry-list">
        {industries.slice(1).map(([title, body], index) => (
          <Link
            href={`/industries#${title.toLowerCase().replaceAll(" ", "-")}`}
            className="industry-list-item"
            key={title}
          >
            <span className="industry-index">
              {String(index + 2).padStart(2, "0")}
            </span>

            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>

            <span className="industry-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>
    </div>
  </div>
</section>

    <section className="section physical-ai-section">
  <div className="shell">
    <div className="physical-ai-heading">
      <div>
        <p className="kicker">PHYSICAL AI PLATFORM</p>
        <h2>
          Connecting machines, intelligence and enterprise operations.
        </h2>
      </div>

      <div>
        <p className="section-copy">
          ERA brings together autonomous machines, machine perception, edge
          inference and enterprise workflows through one integration layer.
        </p>

        <Link href="/solutions#physical-ai" className="text-link">
          Explore Physical AI
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>

    <div className="era-platform">
      <div className="platform-column platform-inputs">
        <p className="platform-label">PHYSICAL SYSTEMS</p>

        <div className="platform-module">
          <span>01</span>
          <div>
            <h3>Commercial Robotics</h3>
            <p>Cleaning, delivery, logistics and service robots.</p>
          </div>
        </div>

        <div className="platform-module">
          <span>02</span>
          <div>
            <h3>Vision & Sensors</h3>
            <p>Cameras, perception systems and environmental data.</p>
          </div>
        </div>

        <div className="platform-module">
          <span>03</span>
          <div>
            <h3>Operational Data</h3>
            <p>Site conditions, workflows and machine telemetry.</p>
          </div>
        </div>
      </div>

      <div className="platform-core">
        <div className="core-orbit core-orbit-one" aria-hidden="true"></div>
        <div className="core-orbit core-orbit-two" aria-hidden="true"></div>
        <div className="core-glow" aria-hidden="true"></div>

        <div className="core-content">
          <span className="core-kicker">ERA</span>
          <h3>Integration Layer</h3>
          <p>
            The intelligence and orchestration layer connecting physical
            systems with enterprise workflows.
          </p>

          <div className="core-capabilities">
            <span>Edge AI</span>
            <span>Fleet Intelligence</span>
            <span>Computer Vision</span>
            <span>Workflow Automation</span>
          </div>
        </div>
      </div>

      <div className="platform-column platform-outputs">
        <p className="platform-label">ENTERPRISE OUTCOMES</p>

        <div className="platform-module">
          <span>04</span>
          <div>
            <h3>Enterprise Systems</h3>
            <p>Connected workflows, platforms and operational tools.</p>
          </div>
        </div>

        <div className="platform-module">
          <span>05</span>
          <div>
            <h3>Fleet Management</h3>
            <p>Monitoring, orchestration and multi-site visibility.</p>
          </div>
        </div>

        <div className="platform-module">
          <span>06</span>
          <div>
            <h3>Operational Intelligence</h3>
            <p>Insights that support better decisions and performance.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="physical-ai-pillars">
      <article>
        <span>01</span>
        <h3>Perceive</h3>
        <p>
          Machines understand environments through sensors, vision and
          operational data.
        </p>
      </article>

      <article>
        <span>02</span>
        <h3>Decide</h3>
        <p>
          Edge intelligence enables responsive decision-making close to the
          physical operation.
        </p>
      </article>

      <article>
        <span>03</span>
        <h3>Act</h3>
        <p>
          Robotics and connected systems execute workflows in real operating
          environments.
        </p>
      </article>

      <article>
        <span>04</span>
        <h3>Improve</h3>
        <p>
          Data and enterprise integration create continuous operational
          improvement.
        </p>
      </article>
    </div>
  </div>
</section>
      
      <section className="section case-study-section">
  <div className="shell">
    <div className="section-heading-row">
      <div>
        <p className="kicker">PROOF IN THE FIELD</p>
        <h2>Real-world deployments, without exposing client intelligence.</h2>
      </div>

      <p className="section-copy">
        Selected project examples are presented by operating environment and
        solution type. Detailed customer references are available privately,
        subject to confidentiality requirements.
      </p>
    </div>

    <div className="case-study-grid">
      <Link href="/case-studies#retail" className="case-study-card case-study-feature">
        <div className="case-study-top">
          <span>01</span>
          <span>RETAIL</span>
        </div>

        <div className="case-study-visual" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="case-study-copy">
          <p className="case-study-label">MULTI-SITE AUTOMATION</p>
          <h3>Autonomous cleaning for large-format retail environments.</h3>
          <p>
            Site assessment, deployment planning, commissioning, staff
            training and ongoing support for high-traffic commercial spaces.
          </p>

          <div className="case-study-tags">
            <span>Commercial Robotics</span>
            <span>Multi-site Rollout</span>
            <span>Lifecycle Support</span>
          </div>
        </div>

        <span className="case-study-arrow" aria-hidden="true">↗</span>
      </Link>

      <Link href="/case-studies#logistics" className="case-study-card">
        <div className="case-study-top">
          <span>02</span>
          <span>LOGISTICS</span>
        </div>

        <div className="case-study-copy">
          <p className="case-study-label">WORKFLOW AUTOMATION</p>
          <h3>Robotics supporting movement and operational workflows.</h3>
          <p>
            Automation designed around site traffic, task sequencing,
            operational constraints and enterprise deployment requirements.
          </p>

          <div className="case-study-tags">
            <span>Autonomous Systems</span>
            <span>Workflow Design</span>
          </div>
        </div>

        <span className="case-study-arrow" aria-hidden="true">↗</span>
      </Link>

      <Link href="/case-studies#hospitality" className="case-study-card">
        <div className="case-study-top">
          <span>03</span>
          <span>HOSPITALITY</span>
        </div>

        <div className="case-study-copy">
          <p className="case-study-label">SERVICE OPERATIONS</p>
          <h3>Service robotics for guest-facing and back-of-house tasks.</h3>
          <p>
            Deployment focused on reliability, staff adoption, guest
            experience and repeatable day-to-day operation.
          </p>

          <div className="case-study-tags">
            <span>Service Robotics</span>
            <span>Training</span>
          </div>
        </div>

        <span className="case-study-arrow" aria-hidden="true">↗</span>
      </Link>
    </div>

    <div className="case-study-footer">
      <p>
        Customer identities, site details and commercial outcomes are shared
        only where disclosure has been approved.
      </p>

      <Link href="/case-studies" className="text-link">
        View project experience
        <span aria-hidden="true">↗</span>
      </Link>
    </div>
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
