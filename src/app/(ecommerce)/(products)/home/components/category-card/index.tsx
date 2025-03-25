import Image from "next/image";

import { Typography } from "@/components/ui/typography";
import styles from "./category-card.module.css";

type CategoryType = {
  name: string;
  slug: string;
  image: string;
};

type CategoryCardProps = {
  data: CategoryType;
};
export const CategoryCard = ({ data }: CategoryCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <Image
            priority
            src={data.image}
            alt="Logo Cecotec"
            layout="fill"
            objectFit="contain"
            className="absolute inset-0"
          />
        </div>
        <Typography variant="body" label={data.name} className="font-bold" />
      </div>
    </div>
  );
};
