export default function ZodiacCard({ name, dates }) {
  return (
    <div className="zodiac-card">
      <img alt={name} src={`${process.env.PUBLIC_URL}/images/${name}.png`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  );
}
