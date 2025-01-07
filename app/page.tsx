import { ArrowLeft, ArrowRight, ArrowUp, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen">
      <hr className="mt-4" />
      <div className="flex flex-col mx-auto">
        {/*-------Hero Section---------*/}
        <div className="flex flex-col items-center justify-center">
          <div className="flex">
            {/*Left*/}
            <div className="lg:flex lg:flex-row lg:visible hidden">
              <div className="flex flex-col space-y-4 mr-4 mt-10">
                <div className="space-x-[51px] flex">
                  <p className="text-base">Women’s Fashion</p>
                  <ChevronRight className="h-6 w-6" />
                </div>

                <div className="space-x-[76px] flex">
                  <p className="text-base">Men’s Fashion</p>
                  <ChevronRight className="h-6 w-6" />
                </div>

                <p className="text-base">Electronics</p>
                <p className="text-base">Home & Lifestyle</p>
                <p className="text-base">Medicine</p>
                <p className="text-base">Sports & Outdoor</p>
                <p className="text-base">Baby’s & Toys</p>
                <p className="text-base">Groceries & Pets</p>
                <p className="text-base">Health & Beauty</p>
              </div>
              <div className="h-[384px] w-[0.5px] opacity-30 bg-black"></div>
            </div>

            {/*Right*/}
            <div className="ml-[45px] mt-10 bg-black flex flex-col">
              <div className="flex items-center justify-center">
                <div className="flex flex-col space-y-[20px] items-start justify-between ml-[49px] mb-[35px]">
                  <div className="space-x-[24px] flex items-center justify-center mt-[49px]">
                    <Image
                      src="/images/applelogo.png"
                      width={40}
                      height={49}
                      alt="apple-logo"
                    />
                    <p className="text-base text-[#FAFAFA]">
                      iPhone 14 Series
                    </p>
                  </div>
                  <h1 className="text-[48px] font-semibold text-white">
                    Up to 10% <br /> off Voucher
                  </h1>

                  <div className="space-x-[8px] text-white flex items-center justify-center">
                    <p className="text-base font-medium underline">
                      Shop Now
                    </p>
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>

                <Image
                  src="/images/heroimage.png"
                  width={496}
                  height={352}
                  alt="JBL-BOOMBOX"
                  className="mt-8
             z-10"
                />
              </div>

              <div className="flex space-x-3 items-center justify-center z-10 mb-3 -ml-24">
                <div className="rounded-full bg-white opacity-50 h-3 w-3"></div>
                <div className="rounded-full bg-white opacity-50 h-3 w-3"></div>
                <div className="rounded-full h-[10px] w-[10px] bg-[#DB4444] ring-2 ring-white"></div>
                <div className="rounded-full bg-white opacity-50 h-3 w-3"></div>
                <div className="rounded-full bg-white opacity-50 h-3 w-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/*-------------------------------------------------------------------------------------------------------------------*/}

        {/*-------Flash Sales Section---------*/}
        <div className="p-20 space-y-10 flex flex-col">
          <div className="space-x-[470px] flex">
            <div className="lg:space-x-[87px] lg:flex lg:flex-row lg:items-center grid grid-cols-1">
              <div className="space-y-[24px] flex flex-col">
                <div className="space-x-4 flex">
                  <div className="bg-[#DB4444] h-10 w-[20px] rounded"></div>
                  <p className="font-semibold text-base text-[#DB4444] my-auto">
                    Today's
                  </p>
                </div>
                <h2 className="text-[36px] font-bold">Flash Sales</h2>
              </div>

              <div className="flex flex-row space-x-3 items-center mt-11">
                <div className="flex flex-col space-y-[4px] items-center">
                  <p className="text-3 font-medium text-center">Days</p>
                  <h3 className="text-[32px] font-bold">03</h3>
                </div>
                <Image
                  src="/images/Semiclone.png"
                  height={16}
                  width={4}
                  alt="semicolon"
                />

                <div className="flex flex-col space-y-[4px] items-center">
                  <p className="text-3 font-medium text-center">Minutes</p>
                  <h3 className="text-[32px] font-bold">23</h3>
                </div>
                <Image
                  src="/images/Semiclone.png"
                  height={16}
                  width={4}
                  alt="semicolon"
                />

                <div className="flex flex-col space-y-[4px] items-center">
                  <p className="text-3 font-medium text-center">Hours</p>
                  <h3 className="text-[32px] font-bold">19</h3>
                </div>
                <Image
                  src="/images/Semiclone.png"
                  height={16}
                  width={4}
                  alt="semicolon"
                />

                <div className="flex flex-col space-y-[4px] items-center">
                  <p className="text-3 font-medium text-center">Seconds</p>
                  <h3 className="text-[32px] font-bold">56</h3>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:flex lg:items-stretch lg:justify-center lg:space-x-[30px] mt-[60px] mb-36 -mr-48
          grid grid-cols-1 space-y-8 lg:space-y-0">
            <div className="space-y-4">
              <Image
                src="/images/riimage.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-[8px]">
                <p className="text-base font-medium">HAVIT HV-G92 Gamepad</p>
                <div className="flex space-x-3">
                  <p className="text-base text-[#DB4444] font-medium">$120</p>
                  <p className="text-base font-medium line-through opacity-50">
                    $160
                  </p>
                </div>
                <div className="flex space-x-[8px]">
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

              <div className="space-y-[8px]">
                <p className="text-base font-medium">AK-900 Wired Keyboard</p>
                <div className="flex space-x-3">
                  <p className="text-base text-[#DB4444] font-medium">$960</p>
                  <p className="text-base font-medium line-through opacity-50">
                    $1160
                  </p>
                </div>
                <div className="flex space-x-[8px]">
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

              <div className="space-y-[8px]">
                <p className="text-base font-medium">
                  IPS LCD Gaming Monitor
                </p>
                <div className="flex space-x-3">
                  <p className="text-base text-[#DB4444] font-medium">$370</p>
                  <p className="text-base font-medium line-through opacity-50">
                    $400
                  </p>
                </div>
                <div className="flex space-x-[8px]">
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

              <div className="space-y-[8px]">
                <p className="text-base font-medium">RGB liquid CPU Cooler</p>
                <div className="flex space-x-3">
                  <p className="text-base text-[#DB4444] font-medium">$160</p>
                  <p className="text-base font-medium line-through opacity-50">
                    $170
                  </p>
                </div>
                <div className="flex space-x-[8px]">
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

            <div className="space-y-4">
              <Image
                src="/images/riimage4.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-[8px]">
                <p className="text-base font-medium">RGB liquid CPU Cooler</p>
                <div className="flex space-x-3">
                  <p className="text-base text-[#DB4444] font-medium">$160</p>
                  <p className="text-base font-medium line-through opacity-50">
                    $170
                  </p>
                </div>
                <div className="flex space-x-[8px]">
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

        <div className="flex mx-auto">
          <button className="px-12 py-4 space-x-8 rounded bg-[#DB4444] text-white">
            <p className="text-base font-medium">View All Products</p>
          </button>
        </div>

        {/*-------------------------------------------------------------------------------------------------------------------*/}

        <div className="mt-[60px] mb-[80px] w-11/12 h-[1px] bg-black mx-auto opacity-30"></div>

        {/*-------Browse By Category---------*/}
        <div className="space-y-[60px] flex flex-col items-start justify-between mx-auto">
          <div className="lg:flex lg:space-x-[691px] lg:items-center lg:justify-stretch grid
          grid-cols-1 space-y-3">
            <div className="lg:space-y-[24px] lg:flex lg:flex-col grid space-y-4">
              <div className="space-x-4 flex">
                <div className="bg-[#DB4444] h-10 w-[20px] rounded"></div>
                <p className="font-semibold text-base text-[#DB4444] my-auto">
                  Categories
                </p>
              </div>
              <h2 className="text-[36px] font-semibold">Browse By Category</h2>
            </div>
            <div className="space-x-[8px] flex">
              <div className="rounded-full bg-[#F5F5F5] h-[46px] w-[46px] flex items-center justify-center">
                <ArrowLeft className="h-[24px] w-[24px]" />
              </div>
              <div className="rounded-full bg-[#F5F5F5] h-[46px] w-[46px] flex items-center justify-center">
                <ArrowRight className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>

          <div className="lg:flex lg:space-x-[30px] grid grid-cols-1 mx-auto space-y-3">
            <div
              className="flex flex-col items-center justify-center rounded ring-1 ring-black ring-opacity-30
             w-[170px] h-[145px]"
            >
              <div className="flex flex-col space-y-[24px] items-center justify-center">
                <Image
                  src="/images/Category-CellPhone.png"
                  height={56}
                  width={56}
                  alt="services"
                />
                <p className="text-base ">Phones</p>
              </div>
            </div>

            <div
              className="flex flex-col items-center justify-center rounded ring-1 ring-black ring-opacity-30
             w-[170px] h-[145px]"
            >
              <div className="flex flex-col space-y-[24px] items-center justify-center">
                <Image
                  src="/images/Category-Computer.png"
                  height={56}
                  width={56}
                  alt="services"
                />
                <p className="text-base ">Computers</p>
              </div>
            </div>

            <div
              className="flex flex-col items-center justify-center rounded ring-1 ring-black ring-opacity-30
             w-[170px] h-[145px]"
            >
              <div className="flex flex-col space-y-[24px] items-center justify-center">
                <Image
                  src="/images/Category-SmartWatch.png"
                  height={56}
                  width={56}
                  alt="services"
                />
                <p className="text-base ">SmartWatch</p>
              </div>
            </div>

            <div
              className="flex flex-col items-center justify-center rounded ring-1 ring-black ring-opacity-30
             w-[170px] h-[145px] bg-[#DB4444] shadow-sm"
            >
              <div className="flex flex-col space-y-[24px] items-center justify-center">
                <Image
                  src="/images/Category-Camera.png"
                  height={56}
                  width={56}
                  alt="services"
                />
                <p className="text-base text-white">Camera</p>
              </div>
            </div>

            <div
              className="flex flex-col items-center justify-center rounded ring-1 ring-black ring-opacity-30
             w-[170px] h-[145px]"
            >
              <div className="flex flex-col space-y-[24px] items-center justify-center">
                <Image
                  src="/images/Category-HeadPhone.png"
                  height={56}
                  width={56}
                  alt="services"
                />
                <p className="text-base ">HeadPhones</p>
              </div>
            </div>

            <div
              className="flex flex-col items-center justify-center rounded ring-1 ring-black ring-opacity-30
             w-[170px] h-[145px]"
            >
              <div className="flex flex-col space-y-[24px] items-center justify-center">
                <Image
                  src="/images/Category-Gamepad.png"
                  height={56}
                  width={56}
                  alt="services"
                />
                <p className="text-base ">Gaming</p>
              </div>
            </div>
          </div>
        </div>

        {/*-------------------------------------------------------------------------------------------------------------------*/}

        <div className="mt-[70px] mb-[70px] w-11/12 h-[1px] bg-black mx-auto opacity-30"></div>

        {/*-------Best Selling Products---------*/}
        <div className="space-y-[60px] flex flex-col items-start justify-between mx-auto mb-36">
          <div className="space-x-[611px] flex items-center justify-stretch">
            <div className="space-y-[20px] flex flex-col">
              <div className="flex space-x-4">
                <div className="bg-[#DB4444] h-10 w-[20px] rounded"></div>
                <p className="text-base font-semibold text-[#DB4444] my-auto">
                  This Month
                </p>
              </div>
              <h2 className="text-[36px] font-semibold">
                Best Selling Products
              </h2>
            </div>
            <button className="px-12 py-4 space-x-8 rounded bg-[#DB4444] text-white mt-14">
              <p className="text-base font-medium">View All</p>
            </button>
          </div>

          <div className="lg:flex lg:items-center lg:justify-center lg:gap-[30px] grid grid-cols-1 space-y-6">
            <div className="space-y-4">
              <Image
                src="/images/riimage.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-[8px]">
                <p className="text-base font-medium">HAVIT HV-G92 Gamepad</p>
                <div className="flex space-x-3">
                  <p className="text-base text-[#DB4444] font-medium">$120</p>
                  <p className="text-base font-medium line-through opacity-50">
                    $160
                  </p>
                </div>
                <div className="flex space-x-[8px]">
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

              <div className="space-y-[8px]">
                <p className="text-base font-medium">AK-900 Wired Keyboard</p>
                <div className="flex space-x-3">
                  <p className="text-base text-[#DB4444] font-medium">$960</p>
                  <p className="text-base font-medium line-through opacity-50">
                    $1160
                  </p>
                </div>
                <div className="flex space-x-[8px]">
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

              <div className="space-y-[8px]">
                <p className="text-base font-medium">
                  IPS LCD Gaming Monitor
                </p>
                <div className="flex space-x-3">
                  <p className="text-base text-[#DB4444] font-medium">$370</p>
                  <p className="text-base font-medium line-through opacity-50">
                    $400
                  </p>
                </div>
                <div className="flex space-x-[8px]">
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

              <div className="space-y-[8px]">
                <p className="text-base font-medium">RGB liquid CPU Cooler</p>
                <div className="flex space-x-3">
                  <p className="text-base text-[#DB4444] font-medium">$160</p>
                  <p className="text-base font-medium line-through opacity-50">
                    $170
                  </p>
                </div>
                <div className="flex space-x-[8px]">
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

        {/*-------------------------------------------------------------------------------------------------------------------*/}

        {/*----------------*/}
        <div
          className="lg:flex lg:space-x-[65px] bg-black items-center justify-center mx-auto mb-[71px]
            lg:h-[500px] lg:w-10/12 "
        >
          <div className="flex flex-col space-y-[32px] items-start justify-between">
            <p className="text-base font-semibold text-[#00FF66]">
              Categories
            </p>
            <p className="text-[48px] font-semibold text-white">
              Enhance Your <br /> Music Experience
            </p>

            <div className="space-x-[24px] flex items-start justify-center">
              <div className="rounded-full h-[62px] w-[62px] bg-white flex items-center justify-center">
                <div className="flex flex-col items-center justify-center -space-y-1">
                  <p className="text-base font-semibold text-black">23</p>
                  <p className="text-[11px] text-black">Hours</p>
                </div>
              </div>

              <div className="rounded-full h-[62px] w-[62px] bg-white flex items-center justify-center">
                <div className="flex flex-col items-center justify-center -space-y-1">
                  <p className="text-base font-semibold text-black">05</p>
                  <p className="text-[11px] text-black">Days</p>
                </div>
              </div>

              <div className="rounded-full h-[62px] w-[62px] bg-white flex items-center justify-center">
                <div className="flex flex-col items-center justify-center -space-y-1">
                  <p className="text-base font-semibold text-black">59</p>
                  <p className="text-[11px] text-black">Minutes</p>
                </div>
              </div>

              <div className="rounded-full h-[62px] w-[62px] bg-white flex items-center justify-center">
                <div className="flex flex-col items-center justify-center -space-y-1">
                  <p className="text-base font-semibold text-black">35</p>
                  <p className="text-[11px] text-black">Seconds</p>
                </div>
              </div>
            </div>

            <button className="px-12 py-4 space-x-8 rounded bg-[#00FF66] text-white">
              <p className="text-base font-medium">Buy Now!</p>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center my-auto mr-40">
            <div className="rounded-full bg-[#D9D9D9] w-[504px] h-[500px] blur-[50px] opacity-30 -mt-14"></div>
            <Image
              src="/images/headphonelarge.png"
              width={568}
              height={330}
              alt="JBL-BOOMBOX"
              className="-mt-[380px] mb-16
           z-10"
            />
          </div>
        </div>

        {/*-------------------------------------------------------------------------------------------------------------------*/}

        {/*-------Explore Our Products---------*/}
        <div className="space-y-[60px] flex flex-col items-start justify-between mx-auto">
          <div className="flex space-x-[691px] items-center justify-stretch">
            <div className="space-y-[24px] flex flex-col">
              <div className="space-x-4 flex">
                <div className="bg-[#DB4444] h-10 w-[20px] rounded"></div>
                <p className="font-semibold text-base text-[#DB4444] my-auto">
                  Our Products
                </p>
              </div>
              <h2 className="text-[36px] font-semibold">
                Explore Our Products
              </h2>
            </div>
            <div className="space-x-[8px] flex">
              <div className="rounded-full bg-[#F5F5F5] h-[46px] w-[46px] flex items-center justify-center">
                <ArrowLeft className="h-[24px] w-[24px]" />
              </div>
              <div className="rounded-full bg-[#F5F5F5] h-[46px] w-[46px] flex items-center justify-center">
                <ArrowRight className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>

          <div className="space-y-[60px]">
            <div className="lg:flex items-center justify-center lg:gap-[30px] mt-[60px] mb-36
            grid grid-cols-1 space-y-6">
              <div className="space-y-4">
                <Image
                  src="/images/riimage.png"
                  width={270}
                  height={250}
                  alt="related-item"
                />

                <div className="space-y-[8px]">
                  <p className="text-base font-medium">
                    HAVIT HV-G92 Gamepad
                  </p>
                  <div className="flex space-x-3">
                    <p className="text-base text-[#DB4444] font-medium">
                      $120
                    </p>
                    <p className="text-base font-medium line-through opacity-50">
                      $160
                    </p>
                  </div>
                  <div className="flex space-x-[8px]">
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

                <div className="space-y-[8px]">
                  <p className="text-base font-medium">
                    AK-900 Wired Keyboard
                  </p>
                  <div className="flex space-x-3">
                    <p className="text-base text-[#DB4444] font-medium">
                      $960
                    </p>
                    <p className="text-base font-medium line-through opacity-50">
                      $1160
                    </p>
                  </div>
                  <div className="flex space-x-[8px]">
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

                <div className="space-y-[8px]">
                  <p className="text-base font-medium">
                    IPS LCD Gaming Monitor
                  </p>
                  <div className="flex space-x-3">
                    <p className="text-base text-[#DB4444] font-medium">
                      $370
                    </p>
                    <p className="text-base font-medium line-through opacity-50">
                      $400
                    </p>
                  </div>
                  <div className="flex space-x-[8px]">
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

                <div className="space-y-[8px]">
                  <p className="text-base font-medium">
                    RGB liquid CPU Cooler
                  </p>
                  <div className="flex space-x-3">
                    <p className="text-base text-[#DB4444] font-medium">
                      $160
                    </p>
                    <p className="text-base font-medium line-through opacity-50">
                      $170
                    </p>
                  </div>
                  <div className="flex space-x-[8px]">
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

            <div className="lg:flex items-center justify-center lg:gap-[30px] mt-[60px] mb-36 
            grid grid-cols-1 space-y-6">
              <div className="space-y-4">
                <Image
                  src="/images/riimage.png"
                  width={270}
                  height={250}
                  alt="related-item"
                />

                <div className="space-y-[8px]">
                  <p className="text-base font-medium">
                    HAVIT HV-G92 Gamepad
                  </p>
                  <div className="flex space-x-3">
                    <p className="text-base text-[#DB4444] font-medium">
                      $120
                    </p>
                    <p className="text-base font-medium line-through opacity-50">
                      $160
                    </p>
                  </div>
                  <div className="flex space-x-[8px]">
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

                <div className="space-y-[8px]">
                  <p className="text-base font-medium">
                    AK-900 Wired Keyboard
                  </p>
                  <div className="flex space-x-3">
                    <p className="text-base text-[#DB4444] font-medium">
                      $960
                    </p>
                    <p className="text-base font-medium line-through opacity-50">
                      $1160
                    </p>
                  </div>
                  <div className="flex space-x-[8px]">
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

                <div className="space-y-[8px]">
                  <p className="text-base font-medium">
                    IPS LCD Gaming Monitor
                  </p>
                  <div className="flex space-x-3">
                    <p className="text-base text-[#DB4444] font-medium">
                      $370
                    </p>
                    <p className="text-base font-medium line-through opacity-50">
                      $400
                    </p>
                  </div>
                  <div className="flex space-x-[8px]">
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

                <div className="space-y-[8px]">
                  <p className="text-base font-medium">
                    RGB liquid CPU Cooler
                  </p>
                  <div className="flex space-x-3">
                    <p className="text-base text-[#DB4444] font-medium">
                      $160
                    </p>
                    <p className="text-base font-medium line-through opacity-50">
                      $170
                    </p>
                  </div>
                  <div className="flex space-x-[8px]">
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

          <div className="flex mx-auto">
            <button className="px-12 py-4 space-x-8 rounded bg-[#DB4444] text-white">
              <p className="text-base font-medium">View All Products</p>
            </button>
          </div>
        </div>

        {/*-------------------------------------------------------------------------------------------------------------------*/}

        <div className="mt-[60px] mb-[80px] w-10/12 h-[1px] bg-black mx-auto opacity-30"></div>

        {/*-------New Arrival---------*/}
        <div className="space-y-[60px] flex flex-col items-start justify-between mx-auto">
          <div className="space-y-[24px] flex flex-col">
            <div className="space-x-4 flex">
              <div className="bg-[#DB4444] h-10 w-[20px] rounded"></div>
              <p className="font-semibold text-base text-[#DB4444] my-auto">
                Featured
              </p>
            </div>
            <h2 className="text-[36px] font-semibold">New Arrival</h2>
          </div>

          <div className="lg:space-x-[30px] lg:flex items-start justify-between grid">
            <div className="bg-black rounded w-[570px] h-[645px]">
              <Image
                src="/images/ps5.png"
                width={511}
                height={511}
                alt="PS5"
                className="mt-[89px] mx-auto"
              />

              <div className="space-y-4 z-20 text-white ml-8 -mt-40">
                <h2 className="text-[24px] font-semibold">PlayStation 5</h2>
                <p className="text-sm">
                  Black and White version of the PS5 <br /> coming out on sale.
                </p>
                <p className="text-base font-medium underline">Shop Now</p>
              </div>
            </div>

            <div className="flex flex-col space-y-[32px]">
              <div className="rounded bg-[#0D0D0D] lg:flex lg:w-[570px] lg:mt-0 mt-5 -space-x-[141px] grid w-[350px]">
                <div className="space-y-4 z-10 text-white ml-6 mt-24 mb-5">
                  <h2 className="text-[24px] font-semibold">
                    Women’s Collections
                  </h2>
                  <p className="text-[24px]">
                    Featured woman collections that <br /> give you another
                    vibe.
                  </p>
                  <p className="text-[24px] font-medium underline">Shop Now</p>
                </div>
                <Image
                  src="/images/hatwoman.png"
                  height={286}
                  width={432}
                  alt="hat-woman"
                />
              </div>

              <div className="lg:space-x-[30px] lg:flex grid space-y-5">
                <div className="bg-black w-[270px] h-[284px]">
                  <div className="flex flex-col items-center justify-center">
                    <div className="rounded-full bg-[#D9D9D9] w-[260px] h-[274px] blur-[70px] opacity-30"></div>
                    <Image
                      src="/images/speakers.png"
                      width={190}
                      height={221}
                      alt="Speakers"
                      className=" mx-auto -mt-60 z-10 opacity-100"
                    />
                    <div className="space-y-[8px] z-50 text-white -mt-[90px] -ml-10">
                      <h2 className="text-[24px] font-semibold">Speakers</h2>
                      <p className="text-sm">Amazon wireless speakers</p>
                      <p className="text-base font-medium underline">
                        Shop Now
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black w-[270px] h-[284px]">
                  <div className="flex flex-col items-center justify-center">
                    <div className="rounded-full bg-[#D9D9D9] w-[260px] h-[274px] blur-[60px] opacity-30"></div>
                    <Image
                      src="/images/gucciperfume.png"
                      width={201}
                      height={203}
                      alt="Speakers"
                      className=" mx-auto -mt-60 z-10 opacity-100"
                    />
                    <div className="space-y-[8px] z-50 text-white -mt-[90px] -ml-10">
                      <h2 className="text-[24px] font-semibold">Perfume</h2>
                      <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                      <p className="text-base font-medium underline">
                        Shop Now
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*-------------------------------------------------------------------------------------------------------------------*/}

        {/*-------Last Section---------*/}
        <div className="lg:flex lg:space-x-[88px] mt-[140px] mb-36 mx-auto grid grid-cols-1 space-y-10">
          <div
            className="flex flex-col items-center justify-center
       space-y-[24px]"
          >
            <Image
              src="/images/Services5.png"
              height={80}
              width={80}
              alt="services"
            />
            <div className="space-y-[8px] flex flex-col items-center justify-center">
              <h2 className="text-[20px] font-semibold">
                FREE AND FAST DELIVERY{" "}
              </h2>
              <p className="text-sm ">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center
        space-y-[24px]"
          >
            <Image
              src="/images/Services6.png"
              height={80}
              width={80}
              alt="services"
            />
            <div className="space-y-[8px] flex flex-col items-center justify-center">
              <h2 className="text-[20px] font-semibold">
                24/7 CUSTOMER SERVICE
              </h2>
              <p className="text-sm ">Friendly 24/7 customer support</p>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center
        space-y-[24px]"
          >
            <Image
              src="/images/Services7.png"
              height={80}
              width={80}
              alt="services"
            />
            <div className="space-y-[8px] flex flex-col items-center justify-center">
              <h2 className="text-[20px] font-semibold">
                MONEY BACK GUARANTEE
              </h2>
              <p className="text-sm ">We reurn money within 30 days</p>
            </div>
          </div>
        </div>

        {/*-------------------------------------------------------------------------------------------------------------------*/}

        {/*-------Bottom Arrow---------*/}
        <div className="mb-[32px] flex justify-end mr-28">
          <div className="rounded-full bg-[#F5F5F5] h-[46px] w-[46px] flex items-center justify-center">
            <ArrowUp className="h-[24px] w-[24px]" />
          </div>
        </div>

        {/*-------------------------------------------------------------------------------------------------------------------*/}
      </div>
    </main>
  );
}
