import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Image from "next/image";
import { BiSolidUser } from "react-icons/bi";
import { GoBellFill } from "react-icons/go";
const MobileAndTabletMenu = ({ isOpen, setIsOpen, setShowSignoutModal }) => {
  const [cookies, setCookie] = useCookies();
  const [isSelected, setIsSelected] = useState(false);
  const router = useRouter();

  return (
    <div>
      <div
        className={`z-50 fixed top-0  lg:hidden  ${
          isOpen
            ? "animate-slideInRight animate-duration-500"
            : "animate-slideOutRight animate-duration-500"
        }  `}
      >
        <div
          className={` flex flex-col  items-start w-[323px] h-[670px] bg-gradient-to-b overflow-y-auto overflow-x-clip from-gradient-1 to-gradient-2 shadow-2xl rounded-tl-[50px] rounded-bl-[50px] pt-3 pr-4 md:w-[375px] md:h-screen `}
        >
          <div className="flex gap-x-[20px] ">
            <div className="flex items-center gap-x-[8px]  w-fit mr-[255px] md:mr-[300px] ">
              <div className="flex relative">
                <div className="bg-secondaryColor-1 w-[15px] h-[15px] rounded-full ring-2 ring-black absolute top-[2px] flex items-center justify-center">
                  {/* //TODO: this number must comes from backend */}
                  <span className="text-neutralColor-1 text-[12px] font-bold">
                    0
                  </span>
                </div>
                {/* //TODO : this link musb be change */}
                <GoBellFill
                  className="w-[30px] h-[45px] fill-white"
                  onClick={() => router.push("/")}
                />
              </div>
            </div>
            {/*Close Icon */}
            <MdOutlineClose
              className="w-[30.85px] h-[30.85px] absolute  cursor-pointer fill-naturalColor-2"
              onClick={() => setIsOpen(false)}
            />
          </div>
          {/* UserInfo */}
          <div className="flex flex-col mb-[20px] mt-[50px]">
            <div className="flex items-center">
              {/* UserIcon */}
              <div
                className={
                  "bg-neutralColor-5 rounded-full w-[67px] h-[67px] flex justify-center items-center ml-[16px]"
                }
              >
                <BiSolidUser className="fill-primaryColor-1 w-[32px] h-[32px]" />
              </div>
              {/* UserName */}
              {cookies.nationalCode && (
                <div className="flex gap-x-[75px]  md:gap-x-[110px] items-center">
                  <div className="flex text-naturalColor-2 text-[14px] md:text-[16px] font-[15px] justify-between gap-x-3">
                    <span> {cookies.firstName}</span>
                    <span> {cookies.lastName}</span>
                  </div>
                  <Link
                    className="w-[48px] h-[48px] flex items-center justify-center "
                    href="/user/userInfoDetails"
                  >
                    <Image
                      src="/assets/images/whiteEdit.svg"
                      alt="editUserInfo"
                      width={20}
                      height={21}
                    />
                  </Link>
                </div>
              )}
            </div>
            {/* IncomeSection */}
            <div className="flex flex-col mt-[20px] gap-y-[10px] ">
              <div className="flex items-center gap-x-[25px] md:gap-x-[185px]  h-[40px] md:w-[343px] bg-primaryColor-5 rounded-[10px] py-4 px-[10px]">
                <div className="flex gap-x-[5px] items-center">
                  <span className="text-neutralColor-1 text-[12px] md:text-[16px] leading-[28px] font-medium">
                    موجودی
                  </span>
                </div>
                <div className="flex text-neutralColor-1  leading-[28px] gap-x-[2px] mr-[120px] md:-mr-[40px]">
                  <span className="font-bold text-[12px] md:font-bold md:text-[16px]">
                    {parseFloat(cookies.balance).toLocaleString("fa-IR")}
                  </span>
                  <span className="text-[12px] font-light md:text-[14px]">
                    ریال
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-x-[35px] md:gap-x-[200px]  h-[40px] md:w-[343px] bg-secondaryColor-5 rounded-[10px] py-4 px-[10px]">
                <div className="flex gap-x-[5px] items-center">
                  <span className="text-neutralColor-1 text-[12px] md:text-[16px] leading-[28px] font-medium">
                    کارمزد
                  </span>
                </div>
                <div className="flex text-neutralColor-1 leading-[28px] gap-x-[2px] mr-[120px] md:-mr-[40px]">
                  <span className="font-bold text-[12px] md:font-bold md:text-[16px]">
                    {parseFloat(cookies.benefitAmount).toLocaleString("fa-IR")}
                  </span>
                  <span className="text-[12px] font-light md:text-[14px]">
                    ریال
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-x-[35px] md:gap-x-[200px]  h-[40px] md:w-[343px] bg-errorColor-5 rounded-[10px] py-4 px-[10px]">
                <div className="flex gap-x-[5px] items-center">
                  <span className="text-neutralColor-1 text-[12px] md:text-[16px] leading-[28px] font-medium">
                    امتیاز کاربر
                  </span>
                </div>
                <div className="flex text-neutralColor-1 leading-[28px] gap-x-[2px] mr-[120px] md:-mr-[40px]">
                  <span className="font-bold text-[12px] md:font-bold md:text-[16px]">
                    {parseFloat(cookies.userServicePoint).toLocaleString(
                      "fa-IR"
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-[291px] md:w-[343px] h-0 bg-neutralColor-4 mb-5" />
          {/* navSection */}
          <nav className="mx-[5px] ">
            <ul className="flex flex-col text-naturalColor-2 gap-y-[5px] items-start text-[14px] font-[15px] md:text-[16px]">
              {/* applications */}
              <div className="flex items-center mb-[16px] gap-x-[10px]">
                <Image
                  width={25}
                  height={25}
                  src="/assets/images/applicationsIcon.svg"
                  alt="applicationsIcon"
                  className="-ml-[5px]"
                />
                <li className="py-[10px] w-[291px]">
                  <Link href="/panel/applications">
                    <span>اپلیکیشن ها</span>
                  </Link>
                </li>
              </div>
              {/* useHelp */}
              <div className="flex items-center mb-[16px] gap-x-[10px]">
                <Image
                  width={25}
                  height={25}
                  src="/assets/images/useHelpIcon.svg"
                  alt="useHelpIcon"
                  className="-ml-[5px]"
                />
                <li className="py-[10px] w-[291px]">
                  <Link href="/panel/userManual">
                    <span>راهنمای استفاده</span>
                  </Link>
                </li>
              </div>
              {/* LoginReposrt */}
              <div className="flex items-center mb-[16px] gap-x-[10px]">
                <Image
                  width={25}
                  height={25}
                  src="/assets/images/loginReportsIcon.svg"
                  alt="loginReportsIcon"
                  className="-ml-[5px]"
                />
                <li className="py-[10px] w-[291px]">
                  <Link href="/panel/loginReports">
                    <span>گزارشات لاگین</span>
                  </Link>
                </li>
              </div>
              {/* technicalDocumentation of services */}
              <div className="flex items-center mb-[16px] gap-x-[10px]">
                <Image
                  src="/assets/images/technicalDocumentationIcon.svg"
                  alt="technicalDocumentationIcon"
                  className=""
                  width={24}
                  height={24}
                />
                <li className="py-[10px] w-[291px]">
                  <Link href="/panel/technicalDocsServices">
                    <span>مستندات فنی سرویس ها</span>
                  </Link>
                </li>
              </div>
              {/* financial */}
              <div
                onClick={() => setIsSelected(!isSelected)}
                className={`flex flex-col justify-center w-full  mb-[15px]`}
              >
                <div className=" flex justify-between items-center md:gap-x-[190px]">
                  <div className={`flex items-center gap-x-[10px]`}>
                    <Image
                      width={25}
                      height={25}
                      src="/assets/images/financialIcon.svg"
                      alt="financialIcon"
                      className="w-[30px] h-[30px]"
                    />

                    <li>
                      <Link href="">
                        <span className="whitespace-nowrap">مالی</span>
                      </Link>
                    </li>
                  </div>
                  <div
                    className={`p-2  ${
                      !cookies.nationalCode && "mr-[140px] md:mr-0"
                    }`}
                  >
                    <BsChevronDown
                      className={`w-6 h-6 cursor-pointer fill-white ml-[12px] md:-ml-[5px] ${
                        isSelected && "transition-all rotate-180 duration-500"
                      }`}
                    />
                  </div>
                </div>
                {/* financialDetails */}
                {isSelected && (
                  <ul className="text-[12px] bg-primaryColor-6 mb-[8px] rounded-[10px] pr-4 ml-[20px] md:ml-[34px] md:text-[14px] ">
                    <li className="  w-[250px] h-[58px] flex items-center mb-3">
                      <Link href="/panel/financial/increaseCredit" className="">
                        <span>افزایش اعتبار</span>
                      </Link>
                    </li>
                    <li className=" w-[250px] h-[58px] flex items-center">
                      <Link href="/panel/financial/financialReports">
                        <span>گزارشات مالی</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              {/* Tickets */}
              <div className="flex items-center mb-[16px] gap-x-[10px]">
                <Image
                  width={25}
                  height={25}
                  src="/assets/images/tickets.svg"
                  alt="tickets"
                  className="-ml-[5px]"
                />
                <li className="py-[10px] w-[291px]">
                  <Link href="/panel/tickets">
                    <span>تیکت ها</span>
                  </Link>
                </li>
              </div>
              {cookies.nationalCode && (
                <>
                  <hr
                    className={`w-[291px] md:w-[343px] h-0 bg-neutralColor-4 -mr-[16px] ${
                      isSelected ? "mb-[5px] md:mb-[20px]" : "mb-[20px]"
                    }`}
                  />
                  <div
                    className={`flex pb-[10px]  ${
                      isSelected ? "mb-[10px] " : "mb-0"
                    }`}
                    onClick={() => setShowSignoutModal(true)}
                  >
                    <div
                      className={`flex ${
                        isSelected ? "mt-[10px]" : "-mt-[10px]"
                      } `}
                    >
                      <Image
                        width={25}
                        height={25}
                        src="/assets/images/Exit.svg"
                        alt="whyRamzNegarSeif"
                        className="ml-[12px]"
                      />
                      <div>خروج از حساب کاربری</div>
                    </div>
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
        } `}
        onClick={() => setIsOpen(false)}
      ></div>
    </div>
  );
};

export default MobileAndTabletMenu;
