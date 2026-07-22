import Link from "next/link";

type CapabilityType =
  | "robotics"
  | "integration"
  | "physical-ai"
  | "edge"
  | "vision";

type Capability = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  type: CapabilityType;
  featured?: boolean;
};

const capabilities: Capability[] = [
  {
    number: "01",
    eyebrow: "CURRENT CAPABILITY",
    title: "Commercial Robotics",
    description:
      "Autonomous cleaning, service and item delivery, and industrial material-movement systems for real operating environments.",
    href: "/solutions#commercial-robotics",
    type: "robotics",
  },
  {
    number: "02",
    eyebrow: "CURRENT CAPABILITY",
    title: "Deployment & Integration",
    description:
      "Site assessment, workflow design, mapping, commissioning, training and ongoing local support.",
    href: "/solutions#deployment-integration",
    type: "integration",
  },
  {
    number: "03",
    eyebrow: "DEVELOPING CAPABILITY",
    title: "Physical AI",
    description:
      "Connecting perception, intelligence and physical action to enable more adaptive robotic operations.",
    href: "/solutions#physical-ai",
    type: "physical-ai",
    featured: true,
  },
  {
    number: "04",
    eyebrow: "DEVELOPING CAPABILITY",
    title: "Edge Intelligence",
    description:
      "Processing operational data closer to the environment for faster, more resilient robotic decision-making.",
    href: "/solutions#edge-intelligence",
    type: "edge",
  },
  {
    number: "05",
    eyebrow: "DEVELOPING CAPABILITY",
    title: "Computer Vision",
    description:
      "Visual perception capabilities for environmental awareness, detection and operational intelligence.",
    href: "/solutions#computer-vision",
    type: "vision",
  },
];

function CapabilityBlueprint({ type }: { type: CapabilityType }) {
  if (type === "robotics") {
    return (
      <svg
        viewBox="0 0 360 250"
        className="capability-blueprint-svg"
        aria-hidden="true"
      >
        <rect x="38" y="34" width="284" height="178" rx="4" />
        <path d="M70 172 C105 110, 147 194, 184 126 S250 74, 294 116" />
        <circle cx="70" cy="172" r="7" />
        <circle cx="184" cy="126" r="7" />
        <circle cx="294" cy="116" r="7" />
        <rect x="104" y="64" width="54" height="34" rx="3" />
        <rect x="226" y="154" width="50" height="30" rx="3" />
        <path d="M38 132 H322" className="blueprint-dash" />
        <path d="M180 34 V212" className="blueprint-dash" />
      </svg>
    );
  }

  if (type === "integration") {
    return (
      <svg
        viewBox="0 0 360 250"
        className="capability-blueprint-svg"
        aria-hidden="true"
      >
        <rect x="38" y="96" width="72" height="54" rx="4" />
        <rect x="144" y="42" width="72" height="54" rx="4" />
        <rect x="144" y="158" width="72" height="54" rx="4" />
        <rect x="250" y="96" width="72" height="54" rx="4" />

        <path d="M110 123 H144" />
        <path d="M216 69 C244 69 224 123 250 123" />
        <path d="M216 185 C244 185 224 123 250 123" />

        <circle cx="127" cy="123" r="4" />
        <circle cx="232" cy="88" r="4" />
        <circle cx="232" cy="166" r="4" />

        <path d="M74 96 V66 H180" className="blueprint-dash" />
        <path d="M286 150 V184 H216" className="blueprint-dash" />
      </svg>
    );
  }

  if (type === "physical-ai") {
    return (
      <svg
        viewBox="0 0 360 250"
        className="capability-blueprint-svg"
        aria-hidden="true"
      >
        <circle cx="180" cy="124" r="34" />
        <circle cx="180" cy="124" r="72" />
        <circle cx="180" cy="124" r="106" className="blueprint-dash" />

        <circle cx="180" cy="18" r="7" />
        <circle cx="286" cy="124" r="7" />
        <circle cx="180" cy="230" r="7" />
        <circle cx="74" cy="124" r="7" />

        <path d="M180 25 V90" />
        <path d="M279 124 H214" />
        <path d="M180 223 V158" />
        <path d="M81 124 H146" />

        <path d="M111 55 C78 80 58 112 74 154" />
        <path d="M249 193 C282 168 302 136 286 94" />

        <circle cx="180" cy="124" r="9" className="blueprint-core" />
      </svg>
    );
  }

  if (type === "edge") {
    return (
      <svg
        viewBox="0 0 360 250"
        className="capability-blueprint-svg"
        aria-hidden="true"
      >
        <path d="M76 74 L154 112 L230 58 L290 126 L216 190 L126 178 L76 74" />
        <path d="M154 112 L126 178" />
        <path d="M154 112 L216 190" />
        <path d="M230 58 L216 190" />
        <path d="M76 74 L290 126" className="blueprint-dash" />

        <circle cx="76" cy="74" r="10" />
        <circle cx="154" cy="112" r="12" />
        <circle cx="230" cy="58" r="9" />
        <circle cx="290" cy="126" r="11" />
        <circle cx="216" cy="190" r="10" />
        <circle cx="126" cy="178" r="8" />

        <circle cx="154" cy="112" r="30" className="blueprint-dash" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 360 250"
      className="capability-blueprint-svg"
      aria-hidden="true"
    >
      <rect x="44" y="34" width="272" height="182" rx="5" />
      <path d="M44 78 H316" className="blueprint-dash" />
      <path d="M44 124 H316" className="blueprint-dash" />
      <path d="M44 170 H316" className="blueprint-dash" />
      <path d="M98 34 V216" className="blueprint-dash" />
      <path d="M180 34 V216" className="blueprint-dash" />
      <path d="M262 34 V216" className="blueprint-dash" />

      <rect x="104" y="74" width="94" height="68" rx="3" />
      <rect x="216" y="118" width="66" height="52" rx="3" />
      <path d="M104 62 H134" />
      <path d="M92 74 V104" />
      <path d="M198 154 V142" />
      <path d="M282 106 V118" />

      <circle cx="151" cy="108" r="6" className="blueprint-core" />
      <path d="M151 108 L249 144" />
    </svg>
  );
}

export default function CapabilitiesShowcase() {
  return (
    <section className="section capabilities-section">
      <div className="shell">
        <div className="section-heading-row capabilities-heading">
          <div>
            <p className="kicker">WHAT WE DELIVER</p>

            <h2>Five capabilities. One integrated approach.</h2>
          </div>

          <p className="section-copy">
            ERA delivers commercial robotics and deployment integration today,
            while developing the Physical AI, edge intelligence and computer
            vision capabilities that will shape connected robotic operations
            tomorrow.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((capability) => (
            <Link
              href={capability.href}
              key={capability.title}
              className={`capability-card capability-card-${capability.type} ${
                capability.featured ? "capability-card-featured" : ""
              }`}
            >
              <div className="capability-card-header">
                <span className="capability-number">
                  {capability.number}
                </span>

                <span className="capability-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="capability-blueprint">
                <CapabilityBlueprint type={capability.type} />
              </div>

              <div className="capability-card-copy">
                <p className="capability-eyebrow">
                  {capability.eyebrow}
                </p>

                <h3>{capability.title}</h3>

                <p>{capability.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
