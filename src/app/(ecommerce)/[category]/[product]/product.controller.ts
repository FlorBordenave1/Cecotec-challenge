import { ProductsService } from "@/services/productsService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export interface ProductType {
  id: number;
  name: string;
  pricing: Pricing;
  slug: string;
  upc: string;
  mainImage: string;
  shippingShortDescription: string;
  sold: number;
}

export interface Pricing {
  currency: string;
  price: string;
  discountRate: string;
  isInStock: number;
}
export const useProductController = () => {
  const { product: productSlug, category } = useParams<{
    category: string;
    product: string;
  }>();
  const [product, setProduct] = useState<ProductType>();
  const hasProductStock = product?.pricing?.isInStock;

  const getProductByCategory = async () => {
    const productByCategory = await ProductsService.getProductByCategory(
      category,
      productSlug
    );

    setProduct(productByCategory);
  };

  useEffect(() => {
    getProductByCategory();
  }, []);

  return {
    product,
    category,
    hasProductStock,
  };
};
