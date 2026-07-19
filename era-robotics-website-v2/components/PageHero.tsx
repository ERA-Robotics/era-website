type Props = {
  kicker: string;
  title: string;
  description: string;
};

export default function PageHero({ kicker, title, description }: Props) {
  return (
    <section className="page-hero">
      <div className="shell">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="page-description">{description}</p>
      </div>
    </section>
  );
}
