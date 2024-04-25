import Image from "next/image";
import qr from "../../assets/qr-icon.svg";
import logoGooglePlay from "../../assets/google-play.svg";
import logoAppStore from "../../assets/app-store.svg";
import facebook from "../../assets/facebook.svg";
import twiter from "../../assets/twiter.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white grid grid-cols gap-8 justify-center">
      <div className="container py-8 grid grid-cols-1 md:px-6 md:grid-cols-2 lg:grid-cols-5 gap-20 items-start">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold mb-2">Exclusive</h2>
          <p className="text-gray-100">Subscribe</p>
          <p className="text-gray-100">Get 10% off your first order</p>
          <input
            className="border-2 border-white bg-transparent p-2 w-full"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold mb-2">Support</h2>
          <p className="text-gray-100">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-gray-100">exclusive@gmail.com</p>
          <p className="text-gray-100">+88015-88888-9999</p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold mb-2">Account</h2>
          <a className="text-gray-100" href="#">
            My Account
          </a>
          <a className="text-gray-100" href="#">
            Login / Register
          </a>
          <a className="text-gray-100" href="#">
            Cart
          </a>
          <a className="text-gray-100" href="#">
            Wishlist
          </a>
          <a className="text-gray-100" href="#">
            Shop
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold mb-2">Quick Link</h2>
          <a className="text-gray-100" href="#">
            Privacy Policy
          </a>
          <a className="text-gray-100" href="#">
            Terms Of Use
          </a>
          <a className="text-gray-100" href="#">
            FAQ
          </a>
          <a className="text-gray-100" href="#">
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-bold mb-2">Download App</h2>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-xs">
              Save $3 with App New User Only
            </p>
            <div className="grid grid-cols-2 grid-rows-2 ">
              <Image className="row-span-2" src={qr} alt="qr-icons" />
              <a href="#">
                <Image src={logoGooglePlay} alt="logoGooglePlay" width={110} />
              </a>
              <a href="#">
                <Image src={logoAppStore} alt="" width={110} />
              </a>
            </div>
          </div>
          <div className="flex gap-6">
            <a className="w-6 h-6 flex justify-center" href="#">
              <Image src={facebook} alt="facebook" height={20} />
            </a>
            <a className="w-6 h-6 flex justify-center" href="#">
              <Image src={twiter} alt="twiter" height={20} />
            </a>
            <a className="w-6 h-6 flex justify-center" href="#">
              <Image src={instagram} alt="instagram" height={20} />
            </a>
            <a className="w-6 h-6 flex justify-center" href="#">
              <Image src={linkedin} alt="linkding" height={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t border-slate-800">
        <div className="py-4">
          <p className="text-slate-700">
            Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
