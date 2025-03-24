"use client";
import Image from "next/image";

import { Typography } from "@/components/ui/typography";
import styles from "./styles.module.css";
import { GetCategoryBySlugResponse } from "@/services/types";
import { convertToPercentage } from "@/lib/convertToPercentage";

interface ProductCardProps {
  data: GetCategoryBySlugResponse;
}
export const ProductCard = ({ data }: ProductCardProps) => {
  const discountedProduct = parseFloat(data?.pricing?.discountRate) > 0.0;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className="relative w-full h-full">
          <Image
            priority
            src={data.mainImage}
            alt="Logo Cecotec"
            layout="fill"
            objectFit="contain"
            className="absolute inset-0"
          />
        </div>

        <Typography
          variant="body"
          label={`${data.name}`}
          className="font-bold"
        />

        <Typography
          variant="body"
          label={`${data.pricing.price} €`}
          className="font-bold"
        />
        {discountedProduct && (
          <div className="flex flex-row">
            <p className={discountedProduct ? " text-gray-500" : ""}>
              {`(${convertToPercentage(data.pricing.discountRate)})`}
            </p>
          </div>
        )}

        {data.shippingShortDescription?.length > 0 && (
          <p>{`Envío en 24-72 horas`}</p>
        )}
        {data?.pricing?.isInStock < 10 && (
          <p>
            {`quedan menos de ${data?.pricing?.isInStock} productos en stock`}
          </p>
        )}
      </div>
    </div>
  );
};
