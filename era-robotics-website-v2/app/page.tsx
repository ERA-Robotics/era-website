import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CapabilitiesShowcase from "@/components/CapabilitiesShowcase";
import IndustriesShowcase from "@/components/IndustriesShowcase";

export const metadata: Metadata = {
  title: "Commercial Robotics Australia & New Zealand",
  description:
    "ERA Robotics deploys autonomous cleaning, service delivery and industrial robotics across Australia and New Zealand, with local assessment, commissioning, training and lifecycle support.",
};

const products = [
  { name: "CC1 Pro", category: "Autonomous floor cleaning", image: "/products/cc1-pro.png", href: "/products" },
  { name: "MT1 Vac", category: "Commercial carpet cleaning", image: "/products/mt1-vac.png", href: "/products" },
  { name: "BellaBot Pro", category: "Service delivery robotics", image: "/products/bellabot-pro.png", href: "/products" },
  { name: "T300", category: "Industrial material movement", image: "/products/t300.png", href: "/products" },
];

const deployments = [
  {
    sector: "Manufacturing",
    title: "Autonomous cleaning for controlled production environments.",
    body: "Site-specific configuration around floor conditions, safety requirements and reliable daily operation.",
  },
  {
    sector: "Hospitality",
    title: "Robotic cleaning designed around guest-facing operations.",
    body: "Deployment planning that balances presentation standards, staff adoption and low-disruption operation.",
  },
  {
    sector: "Retail & Public Facilities",
    title: "Repeatable cleaning across high-traffic environments.",
    body: "Route design and operating settings shaped around visitor flow, public safety and extended operating hours.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero era-home-hero">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" aria-hidden="true" />
        <div className="shell hero-content">
          <p className="kicker">COMMERCIAL ROBOTICS · AUSTRALIA & NEW ZEALAND</p>
          <h1>Robotics engineered for real operations.</h1>
          <p className="hero-subtitle">
            ERA Robotics deploys autonomous cleaning, service delivery and industrial robotic systems—with local site assessment, commissioning, training and lifecycle support.
          </p>
          <div className="era-home-categories" aria-label="ERA Robotics solution categories">
            <span>Autonomous Cleaning</span><span>Service Delivery</span><span>Industrial Logistics</span><span>Fleet Intelligence</span>
          </div>
          <div className="button-row">
            <Link href="/products" className="pill pill-light">Explore Robotics</Link>
            <Link href="/contact" className="pill pill-outline">Book a Site Assessment</Link>
          </div>
        </div>
      </section>

      <section className="era-home-proof">
        <div className="shell era-home-proof-grid">
          <div><strong>AU + NZ</strong><span>Local deployment coverage</span></div>
          <div><strong>End-to-end</strong><span>Assessment to lifecycle support</span></div>
          <div><strong>Multi-sector</strong><span>Commercial and industrial experience</span></div>
          <div><strong>Enterprise-ready</strong><span>Structured rollout and training</span></div>
        </div>
      </section>

      <section className="section era-home-intro">
        <div className="shell era-home-split">
          <div>
            <p className="kicker">WHAT ERA DELIVERS</p>
            <h2>More than robotic hardware.</h2>
          </div>
          <div>
            <p className="section-copy">
              Successful automation depends on the site, workflow, people and support model. ERA combines proven robotic platforms with local deployment capability so systems can operate safely and consistently in real facilities.
            </p>
            <Link href="/solutions" className="text-link">How we deploy robotics <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-alt era-home-products">
        <div className="shell">
          <div className="section-heading-row">
            <div><p className="kicker">ROBOTIC SYSTEMS</p><h2>Built for commercial work.</h2></div>
            <p className="section-copy">A focused portfolio for cleaning, service delivery and material movement across complex facilities.</p>
          </div>
          <div className="era-product-grid">
            {products.map((product) => (
              <Link href={product.href} className="era-product-card" key={product.name}>
                <div className="era-product-image">
                  <Image src={product.image} alt={`${product.name} commercial robot`} fill sizes="(max-width: 760px) 100vw, 25vw" />
                </div>
                <div className="era-product-copy"><p>{product.category}</p><h3>{product.name}</h3><span>View product range ↗</span></div>
              </Link>
            ))}
          </div>
          <div className="era-home-centre-link"><Link href="/products" className="pill pill-outline">View All Products</Link></div>
        </div>
      </section>

      <CapabilitiesShowcase />
      <IndustriesShowcase />

      <section className="section era-home-deployments">
        <div className="shell">
          <div className="section-heading-row">
            <div><p className="kicker">PROOF IN THE FIELD</p><h2>Deployment shaped around the operation.</h2></div>
            <p className="section-copy">Representative operating environments from ERA projects. Approved customer references are available privately.</p>
          </div>
          <div className="era-deployment-grid">
            {deployments.map((deployment, index) => (
              <Link href="/deployments" className="era-deployment-card" key={deployment.title}>
                <span className="era-deployment-number">0{index + 1}</span>
                <p className="kicker">{deployment.sector}</p>
                <h3>{deployment.title}</h3>
                <p>{deployment.body}</p>
                <span className="text-link">Explore deployment <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt era-home-direction">
        <div className="shell era-home-split">
          <div><p className="kicker">OUR DIRECTION</p><h2>Practical robotics today. Connected physical intelligence tomorrow.</h2></div>
          <div>
            <p className="section-copy">ERA is building from real deployment experience toward computer vision, edge intelligence and more adaptive Physical AI systems.</p>
            <Link href="/solutions#physical-ai" className="text-link">Explore our Physical AI direction <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section era-home-cta">
        <div className="shell era-home-cta-inner">
          <p className="kicker">START WITH THE OPERATION</p>
          <h2>Let&apos;s assess where robotics can create practical value.</h2>
          <p>Tell us about your facility, workflow and operating priorities. ERA will help identify the right system and deployment approach.</p>
          <div className="button-row center"><Link href="/contact" className="pill pill-light">Book a Site Assessment</Link><Link href="/deployments" className="pill pill-outline">View Deployments</Link></div>
        </div>
      </section>
    </main>
  );
}
