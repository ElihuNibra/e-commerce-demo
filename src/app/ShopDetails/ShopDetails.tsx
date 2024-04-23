import Image from "next/image";
import delivery from "../../assets/delivery-icon.svg";
import headPhone from "../../assets/headphone-icon.svg";
import shield from "../../assets/shield-icon.svg";
import IconsDetails from "@/components/IconsDetails";

function ShopDetails() {
  return (
    <section className="max-w-[1000px] flex flex-cols-1 justify-between :md flex-cols-3 mx-auto">
      <IconsDetails
        title="FREE AND FAST DELIVERY"
        subTitle="Free delivery for all orders over $140"
      >
        <Image src={delivery} alt={"fast-delivery-icon"} width={40} />
      </IconsDetails>
      <IconsDetails
        title="24/7 CUSTOMER SERVICE"
        subTitle="Friendly 24/7 customer support"
      >
        <Image src={headPhone} alt={"fast-delivery-icon"} width={25} />
      </IconsDetails>
      <IconsDetails
        title="MONEY BACK GUARANTEE"
        subTitle="We reurn money within 30 days"
      >
        <Image src={shield} alt={"fast-delivery-icon"} width={25} />
      </IconsDetails>
    </section>
  );
}

export default ShopDetails;
