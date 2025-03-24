export const calculateDiscountedPrice = (price: string, discount: string) => {
  const priceNumber = parseFloat(price);
  const discountPercentage = parseFloat(discount);

  const discountedPrice = priceNumber * (1 - discountPercentage);

  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(discountedPrice);
};
