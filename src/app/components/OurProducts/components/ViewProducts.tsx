import Product from "./Product";
import product1 from "@/assets/Products/product1.svg";

function ViewProducts() {
  return (
    <div className="flex flex-col gap-8 xl:gap-16">
      <div className="grid justify-center sm:grid:cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <Product productImage={product1} />
        <Product productImage={product1} />
        <Product productImage={product1} />
        <Product productImage={product1} />
      </div>
      <div className="grid justify-center sm:grid:cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <Product productImage={product1} />
        <Product productImage={product1} />
        <Product productImage={product1} />
        <Product productImage={product1} />
      </div>
      <div className="flex justify-center ">
        <a
          className="w-56 h-14 bg-red-500 rounded-md text-center content-center text-white font-medium"
          href="#"
        >
          View All Products
        </a>
      </div>
    </div>
  );
}

export default ViewProducts;
