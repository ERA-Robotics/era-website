import PageHero from "@/components/PageHero";
import CardGrid from "@/components/CardGrid";

const items = [
  { title: "Retail", body: "Autonomous cleaning, customer service and operational intelligence for large-format and multi-site retail." },
  { title: "Healthcare", body: "Reliable automation for hospitals, care environments and high-compliance facilities." },
  { title: "Hospitality", body: "Robotics that improve service delivery, guest experience and back-of-house productivity." },
  { title: "Logistics", body: "AMRs, smart movement and edge intelligence for warehouses and distribution centres." },
  { title: "Manufacturing", body: "Connected robotics, AI vision and intelligent workflows for industrial environments." },
  { title: "Facilities Management", body: "Scalable robotics programs across complex portfolios, backed by local deployment and support." }
];

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        kicker="INDUSTRIES"
        title="Automation shaped around the environment."
        description="Every operating environment has different workflows, risks, users and performance expectations. ERA designs around those realities."
      />
      <section className="section">
        <div className="shell">
          <CardGrid items={items} columns={3} />
        </div>
      </section>
    </main>
  );
}
