import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const LandingDesktopHeader = ({ src, className1, className2 }) => {
  const [cookies, setCookie] = useCookies();
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
    <div className="hidden lg:flex items-center justify-between gap-x-[239px] bg-transparent  max-w-[1440px] mx-auto px-10">
      {/* Logo */}
      <div
        className=" -mt-2 cursor-pointer z-50"
        onClick={() => router.push("/")}
      >
        <Image
          className="w-[70px] h-[70px]"
          src={src}
          alt="logo"
          width={200}
          height={200}
        />
      </div>
      {/* Buttons Section */}
      {!cookies.nationalCode ? (
        <div className="flex justify-between gap-x-[18px]">
          <Link href="/user/signIn">
            <span className={className1}>{t("auth.login")}</span>
          </Link>
          <Link href="/user/signUp">
            <span className={className2}>{t("auth.register")}</span>
          </Link>
        </div>
      ) : (
        <div
          className="z-50 cursor-pointer flex justify-center items-center px-[8px] py-[16px] w-[144px] h-[48px] text-naturalColor-2 bg-primaryColor-1 border border-naturalColor-2 rounded-[5px]  text-[18px] font-bold"
          onClick={exitHandler}
        >
          خروج
        </div>
      )}
    </div>
  );
};

export default LandingDesktopHeader;
