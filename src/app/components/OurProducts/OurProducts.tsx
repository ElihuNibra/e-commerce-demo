import Image from "next/image";
import arrowL from "@/assets/arrowL.svg";
import arrowR from "@/assets/arrowR.svg";
import ViewProducts from "./components/ViewProducts";

function OurProducts() {
  return (
    <section className="my-16 flex justify-center px-6">
      <div className="grid gap-16 container px-0">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded-md"></div>
            <h2 className="font-bold text-red-500">Our Products</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="font-semibold text-4xl">Explore Our Products</h2>
            <div className="flex gap-2">
              <button className="w-12 h-12 flex justify-center items-center bg-zinc-200 rounded-full">
                <Image src={arrowL} alt="arrowL" />
              </button>
              <button className="w-12 h-12 flex justify-center items-center bg-zinc-200 rounded-full">
                <Image src={arrowR} alt="arrowR" />
              </button>
            </div>
          </div>
        </div>
        <ViewProducts />
      </div>
    </section>
  );
}

export default OurProducts;
