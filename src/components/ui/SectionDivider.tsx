export function SectionDivider() {
  return (
    <div className="container-shell py-4">
      <svg
        viewBox="0 0 1200 32"
        className="h-8 w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0 16H520" stroke="rgba(212,168,83,0.45)" />
        <path d="M680 16H1200" stroke="rgba(212,168,83,0.45)" />
        <path
          d="M566 21C573 16 579 10 582 4C585 10 591 16 598 21"
          stroke="#C8452A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M602 21C609 16 615 10 618 4C621 10 627 16 634 21"
          stroke="#D4A853"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
