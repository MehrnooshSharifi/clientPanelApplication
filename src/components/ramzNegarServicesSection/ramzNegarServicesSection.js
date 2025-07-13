import { useCookies } from "react-cookie";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const RamzNegarServicesSection = ({ service }) => {
  const [cookies] = useCookies();
  const { t } = useTranslation("common");

  return (
    <div
      key={service.id}
      className="flex flex-col bg-naturalColor-2 rounded-[20px] w-[343px] h-[420px] mx-auto lg:w-[394.32px] lg:h-[447.39px]"
    >
      {/* title and icon */}
      <div className="flex flex-col items-center justify-center mt-10 mb-[25px]">
        {/* icon */}
        <div className="w-[90px] h-[90px] flex items-center justify-center mb-[25px]">
          <Image
            src={service.image}
            alt={t(service.alt)}
            width={70}
            height={70}
          />
        </div>
        {/* title */}
        <div className="flex items-center justify-center font-bold text-[16px] text-center leading-[27.64px] lg:text-[20px] lg:leading-[34.55px]">
          {t(service.title)}
        </div>
      </div>
      {/* subTitle */}
      {service.subTitle.map((item) => (
        <div
          key={item.id}
          className="text-[14px] lg:text-[16px] leading-[40px] font-medium text-neutralColor-2 mx-[29px] flex flex-1"
        >
          <div className="flex flex-col items-start h-2">
            <div className="flex items-baseline justify-center gap-x-[7.62px]">
              <div className="w-[8px] h-[8px] bg-neutralColor-4 rounded-full" />
              <p>{t(item.text)}</p>
            </div>
          </div>
        </div>
      ))}
      {/* button */}
      {!cookies.nationalCode ? (
        <Link href="/users/signIn">
          <span className="flex rounded-b-[20px] w-full justify-center items-center py-8 text-[14px] lg:text-[16px] text-primaryColor-1 leading-[24.18px] border-t border-dashed cursor-pointer hover:bg-primaryColor-5 focus:bg-primaryColor-4 h-[78px]">
            {t(service.exitText)}
          </span>
        </Link>
      ) : (
        <Link href="/panel/application">
          <span className="flex rounded-b-[20px] w-full justify-center items-center py-8 text-[14px] lg:text-[16px] text-primaryColor-1 leading-[24.18px] border-t border-dashed cursor-pointer hover:bg-primaryColor-5 focus:bg-primaryColor-4 h-[78px]">
            {t(service.loginText)}
          </span>
        </Link>
      )}
    </div>
  );
};

export default RamzNegarServicesSection;
