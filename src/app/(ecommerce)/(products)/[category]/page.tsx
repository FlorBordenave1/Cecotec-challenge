import { CategoriesService } from "@/services/categoriesService";
import styles from "./category.module.css";
import { EmptyState } from "@/components/empty-state";
import { CategoriesList } from "./components/categories-list";

const Category = async ({
  params,
}: {
  params: { category: string; orderBy?: string };
}) => {
  const { category } = await params;
  const categoryBySlug = await CategoriesService.getCategoryBySlug(category);

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
