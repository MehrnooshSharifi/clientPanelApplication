import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { useCookies } from "react-cookie";
import { MdCreditScore } from "react-icons/md";
const DesktopSideBar = ({
  showPassModal,
  setShowPassModal,
  showSignoutModal,
  setShowSignoutModal,
  setShowPersonalInfoModal,
  showPersonalInfoModal,
}) => {
  const [cookies] = useCookies();
  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("5");
  return (
    <div className="fixed right-0 z-50">
      <div className="hidden relative lg:flex  justify-center pt-[47px] text-white bg-gradient-to-b from-gradient-1 to-gradient-2 min-w-[270px] h-[1024px]">
        {isSelected && cookies.nationalCode && (
          <div className="w-[230px] h-[192px] flex flex-col gap-y-[10px] bg-naturalColor-2 absolute top-[160px] rounded-[5px] py-[20px] px-[10px] z-10">
            <div
              onClick={() => setShowPersonalInfoModal(!showPersonalInfoModal)}
              className="flex w-[210px] h-[48px] items-center gap-x-[8px] pr-2 hover:bg-secondaryColor-5 active:bg-secondaryColor-3 cursor-pointer rounded-[5px]"
            >
              <Image
                src="/assets/images/personalInfoIcon.svg"
                width={16.04}
                height={16}
                alt="personalInfo"
              />
              <span className="text-neutralColor-1 text-[12px] font-normal mt-[4px]   leading-[27.64px] whitespace-nowrap">
                اطلاعات شخصی
              </span>
            </div>
            <hr className="w-[210px]" />
            <div
              onClick={() => setShowPassModal(!showPassModal)}
              className="flex w-[210px]  h-[48px] items-center gap-x-[8px] pr-2 hover:bg-secondaryColor-5 active:bg-secondaryColor-3 cursor-pointer rounded-[5px]"
            >
              <Image
                src="/assets/images/changePass.svg"
                width={16}
                height={16}
                alt="changePass"
              />
              <span className="text-neutralColor-1 text-[12px] font-normal mt-[4px]  leading-[27.64px] whitespace-nowrap">
                تغییر رمز عبور
              </span>
            </div>
            <hr className="w-[210px]" />
            <div
              onClick={() => setShowSignoutModal(!showSignoutModal)}
              className="flex w-[210px] h-[48px] items-center gap-x-[8px] pr-2 hover:bg-secondaryColor-5 active:bg-secondaryColor-3 cursor-pointer rounded-[5px]"
            >
              <Image
                src="/assets/images/blueExit.svg"
                width={16}
                height={16}
                alt="Exit"
              />
              <span className="text-neutralColor-1 text-[12px] font-normal  leading-[27.64px] whitespace-nowrap">
                خروج از حساب کاربری
              </span>
            </div>
          </div>
        )}
        {/* SideBarSection */}
        <div className="flex flex-col z-0">
          {/* userSection */}
          <div className="flex flex-col items-center gap-y-[10px] mb-[68px]">
            {/* simbol user */}
            <div className="w-[67px] h-[67px] rounded-full bg-naturalColor-2 flex items-center justify-center">
              <BiSolidUser className="fill-primaryColor-1 w-[28px] h-[28px]" />
            </div>
            {/* userInfo */}
            {cookies.nationalCode && (
              <div
                className="flex cursor-pointer gap-x-[5px] mr-3"
                onClick={() => setIsSelected(!isSelected)}
              >
                <span className="text-[15px] font-medium leading-[25.91px]">
                  {cookies.firstName}
                </span>
                <span className="text-[15px] font-medium leading-[25.91px]">
                  {cookies.lastName}
                </span>
                <BsChevronDown
                  className={`w-4 h-4 cursor-pointer mt-1 ${
                    isSelected && "transition-all rotate-180 duration-500"
                  }`}
                />
              </div>
            )}
          </div>
          {/* MenuLists */}
          <div className="flex flex-col ">
            {/* applications */}
            <Link
              onClick={() => setSelectedItem("4")}
              className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6 ${
                selectedItem === "4" ? "bg-primaryColor-6" : ""
              }`}
              href="/panel/applications"
            >
              <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                <div className="flex gap-x-[8px] items-center">
                  <Image
                    src="/assets/images/applicationsIcon.svg"
                    alt="applicationsIcon"
                    width={24}
                    height={24}
                  />
                  <span className="text-[16px] font-medium">اپلیکیشن ها</span>
                </div>
              </div>
            </Link>
            {/* useHelp */}
            <Link
              onClick={() => setSelectedItem("5")}
              className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6 ${
                selectedItem === "5" ? "bg-primaryColor-6" : ""
              }`}
              href="/panel/userManual"
            >
              <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                <div className="flex gap-x-[8px] items-center">
                  <Image
                    src="/assets/images/useHelpIcon.svg"
                    alt="useHelpIcon"
                    width={24}
                    height={24}
                  />
                  <span className="text-[16px] font-medium">
                    راهنمای استفاده
                  </span>
                </div>
              </div>
            </Link>
            {/* LoginReports */}
            <Link
              onClick={() => setSelectedItem("3")}
              className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6 ${
                selectedItem === "3" ? "bg-primaryColor-6" : ""
              }`}
              href="/panel/loginReports"
            >
              <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                <div className="flex gap-x-[8px] items-center">
                  <Image
                    src="/assets/images/loginReportsIcon.svg"
                    alt="loginReportsIcon"
                    width={24}
                    height={24}
                  />
                  <span className="text-[16px] font-medium">گزارشات لاگین</span>
                </div>
              </div>
            </Link>
            {/* technicalDocumentation of services */}
            <Link
              onClick={() => setSelectedItem("6")}
              className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6  ${
                selectedItem === "6" ? "bg-primaryColor-6" : ""
              }`}
              href="/panel/technicalDocsServices"
            >
              <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                <div className="flex gap-x-[8px] items-center">
                  <Image
                    src="/assets/images/technicalDocumentationIcon.svg"
                    alt="technicalDocumentationIcon"
                    width={24}
                    height={24}
                  />
                  <span className="text-[16px] font-medium">
                    مستندات فنی سرویس ها
                  </span>
                </div>
              </div>
            </Link>
            {/* financial */}
            <div
              className={`w-[270px] items-center cursor-pointer ${
                !isOpen && "hover:bg-primaryColor-6"
              }`}
            >
              <div
                onClick={() => setIsOpen(!isOpen)}
                className={`flex w-[210px] items-center justify-between h-[76px]  border-t border-neutralColor-3 mx-[30px]`}
              >
                <div className="flex gap-x-[8px] items-center">
                  <Image
                    src="/assets/images/financialIcon.svg"
                    alt="financialIcon"
                    width={24}
                    height={24}
                  />
                  <span className="text-[16px] font-medium">مالی</span>
                </div>
                {!isOpen ? (
                  <BsChevronDown className="w-4 h-4" />
                ) : (
                  <BsChevronUp className="w-4 h-4" />
                )}
              </div>
              {isOpen && (
                <div className="flex flex-col">
                  <Link
                    onClick={() => setSelectedItem("1")}
                    href="/panel/financial/increaseCredit"
                    className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6  focus-within:bg-primaryColor-6 ${
                      selectedItem === "1" ? "bg-primaryColor-6" : ""
                    }`}
                  >
                    <span className="py-4 px-[30px]  text-[14px] font-medium">
                      افزایش اعتبار
                    </span>
                  </Link>
                  <Link
                    onClick={() => setSelectedItem("2")}
                    href="/panel/financial/financialReports"
                    className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6 focus-within:bg-primaryColor-6 ${
                      selectedItem === "2" ? "bg-primaryColor-6" : ""
                    }`}
                  >
                    <span className="py-4 px-[30px]  text-[14px] font-medium">
                      گزارشات مالی
                    </span>
                  </Link>
                </div>
              )}
            </div>
            {/* Tickets */}
            <Link
              onClick={() => setSelectedItem("7")}
              className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6  ${
                selectedItem === "7" ? "bg-primaryColor-6" : ""
              }`}
              href="/panel/tickets"
            >
              <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                <div className="flex gap-x-[8px] items-center">
                  <Image
                    src="/assets/images/tickets.svg"
                    alt="tickets"
                    width={24}
                    height={24}
                  />
                  <span className="text-[16px] font-medium">تیکت ها</span>
                </div>
              </div>
            </Link>
          </div>
          {/* IncomeSection */}
          <div className="flex flex-col mx-[10px] absolute top-[700px] gap-y-[10px] ">
            <div className="flex items-center gap-x-[120px] w-[250px] h-[60px] bg-secondaryColor-5 rounded-[10px] py-4 px-[10px]">
              <div className="flex gap-x-[5px] items-center">
                <Image
                  src="/assets/images/wageIcon.svg"
                  alt="wage"
                  width={28}
                  height={28}
                />
                <span className="text-neutralColor-1 text-[14px] leading-[28px] font-medium">
                  کارمزد:
                </span>
              </div>
              {/* //TODO: must come from backend */}
              <div className="flex text-neutralColor-1 leading-[28px] gap-x-[2px] -mr-[20px]">
                <span className="font-bold text-[14px] ">
                  {parseFloat(cookies.benefitAmount).toLocaleString("fa-IR")}
                </span>
                <span className="text-[12px]">ریال</span>
              </div>
            </div>
            <div className="flex items-center gap-x-[100px] w-[250px] h-[60px] bg-primaryColor-5 rounded-[10px] py-4 px-[10px]">
              <div className="flex gap-x-[5px] items-center">
                <Image
                  src="/assets/images/inventoryIcon.svg"
                  alt="wage"
                  width={28}
                  height={28}
                />
                <span className="text-neutralColor-1 text-[14px] leading-[28px] font-medium">
                  موجودی:
                </span>
              </div>
              {/* //TODO: must come from backend */}
              <div className="flex text-neutralColor-1  leading-[28px] gap-x-[2px] -mr-[30px]">
                <span className="font-bold text-[14px]">
                  {parseFloat(cookies.balance).toLocaleString("fa-IR")}
                </span>
                <span className="text-[12px]">ریال</span>
              </div>
            </div>
            <div className="flex items-center gap-x-[100px] w-[250px] h-[60px] bg-errorColor-5 rounded-[10px] py-4 px-[10px]">
              <div className="flex gap-x-[5px] items-center">
                <MdCreditScore className="w-[28px] h-[28px] fill-errorColor-3" />
                <span className="text-neutralColor-1 text-[14px] leading-[28px] font-medium whitespace-nowrap">
                  امتیاز کاربر:
                </span>
              </div>
              {/* //TODO: must come from backend */}
              <div className="flex text-neutralColor-1  leading-[28px] gap-x-[2px] -mr-[30px]">
                <span className="font-bold text-[14px]">
                  {parseFloat(cookies.userServicePoint).toLocaleString("fa-IR")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSideBar;
