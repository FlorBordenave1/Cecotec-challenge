import { baseUrl } from "./constants";

export const ProductsService = {
  getProductByCategory: async (categorySlug: string, productSlug: string) => {
    const res = await fetch(`${baseUrl}/${categorySlug}/${productSlug}`);

    return await res.json();
  },
};
