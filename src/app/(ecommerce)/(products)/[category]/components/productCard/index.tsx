"use client";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import styles from "./product-card.module.css";
import { GetCategoryBySlugResponse } from "@/services/types";
import { convertToPercentage } from "@/lib/convertToPercentage";
import { formatPrice } from "@/lib/formatPrice";
import { calculateDiscountedPrice } from "@/lib/calculateDiscountedPrice";

type ProductCardProps = {
  data: GetCategoryBySlugResponse;
};
export const ProductCard = ({ data }: ProductCardProps) => {
  const discountedProduct = parseFloat(data?.pricing?.discountRate) > 0.0;
  const isInStock = data?.pricing?.isInStock;
  const unitLabel =
    isInStock > 1
      ? `Quedan ${isInStock} unidades`
      : `Queda ${isInStock} unidad`;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <Image
            priority
            src={data.mainImage}
            alt="Logo Cecotec"
            layout="fill"
            className={styles.image}
          />
        </div>

        <Typography
          variant="body"
          label={`${data.name}`}
          className={"text-center"}
        />

        <Typography
          variant="h4"
          label={
            discountedProduct
              ? calculateDiscountedPrice(
                  data.pricing.price,
                  data.pricing.discountRate
                )
              : formatPrice(data.pricing.price)
          }
          className={styles.price}
        />

        {discountedProduct && (
          <div className={styles.discountContainer}>
            <Typography
              label={formatPrice(data.pricing.price)}
              variant="body-small"
              className={styles.discountPrice}
            />

            <Typography
              label={`-(${convertToPercentage(data.pricing.discountRate)}%)`}
              variant="body-small"
              className={"text-cherry50"}
            />
          </div>
        )}

        {data.shippingShortDescription?.length > 0 && (
          <Typography
            label="Envío en 24-72 horas"
            variant="body-small"
            className={"text-apple50"}
          />
        )}

        {isInStock < 10 && (
          <Typography
            label={unitLabel}
            variant="body-small"
            className={styles.discount}
          />
        )}
      </div>
    </div>
  );
};
