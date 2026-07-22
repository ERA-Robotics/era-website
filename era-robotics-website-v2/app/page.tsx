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
    title:
      "Autonomous cleaning supporting pharmaceutical manufacturing operations.",
    body:
      "A structured deployment designed around floor conditions, production continuity, safety requirements and reliable day-to-day operation.",
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
    title:
      "Robotic cleaning deployed within a high-profile public museum.",
    body:
      "Route design and operational configuration focused on public safety, visitor traffic and low-disruption cleaning.",
    tags: ["Public Environment", "Route Design"],
    featured: false,
  },
  {
    number: "03",
    industry: "HOSPITALITY",
    label: "HOTEL OPERATIONS",
    title:
      "Commercial robotics supporting premium hotel operations.",
    body:
      "Deployment planned around presentation standards, staff adoption, guest experience and repeatable daily workflows.",
    tags: ["Hospitality", "Staff Training"],
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

      <section className="section solutions-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="kicker">WHAT WE DELIVER</p>

              <h2>Five capabilities. One integrated approach.</h2>
            </div>

            <p className="section-copy">
              ERA delivers commercial robotics and deployment integration
              today, while developing the Physical AI, edge intelligence and
              computer vision capabilities that will shape connected robotic
              operations tomorrow.
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
                  <span />
                  <span />
                  <span />
                </div>

                <div className="solution-card-copy">
                  <p className="solution-card-status">{solution.status}</p>
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
        Every environment has different workflows, risks, service
        expectations and physical constraints. ERA selects and deploys
        robotic systems around the operation—not the other way around.
      </p>
    </div>

    <div className="industries-layout">
      <Link
        href={industries[0].href}
        className="industry-feature industry-feature-photo"
        style={{
          backgroundImage: `url(${industries[0].image})`,
        }}
      >
        <div
          className="industry-photo-overlay"
          aria-hidden="true"
        />

        <div className="industry-feature-top">
          <span className="industry-index">01</span>

          <span className="industry-arrow" aria-hidden="true">
            ↗
          </span>
        </div>

        <div className="industry-feature-copy">
          <p className="industry-label">FEATURED INDUSTRY</p>

          <h3>{industries[0].title}</h3>

          <p>{industries[0].body}</p>
        </div>
      </Link>

      <div className="industry-list">
        {industries.slice(1).map((industry, index) => (
          <Link
            href={industry.href}
            className="industry-list-item industry-list-item-photo"
            key={industry.title}
          >
            <span className="industry-index">
              {String(index + 2).padStart(2, "0")}
            </span>

            <div
              className="industry-list-thumbnail"
              aria-hidden="true"
            >
              <span
                style={{
                  backgroundImage: `url(${industry.image})`,
                }}
              />
            </div>

            <div className="industry-list-copy">
              <h3>{industry.title}</h3>
              <p>{industry.body}</p>
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
              <p className="kicker">PHYSICAL AI DIRECTION</p>

              <h2>
                Building toward connected intelligence for physical
                operations.
              </h2>
            </div>

            <div>
              <p className="section-copy">
                ERA is developing toward an operating model where commercial
                robotics, computer vision, edge intelligence and enterprise
                workflows can function as connected systems.
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

          <div className="era-platform">
            <div className="platform-column platform-inputs">
              <p className="platform-label">PHYSICAL OPERATIONS</p>

              <div className="platform-module">
                <span>01</span>

                <div>
                  <h3>Commercial Robotics</h3>

                  <p>
                    Cleaning, service delivery and material-movement systems.
                  </p>
                </div>
              </div>

              <div className="platform-module">
                <span>02</span>

                <div>
                  <h3>Vision & Sensors</h3>

                  <p>
                    Emerging perception capabilities and environmental data.
                  </p>
                </div>
              </div>

              <div className="platform-module">
                <span>03</span>

                <div>
                  <h3>Operational Context</h3>

                  <p>
                    Site conditions, workflows, people and operating
                    constraints.
                  </p>
                </div>
              </div>
            </div>

            <div className="platform-core">
              <div
                className="core-orbit core-orbit-one"
                aria-hidden="true"
              />

              <div
                className="core-orbit core-orbit-two"
                aria-hidden="true"
              />

              <div className="core-glow" aria-hidden="true" />

              <div className="core-content">
                <span className="core-kicker">ERA</span>

                <h3>Integration Vision</h3>

                <p>
                  A future framework connecting robotic systems, local
                  intelligence and enterprise workflows.
                </p>

                <div className="core-capabilities">
                  <span>Deployment</span>
                  <span>Edge Intelligence</span>
                  <span>Computer Vision</span>
                  <span>Workflow Integration</span>
                </div>
              </div>
            </div>

            <div className="platform-column platform-outputs">
              <p className="platform-label">OPERATIONAL OUTCOMES</p>

              <div className="platform-module">
                <span>04</span>

                <div>
                  <h3>Connected Workflows</h3>

                  <p>
                    Robotics operating within established enterprise
                    processes.
                  </p>
                </div>
              </div>

              <div className="platform-module">
                <span>05</span>

                <div>
                  <h3>Operational Visibility</h3>

                  <p>
                    Performance information and system visibility where
                    supported.
                  </p>
                </div>
              </div>

              <div className="platform-module">
                <span>06</span>

                <div>
                  <h3>Future Intelligence</h3>

                  <p>
                    Architecture designed to support more adaptive robotic
                    operation over time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="physical-ai-pillars">
            <article>
              <span>01</span>

              <h3>Perceive</h3>

              <p>
                Robotic systems use sensors and emerging vision capabilities
                to understand their operating environment.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Interpret</h3>

              <p>
                Local intelligence can help systems interpret conditions and
                respond more effectively.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Act</h3>

              <p>
                Robotics performs defined tasks within real commercial and
                industrial operations.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>Improve</h3>

              <p>
                Deployment data and operational feedback can support ongoing
                workflow optimisation.
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

              <h2>
                Real-world deployments, presented without exposing customer
                intelligence.
              </h2>
            </div>

            <p className="section-copy">
              Selected projects are presented by operating environment and
              solution type. Detailed customer references are available
              privately, subject to confidentiality requirements.
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

      <section className="section section-alt why-era-section">
        <div className="shell">
          <div className="why-era-layout">
            <div className="why-era-intro">
              <p className="kicker">WHY ERA</p>

              <h2>
                Technology alone does not deliver operational value.
              </h2>

              <p className="why-era-lead">
                Deployment does. Integration does. Support does.
              </p>

              <p className="section-copy">
                ERA approaches automation as an operational system—not a
                standalone machine. We design around the environment,
                workflow, people and operating requirements.
              </p>

              <Link href="/about" className="text-link">
                Learn about ERA
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="why-era-list">
              {approachItems.map((item) => (
                <article key={item.number}>
                  <span className="why-era-number">
                    {item.number}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="why-era-statement">
            <span>ERA DIRECTION</span>

            <p>
              ERA Robotics is building the bridge between today&apos;s
              commercial robotics and tomorrow&apos;s Physical AI systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section resources-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="kicker">RESOURCES</p>

              <h2>
                Insights for deploying robotics in the real world.
              </h2>
            </div>

            <p className="section-copy">
              Practical guidance on automation strategy, site readiness,
              enterprise deployment and the evolution toward Physical AI.
            </p>
          </div>

          <div className="resources-grid">
            <Link
              href="/resources"
              className="resource-card resource-large"
            >
              <div className="resource-top">
                <span>GUIDE</span>
                <span>01</span>
              </div>

              <div
                className="resource-pattern"
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </div>

              <div className="resource-content">
                <p className="resource-category">
                  DEPLOYMENT GUIDE
                </p>

                <h3>
                  Preparing commercial facilities for autonomous robotics.
                </h3>

                <p>
                  Site readiness, infrastructure, workflows, safety
                  considerations and successful enterprise deployment.
                </p>
              </div>

              <span
                className="resource-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>

            <Link href="/resources" className="resource-card">
              <div className="resource-top">
                <span>BRIEF</span>
                <span>02</span>
              </div>

              <div className="resource-content">
                <p className="resource-category">
                  INDUSTRY INSIGHT
                </p>

                <h3>
                  Choosing the right robotics system for enterprise
                  operations.
                </h3>

                <p>
                  Evaluation criteria beyond hardware specifications.
                </p>
              </div>

              <span
                className="resource-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>

            <Link href="/resources" className="resource-card">
              <div className="resource-top">
                <span>ARTICLE</span>
                <span>03</span>
              </div>

              <div className="resource-content">
                <p className="resource-category">PHYSICAL AI</p>

                <h3>
                  From commercial robotics to intelligent physical systems.
                </h3>

                <p>
                  Understanding the next evolution of enterprise automation.
                </p>
              </div>

              <span
                className="resource-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          </div>

          <div className="resources-footer">
            <Link href="/resources" className="text-link">
              Explore all resources
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
