export default function Hero({ title }) {
  return (
    <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('/hero.jpg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-cream">{title}</h1>
      </div>
    </div>
  );
}