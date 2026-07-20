import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Robotics Solutions by Industry | ERA Robotics",
  description:
    "Explore ERA Robotics solutions across commercial cleaning, food and service delivery, and industrial material delivery for retail, education, hospitality, manufacturing, warehousing, commercial property and public facilities.",
};

const industries = [
  {
    id: "retail",
    number: "01",
    title: "Retail & Supermarkets",
    body: "Autonomous cleaning and service robotics for supermarkets, shopping centres and large-format retail environments.",
    priorities: [
      "High daily foot traffic",
      "Consistent floor presentation",
      "Safe operation around customers",
      "Multi-site service standards",
    ],
    capabilities: [
      "Autonomous floor cleaning",
      "Customer-facing service robotics",
      "Site mapping and route design",
      "Deployment, training and support",
    ],
  },
  {
    id: "education",
    number: "02",
    title: "Education",
    body: "Commercial cleaning and internal delivery robotics for universities, secondary schools and large education campuses.",
    priorities: [
      "Large and distributed facilities",
      "Changing daily schedules",
      "High-use common areas",
      "Reliable cleaning and delivery coverage",
    ],
    capabilities: [
      "Autonomous corridor and hall cleaning",
      "Internal item delivery",
      "Site-specific route planning",
      "Staff training and lifecycle support",
    ],
  },
  {
    id: "warehousing",
    number: "03",
    title: "Warehousing & Storage",
    body: "Autonomous cleaning and material delivery systems for warehouses, storage facilities and operational sites with large floor areas.",
    priorities: [
      "Large operational footprints",
      "Dust and debris management",
      "Vehicle and pedestrian traffic",
      "Repeatable internal movement",
    ],
    capabilities: [
      "Autonomous sweeping and scrubbing",
      "Industrial material delivery",
      "Route planning around site traffic",
      "Deployment and performance optimisation",
    ],
  },
  {
    id: "manufacturing",
    number: "04",
    title: "Manufacturing",
    body: "Cleaning and material delivery robotics for factories and industrial facilities where safety, continuity and repeatability are critical.",
    priorities: [
      "Production continuity",
      "Safe movement around workers",
      "Industrial floor conditions",
      "Consistent internal logistics",
    ],
    capabilities: [
      "Autonomous industrial floor cleaning",
      "Material delivery between work areas",
      "Route design around equipment",
      "Commissioning and ongoing support",
    ],
  },
  {
    id: "hospitality",
    number: "05",
    title: "Hotels & Hospitality",
    body: "Cleaning, food delivery and service robotics that support hotel operations, guest experience and back-of-house productivity.",
    priorities: [
      "Guest experience",
      "Quiet and unobtrusive operation",
      "Reliable food and item delivery",
      "High presentation standards",
    ],
    capabilities: [
      "Autonomous public-area cleaning",
      "Food and room-service delivery",
      "Service robotics",
      "Deployment and staff training",
    ],
  },
  {
    id: "commercial-property",
    number: "06",
    title: "Commercial Property",
    body: "Autonomous cleaning and internal service robotics for office buildings, corporate campuses and managed commercial properties.",
    priorities: [
      "Consistent service quality",
      "Large shared floor areas",
      "After-hours operation",
      "Internal item movement",
    ],
    capabilities: [
      "Autonomous office floor cleaning",
      "Internal delivery robotics",
      "Multi-floor deployment planning",
      "Maintenance and local support",
    ],
  },
  {
    id: "public-facilities",
    number: "07",
    title: "Public Facilities",
    body: "Cleaning and service robotics for museums, civic venues and public buildings with demanding visitor and presentation requirements.",
    priorities: [
      "Public safety",
      "High visitor traffic",
      "Sensitive operating environments",
      "Consistent presentation",
    ],
    capabilities: [
      "Autonomous public-area cleaning",
      "Visitor-facing service robotics",
      "Low-disruption route configuration",
      "Local technical support",
    ],
  },
  {
    id: "transport",
    number: "08",
    title: "Transport Facilities",
    body: "Autonomous cleaning and internal delivery systems for stations and transport environments with long operating hours and heavy public traffic.",
    priorities: [
      "Extended operating hours",
      "Heavy pedestrian traffic",
      "Public safety",
      "Reliable cleaning and internal movement",
    ],
    capabilities: [
      "Autonomous concourse cleaning",
      "Internal item delivery",
      "Route configuration around passenger traffic",
      "Deployment and operational support",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        kicker="INDUSTRIES"
        title="Automation shaped around the environment."
        description="ERA Robotics deploys commercial cleaning, service delivery and industrial material delivery systems across complex operating environments."
      />

      <nav
        className="industries-subnav"
        aria-label="Industries page navigation"
      >
        <div className="shell industries-subnav-inner">
          {industries.map((industry) => (
            <a href={`#${industry.id}`} key={industry.id}>
              {industry.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="section industries-intro-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="kicker">ROBOTICS FOR REAL OPERATIONS</p>

              <h2>
                Different environments require different robotic systems.
              </h2>
            </div>

            <p className="section-copy">
              ERA evaluates site conditions, traffic, workflows, safety
              requirements and operational objectives before selecting and
              deploying the right robotics solution.
            </p>
          </div>
        </div>
      </section>

      <section className="industries-detail-section">
        <div className="shell industries-detail-list">
          {industries.map((industry) => (
            <article
              id={industry.id}
              className="industry-detail"
              key={industry.id}
            >
              <div className="industry-detail-heading">
                <span>{industry.number}</span>

                <div>
                  <p className="industry-detail-label">INDUSTRY</p>
                  <h2>{industry.title}</h2>
                </div>
              </div>

              <div className="industry-detail-body">
                <p className="industry-detail-lead">{industry.body}</p>

                <div className="industry-detail-columns">
                  <div>
                    <h3>Operational priorities</h3>

                    <ul>
                      {industry.priorities.map((priority) => (
                        <li key={priority}>{priority}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3>ERA capabilities</h3>

                    <ul>
                      {industry.capabilities.map((capability) => (
                        <li key={capability}>{capability}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <Link
                href={`/contact?industry=${industry.id}`}
                className="industry-detail-link"
              >
                Discuss {industry.title}
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt industries-selection-section">
        <div className="shell">
          <div className="industries-selection">
            <div>
              <p className="kicker">NOT SURE WHERE TO START?</p>

              <h2>
                Start with the workflow, not the machine.
              </h2>

              <p>
                ERA can assess your site, identify suitable automation
                opportunities and define a practical deployment pathway for
                cleaning, service delivery or industrial material movement.
              </p>
            </div>

            <div className="button-row">
              <Link href="/contact" className="pill pill-light">
                Talk to ERA
              </Link>

              <Link href="/solutions" className="pill pill-outline">
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
