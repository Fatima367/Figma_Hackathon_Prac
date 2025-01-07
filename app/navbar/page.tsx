import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="py-3 bg-black flex justify-center items-center mx-auto">
      <div className="flex justify-between items-center w-3/5">
        <div className="space-x-2 items-center justify-center flex flex-row">
          <p className="text-sm text-white">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p className="text-sm text-white font-semibold">Shop Now</p>
        </div>
        <div className="space-x-[5px] flex">
          <p className="text-sm text-white">English</p>
          <Image
            src="/images/DropDown.png"
            height={24}
            width={24}
            alt="dropdown"
          />
        </div>
      </div>
    </nav>
  );
}
