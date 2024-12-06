import Image from "next/image";

export default function SignupPage() {
    return(
        <div className="w-screen">
            <hr className="mt-[16px]" />
            <div className="mt-[60px] w-[1305px] h-[781px] space-x-[129px] mb-[140px] flex">
                <Image src="/images/Side Image.png" height={781} width={805} alt="image" />
                <div className="space-y-[48px] mx-[129px] my-auto">
                    <div className="space-y-[24px] flex flex-col items-start my-auto">
                        <h2 className="text-[36px] font-medium"> Create an account</h2>
                        <p className="text-[16px]">Enter your details below</p>
                    </div>
                    <div className="space-y-[40px]">
                        <div className="space-y-[40px]">
                            <div className="space-y-[8px]">
                            <p className="text-[16px]">Name</p>
                            <hr />
                            </div>
                            <div className="space-y-[8px]">
                            <p className="text-[16px]">Email or Phone Number</p>
                            <hr />
                            </div>
                            <div className="space-y-[8px]">
                            <p className="text-[16px]">Password</p>
                            <hr />
                            </div>
                        </div>
                        <div className="space-y-[16px]">
                            <button className="w-[371px] h-[56px] px-[122px] py-[16px]
                            space-x-[10px] bg-[#DB4444] rounded text-white text-[16px]
                            font-medium">
                                Create Account
                            </button>
                            <div className="space-y-[32px]">
                                <button className="w-[371px] h-[56px] px-[86px] py-[16px]
                                 space-x-[10px] rounded text-white text-[16px]
                                 font-medium ring-1 ring-black">
                                   <div className="space-x-[16px] flex">
                                    <Image src="/images/Icon-Google.png" height={24} width={24}
                                    alt="google-icon" />
                                    <p className="text-black text-[16px]">Sign up with Google</p>
                                   </div>
                                </button>
                                <div className="space-x-[16px] flex items-center justify-center">
                                    <p className="text-[16px] text-[#000000]">Already have account?</p>
                                    <div>
                                        <p className="text-[16px] font-medium">Log in</p>
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