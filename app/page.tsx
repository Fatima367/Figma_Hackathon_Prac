import { ArrowLeft, ArrowRight, ArrowUp, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen">
      <hr className="mt-[16px]" />
      <div className="flex flex-col">
        {/*-------Hero Section---------*/}
        <div className="flex flex-col items-center justify-center">
          <div className="flex">
            {/*Left*/}
            <div className="flex flex-row">
              <div className="flex flex-col space-y-[16px] mr-[16px] mt-[40px]">
                <div className="space-x-[51px] flex">
                  <p className="text-[16px]">Women’s Fashion</p>
                  <ChevronRight className="h-6 w-6" />
                </div>

                <div className="space-x-[76px] flex">
                  <p className="text-[16px]">Men’s Fashion</p>
                  <ChevronRight className="h-6 w-6" />
                </div>

                <p className="text-[16px]">Electronics</p>
                <p className="text-[16px]">Home & Lifestyle</p>
                <p className="text-[16px]">Medicine</p>
                <p className="text-[16px]">Sports & Outdoor</p>
                <p className="text-[16px]">Baby’s & Toys</p>
                <p className="text-[16px]">Groceries & Pets</p>
                <p className="text-[16px]">Health & Beauty</p>
              </div>
              <div className="h-[384px] w-[0.5px] opacity-30 bg-black"></div>
            </div>

            {/*Right*/}
            <div className="ml-[45px] mt-[40px] bg-black flex flex-col">
              <div className="flex items-center justify-center">
                <div className="flex flex-col space-y-[20px] items-start justify-between ml-[49px] mb-[35px]">
                  <div className="space-x-[24px] flex items-center justify-center mt-[49px]">
                    <Image
                      src="/images/applelogo.png"
                      width={40}
                      height={49}
                      alt="apple-logo"
                    />
                    <p className="text-[16px] text-[#FAFAFA]">
                      iPhone 14 Series
                    </p>
                  </div>
                  <h1 className="text-[48px] font-semibold text-white">
                    Up to 10% <br /> off Voucher
                  </h1>

                  <div className="space-x-[8px] text-white flex items-center justify-center">
                    <p className="text-[16px] font-medium underline">
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
        <div className="p-[80px] space-y-[40px]">
          <div className="space-x-[470px] flex">
            <div className="space-x-[87px] flex flex-row items-center">
              <div className="space-y-[24px] flex flex-col">
                <div className="space-x-[16px] flex">
                  <div className="bg-[#DB4444] h-[40px] w-[20px] rounded"></div>
                  <p className="font-semibold text-[16px] text-[#DB4444] my-auto">
                    Today's
                  </p>
                </div>
                <h2 className="text-[36px] font-bold">Flash Sales</h2>
              </div>

              <div className="flex flex-row space-x-3 items-center mt-11">
                <div className="flex flex-col space-y-[4px] items-center">
                  <p className="text-[12px] font-medium text-center">Days</p>
                  <h3 className="text-[32px] font-bold">03</h3>
                </div>
                <Image
                  src="/images/Semiclone.png"
                  height={16}
                  width={4}
                  alt="semicolon"
                />

                <div className="flex flex-col space-y-[4px] items-center">
                  <p className="text-[12px] font-medium text-center">Minutes</p>
                  <h3 className="text-[32px] font-bold">23</h3>
                </div>
                <Image
                  src="/images/Semiclone.png"
                  height={16}
                  width={4}
                  alt="semicolon"
                />

                <div className="flex flex-col space-y-[4px] items-center">
                  <p className="text-[12px] font-medium text-center">Hours</p>
                  <h3 className="text-[32px] font-bold">19</h3>
                </div>
                <Image
                  src="/images/Semiclone.png"
                  height={16}
                  width={4}
                  alt="semicolon"
                />

                <div className="flex flex-col space-y-[4px] items-center">
                  <p className="text-[12px] font-medium text-center">Seconds</p>
                  <h3 className="text-[32px] font-bold">56</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-stretch justify-center space-x-[30px] mt-[60px] mb-[140px] -mr-48">
            <div className="space-y-[16px]">
              <Image
                src="/images/riimage.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-[8px]">
                <p className="text-[16px] font-medium">HAVIT HV-G92 Gamepad</p>
                <div className="flex space-x-[12px]">
                  <p className="text-[16px] text-[#DB4444] font-medium">$120</p>
                  <p className="text-[16px] font-medium line-through opacity-50">
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
                  <p className="text-[14px] font-semibold opacity-50">(88)</p>
                </div>
              </div>
            </div>

            <div className="space-y-[16px]">
              <Image
                src="/images/riimage2.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-[8px]">
                <p className="text-[16px] font-medium">AK-900 Wired Keyboard</p>
                <div className="flex space-x-[12px]">
                  <p className="text-[16px] text-[#DB4444] font-medium">$960</p>
                  <p className="text-[16px] font-medium line-through opacity-50">
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
                  <p className="text-[14px] font-semibold opacity-50">(75)</p>
                </div>
              </div>
            </div>

            <div className="space-y-[16px]">
              <Image
                src="/images/riimage3.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-[8px]">
                <p className="text-[16px] font-medium">
                  IPS LCD Gaming Monitor
                </p>
                <div className="flex space-x-[12px]">
                  <p className="text-[16px] text-[#DB4444] font-medium">$370</p>
                  <p className="text-[16px] font-medium line-through opacity-50">
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
                  <p className="text-[14px] font-semibold opacity-50">(90)</p>
                </div>
              </div>
            </div>

            <div className="space-y-[16px]">
              <Image
                src="/images/riimage4.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-[8px]">
                <p className="text-[16px] font-medium">RGB liquid CPU Cooler</p>
                <div className="flex space-x-[12px]">
                  <p className="text-[16px] text-[#DB4444] font-medium">$160</p>
                  <p className="text-[16px] font-medium line-through opacity-50">
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
                  <p className="text-[14px] font-semibold opacity-50">(65)</p>
                </div>
              </div>
            </div>

            <div className="space-y-[16px]">
              <Image
                src="/images/riimage4.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-[8px]">
                <p className="text-[16px] font-medium">RGB liquid CPU Cooler</p>
                <div className="flex space-x-[12px]">
                  <p className="text-[16px] text-[#DB4444] font-medium">$160</p>
                  <p className="text-[16px] font-medium line-through opacity-50">
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
                  <p className="text-[14px] font-semibold opacity-50">(65)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mx-auto">
          <button className="px-[48px] py-[16px] space-x-[10px] rounded bg-[#DB4444] text-white">
            <p className="text-[16px] font-medium">View All Products</p>
          </button>
        </div>

        {/*-------------------------------------------------------------------------------------------------------------------*/}

        <div className="mt-[60px] mb-[80px] w-11/12 h-[1px] bg-black mx-auto opacity-30"></div>

        {/*-------Browse By Category---------*/}

        <div className="space-y-[60px] flex flex-col items-start justify-between mx-auto">
          <div className="flex space-x-[691px] items-center justify-stretch">
            <div className="space-y-[24px] flex flex-col">
              <div className="space-x-[16px] flex">
                <div className="bg-[#DB4444] h-[40px] w-[20px] rounded"></div>
                <p className="font-semibold text-[16px] text-[#DB4444] my-auto">
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

          <div className="flex space-x-[30px]">
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
                <p className="text-[16px] ">Phones</p>
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
                <p className="text-[16px] ">Computers</p>
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
                <p className="text-[16px] ">SmartWatch</p>
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
                <p className="text-[16px] text-white">Camera</p>
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
                <p className="text-[16px] ">HeadPhones</p>
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
                <p className="text-[16px] ">Gaming</p>
              </div>
            </div>
          </div>
        </div>

        {/*-------------------------------------------------------------------------------------------------------------------*/}

        <div className="mt-[70px] mb-[70px] w-11/12 h-[1px] bg-black mx-auto opacity-30"></div>

        {/*-------Best Selling Products---------*/}
        <div className="space-y-[60px] flex flex-col items-start justify-between mx-auto mb-[140px]">
          <div className="space-x-[611px] flex items-center justify-stretch">
            <div className="space-y-[20px] flex flex-col">
              <div className="flex space-x-[16px]">
                <div className="bg-[#DB4444] h-[40px] w-[20px] rounded"></div>
                <p className="text-[16px] font-semibold text-[#DB4444] my-auto">
                  This Month
                </p>
              </div>
              <h2 className="text-[36px] font-semibold">
                Best Selling Products
              </h2>
            </div>
            <button className="px-[48px] py-[16px] space-x-[10px] rounded bg-[#DB4444] text-white mt-14">
              <p className="text-[16px] font-medium">View All</p>
            </button>
          </div>

          <div className="flex items-center justify-center gap-[30px]">
            <div className="space-y-[16px]">
              <Image
                src="/images/riimage.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-[8px]">
                <p className="text-[16px] font-medium">HAVIT HV-G92 Gamepad</p>
                <div className="flex space-x-[12px]">
                  <p className="text-[16px] text-[#DB4444] font-medium">$120</p>
                  <p className="text-[16px] font-medium line-through opacity-50">
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
                  <p className="text-[14px] font-semibold opacity-50">(88)</p>
                </div>
              </div>
            </div>

            <div className="space-y-[16px]">
              <Image
                src="/images/riimage2.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-[8px]">
                <p className="text-[16px] font-medium">AK-900 Wired Keyboard</p>
                <div className="flex space-x-[12px]">
                  <p className="text-[16px] text-[#DB4444] font-medium">$960</p>
                  <p className="text-[16px] font-medium line-through opacity-50">
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
                  <p className="text-[14px] font-semibold opacity-50">(75)</p>
                </div>
              </div>
            </div>

            <div className="space-y-[16px]">
              <Image
                src="/images/riimage3.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-[8px]">
                <p className="text-[16px] font-medium">
                  IPS LCD Gaming Monitor
                </p>
                <div className="flex space-x-[12px]">
                  <p className="text-[16px] text-[#DB4444] font-medium">$370</p>
                  <p className="text-[16px] font-medium line-through opacity-50">
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
                  <p className="text-[14px] font-semibold opacity-50">(90)</p>
                </div>
              </div>
            </div>

            <div className="space-y-[16px]">
              <Image
                src="/images/riimage4.png"
                width={270}
                height={250}
                alt="related-item"
              />

              <div className="space-y-[8px]">
                <p className="text-[16px] font-medium">RGB liquid CPU Cooler</p>
                <div className="flex space-x-[12px]">
                  <p className="text-[16px] text-[#DB4444] font-medium">$160</p>
                  <p className="text-[16px] font-medium line-through opacity-50">
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
                  <p className="text-[14px] font-semibold opacity-50">(65)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*-------------------------------------------------------------------------------------------------------------------*/}

        {/*----------------*/}
        <div
          className="flex space-x-[65px] bg-black items-center justify-center mx-auto mb-[71px]
            h-[500px] w-10/12"
        >
          <div className="flex flex-col space-y-[32px] items-start justify-between">
            <p className="text-[16px] font-semibold text-[#00FF66]">
              Categories
            </p>
            <p className="text-[48px] font-semibold text-white">
              Enhance Your <br /> Music Experience
            </p>

            <div className="space-x-[24px] flex items-start justify-center">
              <div className="rounded-full h-[62px] w-[62px] bg-white flex items-center justify-center">
                <div className="flex flex-col items-center justify-center -space-y-1">
                  <p className="text-[16px] font-semibold text-black">23</p>
                  <p className="text-[11px] text-black">Hours</p>
                </div>
              </div>

              <div className="rounded-full h-[62px] w-[62px] bg-white flex items-center justify-center">
                <div className="flex flex-col items-center justify-center -space-y-1">
                  <p className="text-[16px] font-semibold text-black">05</p>
                  <p className="text-[11px] text-black">Days</p>
                </div>
              </div>

              <div className="rounded-full h-[62px] w-[62px] bg-white flex items-center justify-center">
                <div className="flex flex-col items-center justify-center -space-y-1">
                  <p className="text-[16px] font-semibold text-black">59</p>
                  <p className="text-[11px] text-black">Minutes</p>
                </div>
              </div>

              <div className="rounded-full h-[62px] w-[62px] bg-white flex items-center justify-center">
                <div className="flex flex-col items-center justify-center -space-y-1">
                  <p className="text-[16px] font-semibold text-black">35</p>
                  <p className="text-[11px] text-black">Seconds</p>
                </div>
              </div>
            </div>

            <button className="px-[48px] py-[16px] space-x-[10px] rounded bg-[#00FF66] text-white">
              <p className="text-[16px] font-medium">Buy Now!</p>
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
              <div className="space-x-[16px] flex">
                <div className="bg-[#DB4444] h-[40px] w-[20px] rounded"></div>
                <p className="font-semibold text-[16px] text-[#DB4444] my-auto">
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
            <div className="flex items-center justify-center gap-[30px] mt-[60px] mb-[140px]">
              <div className="space-y-[16px]">
                <Image
                  src="/images/riimage.png"
                  width={270}
                  height={250}
                  alt="related-item"
                />

                <div className="space-y-[8px]">
                  <p className="text-[16px] font-medium">
                    HAVIT HV-G92 Gamepad
                  </p>
                  <div className="flex space-x-[12px]">
                    <p className="text-[16px] text-[#DB4444] font-medium">
                      $120
                    </p>
                    <p className="text-[16px] font-medium line-through opacity-50">
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
                    <p className="text-[14px] font-semibold opacity-50">(88)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-[16px]">
                <Image
                  src="/images/riimage2.png"
                  width={270}
                  height={250}
                  alt="related-item"
                />

                <div className="space-y-[8px]">
                  <p className="text-[16px] font-medium">
                    AK-900 Wired Keyboard
                  </p>
                  <div className="flex space-x-[12px]">
                    <p className="text-[16px] text-[#DB4444] font-medium">
                      $960
                    </p>
                    <p className="text-[16px] font-medium line-through opacity-50">
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
                    <p className="text-[14px] font-semibold opacity-50">(75)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-[16px]">
                <Image
                  src="/images/riimage3.png"
                  width={270}
                  height={250}
                  alt="related-item"
                />

                <div className="space-y-[8px]">
                  <p className="text-[16px] font-medium">
                    IPS LCD Gaming Monitor
                  </p>
                  <div className="flex space-x-[12px]">
                    <p className="text-[16px] text-[#DB4444] font-medium">
                      $370
                    </p>
                    <p className="text-[16px] font-medium line-through opacity-50">
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
                    <p className="text-[14px] font-semibold opacity-50">(90)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-[16px]">
                <Image
                  src="/images/riimage4.png"
                  width={270}
                  height={250}
                  alt="related-item"
                />

                <div className="space-y-[8px]">
                  <p className="text-[16px] font-medium">
                    RGB liquid CPU Cooler
                  </p>
                  <div className="flex space-x-[12px]">
                    <p className="text-[16px] text-[#DB4444] font-medium">
                      $160
                    </p>
                    <p className="text-[16px] font-medium line-through opacity-50">
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
                    <p className="text-[14px] font-semibold opacity-50">(65)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-[30px] mt-[60px] mb-[140px]">
              <div className="space-y-[16px]">
                <Image
                  src="/images/riimage.png"
                  width={270}
                  height={250}
                  alt="related-item"
                />

                <div className="space-y-[8px]">
                  <p className="text-[16px] font-medium">
                    HAVIT HV-G92 Gamepad
                  </p>
                  <div className="flex space-x-[12px]">
                    <p className="text-[16px] text-[#DB4444] font-medium">
                      $120
                    </p>
                    <p className="text-[16px] font-medium line-through opacity-50">
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
                    <p className="text-[14px] font-semibold opacity-50">(88)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-[16px]">
                <Image
                  src="/images/riimage2.png"
                  width={270}
                  height={250}
                  alt="related-item"
                />

                <div className="space-y-[8px]">
                  <p className="text-[16px] font-medium">
                    AK-900 Wired Keyboard
                  </p>
                  <div className="flex space-x-[12px]">
                    <p className="text-[16px] text-[#DB4444] font-medium">
                      $960
                    </p>
                    <p className="text-[16px] font-medium line-through opacity-50">
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
                    <p className="text-[14px] font-semibold opacity-50">(75)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-[16px]">
                <Image
                  src="/images/riimage3.png"
                  width={270}
                  height={250}
                  alt="related-item"
                />

                <div className="space-y-[8px]">
                  <p className="text-[16px] font-medium">
                    IPS LCD Gaming Monitor
                  </p>
                  <div className="flex space-x-[12px]">
                    <p className="text-[16px] text-[#DB4444] font-medium">
                      $370
                    </p>
                    <p className="text-[16px] font-medium line-through opacity-50">
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
                    <p className="text-[14px] font-semibold opacity-50">(90)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-[16px]">
                <Image
                  src="/images/riimage4.png"
                  width={270}
                  height={250}
                  alt="related-item"
                />

                <div className="space-y-[8px]">
                  <p className="text-[16px] font-medium">
                    RGB liquid CPU Cooler
                  </p>
                  <div className="flex space-x-[12px]">
                    <p className="text-[16px] text-[#DB4444] font-medium">
                      $160
                    </p>
                    <p className="text-[16px] font-medium line-through opacity-50">
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
                    <p className="text-[14px] font-semibold opacity-50">(65)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mx-auto">
            <button className="px-[48px] py-[16px] space-x-[10px] rounded bg-[#DB4444] text-white">
              <p className="text-[16px] font-medium">View All Products</p>
            </button>
          </div>
        </div>

        {/*-------------------------------------------------------------------------------------------------------------------*/}

        <div className="mt-[60px] mb-[80px] w-10/12 h-[1px] bg-black mx-auto opacity-30"></div>

        {/*-------New Arrival---------*/}
        <div className="space-y-[60px] flex flex-col items-start justify-between mx-auto">
          <div className="space-y-[24px] flex flex-col">
            <div className="space-x-[16px] flex">
              <div className="bg-[#DB4444] h-[40px] w-[20px] rounded"></div>
              <p className="font-semibold text-[16px] text-[#DB4444] my-auto">
                Featured
              </p>
            </div>
            <h2 className="text-[36px] font-semibold">New Arrival</h2>
          </div>

          <div className="space-x-[30px] flex items-start justify-between">
            <div className="bg-black rounded w-[570px] h-[645px]">
              <Image
                src="/images/ps5.png"
                width={511}
                height={511}
                alt="PS5"
                className="mt-[89px] mx-auto"
              />

              <div className="space-y-[16px] z-20 text-white ml-8 -mt-40">
                <h2 className="text-[24px] font-semibold">PlayStation 5</h2>
                <p className="text-[14px]">
                  Black and White version of the PS5 <br /> coming out on sale.
                </p>
                <p className="text-[16px] font-medium underline">Shop Now</p>
              </div>
            </div>

            <div className="flex flex-col space-y-[32px]">
              <div className="rounded bg-[#0D0D0D] flex w-[570px] -space-x-[141px]">
                <div className="space-y-[16px] z-10 text-white ml-6 mt-24 mb-5">
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

              <div className="space-x-[30px] flex">
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
                      <p className="text-[14px]">Amazon wireless speakers</p>
                      <p className="text-[16px] font-medium underline">
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
                      <p className="text-[14px]">GUCCI INTENSE OUD EDP</p>
                      <p className="text-[16px] font-medium underline">
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
        <div className=" flex space-x-[88px] mt-[140px] mb-[140px] mx-auto ">
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
              <p className="text-[14px] ">
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
              <p className="text-[14px] ">Friendly 24/7 customer support</p>
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
              <p className="text-[14px] ">We reurn money within 30 days</p>
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
