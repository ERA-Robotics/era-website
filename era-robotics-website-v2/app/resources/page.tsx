import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CardGrid from "@/components/CardGrid";

export const metadata: Metadata = {
  title: "Robotics Deployment Resources | ERA Robotics",
  description:
    "Explore practical insights on commercial robotics, site readiness, enterprise deployment, operational integration and the evolution toward Physical AI across Australia and New Zealand.",
};

const items = [
  {
    tag: "DEPLOYMENT GUIDE",
    title: "Preparing Facilities for Autonomous Robotics",
    body:
      "A practical overview of site readiness, floor conditions, access, traffic, infrastructure, safety and operational ownership before deployment.",
  },
  {
    tag: "ROBOT SELECTION",
    title: "Choosing the Right Robotic System",
    body:
      "Why workflow, environment, service requirements and lifecycle support matter more than hardware specifications alone.",
  },
  {
    tag: "PHYSICAL AI",
    title: "From Commercial Robotics to Physical AI",
    body:
      "How robotics may evolve through computer vision, edge intelligence, environmental context and more connected enterprise workflows.",
  },
  {
    tag: "OPERATIONAL ADOPTION",
    title: "Robotics Beyond the Pilot",
    body:
      "The deployment, training, ownership and support disciplines required to turn a successful demonstration into reliable daily operation.",
  },
  {
    tag: "WORKFLOW INTEGRATION",
    title: "Integrating Robotics into Real Operations",
    body:
      "How route design, operating procedures, staff responsibilities and existing workflows influence long-term deployment performance.",
  },
  {
    tag: "AUSTRALIA & NEW ZEALAND",
    title: "Building Local Robotics Capability",
    body:
      "The importance of regional assessment, commissioning, staff training, technical support and lifecycle services when scaling automation.",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        kicker="RESOURCES"
        title="Practical thinking for real-world robotics."
        description="Insights on commercial robotics, site readiness, deployment, operational adoption and the evolution toward Physical AI."
      />

      <section className="section resources-library-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="kicker">RESOURCE LIBRARY</p>

              <h2>
                From automation opportunity to operational deployment.
              </h2>
            </div>

            <p className="section-copy">
              ERA focuses on the practical questions that determine whether
              robotics can operate safely, reliably and productively inside a
              real commercial or industrial environment.
            </p>
          </div>

          <CardGrid items={items} columns={3} />
        </div>
      </section>

      <section className="section section-alt resources-contact-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="kicker">APPLY THE INSIGHTS</p>

              <h2>
                Start with your site, workflow and operating objective.
              </h2>
            </div>

            <div>
              <p className="section-copy">
                ERA can assess your environment, identify suitable automation
                opportunities and define a practical pathway from evaluation
                to deployment.
              </p>

              <div className="button-row">
                <Link href="/contact" className="pill pill-light">
                  Discuss Your Operation
                </Link>

                <Link href="/deployments" className="pill pill-outline">
                  Explore Deployments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
