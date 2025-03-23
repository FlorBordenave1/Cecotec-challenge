import { baseUrl } from "./constants";
import { GetCategoriesResponse, GetCategoryBySlugResponse } from "./types";

type TCategoriesService = {
  getCategories: () => Promise<GetCategoriesResponse[]>;
  getCategoryBySlug: (
    categorySlug: string
  ) => Promise<GetCategoryBySlugResponse[]>;
};

export const CategoriesService: TCategoriesService = {
  getCategories: async (): Promise<GetCategoriesResponse[]> => {
    const res = await fetch(`${baseUrl}/categories`);

    return res.json();
  },

  getCategoryBySlug: async (
    categorySlug: string
  ): Promise<GetCategoryBySlugResponse[]> => {
    try {
      const res = await fetch(`${baseUrl}/${categorySlug}`);

      const productsByCategory = await res.json();

      if (!Array.isArray(productsByCategory)) return [];

      return productsByCategory;
    } catch (error) {
      throw new Error("Ocurrió un error");
    }
  },
};
