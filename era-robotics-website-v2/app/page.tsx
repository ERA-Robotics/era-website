import CapabilitiesShowcase from "@/components/CapabilitiesShowcase";
import IndustriesShowcase from "@/components/IndustriesShowcase";
import Link from "next/link";

const deployments = [
  {
    number: "01",
    industry: "MANUFACTURING",
    label: "CONTROLLED OPERATING ENVIRONMENT",
    title: "Autonomous cleaning for pharmaceutical manufacturing.",
    body:
      "Configured around controlled production areas, floor conditions, safety requirements and reliable daily operation.",
    tags: ["Autonomous Cleaning", "Site Configuration", "Operational Support"],
    featured: true,
  },
  {
    number: "02",
    industry: "PUBLIC FACILITIES",
    label: "VISITOR ENVIRONMENT",
    title: "Robotic cleaning in a major public museum.",
    body:
      "Route planning and operational settings designed for visitor flow, public safety and low-disruption cleaning.",
    tags: ["Public Environment", "Route Design"],
    featured: false,
  },
  {
    number: "03",
    industry: "HOSPITALITY",
    label: "HOTEL OPERATIONS",
    title: "Commercial robotics for premium hotel operations.",
    body:
      "Deployment shaped around presentation standards, staff adoption, guest experience and repeatable workflows.",
    tags: ["Hospitality", "Staff Training"],
    featured: false,
  },
];

const approachItems = [
  {
    number: "01",
    title: "Enterprise-first",
    body:
      "We begin with the workflow, business requirements and site constraints before selecting technology.",
  },
  {
    number: "02",
    title: "Integration-led",
    body:
      "Robotics must work safely with people, equipment and existing operational processes.",
  },
  {
    number: "03",
    title: "Local deployment capability",
    body:
      "Assessment, commissioning, staff training and lifecycle support across Australia and New Zealand.",
  },
  {
    number: "04",
    title: "Future-ready direction",
    body:
      "Deployments designed to evolve toward edge intelligence, computer vision and Physical AI.",
  },
];

const resources = [
  {
    type: "GUIDE",
    readTime: "12 MIN READ",
    category: "ENTERPRISE DEPLOYMENT",
    title: "Preparing commercial facilities for autonomous robotics.",
    body:
      "A practical guide to site readiness, infrastructure, workflows, safety planning and enterprise deployment.",
    tags: ["Site Readiness", "Workflow Planning", "Safety"],
    featured: true,
  },
  {
    type: "BRIEF",
    readTime: "6 MIN READ",
    category: "INDUSTRY INSIGHT",
    title: "Choosing the right robotics system for enterprise operations.",
    body:
      "Evaluation criteria that extend beyond hardware specifications and headline performance.",
    tags: ["System Selection", "Operations"],
    featured: false,
  },
  {
    type: "ARTICLE",
    readTime: "8 MIN READ",
    category: "PHYSICAL AI",
    title: "From commercial robotics to intelligent physical systems.",
    body:
      "How enterprise automation is evolving toward perception, intelligence and adaptive physical systems.",
    tags: ["Physical AI", "Edge Intelligence"],
    featured: false,
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
            ERA Robotics deploys commercial robotic systems across Australia
            and New Zealand while building toward the future of Physical AI.
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
            From site assessment and solution design to deployment, training
            and lifecycle support across Australia and New Zealand.
          </p>

          <div className="experience-grid">
            <article>
              <span className="experience-number">AU + NZ</span>
              <h3>Regional capability</h3>
              <p>
                Local deployment and support for enterprise operations across
                both markets.
              </p>
            </article>

            <article>
              <span className="experience-number">Multi-site</span>
              <h3>Scalable deployment</h3>
              <p>
                Structured rollout processes for individual facilities and
                distributed portfolios.
              </p>
            </article>

            <article>
              <span className="experience-number">End-to-end</span>
              <h3>Lifecycle delivery</h3>
              <p>
                Assessment, design, commissioning, training and ongoing
                operational support.
              </p>
            </article>

            <article>
              <span className="experience-number">Cross-sector</span>
              <h3>Operational experience</h3>
              <p>
                Experience across retail, healthcare, manufacturing,
                hospitality and public environments.
              </p>
            </article>
          </div>

          <p className="legal-note">
            Selected project details and customer references are available
            privately, subject to confidentiality obligations.
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
                ERA deploys practical robotic systems today while developing
                the perception, edge intelligence and workflow capabilities
                required for more adaptive physical operations.
              </p>

              <Link href="/solutions#physical-ai" className="text-link">
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
                environments with local commissioning and support.
              </p>

              <div className="roadmap-capability-list">
                <div className="roadmap-capability">
                  <span>01</span>

                  <div>
                    <h4>Commercial Robotics</h4>
                    <p>
                      Cleaning, service delivery and material-movement systems
                      for commercial and industrial operations.
                    </p>
                  </div>
                </div>

                <div className="roadmap-capability">
                  <span>02</span>

                  <div>
                    <h4>Deployment &amp; Integration</h4>
                    <p>
                      Assessment, workflow design, mapping, commissioning,
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
                Building capabilities that allow robotic systems to perceive,
                process information locally and operate within connected
                workflows.
              </p>

              <div className="roadmap-capability-list">
                <div className="roadmap-capability">
                  <span>03</span>

                  <div>
                    <h4>Computer Vision</h4>
                    <p>
                      Environmental awareness, visual detection and
                      operational perception.
                    </p>
                  </div>
                </div>

                <div className="roadmap-capability">
                  <span>04</span>

                  <div>
                    <h4>Edge Intelligence</h4>
                    <p>
                      Local processing for faster and more resilient
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
                A future operating model where perception, intelligence and
                physical action function as one connected system.
              </p>

              <div className="roadmap-future-core">
                <div
                  className="roadmap-orbit roadmap-orbit-one"
                  aria-hidden="true"
                />
                <div
                  className="roadmap-orbit roadmap-orbit-two"
                  aria-hidden="true"
                />

                <div className="roadmap-core-content">
                  <span>ERA</span>
                  <strong>Physical Intelligence</strong>
                  <p>Perceive. Interpret. Act. Improve.</p>
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
              Built through practical deployment, local integration and
              continuous development.
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
              Projects are presented by operating environment rather than
              customer identity. Approved references are available privately.
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
                  <div className="case-study-visual" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                )}

                <div className="case-study-copy">
                  <p className="case-study-label">{deployment.label}</p>
                  <h3>{deployment.title}</h3>
                  <p>{deployment.body}</p>

                  <div className="case-study-tags">
                    {deployment.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <span className="case-study-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>

          <div className="case-study-footer">
            <p>
              Customer identities and site details are shared only where
              disclosure has been approved.
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

              <h2>Operational success requires more than technology.</h2>

              <p className="why-era-statement">
                Successful automation is engineered—not simply installed.
              </p>

              <p className="why-era-copy">
                ERA designs around the environment, workflow, people and
                operating requirements, then supports each deployment
                throughout its lifecycle.
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

              <h2>Engineering insights for enterprise automation.</h2>
            </div>

            <p className="section-copy">
              Practical guidance for organisations evaluating, deploying and
              scaling robotics and Physical AI.
            </p>
          </div>

          <div className="resources-grid">
            {resources.map((resource, index) => {
              const isFeatured = resource.featured;

              return (
                <Link
                  href="/resources"
                  className={`resource-card${
                    isFeatured ? " resource-large" : ""
                  }`}
                  key={resource.title}
                >
                  <div className="resource-top">
                    <span>{resource.type}</span>
                    <span>{resource.readTime}</span>
                  </div>

                  {isFeatured && (
                    <div className="resource-blueprint" aria-hidden="true">
                      <div className="resource-blueprint-grid" />

                      <span className="resource-blueprint-line resource-blueprint-line-one" />
                      <span className="resource-blueprint-line resource-blueprint-line-two" />
                      <span className="resource-blueprint-line resource-blueprint-line-three" />

                      <span className="resource-blueprint-node resource-blueprint-node-one" />
                      <span className="resource-blueprint-node resource-blueprint-node-two" />
                      <span className="resource-blueprint-node resource-blueprint-node-three" />

                      <span className="resource-blueprint-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}

                  <div className="resource-content">
                    <p className="resource-category">{resource.category}</p>
                    <h3>{resource.title}</h3>

                    <p className="resource-description">{resource.body}</p>

                    <div className="resource-tags">
                      {resource.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <span className="resource-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="resources-footer">
            <p>
              Practical thinking for teams evaluating, deploying and scaling
              enterprise robotics.
            </p>

            <Link href="/resources" className="text-link">
              View the resource library
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
