import Link from "next/link";

export type Card = {
  tag?: string;
  title: string;
  body: string;
  href?: string;
};

export default function CardGrid({
  items,
  columns = 3
}: {
  items: Card[];
  columns?: 2 | 3;
}) {
  return (
    <div className={`card-grid cols-${columns}`}>
      {items.map((item) => {
        const inner = (
          <>
            <div className="card-visual">
              <span></span>
            </div>
            {item.tag && <p className="card-tag">{item.tag}</p>}
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            {item.href && <span className="card-arrow">↗</span>}
          </>
        );
        return item.href ? (
          <Link key={item.title} className="content-card" href={item.href}>
            {inner}
          </Link>
        ) : (
          <article key={item.title} className="content-card">
            {inner}
          </article>
        );
      })}
    </div>
  );
}
