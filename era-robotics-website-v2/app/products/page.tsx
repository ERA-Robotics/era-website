import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Robotics Products | ERA Robotics Australia",
  description:
    "Explore ERA Robotics commercial cleaning robots, service and delivery robots, industrial delivery robots, and the ERA Intelligence Platform.",
};

type Product = {
  id: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  applications: string[];
  tone?: "violet" | "blue" | "cyan" | "green" | "amber";
  imageClassName?: string;
};

const cleaningProducts: Product[] = [
  {
    id: "cc1",
    name: "CC1",
    eyebrow: "Autonomous floor cleaning",
    title: "Four cleaning modes. One intelligent platform.",
    description:
      "An autonomous commercial cleaning robot combining scrubbing, sweeping, vacuuming and dust mopping for hard floors and carpets.",
    image: "/products/cc1.png",
    imageAlt: "PUDU CC1 autonomous commercial cleaning robot",
    features: [
      "Scrubbing, sweeping, vacuuming and dust mopping",
      "Automatic charging and water management",
      "Dynamic environmental perception",
      "Measurable cleaning reports",
    ],
    applications: [
      "Retail",
      "Education",
      "Commercial buildings",
      "Public facilities",
    ],
    tone: "blue",
  },
  {
    id: "cc1-pro",
    name: "CC1 Pro",
    eyebrow: "AI-powered autonomous cleaning",
    title: "Cleaning intelligence that responds in real time.",
    description:
      "An advanced autonomous cleaning robot combining AI perception, adaptive cleaning strategies and real-time performance monitoring.",
    image: "/products/cc1-pro.png",
    imageAlt: "PUDU CC1 Pro AI-powered commercial cleaning robot",
    features: [
      "AI spot scrubbing",
      "Real-time cleaning performance detection",
      "Adaptive floor and stain recognition",
      "Cleaning component self-monitoring",
    ],
    applications: [
      "Supermarkets",
      "Healthcare",
      "Education",
      "Large commercial sites",
    ],
    tone: "violet",
  },
  {
    id: "sh1",
    name: "SH1",
    eyebrow: "Smart upright scrubber dryer",
    title: "Professional deep cleaning with intelligent control.",
    description:
      "A compact professional scrubber dryer engineered for difficult stains, edges, vertical surfaces and low-profile areas.",
    image: "/products/sh1.png",
    imageAlt: "PUDU SH1 smart upright commercial scrubber dryer",
    features: [
      "High brush pressure",
      "Air, liquid and debris separation",
      "Multi-dimensional cleaning",
      "Real-time component monitoring",
    ],
    applications: [
      "Hospitality",
      "Retail",
      "Commercial kitchens",
      "Facility maintenance",
    ],
    tone: "cyan",
    imageClassName: "product-image-sh1",
  },
];

const mtSeries: Product[] = [
  {
    id: "mt1",
    name: "MT1",
    eyebrow: "AI-powered robotic sweeper",
    title: "Large-scale autonomous sweeping for demanding venues.",
    description:
      "A professional robotic sweeper designed for large and complex environments, combining AI trash recognition with high-capacity debris collection.",
    image: "/products/mt1.png",
    imageAlt: "PUDU MT1 AI-powered robotic sweeper",
    features: [
      "AI trash recognition",
      "AI spot cleaning",
      "35-litre debris capacity",
      "Continuous autonomous operation",
    ],
    applications: [
      "Warehouses",
      "Manufacturing",
      "Transport facilities",
      "Large public venues",
    ],
    tone: "green",
  },
  {
    id: "mt1-vac",
    name: "MT1 Vac",
    eyebrow: "Robotic sweeper and vacuum",
    title: "Powerful autonomous vacuuming across mixed floor types.",
    description:
      "A robotic vacuuming platform for carpets and hard floors, featuring adaptive floor recognition and a wide cleaning path.",
    image: "/products/mt1-vac.png",
    imageAlt: "PUDU MT1 Vac autonomous commercial vacuum robot",
    features: [
      "Dual-fan vacuum system",
      "Carpet and hard-floor recognition",
      "Wide 55 cm vacuuming path",
      "Dust and waste separation",
    ],
    applications: [
      "Hotels",
      "Commercial buildings",
      "Education",
      "Carpeted facilities",
    ],
    tone: "blue",
  },
  {
    id: "mt1-max",
    name: "MT1 Max",
    eyebrow: "Heavy-duty autonomous cleaning",
    title: "Expanded capability for high-demand facilities.",
    description:
      "The most capable platform in the MT1 family, designed for intensive autonomous cleaning across expansive operational environments.",
    image: "/products/mt1-max.png",
    imageAlt: "PUDU MT1 Max autonomous commercial cleaning robot",
    features: [
      "High-capacity cleaning platform",
      "AI-assisted environmental perception",
      "Large-site autonomous navigation",
      "Continuous fleet-ready operation",
    ],
    applications: [
      "Warehouses",
      "Industrial facilities",
      "Transport hubs",
      "Large-format retail",
    ],
    tone: "violet",
  },
];

const bg1Product: Product = {
  id: "bg1-series",
  name: "BG1 Series",
  eyebrow: "Outdoor grounds maintenance",
  title: "Autonomous maintenance beyond the building.",
  description:
    "A robotic grounds-maintenance platform designed to extend autonomous facility operations into outdoor environments.",
  image: "/products/bg1-series.png",
  imageAlt: "PUDU BG1 Series autonomous outdoor grounds maintenance robot",
  features: [
    "Autonomous outdoor operation",
    "Intelligent route planning",
    "Large-area coverage",
    "Fleet-ready deployment",
  ],
  applications: [
    "Commercial campuses",
    "Public facilities",
    "Education campuses",
    "Hospitality grounds",
  ],
  tone: "green",
};

const serviceProducts: Product[] = [
  {
    id: "bellabot-pro",
    name: "BellaBot Pro",
    eyebrow: "Premium delivery and engagement",
    title: "Service delivery designed around the customer experience.",
    description:
      "A premium service robot combining stable delivery, intelligent navigation and digital engagement for customer-facing environments.",
    image: "/products/bellabot-pro.png",
    imageAlt: "PUDU BellaBot Pro premium service and delivery robot",
    features: [
      "Stable multi-tray delivery",
      "Advanced obstacle perception",
      "Digital advertising display",
      "Multiple delivery and greeting modes",
    ],
    applications: [
      "Hospitality",
      "Restaurants",
      "Retail",
      "Healthcare",
    ],
    tone: "violet",
    imageClassName: "product-image-tall",
  },
  {
    id: "kettybot-pro",
    name: "KettyBot Pro",
    eyebrow: "Delivery and mobile engagement",
    title: "Compact delivery with a visible brand presence.",
    description:
      "A customer-facing delivery platform combining autonomous movement, promotional content and interactive service workflows.",
    image: "/products/kettybot-pro.png",
    imageAlt: "PUDU KettyBot Pro service and advertising robot",
    features: [
      "Autonomous delivery",
      "Mobile promotional display",
      "Compact navigation footprint",
      "Interactive customer engagement",
    ],
    applications: [
      "Retail",
      "Restaurants",
      "Showrooms",
      "Public venues",
    ],
    tone: "amber",
    imageClassName: "product-image-tall",
  },
  {
    id: "flashbot",
    name: "FlashBot",
    eyebrow: "Secure building delivery",
    title: "Autonomous delivery across floors, doors and destinations.",
    description:
      "A secure building-delivery robot designed to navigate elevators, access-controlled areas and multi-floor facilities.",
    image: "/products/flashbot.png",
    imageAlt: "PUDU FlashBot secure multi-floor building delivery robot",
    features: [
      "Autonomous elevator integration",
      "Secure adjustable compartments",
      "Multi-floor map deployment",
      "Door, turnstile and phone integration",
    ],
    applications: [
      "Hotels",
      "Hospitals",
      "Commercial buildings",
      "Residential facilities",
    ],
    tone: "blue",
    imageClassName: "product-image-tall",
  },
];

const industrialProducts: Product[] = [
  {
    id: "t300",
    name: "T300",
    eyebrow: "Industrial delivery robot",
    title: "Flexible material movement for changing operations.",
    description:
      "A 300 kg industrial delivery platform supporting multiple transport configurations and rapid deployment across factories and warehouses.",
    image: "/products/t300.png",
    imageAlt: "PUDU T300 industrial autonomous delivery robot",
    features: [
      "Up to 300 kg payload",
      "Multiple delivery configurations",
      "VSLAM and LiDAR positioning",
      "IoT and production workflow integration",
    ],
    applications: [
      "Manufacturing",
      "Warehouses",
      "Production lines",
      "Industrial logistics",
    ],
    tone: "amber",
  },
  {
    id: "t600-series",
    name: "T600 Series",
    eyebrow: "Heavy-payload industrial delivery",
    title: "Autonomous transport built for heavier workloads.",
    description:
      "A heavy-payload industrial robot family designed for rack transport, production logistics and high-capacity material movement.",
    image: "/products/t600-series.png",
    imageAlt: "PUDU T600 Series heavy-payload industrial delivery robot",
    features: [
      "Up to 600 kg payload",
      "Standard and underride configurations",
      "Rack recognition and autonomous handling",
      "VDA5050-compatible fleet integration",
    ],
    applications: [
      "Manufacturing",
      "Warehousing",
      "Distribution centres",
      "Heavy material transport",
    ],
    tone: "cyan",
  },
];

function ProductVisual({ product }: { product: Product }) {
  return (
    <div
      className={`product-showcase-visual product-showcase-visual-${product.tone ?? "blue"}`}
    >
      <div className="product-showcase-orbit" aria-hidden="true" />
      <div className="product-showcase-floor" aria-hidden="true" />

      <Image
        src={product.image}
        alt={product.imageAlt}
        width={1200}
        height={1200}
        sizes="(max-width: 760px) 92vw, (max-width: 1200px) 48vw, 620px"
        className={`product-showcase-image ${product.imageClassName ?? ""}`}
      />
    </div>
  );
}

function ProductContent({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <div className="product-showcase-content">
      <div className="product-showcase-heading">
        <span className="product-showcase-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <span className="product-showcase-eyebrow">{product.eyebrow}</span>
          <h3>{product.name}</h3>
        </div>
      </div>

      <h4>{product.title}</h4>

      <p className="product-showcase-description">{product.description}</p>

      <div className="product-showcase-details">
        <div>
          <span className="product-detail-label">Key capabilities</span>

          <ul className="product-capability-list">
            {product.features.map((feature) => (
              <li key={feature}>
                <span aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="product-detail-label">Applications</span>

          <div className="product-application-list">
            {product.applications.map((application) => (
              <span key={application}>{application}</span>
            ))}
          </div>
        </div>
      </div>

      <Link href="/contact" className="product-showcase-link">
        Discuss this product
        <span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}

function ProductShowcase({
  product,
  index,
  reverse = false,
}: {
  product: Product;
  index: number;
  reverse?: boolean;
}) {
  return (
    <article
      id={product.id}
      className={`product-showcase ${reverse ? "product-showcase-reverse" : ""}`}
    >
      <ProductContent product={product} index={index} />
      <ProductVisual product={product} />
    </article>
  );
}

function ProductLineHeader({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="product-line-header">
      <div className="product-line-index">{number}</div>

      <div className="product-line-copy">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>

      <p>{description}</p>
    </header>
  );
}

export default function ProductsPage() {
  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="products-hero-grid" aria-hidden="true" />

        <div className="products-shell products-hero-inner">
          <span className="products-hero-eyebrow">
            ERA Robotics product portfolio
          </span>

          <h1>
            Robotics built for
            <span> real operations.</span>
          </h1>

          <p>
            From autonomous commercial cleaning to secure building delivery,
            industrial logistics and AI-powered fleet intelligence.
          </p>

          <div className="products-hero-actions">
            <Link href="#commercial-cleaning" className="products-primary-button">
              Explore products
            </Link>

            <Link href="/contact" className="products-secondary-button">
              Talk to our team
            </Link>
          </div>
        </div>

        <div className="products-hero-footer">
          <div className="products-shell">
            <span>Cleaning</span>
            <span>Service</span>
            <span>Industrial</span>
            <span>Intelligence</span>
          </div>
        </div>
      </section>

      <nav className="products-subnav" aria-label="Product categories">
        <div className="products-shell products-subnav-inner">
          <span className="products-subnav-brand">Products</span>

          <div className="products-subnav-links">
            <a href="#commercial-cleaning">Cleaning</a>
            <a href="#service-delivery">Service</a>
            <a href="#industrial-delivery">Industrial</a>
            <a href="#intelligence-platform">Platform</a>
          </div>

          <Link href="/contact">Enquire</Link>
        </div>
      </nav>

      <section className="products-introduction">
        <div className="products-shell products-introduction-grid">
          <span className="products-section-label">Complete portfolio</span>

          <h2>
            Hardware, deployment and intelligence brought together as one
            operational system.
          </h2>

          <p>
            ERA Robotics supports organisations from initial site assessment
            and deployment through to training, service, optimisation and
            multi-site expansion.
          </p>
        </div>
      </section>

      <section
        id="commercial-cleaning"
        className="product-line-section product-line-section-dark"
      >
        <div className="products-shell">
          <ProductLineHeader
            number="01"
            eyebrow="Commercial cleaning robotics"
            title="Autonomous cleaning for real-world facilities."
            description="A portfolio spanning compact professional equipment, autonomous floor care and large-area robotic sweeping."
          />

          <div className="product-showcase-list">
            {cleaningProducts.map((product, index) => (
              <ProductShowcase
                key={product.id}
                product={product}
                index={index}
                reverse={index % 2 === 1}
              />
            ))}
          </div>

          <div className="product-family">
            <div className="product-family-heading">
              <span>MT1 Series</span>
              <h3>One autonomous platform. Three specialised configurations.</h3>
              <p>
                Select the cleaning architecture that matches the floor type,
                debris profile and operating environment.
              </p>
            </div>

            <div className="product-family-grid">
              {mtSeries.map((product) => (
                <article
                  id={product.id}
                  key={product.id}
                  className={`product-family-card product-family-card-${product.tone}`}
                >
                  <div className="product-family-visual">
                    <div className="product-family-glow" aria-hidden="true" />

                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      width={900}
                      height={900}
                      sizes="(max-width: 760px) 86vw, (max-width: 1100px) 42vw, 360px"
                      className="product-family-image"
                    />
                  </div>

                  <div className="product-family-content">
                    <span>{product.eyebrow}</span>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>

                    <ul>
                      {product.features.slice(0, 3).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      Enquire about {product.name}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="standalone-product">
            <ProductShowcase product={bg1Product} index={6} reverse />
          </div>
        </div>
      </section>

      <section
        id="service-delivery"
        className="product-line-section product-line-section-light"
      >
        <div className="products-shell">
          <ProductLineHeader
            number="02"
            eyebrow="Service and delivery robotics"
            title="Autonomous delivery with a human-facing experience."
            description="Robotic platforms for hospitality, retail, healthcare and secure multi-floor building operations."
          />

          <div className="product-showcase-list">
            {serviceProducts.map((product, index) => (
              <ProductShowcase
                key={product.id}
                product={product}
                index={index}
                reverse={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="industrial-delivery"
        className="product-line-section product-line-section-industrial"
      >
        <div className="products-shell">
          <ProductLineHeader
            number="03"
            eyebrow="Industrial delivery robotics"
            title="Material movement designed around production."
            description="Autonomous industrial transport solutions for factories, warehouses, distribution centres and production workflows."
          />

          <div className="product-showcase-list">
            {industrialProducts.map((product, index) => (
              <ProductShowcase
                key={product.id}
                product={product}
                index={index}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="intelligence-platform"
        className="intelligence-platform-section"
      >
        <div className="products-shell">
          <div className="intelligence-platform-intro">
            <div>
              <span className="products-section-label">
                04 · AI operations platform
              </span>

              <h2>
                Monitor.
                <br />
                Analyse.
                <br />
                Optimise.
              </h2>
            </div>

            <div className="intelligence-platform-copy">
              <h3>ERA Intelligence Platform</h3>

              <p>
                A unified operational layer designed to provide fleet
                visibility, task intelligence and multi-site performance
                oversight.
              </p>

              <div className="intelligence-capability-list">
                <article>
                  <span>01</span>
                  <div>
                    <h4>Fleet visibility</h4>
                    <p>
                      Review robot status, task progress and deployment activity
                      across multiple locations.
                    </p>
                  </div>
                </article>

                <article>
                  <span>02</span>
                  <div>
                    <h4>Operational intelligence</h4>
                    <p>
                      Transform robotic activity and task history into
                      actionable operational insight.
                    </p>
                  </div>
                </article>

                <article>
                  <span>03</span>
                  <div>
                    <h4>AI-assisted workflows</h4>
                    <p>
                      Build toward smarter task allocation, exception handling
                      and facility-wide optimisation.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="intelligence-dashboard">
            <div className="intelligence-dashboard-visual">
              <div
                className="intelligence-dashboard-glow"
                aria-hidden="true"
              />

              <div className="intelligence-dashboard-frame">
                <div className="intelligence-dashboard-toolbar">
                  <div
                    className="dashboard-window-controls"
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="dashboard-toolbar-label">
                    ERA Intelligence Platform
                  </div>

                  <div className="dashboard-toolbar-status">
                    <span />
                    Platform online
                  </div>
                </div>

                <div className="intelligence-dashboard-image-wrap">
                  <Image
                    src="/era-intelligence-dashboard.png"
                    alt="Conceptual ERA Intelligence Platform multi-site fleet operations dashboard"
                    width={1664}
                    height={928}
                    sizes="(max-width: 720px) 94vw, (max-width: 1200px) 90vw, 1400px"
                    className="intelligence-dashboard-image"
                  />

                  <div
                    className="intelligence-dashboard-overlay"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="dashboard-floating-card dashboard-floating-card-left">
                <span className="dashboard-floating-label">
                  Fleet visibility
                </span>
                <strong>Multi-site operations</strong>
                <small>Live status and task activity</small>
              </div>

              <div className="dashboard-floating-card dashboard-floating-card-right">
                <span className="dashboard-ai-indicator" aria-hidden="true">
                  ✦
                </span>

                <div>
                  <span className="dashboard-floating-label">ERA AI</span>
                  <strong>Operational intelligence</strong>
                </div>
              </div>
            </div>

            <div className="intelligence-dashboard-caption">
              <span>ERA Intelligence Platform</span>
              <span>
                Conceptual product visual · Interface subject to development
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="products-delivery-model">
        <div className="products-shell">
          <div className="products-delivery-heading">
            <span className="products-section-label">
              More than the hardware
            </span>

            <h2>
              Robotics deployment designed around operational outcomes.
            </h2>
          </div>

          <div className="products-delivery-grid">
            <article>
              <span>01</span>
              <h3>Site assessment</h3>
              <p>
                Evaluate workflows, floor conditions, traffic patterns and
                operational requirements before deployment.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Deployment</h3>
              <p>
                Configure maps, tasks, integrations and operating procedures
                around the real facility.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Training and adoption</h3>
              <p>
                Support site teams with practical training, workflow design and
                change management.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Service and optimisation</h3>
              <p>
                Maintain performance through technical support, servicing and
                ongoing operational review.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="products-cta">
        <div className="products-cta-glow" aria-hidden="true" />

        <div className="products-shell products-cta-inner">
          <span>Start with your operational challenge</span>

          <h2>
            Find the right robotics platform for your facility.
          </h2>

          <p>
            Tell us about your site, workflow and deployment goals. Our team can
            help evaluate the right product and implementation approach.
          </p>

          <Link href="/contact" className="products-primary-button">
            Talk to ERA Robotics
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
