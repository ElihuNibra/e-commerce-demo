import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import NewArrival from "./components/NewArrival/NewArrival";
import OurProducts from "./components/OurProducts/OurProducts";
import ProductFeatures from "./components/ProductFeatures/ProductFeatures";
import ShopDetails from "./components/ShopDetails/ShopDetails";
import ThisMonth from "./components/ThisMonth/ThisMonth";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Categories />
      <ThisMonth />
      <ProductFeatures />
      <OurProducts />
      <NewArrival />
      <ShopDetails />
      <Footer />
    </div>
  );
}
