import Image from "next/image";
import image1 from "../../../assets/new-arrival/playstation.svg";
import image2 from "../../../assets/new-arrival/women-collection.svg";
import image3 from "../../../assets/new-arrival/parlante.svg";
import image4 from "../../../assets/new-arrival/perfume.svg";

function NewArrival() {
  return (
    <section className="my-16 flex justify-center px-6">
      <div className="grid gap-16 container px-0">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded-md"></div>
            <h2 className="font-bold text-red-500">Featured</h2>
          </div>
          <h2 className="font-semibold text-4xl">New Arrival</h2>
        </div>
        <div className="grid grid:cols-3 grid-rows-8 md:grid-cols-6 md:grid-rows-4 gap-4 md:gap-8">
          <div className="col-span-3 row-span-4 flex justify-center bg-black relative">
            <Image className="self-end w-11/12" src={image1} alt="play-5" />
            <div className="text-white absolute bottom-3 left-3 lg:bottom-6 lg:left-6 w-9/12 flex flex-col gap-2 lg:gap-4">
              <h3 className="text-lg font-medium lg:text-2xl lg:font-semibold">
                PlayStation 5
              </h3>
              <p className="text-xs lg:text-sm">
                Black and White version of the PS5 coming out on sale.
              </p>
              <a className="font-medium" href="#">
                Shop Now
              </a>
            </div>
          </div>
          <div className="col-span-3 row-span-2 flex justify-end bg-black relative">
            <Image className="w-9/12" src={image2} alt="women-collection" />
            <div className="text-white absolute bottom-3 left-3 lg:bottom-6 lg:left-6 w-6/12 flex flex-col gap-2 lg:gap-4">
              <h3 className="text-lg font-medium lg:text-2xl lg:font-semibold">
                Women’s Collections
              </h3>
              <p className="text-xs lg:text-sm">
                Featured woman collections that give you another vibe.
              </p>
              <a className="font-medium" href="#">
                Shop Now
              </a>
            </div>
          </div>
          <div className="col-span-3 row-span-2 grid grid-cols-2 gap-4 md:gap-8">
            <div className="flex justify-center bg-black relative">
              <Image className="w-9/12" src={image3} alt="parlante" />
              <div className="text-white absolute bottom-3 left-3 lg:bottom-6 lg:left-6 w-9/12 flex flex-col gap-2 lg:gap-4">
                <h3 className="text-lg font-medium lg:text-2xl lg:font-semibold">
                  Speakers
                </h3>
                <p className="text-xs lg:text-sm">Amazon wireless speakers</p>
                <a className="font-medium" href="#">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="flex justify-center bg-black relative">
              <Image className="w-9/12" src={image4} alt="perfume" />
              <div className="text-white absolute bottom-3 left-3 lg:bottom-6 lg:left-6 w-9/12 flex flex-col gap-2 lg:gap-4">
                <h3 className="text-lg font-medium lg:text-2xl lg:font-semibold">
                  Perfume
                </h3>
                <p className="text-xs lg:text-sm">GUCCI INTENSE OUD EDP</p>
                <a className="font-medium" href="#">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewArrival;
