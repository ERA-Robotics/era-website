import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title:
    "Commercial Robots & AI Operations Platform | ERA Robotics Australia",
  description:
    "Explore ERA Robotics commercial cleaning robots, service and delivery robots, industrial delivery AMRs and the ERA Intelligence Platform for multi-site robotic operations.",
};

type ProductSpec = {
  label: string;
  value: string;
};

type Product = {
  name: string;
  descriptor: string;
  summary: string;
  highlights: string[];
  applications: string[];
  specs?: ProductSpec[];
  availability?: string;
};

type ProductGroup = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  introduction: string;
  supportingCopy: string;
  products: Product[];
};

const productGroups: ProductGroup[] = [
  {
    id: "cleaning",
    number: "01",
    eyebrow: "COMMERCIAL CLEANING ROBOTICS",
    title: "Cleaning systems for real operating environments.",
    introduction:
      "From compact autonomous floor care to large-area sweeping, vacuuming and scrubber-dryer applications, ERA provides cleaning systems selected around the floor type, facility layout and operational requirement.",
    supportingCopy:
      "The portfolio supports hard floors, carpets, mixed environments, targeted spot cleaning, large-scale dry sweeping and continuous autonomous operation.",
    products: [
      {
        name: "PUDU CC1",
        descriptor: "Intelligent Commercial Cleaning Robot",
        summary:
          "A versatile four-in-one autonomous cleaning robot combining scrubbing, sweeping, vacuuming and dust mopping in one compact platform.",
        highlights: [
          "Four-in-one cleaning",
          "Hard-floor and carpet capability",
          "Dynamic space perception",
          "Automatic charging",
          "Automatic water refill and drainage",
          "Mobile water station option",
        ],
        applications: [
          "Supermarkets",
          "Education",
          "Hotels",
          "Commercial offices",
          "Public facilities",
          "Healthcare",
        ],
        specs: [
          {
            label: "Cleaning efficiency",
            value: "700–1,000 m²/h",
          },
          {
            label: "Clean water tank",
            value: "15 L",
          },
          {
            label: "Waste water tank",
            value: "15 L",
          },
          {
            label: "Minimum footprint",
            value: "629 × 552 mm",
          },
        ],
        availability: "Available for Australian and New Zealand deployments",
      },
      {
        name: "PUDU CC1 Pro",
        descriptor: "AI-Powered Autonomous Cleaning Robot",
        summary:
          "An advanced four-in-one cleaning platform that uses AI perception to identify spills, adapt cleaning intensity and monitor cleaning quality in real time.",
        highlights: [
          "AI spot scrubbing",
          "Real-time cleaning performance detection",
          "AI cleaning intensity control",
          "Floor-type and stain detection",
          "Cleaning component self-monitoring",
          "VSLAM and LiDAR fusion positioning",
        ],
        applications: [
          "Supermarkets",
          "Retail centres",
          "Large commercial buildings",
          "Education",
          "Healthcare",
          "Enterprise facilities",
        ],
        specs: [
          {
            label: "Full-coverage cleaning",
            value: "700–1,000 m²/h",
          },
          {
            label: "AI spot cleaning",
            value: "1,500–3,000 m²/h",
          },
          {
            label: "Scrubbing runtime",
            value: "Up to 5 h",
          },
          {
            label: "Silent mopping runtime",
            value: "Up to 9 h",
          },
        ],
        availability: "Available for enterprise trials and deployments",
      },
      {
        name: "PUDU SH1",
        descriptor: "Smart Upright Scrubber Dryer",
        summary:
          "A connected upright scrubber dryer designed to combine strong stain removal with measurable cleaning, component monitoring and flexible manual operation.",
        highlights: [
          "27 kg brush pressure",
          "20,000 Pa suction",
          "Air-liquid-debris separation",
          "Multi-dimensional cleaning",
          "Real-time component monitoring",
          "Measurable cleaning results",
        ],
        applications: [
          "Retail",
          "Hospitality",
          "Education",
          "Commercial kitchens",
          "Facility teams",
          "Detailed floor care",
        ],
        specs: [
          {
            label: "Cleaning productivity",
            value: "1,100–1,600 m²/h",
          },
          {
            label: "Working width",
            value: "44 cm",
          },
          {
            label: "Standard runtime",
            value: "Approximately 70 min",
          },
          {
            label: "ECO runtime",
            value: "Approximately 100 min",
          },
        ],
        availability: "Available as a smart manual cleaning platform",
      },
      {
        name: "PUDU MT1",
        descriptor: "AI-Powered Robotic Sweeper",
        summary:
          "A professional large-area dry-cleaning robot that uses AI trash recognition and spot cleaning to detect and remove debris across expansive facilities.",
        highlights: [
          "AI trash recognition",
          "AI spot cleaning",
          "35 L debris capacity",
          "Active dust control",
          "Large and small debris collection",
          "Continuous autonomous operation",
        ],
        applications: [
          "Warehouses",
          "Manufacturing",
          "Transport facilities",
          "Distribution centres",
          "Large public venues",
          "Large campuses",
        ],
        specs: [
          {
            label: "Full-coverage cleaning",
            value: "Up to 1,800 m²/h",
          },
          {
            label: "Spot-cleaning performance",
            value: "Up to 6,000 m²/h",
          },
          {
            label: "Debris capacity",
            value: "35 L",
          },
          {
            label: "Runtime",
            value: "4–8 h",
          },
        ],
        availability: "Designed for large indoor commercial environments",
      },
      {
        name: "PUDU MT1 Vac",
        descriptor: "AI-Powered Robotic Sweeper & Vacuum",
        summary:
          "A wide-path autonomous vacuuming and sweeping platform that recognises carpet and hard floors and adapts its suction and brush settings in real time.",
        highlights: [
          "Carpet and hard-floor recognition",
          "Dual-fan deep vacuuming",
          "55 cm vacuuming path",
          "14 L dust bags and 6 L trash bin",
          "Quick-release dust-mop module",
          "Hand-vacuum extension",
        ],
        applications: [
          "Hotels",
          "Commercial offices",
          "Conference venues",
          "Education",
          "Public facilities",
          "Mixed-floor environments",
        ],
        specs: [
          {
            label: "Cleaning performance",
            value: "Up to 1,400 m²/h",
          },
          {
            label: "Vacuuming width",
            value: "55 cm",
          },
          {
            label: "Runtime",
            value: "3–6.5 h",
          },
          {
            label: "Filtration",
            value: "H11, optional H13",
          },
        ],
        availability: "Available for carpeted and mixed-floor sites",
      },
      {
        name: "PUDU MT1 Max",
        descriptor: "AI-Powered 3D Perception Robotic Sweeper",
        summary:
          "A next-generation large-area robotic sweeper using enhanced 3D perception, adaptive AI cleaning and intelligent interaction for demanding commercial environments.",
        highlights: [
          "3D perception integration",
          "AI adaptive cleaning",
          "Magic Cleaning workflow",
          "Intelligent active interaction",
          "Enhanced obstacle avoidance",
          "24/7 continuous operation",
        ],
        applications: [
          "Large warehouses",
          "Manufacturing",
          "Distribution centres",
          "Transport hubs",
          "Large indoor venues",
          "Complex industrial sites",
        ],
        specs: [
          {
            label: "Site coverage",
            value: "Designed for sites up to 100,000 m²",
          },
          {
            label: "Perception",
            value: "AI-powered 3D perception",
          },
          {
            label: "Operation model",
            value: "Continuous autonomous cleaning",
          },
        ],
        availability: "Contact ERA for product availability and deployment scope",
      },
      {
        name: "PUDU BG1 Series",
        descriptor: "AI-Native Large Scrubber-Dryer Robot",
        summary:
          "A large autonomous scrubber-dryer platform designed to sweep and scrub in a single pass while extending cleaning performance into edges and complex operating areas.",
        highlights: [
          "One-pass sweep and scrub",
          "Extendable edge cleaning",
          "AI Magic Cleaning",
          "3D perception enhancement",
          "Fast, user-friendly maintenance",
          "24/7 continuous operation",
        ],
        applications: [
          "Warehouses",
          "Manufacturing",
          "Large retail facilities",
          "Transport facilities",
          "Distribution centres",
          "Large commercial floors",
        ],
        specs: [
          {
            label: "Cleaning type",
            value: "Large-area sweep and scrub",
          },
          {
            label: "Perception",
            value: "AI-native 3D perception",
          },
          {
            label: "Operating model",
            value: "Continuous autonomous operation",
          },
        ],
        availability: "Contact ERA for BG1 Series deployment planning",
      },
    ],
  },
  {
    id: "service",
    number: "02",
    eyebrow: "SERVICE & DELIVERY ROBOTICS",
    title: "Robots that move, engage and support service teams.",
    introduction:
      "ERA's service and delivery portfolio supports hospitality, retail, workplace and multi-storey building workflows where reliable movement and customer interaction are equally important.",
    supportingCopy:
      "Each platform serves a different operational role—from open-tray delivery and mobile marketing to secure compartment delivery across elevators and controlled-access areas.",
    products: [
      {
        name: "BellaBot Pro",
        descriptor: "Premium Delivery & Advertising Robot",
        summary:
          "A premium open-tray delivery robot combining smooth mobility, customer-facing interaction and a large digital display for advertising and promotional content.",
        highlights: [
          "Four open delivery trays",
          "18.5-inch advertising display",
          "Dish recognition and broadcast",
          "Mobile marketing capability",
          "Upgraded VSLAM navigation",
          "Omni-sense obstacle detection",
        ],
        applications: [
          "Restaurants",
          "Hotels",
          "Hospitality venues",
          "Retail",
          "Events",
          "Customer engagement",
        ],
        specs: [
          {
            label: "Maximum payload",
            value: "40 kg total",
          },
          {
            label: "Payload per tray",
            value: "10 kg",
          },
          {
            label: "Path clearance",
            value: "65 cm",
          },
          {
            label: "Navigation",
            value: "VSLAM and LiDAR SLAM",
          },
        ],
        availability: "Available for hospitality and engagement deployments",
      },
      {
        name: "KettyBot Pro",
        descriptor: "Flexible Multitasker",
        summary:
          "A compact customer-facing robot designed to perform delivery, reception and marketing tasks in environments where manoeuvrability and visibility matter.",
        highlights: [
          "52 cm superior mobility",
          "Delivery and reception workflows",
          "Marketing and promotional display",
          "Smart tray detection",
          "Extended battery life",
          "Customer attraction capability",
        ],
        applications: [
          "Restaurants",
          "Retail stores",
          "Showrooms",
          "Reception areas",
          "Events",
          "Customer service",
        ],
        specs: [
          {
            label: "Minimum path clearance",
            value: "52 cm",
          },
          {
            label: "Primary roles",
            value: "Delivery, reception and marketing",
          },
          {
            label: "Tray monitoring",
            value: "Smart tray detection",
          },
        ],
        availability: "Available for customer-facing commercial sites",
      },
      {
        name: "FlashBot",
        descriptor: "Building Delivery Expert",
        summary:
          "A secure multi-floor building delivery robot with configurable compartments, access verification and IoT integration for elevators, doors and turnstiles.",
        highlights: [
          "Autonomous elevator control",
          "Cloud or hardware elevator integration",
          "Secure adjustable compartments",
          "Password, phone and NFC verification",
          "Rapid multi-floor deployment",
          "Door and turnstile integration",
        ],
        applications: [
          "Hotels",
          "Office buildings",
          "Healthcare",
          "Apartments",
          "Multi-storey facilities",
          "Secure internal delivery",
        ],
        specs: [
          {
            label: "Compartment configuration",
            value: "2–4 adjustable compartments",
          },
          {
            label: "Payload",
            value: "10 kg per layer",
          },
          {
            label: "Runtime",
            value: "Up to 8 h",
          },
          {
            label: "Minimum path clearance",
            value: "70 cm",
          },
        ],
        availability: "Available subject to building and elevator assessment",
      },
    ],
  },
  {
    id: "industrial",
    number: "03",
    eyebrow: "INDUSTRIAL DELIVERY ROBOTICS",
    title: "Autonomous material movement for industrial operations.",
    introduction:
      "The PUDU T Series supports repetitive material movement between storage, production and operational areas, reducing manual transport and improving workflow consistency.",
    supportingCopy:
      "Flexible top-module options, high payload capacities, industrial safety systems and integration capabilities allow the platforms to support a range of manufacturing and warehouse processes.",
    products: [
      {
        name: "PUDU T300",
        descriptor: "Industrial Delivery Robot",
        summary:
          "A flexible 300 kg industrial delivery robot designed for rapid deployment and configurable material movement across production and warehouse environments.",
        highlights: [
          "300 kg payload capacity",
          "Standard, container, lifting and trolley modes",
          "VSLAM and LiDAR fusion navigation",
          "No environmental modification required",
          "Elevator, access and production-line integration",
          "ISO 3691-4 safety compliance",
        ],
        applications: [
          "Manufacturing",
          "Production lines",
          "Warehouses",
          "Internal logistics",
          "Material replenishment",
          "Component transport",
        ],
        specs: [
          {
            label: "Maximum payload",
            value: "300 kg",
          },
          {
            label: "Minimum clearance",
            value: "60 cm",
          },
          {
            label: "Charging time",
            value: "Approximately 2 h",
          },
          {
            label: "No-load runtime",
            value: "Up to 12 h",
          },
        ],
        availability: "Available for industrial workflow assessment",
      },
      {
        name: "PUDU T600 Series",
        descriptor: "Heavy-Payload Industrial Delivery Robot",
        summary:
          "A 600 kg industrial delivery platform available in standard and underride configurations for heavy material movement and integrated factory logistics.",
        highlights: [
          "600 kg payload capacity",
          "Standard and underride configurations",
          "Rack group recognition",
          "Idle elevator priority scheduling",
          "VDA5050 protocol support",
          "On-premises deployment option",
        ],
        applications: [
          "Heavy manufacturing",
          "Warehouses",
          "Distribution centres",
          "Production logistics",
          "Rack transport",
          "Multi-floor industrial sites",
        ],
        specs: [
          {
            label: "Maximum payload",
            value: "600 kg",
          },
          {
            label: "Charging time",
            value: "Approximately 2 h to 90%",
          },
          {
            label: "No-load runtime",
            value: "Up to 12 h",
          },
          {
            label: "Navigation",
            value: "VSLAM and LiDAR, model dependent",
          },
        ],
        availability: "Available for heavy-payload industrial projects",
      },
    ],
  },
];

const platformCapabilities = [
  {
    number: "01",
    title: "Multi-site fleet visibility",
    body: "View deployed robots across customer sites, regions and operating environments through one central interface.",
  },
  {
    number: "02",
    title: "Live operational monitoring",
    body: "Monitor robot status, availability, activity and operational exceptions as they occur.",
  },
  {
    number: "03",
    title: "2D and 3D task replay",
    body: "Review cleaning paths, completed areas, robot movement and task history using detailed operational maps.",
  },
  {
    number: "04",
    title: "Performance analytics",
    body: "Track completed tasks, cleaned area, operational time, utilisation and other practical performance indicators.",
  },
  {
    number: "05",
    title: "Issue and supply management",
    body: "Coordinate issues, maintenance requirements, supplies and follow-up activities across the deployed fleet.",
  },
  {
    number: "06",
    title: "Customer and site reporting",
    body: "Organise robot information by customer and site while creating a clearer record of operational performance.",
  },
  {
    number: "07",
    title: "Agentic AI assistance",
    body: "Use conversational AI to interpret fleet data, surface relevant information and support faster operational decisions.",
  },
  {
    number: "08",
    title: "Enterprise-ready architecture",
    body: "Designed to support multi-site operations, managed service models and future integrations with broader robotic ecosystems.",
  },
];

const platformModels = [
  {
    number: "01",
    title: "Software subscription",
    body: "Platform access structured around selected robots, sites or customer accounts.",
  },
  {
    number: "02",
    title: "Enterprise licence",
    body: "A configured deployment for organisations requiring broader reporting, access control and operational visibility.",
  },
  {
    number: "03",
    title: "Managed robotic operations",
    body: "ERA platform technology combined with remote monitoring, issue follow-up and operational support.",
  },
];

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        kicker="PRODUCTS"
        title="Robotics and intelligence for real-world operations."
        description="Explore ERA Robotics' portfolio of commercial cleaning, service delivery and industrial delivery systems, supported by an AI-powered platform for monitoring and managing robotic operations."
      />

      <nav className="products-subnav" aria-label="Product categories">
        <div className="shell products-subnav-inner">
          <a href="#cleaning">Cleaning</a>
          <a href="#service">Service & Delivery</a>
          <a href="#industrial">Industrial Delivery</a>
          <a href="#intelligence">ERA Intelligence Platform</a>
        </div>
      </nav>

      <section className="section products-intro-section">
        <div className="shell products-intro">
          <div className="products-intro-heading">
            <p className="eyebrow">SELECTED AROUND THE OPERATION</p>

            <h2>
              Hardware, deployment
              <br />
              and operational intelligence.
            </h2>
          </div>

          <div className="products-intro-copy">
            <p>
              ERA Robotics works across the complete deployment lifecycle—from
              selecting the right machine and assessing the site to
              installation, training, ongoing support and operational
              visibility.
            </p>

            <p>
              Our product portfolio is built around real workflows, floor
              conditions, payloads, building infrastructure and commercial
              outcomes—not around a single robot or technology category.
            </p>
          </div>
        </div>
      </section>

      <section className="products-catalogue">
        <div className="shell">
          {productGroups.map((group) => (
            <section
              className="product-category"
              id={group.id}
              key={group.id}
            >
              <header className="product-category-header">
                <div className="product-category-title">
                  <span className="row-number">{group.number}</span>

                  <div>
                    <p className="eyebrow">{group.eyebrow}</p>
                    <h2>{group.title}</h2>
                  </div>
                </div>

                <div className="product-category-copy">
                  <p>{group.introduction}</p>
                  <p>{group.supportingCopy}</p>
                </div>
              </header>

              <div className="product-list">
                {group.products.map((product, index) => (
                  <article className="product-detail-card" key={product.name}>
                    <div className="product-detail-index">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="product-detail-main">
                      <p className="product-detail-descriptor">
                        {product.descriptor}
                      </p>

                      <h3>{product.name}</h3>

                      <p className="product-detail-summary">
                        {product.summary}
                      </p>

                      <div className="product-detail-actions">
                        <Link
                          className="product-card-link"
                          href={`/contact?product=${encodeURIComponent(
                            product.name,
                          )}`}
                        >
                          Discuss this product
                          <span aria-hidden="true">↗</span>
                        </Link>
                      </div>
                    </div>

                    <div className="product-detail-features">
                      <p className="product-detail-label">Key capabilities</p>

                      <ul>
                        {product.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="product-detail-applications">
                      <p className="product-detail-label">
                        Suitable environments
                      </p>

                      <div className="product-tag-list">
                        {product.applications.map((application) => (
                          <span key={application}>{application}</span>
                        ))}
                      </div>

                      {product.specs && (
                        <dl className="product-spec-list">
                          {product.specs.map((spec) => (
                            <div key={spec.label}>
                              <dt>{spec.label}</dt>
                              <dd>{spec.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}

                      {product.availability && (
                        <p className="product-availability">
                          {product.availability}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section
        className="section intelligence-product-section"
        id="intelligence"
      >
        <div className="shell">
          <header className="intelligence-product-header">
            <div className="intelligence-product-title">
              <span className="row-number">04</span>

              <div>
                <p className="eyebrow">AGENTIC ROBOTICS PLATFORM</p>
                <h2>ERA Intelligence Platform</h2>
              </div>
            </div>

            <div className="intelligence-product-summary">
              <p>
                A unified operations platform for monitoring robotic fleets,
                reviewing task performance and transforming live operational
                data into actionable information.
              </p>

              <p>
                Built for multi-site robotic operations and enhanced by
                agentic AI assistance.
              </p>
            </div>
          </header>

          <div className="intelligence-dashboard">
            <div className="intelligence-dashboard-frame">
              <img
                src="/era-intelligence-dashboard.png"
                alt="ERA Intelligence Platform displaying robot locations, cleaning task replay, operational analytics and fleet status"
              />
            </div>

            <div className="intelligence-dashboard-caption">
              <span>ERA Intelligence Platform</span>
              <span>Multi-site robotics operations</span>
            </div>
          </div>

          <div className="platform-capability-grid">
            {platformCapabilities.map((capability) => (
              <article
                className="platform-capability"
                key={capability.title}
              >
                <span className="platform-capability-number">
                  {capability.number}
                </span>

                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            ))}
          </div>

          <div className="platform-positioning">
            <div className="platform-positioning-heading">
              <p className="eyebrow">COMMERCIAL DELIVERY MODELS</p>
              <h3>
                From software visibility
                <br />
                to managed robotic operations.
              </h3>
            </div>

            <div className="platform-models">
              {platformModels.map((model) => (
                <article key={model.title}>
                  <span>{model.number}</span>
                  <h4>{model.title}</h4>
                  <p>{model.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="platform-note">
            <p>
              Platform compatibility, integrations and commercial structure
              are assessed according to the robot fleet, deployment
              environment and customer requirements.
            </p>

            <Link
              className="product-card-link"
              href="/contact?product=ERA%20Intelligence%20Platform"
            >
              Discuss the platform
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section products-selection-section">
        <div className="shell products-selection">
          <div>
            <p className="eyebrow">SELECT THE RIGHT SYSTEM</p>

            <h2>Start with the workflow, not the machine.</h2>

            <p>
              Tell us about the site, floor conditions, workflow, payload,
              infrastructure and required outcome. ERA can recommend a suitable
              robotic system, deployment model and supporting technology.
            </p>
          </div>

          <div className="button-row">
            <Link className="pill pill-primary" href="/contact">
              Discuss your requirements
            </Link>

            <Link className="pill" href="/solutions">
              Explore solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
