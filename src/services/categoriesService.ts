import { GetCategoriesResponse, GetCategoryBySlugResponse } from "./types";

type TCategoriesService = {
  getCategories: () => Promise<GetCategoriesResponse[]>;
  getCategoryBySlug: (
    categorySlug: string
  ) => Promise<GetCategoryBySlugResponse[]>;
};

export const CategoriesService: TCategoriesService = {
  getCategories: async (): Promise<GetCategoriesResponse[]> => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`);

      return res.json();
    } catch (error) {
      throw new Error(`Error in get categories: ${error}`);
    }
  },

  getCategoryBySlug: async (
    categorySlug: string
  ): Promise<GetCategoryBySlugResponse[]> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${categorySlug}`
      );
      const productsByCategory = await res.json();

      if (!Array.isArray(productsByCategory)) return [];

      return productsByCategory;
    } catch (error) {
      throw new Error(`Error in get category by slug: ${error}`);
    }
  },
};
