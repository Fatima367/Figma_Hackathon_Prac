import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black w-screen h-[440px] bottom-0">
      <div className="flex flex-row justify-between items-start p-[87px]">
        <div className="space-y-[16px] flex flex-col">
          <div className="space-y-[24px]">
            <div className="space-y-[24px]">
              <h1 className="text-[24px] font-bold text-white"> Exclusive</h1>
              <h2 className="text-[20px] font-medium text-white">Subscribe</h2>
            </div>
            <p className="text-[16px] text-[#FAFAFA]">
              Get 10% off your first order
            </p>

            <div
              className="border-[1.5px] border-[#FAFAFA] py-[12px] px-[16px] 
                    space-x-[32px] rounded flex items-center justify-center"
            >
              <p className="text-[16px] text-[#FAFAFA]"> Enter your email</p>
              <Image
                src="/images/icon-send.png"
                height={24}
                width={24}
                alt="send-icon"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-[24px]">
          <h2 className="text-[24px] font-medium text-white">Support</h2>\{" "}
          <div className="space-y-[16px]">
            <p className="text-[16px] text-white">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-[16px] text-white">exclusive@gmail.com</p>
            <p className="text-[16px] text-white">+88015-88888-9999</p>
          </div>
        </div>

        <div className="flex flex-col space-y-[24px]">
          <h2 className="text-[20px] font-medium text-white">Account</h2>
          <div className="space-y-[16px]">
            <p className="text-[16px] text-white">My Account</p>
            <p className="text-[16px] text-white">Login / Register</p>
            <p className="text-[16px] text-white">Cart</p>
            <p className="text-[16px] text-white">Wishlist</p>
            <p className="text-[16px] text-white">Shop</p>
          </div>
        </div>

        <div className="flex flex-col space-y-[24px]">
          <h2 className="text-[20px] font-medium text-white">Quick Link</h2>
          <div className="space-y-[16px]">
            <p className="text-[16px] text-white">Privacy Policy</p>
            <p className="text-[16px] text-white">Terms Of Use</p>
            <p className="text-[16px] text-white">FAQ</p>
            <p className="text-[16px] text-white">Contact</p>
          </div>
        </div>

        <div className="flex flex-col space-y-[24px]">
          <div className="space-y-[24px]">
            <h2 className="text-[20px] font-medium text-white">Download App</h2>
            <div className="space-y-[8px]">
              <p className="text-[12px] font-medium text-[#FAFAFA]">
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

          <div className="space-x-[24px] flex">
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
            justify-center mx-auto p-[16px] bg-black border-opacity-40"
      >
        <div className="space-x-[12px]">
          <div className="space-x-[6px] flex items-center justify-center">
            <Image
              src="/images/icon-copyright.png"
              height={20}
              width={20}
              alt="copyright"
              className="opacity-40"
            />
            <p className="text-[16px] text-white opacity-40">
              {" "}
              Copyright Rimel 2022. All right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
