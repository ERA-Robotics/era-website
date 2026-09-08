import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="CONTACT"
        title="Let’s build intelligent operations."
        description="Tell us about your site, workflow, robotics requirement or technology partnership opportunity."
      />
      <section className="section">
        <div className="shell contact-grid">
          <div>
            <h2>Talk to ERA Robotics</h2>
            <p>
              For robotics deployments, edge AI projects, channel partnerships
              and enterprise automation enquiries.
            </p>
            <div className="contact-meta">
              <p><span>Email</span><a href="mailto:hello@erarobotics.ai">hello@erarobotics.ai</a></p>
              <p><span>Region</span>Australia &amp; New Zealand</p>
              <p><span>Company</span>ERA Robotics Pty Ltd</p>
            </div>
          </div>

          <form className="contact-form" action="mailto:hello@erarobotics.ai" method="post" encType="text/plain">
            <label>Name<input name="name" required /></label>
            <label>Work email<input name="email" type="email" required /></label>
            <label>Organisation<input name="organisation" /></label>
            <label>Area of interest
              <select name="interest">
                <option>Commercial Robotics</option>
                <option>Physical AI</option>
                <option>Edge AI / Vision</option>
                <option>Systems Integration</option>
                <option>Technology Partnership</option>
              </select>
            </label>
            <label>How can we help?<textarea name="message" rows={6} required></textarea></label>
            <button className="pill pill-light" type="submit">Send enquiry</button>
          </form>
        </div>
      </section>
    </main>
  );
}
