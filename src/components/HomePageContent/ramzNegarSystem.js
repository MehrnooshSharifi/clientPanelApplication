import Image from "next/image";
import { useTranslation } from "react-i18next";
import TextDirectionWrapper from "../TextDirectionWrapper";

const RamzNegarSystem = () => {
  const { t } = useTranslation("common");

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Description */}
      <div className="flex flex-col items-center mt-[67px] mb-[38.21px] lg:items-start">
        <div className="text-[20px] leading-[34.55px] font-extrabold lg:text-[40px] lg:leadind-[69.09px] lg:font-medium mb-[30px] md:text-[24px] md:mb-[22px] md:font-medium lg:mb-[50.29px]">
          <div className="flex flex-row-reverse items-start">
            <Image
              alt="direction"
              width={50}
              height={50}
              src="/assets/images/NewHomePage/direction.svg"
              className="hidden lg:block lg:mt-5"
            />
            <TextDirectionWrapper>
              <span className="text-primaryColor-1">
                {t("ramzNegarSystem.titleHighlight")}&nbsp;
              </span>
              <span>{t("ramzNegarSystem.titleBase")}&nbsp;</span>
            </TextDirectionWrapper>
          </div>
        </div>
        <TextDirectionWrapper>
          <div className="text-[16px] md:text-[20px] text-neutralColor-2 font-normal leading-[55px] flex flex-col items-center justify-center lg:text-[28px] lg:font-normal lg:leading-[55px] lg:items-start">
            <p>{t("ramzNegarSystem.subtitle1")}</p>
            <p>{t("ramzNegarSystem.subtitle2")}</p>
          </div>
        </TextDirectionWrapper>
      </div>

      {/* ImageSection */}

      {/* Mobile */}
      <div className="relative w-[500px] max-w-[375px] mx-auto md:hidden lg:hidden mb-[630px]">
        <Image
          width={500}
          height={500}
          src="/assets/images/NewHomePage/backgroundMobile.svg"
          alt="ramzNegarSystem"
          className="absolute"
        />
        <Image
          width={90}
          height={90}
          src="/assets/images/NewHomePage/api.png"
          alt="MobileLock"
          className="absolute mr-[200px] mt-[50px] animate-twBounce animate-infinite animate-duration-[2s]"
        />
      </div>

      {/* Tablet */}
      <div className="hidden md:block relative max-w-[768px] mx-auto lg:hidden">
        <Image
          width={720}
          height={800}
          src="/assets/images/NewHomePage/backgroundTablet.svg"
          alt="ramzNegarSystem"
        />
        <Image
          width={120}
          height={120}
          src="/assets/images/NewHomePage/api.png"
          alt="TabletLock"
          className="absolute animate-twBounce animate-infinite animate-duration-[2s] -mt-[950px] mr-[390px]"
        />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block  lg:max-w-[1440px] lg:mx-auto lg:-mt-[450px]">
        <Image
          width={1440}
          height={1000}
          src="/assets/images/NewHomePage/backgroundDesktop.svg"
          alt="ramzNegarSystem"
        />
        <Image
          width={250}
          height={250}
          src="/assets/images/NewHomePage/api.png"
          alt="DesktopLock"
          className="absolute animate-twBounce animate-infinite animate-duration-[2s] -mt-[850px] mr-[950px]"
        />
      </div>
    </div>
  );
};

export default RamzNegarSystem;
