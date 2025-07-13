import { useFormik } from "formik";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useCookies } from "react-cookie";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { ChangePassword } from "@/server/Service";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
const NecessaryChangePassword = () => {
  const [cookies, setCookie] = useCookies();
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmNewPass, setShowConfirmNewPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const nationalCode = cookies.nationalCode;
  const router = useRouter();
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };
  const onSubmit = async (values, { resetForm }) => {
    resetForm();
    setIsLoading(true);
    const res = await ChangePassword(values, nationalCode);
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
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });
  return (
    <div className="mt-[100px]">
      <div className="flex flex-col items-center justify-center mb-[54px] md:mb-[14px] lg:mb-[20px] lg:mt-[120px]">
        {/* logo&PageTitle */}
        <div className="flex flex-col mt-[41px] md:mb-[10px] lg:mb-[16px]">
          {/* logo */}
          <div className="flex items-center justify-center">
            <Link href="/">
              <span>
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/ramzNegarLogo.svg"
                  alt="logo"
                  className="w-[30.14px] h-[50.14px] mb-[10.55px] md:w-[41.82px] md:h-[70px] lg:w-[50px] lg:h-[70px]"
                />
              </span>
            </Link>
          </div>
          <h2 className="text-center text-primarycolor text-lg font-bold md:text-[18px] md:leading-[38.71px] md:font-medium lg:text-[18px] lg:leading-[43.01px] lg:font-medium ">
            تغییر رمز عبور
          </h2>
          {/* Question and loginLink */}
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center mt-[30px] "
      >
        <div className=" flex flex-col gap-y-[50px]">
          {/* NowPassword */}
          <div className="flex items-center justify-start">
            {showOldPass ? (
              <AiFillEyeInvisible
                className=" w-[24px] h-[24px]  absolute top-[297px] md:top-[508px]   mr-4 fill-primaryColor-1"
                onClick={() => setShowOldPass(!showOldPass)}
              />
            ) : (
              <AiFillEye
                className=" w-[24px] h-[24px]  absolute top-[297px] md:top-[508px]  mr-4 fill-primaryColor-1"
                onClick={() => setShowOldPass(!showOldPass)}
              />
            )}
            <div className="flex flex-col">
              <label className="lg:w-[100px]  mr-5 h-[28px] whitespace-nowrap  text-neutralColor-2 text-[12px] md:text-[16px] leading-[20.73px] md:leading-[27.64px] lg:leading-[27.64px]  bg-naturalColor-2 absolute top-[273px] md:top-[480px] lg:top-[475px] pr-1  mx-4  font-medium">
                رمز عبور فعلی
              </label>
              <input
                formik={formik}
                {...formik.getFieldProps("oldPassword")}
                className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
                name="oldPassword"
                type={`${showOldPass ? "text" : "password"}`}
                showOldPass={showOldPass}
              />
            </div>
          </div>
          {/* NewPassword */}
          <div className="flex items-center justify-start">
            {showNewPass ? (
              <AiFillEyeInvisible
                className=" w-[24px] h-[24px]  absolute top-[395px] md:top-[605px]  mr-4 fill-primaryColor-1"
                onClick={() => setShowNewPass(!showNewPass)}
              />
            ) : (
              <AiFillEye
                className=" w-[24px] h-[24px]  absolute top-[395px] md:top-[605px] mr-4 fill-primaryColor-1"
                onClick={() => setShowNewPass(!showNewPass)}
              />
            )}
            <div className="flex flex-col">
              <label className="lg:w-[100px]  mr-5 h-[28px] whitespace-nowrap  text-neutralColor-2 text-[12px] md:text-[16px] leading-[20.73px] md:leading-[27.64px] lg:leading-[27.64px]  bg-naturalColor-2 absolute top-[370px]  md:top-[576px] lg:top-[575px] pr-1  mx-4  font-medium">
                رمز عبور جدید
              </label>
              <input
                formik={formik}
                {...formik.getFieldProps("newPassword")}
                className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
                name="newPassword"
                type={`${showNewPass ? "text" : "password"}`}
                showNewPass={showNewPass}
              />
            </div>
          </div>
          {/* ConfirmNewPassWord */}
          <div className="flex items-center justify-start">
            {showConfirmNewPass ? (
              <AiFillEyeInvisible
                className=" w-[24px] h-[24px]  top-[495px] md:top-[705px] absolute  mr-4 fill-primaryColor-1"
                onClick={() => setShowConfirmNewPass(!showConfirmNewPass)}
              />
            ) : (
              <AiFillEye
                className=" w-[24px] h-[24px]  top-[495px] md:top-[705px] absolute mr-4 fill-primaryColor-1"
                onClick={() => setShowConfirmNewPass(!showConfirmNewPass)}
              />
            )}
            <div className="flex flex-col">
              <label className="lg:w-[130px]  mr-5 h-[28px] whitespace-nowrap  text-neutralColor-2 text-[12px] md:text-[16px] leading-[20.73px] md:leading-[27.64px] lg:leading-[27.64px]  bg-naturalColor-2 absolute top-[470px] md:top-[673px] lg:top-[672px] pr-1  mx-4  font-medium">
                تکرار رمز عبور جدید
              </label>
              <input
                formik={formik}
                {...formik.getFieldProps("confirmNewPassword")}
                className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
                name="confirmNewPassword"
                type={`${showConfirmNewPass ? "text" : "password"}`}
                showConfirmNewPass={showConfirmNewPass}
              />
            </div>
          </div>
          <button
            disabled={
              !formik.values.oldPassword |
              !formik.values.newPassword |
              (formik.values.newPassword !== formik.values.confirmNewPassword)
            }
            type="submit"
            className={`bg-primaryColor-1  rounded-[5px] text-center  px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[396pxpx]  h-[48px] -mt-[40px] ${
              !formik.values.oldPassword |
                !formik.values.newPassword |
                (formik.values.newPassword !==
                  formik.values.confirmNewPassword) &&
              "cursor-not-allowed disabled opacity-30"
            }`}
          >
            <div className="flex justify-center relative">
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
              <span> ثبت رمز عبور جدید</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NecessaryChangePassword;
