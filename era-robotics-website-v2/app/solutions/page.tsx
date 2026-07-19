import PageHero from "@/components/PageHero";

const rows = [
  {
    id: "commercial-robotics",
    title: "Commercial Robotics",
    body: "Autonomous cleaning, delivery, service and logistics systems selected around the operating environment—not a one-size-fits-all catalogue.",
    items: ["Site assessment", "Robot selection", "Pilot design", "Deployment and training", "Lifecycle support"]
  },
  {
    id: "physical-ai",
    title: "Physical AI",
    body: "Systems that combine machine perception, spatial understanding and autonomous decision-making to operate usefully in the physical world.",
    items: ["Sensor fusion", "Spatial intelligence", "Autonomous navigation", "Machine perception", "Real-time decision-making"]
  },
  {
    id: "edge-ai",
    title: "Edge Computing",
    body: "AI workloads processed close to the machine for lower latency, greater resilience and faster operational response.",
    items: ["Edge architecture", "Local inference", "Robotics compute", "Device integration", "Fleet visibility"]
  },
  {
    id: "ai-vision",
    title: "AI Vision",
    body: "Computer vision for inspection, detection, operational awareness and human-machine interaction.",
    items: ["Object detection", "Visual inspection", "Occupancy awareness", "Safety monitoring", "Operational analytics"]
  },
  {
    id: "integration",
    title: "Integration Services",
    body: "ERA brings hardware, software and site operations together—from discovery through deployment and ongoing optimisation.",
    items: ["Solution design", "Workflow integration", "Change management", "Commissioning", "Support and optimisation"]
  }
];

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        kicker="SOLUTIONS"
        title="Intelligent systems for real-world operations."
        description="ERA Robotics combines robotics, edge AI, computer vision and integration services into practical enterprise solutions."
      />
      <section className="section">
        <div className="shell solution-table">
          {rows.map((row, index) => (
            <article id={row.id} className="solution-row" key={row.title}>
              <span className="row-number">0{index + 1}</span>
              <div>
                <h2>{row.title}</h2>
                <p>{row.body}</p>
              </div>
              <ul>
                {row.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
