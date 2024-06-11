import Product from "../OurProducts/components/Product";
import produc1 from "../../../assets/Products/product1.svg";

function ThisMonth() {
  return (
    <section className="my-16 flex justify-center px-6">
      <div className="grid gap-16 container px-0">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded-md"></div>
            <h2 className="font-bold text-red-500">This Month</h2>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <h2 className="font-semibold text-4xl">Best Selling Products</h2>
            <div className="flex gap-2">
              <button className="px-9 py-3 sm:px-12 sm:py-4 bg-red-500 text-white rounded-md">
                View All
              </button>
            </div>
          </div>
        </div>
        <div className="grid justify-center md:grid-cols-2 xl:grid-cols-4 gap-8">
          <Product productImage={produc1} />
          <Product productImage={produc1} />
          <Product productImage={produc1} />
          <Product productImage={produc1} />
        </div>
      </div>
    </section>
  );
}

export default ThisMonth;
