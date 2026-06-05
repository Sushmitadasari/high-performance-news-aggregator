export default function Hero() {
  return (
    <section className="hero">
      <img
        data-testid="hero-image"
        src="/hero.webp"
        srcSet="
          /hero-small.webp 480w,
          /hero.webp 768w,
          /hero-large.webp 1200w
        "
        sizes="
          (max-width: 600px) 480px,
          (max-width: 1000px) 768px,
          1200px
        "
        width="1200"
        height="600"
        alt="News Hero"
        loading="eager"
      />
    </section>
  );
}