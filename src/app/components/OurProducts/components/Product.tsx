"use client";

import Image from "next/image";
import favourite from "@/assets/favourite.svg";
import favouriteCheck from "@/assets/favourite-check.svg";
import view from "@/assets/view.svg";
import star from "@/assets/star.svg";
import starGray from "@/assets/star-gray.svg";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

interface PropProduct {
  productImage: string;
}

function Product({ productImage }: PropProduct) {
  const [changeImg, setChangeImg] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  const addToFavourite = () => {
    toast({
      description: changeImg
        ? "Se agrego a tus favoritos"
        : "Se quito de tus favoritos",
      duration: 1000,
    });
    setChangeImg(!changeImg);
  };

  return (
    <div className="w-72 h-80">
      <div
        className="relative h-64 rounded-md flex justify-center bg-zinc-200"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <Image src={productImage} alt="product1" />
        <button
          className={`absolute rounded-b-md bottom-0 left-0 w-full h-11 bg-black text-white transition-opacity  duration-1000  ${
            isVisible ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          Add To Cart
        </button>
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <button
            className="w-10 h-10 flex justify-center items-center bg-white rounded-full"
            onClick={addToFavourite}
          >
            <Image
              src={changeImg ? favourite : favouriteCheck}
              alt="favourite"
            />
          </button>
          <button className="w-10 h-10 flex justify-center items-center bg-white rounded-full">
            <Image src={view} alt="view" />
          </button>
        </div>
      </div>
      <div>
        <h2>Breed Dry Dog Food</h2>
        <div className="flex gap-2">
          <p className="font-medium text-red-500">$100</p>
          <ul className="flex align-center justify-center items-center">
            <li>
              <Image src={star} alt="star" />
            </li>
            <li>
              <Image src={star} alt="star" />
            </li>
            <li>
              <Image src={star} alt="star" />
            </li>
            <li>
              <Image src={starGray} alt="star" />
            </li>
            <li>
              <Image src={starGray} alt="star" />
            </li>
          </ul>
          <p className="font-semibold text-gray-400">(35)</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
