import Image from "next/image";

export default function ProductDetailsPage() {
  return (
    <div className="relative">
      <div className="flex flex-col items-start justify-between mx-auto">
        <div className="p-20">
          <div className="space-x-3 flex ml-0">
            <p className="text-sm opacity-50 ">Account</p>
            <p className="text-sm opacity-50">/</p>
            <p className="text-sm opacity-50 ">Gaming</p>
            <p className="text-sm opacity-50">/</p>
            <p className="text-sm">Havic HV G-92 Gamepad</p>
          </div>
        </div>

        <div className="flex flex-row items-start justify-center px-5 mx-auto">
          {/*Left*/}
          <div className="flex flex-col gap-4">
            <div
              className="bg-[#F5F5F5] rounded w-[10rem] h-32
                flex items-center justify-center"
            >
              <Image
                src="/images/gamepad.png"
                width={121}
                height={114}
                alt="gamepad"
              />
            </div>

            <div
              className="bg-[#F5F5F5] rounded w-[10rem] h-32
                flex items-center justify-center"
            >
              <Image
                src="/images/gamepad2.png"
                width={121}
                height={114}
                alt="gamepad"
              />
            </div>

            <div
              className="bg-[#F5F5F5] rounded w-[10rem] h-32
                flex items-center justify-center"
            >
              <Image
                src="/images/gamepad3.png"
                width={121}
                height={114}
                alt="gamepad"
              />
            </div>

            <div
              className="bg-[#F5F5F5] rounded w-[10rem] h-32
                flex items-center justify-center"
            >
              <Image
                src="/images/gamepad4.png"
                width={121}
                height={114}
                alt="gamepad"
              />
            </div>
          </div>

          {/*Center*/}
          <div
            className="bg-[#F5F5F5] rounded w-[30rem] h-[35rem]
                flex items-center justify-center ml-5"
          >
            <Image
              src="/images/gamepadmain.png"
              width={430}
              height={300}
              alt="gamepad"
            />
          </div>

          {/*Right*/}
          <div className="flex flex-col ml-12 justify-center items-start max-w-[27rem] pr-5">
            <h1 className="text-[24px] font-semibold">Havic HV G-92 Gamepad</h1>
            <div className="space-x-4 flex flex-row items-center justify-center">
              <div className="space-x-2 flex items-center justify-center ">
                <Image
                  src="/images/Four Star.png"
                  height={20}
                  width={100}
                  alt="ratings"
                />
                <p className="text-sm opacity-50">(150 Reviews)</p>
              </div>
              <div className="space-x-4 flex flex-row items-center justify-center">
                <p>|</p>
                <p className="text-[#00FF66] text-sm opacity-60">In Stock</p>
              </div>
            </div>
            <h2 className="text-[24px] mt-4">$192.00</h2>
            <p className="text-sm mt-6 w-[23rem]">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>

            <hr className="mt-6" />

            <div className="flex items-center justify-center space-x-6">
              <h1 className="text-[20px]"> Colours: </h1>
              <div className="space-x-2 flex items-center justify-center">
                <div
                  className="rounded-full bg-[#A0BCE0] h-3 w-3
                    ring-2 ring-black ring-offset-2 ring-offset-white"
                ></div>
                <div className="rounded-full bg-[#E07575] h-5 w-5"></div>
              </div>
            </div>

            <div className="space-x-6 mt-6 flex">
              <h2 className="text-[20px]">Size: </h2>
              <div className="flex space-x-4">
                <div
                  className="ring-1 ring-opacity-50 ring-black rounded
                        h-8 w-8 flex items-center justify-center"
                >
                  <p className="text-sm font-medium">XS</p>
                </div>
                <div
                  className="ring-1 ring-opacity-50 ring-black rounded
                        h-8 w-8 flex items-center justify-center"
                >
                  <p className="text-sm font-medium">S</p>
                </div>
                <div
                  className="ring-1 ring-opacity-50 ring-black rounded
                        h-8 w-8 flex items-center justify-center bg-[#DB4444]"
                >
                  <p className="text-sm text-white font-medium">M</p>
                </div>
                <div
                  className="ring-1 ring-opacity-50 ring-black rounded
                        h-8 w-8 flex items-center justify-center"
                >
                  <p className="text-sm font-medium">L</p>
                </div>
                <div
                  className="ring-1 ring-opacity-50 ring-black rounded
                        h-8 w-8 flex items-center justify-center"
                >
                  <p className="text-sm font-medium">XL</p>
                </div>
              </div>
            </div>

            <div className="flex mt-6 space-x-4 justify-between w-full">
              <Image
                src="/images/quantity.png"
                height={44}
                width={159}
                alt="quantity"
              />
              <button className="rounded gap-8 px-5 w-36 h-11 bg-[#DB4444] text-base text-white font-medium">
                Buy Now
              </button>
              <div
                className="ring-1 ring-opacity-50 ring-black rounded
                        h-10 w-10 flex items-center justify-center"
              >
                <Image
                  src="/images/Wishlist.png"
                  height={32}
                  width={32}
                  alt="wishlist"
                />
              </div>
            </div>

            <div
              className="rounded ring-1 ring-black ring-opacity-50 flex flex-col
                mt-10 w-fit p-4 py-6"
            >
              <div className="flex items-center justify-center">
                <div className="mr-4">
                  <Image
                    src="/images/icon-delivery.png"
                    height={40}
                    width={40}
                    alt="delivery"
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <p className="text-base font-medium">Free Delivery</p>
                  <p className="text-3 font-medium underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <hr className="mt-4 mb-4" />
              <div className="flex items-center justify-center">
                <div className="mr-4">
                  <Image
                    src="/images/Icon-return.png"
                    height={40}
                    width={40}
                    alt="delivery"
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <p className="text-base font-medium">Return Delivery</p>
                  <p className="text-3 font-medium">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-20 mx-auto">
          <div className="flex space-x-4">
            <div className="bg-[#DB4444] h-10 w-5 rounded"></div>
            <p className="font-semibold text-base text-[#DB4444] my-auto">
              Related Item
            </p>
          </div>

          <div className="flex items-center justify-between gap-7 mt-14 mb-36">
            <div className="space-y-4">
              <Image
                src="/images/riimage.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-2">
                <p className="text-base font-medium">HAVIT HV-G92 Gamepad</p>
                <div className="flex space-x-3">
                  <p className="text-base text-[#DB4444] font-medium">$120</p>
                  <p className="text-base font-medium line-through opacity-50">
                    $160
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Image
                    src="/images/Five star.png"
                    height={20}
                    width={100}
                    alt="ratings"
                  />
                  <p className="text-sm font-semibold opacity-50">(88)</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Image
                src="/images/riimage2.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-2">
                <p className="text-base font-medium">AK-900 Wired Keyboard</p>
                <div className="flex space-x-3">
                  <p className="text-base text-[#DB4444] font-medium">$960</p>
                  <p className="text-base font-medium line-through opacity-50">
                    $1160
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Image
                    src="/images/Four star.png"
                    height={20}
                    width={100}
                    alt="ratings"
                  />
                  <p className="text-sm font-semibold opacity-50">(75)</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Image
                src="/images/riimage3.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-2">
                <p className="text-base font-medium">IPS LCD Gaming Monitor</p>
                <div className="flex space-x-3">
                  <p className="text-base text-[#DB4444] font-medium">$370</p>
                  <p className="text-base font-medium line-through opacity-50">
                    $400
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Image
                    src="/images/Five star.png"
                    height={20}
                    width={100}
                    alt="ratings"
                  />
                  <p className="text-sm font-semibold opacity-50">(90)</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Image
                src="/images/riimage4.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-2">
                <p className="text-base font-medium">RGB liquid CPU Cooler</p>
                <div className="flex space-x-3">
                  <p className="text-base text-[#DB4444] font-medium">$160</p>
                  <p className="text-base font-medium line-through opacity-50">
                    $170
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Image
                    src="/images/Four Half Star.png"
                    height={20}
                    width={100}
                    alt="ratings"
                  />
                  <p className="text-sm font-semibold opacity-50">(65)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
