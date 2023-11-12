import { getShoppingCart } from "./fakeDB";

const cartProductLoader = async () => {
  const loadProducts = await fetch("product.json");
  const products = await loadProducts.json();

  const storedCart = getShoppingCart();
  const savedCart = [];

  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  return savedCart;
};

export default cartProductLoader;
