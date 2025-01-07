import Image from "next/image";

export default function SignupPage() {
    return(
        <div className="  ">
             
            <div className="mt-[60px] w-[1305px] h-[781px] space-x-[129px] mb-36 flex">
                <Image src="/images/Side Image.png" height={781} width={805} alt="image" />
                <div className="space-y-[48px] mx-[129px] my-auto">
                    <div className="space-y-6 flex flex-col items-start my-auto">
                        <h2 className="text-[36px] font-medium"> Create an account</h2>
                        <p className="text-base">Enter your details below</p>
                    </div>
                    <div className="space-y-10">
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
                            <button className="w-[371px] h-[56px] px-[122px] py-4
                            space-x-8 bg-[#DB4444] rounded text-white text-base
                            font-medium">
                                Create Account
                            </button>
                            <div className="space-y-8">
                                <button className="w-[371px] h-[56px] px-[86px] py-4
                                 space-x-8 rounded text-white text-base
                                 font-medium ring-1 ring-black">
                                   <div className="space-x-4 flex">
                                    <Image src="/images/Icon-Google.png" height={24} width={24}
                                    alt="google-icon" />
                                    <p className="text-black text-base">Sign up with Google</p>
                                   </div>
                                </button>
                                <div className="space-x-4 flex items-center justify-center">
                                    <p className="text-base text-[#000000]">Already have account?</p>
                                    <div>
                                        <p className="text-base font-medium">Log in</p>
                                        <hr className="border-b border-b-black"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
};