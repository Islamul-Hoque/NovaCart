import ProductFilter from "./ProductFilter";

const categories = ["Electronics", "Home & Furniture", "Audio & Music", "Apparel", "Photography", "Accessories"];

const AllProductsPage = async () => {
  const res = await fetch("https://nova-cart-api-server.vercel.app/all-products", { cache: "no-store" });
  const products = await res.json();

  return (
    <div className="py-20 px-6 md:px-16">
      <ProductFilter products={products} categories={categories} />
    </div>
  );
};

export default AllProductsPage;