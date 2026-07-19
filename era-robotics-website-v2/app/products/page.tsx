import PageHero from "@/components/PageHero";

const groups = [
  ["Autonomous Cleaning", "Scrubbing, sweeping, vacuuming and facility-cleaning platforms for commercial environments."],
  ["Service & Delivery", "Robots supporting hospitality, healthcare, workplace and customer-facing service workflows."],
  ["Logistics & AMRs", "Autonomous mobile robots for material movement, warehouses and industrial operations."],
  ["Edge AI Systems", "Compute platforms and integrated edge intelligence for machine vision and robotics workloads."]
];

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        kicker="PRODUCTS"
        title="Technology selected around the outcome."
        description="ERA works across robotics and edge AI platforms to design the right system for the site, workflow and commercial objective."
      />
      <section className="section">
        <div className="shell product-grid">
          {groups.map(([title, body], index) => (
            <article key={title}>
              <span className="row-number">0{index + 1}</span>
              <h2>{title}</h2>
              <p>{body}</p>
              <a href="/contact">Discuss your requirements ↗</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
