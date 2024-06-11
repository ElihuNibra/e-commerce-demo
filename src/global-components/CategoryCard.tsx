import { PropsSVG } from "@/app/components-svg/types/PropsSVG";
import { useState } from "react";

interface PropsCategoryCard {
  ComponentSvg: React.ComponentType<PropsSVG>;
  title: string;
}

function CategoryCard({ ComponentSvg, title }: PropsCategoryCard) {
  const [onHover, setOnHover] = useState(false);

  return (
    <a
      className="cursor-pointer hover:bg-red-500 hover:text-white hover:border-red-500 w-44 py-6 border-gray-300 border-2 rounded-md"
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
    >
      <div className="flex flex-col items-center">
        <ComponentSvg color={onHover ? "white" : "black"} />
        <p>{title}</p>
      </div>
    </a>
  );
}

export default CategoryCard;
