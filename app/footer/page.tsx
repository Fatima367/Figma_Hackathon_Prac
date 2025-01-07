import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black lg:h-[28rem] h-full bottom-0">
      <div
        className="lg:flex lg:flex-row justify-between items-start p-20 lg:gap-8
      grid grid-cols-1 space-y-8 lg:space-y-0"
      >
        <div className="space-y-4 flex flex-col">
          <div className="space-y-6">
            <div className="space-y-6">
              <h1 className="text-[24px] font-bold text-white"> Exclusive</h1>
              <h2 className="text-[20px] font-medium text-white">Subscribe</h2>
            </div>
            <p className="text-base text-[#FAFAFA]">
              Get 10% off your first order
            </p>

            <div
              className="border-[1.5px] border-[#FAFAFA] py-3 px-4 
                    space-x-7 rounded flex items-center justify-center"
            >
              <p className="text-base text-[#FAFAFA]"> Enter your email</p>
              <Image
                src="/images/icon-send.png"
                height={24}
                width={24}
                alt="send-icon"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <h2 className="text-[24px] font-medium text-white">Support</h2>\{" "}
          <div className="space-y-4">
            <p className="text-base text-white">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-base text-white">exclusive@gmail.com</p>
            <p className="text-base text-white">+88015-88888-9999</p>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <h2 className="text-[20px] font-medium text-white">Account</h2>
          <div className="space-y-4">
            <p className="text-base text-white">My Account</p>
            <p className="text-base text-white">Login / Register</p>
            <p className="text-base text-white">Cart</p>
            <p className="text-base text-white">Wishlist</p>
            <p className="text-base text-white">Shop</p>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <h2 className="text-[20px] font-medium text-white">Quick Link</h2>
          <div className="space-y-4">
            <p className="text-base text-white">Privacy Policy</p>
            <p className="text-base text-white">Terms Of Use</p>
            <p className="text-base text-white">FAQ</p>
            <p className="text-base text-white">Contact</p>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="space-y-6">
            <h2 className="text-[20px] font-medium text-white">Download App</h2>
            <div className="space-y-2">
              <p className="text-3 font-medium text-[#FAFAFA]">
                Save $3 with App New User Only
              </p>
              <div className="flex space-x-8">
                <Image
                  src="/images/Qrcode 1.jpg"
                  height={80}
                  width={80}
                  alt="Qr code"
                />
                <div className="flex flex-col space-y-4">
                  <Image
                    src="/images/googleplay.jpg"
                    height={40}
                    width={110}
                    alt="d"
                  />
                  <Image
                    src="/images/download-appstore.png"
                    height={40}
                    width={110}
                    alt="d"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-x-6 flex">
            <Image
              src="/images/Icon-Facebook.png"
              height={24}
              width={24}
              alt="fb-icon"
            />
            <Image
              src="/images/Icon-Twitter.png"
              height={24}
              width={24}
              alt="fb-icon"
            />
            <Image
              src="/images/icon-instagram.png"
              height={24}
              width={24}
              alt="fb-icon"
            />
            <Image
              src="/images/Icon-Linkedin.png"
              height={24}
              width={24}
              alt="fb-icon"
            />
          </div>
        </div>
      </div>

      <div
        className="border-t-2 border-t-[#fff] flex flex-row items-center 
            justify-center mx-auto p-4 bg-black border-opacity-40"
      >
        <div className="space-x-3">
          <div className="space-x-2 flex items-center justify-center">
            <Image
              src="/images/icon-copyright.png"
              height={20}
              width={20}
              alt="copyright"
              className="opacity-40"
            />
            <p className="text-base text-white opacity-40">
              {" "}
              Copyright Rimel 2022. All right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
