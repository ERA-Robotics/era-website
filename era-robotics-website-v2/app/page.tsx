import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

const capabilities = [
  {
    number: "01",
    title: "Autonomous cleaning",
    body: "Robotic floor care for commercial, industrial and public environments—from daily cleaning to large-area autonomous operation.",
    href: "/products",
  },
  {
    number: "02",
    title: "Service delivery",
    body: "Reliable delivery and guest-service robotics designed around the movement of people, goods and information.",
    href: "/products",
  },
  {
    number: "03",
    title: "Industrial logistics",
    body: "Autonomous material movement and workflow automation for warehouses, factories and complex operational sites.",
    href: "/solutions",
  },
  {
    number: "04",
    title: "Deployment & support",
    body: "Local assessment, mapping, commissioning, operator training and lifecycle support across Australia and New Zealand.",
    href: "/solutions",
  },
];

const products = [
  {
    name: "CC1 Pro",
    category: "Autonomous cleaning",
    description: "AI-powered commercial floor cleaning for complex and high-traffic environments.",
    image: "/products/cc1-pro.png",
    imageClass: styles.productImageCc1Pro,
  },
  {
    name: "MT1 Vac",
    category: "Large-area vacuuming",
    description: "Autonomous vacuuming built for expansive carpeted and mixed-use commercial spaces.",
    image: "/products/mt1-vac.png",
    imageClass: styles.productImageStandard,
  },
  {
    name: "BellaBot Pro",
    category: "Service delivery",
    description: "Intelligent service delivery for hospitality, food service and customer-facing operations.",
    image: "/products/bellabot-pro.png",
    imageClass: styles.productImageStandard,
  },
  {
    name: "T300",
    category: "Industrial logistics",
    description: "Autonomous material transport for manufacturing, warehousing and internal logistics.",
    image: "/products/t300.png",
    imageClass: styles.productImageStandard,
  },
];

const deployments = [
  {
    industry: "Pharmaceutical manufacturing",
    title: "Autonomous cleaning in a controlled production environment.",
    body: "Site configuration shaped around floor conditions, safety requirements, production workflows and repeatable daily operation.",
    tags: ["Controlled environment", "Autonomous cleaning", "Local support"],
  },
  {
    industry: "Public facilities",
    title: "Low-disruption robotic cleaning for visitor environments.",
    body: "Route planning and operating settings designed around public safety, visitor flow and extended operating hours.",
    tags: ["Public environment", "Route design", "Operational planning"],
  },
  {
    industry: "Hospitality",
    title: "Commercial robotics for premium hotel operations.",
    body: "Deployment designed around presentation standards, guest experience, staff adoption and reliable cleaning routines.",
    tags: ["Hospitality", "Staff training", "Workflow design"],
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Assess",
    body: "We examine the site, workflow, surfaces, traffic patterns, safety requirements and operational goals.",
  },
  {
    number: "02",
    title: "Design",
    body: "We select and configure the right system around the environment—not the other way around.",
  },
  {
    number: "03",
    title: "Deploy",
    body: "Our team maps, commissions, tests and trains operators for reliable day-to-day use.",
  },
  {
    number: "04",
    title: "Support",
    body: "We provide local technical support, optimisation and lifecycle assistance after go-live.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>COMMERCIAL ROBOTICS · AUSTRALIA & NEW ZEALAND</p>
              <h1>Intelligent robotics, engineered for real operations.</h1>
              <p className={styles.heroText}>
                ERA Robotics deploys autonomous cleaning, service delivery and industrial robotics with local assessment,
                commissioning, training and lifecycle support.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href="/contact">
                  Book a site assessment <span aria-hidden="true">↗</span>
                </Link>
                <Link className={styles.secondaryButton} href="/products">
                  Explore our robotics
                </Link>
              </div>
              <div className={styles.heroCategories} aria-label="ERA Robotics solution categories">
                <span>Autonomous Cleaning</span>
                <span>Service Delivery</span>
                <span>Industrial Logistics</span>
                <span>Physical AI</span>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroVisualFrame}>
                <div className={styles.visualLabel}>FEATURED SYSTEM</div>
                <Image
                  className={styles.heroRobot}
                  src="/products/cc1-pro.png"
                  alt="PUDU CC1 Pro commercial cleaning robot"
                  width={900}
                  height={900}
                  priority
                />
                <div className={styles.visualInfo}>
                  <div>
                    <span>01</span>
                    <strong>CC1 Pro</strong>
                  </div>
                  <p>Commercial cleaning intelligence for complex environments.</p>
                </div>
              </div>
              <div className={styles.statusCard}>
                <span className={styles.statusDot} />
                <div>
                  <strong>Local deployment capability</strong>
                  <span>Australia + New Zealand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.credibilityBar}>
        <div className={`${styles.container} ${styles.credibilityGrid}`}>
          <div>
            <strong>AU + NZ</strong>
            <span>Regional coverage</span>
          </div>
          <div>
            <strong>End-to-end</strong>
            <span>Assessment to support</span>
          </div>
          <div>
            <strong>Multi-sector</strong>
            <span>Commercial and industrial</span>
          </div>
          <div>
            <strong>Enterprise-ready</strong>
            <span>Site-led deployment</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>WHAT WE DELIVER</p>
              <h2>Robotics that fit the operation.</h2>
            </div>
            <p>
              We start with the environment, workflow and business requirement, then engineer the right robotic system around it.
            </p>
          </div>

          <div className={styles.capabilityGrid}>
            {capabilities.map((capability) => (
              <Link className={styles.capabilityCard} href={capability.href} key={capability.number}>
                <span className={styles.cardNumber}>{capability.number}</span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.body}</p>
                </div>
                <span className={styles.cardArrow} aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.productSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>ROBOTICS PORTFOLIO</p>
              <h2>Built for different operational challenges.</h2>
            </div>
            <Link className={styles.textLink} href="/products">
              View all products <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className={styles.productGrid}>
            {products.map((product) => (
              <Link className={styles.productCard} href="/products" key={product.name}>
                <div className={styles.productVisual}>
                  <span>{product.category}</span>
                  <Image
                    className={product.imageClass}
                    src={product.image}
                    alt={`${product.name} robot`}
                    width={640}
                    height={640}
                  />
                </div>
                <div className={styles.productCopy}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <span className={styles.exploreLabel}>Explore system ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>PROOF IN THE FIELD</p>
              <h2>Designed around real environments.</h2>
            </div>
            <p>
              Every deployment is shaped by the people, workflows and operating conditions already present on site.
            </p>
          </div>

          <div className={styles.deploymentGrid}>
            {deployments.map((deployment, index) => (
              <article className={styles.deploymentCard} key={deployment.title}>
                <div className={styles.deploymentTopline}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{deployment.industry}</span>
                </div>
                <h3>{deployment.title}</h3>
                <p>{deployment.body}</p>
                <div className={styles.tagList}>
                  {deployment.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className={styles.sectionFooterLink}>
            <Link className={styles.textLink} href="/deployments">
              Explore deployments <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.processSection}`}>
        <div className={styles.container}>
          <div className={styles.processIntro}>
            <p className={styles.eyebrow}>THE ERA APPROACH</p>
            <h2>Successful automation is engineered—not simply installed.</h2>
            <p>
              Hardware is only one part of the outcome. Our role is to turn robotics into a practical, supported operational system.
            </p>
            <Link className={styles.secondaryButton} href="/solutions">
              Explore our approach
            </Link>
          </div>

          <div className={styles.processGrid}>
            {deliverySteps.map((step) => (
              <article className={styles.processStep} key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.physicalAiSection}>
        <div className={styles.container}>
          <div className={styles.physicalAiGrid}>
            <div>
              <p className={styles.eyebrow}>OUR DIRECTION</p>
              <h2>From commercial robotics to connected physical intelligence.</h2>
            </div>
            <div className={styles.physicalAiCopy}>
              <p>
                ERA deploys practical robotic systems today while developing the perception, edge intelligence and connected
                workflow capabilities required for more adaptive physical operations.
              </p>
              <div className={styles.aiPillRow}>
                <span>Computer vision</span>
                <span>Edge intelligence</span>
                <span>Connected workflows</span>
                <span>Physical AI</span>
              </div>
              <Link className={styles.textLink} href="/about">
                Explore our direction <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div>
              <p className={styles.eyebrow}>START WITH THE OPERATION</p>
              <h2>Let’s assess where robotics can create real value.</h2>
              <p>
                Tell us about your facility, current workflow and operational challenge. Our team will help identify the right next step.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link className={styles.primaryButton} href="/contact">
                Talk to ERA <span aria-hidden="true">↗</span>
              </Link>
              <Link className={styles.secondaryButton} href="/deployments">
                View deployments
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
