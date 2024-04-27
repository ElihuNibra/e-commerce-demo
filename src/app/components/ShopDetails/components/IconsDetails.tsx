import { ReactElement } from "react";

type PropsIconsDetails = {
  children: ReactElement;
  title: string;
  subTitle: string;
};

function IconsDetails({ children, title, subTitle }: PropsIconsDetails) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-20 w-20 rounded-full border-8 border-stone-500 flex justify-center">
        {children}
      </div>
      <h2 className="font-semibold text-l leading-7 md:text-center">{title}</h2>
      <h3 className="mt-2 text-sm md:text-center">{subTitle}</h3>
    </div>
  );
}

export default IconsDetails;
