export type GetCategoryBySlugResponse = {
  id: number;
  name: string;
  pricing: Pricing;
  slug: string;
  upc: string;
  mainImage: string;
  shippingShortDescription: string;
  sold: number;
};

export type Pricing = {
  currency: string;
  price: string;
  discountRate: string;
  isInStock: number;
};

export type GetCategoriesResponse = {
  name: string;
  slug: string;
  image: string;
};
