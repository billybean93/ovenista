type EmberParticleProps = {
  x: number;
  size: number;
  delay: number;
  duration: number;
  color?: string;
  glow?: string;
};

export function EmberParticle({
  x,
  size,
  delay,
  duration,
  color = "rgba(232, 91, 59, 0.72)",
  glow = "0 0 18px rgba(200, 69, 42, 0.6)",
}: EmberParticleProps) {
  return (
    <span
      aria-hidden="true"
      className="absolute bottom-0 rounded-full blur-[0.5px] animate-ember-float"
      style={{
        left: `${x}%`,
        width: size,
        height: size,
        background: color,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        boxShadow: glow,
      }}
    />
  );
}
