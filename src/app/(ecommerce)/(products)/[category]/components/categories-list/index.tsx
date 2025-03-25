"use client";
import { GetCategoryBySlugResponse } from "@/services/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ProductCard } from "../productCard";
import { FilerDropdown } from "../filter-dropdown";

import styles from "./categories-list.module.css";
import { useState } from "react";
import { Typography } from "@/components/ui/typography";

enum OrderTypes {
  BY_DEFAULT = "Por defecto",
  BY_SOLD = "Más vendidos",
}

type CategoriesListProps = {
  categoryBySlug: GetCategoryBySlugResponse[];
};

export const CategoriesList = ({ categoryBySlug }: CategoriesListProps) => {
  const params = useParams();

  const [orderBy, setOrderBy] = useState<OrderTypes>(OrderTypes.BY_DEFAULT);
  const [categories, setCategories] =
    useState<GetCategoryBySlugResponse[]>(categoryBySlug);

  const handleSortBySold = () => {
    const sortedCategories = [...categories].sort((a, b) => b.sold - a.sold);
    setOrderBy(OrderTypes.BY_SOLD);
    setCategories(sortedCategories);
  };

  const handleSortByDefault = () => {
    setOrderBy(OrderTypes.BY_DEFAULT);
    setCategories(categoryBySlug);
  };

  return (
    <div>
      <div className={styles.headerContainer}>
        <Typography label={orderBy} variant="h2" className={styles.label} />

        <FilerDropdown
          handleSortByDefault={handleSortByDefault}
          handleSortBySold={handleSortBySold}
        />
      </div>

      <div className={styles.categoryListContainer}>
        {categories?.map((product: GetCategoryBySlugResponse) => (
          <Link key={product.id} href={`/${params.category}/${product.slug}`}>
            <ProductCard data={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};
