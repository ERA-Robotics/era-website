import PageHero from "@/components/PageHero";

const cases = [
  {
    sector: "RETAIL",
    title: "Autonomous Cleaning for Large-Format Retail",
    challenge: "Maintain consistent presentation standards across busy floor areas while reducing repetitive manual workload.",
    solution: "Site assessment, autonomous cleaning deployment, workflow design, commissioning and local support.",
    outcome: "A repeatable operating model for scalable cleaning performance across enterprise environments."
  },
  {
    sector: "LOGISTICS",
    title: "Intelligent Material Movement",
    challenge: "Reduce non-value-adding transport tasks and improve visibility across warehouse workflows.",
    solution: "AMR workflow design integrated around site movement, safety and operational requirements.",
    outcome: "A foundation for safer, more efficient and more connected logistics operations."
  },
  {
    sector: "HOSPITALITY",
    title: "Service Robotics in Guest Environments",
    challenge: "Increase service capacity without compromising the guest experience.",
    solution: "Service robot deployment, route configuration, team training and operational integration.",
    outcome: "More consistent service workflows and reduced repetitive movement for staff."
  }
];

export default function CasesPage() {
  return (
    <main>
      <PageHero
        kicker="CASE STUDIES"
        title="Proof in the field."
        description="ERA focuses on commercially useful deployments—combining technology, site operations, integration and support."
      />
      <section className="section">
        <div className="shell case-stack">
          {cases.map((item) => (
            <article key={item.title}>
              <p className="card-tag">{item.sector}</p>
              <h2>{item.title}</h2>
              <div className="case-columns">
                <div><h3>Challenge</h3><p>{item.challenge}</p></div>
                <div><h3>Solution</h3><p>{item.solution}</p></div>
                <div><h3>Outcome</h3><p>{item.outcome}</p></div>
              </div>
            </article>
          ))}
          <p className="legal-note">
            Customer names, photography and verified metrics should be added only after written publication approval.
          </p>
        </div>
      </section>
    </main>
  );
}
