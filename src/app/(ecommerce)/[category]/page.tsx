import Link from "next/link";

const Category = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;

  const products = ["conga500", "conga500x"];

  return (
    <div>
      Category: {category}
      <div className="flex flex-col">
        {products.map((product) => (
          <Link key={product} href={`/${category}/${product}`}>
            {product}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
