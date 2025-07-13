import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import MobileAndTabletMenu from "./MobileAndTabletMenu";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "react-i18next"; 
const HomePageTabletAndMobileHeader = ({ links }) => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("common");

  const openHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div
        className={`flex justify-between items-center max-w-[375px] px-4 mx-auto md:px-4 md:my-[31px] lg:hidden md:max-w-[768px] md:mx-auto ${
          cookies.nationalCode && "gap-x-28"
        }`}
      >
        {/* Button and MenuBar Section */}
        <div className="flex items-center justify-start gap-x-[17px] md:gap-x-[23.12px] ml-[141.79px] md:ml-[472.74px]">
          <HiBars3
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer"
            onClick={openHandler}
          />
          {/* Buttons Section */}
          {!cookies.nationalCode && (
            <Link href="/user/signIn">
              <span className="flex justify-center items-center px-[8px] py-[16px] whitespace-nowrap w-[100px] h-[38px] bg-primaryColor-1 text-naturalColor-2 rounded-[5px] text-[12px] font-bold md:text-[16px] md:w-[131px] md:h-[48px]">
                {t("tabletAuth.loginRegister")}
              </span>
            </Link>
          )}
        </div>
        {/* Logo */}
        <div onClick={() => router.push("/")}>
          <Image
            width={100}
            height={100}
            className="w-[48px] h-[48px] md:w-[58px] md:h-[58px]"
            src="/assets/images/NewHomePage/TabadolLogo_01.png"
            alt="logo"
          />
        </div>
      </div>
      <MobileAndTabletMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        links={links}
      />
    </>
  );
};

export default HomePageTabletAndMobileHeader;
