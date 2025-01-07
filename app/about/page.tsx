import Image from "next/image";

export default function About() {
    return(
        <div className="w-screen">
           <hr className="mt-4" />

           <main className="flex flex-col items-start justify-between">

            <div className="p-20">
              <div className="space-x-3 flex">
                <p className="text-sm opacity-50">Home</p>
                <p className="text-sm opacity-50">/</p>
                <p className="text-sm">About</p>
              </div>
            </div>


            <div className="flex flex-row space-x-16">

              <div className="flex flex-col items-start justify-between space-y-10 ml-20">
                <h1 className="text-[54px] font-semibold">Our Story</h1>
                <p className="text-base">
                    Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace
                    with an active presense in Bangladesh. Supported by wide range of tailored marketing,
                    data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons 
                    customers across the region. 
                </p>
                <p className="text-base">
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers 
                a diverse assotment in categories ranging  from consumer. 
                </p>
              </div>

              <div className="flex shrink-0">
                <Image src="/images/twofemales.png" height={609} width={837} alt="image"/>
              </div>

            </div>

            <div className="mt-36 ml-20 flex space-x-7 mb-36">


            <div className="flex flex-col items-center justify-center rounded ring-1 ring-black ring-opacity-30
             w-[270px] h-[230px]">
             <div className="flex flex-col space-y-6 items-center justify-center">
             <Image src="/images/Services.png" height={80} width={80} alt="services"/>
             <div className="space-y-3 flex flex-col items-center justify-center">
             <h2 className="text-[32px] font-bold">10.5k </h2>
             <p className="text-base ">Sallers active our site</p>
             </div>
             </div>
            </div>



            <div className="flex flex-col items-center justify-center rounded shadow-md bg-[#DB4444]
             w-[270px] h-[230px] text-white">
             <div className="flex flex-col space-y-6 items-center justify-center">
             <Image src="/images/Services2.png" height={80} width={80} alt="services"/>
             <div className="space-y-3 flex flex-col items-center justify-center">
             <h2 className="text-[32px] font-bold">35k</h2>
             <p className="text-base ">Mopnthly Produduct Sale</p>
             </div>
             </div>
            </div>



            <div className="flex flex-col items-center justify-center rounded ring-1 ring-black ring-opacity-30
             w-[270px] h-[230px]">
             <div className="flex flex-col space-y-6 items-center justify-center">
             <Image src="/images/Services3.png" height={80} width={80} alt="services"/>
             <div className="space-y-3 flex flex-col items-center justify-center">
             <h2 className="text-[32px] font-bold">45.5k </h2>
             <p className="text-base ">Customer active in our site</p>
             </div>
             </div>
            </div>



            <div className="flex flex-col items-center justify-center rounded ring-1 ring-black ring-opacity-30
             w-[270px] h-[230px]">
             <div className="flex flex-col space-y-6 items-center justify-center">
             <Image src="/images/Services4.png" height={80} width={80} alt="services"/>
             <div className="space-y-3 flex flex-col items-center justify-center">
             <h2 className="text-[32px] font-bold">25k </h2>
             <p className="text-base ">Anual gross sale in our site</p>
             </div>
             </div>
            </div>

            </div>


            <div className="ml-20 flex space-x-7 mb-36">

             <div className="space-y-8 flex flex-col">
              <div className="bg-[#F5F5F5] h-[430px] w-[370px] flex items-baseline justify-center">
              <Image src="/images/tomcruise.png" width={236} height={391} alt="tom-cruise" className="mt-8"/>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                <h2 className="font-medium text-[32px]">Tom Cruise</h2>
                <p className=" text-base">Founder & Chairman</p>
                </div>
                <div className="space-x-4 flex items-start justify-start">
                <Image src="/images/Icon-Twitter2.png" height={24} width={24} alt="Icon-Twitter2"/>
                <Image src="/images/icon-instagram2.png" height={24} width={24} alt="icon-instagram2"/>
                <Image src="/images/Icon-Linkedin2.png" height={24} width={24} alt="Icon-Linkedin2"/>
                </div>
              </div>
             </div>


             <div className="space-y-8 flex flex-col">
              <div className="bg-[#F5F5F5] h-[430px] w-[370px] flex items-baseline justify-center">
              <Image src="/images/emmawatson.png" width={294} height={397} alt="emma-watson" className="mt-8"/>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                <h2 className="font-medium text-[32px]">Emma Watson</h2>
                <p className=" text-base">Managing Director</p>
                </div>
                <div className="space-x-4 flex items-start justify-start">
                <Image src="/images/Icon-Twitter2.png" height={24} width={24} alt="Icon-Twitter2"/>
                <Image src="/images/icon-instagram2.png" height={24} width={24} alt="icon-instagram2"/>
                <Image src="/images/Icon-Linkedin2.png" height={24} width={24} alt="Icon-Linkedin2"/>
                </div>
              </div>
             </div>


             <div className="space-y-8 flex flex-col">
              <div className="bg-[#F5F5F5] h-[430px] w-[370px] flex items-baseline justify-center">
              <Image src="/images/willsmith.png" width={326} height={392} alt="will-smith" className="mt-8"/>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                <h2 className="font-medium text-[32px]">Will Smith</h2>
                <p className=" text-base">Product Designer</p>
                </div>
                <div className="space-x-4 flex items-start justify-start">
                <Image src="/images/Icon-Twitter2.png" height={24} width={24} alt="Icon-Twitter2"/>
                <Image src="/images/icon-instagram2.png" height={24} width={24} alt="icon-instagram2"/>
                <Image src="/images/Icon-Linkedin2.png" height={24} width={24} alt="Icon-Linkedin2"/>
                </div>
              </div>
             </div>

            </div>

            <div className="mt-10 flex mx-auto mb-36">
            <Image src="/images/dots.png" height={16} width={112} alt="image"/>
            </div>



            <div className=" flex space-x-20 mb-36 mx-auto " >


            <div className="flex flex-col items-center justify-center
              space-y-6">
             <Image src="/images/Services5.png" height={80} width={80} alt="services"/>
             <div className="space-y-2 flex flex-col items-center justify-center">
             <h2 className="text-[20px] font-semibold">FREE AND FAST DELIVERY </h2>
             <p className="text-sm ">Free delivery for all orders over $140</p>
             </div>
            </div>



            <div className="flex flex-col items-center justify-center
             space-y-6">
             <Image src="/images/Services6.png" height={80} width={80} alt="services"/>
             <div className="space-y-2 flex flex-col items-center justify-center">
             <h2 className="text-[20px] font-semibold">24/7 CUSTOMER SERVICE</h2>
             <p className="text-sm ">Friendly 24/7 customer support</p>
             </div>
            </div>



            <div className="flex flex-col items-center justify-center
              space-y-6">
             <Image src="/images/Services7.png" height={80} width={80} alt="services"/>
             <div className="space-y-2 flex flex-col items-center justify-center">
             <h2 className="text-[20px] font-semibold">MONEY BACK GUARANTEE</h2>
             <p className="text-sm ">We reurn money within 30 days</p>
             </div>
            </div>



            </div>


           </main>

        </div>
    )
};