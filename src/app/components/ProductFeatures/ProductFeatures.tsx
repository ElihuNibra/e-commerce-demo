import Image from "next/image";
import parlante from "../../../assets/Products/Parlante.png";

function ProductFeatures() {
  return (
    <section className="my-16 flex justify-center px-6">
      <div className="flex container px-14 flex-col lg:flex-row gap-11 sm:py-16 py-8 bg-black text-white">
        <div className="flex flex-col gap-8">
          <p className="text-green-500 font-semibold">Categories</p>
          <h2 className="text-4xl sm:text-5xl font-semibold">
            Enhance Your <br />
            Music Experience
          </h2>
          <div className="flex gap-6">
            <div className="bg-white text-black w-16 h-16 flex flex-col justify-center text-center rounded-full font-bold">
              23<span className="font-normal text-xs">Hours</span>
            </div>
            <div className="bg-white text-black w-16 h-16 flex flex-col justify-center text-center rounded-full font-bold">
              05<span className="font-normal text-xs">Days</span>
            </div>
            <div className="bg-white text-black w-16 h-16 flex flex-col justify-center text-center rounded-full font-bold">
              59<span className="font-normal text-xs">Minutes</span>
            </div>
            <div className="bg-white text-black w-16 h-16 flex flex-col justify-center text-center rounded-full font-bold">
              35<span className="font-normal text-xs">Seconds</span>
            </div>
          </div>
          <div>
            <button className="px-9 py-3 sm:px-12 sm:py-4 bg-green-500 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <Image className="" src={parlante} alt="parlante" />
        </div>
      </div>
    </section>
  );
}

export default ProductFeatures;
