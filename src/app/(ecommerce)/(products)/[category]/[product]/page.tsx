"use client";

import Image from "next/image";
import { EmptyState } from "@/components/empty-state";
import styles from "./product.module.css";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/badge";
import { useProductController } from "./product.controller";
import { ProductSkeleton } from "./components/product-skeleton";
import { formatPrice } from "@/lib/formatPrice";

const Product = () => {
  const {
    product,
    isLoadingProduct,
    category,
    hasProductStock,
    checkoutContext,
  } = useProductController();

  if (isLoadingProduct) {
    return <ProductSkeleton />;
  }
  return (
    <div className={styles.productContainer}>
      {!product ? (
        <EmptyState
          label="Ocurrio un error al obtener los datos del producto"
          buttonLabel="Volver a productos"
          routeToNavigate={`/${category}`}
        />
      ) : (
        <div className={styles.productContent}>
          <div className={styles.imageContainer}>
            {product?.mainImage && (
              <Image
                priority
                src={product.mainImage}
                alt={product.name}
                className={styles.image}
                width={700}
                height={700}
              />
            )}
          </div>

          <div className={styles.productInfoContainer}>
            <Typography
              label={`Referencia: ${product?.upc}`}
              variant="body-small"
            />

            <Typography
              label={product?.name || ""}
              variant="h2"
              className="font-extrabold text-left"
            />

            <div className={styles.infoContainer}>
              {hasProductStock && (
                <Typography label="En stock" variant="body-small" />
              )}

              {product?.shippingShortDescription && (
                <Badge label="¡Envío en 24-48h!" />
              )}
            </div>

            <div className={styles.priceContainer}>
              <Typography
                variant="h1"
                label={formatPrice(product?.pricing?.price)}
                className={styles.price}
              />
              <Typography variant="body-small" label={`IVA incluido`} />
            </div>

            <Button
              variant={"primary"}
              className={styles.button}
              onClick={() => product && checkoutContext?.addItem(product)}
            >
              Comprar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
