function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20 grid grid-cols gap-8">
      <div className="container max-w-[1440px] py-8 mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
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
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold mb-2">Download App</h2>
          <p className="text-gray-400">Save $3 with App New User Only</p>
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
