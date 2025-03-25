import { CheckoutContext } from "@/context/Checkout";
import { ProductsService } from "@/services/productsService";
import { GetCategoryBySlugResponse } from "@/services/types";
import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";

export const useProductController = () => {
  const { product: productSlug, category } = useParams<{
    category: string;
    product: string;
  }>();
  const checkoutContext = use(CheckoutContext);

  const [product, setProduct] = useState<GetCategoryBySlugResponse>();
  const [isLoadingProduct, setIsLoadingProduct] = useState<boolean>(true);

  const hasProductStock = Boolean(product?.pricing?.isInStock);

  const getProductByCategory = async () => {
    const productByCategory = await ProductsService.getProductByCategory(
      category,
      productSlug
    );

    setProduct(productByCategory);
    setIsLoadingProduct(false);
  };

  useEffect(() => {
    getProductByCategory();
  }, []);

  return {
    category,
    checkoutContext,
    hasProductStock,
    isLoadingProduct,
    product,
  };
};
