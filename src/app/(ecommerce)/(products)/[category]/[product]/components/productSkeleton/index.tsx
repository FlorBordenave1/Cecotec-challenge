import { Skeleton } from "@/components/ui/skeleton";
import styles from "./productSkeleton.module.css";

export const ProductSkeleton = () => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productContent}>
        <div className={styles.imageContainer}>
          <Skeleton className={styles.skeletonImage} />
        </div>
        <div className={styles.productInfoContainer}>
          <Skeleton className="h-6 w-1/3 mb-2" />
          <Skeleton className="h-10 w-2/3 mb-4" />
          <Skeleton className="h-8 w-1/4 mb-6" />
          <Skeleton className="h-12 w-1/2" />
        </div>
      </div>
    </div>
  );
};
