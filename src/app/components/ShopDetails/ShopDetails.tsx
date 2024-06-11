import Image from "next/image";
import delivery from "../../../assets/delivery-icon.svg";
import headPhone from "../../../assets/headphone-icon.svg";
import shield from "../../../assets/shield-icon.svg";
import IconsDetails from "@/app/components/ShopDetails/components/IconsDetails";

function ShopDetails() {
  return (
    <section className="my-16 flex justify-center px-6">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-16 lg:gap-20">
        <IconsDetails
          title="FREE AND FAST DELIVERY"
          subTitle="Free delivery for all orders over $140"
        >
          <Image src={delivery} alt={"fast-delivery-icon"} width={45} />
        </IconsDetails>
        <IconsDetails
          title="24/7 CUSTOMER SERVICE"
          subTitle="Friendly 24/7 customer support"
        >
          <Image src={headPhone} alt={"fast-delivery-icon"} width={30} />
        </IconsDetails>
        <IconsDetails
          title="MONEY BACK GUARANTEE"
          subTitle="We reurn money within 30 days"
        >
          <Image src={shield} alt={"fast-delivery-icon"} width={30} />
        </IconsDetails>
      </div>
    </section>
  );
}

export default ShopDetails;
