"use client";
import { GetCategoryBySlugResponse } from "@/services/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ProductCard } from "../productCard";
import { FilerDropdown } from "../filterDropdown";

import styles from "./CategoriesList.module.css";
import { useState } from "react";

type CategoriesListProps = {
  categoryBySlug: GetCategoryBySlugResponse[];
};

export const CategoriesList = ({ categoryBySlug }: CategoriesListProps) => {
  const params = useParams();
  const [categories, setCategories] =
    useState<GetCategoryBySlugResponse[]>(categoryBySlug);

  const handleSortBySold = () => {
    const sortedCategories = [...categories].sort((a, b) => b.sold - a.sold);
    setCategories(sortedCategories);
  };

  const handleSortByDefault = () => {
    setCategories(categoryBySlug);
  };
  return (
    <div>
      <div className="mb-4 ">
        <FilerDropdown
          handleSortByDefault={handleSortByDefault}
          handleSortBySold={handleSortBySold}
        />
      </div>
      <div className={styles.categoryContent}>
        {categories?.map((product: GetCategoryBySlugResponse) => (
          <Link key={product.id} href={`/${params.category}/${product.slug}`}>
            <ProductCard data={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};
