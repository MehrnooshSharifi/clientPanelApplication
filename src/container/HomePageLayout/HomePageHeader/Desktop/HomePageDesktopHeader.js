import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const HomePageDesktopHeader = ({ links }) => {
  const [cookies] = useCookies();
  const { t } = useTranslation("common");
  const router = useRouter();

  const exitHandler = () => {
    Cookies.remove("Token");
    Cookies.remove("firstName");
    Cookies.remove("lastName");
    Cookies.remove("nationalCode");
    Cookies.remove("phoneNumber");
    Cookies.remove("email");
    Cookies.remove("benefitAmount");
    Cookies.remove("balance");
    router.push("/user/signIn");
  };

  return (
    <div
      className={`hidden lg:flex items-center justify-between gap-x-[239px] lg:gap-x-[246px] bg-transparent max-w-[1440px] mx-auto px-10 ${
        cookies.nationalCode && "lg:gap-x-[329px]"
      }`}
    >
      {/* Logo */}
      <div
        className="-mt-2 cursor-pointer z-50 -mr-[90px]"
        onClick={() => router.push("/")}
      >
        <Image
          width={100}
          height={100}
          className="w-[90px] h-[90px]"
          src="/assets/images/NewHomePage/TabadolLogo_01.png"
          alt="logo"
        />
      </div>

      {/* DesktopHeader */}
      <header className="flex justify-center">
        <nav className="-mr-[50px]">
          <ul className="flex gap-x-[5px] justify-between items-center text-[18px] font-bold text-neutralColor-1 ">
            <Link
              href={links[0].href}
              className="z-50 flex justify-center items-center px-[8px] whitespace-nowrap py-[16px] w-[140px] "
            >
              <span>{t("header.whyRamzNegar")}</span>
            </Link>
            <Link
              href={links[1].href}
              className="z-50 flex justify-center items-center px-[8px] whitespace-nowrap py-[16px] w-[110px] -mr-[10px]"
            >
              <span>{t("header.services")}</span>
            </Link>
            <Link
              href={links[2].href}
              className="z-50 flex justify-center items-center px-[8px] whitespace-nowrap py-[16px] w-[100px] mr-[10px]"
            >
              <span>{t("header.contactUs")}</span>
            </Link>
            <Link
              href="/"
              className="z-50 flex justify-center items-center px-[8px] whitespace-nowrap py-[16px] w-[140px] mr-[10px]"
            >
              {t("header.news")}
            </Link>
          </ul>
        </nav>
      </header>

      {/* Buttons Section */}
      {!cookies.nationalCode ? (
        <div className="flex justify-between gap-x-[18px]">
          <Link
            href="/user/signIn"
            className="z-50 flex justify-center items-center whitespace-nowrap px-[8px] py-[16px] w-[144px] h-[48px] text-primaryColor-1 bg-naturalColor-2 border border-primaryColor-1 rounded-[5px] text-[18px] font-bold hover:font-extrabold hover:border-2 focus:border-2 focus:font-extrabold focus:bg-neutralColor-5"
          >
            <span>{t("auth.login")}</span>
          </Link>
          <Link
            href="/user/signUp"
            className="hover:bg-naturalColor-2 whitespace-nowrap hover:border-[2px] hover:border-primaryColor-1 hover:text-primaryColor-1 focus:bg-neutralColor-5 focus:border-primaryColor-1 focus:text-primaryColor-1 cursor-pointer z-50 flex justify-center items-center px-[8px] py-[16px] w-[144px] h-[48px] bg-primaryColor-1 text-naturalColor-2 rounded-[5px] text-[18px] font-bold"
          >
            <span>{t("auth.register")}</span>
          </Link>
        </div>
      ) : (
        <div className="flex justify-between gap-x-[18px] -mr-[250px]">
          <div
            onClick={() => window.history.back()}
            className="hover:bg-naturalColor-2 whitespace-nowrap hover:border-[2px] hover:border-primaryColor-1 hover:text-primaryColor-1 focus:bg-neutralColor-5 focus:border-primaryColor-1 focus:text-primaryColor-1 cursor-pointer z-50 flex justify-center items-center px-[8px] py-[16px] w-[144px] h-[48px] bg-primaryColor-1 text-naturalColor-2 rounded-[5px] text-[18px]"
          >
            <span>{t("auth.backToPanel")}</span>
          </div>
          <div
            className="z-50 cursor-pointer whitespace-nowrap flex justify-center items-center px-[8px] py-[16px] w-[144px] h-[48px] text-primaryColor-1 bg-naturalColor-2 border border-primaryColor-1 rounded-[5px] text-[18px]"
            onClick={exitHandler}
          >
            {t("auth.logout")}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageDesktopHeader;
