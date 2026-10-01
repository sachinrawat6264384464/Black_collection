export type Product = {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  ratingCount: number;
  images: string[];
  description: string;
  sizes?: string[];
  colors?: string[];
  featured?: boolean;
  isNew?: boolean;
  inStock: boolean;
  tags?: string[];
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
  itemCount: number;
  description: string;
};

export type Brand = {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  image: string;
  productCount: number;
  tagline: string;
};

export type FilterState = {
  category: string;
  brand: string;
  priceRange: string;
  rating: number;
  sortBy: "featured" | "newest" | "price-asc" | "price-desc" | "rating";
  searchQuery: string;
};
