import type { NavLinkKey } from "@/types";

export const locales = ["en", "vi"] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];

type Dictionary = {
  localeName: string;
  languageCode: string;
  nav: Record<NavLinkKey, string>;
  common: {
    contactUs: string;
    call: string;
    menu: string;
    language: string;
    english: string;
    vietnamese: string;
    openMenu: string;
    closeMenu: string;
    closeNavigationDrawer: string;
    getDirections: string;
    callNow: string;
    instagram: string;
    facebook: string;
    zalo: string;
    hotline: string;
    tiktok: string;
  };
  hero: {
    eyebrow: string;
    tagline: string;
    cta: string;
    pdfCta: string;
  };
  manifesto: {
    quote: string;
  };
  signature: {
    title: string;
  };
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  gallery: {
    title: string;
    subtitle: string;
    viewMore: string;
    showFewer: string;
  };
  takeaway: {
    title: string;
    description: string;
    callToOrder: string;
  };
  location: {
    label: string;
    mapFallback: string;
    address: string;
    hours: string;
    phone: string;
    serviceModes: string;
  };
  reviews: {
    label: string;
    viaGoogle: string;
    googleReview: string;
    tripadvisorReview: string;
  };
  pages: {
    home: {
      title: string;
      description: string;
    };
    menu: {
      title: string;
      description: string;
      label: string;
      heading: string;
      subheading: string;
      pdfCta: string;
      pdfNote: string;
      notes: string[];
      reserveCta: string;
    };
    about: {
      title: string;
      description: string;
      label: string;
      heading: string;
    };
  };
  footer: {
    openDaily: string;
    findUs: string;
    mapTitle: string;
    contactTitle: string;
    addressTitle: string;
    socialTitle: string;
    copyright: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    localeName: "English",
    languageCode: "en-US",
    nav: {
      menu: "Menu",
      ourStory: "Our Story",
      gallery: "Gallery",
      location: "Location",
    },
    common: {
      contactUs: "Contact Us",
      call: "Call",
      menu: "Menu",
      language: "Language",
      english: "English",
      vietnamese: "Tiếng Việt",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      closeNavigationDrawer: "Close navigation drawer",
      getDirections: "Get Directions",
      callNow: "Call Now",
      instagram: "Instagram",
      facebook: "Facebook",
      zalo: "Zalo",
      hotline: "Hotline",
      tiktok: "TikTok",
    },
    hero: {
      eyebrow: "European Craft Kitchen",
      tagline: "From Oven With Soul",
      cta: "View Menu",
      pdfCta: "PDF Menu",
    },
    manifesto: {
      quote: "Crafted with passion, baked with soul",
    },
    signature: {
      title: "Our Signature Specialties",
    },
    story: {
      eyebrow: "Established 2026",
      title: "We put a soul in every dish.",
      paragraphs: [
        "Ovenista is a new, intimate restaurant with an inventive spirit, inspired by the flavours and traditions of European cuisine. Every plate is made with care to deliver bold ideas and genuinely good food.",
        "From rustic classics to modern interpretations, we focus on quality ingredients, thoughtful technique, and honest cooking that feels both fresh and familiar.",
      ],
    },
    gallery: {
      title: "Inside Our World",
      subtitle: "Vibes, murals, and culinary moments.",
      viewMore: "View more photos",
      showFewer: "Show fewer photos",
    },
    takeaway: {
      title: "Take the Oven Home",
      description: "Pizza and pasta made fresh for takeaway. Call ahead or walk in.",
      callToOrder: "Call to Order",
    },
    location: {
      label: "Find Us",
      mapFallback: "Add `NEXT_PUBLIC_MAPS_EMBED_ID` in `.env.local` to enable the live map.",
      address: "Address",
      hours: "Hours",
      phone: "Phone",
      serviceModes: "Dine-in · Takeaway",
    },
    reviews: {
      label: "What Guests Say",
      viaGoogle: "via Google",
      googleReview: "Google Review",
      tripadvisorReview: "Tripadvisor",
    },
    footer: {
      openDaily: "Open daily 11:00 - 22:00",
      findUs: "Find us",
      mapTitle: "Ovenista location map",
      contactTitle: "Contact Us",
      addressTitle: "Address",
      socialTitle: "Social & Hotline",
      copyright: "© 2026 Ovenista. Handcrafted for convivial evenings.",
    },
    pages: {
      home: {
        title: "Ovenista - From Oven With Soul | European Restaurant Ho Chi Minh City",
        description:
          "Ovenista brings authentic European dining to Ho Chi Minh City. Wood-fired pizza, handmade pasta, and long-smoked specialties.",
      },
      menu: {
        title: "Menu",
        description:
          "Explore Ovenista's full menu: wood-fired pizza, handmade pasta, long-smoked specialties and more.",
        label: "Our Menu",
        heading: "Wood-Fired Comfort, Handmade Detail, Slow-Smoked Depth.",
        subheading: "Browse the live menu interface or open the PDF version.",
        pdfCta: "Open PDF Menu",
        pdfNote: "PDF opens the print menu in a new tab.",
        notes: [
          "All pasta can be substituted with gluten-free spaghetti except lasagna.",
          "Prices are subject to service charge and VAT.",
        ],
        reserveCta: "Contact Us",
      },
      about: {
        title: "Our Story",
        description: "Learn about Ovenista's craft, fire, and European dining philosophy.",
        label: "Our Story",
        heading: "A room built around patience, fire, and real hospitality.",
      },
    },
  },
  vi: {
    localeName: "Tiếng Việt",
    languageCode: "vi-VN",
    nav: {
      menu: "Thực Đơn",
      ourStory: "Câu Chuyện",
      gallery: "Hình Ảnh",
      location: "Địa Điểm",
    },
    common: {
      contactUs: "Liên Hệ",
      call: "Gọi",
      menu: "Thực Đơn",
      language: "Ngôn ngữ",
      english: "English",
      vietnamese: "Tiếng Việt",
      openMenu: "Mở menu",
      closeMenu: "Đóng menu",
      closeNavigationDrawer: "Đóng thanh điều hướng",
      getDirections: "Chỉ Đường",
      callNow: "Gọi Ngay",
      instagram: "Instagram",
      facebook: "Facebook",
      zalo: "Zalo",
      hotline: "Hotline",
      tiktok: "TikTok",
    },
    hero: {
      eyebrow: "Bếp Âu Thủ Công",
      tagline: "Ra Lò Với Cả Tâm Hồn",
      cta: "Xem Menu",
      pdfCta: "Menu PDF",
    },
    manifesto: {
      quote: "Nấu bằng đam mê, ra lò bằng tâm hồn",
    },
    signature: {
      title: "Món Đặc Trưng Nổi Bật",
    },
    story: {
      eyebrow: "Thành lập năm 2026",
      title: "Chúng tôi đặt tâm hồn vào từng món ăn.",
      paragraphs: [
        "Ovenista là một nhà hàng nhỏ mới mẻ với tinh thần sáng tạo, lấy cảm hứng từ hương vị và truyền thống ẩm thực châu Âu. Mỗi món ăn đều được chăm chút để mang đến ý tưởng táo bạo và trải nghiệm thật sự ngon miệng.",
        "Từ những món mộc mạc kinh điển đến các cách diễn giải hiện đại, chúng tôi tập trung vào nguyên liệu chất lượng, kỹ thuật tinh tế và kiểu nấu nướng chân thành vừa mới lạ vừa gần gũi.",
      ],
    },
    gallery: {
      title: "Không Gian Của Chúng Tôi",
      subtitle: "Không khí, tranh tường và những khoảnh khắc ẩm thực.",
      viewMore: "Xem thêm ảnh",
      showFewer: "Thu gọn ảnh",
    },
    takeaway: {
      title: "Mang Hương Lò Về Nhà",
      description: "Pizza và pasta làm mới cho mang đi. Gọi trước hoặc ghé trực tiếp.",
      callToOrder: "Gọi Đặt Món",
    },
    location: {
      label: "Tìm Chúng Tôi",
      mapFallback: "Thêm `NEXT_PUBLIC_MAPS_EMBED_ID` vào `.env.local` để bật bản đồ trực tiếp.",
      address: "Địa chỉ",
      hours: "Giờ mở cửa",
      phone: "Điện thoại",
      serviceModes: "Ăn tại chỗ · Mang đi",
    },
    reviews: {
      label: "Khách Nói Gì",
      viaGoogle: "trên Google",
      googleReview: "Đánh giá Google",
      tripadvisorReview: "Tripadvisor",
    },
    footer: {
      openDaily: "Mở cửa mỗi ngày 11:00 - 22:00",
      findUs: "Tìm chúng tôi",
      mapTitle: "Bản đồ vị trí Ovenista",
      contactTitle: "Liên Hệ",
      addressTitle: "Địa Chỉ",
      socialTitle: "Mạng Xã Hội & Hotline",
      copyright: "© 2026 Ovenista. Thủ công cho những buổi tối quây quần.",
    },
    pages: {
      home: {
        title: "Ovenista - Ra Lò Với Cả Tâm Hồn | Nhà Hàng Âu Tại TP.HCM",
        description:
          "Ovenista mang trải nghiệm ẩm thực châu Âu đến TP.HCM với pizza nướng lò, pasta thủ công và các món hun khói chậm.",
      },
      menu: {
        title: "Thực Đơn",
        description:
          "Khám phá thực đơn Ovenista với pizza nướng lò, pasta thủ công, món hun khói chậm và nhiều lựa chọn khác.",
        label: "Thực Đơn",
        heading: "Vị ngon nướng lò, chi tiết thủ công, chiều sâu hun khói chậm.",
        subheading: "Xem menu giao diện trực tiếp hoặc mở bản PDF.",
        pdfCta: "Mở Menu PDF",
        pdfNote: "Bản PDF sẽ mở ở tab mới.",
        notes: [
          "Tất cả pasta có thể đổi sang spaghetti không gluten, trừ lasagna.",
          "Giá chưa bao gồm phí phục vụ và VAT.",
        ],
        reserveCta: "Liên Hệ",
      },
      about: {
        title: "Câu Chuyện Của Chúng Tôi",
        description: "Tìm hiểu về tinh thần thủ công, ngọn lửa và triết lý ẩm thực châu Âu của Ovenista.",
        label: "Câu Chuyện",
        heading: "Một không gian được dựng nên từ sự kiên nhẫn, ngọn lửa và lòng hiếu khách chân thành.",
      },
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];
  return segment && isLocale(segment) ? segment : null;
}

export function removeLocaleFromPathname(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);

  if (!locale) {
    return pathname || "/";
  }

  const nextPath = pathname.slice(locale.length + 1);
  return nextPath || "/";
}

export function localizeHref(href: string, locale: Locale | null): string {
  if (!locale || locale === defaultLocale || !href.startsWith("/")) {
    return href;
  }

  if (href === `/${locale}` || href.startsWith(`/${locale}/`)) {
    return href;
  }

  if (/\.[a-z0-9]+($|[?#])/i.test(href)) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const basePath = removeLocaleFromPathname(pathname);
  return localizeHref(basePath, targetLocale);
}
