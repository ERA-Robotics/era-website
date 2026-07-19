import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="ABOUT ERA"
        title="Building the next era of intelligent operations."
        description="ERA Robotics is an Australia-based robotics and AI solutions company focused on practical deployment across Australia and New Zealand."
      />

      <section className="section">
        <div className="shell editorial-grid">
          <div>
            <p className="kicker">WHO WE ARE</p>
            <h2>From commercial robotics to Physical AI.</h2>
          </div>
          <div>
            <p>
              ERA Robotics helps organisations adopt intelligent automation in real operating environments.
              We bring together commercial robotics, edge computing, AI vision and systems integration.
            </p>
            <p>
              Our role extends beyond supplying hardware. We assess the site, design the operating model,
              deploy the technology, train teams and support the solution through its lifecycle.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <p className="kicker">CAPABILITY</p>
          <h2>Local market access. Enterprise deployment capability. AI-forward direction.</h2>
          <div className="pillars">
            <article><h3>Commercial</h3><p>Customer access and industry experience across Australia and New Zealand.</p></article>
            <article><h3>Technical</h3><p>Robotics deployment, edge intelligence, AI vision and solution design.</p></article>
            <article><h3>Operational</h3><p>On-site commissioning, training, support and continuous optimisation.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell editorial-grid">
          <div>
            <p className="kicker">OUR VISION</p>
            <h2>Move AI beyond the screen.</h2>
          </div>
          <div>
            <p>
              The next generation of enterprise AI will not only generate information.
              It will perceive, navigate, decide and act in the physical world.
            </p>
            <p>
              ERA is building the capability to help organisations adopt that future responsibly—
              through robotics, edge intelligence and connected operational systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
