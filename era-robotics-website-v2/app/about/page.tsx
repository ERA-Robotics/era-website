import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About ERA Robotics | Commercial Robotics & Physical AI",
  description:
    "ERA Robotics is an Australia-based robotics integrator delivering commercial robotics, deployment and lifecycle support across Australia and New Zealand.",
};

const capabilities = [
  {
    title: "Commercial Robotics",
    body:
      "Robotic systems for autonomous cleaning, service and item delivery, and industrial material movement.",
  },
  {
    title: "Deployment & Integration",
    body:
      "Site assessment, workflow design, configuration, commissioning, staff training and operational integration.",
  },
  {
    title: "Lifecycle Support",
    body:
      "Local technical support, performance review and ongoing assistance throughout the deployment lifecycle.",
  },
];

const principles = [
  {
    number: "01",
    title: "Start with the operation",
    body:
      "We begin with the workflow, environment, people, constraints and desired operational outcome.",
  },
  {
    number: "02",
    title: "Select technology with purpose",
    body:
      "Robotic systems are chosen around the use case rather than forcing the operation around the machine.",
  },
  {
    number: "03",
    title: "Deploy for daily use",
    body:
      "Configuration, training and support are designed to move the system beyond demonstration and into reliable operation.",
  },
  {
    number: "04",
    title: "Build toward connected intelligence",
    body:
      "We are developing toward more connected robotics through Edge Intelligence, Computer Vision and Physical AI.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="ABOUT ERA"
        title="Building practical robotics for real operations."
        description="ERA Robotics is an Australia-based robotics integrator delivering commercial robotic systems, deployment and lifecycle support across Australia and New Zealand."
      />

      <section className="section">
        <div className="shell editorial-grid">
          <div>
            <p className="kicker">WHO WE ARE</p>

            <h2>
              Commercial robotics today. Physical AI as the next direction.
            </h2>
          </div>

          <div>
            <p>
              ERA Robotics helps organisations adopt automation inside real
              commercial, industrial and public operating environments.
            </p>

            <p>
              Our current work focuses on commercial robotics and deployment
              integration. We assess sites, design operating workflows,
              configure and commission systems, train teams and support
              deployments throughout their lifecycle.
            </p>

            <p>
              Alongside this operational capability, ERA is developing toward
              the next generation of connected robotic systems through
              Physical AI, Edge Intelligence and Computer Vision.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="kicker">WHAT WE DO</p>

              <h2>
                Local deployment capability from evaluation to ongoing
                operation.
              </h2>
            </div>

            <p className="section-copy">
              ERA works across the full deployment lifecycle, helping
              organisations turn robotic technology into practical,
              repeatable operational capability.
            </p>
          </div>

          <div className="pillars">
            {capabilities.map((capability) => (
              <article key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

<section
  className="section approach-section"
  aria-labelledby="approach-title"
>
  <div className="shell approach-layout">
    <div className="approach-intro">
      <p className="kicker">OUR APPROACH</p>

      <h2 id="approach-title">
        Technology must fit the operation.
      </h2>

      <p className="approach-lead">
        Robotics succeeds when it is designed around the site, workflow and
        people—not treated as a standalone piece of hardware.
      </p>

      <p className="approach-copy">
        ERA combines technology selection, workflow design, commissioning,
        training and lifecycle support so that automation becomes part of
        normal daily operation.
      </p>

      <div className="approach-flow" aria-label="ERA deployment approach">
        <span>Site</span>
        <i aria-hidden="true">→</i>
        <span>Workflow</span>
        <i aria-hidden="true">→</i>
        <span>People</span>
        <i aria-hidden="true">→</i>
        <span>Technology</span>
      </div>
    </div>

    <div className="approach-principles">
      {principles.map((principle) => (
        <article className="approach-card" key={principle.number}>
          <div className="approach-card-top">
            <span className="approach-number">{principle.number}</span>
            <span className="approach-marker" aria-hidden="true" />
          </div>

          <h3>{principle.title}</h3>
          <p>{principle.body}</p>
        </article>
      ))}
    </div>
  </div>
</section>

      <section className="section section-alt">
        <div className="shell editorial-grid">
          <div>
            <p className="kicker">AUSTRALIA & NEW ZEALAND</p>

            <h2>
              Regional understanding backed by local deployment support.
            </h2>
          </div>

          <div>
            <p>
              ERA supports organisations across Australia and New Zealand with
              site assessment, deployment planning, commissioning, staff
              training and lifecycle services.
            </p>

            <p>
              Local capability matters because every site operates
              differently. Successful deployment requires practical knowledge
              of the environment, direct engagement with staff and continued
              support after the robot goes live.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell editorial-grid">
          <div>
            <p className="kicker">OUR DIRECTION</p>

            <h2>Move intelligence beyond the screen.</h2>
          </div>

          <div>
            <p>
              The next generation of enterprise AI will not only generate
              information. It will increasingly perceive environments,
              interpret conditions and support action in the physical world.
            </p>

            <p>
              ERA is building toward that future responsibly—starting with
              reliable commercial robotics and developing toward connected
              systems that combine robotics, Edge Intelligence, Computer
              Vision and enterprise workflows.
            </p>

            <Link
              href="/solutions#physical-ai"
              className="text-link"
            >
              Explore our Physical AI direction
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="kicker">WORK WITH ERA</p>

              <h2>
                Start with the operational problem—not the product.
              </h2>
            </div>

            <div>
              <p className="section-copy">
                Tell us about your site, workflow and operating objective. ERA
                can help determine where robotics may create practical value
                and what is required for a successful deployment.
              </p>

              <div className="button-row">
                <Link href="/contact" className="pill pill-light">
                  Talk to ERA
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
