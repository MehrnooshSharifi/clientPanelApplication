import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { BiAward, BiSolidUser } from "react-icons/bi";
import Image from "next/image";

const MobileAndTabletMenu = ({ isOpen, setIsOpen, links }) => {
  const [cookies] = useCookies();
  const [isSelected, setIsSelected] = useState(false);
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
    <div>
      <div
        className={`z-50 fixed top-0  lg:hidden  ${
          isOpen
            ? "animate-slideInRight animate-duration-500"
            : "animate-slideOutRight animate-duration-500"
        } `}
      >
        <div
          className={` flex flex-col items-start w-[323px] h-[812px] overflow-y-auto overflow-x-clip bg-naturalColor-2 shadow-2xl rounded-tl-[50px] rounded-bl-[50px] pt-7 pr-4 md:w-[375px] md:h-screen `}
        >
          {/*Close Icon */}
          <MdOutlineClose
            className="w-[30.85px] h-[30.85px] mb-[34px] cursor-pointer absolute"
            onClick={() => setIsOpen(false)}
          />
          {/* UserInfo */}
          <div className="flex items-center mb-[22px] mt-[60px]">
            {/* UserIcon */}
            <div
              className={
                "bg-neutralColor-5 rounded-full w-[67px] h-[67px] flex justify-center items-center ml-[25px]"
              }
            >
              <BiSolidUser className="fill-primaryColor-1 w-[32px] h-[32px]" />
            </div>
            {/* UserName */}
            {cookies.nationalCode && (
              <div className="flex text-[14px] md:text-[16px] font-[15px] justify-between gap-x-3">
                <span>{cookies.firstName}</span>
                <span>{cookies.lastName}</span>
              </div>
            )}
          </div>
          <hr className="w-[291px] h-0 bg-neutralColor-4 mb-5" />
          {/* navSection */}
          <nav className="m-[16px] ">
            <ul className="flex flex-col gap-y-10 items-start text-[14px] font-[15px] md:text-[16px]">
              {/* ServicesSection */}
              <div className={`flex flex-col justify-center w-full`}>
                <div className=" flex justify-between md:gap-x-[190px] ">
                  <div
                    className={`flex items-center mb-10  ${
                      isSelected && "text-primaryColor-1"
                    }`}
                  >
                    {!isSelected ? (
                      <Image
                        width={20}
                        height={20}
                        src="/assets/images/NewHomePage/servicesIcon.svg"
                        alt="whyRamzNegarSeif"
                        className={`ml-[13.65px] ${isSelected && ""}`}
                      />
                    ) : (
                      <Image
                        width={20}
                        height={20}
                        src="/assets/images/NewHomePage/ServicesSelected.svg"
                        alt="whyRamzNegarSeif"
                        className={`ml-[13.65px] ${isSelected && ""}`}
                      />
                    )}
                    <li>
                      <Link href={links[1].href}>
                        <span
                          className={`${
                            isSelected && "font-[800px] text-[16px] "
                          } py-10 whitespace-nowrap`}
                        >
                          سرویس ها
                        </span>
                      </Link>
                    </li>
                  </div>
                  <div
                    className={`p-2  mb-5 -mt-2 ${
                      !cookies.nationalCode && "mr-[140px] md:mr-0"
                    }`}
                  >
                    <BsChevronDown
                      className={`w-6 h-6 cursor-pointer ${
                        isSelected && "transition-all rotate-180 duration-500"
                      }`}
                      onClick={() => setIsSelected(!isSelected)}
                    />
                  </div>
                </div>
                {/* servicesDetails */}
                {isSelected && (
                  <ul
                    className={`text-[12px] md:text-[14px] -mr-[16px]  ${
                      isSelected &&
                      " bg-neutralColor-5 mb-8 rounded-3xl pr-14 pt-8 -mr-4 gap-y-[50px]"
                    }`}
                  >
                    <li className="mb-[34px]">
                      <Link href="/ramzNegarServices/myPoliceServices">
                        <span className="">سرویس های پلیس من</span>
                      </Link>
                    </li>
                    <li className="mb-[34px]">
                      <Link href="/ramzNegarServices/coinServices">
                        <span className="">سرویس های خرید سکه</span>
                      </Link>
                    </li>
                    <li className="mb-[34px]">
                      <Link href="/ramzNegarServices/serviceServices">
                        <span className=" ">سرویس های خدماتی</span>
                      </Link>
                    </li>
                    <li className="mb-[34px]">
                      <Link href="#">
                        <span className="  whitespace-nowrap">
                          سرویس های کیف پول الکترونیکی
                        </span>
                      </Link>
                    </li>
                    <li className="mb-[34px]">
                      <Link href="#">
                        <span className=" whitespace-nowrap">
                          سرویس های ثبت و مدیریت کاربران
                        </span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <div className="flex items-center mb-10 ">
                <BiAward className="w-[23px] h-[24px] -mr-2 fill-neutralColor-1" />
                <li>
                  <Link href="/termsAndConditions">
                    <span className="p-10 -mr-4">قوانین و مقررات</span>
                  </Link>
                </li>
              </div>
              <div className="flex items-center mb-10 ">
                <Image
                  width={20}
                  height={20}
                  src="/assets/images/NewHomePage/contactUsIcon.svg"
                  alt="whyRamzNegarSeif"
                  className="-ml-[5px]"
                />
                <li>
                  <Link href={links[2].href}>
                    <span className="p-10 -mr-3">تماس با ما</span>
                  </Link>
                </li>
              </div>
              {cookies.nationalCode && (
                <>
                  <hr
                    className={`w-[291px] h-0 bg-neutralColor-4 -mr-[16px] ${
                      isSelected ? "-mb-[15px]" : "mb-[20px]"
                    }`}
                  />
                  <div className="flex py-1" onClick={exitHandler}>
                    <Image
                      width={20}
                      height={20}
                      src="/assets/images/NewHomePage/signOutIcon.svg"
                      alt="whyRamzNegarSeif"
                      className="ml-[12px]"
                    />
                    <div>خروج از حساب کاربری</div>
                  </div>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
      {/* Backdrop */}
      <div
        className={`z-40 ${
          isOpen &&
          " fixed top-0  w-screen h-screen  backdrop-brightness-50 backdrop-contrast-100  backdrop-opacity-80 lg:backdrop-opacity-0 "
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
    </div>
  );
};

export default MobileAndTabletMenu;
