const Product = async ({
  params,
}: {
  params: Promise<{ product: string }>;
}) => {
  const { product } = await params;

  return <div>product: {product}</div>;
};

export default Product;
