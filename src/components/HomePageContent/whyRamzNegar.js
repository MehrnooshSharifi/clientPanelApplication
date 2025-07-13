import Image from "next/image";
import { useTranslation } from "react-i18next";
import TextDirectionWrapper from "../TextDirectionWrapper";
const WhyRamzNegar = ({ links }) => {
  const { t } = useTranslation("common");
  return (
    <div className="z-40 -mt-80 md:-mt-[600px] lg:-mt-5">
      <div className="bg-primaryColor-1 max-w-[343px] max-h-[1326px] mx-auto md:max-w-[728px] md:max-h-[816px] md:mx-auto lg:max-w-[1359.65px] lg:h-[428.55px] lg:mx-auto flex flex-col rounded-[25px] lg:-mt-[205px] ">
        {/* dart */}
        <div className=" ml-3 mt-3 md:ml-[35px] md:mt-[35px]  flex items-center justify-end lg:w-159px lg:h-[747px] lg:relative">
          <Image
            alt="dartPen"
            width={25}
            height={25}
            src="/assets/images/NewHomePage/dartPen.svg"
            className=" w-[55.05px] h-[34.57px] -ml-[50px] -mb-[34px]   md:w-[77.75px] md:h-[48.89px] md:-ml-[63px] md:-mb-[48px] lg:w-[113.12px] lg:h-[71.59px] z-30 lg:-ml-[82px] lg:-mt-[140px] animate-fadeInBottomRight  animate-infinite  animate-duration-[2s]"
          />
          <Image
            alt="dartbord"
            width={25}
            height={25}
            src="/assets/images/NewHomePage/dartbord.svg"
            className=" hidden lg:block w-[97px] h-[99px] md:w-[122.41px] md:h-[140px] lg:w-[159px] lg:h-[435px]  lg:-ml-[163px] z-20 lg:-mt-40 "
          />
          <Image
            alt="dartBoardMobile"
            width={25}
            height={25}
            src="/assets/images/NewHomePage/dartBoardMobile.svg"
            className=" lg:hidden w-[97px] h-[99px] md:w-[122.41px] md:h-[140px] lg:w-[159px] lg:h-[435px]  lg:-ml-64 z-20 lg:-mt-60"
          />
          <Image
            alt="columnLock"
            width={170}
            height={50}
            src="/assets/images/NewHomePage/columnLock.svg"
            className="hidden lg:ml-[31.01px] -mt-[550px] z-10 lg:block"
          />
        </div>
        {/* whyRamzNegar and the reason section */}
        <div
          className="flex flex-col text-naturalColor-2 items-center lg:-mt-[500px]"
          id={links[0].id}
        >
          <div className=" text-[18px] font-extrabold md:text-[24px] lg:text-[32px] mb-[30px]">
            <span>{t("whyRamzNegar.titlePrefix")}</span>&nbsp;
            <span>{t("whyRamzNegar.whySeif")}</span>
          </div>
          <TextDirectionWrapper>
            <div className="grid grid-cols-1 gap-y-[30px]  md:grid-cols-2 md:gap-x-[34px]  lg:grid-cols-4  lg:gap-x-[58.97px] lg:-mr-[230px]  ">
              {/* SimpleAccess */}
              <div className=" flex flex-col w-[227px] h-[255px] bg-primaryColor-2  lg:leading-[50px] mx-auto  items-center justify-center py-[50px] px-4 rounded-[25px] md:py-0 ">
                <div className="flex flex-col items-center md:-mt-[25px] ">
                  <p className="w-[109px] h-[28px] text-[16px] font-bold leading-[27.64px] mx-[59px] mb-7   md:w-[200px] md:h-[28px] md:font-bold md:text-[20px]   lg:text-[20px] lg:w-[136px] text-center lg:mt-[15px] ">
                    {t("easyAccess.title")}
                  </p>
                  <p className=" text-[16px] mb-4 md:text-[16px] md:font-medium md:leading-[20px] lg:text-[16px] lg:leading-[25px] lg:font-medium">
                    {t("easyAccess.line1")}
                  </p>
                  <p className=" text-[16px] mb-4 md:text-[16px] md:font-medium md:leading-[20px] lg:text-[16px] lg:leading-[25px] lg:font-medium">
                    {t("easyAccess.line2")}
                  </p>
                  <p className=" text-[16px] mb-4 md:text-[16px] md:font-medium md:leading-[20px] lg:text-[16px] lg:leading-[25px] lg:font-medium">
                    {t("easyAccess.line3")}
                  </p>
                </div>
              </div>
              {/*Economy */}
              <div className=" flex flex-col w-[227px] h-[255px] bg-primaryColor-2  mx-auto  items-center justify-center py-[50px] px-4 rounded-[25px]">
                <div className="flex flex-col items-center">
                  <p className=" w-[109px] h-[28px] text-[16px] font-bold leading-[27.64px] md:mt-[10px]  mx-[59px] mb-7 md:w-[109px] md:h-[28px] md:font-bold md:text-[20px] lg:text-[20px] lg:w-[136px] lg:mt-[25px] text-center">
                    {t("economy.title")}
                  </p>
                  <p className=" text-[16px] mb-4 md:text-[16px] md:font-medium md:leading-[20px] lg:text-[16px] lg:leading-[25px] lg:font-medium">
                    {t("economy.line1")}
                  </p>
                  <p className=" text-[16px] mb-4 md:text-[16px] md:font-medium md:leading-[20px] lg:text-[16px] lg:leading-[25px] lg:font-medium">
                    {t("economy.line2")}
                  </p>
                  <p className=" text-[16px] mb-4 md:text-[16px] md:font-medium md:leading-[20px] lg:text-[16px] lg:leading-[25px] lg:font-medium">
                    {t("economy.line3")}
                  </p>
                  <p className=" text-[16px] mb-4 md:text-[16px] md:font-medium md:leading-[20px] lg:text-[16px] lg:leading-[25px] lg:font-medium">
                    {t("economy.line4")}
                  </p>
                </div>
              </div>
              {/* Service development */}
              <div className="flex flex-col w-[227px] h-[255px] bg-primaryColor-2  mx-auto  items-center justify-center py-[50px] px-4 rounded-[25px]">
                <div className="flex flex-col items-center">
                  <p className=" whitespace-nowrap flex justify-center w-[109px] h-[28px] text-[16px] font-bold leading-[27.64px]  mx-[59px] mb-7 md:mt-5 md:w-[200px] md:h-[28px] md:font-bold md:text-[20px] lg:text-[20px] lg:w-[136px] text-center">
                    {t("serviceDevelopment.title")}
                  </p>
                  <p className=" text-[16px] mb-4 md:text-[16px] md:font-medium md:leading-[20px] lg:text-[16px] lg:leading-[25px] lg:font-medium">
                    {t("serviceDevelopment.line1")}
                  </p>
                  <p className=" text-[16px] mb-4 md:text-[16px] md:font-medium md:leading-[20px] lg:text-[16px] lg:leading-[25px] lg:font-medium">
                    {t("serviceDevelopment.line2")}
                  </p>
                  <p className=" text-[16px] mb-4 md:text-[16px] md:font-medium md:leading-[20px] lg:text-[16px] lg:leading-[25px] lg:font-medium">
                    {t("serviceDevelopment.line3")}
                  </p>
                  <p className=" text-[16px] mb-4 md:text-[16px] md:font-medium md:leading-[20px] lg:text-[16px] lg:leading-[25px] lg:font-medium">
                    {t("serviceDevelopment.line4")}
                  </p>
                </div>
              </div>
              {/* Increase income */}
              <div className="lg: flex flex-col lg:items-center  w-[227px] h-[255px] bg-primaryColor-2  mx-auto  items-center justify-center py-[50px] px-4 rounded-[25px] mb-[42px]">
                <div className="flex flex-col items-center">
                  <p className=" w-[109px] h-[28px] whitespace-nowrap text-[16px] flex justify-center font-bold leading-[27.64px]  mx-[59px] mb-7 md:w-[200px] md:h-[28px] md:-mt-5   md:font-bold md:text-[20px] lg:text-[20px] lg:w-[136px] text-center lg:-mt-5">
                    {t("increaseIncome.title")}
                  </p>
                  <p className=" text-[16px] mb-4 md:text-[16px] md:font-medium md:leading-[20px] lg:text-[16px] lg:leading-[25px] lg:font-medium ">
                    {t("increaseIncome.line1")}
                  </p>
                  <p className=" text-[16px] mb-4 md:text-[16px] md:font-medium md:leading-[20px] lg:text-[16px] lg:leading-[25px] lg:font-medium">
                    {t("increaseIncome.line2")}
                  </p>
                  <p className=" text-[16px] mb-4 md:text-[16px] md:font-medium md:leading-[20px] lg:text-[16px] lg:leading-[25px] lg:font-medium">
                    {t("increaseIncome.line3")}
                  </p>
                </div>
              </div>
            </div>
          </TextDirectionWrapper>
        </div>
      </div>
    </div>
  );
};

export default WhyRamzNegar;
