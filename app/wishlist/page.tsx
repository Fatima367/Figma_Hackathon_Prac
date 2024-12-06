import Image from "next/image";

export default function Wishlist() {
  return (
    <div className="w-screen">
      <hr className="mt-[16px]" />

      <main className="flex items-start justify-between">
        <div className="space-y-[80px] p-[80px] mb-[140px] mx-auto">
          <div className="space-y-[60px]">
            <div className="space-x-[835px] flex items-center justify-stretch">
              <p className="text-[20px]">Wishlist (4)</p>
              <button
                className="px-[48px] py-[16px] space-x-[10px] rounded ring-1 ring-black
                        ring-opacity-50"
              >
                <p className="text-[16px] font-medium">View All Products</p>
              </button>
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

          <div className="space-y-[60px]">
            <div className="space-x-[864px] flex items-center justify-stretch">
              <div className="flex space-x-[16px]">
                <div className="bg-[#DB4444] h-[40px] w-[20px] rounded"></div>
                <p className="text-[20px] my-auto">Just For You</p>
              </div>
              <button
                className="px-[48px] py-[16px] space-x-[10px] rounded ring-1 ring-black
                        ring-opacity-50"
              >
                <p className="text-[16px] font-medium">See All</p>
              </button>
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
        </div>
      </main>
    </div>
  );
}
