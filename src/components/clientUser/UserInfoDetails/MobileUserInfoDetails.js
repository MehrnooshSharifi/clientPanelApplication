import { useFormik } from "formik";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { ThreeDots } from "react-loader-spinner";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";
import { UpdateUserEmailMobile } from "@/server/Service";
import toast from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
const MobileUserInfoDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cookies] = useCookies();
  const refPhoneNumber = useRef();
  const refEmail = useRef();
  const router = useRouter();
  const initialValues = {
    firstName: cookies.firstName,
    lastName: cookies.lastName,
    nationalCode: cookies.nationalCode,
    phoneNumber: cookies.phoneNumber,
    email: cookies.email,
    password: cookies.password,
  };
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
      setIsLoading(false);
      router.push("/user/signIn");
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
    <form className="flex flex-col gap-y-[36px]" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-y-[36px] md:flex-row md:gap-x-[25px] lg:hidden ">
        {/* firstName */}
        <div className="flex flex-col relative  ">
          <label
            className=" w-[35px] h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] md:text-[14px] leading-[20.73px] md:leading-[24px] font-bold text-neutralColor-3"
            htmlFor="firstName"
          >
            <span className="">نام </span>
          </label>
          <input
            readOnly
            autoComplete="off"
            className="w-[327px] h-[50px]  text-[14px] md:text-[16px] text-neutralColor-3 bg-neutralColor-5 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
        {/* LastName */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[12px] md:text-[14px] leading-[20.73px] md:leading-[24px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
            htmlFor="lastName"
          >
            <span>نام خانوادگی</span>
          </label>
          <input
            readOnly
            className="w-[327px] h-[50px] text-[14px] md:text-[16px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-[36px] md:flex-row md:gap-x-[25px] lg:hidden">
        {/* NationalCode */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[12px] md:text-[14px] leading-[20.73px] md:leading-[24px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
            htmlFor="nationalCode"
          >
            <span>کد ملی</span>
          </label>
          <input
            readOnly
            className="w-[327px] h-[50px]  text-[14px] md:text-[16px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            name="nationalCode"
            value={formik.values.nationalCode}
            onChange={formik.handleChange}
          />
        </div>
        {/* PhoneNumber */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[12px] md:text-[14px] leading-[20.73px] md:leading-[24px] mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="phoneNumber"
          >
            <span>شماره تماس</span>
          </label>
          <input
            ref={refPhoneNumber}
            dir="ltr"
            className="w-[327px] h-[50px]   text-[14px] md:text-[16px] leading-[24.18px]  text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] p-[16px] "
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
          />
          <div
            onClick={focusPhoneNumber}
            className="w-fit absolute top-[15px] right-[20px]"
          >
            <Image
              alt="edit"
              src="/assets/images/yellowEdit.svg"
              width={15.61}
              height={16}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[36px] md:flex-row md:gap-x-[25px] lg:hidden">
        {/*EmailAddress */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[12px] md:text-[14px] leading-[20.73px] md:leading-[24px] mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="email"
          >
            <span>ایمیل</span>
          </label>
          <input
            ref={refEmail}
            dir="ltr"
            className="w-[327px] h-[50px]   text-[14px] md:text-[16px] leading-24.18px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 first-line:py-[12px] pl-[16px] "
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <div
            onClick={focusEmail}
            className="w-fit absolute top-[15px] right-[20px]"
          >
            <Image
              alt="edit"
              src="/assets/images/yellowEdit.svg"
              width={15.61}
              height={16}
            />
          </div>
        </div>
        {/* password */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[12px] md:text-[14px] leading-[20.73px] md:leading-[24px] mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="password"
          >
            <span>رمز عبور</span>
          </label>
          <input
            placeholder="برای تغییر رمز عبور بر روی آیکن کلیک کنید"
            readOnly
            dir="ltr"
            type="password"
            className="w-[327px] h-[50px]   text-[14px] md:text-[14px] leading-24.18px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] p-[16px] "
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <div
            onClick={() => router.push("/user/changePassword")}
            className="w-fit absolute top-[15px] right-[20px]"
          >
            <Image
              alt="edit"
              src="/assets/images/yellowEdit.svg"
              width={15.61}
              height={16}
            />
          </div>
        </div>
      </div>
      {/* submit */}
      <button
        type="submit"
        className="bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  max-w-[327px] h-[48px] md:max-w-[680px] md:mt-[355px]"
      >
        <div className="flex justify-center relative">
          <span>ثبت تغییرات</span>
          <div className="absolute top-[8px]">
            {isLoading && (
              <ThreeDots
                height="30"
                width="30"
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
  );
};

export default MobileUserInfoDetails;
