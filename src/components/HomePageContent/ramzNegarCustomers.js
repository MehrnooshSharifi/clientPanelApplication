import Image from "next/image";
import CarouselComponent from "../carousel/Carousel";
const RamzNegarCustomers = () => {
  return (
    <div className="bg-primaryColor-1 w-full h-[280px] md:h-[352px] lg:h-[426.2px] rounded-bl-[50px] rounded-br-[50px] mb-[60px] lg:mb-[114.27px]   overflow-hidden">
      <p className="text-[18px] md:text-[24px] lg:text-[32px] mt-[30px] md:mt-[39px] lg:mt-[30.68px] font-extrabold leading-[31.09px] text-center text-naturalColor-2 mb-[27px]  md:mb-[36px] lg:mb-[67.79px]">
        مشتریان تبادل
      </p>
      <CarouselComponent />
      <div className="mt-[165px]  h-[23.27px] ">
        <Image
          alt="cubes"
          width={40}
          height={40}
          src="/assets/images/NewHomePage/cubes.svg"
          className="absolute -mt-[180px] right-[30px] md:w-[35.24px] md:h-[30.27px] md:-mt-[140px] lg:w-[63.09px] lg:h-[54.19px] lg:-mt-[180px]"
        />
      </div>
      <div className=" w-[27.09px] h-[23.27px] -mt-[20px]  ">
        <Image
          alt="cubes2"
          width={40}
          height={40}
          src="/assets/images/NewHomePage/cubes2.svg"
          className="absolute -mt-[180px] left-[30px] md:w-[35.24px] md:h-[30.27px] md:-mt-[140px] lg:w-[63.09px] lg:h-[54.19px] lg:-mt-[180px]"
        />
      </div>
    </div>
  );
};

export default RamzNegarCustomers;
