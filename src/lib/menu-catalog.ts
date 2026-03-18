import type { Locale } from "@/lib/i18n";
import type { MenuCategory } from "@/types";

type CategoryId =
  | "salad"
  | "pizza"
  | "appetizer"
  | "meat-seafood-risotto"
  | "kid"
  | "pasta"
  | "dessert";

type RawMenuItem = {
  categoryId: CategoryId;
  name: string;
  description: string | null;
  price: number;
};

type LocaleOverride = Partial<Record<Locale, string>>;

const categoryMeta: Record<
  CategoryId,
  {
    sheetName: string;
    label: Record<Locale, string>;
    intro: Record<Locale, string>;
    image: string;
  }
> = {
  salad: {
    sheetName: "SALAD",
    label: { en: "Salad", vi: "Salad" },
    intro: {
      en: "Fresh greens, fruit, and bright dressings from the spreadsheet menu.",
      vi: "Các món salad tươi với rau xanh, trái cây và phần sốt sáng vị từ menu gốc.",
    },
    image: "/images/interior/ambiance-01.svg",
  },
  pizza: {
    sheetName: "PIZZA SIZE 30CM",
    label: { en: "Pizza 30cm", vi: "Pizza 30cm" },
    intro: {
      en: "Wood-fired pizzas in the current 30cm menu lineup.",
      vi: "Dòng pizza nướng lò 30cm đang có trên menu hiện tại.",
    },
    image: "/images/food/pizza-01.svg",
  },
  appetizer: {
    sheetName: "APPERTIZER",
    label: { en: "Appetizers", vi: "Khai Vị" },
    intro: {
      en: "Cold cuts, seafood starters, and opening plates for the table.",
      vi: "Cold cut, hải sản khai vị và những món mở màn dành cho cả bàn.",
    },
    image: "/images/food/chef-selection.svg",
  },
  "meat-seafood-risotto": {
    sheetName: "MEAT . SEAFOOD . RISOTTO",
    label: { en: "Meat, Seafood & Risotto", vi: "Thịt, Hải Sản & Risotto" },
    intro: {
      en: "Slow-cooked meats, seafood mains, and risotto dishes from the XLSX menu.",
      vi: "Các món thịt nấu chậm, hải sản và risotto lấy trực tiếp từ file XLSX menu.",
    },
    image: "/images/food/seabass.jpg",
  },
  kid: {
    sheetName: "KID",
    label: { en: "Kids", vi: "Trẻ Em" },
    intro: {
      en: "Simple plates for younger guests.",
      vi: "Những lựa chọn đơn giản dành cho khách nhỏ tuổi.",
    },
    image: "/images/food/close-up-pizza.jpg",
  },
  pasta: {
    sheetName: "PASTA",
    label: { en: "Pasta", vi: "Pasta" },
    intro: {
      en: "House pasta, gnocchi, and baked classics from the current menu sheet.",
      vi: "Pasta nhà làm, gnocchi và các món đút lò từ menu hiện tại.",
    },
    image: "/images/food/pasta-01.svg",
  },
  dessert: {
    sheetName: "DESERT",
    label: { en: "Desserts", vi: "Tráng Miệng" },
    intro: {
      en: "A short dessert finish from the spreadsheet menu.",
      vi: "Phần kết nhẹ nhàng với các món tráng miệng từ bảng menu.",
    },
    image: "/images/food/chef-selection.svg",
  },
};

const categoryOrder: CategoryId[] = [
  "salad",
  "pizza",
  "appetizer",
  "meat-seafood-risotto",
  "kid",
  "pasta",
  "dessert",
];

const rawMenuItems: RawMenuItem[] = [
  { categoryId: "salad", name: "ROCKET SALAD", price: 131, description: "Rau rocket, cà chua bi đỏ, sốt balsamic, parmesan lát. (Rocket, Cherry tomatoes, balsamic, parmesan)" },
  { categoryId: "salad", name: "BURRATA FRUITY SALAD", price: 250, description: "Fruits, basil, olive oil, lá basil, mật ong chanh – ăn kèm burrata . (fruits  basil, Olive oil, lemon honey  - burrata)" },
  { categoryId: "salad", name: "CAESAR SALAD", price: 185, description: "Romaine, sốt Caesar, cà chua bi sấy, bánh mì crouton, parmesan bào, trứng nghiền. (Romaine salad, ceasar sauce, cherry tomatoes, crouton, parmesan, mashed egg)" },
  { categoryId: "salad", name: "PRAWN SALAD", price: 181, description: "Rocket, radicchio, romaine, xoài, bơ, táo – sốt chanh mật ong, tôm xào rum. (Rocket, radichio, romain, fruits, lemon honey mustard - prawn rum wine)" },
  { categoryId: "pizza", name: "MARGHERITA", price: 212, description: "Tomato sauce, mozzarella, parmesan, basil, olive oil." },
  { categoryId: "pizza", name: "CAPRICCIOSA", price: 222, description: "Tomato sauce, cooked ham, button mushroom, artichoke, black olive, mozzarella." },
  { categoryId: "pizza", name: "PARMA BURRATA", price: 355, description: "Tomato sauce, rocket, parma ham, burrata" },
  { categoryId: "pizza", name: "CARNI", price: 311, description: "Tomato sauce, salami Milano, cooked ham, sausage, chicken, mozzarella." },
  { categoryId: "pizza", name: "4 CHEESE", price: 306, description: "Whipping cream, mozzarella, parmesan, gorgonzola, provolone. Served with honey." },
  { categoryId: "pizza", name: "CARBONARA PIZZA", price: 225, description: "Whipping cream, guanciale, carbonara sauce, mozzarella, parmesan." },
  { categoryId: "pizza", name: "STRACCIATELLA PIZZA", price: 206, description: "Tomato sauce, extra virgin olive oil, basil, mozzarella, stracciatella, cashew nut." },
  { categoryId: "pizza", name: "NAPOLETANA", price: 257, description: "Napoletana sauce, anchovy, oregano, mozzarella, garlic, chili." },
  { categoryId: "pizza", name: "SEAFOOD PIZZA", price: 278, description: "Pesto sauce, sea bass, prawn, squid, clams, mozzarella, basil, chili flakes." },
  { categoryId: "pizza", name: "SALMON PIZZA", price: 342, description: "Whipping cream, mozzarella, button mushroom, provolone, truffle, rocket, smoked salmon, ricotta." },
  { categoryId: "pizza", name: "STEAK PIZZA", price: 289, description: "Olive oil, rocket, steak, onion, chili flakes, parmesan." },
  { categoryId: "pizza", name: "HAWAII PIZZA", price: 202, description: "Tomato sauce, cooked ham, button mushroom, pineapple, mozzarella." },
  { categoryId: "appetizer", name: "CARPACCIO", price: 241, description: "Thịt bò sống thái mỏng, muối tiêu, rocket trộn balsamic, cà chua bi, parmesan. (Sliced beef tenderloin, rocket, sliced parmesan, cherry tomatoes)" },
  { categoryId: "appetizer", name: "VITELLO TONATO", price: 264, description: "Thăn bò nấu chậm, sốt cá ngừ, rocket, nụ bạch hoa. (Sous vide beef, tuna sauce, rocket, capper)" },
  { categoryId: "appetizer", name: "SEAFOOD FRIES", price: 231, description: "Tôm mực chiên giòn, sốt mayonnaise chanh vàng & thì là. (Prawn, squid, vegetable fries, mayonnaise dill)" },
  { categoryId: "appetizer", name: "GAMBERI, TUNA CATALAN", price: 207, description: "Tôm & cá ngừ áp chảo, ướp chua, củ thì là, cà chua sấy, rocket, balsamic. (Prawn, tuna pan sear, fennel, sun-dried tomato, rocket, balsamic cream)" },
  { categoryId: "appetizer", name: "COLD CUT M", price: 433, description: "Mortadella, parma ham, salami, trái cây, phô mai và hạt. (Mortadella, parma ham, salami milano, fruits, cheese and nuts)" },
  { categoryId: "appetizer", name: "COLD CUT L", price: 780, description: "Mortadella, parma ham, salami, trái cây, phô mai và hạt. (Mortadella, parma ham, salami milano, fruits, cheese and nuts)" },
  { categoryId: "meat-seafood-risotto", name: "BEEF BRISKET GRAVY SAUCE", price: 185, description: "Ức bò nấu chậm 28 giờ, sốt tủy bò, mù tạt vàng. (Beef brisket, gravy sauce, yellow mustard)" },
  { categoryId: "meat-seafood-risotto", name: "PORCETTA", price: 182, description: "Ba chỉ heo cuộn thảo mộc, ăn kèm mù tạt cay. (Porcetta, spicy mustard)" },
  { categoryId: "meat-seafood-risotto", name: "RISOTTO FUNGHI", price: 221, description: "Risotto xúc xích, nấm mỡ, truffle, parmesan. (Risotto, sausage, truffle, parmesan, butter)" },
  { categoryId: "meat-seafood-risotto", name: "SEA BASS", price: 278, description: "Cá chẽm áp chảo, sốt Worcestershire, ăn kèm cải bó xôi xào tỏi. (Pan-seared sea bass, Worcestershire sauce, spinach, garlic, chili)" },
  { categoryId: "meat-seafood-risotto", name: "BLACK RISOTTO SEAFOOD", price: 203, description: "Risotto mực đen, tôm, mực, cà chua bi sấy, trứng cá. (Black squid ink risotto, prawn, squid, sun-dried tomato, smoked caviar)" },
  { categoryId: "meat-seafood-risotto", name: "GRILL SMOKED CHICKEN", price: 165, description: "Gà xông khói nấu chậm, ăn với sốt chanh mật ong mù tạt. (Slow-smoked chicken, glazed with honey-lemon mustard sauce)" },
  { categoryId: "kid", name: "FRENCH FRIES MAYO", price: 72, description: "Khoai tây chiên, sốt mayonnaise. (French fries, mayonnaise)" },
  { categoryId: "kid", name: "SPAGHETTI BUTTER", price: 113, description: "Mì Ý sốt bơ phô mai. (Spaghetti, butter, parmesan)" },
  { categoryId: "kid", name: "RAINBOW SALAD", price: 177, description: "Trái cây các loại kèm mật ong. (Fruits, honey)" },
  { categoryId: "pasta", name: "CARBONARA SPAGHETTI", price: 190, description: "Mì Ý sốt trứng, guanciale, parmesan. (Spaghetti, guanciale, egg yolk, parmesan, pecorino)" },
  { categoryId: "pasta", name: "SPAGHETTI VONGOLE", price: 136, description: "Mì sò, vị cay nhẹ. (Spaghetti, clams)" },
  { categoryId: "pasta", name: "GNOCCHI PESTO", price: 242, description: "Gnocchi, sốt basil pesto, tỏi ớt, cà chua bi, tôm áp chảo. (Gnocchi, pesto sauce, garlic, chili, shrimp, cherry tomatoes)" },
  { categoryId: "pasta", name: "ALIO OLIO PRAWN", price: 212, description: "Mì tỏi ớt, tôm, parsley. (Spaghetti, prawn, chili oil, garlic)" },
  { categoryId: "pasta", name: "BLACK TAGLIATELLE", price: 306, description: "Mì mực đen, sốt bisque cà chua, tôm mực, topping trứng cá. (Squid ink tagliatelle, prawn, squid, caviar)" },
  { categoryId: "pasta", name: "TAGLIATELLE ALLA NORCINE", price: 226, description: "Sốt nấm, thịt, truffle, whipping cream. (Tagliatelle, norcine truffle sauce)" },
  { categoryId: "pasta", name: "SPAGHETTI BOLOGNESE", price: 161, description: "Sốt bò bằm truyền thống. (Spaghetti, bolognese sauce)" },
  { categoryId: "pasta", name: "PENNE PESTO", price: 217, description: "Penne, sốt pesto, tỏi ớt, tôm. (Penne, pesto sauce, garlic chili, shrimp)" },
  { categoryId: "pasta", name: "PENNE POMODORO", price: 129, description: "Sốt cà chua cay, topping stracciatella, dầu olive. (Penne, tomato sauce, stracciatella, olive oil)" },
  { categoryId: "pasta", name: "LASAGNA", price: 113, description: "Lasagna sốt bò bằm đút lò. (Lasagna, ragu)" },
  { categoryId: "dessert", name: "TIRAMISU", price: 126, description: null },
  { categoryId: "dessert", name: "PANNA COTTA", price: 90, description: null },
  { categoryId: "dessert", name: "CREAM BRULEE", price: 66, description: null },
  { categoryId: "dessert", name: "CASHEW BROWNY", price: 131, description: null },
  { categoryId: "dessert", name: "CROISSANT", price: 35, description: null },
];

const menuNameOverrides: Record<string, LocaleOverride> = {
  MARGHERITA: { vi: "Margherita" },
  CAPRICCIOSA: { vi: "Capricciosa" },
  "PARMA BURRATA": { vi: "Parma Burrata" },
  CARNI: { vi: "Carni" },
  "4 CHEESE": { vi: "Pizza 4 Loại Phô Mai" },
  "CARBONARA PIZZA": { vi: "Pizza Carbonara" },
  "STRACCIATELLA PIZZA": { vi: "Pizza Stracciatella" },
  NAPOLETANA: { vi: "Pizza Napoletana" },
  "SEAFOOD PIZZA": { vi: "Pizza Hải Sản" },
  "SALMON PIZZA": { vi: "Pizza Cá Hồi Xông Khói" },
  "STEAK PIZZA": { vi: "Pizza Bò Bít Tết" },
  "HAWAII PIZZA": { vi: "Pizza Hawaii" },
};

const menuDescriptionOverrides: Record<string, LocaleOverride> = {
  MARGHERITA: { vi: "Sốt cà chua, mozzarella, parmesan, húng quế, dầu olive." },
  CAPRICCIOSA: { vi: "Sốt cà chua, jambon chín, nấm mỡ, artichoke, olive đen, mozzarella." },
  "PARMA BURRATA": { vi: "Sốt cà chua, rocket, thịt nguội parma, burrata." },
  CARNI: { vi: "Sốt cà chua, salami Milano, jambon chín, xúc xích, gà, mozzarella." },
  "4 CHEESE": { vi: "Kem sữa, mozzarella, parmesan, gorgonzola, provolone. Dùng kèm mật ong." },
  "CARBONARA PIZZA": { vi: "Kem sữa, guanciale, sốt carbonara, mozzarella, parmesan." },
  "STRACCIATELLA PIZZA": { vi: "Sốt cà chua, dầu olive extra virgin, húng quế, mozzarella, stracciatella, hạt điều." },
  NAPOLETANA: { vi: "Sốt Napoletana, cá cơm muối, oregano, mozzarella, tỏi, ớt." },
  "SEAFOOD PIZZA": { vi: "Sốt pesto, cá chẽm, tôm, mực, nghêu, mozzarella, húng quế, ớt flakes." },
  "SALMON PIZZA": { vi: "Kem sữa, mozzarella, nấm mỡ, provolone, truffle, rocket, cá hồi xông khói, ricotta." },
  "STEAK PIZZA": { vi: "Dầu olive, rocket, bò bít tết, hành tây, ớt flakes, parmesan." },
  "HAWAII PIZZA": { vi: "Sốt cà chua, jambon chín, nấm mỡ, dứa, mozzarella." },
};

function extractDescriptions(description: string | null) {
  if (!description) {
    return { en: "", vi: "" };
  }

  const normalized = description.replace(/\s+/g, " ").trim();
  const match = normalized.match(/^(.*)\(([^()]*)\)\s*$/);

  if (!match) {
    return { en: normalized, vi: normalized };
  }

  const vi = match[1].trim().replace(/[-–]\s*$/, "").trim();
  const en = match[2].trim();

  return {
    en: en || vi,
    vi: vi || en,
  };
}

function formatPrice(price: number) {
  return `${price.toLocaleString("vi-VN")}.000 VND`;
}

function getLocalizedName(name: string, locale: Locale) {
  return menuNameOverrides[name]?.[locale] ?? name;
}

function getLocalizedDescription(name: string, locale: Locale, fallback: { en: string; vi: string }) {
  return menuDescriptionOverrides[name]?.[locale] ?? fallback[locale];
}

export function getSpreadsheetMenuCategories(locale: Locale): MenuCategory[] {
  return categoryOrder.map((categoryId) => {
    const meta = categoryMeta[categoryId];
    const items = rawMenuItems
      .filter((item) => item.categoryId === categoryId)
      .map((item) => {
        const description = extractDescriptions(item.description);

        return {
          image: meta.image,
          category: meta.label[locale],
          name: getLocalizedName(item.name, locale),
          description: getLocalizedDescription(item.name, locale, description),
          href: "/#contact",
          price: formatPrice(item.price),
        };
      });

    return {
      id: categoryId,
      label: meta.label[locale],
      intro: meta.intro[locale],
      items,
    };
  });
}
