import Image from "next/image";

export default function About() {
    return(
        <div className="w-screen">
           <hr className="mt-[16px]" />

           <main className="flex flex-col items-start justify-between">

            <div className="p-[80px]">
              <div className="space-x-[12px] flex">
                <p className="text-[14px] opacity-50">Home</p>
                <p className="text-[14px] opacity-50">/</p>
                <p className="text-[14px]">About</p>
              </div>
            </div>


            <div className="flex flex-row space-x-[75px]">

              <div className="flex flex-col items-start justify-between space-y-[40px] ml-20">
                <h1 className="text-[54px] font-semibold">Our Story</h1>
                <p className="text-[16px]">
                    Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace
                    with an active presense in Bangladesh. Supported by wide range of tailored marketing,
                    data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons 
                    customers across the region. 
                </p>
                <p className="text-[16px]">
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers 
                a diverse assotment in categories ranging  from consumer. 
                </p>
              </div>

              <div className="flex shrink-0">
                <Image src="/images/twofemales.png" height={609} width={837} alt="image"/>
              </div>

            </div>

            <div className="mt-[142px] ml-20 flex space-x-[30px] mb-[140px]">


            <div className="flex flex-col items-center justify-center rounded ring-1 ring-black ring-opacity-30
             w-[270px] h-[230px]">
             <div className="flex flex-col space-y-[24px] items-center justify-center">
             <Image src="/images/Services.png" height={80} width={80} alt="services"/>
             <div className="space-y-[12px] flex flex-col items-center justify-center">
             <h2 className="text-[32px] font-bold">10.5k </h2>
             <p className="text-[16px] ">Sallers active our site</p>
             </div>
             </div>
            </div>



            <div className="flex flex-col items-center justify-center rounded shadow-md bg-[#DB4444]
             w-[270px] h-[230px] text-white">
             <div className="flex flex-col space-y-[24px] items-center justify-center">
             <Image src="/images/Services2.png" height={80} width={80} alt="services"/>
             <div className="space-y-[12px] flex flex-col items-center justify-center">
             <h2 className="text-[32px] font-bold">35k</h2>
             <p className="text-[16px] ">Mopnthly Produduct Sale</p>
             </div>
             </div>
            </div>



            <div className="flex flex-col items-center justify-center rounded ring-1 ring-black ring-opacity-30
             w-[270px] h-[230px]">
             <div className="flex flex-col space-y-[24px] items-center justify-center">
             <Image src="/images/Services3.png" height={80} width={80} alt="services"/>
             <div className="space-y-[12px] flex flex-col items-center justify-center">
             <h2 className="text-[32px] font-bold">45.5k </h2>
             <p className="text-[16px] ">Customer active in our site</p>
             </div>
             </div>
            </div>



            <div className="flex flex-col items-center justify-center rounded ring-1 ring-black ring-opacity-30
             w-[270px] h-[230px]">
             <div className="flex flex-col space-y-[24px] items-center justify-center">
             <Image src="/images/Services4.png" height={80} width={80} alt="services"/>
             <div className="space-y-[12px] flex flex-col items-center justify-center">
             <h2 className="text-[32px] font-bold">25k </h2>
             <p className="text-[16px] ">Anual gross sale in our site</p>
             </div>
             </div>
            </div>

            </div>


            <div className="ml-20 flex space-x-[30px] mb-[140px]">

             <div className="space-y-[32px] flex flex-col">
              <div className="bg-[#F5F5F5] h-[430px] w-[370px] flex items-baseline justify-center">
              <Image src="/images/tomcruise.png" width={236} height={391} alt="tom-cruise" className="mt-8"/>
              </div>
              <div className="flex flex-col space-y-[16px]">
                <div className="flex flex-col space-y-[8px]">
                <h2 className="font-medium text-[32px]">Tom Cruise</h2>
                <p className=" text-[16px]">Founder & Chairman</p>
                </div>
                <div className="space-x-[16px] flex items-start justify-start">
                <Image src="/images/Icon-Twitter2.png" height={24} width={24} alt="Icon-Twitter2"/>
                <Image src="/images/icon-instagram2.png" height={24} width={24} alt="icon-instagram2"/>
                <Image src="/images/Icon-Linkedin2.png" height={24} width={24} alt="Icon-Linkedin2"/>
                </div>
              </div>
             </div>


             <div className="space-y-[32px] flex flex-col">
              <div className="bg-[#F5F5F5] h-[430px] w-[370px] flex items-baseline justify-center">
              <Image src="/images/emmawatson.png" width={294} height={397} alt="emma-watson" className="mt-8"/>
              </div>
              <div className="flex flex-col space-y-[16px]">
                <div className="flex flex-col space-y-[8px]">
                <h2 className="font-medium text-[32px]">Emma Watson</h2>
                <p className=" text-[16px]">Managing Director</p>
                </div>
                <div className="space-x-[16px] flex items-start justify-start">
                <Image src="/images/Icon-Twitter2.png" height={24} width={24} alt="Icon-Twitter2"/>
                <Image src="/images/icon-instagram2.png" height={24} width={24} alt="icon-instagram2"/>
                <Image src="/images/Icon-Linkedin2.png" height={24} width={24} alt="Icon-Linkedin2"/>
                </div>
              </div>
             </div>


             <div className="space-y-[32px] flex flex-col">
              <div className="bg-[#F5F5F5] h-[430px] w-[370px] flex items-baseline justify-center">
              <Image src="/images/willsmith.png" width={326} height={392} alt="will-smith" className="mt-8"/>
              </div>
              <div className="flex flex-col space-y-[16px]">
                <div className="flex flex-col space-y-[8px]">
                <h2 className="font-medium text-[32px]">Will Smith</h2>
                <p className=" text-[16px]">Product Designer</p>
                </div>
                <div className="space-x-[16px] flex items-start justify-start">
                <Image src="/images/Icon-Twitter2.png" height={24} width={24} alt="Icon-Twitter2"/>
                <Image src="/images/icon-instagram2.png" height={24} width={24} alt="icon-instagram2"/>
                <Image src="/images/Icon-Linkedin2.png" height={24} width={24} alt="Icon-Linkedin2"/>
                </div>
              </div>
             </div>

            </div>

            <div className="mt-[40px] flex mx-auto mb-[140px]">
            <Image src="/images/dots.png" height={16} width={112} alt="image"/>
            </div>



            <div className=" flex space-x-[88px] mb-[140px] mx-auto " >


            <div className="flex flex-col items-center justify-center
              space-y-[24px]">
             <Image src="/images/Services5.png" height={80} width={80} alt="services"/>
             <div className="space-y-[8px] flex flex-col items-center justify-center">
             <h2 className="text-[20px] font-semibold">FREE AND FAST DELIVERY </h2>
             <p className="text-[14px] ">Free delivery for all orders over $140</p>
             </div>
            </div>



            <div className="flex flex-col items-center justify-center
             space-y-[24px]">
             <Image src="/images/Services6.png" height={80} width={80} alt="services"/>
             <div className="space-y-[8px] flex flex-col items-center justify-center">
             <h2 className="text-[20px] font-semibold">24/7 CUSTOMER SERVICE</h2>
             <p className="text-[14px] ">Friendly 24/7 customer support</p>
             </div>
            </div>



            <div className="flex flex-col items-center justify-center
              space-y-[24px]">
             <Image src="/images/Services7.png" height={80} width={80} alt="services"/>
             <div className="space-y-[8px] flex flex-col items-center justify-center">
             <h2 className="text-[20px] font-semibold">MONEY BACK GUARANTEE</h2>
             <p className="text-[14px] ">We reurn money within 30 days</p>
             </div>
            </div>



            </div>


           </main>

        </div>
    )
};