import Link from "next/link";
import { CategoryCard } from "./components/categoryCard";
import { Typography } from "@/components/ui/typography";
import { CategoriesService } from "@/services/categoriesService";

import styles from "./Home.module.css";

const Home = async () => {
  const categories = await CategoriesService.getCategories();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <Typography
          variant="h1"
          label="Nuestras categorías"
          className="font-extrabold"
        />
        <div className={styles.cardsContainer}>
          {categories.map((category, index) => (
            <Link key={`${category}_${index}`} href={`/${category.slug}`}>
              <CategoryCard key={index} data={category} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
