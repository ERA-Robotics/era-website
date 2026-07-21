import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Commercial Robotics & Integration Solutions | ERA Robotics",
  description:
    "Explore ERA Robotics solutions for autonomous cleaning, service and item delivery, industrial material movement, deployment integration and emerging Physical AI capabilities across Australia and New Zealand.",
};

const solutions = [
  {
    id: "commercial-robotics",
    number: "01",
    label: "CURRENT CAPABILITY",
    title: "Commercial Robotics",
    body:
      "Autonomous cleaning, service and item delivery, and industrial material-movement systems selected around the operating environment—not a one-size-fits-all catalogue.",
    items: [
      "Autonomous floor cleaning",
      "Food and item delivery",
      "Customer-facing service robotics",
      "Industrial material movement",
      "Robot selection and solution design",
    ],
    linkLabel: "Explore Robotics",
    href: "/products",
  },
  {
    id: "deployment-integration",
    number: "02",
    label: "CURRENT CAPABILITY",
    title: "Deployment & Integration",
    body:
      "ERA turns robotic hardware into an operational system through site assessment, workflow design, mapping, commissioning, training and ongoing local support.",
    items: [
      "Site and workflow assessment",
      "Mapping and route configuration",
      "Commissioning and acceptance testing",
      "Staff training and operational handover",
      "Lifecycle support and optimisation",
    ],
    linkLabel: "View Deployments",
    href: "/deployments",
  },
  {
    id: "physical-ai",
    number: "03",
    label: "DEVELOPING CAPABILITY",
    title: "Physical AI",
    body:
      "ERA is developing toward a future where robotic systems can interpret their surroundings, respond to changing conditions and operate as part of connected enterprise workflows.",
    items: [
      "Environment-aware robotic operation",
      "Context-driven task execution",
      "Connected operational workflows",
      "Human and robot collaboration",
      "Architecture designed for future intelligence",
    ],
    linkLabel: "Discuss the Direction",
    href: "/contact?solution=physical-ai",
  },
  {
    id: "edge-intelligence",
    number: "04",
    label: "DEVELOPING CAPABILITY",
    title: "Edge Intelligence",
    body:
      "Local computing can support faster robotic decision-making, lower dependence on cloud connectivity and more responsive operation where the use case requires it.",
    items: [
      "Local data processing",
      "Reduced cloud dependency",
      "Low-latency operational responses",
      "Site-level system connectivity",
      "Scalable edge architecture",
    ],
    linkLabel: "Discuss Edge Intelligence",
    href: "/contact?solution=edge-intelligence",
  },
  {
    id: "computer-vision",
    number: "05",
    label: "DEVELOPING CAPABILITY",
    title: "Computer Vision",
    body:
      "Computer vision can extend how robotic systems understand spaces, recognise operating conditions and generate useful information from the physical environment.",
    items: [
      "Environmental perception",
      "Object and condition recognition",
      "Operational event detection",
      "Visual workflow support",
      "Future analytics integration",
    ],
    linkLabel: "Discuss Computer Vision",
    href: "/contact?solution=computer-vision",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    body:
      "Define the operating environment, workflow, constraints and business objective.",
  },
  {
    number: "02",
    title: "Assess",
    body:
      "Evaluate site conditions, traffic, surfaces, access, safety and integration requirements.",
  },
  {
    number: "03",
    title: "Design",
    body:
      "Select the robotic system and define routes, workflows, operating procedures and success criteria.",
  },
  {
    number: "04",
    title: "Deploy",
    body:
      "Configure, map, commission and validate the system within the live operating environment.",
  },
  {
    number: "05",
    title: "Enable",
    body:
      "Train the operating team and establish clear ownership, escalation and support processes.",
  },
  {
    number: "06",
    title: "Optimise",
    body:
      "Review performance, refine workflows and support the system throughout its operational lifecycle.",
  },
];

const approachItems = [
  {
    title: "Environment first",
    body:
      "The site, workflow and operating conditions determine the solution—not the robot catalogue.",
  },
  {
    title: "Operational fit",
    body:
      "Robotics must work safely alongside people, equipment, customers and existing processes.",
  },
  {
    title: "Structured deployment",
    body:
      "Mapping, commissioning, testing, training and handover are treated as part of the solution.",
  },
  {
    title: "Local support",
    body:
      "ERA supports customers across Australia and New Zealand through deployment and ongoing operation.",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        kicker="SOLUTIONS"
        title="Robotics designed around real operations."
        description="ERA Robotics delivers commercial robotics and deployment integration today, while developing the Physical AI, edge intelligence and computer vision capabilities that will shape connected robotic operations tomorrow."
      />

      <nav
        className="solutions-subnav"
        aria-label="Solutions page navigation"
      >
        <div className="shell solutions-subnav-inner">
          {solutions.map((solution) => (
            <a href={`#${solution.id}`} key={solution.id}>
              {solution.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="section solutions-intro-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="kicker">AN INTEGRATED APPROACH</p>

              <h2>
                Technology matters. Operational fit matters more.
              </h2>
            </div>

            <p className="section-copy">
              ERA combines robotic systems, deployment expertise and local
              operational support to create solutions that can work reliably
              inside real commercial and industrial environments.
            </p>
          </div>
        </div>
      </section>

      <section className="solutions-detail-section">
        <div className="shell solutions-detail-list">
          {solutions.map((solution) => (
            <article
              id={solution.id}
              className="solution-detail"
              key={solution.id}
            >
              <div className="solution-detail-heading">
                <span>{solution.number}</span>

                <div>
                  <p className="solution-detail-label">{solution.label}</p>
                  <h2>{solution.title}</h2>
                </div>
              </div>

              <div className="solution-detail-body">
                <p className="solution-detail-lead">{solution.body}</p>

                <div className="solution-detail-capabilities">
                  <h3>What this includes</h3>

                  <ul>
                    {solution.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={solution.href}
                  className="solution-detail-link"
                >
                  {solution.linkLabel}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt solutions-workflow-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="kicker">DEPLOYMENT WORKFLOW</p>

              <h2>
                From opportunity to operational system.
              </h2>
            </div>

            <p className="section-copy">
              Successful automation requires more than selecting a machine.
              ERA follows a structured process covering assessment, design,
              deployment, adoption and ongoing optimisation.
            </p>
          </div>

          <div className="solutions-workflow-grid">
            {workflow.map((step) => (
              <article className="solutions-workflow-step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section solutions-approach-section">
        <div className="shell">
          <div className="solutions-approach">
            <div className="solutions-approach-copy">
              <p className="kicker">THE ERA APPROACH</p>

              <h2>
                A robot can automate a task.
                <br />
                An integrated system can improve an operation.
              </h2>

              <p>
                ERA focuses on the full operational pathway—from identifying
                the right use case to commissioning the system, supporting the
                team and preparing the deployment for future intelligence.
              </p>

              <div className="button-row">
                <Link href="/contact" className="pill pill-dark">
                  Discuss Your Operation
                </Link>

                <Link href="/deployments" className="pill pill-outline-dark">
                  Explore Deployments
                </Link>
              </div>
            </div>

            <div className="solutions-approach-panel">
              <p className="solutions-approach-panel-label">
                INTEGRATED DEPLOYMENT MODEL
              </p>

              <div className="solutions-approach-items">
                {approachItems.map((item) => (
                  <div className="solutions-approach-item" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt solutions-cta-section">
        <div className="shell">
          <div className="solutions-cta">
            <div>
              <p className="kicker">START WITH THE OPERATION</p>

              <h2>
                Identify the right automation opportunity.
              </h2>

              <p>
                ERA can assess your environment, define a practical robotics
                use case and build a structured pathway from evaluation to
                deployment.
              </p>
            </div>

            <div className="button-row">
              <Link href="/contact" className="pill pill-light">
                Talk to ERA
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
