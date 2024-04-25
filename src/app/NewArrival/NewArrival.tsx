import Image from "next/image";
import image1 from "../../assets/new-arrival/playstation.svg";
import image2 from "../../assets/new-arrival/women-collection.svg";
import image3 from "../../assets/new-arrival/parlante.svg";
import image4 from "../../assets/new-arrival/perfume.svg";

function NewArrival() {
  return (
    <section className="mb-32 flex justify-center">
      <div className="grid gap-16">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded-md"></div>
            <h2 className="font-bold text-red-500">Featured</h2>
          </div>
          <h2 className="font-semibold text-4xl">New Arrival</h2>
        </div>
        <div className="grid grid-cols-6 grid-rows-4 gap-8">
          <div className="row-span-4 col-span-3 flex px-8 bg-black">
            <div className="relative flex">
              <Image className="self-end" src={image1} alt="play-5" />
              <div className="text-white absolute bottom-8 left-0 w-64 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">PlayStation 5</h3>
                <p className="text-sm">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <a className="font-medium" href="#">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-3 row-span-2 flex justify-end bg-black relative">
            <Image src={image2} alt="women-collection" />
            <div className="text-white absolute bottom-6 left-6 w-56 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">Women’s Collections</h3>
              <p className="text-sm">
                Featured woman collections that give you another vibe.
              </p>
              <a className="font-medium" href="#">
                Shop Now
              </a>
            </div>
          </div>
          <div className="col-span-3 row-span-2 grid grid-cols-2 gap-8">
            <div className="flex justify-center bg-black relative">
              <Image src={image3} alt="" />
              <div className="text-white absolute bottom-6 left-6 w-48 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">Speakers</h3>
                <p className="text-sm">Amazon wireless speakers</p>
                <a className="font-medium" href="#">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="flex justify-center bg-black relative">
              <Image src={image4} alt="" />
              <div className="text-white absolute bottom-6 left-6 w-48 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">Perfume</h3>
                <p className="text-sm">GUCCI INTENSE OUD EDP</p>
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
