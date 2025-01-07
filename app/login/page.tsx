import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="">
      <div className="mt-14 w-full space-x-20 mb-36 flex pr-5">
        <Image
          src="/images/Side Image.png"
          height={650}
          width={640}
          alt="image"
        />
        <div className="space-y-12 w-[32rem] my-auto">
          <div className="space-y-6 flex flex-col items-start my-auto">
            <h2 className="text-[36px] font-medium">Log in to Exclusive</h2>
            <p className="text-base">Enter your details below</p>
          </div>
          <div className="space-y-10">
            <div className="space-y-2">
              <p className="text-base">Email or Phone Number</p>
              <hr />
            </div>
            <div className="space-y-2">
              <p className="text-base">Password</p>
              <hr />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="w-36 h-14 px-12 py-4
                            space-x-8 bg-[#DB4444] rounded text-white text-base
                            font-medium"
            >
              Login
            </button>
            <p className="text-base text-[#DB4444]">Forget Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
