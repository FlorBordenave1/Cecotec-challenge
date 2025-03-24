"use client";
import { Typography } from "@/components/ui/typography";
import styles from "./ItemCard.module.css";
import Image from "next/image";
import { Badge } from "@/components/badge";
import { convertToPercentage } from "@/lib/convertToPercentage";
import { AmountButton } from "@/components/amountButton";
import { calculateDiscountedPrice } from "@/lib/calculateDiscountedPrice";
import { formatPrice } from "@/lib/formatPrice";
import { TrashIcon } from "@/icons/trashIcon";
import { CartItem } from "@/context/Checkout";

type ItemCardProps = {
  data: CartItem;
  addUnit: () => void;
  removeUnit: () => void;
  removeItem: () => void;
};

export const ItemCard = ({
  data,
  addUnit,
  removeUnit,
  removeItem,
}: ItemCardProps) => {
  const discountedProduct = parseFloat(data?.pricing?.discountRate) > 0.0;

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

        <div className={styles.productInfoContainer}>
          <Typography
            variant="body"
            label={data.name}
            className={styles.productName}
          />
          {data.shippingShortDescription && <Badge label="Entrega en 24-48h" />}
        </div>

        <div className={styles.amountButtonContainer}>
          <AmountButton
            quantity={data.quantity}
            increase={addUnit}
            decrease={removeUnit}
          />
        </div>

        <div className={styles.productPriceContainer}>
          <Typography
            variant="h2"
            label={
              discountedProduct
                ? calculateDiscountedPrice(
                    data.pricing.price,
                    data.pricing.discountRate
                  )
                : formatPrice(data.pricing.price)
            }
            className={styles.productPrice}
          />

          {discountedProduct && (
            <div className={styles.discountPriceContainer}>
              <Typography
                variant="body"
                label={formatPrice(data.pricing.price)}
              />

              <Typography
                variant="body"
                label={`(-${convertToPercentage(data.pricing.discountRate)})`}
              />
            </div>
          )}
          <button className={styles.removeButton} onClick={removeItem}>
            <TrashIcon />
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
