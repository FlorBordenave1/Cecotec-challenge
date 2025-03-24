import { CategoriesService } from "@/services/categoriesService";
import styles from "./category.module.css";
import { EmptyState } from "@/components/emptyState";
import { CategoriesList } from "./components/categoriesList";

const Category = async ({
  params,
}: {
  params: { category: string; orderBy?: string };
}) => {
  let categoryBySlug = await CategoriesService.getCategoryBySlug(
    params.category
  );

  return (
    <div className={styles.categoryContainer}>
      {categoryBySlug?.length === 0 ? (
        <EmptyState
          buttonLabel="Volver al inicio"
          label="No hay productos para esta categoría"
          routeToNavigate="home"
        />
      ) : (
        <CategoriesList categoryBySlug={categoryBySlug} />
      )}
    </div>
  );
};

export default Category;
