import Image from "next/image";

export default function LoginPage() {
    return(
        <div className="w-screen">
            <hr className="mt-4" />
            <div className="mt-[60px] w-[1305px] h-[781px] space-x-[129px] mb-36 flex">
                <Image src="/images/Side Image.png" height={781} width={805} alt="image" />
                <div className="space-y-10 mx-[129px] my-auto">
                    <div className="space-y-[48px]">
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
                    </div>
                    <div className="space-x-[87px] flex items-center justify-center">
                            <button className="w-[143px] h-[56px] px-12 py-4
                            space-x-8 bg-[#DB4444] rounded text-white text-base
                            font-medium">
                                Login
                            </button>
                            <p className="text-base text-[#DB4444]">Forget Password?</p>
                    </div>
                </div> 
            </div>
        </div>
    )
};