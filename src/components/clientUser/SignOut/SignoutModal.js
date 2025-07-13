import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const SignoutModal = ({
  showSignoutModal,
  setShowSignoutModal,
  closeModalHandler,
}) => {
  const router = useRouter();
  const exitHandler = () => {
    Cookies.remove("nationalCode");
    Cookies.remove("firstName");
    Cookies.remove("lastName");
    Cookies.remove("phoneNumber");
    Cookies.remove("email");
    Cookies.remove("token");
    Cookies.remove("isChangePassword");
    Cookies.remove("Token");
    Cookies.remove("balance");
    Cookies.remove("benefitAmount");
    Cookies.remove("userServicePoint");
    setShowSignoutModal(false);
    router.push("/user/signIn");
  };
  return (
    <>
      <div className="w-[320px] h-[232px] md:w-[452px] md:h-[262px] lg:w-[458px] lg:h-[275px] bg-naturalColor-2 absolute top-[300px]  lg:top-[200px] rounded-[10px] lg:rounded-[5px] animate-slideInDown animate-duration-500 z-50 py-[50px] px-[53px]">
        <div className="flex flex-col items-center justify-center gap-y-5">
          {/* signoutImage */}
          <div>
            <Image
              src="/assets/images/blackSignOut.svg"
              alt="signOut"
              width={36}
              height={36}
            />
          </div>
          {/* question */}
          <div className="text-[14px] md:text-[16px] lg:text-[18px] font-bold  leading-[31.09px] whitespace-nowrap">
            <span>آیا میخواهید از حساب کاربری خود خارج شوید؟</span>
          </div>
          {/* buttons */}
          <div className="flex gap-x-4">
            <button
              onClick={exitHandler}
              className=" w-[132px] h-[40px] md:w-[168px] lg:w-[168px] lg:h-[44px] rounded-[5px] py-[8px] px-[16px] text-[14px] md:text-[16px] lg:text-[16px] leading-[27.64px]  font-bold bg-primaryColor-1 text-naturalColor-2"
            >
              تایید
            </button>
            <button
              onClick={() => setShowSignoutModal(false)}
              className="w-[132px] h-[40px] md:w-[168px]  lg:w-[168px] lg:h-[44px] rounded-[5px] py-[8px] px-[16px] text-[14px] md:text-[16px] lg:text-[16px] leading-[27.64px]  font-bold bg-naturalColor-2 text-primaryColor-1 border border-primaryColor-1"
            >
              انصراف
            </button>
          </div>
        </div>
      </div>
      {showSignoutModal && (
        <div className="flex justify-between">
          <div
            onClick={closeModalHandler}
            className="z-40 fixed top-0 right-0  w-screen h-screen  backdrop-brightness-0 backdrop-contrast-100  backdrop-opacity-60 "
          />
        </div>
      )}
    </>
  );
};

export default SignoutModal;
