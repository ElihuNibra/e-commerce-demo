"use client";

import Image from "next/image";
import arrowL from "../../../assets/arrowL.svg";
import arrowR from "../../../assets/arrowR.svg";
import CategoryCard from "@/global-components/CategoryCard";
import PhoneSvg from "@/app/components-svg/PhoneSVG";
import ComputersSVG from "@/app/components-svg/ComputersSVG";
import SmartWatchSVG from "@/app/components-svg/SmartWatchSVG";
import CameraSVG from "@/app/components-svg/CameraSVG";
import HeadPhoneSVG from "@/app/components-svg/HeadPhoneSVG";
import Gaming from "@/app/components-svg/GamingSVG";

function Categories() {
  return (
    <>
      <section className="py-16 flex flex-col justify-center px-6">
        <div className="grid gap-16 container px-0">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-5 h-10 bg-red-500 rounded-md"></div>
              <h2 className="font-bold text-red-500">Categories</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="font-semibold text-4xl">Browse By Category</h2>
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
          <div className="grid grid-cols-6 gap-8">
            <CategoryCard ComponentSvg={PhoneSvg} title={"Phone"} />
            <CategoryCard ComponentSvg={ComputersSVG} title={"Computers"} />
            <CategoryCard ComponentSvg={SmartWatchSVG} title={"SmartWatch"} />
            <CategoryCard ComponentSvg={CameraSVG} title={"Camera"} />
            <CategoryCard ComponentSvg={HeadPhoneSVG} title={"HeadPhones"} />
            <CategoryCard ComponentSvg={Gaming} title={"Gaming"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
