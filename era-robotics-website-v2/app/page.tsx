import CapabilitiesShowcase from "@/components/CapabilitiesShowcase";
import IndustriesShowcase from "@/components/IndustriesShowcase";
import Link from "next/link";

const solutions = [
  {
    title: "Commercial Robotics",
    body:
      "Autonomous cleaning, service and item delivery, and industrial material-movement systems for real operating environments.",
    href: "/solutions#commercial-robotics",
    status: "CURRENT CAPABILITY",
  },
  {
    title: "Deployment & Integration",
    body:
      "Site assessment, workflow design, mapping, commissioning, training and ongoing local support.",
    href: "/solutions#deployment-integration",
    status: "CURRENT CAPABILITY",
  },
  {
    title: "Physical AI",
    body:
      "Developing toward robotic systems that can interpret environments, respond to change and support connected workflows.",
    href: "/solutions#physical-ai",
    status: "DEVELOPING CAPABILITY",
  },
  {
    title: "Edge Intelligence",
    body:
      "Local processing designed to support responsive robotic operation where the use case requires it.",
    href: "/solutions#edge-intelligence",
    status: "DEVELOPING CAPABILITY",
  },
  {
    title: "Computer Vision",
    body:
      "Emerging perception capabilities that can help robotic systems understand spaces, conditions and events.",
    href: "/solutions#computer-vision",
    status: "DEVELOPING CAPABILITY",
  },
];

const industries = [
  {
    title: "Retail & Supermarkets",
    body: "Autonomous cleaning and service robotics for complex, high-traffic customer environments.",
    href: "/industries#retail-supermarkets",
    image: "/industries/retail-shopping-centres.png",
  },
  {
    title: "Healthcare & Aged Care",
    body: "Cleaning and operational support for hospitals, aged care facilities and clinical environments.",
    href: "/industries#healthcare-aged-care",
    image: "/industries/healthcare.png",
  },
  {
    title: "Hotels & Hospitality",
    body: "Robotic systems supporting cleaning, service delivery and consistent guest experiences.",
    href: "/industries#hotels-hospitality",
    image: "/industries/hospitality.png",
  },
  {
    title: "Warehousing & Storage",
    body: "Autonomous movement, cleaning and operational support across large logistics environments.",
    href: "/industries#warehousing-storage",
    image: "/industries/warehousing-logistics.png",
  },
  {
    title: "Manufacturing",
    body: "Robotics supporting safer workflows, repeatable processes and more efficient facilities.",
    href: "/industries#manufacturing",
    image: "/industries/manufacturing.png",
  },
  {
    title: "Commercial Property",
    body: "Scalable robotic operations for offices, public buildings and commercial facilities.",
    href: "/industries#commercial-property",
    image: "/industries/corporate-public-sector.png",
  },
];

const deployments = [
  {
    number: "01",
    industry: "MANUFACTURING",
    label: "CONTROLLED OPERATING ENVIRONMENT",
    title: "Autonomous cleaning for pharmaceutical manufacturing.",
    body:
      "Structured around controlled production environments, floor conditions, safety requirements and reliable day-to-day operation.",
    tags: [
      "Autonomous Cleaning",
      "Site Configuration",
      "Operational Support",
    ],
    featured: true,
  },
  {
    number: "02",
    industry: "PUBLIC FACILITIES",
    label: "VISITOR ENVIRONMENT",
    title: "Robotic cleaning in a major public museum.",
    body:
      "Route planning and operational configuration designed for public safety, visitor flow and low-disruption cleaning.",
    tags: [
      "Public Environment",
      "Route Design",
    ],
    featured: false,
  },
  {
    number: "03",
    industry: "HOSPITALITY",
    label: "HOTEL OPERATIONS",
    title: "Commercial robotics for premium hotel operations.",
    body:
      "Deployment designed around presentation standards, staff adoption, guest experience and repeatable daily workflows.",
    tags: [
      "Hospitality",
      "Staff Training",
    ],
    featured: false,
  },
];

const approachItems = [
  {
    number: "01",
    title: "Enterprise-first",
    body:
      "We begin with the operating workflow, business requirements and site constraints before selecting the technology.",
  },
  {
    number: "02",
    title: "Integration-led",
    body:
      "Robotics must work safely with people, equipment, workflows and existing operational processes.",
  },
  {
    number: "03",
    title: "Local deployment capability",
    body:
      "Site assessment, commissioning, staff training and lifecycle support across Australia and New Zealand.",
  },
  {
    number: "04",
    title: "Future-ready direction",
    body:
      "Deployments designed to evolve from commercial robotics toward edge intelligence, computer vision and Physical AI.",
  },
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

        <div className="hero-shade" aria-hidden="true" />

        <div className="shell hero-content">
          <p className="kicker">
            COMMERCIAL ROBOTICS · DEPLOYMENT · PHYSICAL AI
          </p>

          <h1>Engineering Intelligence for the Physical World.</h1>

          <p className="hero-subtitle">
            ERA Robotics deploys commercial robotic systems and integrates
            them into real enterprise operations across Australia and New
            Zealand—while building toward the future of Physical AI.
          </p>

          <div className="button-row">
            <Link href="/solutions" className="pill pill-light">
              Explore Solutions
            </Link>

            <Link href="/contact" className="pill pill-outline">
              Talk to ERA
            </Link>
          </div>
        </div>
      </section>

      <section className="section trusted">
        <div className="shell">
          <p className="kicker">ENTERPRISE EXPERIENCE</p>

          <h2>Proven in complex, real-world operating environments.</h2>

          <p className="section-copy wide">
            ERA supports commercial automation projects from initial site
            assessment through solution design, deployment, training and
            ongoing lifecycle support across Australia and New Zealand.
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
                Structured rollout processes designed for individual
                facilities and distributed enterprise portfolios.
              </p>
            </article>

            <article>
              <span className="experience-number">End-to-end</span>

              <h3>Lifecycle delivery</h3>

              <p>
                Site assessment, solution design, commissioning, training and
                ongoing operational support.
              </p>
            </article>

            <article>
              <span className="experience-number">Cross-sector</span>

              <h3>Operational experience</h3>

              <p>
                Practical experience across retail, healthcare, education,
                manufacturing, hospitality and public environments.
              </p>
            </article>
          </div>

          <p className="legal-note">
            Selected project details and customer references are available
            through private consultation, subject to confidentiality
            obligations.
          </p>
        </div>
      </section>

    <CapabilitiesShowcase />

<IndustriesShowcase />

<section className="section physical-ai-section roadmap-section">
  <div className="shell">
    <div className="roadmap-heading">
      <div>
        <p className="kicker">OUR DIRECTION</p>

        <h2>
          From commercial robotics to connected physical intelligence.
        </h2>
      </div>

      <div>
        <p className="section-copy">
          ERA delivers practical robotic systems today while developing the
          vision, edge intelligence and workflow integration capabilities
          required for more connected and adaptive physical operations.
        </p>

        <Link
          href="/solutions#physical-ai"
          className="text-link"
        >
          Explore the Physical AI direction
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>

    <div className="technology-roadmap">
      <article className="roadmap-stage roadmap-stage-current">
        <div className="roadmap-stage-header">
          <span className="roadmap-stage-number">01</span>

          <div>
            <p className="roadmap-stage-label">TODAY</p>
            <h3>Practical deployment</h3>
          </div>
        </div>

        <p className="roadmap-stage-copy">
          Commercial robotic systems deployed into real operating
          environments with local assessment, commissioning and support.
        </p>

        <div className="roadmap-capability-list">
          <div className="roadmap-capability">
            <span>01</span>

            <div>
              <h4>Commercial Robotics</h4>

              <p>
                Cleaning, service delivery and material-movement systems for
                commercial and industrial operations.
              </p>
            </div>
          </div>

          <div className="roadmap-capability">
            <span>02</span>

            <div>
              <h4>Deployment &amp; Integration</h4>

              <p>
                Site assessment, workflow design, mapping, commissioning,
                training and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </article>

      <div className="roadmap-connector" aria-hidden="true">
        <span />
        <span>→</span>
        <span />
      </div>

      <article className="roadmap-stage roadmap-stage-developing">
        <div className="roadmap-stage-header">
          <span className="roadmap-stage-number">02</span>

          <div>
            <p className="roadmap-stage-label">NOW DEVELOPING</p>
            <h3>Connected operations</h3>
          </div>
        </div>

        <p className="roadmap-stage-copy">
          Building the technical capabilities that allow robotic systems to
          perceive more, process information locally and operate within
          connected workflows.
        </p>

        <div className="roadmap-capability-list">
          <div className="roadmap-capability">
            <span>03</span>

            <div>
              <h4>Computer Vision</h4>

              <p>
                Environmental awareness, visual detection and operational
                perception.
              </p>
            </div>
          </div>

          <div className="roadmap-capability">
            <span>04</span>

            <div>
              <h4>Edge Intelligence</h4>

              <p>
                Local processing designed for faster and more resilient
                decision-making.
              </p>
            </div>
          </div>
        </div>
      </article>

      <div className="roadmap-connector" aria-hidden="true">
        <span />
        <span>→</span>
        <span />
      </div>

      <article className="roadmap-stage roadmap-stage-future">
        <div className="roadmap-stage-header">
          <span className="roadmap-stage-number">03</span>

          <div>
            <p className="roadmap-stage-label">FUTURE DIRECTION</p>
            <h3>Physical AI</h3>
          </div>
        </div>

        <p className="roadmap-stage-copy">
          A future operating model where perception, intelligence and physical
          action function as a connected system.
        </p>

        <div className="roadmap-future-core">
          <div className="roadmap-orbit roadmap-orbit-one" aria-hidden="true" />
          <div className="roadmap-orbit roadmap-orbit-two" aria-hidden="true" />

          <div className="roadmap-core-content">
            <span>ERA</span>

            <strong>Physical Intelligence</strong>

            <p>
              Perceive. Interpret. Act. Improve.
            </p>
          </div>
        </div>

        <div className="roadmap-future-tags">
          <span>Adaptive Operations</span>
          <span>Connected Workflows</span>
          <span>Local Intelligence</span>
          <span>Continuous Improvement</span>
        </div>
      </article>
    </div>

    <div className="roadmap-statement">
      <p>
        Today&apos;s commercial robotics.
        <br />
        Tomorrow&apos;s connected physical intelligence.
      </p>

      <span>
        Built through practical deployment, local integration and continuous
        development.
      </span>
    </div>
  </div>
</section>

      <section className="section case-study-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="kicker">PROOF IN THE FIELD</p>

              <h2>
                Real-world deployments shaped around operational requirements.
              </h2>
            </div>

            <p className="section-copy">
              Projects are presented by operating environment rather than customer
  identity. Detailed references are available privately where disclosure
  has been approved.
            </p>
          </div>

          <div className="case-study-grid">
            {deployments.map((deployment) => (
              <Link
                href="/deployments"
                className={`case-study-card${
                  deployment.featured ? " case-study-feature" : ""
                }`}
                key={deployment.number}
              >
                <div className="case-study-top">
                  <span>{deployment.number}</span>
                  <span>{deployment.industry}</span>
                </div>

                {deployment.featured && (
                  <div
                    className="case-study-visual"
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                )}

                <div className="case-study-copy">
                  <p className="case-study-label">
                    {deployment.label}
                  </p>

                  <h3>{deployment.title}</h3>

                  <p>{deployment.body}</p>

                  <div className="case-study-tags">
                    {deployment.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <span
                  className="case-study-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            ))}
          </div>

          <div className="case-study-footer">
            <p>
              Customer identities, site details and commercial outcomes are
              shared only where disclosure has been approved.
            </p>

            <Link href="/deployments" className="text-link">
              Explore deployments
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

<section className="section why-era-section">
  <div className="shell">
    <div className="why-era-layout">
      <div className="why-era-intro">
        <p className="kicker">WHY ERA</p>

        <h2>
          Operational success requires more than technology.
        </h2>

        <p className="why-era-statement">
          Successful automation is engineered—not simply installed.
        </p>

        <p className="why-era-copy">
          ERA approaches robotics as an operational system. We design around
          the environment, workflow, people and operating requirements, then
          support the deployment throughout its lifecycle.
        </p>

        <div className="why-era-flow" aria-label="ERA delivery approach">
          <span>Technology</span>
          <i aria-hidden="true">→</i>
          <span>Deployment</span>
          <i aria-hidden="true">→</i>
          <span>Integration</span>
          <i aria-hidden="true">→</i>
          <span>Support</span>
        </div>

        <Link href="/about" className="text-link why-era-link">
          Our engineering approach
          <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="why-era-principles">
        {approachItems.map((item) => (
          <article className="why-era-principle" key={item.number}>
            <div className="why-era-principle-number">
              {item.number}
            </div>

            <div className="why-era-principle-content">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>

            <span
              className="why-era-principle-marker"
              aria-hidden="true"
            />
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

<section className="section resources-section">
  <div className="shell">
    <div className="section-heading-row resources-heading">
      <div>
        <p className="kicker">RESOURCES</p>

        <h2>
          Engineering insights for enterprise automation.
        </h2>
      </div>

      <p className="section-copy">
        Deployment guides, industry insights and technical perspectives for
        organisations adopting robotics and Physical AI.
      </p>
    </div>

    <div className="resources-layout">
      <Link
        href="/resources"
        className="resource-feature"
      >
        <div className="resource-feature-top">
          <span>GUIDE</span>
          <span>12 MIN READ</span>
        </div>

        <div
          className="resource-document-visual"
          aria-hidden="true"
        >
          <div className="resource-document-grid" />

          <span className="resource-document-line resource-line-one" />
          <span className="resource-document-line resource-line-two" />
          <span className="resource-document-line resource-line-three" />

          <span className="resource-document-node resource-node-one" />
          <span className="resource-document-node resource-node-two" />

          <span className="resource-document-index">01</span>
        </div>

        <div className="resource-feature-content">
          <p className="resource-category">
            ENTERPRISE DEPLOYMENT
          </p>

          <h3>
            Preparing commercial facilities for autonomous robotics.
          </h3>

          <p className="resource-description">
            A practical guide to site readiness, infrastructure, workflows,
            safety planning and successful enterprise deployment.
          </p>

          <div className="resource-tags">
            <span>Site Readiness</span>
            <span>Workflow Planning</span>
            <span>Safety</span>
          </div>
        </div>

        <span
          className="resource-arrow"
          aria-hidden="true"
        >
          ↗
        </span>
      </Link>

      <div className="resource-editorial">
        <div className="resource-editorial-heading">
          <p>LATEST INSIGHTS</p>
          <span>02</span>
        </div>

        <div className="resource-editorial-list">
          <Link
            href="/resources"
            className="resource-editorial-item"
          >
            <div className="resource-editorial-meta">
              <span>02</span>
              <span>BRIEF</span>
              <span>6 MIN READ</span>
            </div>

            <div className="resource-editorial-content">
              <p className="resource-category">
                INDUSTRY INSIGHT
              </p>

              <h3>
                Choosing the right robotics system for enterprise operations.
              </h3>

              <p>
                Evaluation criteria that extend beyond hardware
                specifications and headline performance.
              </p>

              <div className="resource-editorial-tags">
                <span>System Selection</span>
                <span>Operations</span>
              </div>
            </div>

            <span
              className="resource-editorial-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>

          <Link
            href="/resources"
            className="resource-editorial-item"
          >
            <div className="resource-editorial-meta">
              <span>03</span>
              <span>ARTICLE</span>
              <span>8 MIN READ</span>
            </div>

            <div className="resource-editorial-content">
              <p className="resource-category">
                PHYSICAL AI
              </p>

              <h3>
                From commercial robotics to intelligent physical systems.
              </h3>

              <p>
                Understanding how enterprise automation is evolving toward
                perception, intelligence and adaptive physical systems.
              </p>

              <div className="resource-editorial-tags">
                <span>Physical AI</span>
                <span>Edge Intelligence</span>
              </div>
            </div>

            <span
              className="resource-editorial-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>
        </div>

        <div className="resource-editorial-footer">
          <p>
            Practical thinking for teams evaluating, deploying and scaling
            enterprise robotics.
          </p>

          <Link href="/resources" className="text-link">
            View all resources
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
