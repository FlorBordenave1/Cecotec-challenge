export const formatPrice = (price: string) => {
  const priceNumber = parseFloat(price);

  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(priceNumber);
};
