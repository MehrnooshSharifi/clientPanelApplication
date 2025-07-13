import MobileUserInfoDetails from "@/components/clientUser/UserInfoDetails/MobileUserInfoDetails";
import { useCookies } from "react-cookie";
const UserInfoDetails = ({ userData }) => {
  const [cookies] = useCookies();
  return (
    <div className="max-w-[375px] mx-auto md:max-w-[768px] lg:hidden">
      <div className="mr-[5px] md:mr-[5px] lg:-mr-[50px] lg:mt-[20px]">
        {/* Title */}
        <div className="-mr-[27px] w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] lg:mr-2 lg:mb-[30.09px]">
          <span>ویرایش اطلاعات کاربری</span>
        </div>
        <div className="-mr-[27px] w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] lg:mr-2 lg:mb-[30.09px]">
          <span>اطلاعات شخصی کاربر</span>
        </div>
      </div>
      <MobileUserInfoDetails />
    </div>
  );
};

export default UserInfoDetails;
