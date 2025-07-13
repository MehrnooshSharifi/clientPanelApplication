import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import MobileAndTabletMenu from "./MobileAndTabletMenu";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Image from "next/image";
const TabletAndMobileHeader = ({
  links,
  showSignoutModal,
  setShowSignoutModal,
}) => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies();
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="overflow-y-clip flex justify-between mt-[20px] items-center gap-x-[120px] px-4  md:px-4 md:my-[31px] lg:hidden ">
        {/* Button and MenuBar Section */}
        <div className="flex items-center justify-start gap-x-[17px] md:gap-x-[23.12px] ml-[141.79px] md:ml-[472.74px]">
          <HiBars3
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer"
            onClick={openHandler}
          />
        </div>
        {/* Logo */}
        <div onClick={() => router.push("/")}>
          <Image
            width={25}
            height={25}
            className="w-[48px] h-[48px] md:w-[58px] md:h-[58px]"
            src="/assets/images/NewHomePage/TabadolLogo_01.png"
            alt="logo"
          />
        </div>
      </div>
      <MobileAndTabletMenu
        showSignoutModal={showSignoutModal}
        setShowSignoutModal={setShowSignoutModal}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        links={links}
      />
    </>
  );
};

export default TabletAndMobileHeader;
