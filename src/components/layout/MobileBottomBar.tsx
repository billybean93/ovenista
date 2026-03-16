import { MenuSquare, Phone, UtensilsCrossed } from "lucide-react";

import { restaurantContact } from "@/lib/metadata";

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[color:var(--color-border)] bg-[rgba(255,247,232,0.94)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={`tel:${restaurantContact.phone}`}
          className="flex min-h-14 items-center justify-center gap-2 text-base text-cream"
        >
          <Phone className="h-4 w-4 text-ember" />
          Call
        </a>
        <a
          href="/reserve"
          className="flex min-h-14 items-center justify-center gap-2 text-base text-ember"
        >
          <UtensilsCrossed className="h-4 w-4" />
          Reserve
        </a>
        <a href="/menu" className="flex min-h-14 items-center justify-center gap-2 text-base text-cream">
          <MenuSquare className="h-4 w-4 text-forest" />
          Menu
        </a>
      </div>
    </div>
  );
}
