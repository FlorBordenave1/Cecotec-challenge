"use client";
import Image from "next/image";

import { Typography } from "@/components/ui/typography";
import styles from "./styles.module.css";

type CategoryType = {
  name: string;
  slug: string;
  image: string;
};

interface CategoryCardProps {
  data: CategoryType;
}
export const CategoryCard = ({ data }: CategoryCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div
        onClick={() => console.log("asd")}
        className="cursor-pointer h-full flex flex-row items-center justify-start"
      >
        <div className="relative w-full h-full">
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
