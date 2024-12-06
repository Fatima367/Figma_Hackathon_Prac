import Image from "next/image";

export default function LoginPage() {
    return(
        <div className="w-screen">
            <hr className="mt-[16px]" />
            <div className="mt-[60px] w-[1305px] h-[781px] space-x-[129px] mb-[140px] flex">
                <Image src="/images/Side Image.png" height={781} width={805} alt="image" />
                <div className="space-y-[40px] mx-[129px] my-auto">
                    <div className="space-y-[48px]">
                    <div className="space-y-[24px] flex flex-col items-start my-auto">
                        <h2 className="text-[36px] font-medium">Log in to Exclusive</h2>
                        <p className="text-[16px]">Enter your details below</p>
                    </div>
                    <div className="space-y-[40px]">
                            <div className="space-y-[8px]">
                            <p className="text-[16px]">Email or Phone Number</p>
                            <hr />
                            </div>
                            <div className="space-y-[8px]">
                            <p className="text-[16px]">Password</p>
                            <hr />
                            </div>
                    </div>
                    </div>
                    <div className="space-x-[87px] flex items-center justify-center">
                            <button className="w-[143px] h-[56px] px-[48px] py-[16px]
                            space-x-[10px] bg-[#DB4444] rounded text-white text-[16px]
                            font-medium">
                                Login
                            </button>
                            <p className="text-[16px] text-[#DB4444]">Forget Password?</p>
                    </div>
                </div> 
            </div>
        </div>
    )
};