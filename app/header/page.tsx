import Image from "next/image";

export default function Header() {
  return (
    <header className="mt-[40px] h-[38px] w-[1170px] bg-white flex flex-row items-center 
    justify-center space-x-[148px] mx-auto">

      <div className="space-x-[190px] flex items-center justify-center">
        <Image src="/images/Exclusive.png" height={24} width={118} alt="logo" />
        <div className="space-x-[48px] text-black flex items-center justify-center">
          <p className="text-[16px]">Home</p>
          <p className="text-[16px]">Contact</p>
          <p className="text-[16px]">About</p>
          <p className="text-[16px]">Signup</p>
        </div>
      </div>

      <div className="space-x-[24px] flex justify-center items-center">
        <div className="space-y-[10px] pl-[20px] pr-[12px] py-[7px] bg-[#F5F5F5] rounded">
          <div className="space-x-[34px] flex flex-row items-center justify-center">
            <p className="text-[12px]">What are you looking for?</p>
            <Image
              src="/images/Component 2.png"
              width={24}
              height={24}
              alt="search"
            />
          </div>
        </div>
        <div className="space-x-[16px] flex items-center justify-center">
          <Image
            src="/images/Wishlist.png"
            width={24}
            height={24}
            alt="search"
          />
          <Image src="/images/cart.png" width={24} height={24} alt="search" />
        </div>
      </div>
    </header>
  );
}
