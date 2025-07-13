import Image from "next/image";
import LandingFooter from "./LandingFooter/LandingFooter";
import LandingDesktopHeader from "./LandingHeader/Desktop/LandingDesktopHeader";
import LandingMobileAndTabletHeader from "./LandingHeader/LandingMobileAndTablet/LandingMobileAndTabletHeader";
import { BsChevronDown } from "react-icons/bs";
const link = [{ label: "contactUs", href: "#contactUs", id: "contactUs" }];
const MyPoliceLandingLayout = ({ children }) => {
  return (
    <div className="flex flex-col bg-neutralColor-5">
      <div className="bg-primaryColor-1 w-full h-[650px]  md:h-[750px] lg:h-[650px] pt-[23px] lg:pt-[58px] -mt-12 lg:-mt-20 rounded-bl-[25px] rounded-br-[25px] lg:rounded-bl-[100px] lg:rounded-br-[100px] mb-[55px] md:mb-[67.5px] lg:mb-[132px]">
        <div className="lg:relative lg:max-w-[1440px] lg:mx-auto">
          <div className="mb-[77px] mx-6">
            <LandingMobileAndTabletHeader
              link={link}
              className2="w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer text-naturalColor-2"
              className1=" flex justify-center items-center px-[8px] py-[16px] w-[100px] h-[38px] bg-naturalColor-2 text-primaryColor-1 rounded-[5px] text-[12px] font-bold md:text-[16px] md:w-[131px] md:h-[48px] "
              src="/assets/images/NewHomePage/TabadolLogo_01.png"
            />
            <LandingDesktopHeader
              src="/assets/images/NewHomePage/TabadolLogo_01.png"
              className1=" z-50 flex justify-center items-center px-[8px] py-[16px] w-[144px] h-[48px] text-naturalColor-2 bg-primaryColor-1 border border-naturalColor-2 rounded-[5px]  text-[18px] font-bold"
              className2=" cursor-pointer z-50 flex justify-center items-center px-[8px] py-[16px] w-[144px] h-[48px] bg-naturalColor-2 text-primaryColor-1  rounded-[5px] border border-primaryColor-1 text-[18px] font-bold"
            />
          </div>
          {/* ServiceDetails */}
          <div className="flex flex-col lg:flex-row lg:max-w-[1440px] lg:mx-auto">
            {/* serviceDescription */}
            <div className="flex flex-col items-center justify-center gap-y-[29px] lg:items-start lg:mr-[40px]">
              <div className="flex items-center justify-center">
                <span className="text-naturalColor-2 text-[20px] font-extrabold leading-[34.55px] md:text-[24px] md:leading-[41.45px] lg:text-[36px] lg:leading-[62.18px]">
                  سرویس های پلیس من
                </span>
                <Image
                  alt="lightGrayDirection"
                  width={20}
                  height={20}
                  src="/assets/images/NewHomePage/lightGrayDirection.svg"
                  className="mr-3 mt-8 w-[16.5] h-[25px]"
                />
              </div>
              <span className="text-naturalColor-2 text-[14px] font-medium leading-[35px] w-[335px] h-[175px] mx-auto md:w-[648px] md:[175px] md:text-[16px] md:font-medium md:leading-[45px] lg:w-[847px] lg:h-[175px] lg:leading-[60px] lg:text-[24px] lg:font-medium">
                پلیس من دارای وب سرویس های بسیار ساده و کاربردی است که با آن
                می‌توان بسیاری از خدمات انجام شده در پلیس+۱۰ از جمله استعلام
                خلافی خودرو و گواهینامه و غیره را انجام داد.
              </span>
            </div>
            {/* serviceImage */}
            <div className="flex flex-col items-center justify-center lg:mt-28 lg:mr-10">
              <Image
                width={20}
                height={20}
                src="/assets/images/NewHomePage/plusGroup.svg"
                alt="plusGroup"
                className="w-[206.64px] h-[122.28px] md:w-[700px] md:h-[265.52px] z-10 md:-mt-[80px]"
              />
              <Image
                width={20}
                height={20}
                src="/assets/images/NewHomePage/myPoliceMLanding.svg"
                alt="myPoliceServic"
                className="w-[94px] h-[135px] md:w-[132.3px] md:h-[190px] -mt-24 md:-mt-[192px] z-10 lg:hidden"
              />
              <Image
                width={20}
                height={20}
                src="/assets/images/NewHomePage/myPoliceDesktopLanding.svg"
                alt="myPoliceServic"
                className=" hidden w-[94px] h-[135px] md:w-[132.3px] md:h-[190px] -mt-24 md:-mt-[160px] z-10 lg:block"
              />
              <Image
                alt="blueSemiCircle"
                width={20}
                height={20}
                src="/assets/images/NewHomePage/blueSemiCircle.svg"
                className="z-0 -mt-[168px] md:-mt-[263px] w-[330px] h-[330px] md:w-[505px] md:h-[505px] lg:hidden"
              />
            </div>
          </div>
          {/* dotCorner */}
          <div className="hidden lg:block lg:max-w-[500px] mx-auto lg:absolute right-[40px] top-[490px]">
            <Image
              width={20}
              height={20}
              alt="dotCorner"
              src="/assets/images/NewHomePage/cornerDotToTop.svg"
              className=" w-[111.15px] h-[81.73px]"
            />
          </div>
          <div className="bg-naturalColor-2  w-[82.93px] h-[40px] mx-auto  md:w-[103.66px] md:h-[50px] -mt-[95px] md:-mt-[140px] lg:w-[165.86px] lg:h-[60px] lg:mt-[100px] animate-twBounce animate-infinite animate-duration-[3s] flex items-center justify-center text-primaryColor-1 rounded-[25px]">
            <BsChevronDown className="w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          </div>
        </div>
      </div>
      {children}
      <LandingFooter link={link} />
    </div>
  );
};

export default MyPoliceLandingLayout;
