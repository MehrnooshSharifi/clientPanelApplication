import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useCookies } from "react-cookie";
import { ThreeDots } from "react-loader-spinner";
import Image from "next/image";
import { useRef } from "react";
import { UpdateUserEmailMobile } from "@/server/Service";
import toast from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { useRouter } from "next/router";
const DesktopUserInfoDetails = ({
  setShowPersonalInfoModal,
  showPersonalInfoModal,
  closeModalHandler,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cookies] = useCookies();
  const refPhoneNumber = useRef();
  const refEmail = useRef();
  const initialValues = {
    firstName: cookies.firstName,
    lastName: cookies.lastName,
    nationalCode: cookies.nationalCode,
    phoneNumber: cookies.phoneNumber,
    email: cookies.email,
  };
  const router = useRouter();
  const onSubmit = async (values, { resetForm }) => {
    resetForm();
    setIsLoading(true);
    const res = await UpdateUserEmailMobile(values);
    if (res.isSuccess) {
      toast.success(res.message, {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      setShowPersonalInfoModal(false);
      setIsLoading(false);
    } else {
      toast.error(res.message, {
        duration: 4000,
        style: {
          backgroundColor: "#EE3A01",
          color: "#fff",
        },
        className: "",
        icon: <VscError className="w-[28px] h-[28px]" />,
      });
      setIsLoading(false);
    }
  };
  const focusPhoneNumber = () => {
    refPhoneNumber.current.focus();
  };
  const focusEmail = () => {
    refEmail.current.focus();
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });
  return (
    <>
      <div className="hidden lg:block max-w-[446px] h-[539.06px]  p-[20px] absolute top-[200px] bg-naturalColor-2 rounded-[5px] animate-slideInDown animate-duration-500 z-50 ">
        {/* Title and CloseIcone */}
        <div className="flex w-[396px] h-[39.6px]  mb-[40px] items-center whitespace-nowrap  gap-x-[180px] mr-[5px]">
          <div className="text-[20px] font-bold leading-[34.55px]">
            <span>اطلاعات شخصی کاربر</span>
          </div>
          <div
            onClick={() => setShowPersonalInfoModal(false)}
            className="cursor-pointer"
          >
            <MdOutlineClose className="w-[28px] h-[28px]" />
          </div>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center mt-[30px] gap-y-[50px] "
        >
          {/* userName */}
          <div className="flex flex-col relative">
            <label
              className=" md:w-[142px] md:h-[20px]  absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-3"
              htmlFor="userName"
            >
              <span className="">نام و نام خانوادگی</span>
            </label>
            <input
              readOnly
              autoComplete="off"
              className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[16px] bg-neutralColor-5 text-neutralColor-3 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              value={`${formik.values.firstName} ${formik.values.lastName}`}
            />
          </div>
          {/* nationalCode */}
          <div className="flex flex-col relative">
            <label
              className=" md:w-[69px] md:h-[20px]  absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-3"
              htmlFor="nationalCode"
            >
              <span className="">کد ملی</span>
            </label>
            <input
              readOnly
              autoComplete="off"
              className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[16px] bg-neutralColor-5 text-neutralColor-3 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="nationalCode"
              name="nationalCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nationalCode}
            />
          </div>
          {/* phoneNumber */}
          <div className="flex flex-col relative">
            <label
              className=" md:w-[102px] md:h-[38px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
              htmlFor="serviceGroupName"
            >
              <span className="">شماره تماس</span>
            </label>
            <input
              ref={refPhoneNumber}
              dir="ltr"
              className="w-[327px] lg:w-[396px] lg:h-[48px]  text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pl-4 "
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
            <div
              className="w-fit absolute top-[15px] right-[20px] lg:top-[12px] cursor-pointer"
              onClick={focusPhoneNumber}
            >
              <Image
                alt="edit"
                src="/assets/images/yellowEdit.svg"
                width={20}
                height={21}
              />
            </div>
          </div>
          {/* email */}
          <div className="flex flex-col relative">
            <label
              className=" md:w-[58px] md:h-[38px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
              htmlFor="email"
            >
              <span className="">ایمیل</span>
            </label>
            <input
              ref={refEmail}
              dir="ltr"
              className="w-[327px] lg:w-[396px] lg:h-[48px]  text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pl-4 "
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <div
              className="w-fit absolute top-[15px] right-[20px] lg:top-[12px] cursor-pointer"
              onClick={focusEmail}
            >
              <Image
                alt="edit"
                src="/assets/images/yellowEdit.svg"
                width={20}
                height={21}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primaryColor-1  rounded-[5px] text-center  px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[396px]  h-[48px] -mt-[25px]"
          >
            <div className="flex justify-center relative">
              <span>ثبت تغییرات</span>
              <div className="absolute top-[8px] hidden lg:block">
                {isLoading && (
                  <ThreeDots
                    height="40"
                    width="40"
                    radius="9"
                    color="#FAFAFA"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                )}
              </div>
            </div>
          </button>
        </form>
      </div>
      {showPersonalInfoModal && (
        <div className="hidden lg:flex justify-between">
          <div
            onClick={closeModalHandler}
            className="z-40 fixed top-0 right-0  w-screen h-screen  backdrop-brightness-0 backdrop-contrast-100  backdrop-opacity-60 "
          />
        </div>
      )}
    </>
  );
};

export default DesktopUserInfoDetails;
