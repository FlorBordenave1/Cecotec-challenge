import { GetCategoriesResponse, GetCategoryBySlugResponse } from "./types";

type TCategoriesService = {
  getCategories: () => Promise<GetCategoriesResponse[]>;
  getCategoryBySlug: (
    categorySlug: string
  ) => Promise<GetCategoryBySlugResponse[]>;
};

const baseUrl = "https://67dbfb6d1fd9e43fe476b875.mockapi.io/api/v1";

export const CategoriesService: TCategoriesService = {
  getCategories: async (): Promise<GetCategoriesResponse[]> => {
    const res = await fetch(`${baseUrl}/categories`);

    return res.json();
  },

  getCategoryBySlug: async (
    categorySlug: string
  ): Promise<GetCategoryBySlugResponse[]> => {
    const res = await fetch(`${baseUrl}/${categorySlug}`);

    return res.json();
  },
};
