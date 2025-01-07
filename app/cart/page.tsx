import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function Cart() {
  return (
    <div className="p-20">
      <section className="flex flex-col mx-auto w-full">
        <div className="space-x-3 flex">
          <p className="text-sm opacity-50 ">Home</p>
          <p className="text-sm opacity-50">/</p>
          <p className="text-sm">Cart</p>
        </div>

        <div className="flex flex-col mx-auto max-w-[80rem] items-center justify-center relative">
          <div className="space-y-20 mt-20 flex items-center justify-between w-full">
            <div className="space-y-6">
              <div className="space-y-10 flex flex-col">
                {/* Header Row */}
                <div className="rounded shadow p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-normal w-1/4 text-center">
                      Product
                    </p>
                    <p className="text-base font-normal w-1/4 text-center">
                      Price
                    </p>
                    <p className="text-base font-normal w-1/4 text-center">
                      Quantity
                    </p>
                    <p className="text-base font-normal w-1/4 text-center">
                      Subtotal
                    </p>
                  </div>
                </div>

                {/* Product 1 Row */}
                <div className="rounded shadow p-6 flex items-center justify-between">
                  <div className="flex items-center w-1/4">
                    <Image
                      src="/images/cartitem.png"
                      height={54}
                      width={54}
                      alt="cartitem"
                      className="mr-4"
                    />
                    <p className="text-base font-normal">LCD Monitor</p>
                  </div>
                  <p className="text-base font-normal w-1/4 text-center">
                    $650
                  </p>
                  <div className="w-1/4 text-center">
                    <div className="ring-1 ring-black ring-opacity-40 rounded p-1 inline-block">
                      <div className="flex items-center space-x-2">
                        <p className="text-base">01</p>
                        <div className="flex flex-col">
                          <ChevronUp className="h-4 w-4" />
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-base font-normal w-1/4 text-center">
                    $650
                  </p>
                </div>

                {/* Product 2 Row */}
                <div className="rounded shadow p-6 flex items-center justify-between">
                  <div className="flex items-center w-1/4">
                    <Image
                      src="/images/cartitem2.png"
                      height={54}
                      width={54}
                      alt="cartitem2"
                      className="mr-4"
                    />
                    <p className="text-base font-normal">H1 Gamepad</p>
                  </div>
                  <p className="text-base font-normal w-1/4 text-center">
                    $550
                  </p>
                  <div className="w-1/4 text-center">
                    <div className="ring-1 ring-black ring-opacity-40 rounded p-1 inline-block">
                      <div className="flex items-center space-x-2">
                        <p className="text-base">02</p>
                        <div className="flex flex-col">
                          <ChevronUp className="h-4 w-4" />
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-base font-normal w-1/4 text-center">
                    $1100
                  </p>
                </div>
              </div>

              <div className="gap-[47rem] flex items-center justify-between w-full">
                <button className="space-x-8 px-12 py-4 rounded ring-1 ring-black ring-opacity-50">
                  <p className="text-base font-medium">View All Products</p>
                </button>
                <button className="space-x-8 px-12 py-4 rounded ring-1 ring-black ring-opacity-50">
                  <p className="text-base font-medium">Update Cart</p>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-row mb-36 justify-between w-full">
            <div className="space-x-4 flex">
              <div className="ring-1 ring-black rounded flex items-center justify-between w-[300px] h-14">
                <p className="text-sm opacity-50 ml-5">Coupon Code</p>
              </div>

              <button
                className="space-x-8 px-12 py-4 rounded ring-1 ring-black ring-opacity-50
                text-white bg-[#DB4444] h-14 w-52 flex items-center justify-center"
              >
                <p className="text-base font-medium">Apply Coupon</p>
              </button>
            </div>

            <div className="ring-[1.5px] ring-black rounded py-10 px-8 flex flex-col h-80">
              <p className="text-[20px] font-medium">Cart Total</p>

              <div className="flex items-center justify-center my-4">
                <p className="text-base">Subtotal:</p>
                <p className="text-base ml-72">$1750</p>
              </div>

              <hr />

              <div className="flex items-center justify-center my-4">
                <p className="text-base">Shipping:</p>
                <p className="text-base ml-[295px]">Free</p>
              </div>

              <hr />

              <div className="flex items-center justify-center my-4">
                <p className="text-base">Total:</p>
                <p className="text-base ml-[305px]">$1750</p>
              </div>

              <div className="flex items-center justify-center">
                <button
                  className="space-x-8 px-12 py-4 rounded ring-1 ring-black ring-opacity-50
                text-white bg-[#DB4444]"
                >
                  <p className="text-base font-medium">Proceed to checkout</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
