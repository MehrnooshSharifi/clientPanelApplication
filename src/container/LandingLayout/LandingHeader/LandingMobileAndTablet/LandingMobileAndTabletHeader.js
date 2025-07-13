import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import LandingMobileAndTabletMenu from "./LandingMobileAndTabletMenu";
import Image from "next/image";
const LandingMobileAndTabletHeader = ({
  link,
  src,
  className1,
  className2,
}) => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies();
  const [isOpen, setIsOpen] = useState(false);
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
          <HiBars3 className={className2} onClick={openHandler} />
          {/* Buttons Section */}
          {!cookies.nationalCode && (
            <Link href="/user/signIn">
              <span className={className1}>ورود / ثبت نام</span>
            </Link>
          )}
        </div>
        {/* Logo */}
        <Image
          width={25}
          height={25}
          onClick={() => router.push("/")}
          className="w-[48px] h-[48px] md:w-[58px] md:h-[58px]"
          src={src}
          alt="logo"
        />
      </div>
      <LandingMobileAndTabletMenu
        isTerms
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        link={link}
      />
    </>
  );
};

export default LandingMobileAndTabletHeader;
