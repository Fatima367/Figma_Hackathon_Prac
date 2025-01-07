import Image from "next/image";

export default function Wishlist() {
  return (
    <div className="w-screen">
      <hr className="mt-4" />

      <main className="flex items-start justify-between">
        <div className="space-y-[80px] p-20 mb-36 mx-auto">
          <div className="space-y-[60px]">
            <div className="space-x-[835px] flex items-center justify-stretch">
              <p className="text-[20px]">Wishlist (4)</p>
              <button
                className="px-12 py-4 space-x-8 rounded ring-1 ring-black
                        ring-opacity-50"
              >
                <p className="text-base font-medium">View All Products</p>
              </button>
            </div>

            <div className="flex items-center justify-center gap-[30px] mt-[60px] mb-36">
              <div className="space-y-4">
                <Image
                  src="/images/riimage.png"
                  width={270}
                  height={250}
                  alt="related-item"
                />

                <div className="space-y-2">
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

                <div className="space-y-2">
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

                <div className="space-y-2">
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

                <div className="space-y-2">
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

          <div className="space-y-[60px]">
            <div className="space-x-[864px] flex items-center justify-stretch">
              <div className="flex space-x-4">
                <div className="bg-[#DB4444] h-10 w-[20px] rounded"></div>
                <p className="text-[20px] my-auto">Just For You</p>
              </div>
              <button
                className="px-12 py-4 space-x-8 rounded ring-1 ring-black
                        ring-opacity-50"
              >
                <p className="text-base font-medium">See All</p>
              </button>
            </div>

            <div className="flex items-center justify-center gap-[30px] mt-[60px] mb-36">
              <div className="space-y-4">
                <Image
                  src="/images/riimage.png"
                  width={270}
                  height={250}
                  alt="related-item"
                />

                <div className="space-y-2">
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

                <div className="space-y-2">
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

                <div className="space-y-2">
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

                <div className="space-y-2">
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
        </div>
      </main>
    </div>
  );
}
