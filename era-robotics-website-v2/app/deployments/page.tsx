import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real-world Deployments | ERA Robotics",
  description:
    "Explore how ERA Robotics supports manufacturing, healthcare, education, hospitality, retail, public facilities and professional cleaning operations across Australia.",
};

const deployments = [
  {
    number: "01",
    industry: "Pharmaceutical Manufacturing",
    category: "Healthcare & Advanced Manufacturing",
    title: "Autonomous cleaning in a highly controlled production environment.",
    robot: "CC1",
    image: "/products/cc1.png",
    description:
      "A commercial cleaning robot was deployed within a pharmaceutical manufacturing facility to support scheduled floor cleaning across operational areas, internal corridors and shared spaces.",
    challenge:
      "The site required consistent floor-cleaning performance while maintaining controlled workflows and reducing repetitive manual cleaning tasks.",
    solution:
      "CC1 provides autonomous sweeping, scrubbing, vacuuming and mopping in a single platform, helping the cleaning team maintain repeatable daily routines.",
    applications: [
      "Internal corridors",
      "Operational areas",
      "Shared facility spaces",
    ],
  },
  {
    number: "02",
    industry: "Food Manufacturing",
    category: "Large-scale Industrial Operations",
    title: "Large-area autonomous cleaning for an active production facility.",
    robot: "MT1",
    image: "/products/mt1.png",
    description:
      "MT1 was introduced into a major food manufacturing environment to support the cleaning of large internal floor areas surrounding production and logistics operations.",
    challenge:
      "Extensive industrial floor areas require frequent cleaning without unnecessarily interrupting production workflows or redirecting skilled staff from higher-value work.",
    solution:
      "Designed for large commercial and industrial environments, MT1 combines high-capacity cleaning with autonomous navigation and repeatable route execution.",
    applications: [
      "Production halls",
      "Logistics zones",
      "Warehouse connections",
    ],
  },
  {
    number: "03",
    industry: "Public Museum",
    category: "Public Facilities & Culture",
    title: "Consistent cleaning across high-traffic public spaces.",
    robot: "CC1",
    image: "/products/cc1.png",
    description:
      "CC1 supports routine cleaning within a major public museum, operating across open visitor areas where pedestrian movement and daily conditions continually change.",
    challenge:
      "Public venues must maintain presentation standards across large spaces while operating safely around visitors, staff and temporary obstacles.",
    solution:
      "Autonomous navigation and multi-function floor care allow CC1 to support scheduled cleaning with minimal disruption to normal public operations.",
    applications: [
      "Exhibition approaches",
      "Public corridors",
      "Common visitor areas",
    ],
  },
  {
    number: "04",
    industry: "University Campus",
    category: "Education",
    title: "Autonomous floor care for a dynamic campus environment.",
    robot: "CC1 Pro",
    image: "/products/cc1-pro.png",
    description:
      "CC1 Pro supports cleaning operations at a major Australian university, where classrooms, corridors and common spaces experience changing traffic levels throughout the day.",
    challenge:
      "Campus environments require flexible cleaning across diverse floor areas while accommodating students, staff, furniture and changing daily schedules.",
    solution:
      "CC1 Pro provides intelligent autonomous cleaning with enhanced environmental awareness, helping cleaning teams manage repeatable tasks across complex facilities.",
    applications: [
      "Campus corridors",
      "Learning spaces",
      "Student common areas",
    ],
  },
  {
    number: "05",
    industry: "Premium Hotel",
    category: "Hospitality",
    title: "Autonomous vacuuming designed around the guest experience.",
    robot: "MT1 Vac",
    image: "/products/mt1-vac.png",
    description:
      "MT1 Vac was deployed within a premium Melbourne hotel to support routine vacuuming across large carpeted areas and public-facing hospitality spaces.",
    challenge:
      "Hotels must maintain high presentation standards while minimising noise, disruption and operational impact on guests and front-of-house teams.",
    solution:
      "MT1 Vac combines autonomous navigation with large-area commercial vacuuming, enabling scheduled cleaning across suitable carpeted environments.",
    applications: [
      "Function areas",
      "Public corridors",
      "Large carpeted spaces",
    ],
  },
  {
    number: "06",
    industry: "Retail Marketing",
    category: "Customer Engagement",
    title: "Interactive robotics supporting in-store marketing activities.",
    robot: "BellaBot Pro",
    image: "/products/bellabot-pro.png",
    description:
      "BellaBot Pro was used within a regional supermarket to support promotional activities, attract customer attention and create a more interactive in-store experience.",
    challenge:
      "Retail teams need engaging ways to promote products and campaigns without creating additional complexity for store employees.",
    solution:
      "BellaBot Pro combines autonomous movement, digital displays and interactive engagement capabilities to support mobile retail marketing activities.",
    applications: [
      "Product promotion",
      "Campaign activations",
      "Customer engagement",
    ],
  },
  {
    number: "07",
    industry: "Professional Cleaning",
    category: "Facility Management",
    title: "Practical cleaning technology for teams operating across Australia.",
    robot: "SH1",
    image: "/products/sh1.png",
    description:
      "SH1 is used by facility management providers and professional cleaning companies across Australia to improve daily floor-cleaning productivity across a wide range of commercial environments.",
    challenge:
      "Cleaning contractors need equipment that is easy to deploy, practical for daily use and adaptable across sites with different layouts and operating requirements.",
    solution:
      "SH1 combines powered floor scrubbing with intelligent operational assistance, helping operators complete repetitive cleaning tasks more efficiently.",
    applications: [
      "Commercial facilities",
      "Contract cleaning sites",
      "Multi-site operations",
    ],
  },
];

const industries = [
  "Manufacturing",
  "Healthcare",
  "Hospitality",
  "Education",
  "Public Facilities",
  "Retail",
  "Commercial Buildings",
  "Facility Management",
];

const advantages = [
  {
    number: "01",
    title: "Local deployment",
    description:
      "On-site implementation, commissioning and operator training delivered by our Australian team.",
  },
  {
    number: "02",
    title: "Technical support",
    description:
      "Local support from specialists who understand both robotics technology and commercial operations.",
  },
  {
    number: "03",
    title: "Commercially proven",
    description:
      "Robotics solutions operating across real manufacturing, education, hospitality, retail and public environments.",
  },
  {
    number: "04",
    title: "Enterprise ready",
    description:
      "Scalable solutions designed for individual facilities, multi-site operators and national service providers.",
  },
];

export default function DeploymentsPage() {
  return (
    <main className="deployments-page">
      <section className="deployments-hero">
        <div className="deployments-container deployments-hero-grid">
          <div className="deployments-hero-copy">
            <span className="deployments-eyebrow">
              REAL-WORLD DEPLOYMENTS
            </span>

            <h1>
              Robotics delivering value
              <span> in real environments.</span>
            </h1>

            <p>
              From advanced manufacturing and education to hospitality,
              retail and public facilities, ERA Robotics helps organisations
              deploy intelligent automation with confidence.
            </p>

            <div className="deployments-hero-actions">
              <Link href="/contact" className="deployments-button-primary">
                Discuss your facility
                <span aria-hidden="true">↗</span>
              </Link>

              <Link href="/products" className="deployments-button-secondary">
                Explore our products
              </Link>
            </div>
          </div>

          <div className="deployments-hero-visual">
            <div className="deployments-orbit deployments-orbit-one" />
            <div className="deployments-orbit deployments-orbit-two" />

            <div className="deployments-hero-robot">
              <Image
                src="/products/cc1-pro.png"
                alt="ERA Robotics commercial cleaning robot"
                width={760}
                height={760}
                priority
              />
            </div>

            <div className="deployments-floating-card deployments-floating-card-top">
              <span>AUSTRALIA</span>
              <strong>Local deployment</strong>
            </div>

            <div className="deployments-floating-card deployments-floating-card-bottom">
              <span>MULTI-INDUSTRY</span>
              <strong>Commercial operations</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="deployments-intro">
        <div className="deployments-container deployments-intro-grid">
          <div>
            <span className="deployments-section-label">
              DEPLOYMENT HIGHLIGHTS
            </span>
          </div>

          <div>
            <h2>
              Designed for the environments where work actually happens.
            </h2>

            <p>
              Every facility presents different workflows, floor conditions,
              operating hours and safety requirements. Our role extends beyond
              supplying hardware: we help assess, deploy, train and support
              robotics solutions within real commercial operations.
            </p>
          </div>
        </div>
      </section>

      <section className="deployments-showcase">
        <div className="deployments-container">
          {deployments.map((deployment, index) => (
            <article
              className={`deployment-case ${
                index % 2 === 1 ? "deployment-case-reverse" : ""
              }`}
              key={`${deployment.industry}-${deployment.robot}`}
            >
              <div className="deployment-case-visual">
                <div className="deployment-case-number">
                  {deployment.number}
                </div>

                <div className="deployment-image-glow" />

                <Image
                  src={deployment.image}
                  alt={`${deployment.robot} deployment in ${deployment.industry}`}
                  width={720}
                  height={720}
                  className="deployment-case-image"
                />

                <div className="deployment-robot-label">
                  <span>ROBOTIC SOLUTION</span>
                  <strong>{deployment.robot}</strong>
                </div>
              </div>

              <div className="deployment-case-content">
                <div className="deployment-case-heading">
                  <span>{deployment.category}</span>
                  <h2>{deployment.industry}</h2>
                  <h3>{deployment.title}</h3>
                </div>

                <p className="deployment-case-description">
                  {deployment.description}
                </p>

                <div className="deployment-detail">
                  <span>01</span>
                  <div>
                    <h4>The operational challenge</h4>
                    <p>{deployment.challenge}</p>
                  </div>
                </div>

                <div className="deployment-detail">
                  <span>02</span>
                  <div>
                    <h4>The solution</h4>
                    <p>{deployment.solution}</p>
                  </div>
                </div>

                <div className="deployment-applications">
                  <span>Applications</span>

                  <div>
                    {deployment.applications.map((application) => (
                      <span key={application}>{application}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="deployments-industries">
        <div className="deployments-container">
          <div className="deployments-section-heading">
            <span className="deployments-section-label">
              INDUSTRIES WE SERVE
            </span>

            <h2>One robotics partner. Multiple operating environments.</h2>

            <p>
              ERA Robotics supports organisations across complex public,
              commercial and industrial facilities.
            </p>
          </div>

          <div className="deployments-industry-grid">
            {industries.map((industry, index) => (
              <div className="deployments-industry-card" key={industry}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{industry}</h3>
                <div aria-hidden="true">↗</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="deployments-advantages">
        <div className="deployments-container">
          <div className="deployments-section-heading">
            <span className="deployments-section-label">
              WHY ERA ROBOTICS
            </span>

            <h2>Technology supported by real deployment capability.</h2>
          </div>

          <div className="deployments-advantage-grid">
            {advantages.map((advantage) => (
              <article
                className="deployments-advantage-card"
                key={advantage.title}
              >
                <span>{advantage.number}</span>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deployments-cta">
        <div className="deployments-container">
          <div className="deployments-cta-inner">
            <div>
              <span className="deployments-section-label">
                START A CONVERSATION
              </span>

              <h2>What could autonomous robotics do for your facility?</h2>

              <p>
                Speak with our team about your environment, operational
                requirements and the most suitable deployment pathway.
              </p>
            </div>

            <Link href="/contact" className="deployments-cta-button">
              Book a consultation
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
