import Link from "next/link";
import { CategoriesService } from "@/services/categoriesService";
import { ProductCard } from "./components/productCard";
import { GetCategoryBySlugResponse } from "@/services/types";
import styles from "./category.module.css";
import { EmptyState } from "@/components/emptyState";
import { FilerDropdown } from "./components/filterDropdown";

const Category = async ({ params }: { params: { category: string } }) => {
  const categoryBySlug = await CategoriesService.getCategoryBySlug(
    params.category
  );

  // const [categories, setCategories] = useState(categoryBySlug);

  // const handleSortBySold = () => {
  //   const sortedCategories = [...categories].sort((a, b) => b.sold - a.sold);
  //   setCategories(sortedCategories); // Actualizamos el estado con el orden de "sold"
  // };

  // const handleSortByDefault = () => {
  //   setCategories(categoryBySlug); // Volvemos al estado original
  // };

  return (
    <div className={styles.categoryContainer}>
      {categoryBySlug?.length === 0 ? (
        <EmptyState
          buttonLabel="Volver al inicio"
          label="No hay productos para esta categoría"
          routeToNavigate="home"
        />
      ) : (
        <>
          <div className="mb-4 ">
            <FilerDropdown
              handleSortByDefault={() => console.log("asd")}
              handleSortBySold={() => console.log("asd")}
            />
          </div>
          <div className={styles.categoryContent}>
            {categoryBySlug?.map((product: GetCategoryBySlugResponse) => (
              <Link
                key={product.id}
                href={`/${params.category}/${product.slug}`}
              >
                <ProductCard data={product} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
