import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing access to and use of the ERA Robotics website.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use | ERA Robotics",
    description:
      "Terms governing access to and use of the ERA Robotics website.",
    url: "/terms",
    type: "website",
  },
};

const lastUpdated = "22 July 2026";

export default function TermsPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="shell">
          <p className="kicker">TERMS OF USE</p>
          <h1>Clear terms for using our website.</h1>
          <p className="legal-hero-intro">
            These terms govern your access to and use of the ERA Robotics
            website and its published content.
          </p>
          <p className="legal-updated">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="shell legal-layout">
          <aside className="legal-sidebar" aria-label="Terms of use sections">
            <p className="legal-sidebar-title">On this page</p>
            <nav>
              <a href="#about-these-terms">About these terms</a>
              <a href="#website-purpose">Website purpose</a>
              <a href="#acceptance">Acceptance of terms</a>
              <a href="#permitted-use">Permitted use</a>
              <a href="#prohibited-conduct">Prohibited conduct</a>
              <a href="#intellectual-property">Intellectual property</a>
              <a href="#information-and-availability">Information and availability</a>
              <a href="#products-and-services">Products and services</a>
              <a href="#enquiries-and-submissions">Enquiries and submissions</a>
              <a href="#third-party-content">Third-party content</a>
              <a href="#security">Website security</a>
              <a href="#disclaimers">Disclaimers</a>
              <a href="#liability">Limitation of liability</a>
              <a href="#indemnity">Indemnity</a>
              <a href="#privacy">Privacy</a>
              <a href="#changes">Changes to these terms</a>
              <a href="#governing-law">Governing law</a>
              <a href="#contact">Contact us</a>
            </nav>
          </aside>

          <article className="legal-article">
            <section id="about-these-terms" className="legal-section">
              <h2>1. About these terms</h2>
              <p>
                These Terms of Use govern access to and use of the website
                operated by ERA Robotics Pty Ltd (&ldquo;ERA Robotics&rdquo;,
                &ldquo;ERA&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
                &ldquo;our&rdquo;).
              </p>
              <p>
                These terms apply to this website, its pages, downloadable
                materials, articles, graphics, videos, forms and other content
                made available through it.
              </p>
              <p>
                These terms relate to use of the website only. Any quotation,
                proposal, order, deployment, product sale, service engagement,
                support arrangement or other commercial transaction with ERA
                Robotics may be governed by separate written terms.
              </p>
            </section>

            <section id="website-purpose" className="legal-section">
              <h2>2. Website purpose</h2>
              <p>
                This website provides general information about ERA Robotics,
                commercial robotics, deployment and integration capabilities,
                Physical AI, edge intelligence, computer vision, industries,
                products and related business activities.
              </p>
              <p>
                The website is intended primarily for business, institutional,
                government and professional audiences in Australia, New
                Zealand and other relevant markets.
              </p>
              <p>
                Website content is provided for general information and
                preliminary evaluation. It is not a substitute for a
                site-specific assessment, technical review, safety assessment,
                professional advice, quotation or written agreement.
              </p>
            </section>

            <section id="acceptance" className="legal-section">
              <h2>3. Acceptance of terms</h2>
              <p>
                By accessing or using this website, you agree to comply with
                these Terms of Use and all applicable laws.
              </p>
              <p>
                If you do not agree with these terms, you should not use the
                website.
              </p>
              <p>
                If you access the website on behalf of an organisation, you
                represent that you are authorised to do so and to act on that
                organisation&apos;s behalf.
              </p>
            </section>

            <section id="permitted-use" className="legal-section">
              <h2>4. Permitted use</h2>
              <p>
                You may access and use this website for lawful business,
                research, evaluation, procurement, educational or personal
                informational purposes.
              </p>
              <p>
                You may download or print reasonable extracts of website
                content for internal, non-commercial reference, provided that:
              </p>
              <ul>
                <li>the content is not materially altered;</li>
                <li>ERA Robotics is identified as the source;</li>
                <li>copyright, trade mark and other proprietary notices are retained; and</li>
                <li>the content is not represented as an endorsement, certification or commitment by ERA Robotics.</li>
              </ul>
            </section>

            <section id="prohibited-conduct" className="legal-section">
              <h2>5. Prohibited conduct</h2>
              <p>You must not:</p>
              <ul>
                <li>use the website for unlawful, fraudulent, misleading or harmful purposes;</li>
                <li>attempt to gain unauthorised access to the website, its servers, systems, accounts or connected infrastructure;</li>
                <li>introduce malware, malicious code, automated attacks or other harmful technology;</li>
                <li>interfere with the availability, operation, security or performance of the website;</li>
                <li>use automated tools to scrape, harvest, extract or reproduce substantial parts of the website without written permission;</li>
                <li>reverse engineer, decompile or attempt to derive source code from website functionality, except where permitted by law;</li>
                <li>impersonate ERA Robotics, its personnel, customers, partners or another person;</li>
                <li>use ERA Robotics branding or content in a way that suggests an unauthorised affiliation, partnership, approval or endorsement;</li>
                <li>remove or obscure copyright, trade mark or proprietary notices; or</li>
                <li>use website content to create a misleading comparison, representation or commercial claim.</li>
              </ul>
            </section>

            <section id="intellectual-property" className="legal-section">
              <h2>6. Intellectual property</h2>
              <p>
                Unless otherwise stated, the website and its content are owned
                by, licensed to or used with permission by ERA Robotics.
              </p>
              <p>
                This includes text, copy, layouts, graphics, illustrations,
                photographs, videos, animations, interface elements, software,
                downloads, trade marks, service marks, logos and other brand
                assets.
              </p>
              <p>
                Nothing in these terms transfers ownership of any intellectual
                property to you. No licence is granted except the limited right
                to access and use the website in accordance with these terms.
              </p>
              <p>
                Third-party product names, logos and trade marks remain the
                property of their respective owners. Their appearance on this
                website does not necessarily imply endorsement, sponsorship or
                ownership by ERA Robotics.
              </p>
            </section>

            <section id="information-and-availability" className="legal-section">
              <h2>7. Information, accuracy and availability</h2>
              <p>
                We aim to provide useful and accurate information, but website
                content may be general, incomplete, subject to change or not
                suitable for a particular site, industry, application or
                operating environment.
              </p>
              <p>
                Product capabilities, specifications, images, availability,
                deployment examples, performance statements, integrations and
                roadmap information may change without notice.
              </p>
              <p>
                Images and diagrams may be illustrative. Actual equipment,
                configuration, software, accessories, interfaces and deployment
                outcomes may differ.
              </p>
              <p>
                We do not guarantee that the website will always be available,
                uninterrupted, secure or free from errors. We may modify,
                suspend, restrict or withdraw any part of the website at any
                time.
              </p>
            </section>

            <section id="products-and-services" className="legal-section">
              <h2>8. Products, services and deployment information</h2>
              <p>
                Information about robotics products, integrations, deployment
                approaches and related services is provided for general
                informational purposes only.
              </p>
              <p>
                Suitability depends on factors such as site conditions,
                workflows, surfaces, access, infrastructure, connectivity,
                safety controls, staff processes, regulatory requirements,
                operating hours and environmental conditions.
              </p>
              <p>
                No website statement constitutes a binding offer, guaranteed
                performance outcome, warranty, deployment commitment or
                representation that a particular product or solution is
                suitable for your requirements.
              </p>
              <p>
                Commercial commitments arise only through a quotation,
                proposal, order, contract or other written agreement authorised
                by ERA Robotics.
              </p>
              <p>
                Nothing in these terms excludes, restricts or modifies any
                consumer guarantee, right or remedy that cannot lawfully be
                excluded under the Australian Consumer Law or other applicable
                legislation.
              </p>
            </section>

            <section id="enquiries-and-submissions" className="legal-section">
              <h2>9. Enquiries and information you submit</h2>
              <p>
                You are responsible for ensuring that information submitted
                through the website is accurate, lawful and appropriate.
              </p>
              <p>
                You must not submit confidential, commercially sensitive,
                security-sensitive or personal information unless it is
                reasonably necessary for your enquiry and you are authorised to
                provide it.
              </p>
              <p>
                Submitting an enquiry does not create a customer, supplier,
                partner, agency, employment, fiduciary or other contractual
                relationship.
              </p>
              <p>
                You grant ERA Robotics permission to use information you submit
                to assess, respond to and administer your enquiry and for
                related business purposes, subject to our Privacy Policy and
                applicable law.
              </p>
            </section>

            <section id="third-party-content" className="legal-section">
              <h2>10. Third-party websites, products and content</h2>
              <p>
                The website may refer or link to third-party websites, products,
                manufacturers, platforms, documentation, videos or services.
              </p>
              <p>
                These references are provided for convenience or context. ERA
                Robotics does not control third-party websites and is not
                responsible for their availability, accuracy, security,
                content, privacy practices or terms.
              </p>
              <p>
                You access third-party websites and services at your own
                discretion and should review their applicable terms and privacy
                policies.
              </p>
            </section>

            <section id="security" className="legal-section">
              <h2>11. Website security</h2>
              <p>
                You are responsible for using appropriate security practices
                when accessing the website, including maintaining current
                software, browser protection and device security.
              </p>
              <p>
                You should not rely on ordinary website forms or unencrypted
                email to transmit highly sensitive, confidential or
                security-critical information.
              </p>
              <p>
                If you become aware of a suspected security vulnerability
                affecting this website, please contact ERA Robotics promptly
                and do not publicly disclose or exploit the issue.
              </p>
            </section>

            <section id="disclaimers" className="legal-section">
              <h2>12. Disclaimers</h2>
              <p>
                To the maximum extent permitted by law, the website and its
                content are provided on an &ldquo;as available&rdquo; basis.
              </p>
              <p>
                ERA Robotics does not make any guarantee that website content
                is complete, current, error-free or suitable for your specific
                purpose.
              </p>
              <p>
                Website content does not constitute engineering, safety, legal,
                financial, regulatory, cybersecurity or other professional
                advice.
              </p>
              <p>
                You should obtain appropriate professional and site-specific
                advice before making decisions based on website content or
                implementing robotics, automation, computer vision or Physical
                AI systems.
              </p>
            </section>

            <section id="liability" className="legal-section">
              <h2>13. Limitation of liability</h2>
              <p>
                Nothing in these terms excludes, restricts or modifies any
                liability, right or remedy that cannot lawfully be excluded,
                restricted or modified.
              </p>
              <p>
                Subject to that qualification, and to the maximum extent
                permitted by law, ERA Robotics is not liable for loss arising
                from or connected with:
              </p>
              <ul>
                <li>your access to or use of the website;</li>
                <li>your inability to access or use the website;</li>
                <li>reliance on website information without an appropriate site-specific assessment or written agreement;</li>
                <li>interruption, delay, error, omission, corruption, malware or unauthorised access;</li>
                <li>third-party websites, content, products or services; or</li>
                <li>changes to, suspension of or withdrawal of website content.</li>
              </ul>
              <p>
                To the maximum extent permitted by law, ERA Robotics is not
                liable for indirect, incidental, special or consequential loss,
                loss of profit, loss of revenue, loss of opportunity, loss of
                data, loss of goodwill or business interruption arising from
                use of this website.
              </p>
            </section>

            <section id="indemnity" className="legal-section">
              <h2>14. Indemnity</h2>
              <p>
                To the extent permitted by law, you agree to indemnify ERA
                Robotics against loss, damage, liability, cost or expense
                reasonably arising from:
              </p>
              <ul>
                <li>your unlawful or prohibited use of the website;</li>
                <li>your material breach of these terms;</li>
                <li>information or material you submit without authority or in breach of another person&apos;s rights; or</li>
                <li>your infringement of intellectual property, privacy or other rights.</li>
              </ul>
              <p>
                This indemnity does not apply to the extent that the relevant
                loss was caused by ERA Robotics&apos; own unlawful conduct,
                negligence or breach of duty.
              </p>
            </section>

            <section id="privacy" className="legal-section">
              <h2>15. Privacy</h2>
              <p>
                Personal information collected through the website is handled
                in accordance with our <Link href="/privacy">Privacy Policy</Link>.
              </p>
              <p>
                By submitting personal information through the website, you
                acknowledge that it may be handled for the purposes described
                in that policy.
              </p>
            </section>

            <section id="changes" className="legal-section">
              <h2>16. Changes to the website and these terms</h2>
              <p>
                We may update the website or these Terms of Use from time to
                time to reflect changes in our business, technology, content,
                legal obligations or operating practices.
              </p>
              <p>
                The current version will be published on this page with the
                updated date shown above.
              </p>
              <p>
                Your continued use of the website after updated terms are
                published constitutes acceptance of the revised terms.
              </p>
            </section>

            <section id="governing-law" className="legal-section">
              <h2>17. Governing law</h2>
              <p>These terms are governed by the laws of Victoria, Australia.</p>
              <p>
                You submit to the non-exclusive jurisdiction of the courts of
                Victoria and the courts entitled to hear appeals from those
                courts.
              </p>
              <p>
                If any provision of these terms is found to be invalid,
                unlawful or unenforceable, that provision will be read down or
                severed to the minimum extent necessary, and the remaining
                provisions will continue to apply.
              </p>
            </section>

            <section id="contact" className="legal-section">
              <h2>18. Contact us</h2>
              <p>
                For questions about these Terms of Use or this website, please
                contact:
              </p>
              <div className="legal-contact-card">
                <p><strong>ERA Robotics Pty Ltd</strong></p>
                <p>Victoria, Australia</p>
                <p>
                  Contact us through our <Link href="/contact">online contact page</Link>.
                </p>
              </div>
            </section>

            <div className="legal-document-note">
              <p>
                These Terms of Use govern the ERA Robotics website only.
                Separate commercial terms may apply to quotations, products,
                services, deployments, support and other business engagements.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

