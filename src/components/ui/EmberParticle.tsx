type EmberParticleProps = {
  x: number;
  size: number;
  delay: number;
  duration: number;
};

export function EmberParticle({
  x,
  size,
  delay,
  duration,
}: EmberParticleProps) {
  return (
    <span
      aria-hidden="true"
      className="absolute bottom-0 rounded-full bg-ember/70 blur-[0.5px] animate-ember-float"
      style={{
        left: `${x}%`,
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        boxShadow: "0 0 18px rgba(200, 69, 42, 0.6)",
      }}
    />
  );
}
