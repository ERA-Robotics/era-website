import PageHero from "@/components/PageHero";
import CardGrid from "@/components/CardGrid";

const items = [
  { tag: "PHYSICAL AI", title: "Physical AI in the Field", body: "A practical view of perception, spatial intelligence and autonomous decision-making." },
  { tag: "EDGE AI", title: "Why Intelligence Belongs at the Edge", body: "How local inference supports responsive and resilient autonomous systems." },
  { tag: "DEPLOYMENT", title: "Robotics Beyond Pilots", body: "The operational disciplines required to move from demonstration to enterprise deployment." },
  { tag: "COMPUTER VISION", title: "Vision Systems for Real Operations", body: "Turning camera data into inspection, awareness and operational action." },
  { tag: "INTEGRATION", title: "Connecting Robots to Enterprise Workflows", body: "Why automation creates more value when connected to people, data and systems." },
  { tag: "ANZ MARKET", title: "Building Local Capability", body: "The role of deployment, training and support in scaling robotics across Australia and New Zealand." }
];

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        kicker="RESOURCES"
        title="Ideas shaping intelligent automation."
        description="Insights from commercial robotics, Physical AI, edge computing and enterprise deployment."
      />
      <section className="section">
        <div className="shell">
          <CardGrid items={items} columns={3} />
        </div>
      </section>
    </main>
  );
}
