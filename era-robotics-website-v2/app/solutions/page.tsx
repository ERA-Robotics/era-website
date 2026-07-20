import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Enterprise Robotics & Physical AI Solutions | ERA Robotics",
  description:
    "Explore ERA Robotics solutions across commercial robotics, Physical AI, edge computing, AI vision and enterprise integration for Australia and New Zealand.",
};
const rows = [
  {
    id: "commercial-robotics",
    title: "Commercial Robotics",
    body: "Autonomous cleaning, delivery, service and logistics systems selected around the operating environment—not a one-size-fits-all catalogue.",
    items: [
      "Site assessment",
      "Robot selection",
      "Pilot design",
      "Deployment and training",
      "Lifecycle support",
    ],
  },
  {
    id: "physical-ai",
    title: "Physical AI",
    body: "Systems that combine machine perception, spatial understanding and autonomous decision-making to operate usefully in the physical world.",
    items: [
      "Sensor fusion",
      "Spatial intelligence",
      "Autonomous navigation",
      "Machine perception",
      "Real-time decision-making",
    ],
  },
  {
    id: "edge-ai",
    title: "Edge Computing",
    body: "AI workloads processed close to the machine for lower latency, greater resilience and faster operational response.",
    items: [
      "Edge architecture",
      "Local inference",
      "Robotics compute",
      "Device integration",
      "Fleet visibility",
    ],
  },
  {
    id: "ai-vision",
    title: "AI Vision",
    body: "Computer vision for inspection, detection, operational awareness and human-machine interaction.",
    items: [
      "Object detection",
      "Visual inspection",
      "Occupancy awareness",
      "Safety monitoring",
      "Operational analytics",
    ],
  },
  {
    id: "integration",
    title: "Integration Services",
    body: "ERA brings hardware, software and site operations together—from discovery through deployment and ongoing optimisation.",
    items: [
      "Solution design",
      "Workflow integration",
      "Change management",
      "Commissioning",
      "Support and optimisation",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Discovery",
    body: "Define the operating objective, current workflow, business requirements and constraints.",
  },
  {
    number: "02",
    title: "Site assessment",
    body: "Evaluate the physical environment, infrastructure, traffic, safety and operational readiness.",
  },
  {
    number: "03",
    title: "Solution design",
    body: "Select the right robotics, compute and integration approach for the application.",
  },
  {
    number: "04",
    title: "Pilot and deployment",
    body: "Validate the workflow, commission the system and prepare teams for day-to-day operation.",
  },
  {
    number: "05",
    title: "Optimisation",
    body: "Review performance, refine workflows and support future expansion across sites.",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
  kicker="SOLUTIONS"
  title="Intelligent systems for real-world operations."
  description="ERA Robotics combines robotics, edge AI, computer vision and integration services into practical enterprise solutions."
/>

<nav className="solutions-subnav" aria-label="Solutions page navigation">
  <div className="shell solutions-subnav-inner">
    <a href="#commercial-robotics">Commercial Robotics</a>
    <a href="#physical-ai">Physical AI</a>
    <a href="#edge-ai">Edge Computing</a>
    <a href="#ai-vision">AI Vision</a>
    <a href="#integration">Integration Services</a>
  </div>
</nav>

<section className="section">
        <div className="shell solution-table">
          {rows.map((row, index) => (
            <article id={row.id} className="solution-row" key={row.title}>
              <span className="row-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h2>{row.title}</h2>
                <p>{row.body}</p>
              </div>

              <ul>
                {row.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt deployment-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="kicker">DEPLOYMENT WORKFLOW</p>

              <h2>
                From operational challenge to repeatable deployment.
              </h2>
            </div>

            <p className="section-copy">
              ERA uses a structured deployment process to reduce risk, improve
              adoption and ensure the technology fits the operating
              environment.
            </p>
          </div>

          <div className="deployment-grid">
            {workflow.map((step) => (
              <article className="deployment-step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section connected-approach-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="kicker">THE ERA APPROACH</p>

              <h2>
                Moving beyond standalone machines.
              </h2>
            </div>

            <p className="section-copy">
              A robot can automate a task. A connected system can improve an
              operation.
            </p>
          </div>

          <div className="approach-comparison">
            <article className="approach-panel approach-panel-muted">
              <div className="approach-top">
                <span>TRADITIONAL DEPLOYMENT</span>
                <span>01</span>
              </div>

              <h3>Standalone automation</h3>

              <ul>
                <li>Single machine</li>
                <li>Isolated workflow</li>
                <li>Limited operational visibility</li>
                <li>Manual coordination</li>
                <li>Difficult to scale consistently</li>
              </ul>
            </article>

            <article className="approach-panel approach-panel-featured">
              <div className="approach-top">
                <span>ERA DEPLOYMENT MODEL</span>
                <span>02</span>
              </div>

              <h3>Connected intelligent operations</h3>

              <ul>
                <li>Robotics aligned with the workflow</li>
                <li>Edge intelligence and machine perception</li>
                <li>Fleet and operational visibility</li>
                <li>Enterprise integration</li>
                <li>Architecture designed for future Physical AI</li>
              </ul>
            </article>
          </div>

          <div className="solutions-cta">
            <div>
              <p className="kicker">START A CONVERSATION</p>

              <h2>Let&apos;s discuss your operating environment.</h2>

              <p>
                Tell us about the site, workflow and business objective. ERA
                will help define a practical path from assessment to
                deployment.
              </p>
            </div>

            <div className="button-row">
              <Link href="/contact" className="pill pill-light">
                Contact ERA
              </Link>

              <Link href="/industries" className="pill pill-outline">
                Explore Industries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
