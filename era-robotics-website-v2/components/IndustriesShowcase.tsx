"use client";

import Link from "next/link";
import { useState } from "react";

type Industry = {
  title: string;
  body: string;
  href: string;
  image: string;
};

const industries: Industry[] = [
  {
    title: "Retail & Supermarkets",
    body: "Autonomous cleaning and service robotics for complex, high-traffic customer environments.",
    href: "/industries#retail-supermarkets",
    image: "/industries/retail-shopping-centres.png",
  },
  {
    title: "Healthcare & Aged Care",
    body: "Cleaning and operational support for hospitals, aged care facilities and clinical environments.",
    href: "/industries#healthcare-aged-care",
    image: "/industries/healthcare.png",
  },
  {
    title: "Hotels & Hospitality",
    body: "Robotic systems supporting cleaning, service delivery and consistent guest experiences.",
    href: "/industries#hotels-hospitality",
    image: "/industries/hospitality.png",
  },
  {
    title: "Warehousing & Storage",
    body: "Autonomous movement, cleaning and operational support across large logistics environments.",
    href: "/industries#warehousing-storage",
    image: "/industries/warehousing-logistics.png",
  },
  {
    title: "Manufacturing",
    body: "Robotics supporting safer workflows, repeatable processes and more efficient facilities.",
    href: "/industries#manufacturing",
    image: "/industries/manufacturing.png",
  },
  {
    title: "Commercial Property",
    body: "Scalable robotic operations for offices, public buildings and commercial facilities.",
    href: "/industries#commercial-property",
    image: "/industries/corporate-public-sector.png",
  },
];

export default function IndustriesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeIndustry = industries[activeIndex];

  return (
    <section className="section section-alt industries-section">
      <div className="shell">
        <div className="section-heading-row">
          <div>
            <p className="kicker">INDUSTRIES</p>

            <h2>
              Automation shaped around real operating environments.
            </h2>
          </div>

          <p className="section-copy">
            Every environment has different workflows, risks, service
            expectations and physical constraints. ERA selects and deploys
            robotic systems around the operation—not the other way around.
          </p>
        </div>

        <div className="industries-layout industries-layout-interactive">
          <Link
            href={activeIndustry.href}
            className="industry-feature industry-feature-photo"
            aria-label={`Explore ${activeIndustry.title}`}
          >
            <div
              key={activeIndustry.image}
              className="industry-feature-background"
              style={{
                backgroundImage: `url("${activeIndustry.image}")`,
              }}
              aria-hidden="true"
            />

            <div
              className="industry-photo-overlay"
              aria-hidden="true"
            />

            <div className="industry-feature-top">
              <span className="industry-index">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="industry-arrow" aria-hidden="true">
                ↗
              </span>
            </div>

            <div className="industry-feature-copy">
              <p className="industry-label">
                SELECTED INDUSTRY
              </p>

              <h3>{activeIndustry.title}</h3>

              <p>{activeIndustry.body}</p>
            </div>
          </Link>

          <div
            className="industry-list"
            aria-label="Select an industry"
          >
            {industries.map((industry, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  type="button"
                  className={`industry-list-item industry-list-item-photo ${
                    isActive ? "is-active" : ""
                  }`}
                  key={industry.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                >
                  <span className="industry-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="industry-list-thumbnail"
                    aria-hidden="true"
                  >
                    <span
                      style={{
                        backgroundImage: `url("${industry.image}")`,
                      }}
                    />
                  </span>

                  <span className="industry-list-copy">
                    <span className="industry-list-title">
                      {industry.title}
                    </span>

                    <span className="industry-list-body">
                      {industry.body}
                    </span>
                  </span>

                  <span
                    className="industry-list-status"
                    aria-hidden="true"
                  >
                    {isActive ? "—" : "↗"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
