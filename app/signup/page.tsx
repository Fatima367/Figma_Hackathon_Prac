import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="">
      <div className="mt-14 w-full space-x-20 mb-36 flex pr-5">
        <Image
          src="/images/Side Image.png"
          height={650}
          width={640}
          alt="image"
        />
        <div className="space-y-12 my-auto w-[32rem]">
          <div className="space-y-6 flex flex-col items-start my-auto">
            <h2 className="text-[36px] font-medium"> Create an account</h2>
            <p className="text-base">Enter your details below</p>
          </div>
          <div className="space-y-10 mx-auto my-auto flex flex-col">
            <div className="space-y-10">
              <div className="space-y-2">
                <p className="text-base">Name</p>
                <hr />
              </div>
              <div className="space-y-2">
                <p className="text-base">Email or Phone Number</p>
                <hr />
              </div>
              <div className="space-y-2">
                <p className="text-base">Password</p>
                <hr />
              </div>
            </div>
            <div className="space-y-4">
              <button
                className="w-full h-14 py-4
                            space-x-8 bg-[#DB4444] rounded text-white text-base
                            font-medium"
              >
                Create Account
              </button>
              <div className="space-y-8">
                <button
                  className="w-full h-14 px-20 py-4
                                 gap-4 rounded text-white text-base
                                 font-medium ring-1 ring-black flex items-center justify-center"
                >
                  <Image
                    src="/images/Icon-Google.png"
                    height={24}
                    width={24}
                    alt="google-icon"
                  />
                  <p className="text-black text-base">Sign up with Google</p>
                </button>
                <div className="space-x-4 flex items-center justify-center">
                  <p className="text-base text-[#000000]">
                    Already have account?
                  </p>
                  <div>
                    <p className="text-base font-medium">Log in</p>
                    <hr className="border-b border-b-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
