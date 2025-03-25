export const ProductsService = {
  getProductByCategory: async (categorySlug: string, productSlug: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${categorySlug}/${productSlug}`
      );
      return await res.json();
    } catch (error) {
      throw new Error(`Error in get product by category: ${error}`);
    }
  },
};
