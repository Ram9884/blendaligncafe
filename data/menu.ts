export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number | [number, number]; // single price or [min, max] range
  category: MenuCategory;
  featured?: boolean;
  featuredImage?: string;
}

export type MenuCategory =
  | 'Mojitos'
  | 'Milkshakes'
  | 'Coffee'
  | 'Juices'
  | 'Maggi'
  | 'Sandwiches'
  | 'Omelettes'
  | 'Pasta'
  | 'Momos'
  | 'Desserts';

export const ALL_CATEGORIES: MenuCategory[] = [
  'Mojitos',
  'Milkshakes',
  'Coffee',
  'Juices',
  'Maggi',
  'Sandwiches',
  'Omelettes',
  'Pasta',
  'Momos',
  'Desserts',
];

export const MENU_ITEMS: MenuItem[] = [
  // ─── Mojitos ─────────────────────────────────────────────────
  { id: 'moj-mint', name: 'Mint Mojito', description: 'Classic fresh mint cooler', price: 49, category: 'Mojitos' },
  { id: 'moj-blue-curacao', name: 'Blue Curacao Mojito', description: 'Vibrant blue citrus cooler', price: [49, 59], category: 'Mojitos' },
  { id: 'moj-green-apple', name: 'Green Apple Mojito', description: 'Tangy apple twist', price: 59, category: 'Mojitos' },
  { id: 'moj-strawberry', name: 'Strawberry Mojito', description: 'Fresh strawberry cooler', price: 59, category: 'Mojitos', featured: true },
  { id: 'moj-watermelon', name: 'Watermelon Mojito', description: 'Summery watermelon refresher', price: 59, category: 'Mojitos' },
  { id: 'moj-kiwi', name: 'Kiwi Mojito', description: 'Tropical kiwi cooler', price: 59, category: 'Mojitos' },
  { id: 'moj-blackcurrant', name: 'Blackcurrant Mojito', description: 'Rich dark berry cooler', price: 59, category: 'Mojitos' },
  { id: 'moj-paneer-mint', name: 'Paneer Momos + Mint Mojito', description: 'Paneer momos with mint mojito combo', price: 149, category: 'Mojitos' },
  { id: 'moj-paneer-blue', name: 'Paneer Momos + Blue Curacao Mojito', description: 'Combo deal', price: 149, category: 'Mojitos' },
  { id: 'moj-veg-mint', name: 'Veg Momos + Mint Mojito', description: 'Veg momos with mint mojito combo', price: 119, category: 'Mojitos' },
  { id: 'moj-veg-apple', name: 'Veg Momos + Green Apple Mojito', description: 'Combo deal', price: 119, category: 'Mojitos' },
  { id: 'moj-veg-blue', name: 'Veg Momos + Blue Curacao Mojito', description: 'Combo deal', price: 119, category: 'Mojitos' },
  { id: 'moj-chk-mint', name: 'Chicken Momos + Mint Mojito', description: 'Chicken momos with mint mojito combo', price: 129, category: 'Mojitos' },
  { id: 'moj-chk-apple', name: 'Chicken Momos + Green Apple Mojito', description: 'Combo deal', price: 129, category: 'Mojitos' },
  { id: 'moj-chk-blue', name: 'Chicken Momos + Blue Curacao Mojito', description: 'Combo deal', price: 129, category: 'Mojitos' },

  // ─── Milkshakes ───────────────────────────────────────────────
  { id: 'milk-red-banana', name: 'Red Banana Milkshake', description: 'Thick creamy red banana shake', price: 99, category: 'Milkshakes' },
  { id: 'milk-strawberry', name: 'Strawberry Milkshake', description: 'Fresh strawberry blended shake', price: 99, category: 'Milkshakes' },
  { id: 'milk-vanilla', name: 'Vanilla Milkshake', description: 'Classic smooth vanilla shake', price: 99, category: 'Milkshakes' },
  { id: 'milk-mango', name: 'Mango Milkshake', description: 'Tropical alphonso mango shake', price: 99, category: 'Milkshakes' },
  { id: 'milk-blackcurrant', name: 'Blackcurrant Milkshake', description: 'Rich dark berry milkshake', price: 99, category: 'Milkshakes' },
  { id: 'milk-oreo', name: 'Oreo Milkshake', description: 'Crushed Oreo cookies blended to perfection', price: 109, category: 'Milkshakes', featured: true, featuredImage: '/milkshake.png' },
  { id: 'milk-kitkat', name: 'KitKat Milkshake', description: 'KitKat chocolate crunch shake', price: 119, category: 'Milkshakes' },
  { id: 'milk-chocolate', name: 'Chocolate Milkshake', description: 'Classic rich chocolate shake', price: 89, category: 'Milkshakes' },
  { id: 'milk-brownie', name: 'Brownie Milkshake', description: 'Indulgent brownie blended shake', price: 139, category: 'Milkshakes', featured: true },
  { id: 'milk-dry-fruits', name: 'Dry Fruits Milkshake', description: 'Nutritious mix of premium dry fruits', price: 179, category: 'Milkshakes' },

  // ─── Coffee ───────────────────────────────────────────────────
  { id: 'cof-classic', name: 'Classic Cold Coffee', description: 'Chilled blended coffee with a perfect roast balance', price: 99, category: 'Coffee', featured: true, featuredImage: '/cold-coffee.png' },
  { id: 'cof-chocolate', name: 'Chocolate Cold Coffee', description: 'Coffee meets rich chocolate', price: 109, category: 'Coffee', featured: true },
  { id: 'cof-oreo', name: 'Oreo Cold Coffee', description: 'Oreo cookies blended into iced coffee', price: 119, category: 'Coffee' },
  { id: 'cof-brownie', name: 'Brownie Cold Coffee', description: 'Brownie infused iced coffee indulgence', price: 139, category: 'Coffee' },

  // ─── Juices / Coolers ─────────────────────────────────────────
  { id: 'jc-sweet-lime-soda', name: 'Sweet Lime Soda', description: 'Fizzy sweet lime refresher', price: 49, category: 'Juices' },
  { id: 'jc-salt-lime-soda', name: 'Salt Lime Soda', description: 'Tangy salted lime fizz', price: 49, category: 'Juices' },
  { id: 'jc-apple', name: 'Apple Juice', description: 'Fresh pressed apple juice', price: 99, category: 'Juices' },
  { id: 'jc-carrot', name: 'Carrot Juice', description: 'Fresh carrot juice', price: 59, category: 'Juices' },
  { id: 'jc-watermelon', name: 'Watermelon Juice', description: 'Cold-pressed watermelon', price: 59, category: 'Juices' },
  { id: 'jc-pomegranate', name: 'Pomegranate Juice', description: 'Fresh pomegranate juice', price: 79, category: 'Juices' },
  { id: 'jc-beetroot', name: 'Beetroot Juice', description: 'Earthy fresh beetroot juice', price: 69, category: 'Juices' },
  { id: 'jc-mosambi', name: 'Mosambi Juice', description: 'Sweet lime (mosambi) fresh juice', price: 59, category: 'Juices' },
  { id: 'jc-orange', name: 'Orange Juice', description: 'Freshly squeezed orange juice', price: 59, category: 'Juices' },
  { id: 'jc-carrot-beetroot', name: 'Carrot Red Beetroot Juice', description: 'Power-packed health blend', price: 79, category: 'Juices' },
  { id: 'jc-special-lemon', name: 'Special Lemon Juice', description: 'House special lemon blend', price: 49, category: 'Juices' },
  { id: 'jc-nannari', name: 'Nannari Sarbath', description: 'Traditional Indian herbal cooler', price: 49, category: 'Juices' },
  { id: 'jc-rose-sharbat', name: 'Rose Sharbat', description: 'Floral rose cooler', price: 59, category: 'Juices' },
  { id: 'jc-paal-sarbath', name: 'Paal Sarbath', description: 'Creamy milk cooler', price: 89, category: 'Juices' },
  { id: 'jc-sweet-lassi', name: 'Sweet Lassi', description: 'Chilled sweet yogurt lassi', price: 59, category: 'Juices' },
  { id: 'jc-rose-lassi', name: 'Rose Lassi', description: 'Rose flavoured yogurt lassi', price: 79, category: 'Juices' },
  { id: 'jc-choc-lassi', name: 'Chocolate Lassi', description: 'Chocolate blended yogurt lassi', price: 89, category: 'Juices' },
  { id: 'jc-buttermilk', name: 'Buttermilk', description: 'Spiced traditional chaas', price: 49, category: 'Juices' },
  { id: 'jc-muskmelon', name: 'Muskmelon Juice', description: 'Fresh muskmelon cooler', price: 49, category: 'Juices' },
  { id: 'jc-nuts-lassi', name: 'Nuts Lassi', description: 'Rich lassi with mixed nuts', price: 89, category: 'Juices' },

  // ─── Maggi ────────────────────────────────────────────────────
  { id: 'mag-plain', name: 'Plain Maggi', description: 'Classic Maggi noodles', price: 50, category: 'Maggi' },
  { id: 'mag-veg', name: 'Vegetable Maggi', description: 'Maggi with mixed vegetables', price: 60, category: 'Maggi' },
  { id: 'mag-corn', name: 'Corn Maggi', description: 'Maggi with sweet corn', price: 89, category: 'Maggi' },
  { id: 'mag-egg', name: 'Egg Maggi', description: 'Maggi with one egg', price: 69, category: 'Maggi' },
  { id: 'mag-egg2', name: 'Egg Maggi (2 Eggs)', description: 'Maggi with double eggs', price: 79, category: 'Maggi' },

  // ─── Sandwiches ───────────────────────────────────────────────
  { id: 'sand-veg-cheese', name: 'Veg Cheese Sandwich', description: 'Grilled veg with melted cheese', price: 84, category: 'Sandwiches' },
  { id: 'sand-lays-cheese', name: 'Lays Cheese Sandwich', description: 'Crunchy Lays with melted cheese', price: 99, category: 'Sandwiches' },
  { id: 'sand-mushroom', name: 'Mushroom Cheese Sandwich', description: 'Sautéed mushrooms with cheese', price: 109, category: 'Sandwiches' },
  { id: 'sand-corn', name: 'Corn Cheese Sandwich', description: 'Sweet corn with melted cheese', price: 99, category: 'Sandwiches' },
  { id: 'sand-paneer', name: 'Paneer Cheese Sandwich', description: 'Spiced paneer with cheese', price: 109, category: 'Sandwiches' },

  // ─── Omelettes / Breakfast ────────────────────────────────────
  { id: 'egg-bread-omelette', name: 'Bread Omelette', description: 'Classic bread with omelette', price: 69, category: 'Omelettes' },
  { id: 'egg-special-bread', name: 'Special Bread Omelette', description: 'Loaded special bread omelette', price: 89, category: 'Omelettes' },
  { id: 'egg-cheese-slice', name: 'Cheese Slice', description: 'Single cheese slice add-on', price: 20, category: 'Omelettes' },
  { id: 'egg-loaded', name: 'Egg Loaded Bread Omelette', description: 'Extra loaded egg bread omelette', price: 99, category: 'Omelettes' },

  // ─── Pasta ────────────────────────────────────────────────────
  { id: 'past-mushroom', name: 'Mushroom Penne', description: 'Penne pasta with sautéed mushrooms', price: 99, category: 'Pasta', featured: true },
  { id: 'past-masala', name: 'Masala Penne', description: 'Spiced Indian-style penne pasta', price: 99, category: 'Pasta' },
  { id: 'past-macaroni', name: 'Macaroni Corn Cheese', description: 'Macaroni with corn and melted cheese', price: 99, category: 'Pasta' },
  { id: 'past-tomato', name: 'Tomato Cheesy Twist', description: 'Tangy tomato pasta with cheese twist', price: 99, category: 'Pasta' },

  // ─── Momos ────────────────────────────────────────────────────
  { id: 'mom-veg-steam', name: 'Veg Steamed Momos', description: 'Classic steamed vegetable dumplings', price: 79, category: 'Momos', featured: true },
  { id: 'mom-chk-steam', name: 'Chicken Steamed Momos', description: 'Juicy chicken steamed dumplings', price: 89, category: 'Momos', featured: true },
  { id: 'mom-pnr-steam', name: 'Paneer Steamed Momos', description: 'Soft paneer filled dumplings', price: 99, category: 'Momos', featured: true, featuredImage: '/momos.png' },
  { id: 'mom-pnr-mint', name: 'Paneer Momos + Mint Mojito', description: 'Steamed paneer momos with mint mojito', price: 149, category: 'Momos' },
  { id: 'mom-pnr-blue', name: 'Paneer Momos + Blue Curacao Mojito', description: 'Steamed paneer momos with blue curacao', price: 149, category: 'Momos' },
  { id: 'mom-veg-mint', name: 'Veg Momos + Mint Mojito', description: 'Steamed veg momos with mint mojito', price: 119, category: 'Momos' },
  { id: 'mom-veg-apple', name: 'Veg Momos + Green Apple Mojito', description: 'Steamed veg momos with green apple', price: 119, category: 'Momos' },
  { id: 'mom-veg-blue', name: 'Veg Momos + Blue Curacao Mojito', description: 'Steamed veg momos with blue curacao', price: 119, category: 'Momos' },
  { id: 'mom-chk-mint', name: 'Chicken Momos + Mint Mojito', description: 'Chicken momos with mint mojito', price: 129, category: 'Momos' },
  { id: 'mom-chk-apple', name: 'Chicken Momos + Green Apple Mojito', description: 'Chicken momos with green apple mojito', price: 129, category: 'Momos' },
  { id: 'mom-chk-blue', name: 'Chicken Momos + Blue Curacao Mojito', description: 'Chicken momos with blue curacao mojito', price: 129, category: 'Momos' },
  { id: 'mom-chutney', name: 'Extra Momos Chutney', description: 'Extra side of momos chutney', price: 20, category: 'Momos' },

  // ─── Desserts ─────────────────────────────────────────────────
  { id: 'des-brownie-bliss', name: 'Brownie Molten Bliss', description: 'Warm gooey brownie with molten centre', price: 89, category: 'Desserts', featured: true },
  { id: 'des-lava-cake', name: 'Chocolate Lava Cake', description: 'Decadent warm chocolate lava cake', price: 191, category: 'Desserts', featured: true, featuredImage: '/lava-cake.png' },
  { id: 'des-dry-fruits-shake', name: 'Dry Fruits Milkshake', description: 'Premium dry fruits milkshake', price: 179, category: 'Desserts' },
];

export const FEATURED_ITEMS = MENU_ITEMS.filter((item) => item.featured);

export const CATEGORY_FILTER_ITEMS: MenuCategory[] = [
  'Mojitos',
  'Milkshakes',
  'Coffee',
  'Pasta',
  'Sandwiches',
  'Momos',
];

export function formatPrice(price: number | [number, number]): string {
  if (Array.isArray(price)) {
    return `₹${price[0]}–${price[1]}`;
  }
  return `₹${price}`;
}

export function getItemsByCategory(category: MenuCategory): MenuItem[] {
  return MENU_ITEMS.filter((item) => item.category === category);
}
