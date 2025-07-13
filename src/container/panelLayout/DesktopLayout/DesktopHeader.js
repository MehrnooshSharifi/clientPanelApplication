import Image from "next/image";
import { useRouter } from "next/router";
import { GoBellFill } from "react-icons/go";
const DesktopHeader = () => {
  const router = useRouter();
  return (
    <div className=" hidden lg:flex h-[101px] py-[24.67px] bg-neutralColor-5">
      <div className="w-[1030px]  mx-auto">
        <div
          className="mr-[30px] cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/assets/images/NewHomePage/TabadolLogo_01.png"
            width={50}
            height={50}
            alt="ramzNegarCompleteLogo"
          />
        </div>
        <div className="flex items-center mr-[900px] -mt-[45px] gap-x-[8px]  w-fit ">
          <div className="flex relative">
            <div className="bg-secondaryColor-1 w-[20px] h-[20px] rounded-full ring-2 ring-white absolute -top-[2px] flex items-center justify-center">
              {/* //TODO: this number must comes from backend */}
              <span className="text-neutralColor-1 text-[12px] font-bold mt-[3px]">
                0
              </span>
            </div>
            <GoBellFill className="w-[40px] h-[40px]" />
          </div>
          <span className="text-[16px] font-bold text-neutralColor-1 whitespace-nowrap">
            پیام های من
          </span>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
