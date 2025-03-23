"use client";
import Image from "next/image";

import { Typography } from "@/components/ui/typography";
import styles from "./styles.module.css";
import { GetCategoryBySlugResponse } from "@/services/types";

interface ProductCardProps {
  data: GetCategoryBySlugResponse;
}
export const ProductCard = ({ data }: ProductCardProps) => {
  console.log("data", data);

  const esproductocondescuento = parseFloat(data?.pricing?.discountRate) > 0.0;

  const convertToPercentage = (value: string) => {
    const number = parseFloat(value);

    return `${(number * 100).toFixed(2)}%`;
  };

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
        {esproductocondescuento && (
          <div className="flex flex-row">
            <p
              className={
                esproductocondescuento ? "line-through text-gray-500" : ""
              }
            >
              {`${data.pricing.price} € `}
            </p>
            <p className={esproductocondescuento ? " text-gray-500" : ""}>
              {`(${convertToPercentage(data.pricing.discountRate)})`}
            </p>
          </div>
        )}

        {data.shippingShortDescription?.length > 0 && (
          <p>{`Envío en 24-72 horas`}</p>
        )}
        {data?.pricing?.isInStock < 10 && (
          <p>
            {`quedan menos de  ${
              data?.pricing?.isInStock + 1
            } productos en stock`}
          </p>
        )}
      </div>
    </div>
  );
};
