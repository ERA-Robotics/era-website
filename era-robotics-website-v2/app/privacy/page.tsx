import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how ERA Robotics collects, uses, stores and protects personal information.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | ERA Robotics",
    description:
      "Learn how ERA Robotics collects, uses, stores and protects personal information.",
    url: "/privacy",
    type: "website",
  },
};

const lastUpdated = "22 July 2026";

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="shell">
          <p className="kicker">PRIVACY POLICY</p>

          <h1>Respecting your information.</h1>

          <p className="legal-hero-intro">
            ERA Robotics is committed to handling personal information
            responsibly, transparently and securely.
          </p>

          <p className="legal-updated">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="shell legal-layout">
          <aside className="legal-sidebar" aria-label="Privacy policy sections">
            <p className="legal-sidebar-title">On this page</p>

            <nav>
              <a href="#about-this-policy">About this policy</a>
              <a href="#information-we-collect">Information we collect</a>
              <a href="#how-we-collect-information">
                How we collect information
              </a>
              <a href="#how-we-use-information">How we use information</a>
              <a href="#disclosure">Disclosure of information</a>
              <a href="#overseas-processing">Overseas processing</a>
              <a href="#cookies">Cookies and analytics</a>
              <a href="#direct-marketing">Direct marketing</a>
              <a href="#security">Security and retention</a>
              <a href="#access-and-correction">Access and correction</a>
              <a href="#privacy-complaints">Privacy complaints</a>
              <a href="#contact">Contact us</a>
            </nav>
          </aside>

          <article className="legal-article">
            <section id="about-this-policy" className="legal-section">
              <h2>1. About this policy</h2>

              <p>
                This Privacy Policy explains how ERA Robotics Pty Ltd
                (&ldquo;ERA Robotics&rdquo;, &ldquo;ERA&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;)
                collects, holds, uses and discloses personal information.
              </p>

              <p>
                It applies to information collected through our website,
                enquiries, business relationships, events, demonstrations,
                recruitment activities and other interactions with ERA
                Robotics.
              </p>

              <p>
                Personal information generally means information or an opinion
                about an identified individual, or an individual who is
                reasonably identifiable.
              </p>

              <p>
                Where applicable, we handle personal information in accordance
                with the Privacy Act 1988 (Cth) and the Australian Privacy
                Principles.
              </p>
            </section>

            <section id="information-we-collect" className="legal-section">
              <h2>2. Information we collect</h2>

              <p>
                The personal information we collect depends on how you interact
                with us. It may include:
              </p>

              <ul>
                <li>
                  your name, job title, organisation and business contact
                  details;
                </li>

                <li>
                  your email address, telephone number and correspondence with
                  us;
                </li>

                <li>
                  information submitted through enquiry, consultation or
                  contact forms;
                </li>

                <li>
                  information relating to a potential project, deployment,
                  demonstration, service request or commercial relationship;
                </li>

                <li>
                  delivery locations, site contacts and operational information
                  required to provide products or services;
                </li>

                <li>
                  records of meetings, demonstrations, support requests and
                  business communications;
                </li>

                <li>
                  recruitment information, including employment history,
                  qualifications and information contained in applications;
                </li>

                <li>
                  website usage information, such as IP address, browser type,
                  device information, pages visited and referring website; and
                </li>

                <li>
                  any other information you voluntarily provide to us.
                </li>
              </ul>

              <p>
                We do not generally seek to collect sensitive information
                through our website. Please avoid providing sensitive
                information unless it is reasonably necessary and requested by
                us.
              </p>
            </section>

            <section
              id="how-we-collect-information"
              className="legal-section"
            >
              <h2>3. How we collect information</h2>

              <p>We may collect personal information:</p>

              <ul>
                <li>directly from you;</li>
                <li>through our website or contact forms;</li>
                <li>
                  during meetings, calls, demonstrations, events or site
                  visits;
                </li>
                <li>
                  through contractual, customer, supplier or partner
                  relationships;
                </li>
                <li>
                  from your employer or another representative of your
                  organisation;
                </li>
                <li>
                  from publicly available business sources, professional
                  directories and professional networking platforms; and
                </li>
                <li>
                  automatically through cookies, server logs and website
                  analytics technologies.
                </li>
              </ul>

              <p>
                Where practical, we collect personal information directly from
                the individual concerned. In some business contexts, we may
                receive contact information from a colleague, employer,
                customer, supplier, partner or other authorised representative.
              </p>
            </section>

            <section id="how-we-use-information" className="legal-section">
              <h2>4. How we use information</h2>

              <p>We may use personal information to:</p>

              <ul>
                <li>respond to enquiries and requests;</li>

                <li>
                  assess operational requirements and discuss potential
                  robotics solutions;
                </li>

                <li>
                  arrange demonstrations, consultations, deployments,
                  deliveries, training and support;
                </li>

                <li>
                  prepare proposals, quotations, agreements and project
                  documentation;
                </li>

                <li>
                  manage customer, supplier, technology and business partner
                  relationships;
                </li>

                <li>
                  provide, maintain and improve our products, services and
                  website;
                </li>

                <li>
                  communicate technical, operational or service information;
                </li>

                <li>
                  send relevant business updates or marketing communications
                  where permitted;
                </li>

                <li>assess employment applications;</li>

                <li>
                  protect our systems, personnel, customers and business
                  operations;
                </li>

                <li>
                  comply with legal, regulatory, insurance and contractual
                  obligations; and
                </li>

                <li>
                  exercise or defend our legal rights and resolve disputes.
                </li>
              </ul>

              <p>
                We may also use information for another purpose where you have
                consented, or where the use is otherwise authorised or required
                by law.
              </p>
            </section>

            <section id="disclosure" className="legal-section">
              <h2>5. Disclosure of information</h2>

              <p>
                We may disclose personal information where reasonably necessary
                to operate our business or provide products and services,
                including to:
              </p>

              <ul>
                <li>
                  our employees, contractors and authorised representatives;
                </li>

                <li>
                  manufacturers, technology partners, distributors and service
                  partners involved in a project;
                </li>

                <li>
                  logistics providers, couriers, warehouses and installation or
                  support contractors;
                </li>

                <li>
                  website hosting, cloud storage, email, customer relationship
                  management and information technology providers;
                </li>

                <li>
                  accountants, insurers, lawyers and other professional
                  advisers;
                </li>

                <li>
                  government agencies, regulators, courts or law enforcement
                  bodies where required or authorised by law; and
                </li>

                <li>
                  another entity in connection with a proposed or completed
                  business sale, restructuring, merger or acquisition.
                </li>
              </ul>

              <p>
                We do not sell personal information to third parties.
              </p>
            </section>

            <section id="overseas-processing" className="legal-section">
              <h2>6. Overseas processing and disclosure</h2>

              <p>
                ERA Robotics operates across Australia and New Zealand and may
                work with manufacturers, technology providers and service
                providers located in other countries.
              </p>

              <p>
                Some information may therefore be stored, processed or accessed
                outside Australia, including through cloud, communications,
                customer management and technology services whose
                infrastructure operates internationally.
              </p>

              <p>
                The location of overseas service providers may change from time
                to time. Where required, we take reasonable steps to ensure
                overseas recipients handle personal information consistently
                with applicable privacy requirements.
              </p>

              <p>
                You may contact us for further information about the countries
                relevant to a particular service or business relationship.
              </p>
            </section>

            <section id="cookies" className="legal-section">
              <h2>7. Cookies and website analytics</h2>

              <p>
                Our website may use cookies and similar technologies to operate
                correctly, remember preferences, understand website traffic and
                improve the visitor experience.
              </p>

              <p>
                Information collected through these technologies may include
                your IP address, browser, device type, approximate location,
                referring page, pages viewed and time spent on the website.
              </p>

              <p>
                Some cookies may be provided by third-party analytics, hosting
                or embedded-content providers. These providers may handle
                information in accordance with their own privacy policies.
              </p>

              <p>
                You can usually control or disable cookies through your browser
                settings. Disabling certain cookies may affect the operation of
                some website features.
              </p>
            </section>

            <section id="direct-marketing" className="legal-section">
              <h2>8. Direct marketing</h2>

              <p>
                We may send business communications about ERA Robotics
                products, services, events, insights or developments where you
                have requested them, consented to receive them, or where
                otherwise permitted by law.
              </p>

              <p>
                You may opt out of marketing communications at any time by
                using the unsubscribe option provided in the communication or
                by contacting us.
              </p>

              <p>
                We may still send operational or administrative messages that
                are necessary for an existing enquiry, project, contract or
                service relationship.
              </p>
            </section>

            <section id="security" className="legal-section">
              <h2>9. Security and retention</h2>

              <p>
                We take reasonable administrative, technical and physical steps
                to protect personal information against misuse, interference,
                loss and unauthorised access, modification or disclosure.
              </p>

              <p>
                These measures may include access controls, authentication,
                secure hosting, system monitoring, staff procedures and
                restricted access based on business need.
              </p>

              <p>
                No internet transmission or information storage system can be
                guaranteed to be completely secure. You should avoid sending
                highly sensitive or confidential information through
                unencrypted website forms or ordinary email.
              </p>

              <p>
                We retain personal information only for as long as reasonably
                necessary for the purpose for which it was collected, to
                maintain business records, or to satisfy legal, taxation,
                insurance, contractual and dispute-resolution requirements.
              </p>

              <p>
                When information is no longer required, we take reasonable steps
                to delete, destroy or de-identify it, subject to applicable
                record-retention obligations.
              </p>
            </section>

            <section id="access-and-correction" className="legal-section">
              <h2>10. Access and correction</h2>

              <p>
                You may request access to personal information that we hold
                about you, or ask us to correct information that is inaccurate,
                out of date, incomplete, irrelevant or misleading.
              </p>

              <p>
                We may need to verify your identity before processing a request.
                In some circumstances, applicable law may permit or require us
                to refuse access. If that occurs, we will generally explain the
                reason where it is lawful and appropriate to do so.
              </p>

              <p>
                We will respond to access and correction requests within a
                reasonable period.
              </p>
            </section>

            <section id="privacy-complaints" className="legal-section">
              <h2>11. Privacy complaints</h2>

              <p>
                If you have a concern or complaint about how we have handled
                your personal information, please contact us using the details
                below.
              </p>

              <p>
                Please include sufficient information for us to understand and
                investigate your concern. We will acknowledge the complaint and
                aim to respond within a reasonable period.
              </p>

              <p>
                If you are not satisfied with our response and the Privacy Act
                applies, you may be able to contact the Office of the Australian
                Information Commissioner for further information or to make a
                complaint.
              </p>
            </section>

            <section id="third-party-links" className="legal-section">
              <h2>12. Third-party websites</h2>

              <p>
                Our website may contain links to websites or services operated
                by third parties. ERA Robotics is not responsible for the
                privacy, security or content practices of those third parties.
              </p>

              <p>
                We recommend reviewing the privacy policy of any third-party
                website before providing personal information.
              </p>
            </section>

            <section id="policy-updates" className="legal-section">
              <h2>13. Changes to this policy</h2>

              <p>
                We may update this Privacy Policy from time to time to reflect
                changes to our business, technology, service providers or legal
                obligations.
              </p>

              <p>
                The current version will be published on this page with the
                updated date shown above.
              </p>
            </section>

            <section id="contact" className="legal-section">
              <h2>14. Contact us</h2>

              <p>
                For questions, access or correction requests, or privacy
                complaints, please contact:
              </p>

              <div className="legal-contact-card">
                <p>
                  <strong>ERA Robotics Pty Ltd</strong>
                </p>

                <p>Australia</p>

                <p>
                  Contact us through our{" "}
                  <Link href="/contact">online contact page</Link>.
                </p>
              </div>
            </section>

            <div className="legal-document-note">
              <p>
                This policy describes ERA Robotics&apos; general information
                handling practices. Additional privacy notices may apply to
                particular services, forms, projects or recruitment processes.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
