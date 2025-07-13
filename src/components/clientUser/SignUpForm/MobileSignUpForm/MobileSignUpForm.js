import { MdRefresh } from "react-icons/md";
import { BiChevronLeft } from "react-icons/bi";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa";
import Image from "next/image";
import { generateGUID } from "../../../../../utils/GUIDGenerator";
import Cookies from "js-cookie";
const CustomFontComponent = styled.div`
  font-family: "iranyekanEnNumBold";
`;
const MobileSignUpForm = ({
  formik,
  step,
  captchaGenerator,
  setStep,
  isLoading,
  randomValue,
  randomGenerating,
}) => {
  const [isConfirm, setIsConfirm] = useState(true);
  return (
    <CustomFontComponent>
      <form
        onSubmit={formik.handleSubmit}
        className=" md:hidden flex flex-col items-center"
        autoComplete="off"
      >
        {step == 0 && (
          <div
            className="flex gap-x-[20px] items-center -mt-[20px]
        "
          >
            <input
              defaultChecked
              className=""
              type="radio"
              id="genuine"
              name="userTypeId"
              value="0"
              onChange={formik.handleChange}
            />
            <label for="genuine" className="text-[12px]">
              حقیقی
            </label>
            <br />
            <input
              type="radio"
              id="legal"
              name="userTypeId"
              value="1"
              onChange={formik.handleChange}
            />
            <label for="legal" className="text-[12px]">
              حقوقی
            </label>
            <br />
          </div>
        )}
        {/* step Value Check */}
        <div className="mt-[50px]">
          {step === 0 ? (
            // step1
            <div className="flex flex-col gap-y-[39.86px]">
              <div
                className={`flex flex-col ${
                  formik.values.userTypeId == "1" ? "opacity-0" : " opacity-100"
                }`}
              >
                <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[45px] -mt-[5px]  z-10" />
                <label className="text-[12px] text-neutralColor-2  font-medium px-[10px] py-[16px] bg-naturalColor-2  w-[35px] h-[28px] absolute top-[385px] mx-4 whitespace-nowrap flex items-center ">
                  نام
                </label>
                <input
                  readOnly={formik.values.userTypeId == "1"}
                  {...formik.getFieldProps("firstName")}
                  className={`${
                    formik.values.userTypeId == "1"
                      ? "bg-neutralColor-5 border-neutralColor-3"
                      : ""
                  }pr-[50px] w-[333px] h-[48px] text-[12px] md:text-[14px] lg:text-[16px]  md:w-[360px] lg:w-[396px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2 ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "focus:border focus:border-errorColor-2"
                      : "focus:border-2 focus:border-primaryColor-1"
                  }`}
                  name="firstName"
                  type="text"
                />
                <div className={`absolute mt-[60px] text-[10px]`}>
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="flex gap-x-2 items-center ">
                      {formik.values.userTypeId == "0" && (
                        <Image
                          alt="notice"
                          width={10}
                          height={10}
                          src="/assets/images/NewHomePage/notice.svg"
                          className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                        />
                      )}
                      <span className="text-red-400">
                        {formik.values.userTypeId == "0"
                          ? `${formik.errors.firstName}`
                          : ""}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col ">
                <FaStarOfLife
                  className={`${
                    formik.values.userTypeId == "0"
                      ? "mr-[90px] -mt-[5px]"
                      : "mr-[80px] -mt-[5px]"
                  } w-[5px] fill-errorColor-1 z-10`}
                />
                <label
                  className={`${
                    formik.values.userTypeId == "0"
                      ? "w-[80px] h-[15px]"
                      : "w-[70px] h-[15px]"
                  } text-[12px] text-neutralColor-2  font-medium px-[10px] py-[16px] bg-naturalColor-2  absolute top-[485px] mx-4 whitespace-nowrap flex items-center`}
                >
                  {formik.values.userTypeId == "0"
                    ? "نام خانوادگی"
                    : "نام شرکت"}
                </label>
                <input
                  {...formik.getFieldProps("lastName")}
                  className={`pr-[50px] w-[333px] h-[48px] text-[12px] md:text-[14px] lg:text-[16px]  md:w-[360px] lg:w-[396px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2 ${
                    formik.touched.lastName && formik.errors.lastName
                      ? "focus:border focus:border-errorColor-2"
                      : "focus:border-2 focus:border-primaryColor-1"
                  }`}
                  name="lastName"
                  type="text"
                />
                <div className={`absolute mt-[60px] text-[10px]`}>
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="flex gap-x-2 items-center ">
                      <Image
                        alt="notice"
                        width={10}
                        height={10}
                        src="/assets/images/NewHomePage/notice.svg"
                        className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                      />
                      <span className="text-red-400">
                        {formik.values.userTypeId == "0"
                          ? `${formik.errors.lastName}`
                          : `نام شرکت را وارد کنید`}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col ">
                <FaStarOfLife
                  className={` ${
                    formik.values.userTypeId == "0"
                      ? "mr-[62px] -mt-[5px]"
                      : "mr-[85px] -mt-[5px]"
                  } w-[5px] fill-errorColor-1 flex   z-10`}
                />
                <label
                  className={`${
                    formik.values.userTypeId == "0"
                      ? "w-[50px] h-[28px] "
                      : "w-[80px]  h-[15px]"
                  } text-[12px] text-neutralColor-2  font-medium px-[10px] py-[16px] bg-naturalColor-2  absolute top-[580px] mx-4 whitespace-nowrap flex items-center`}
                >
                  {formik.values.userTypeId == "0" ? "کدملی" : "شناسه ملی"}
                </label>
                <input
                  {...formik.getFieldProps("id")}
                  className={`pr-[50px] w-[333px] h-[48px] text-[12px] md:text-[14px] lg:text-[16px]  md:w-[360px] lg:w-[396px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2 ${
                    formik.touched.id && formik.errors.id
                      ? "focus:border focus:border-errorColor-2"
                      : "focus:border-2 focus:border-primaryColor-1"
                  }`}
                  name="id"
                  type="text"
                />
                <div className={`absolute mt-[60px] text-[10px]`}>
                  {formik.touched.id && formik.errors.id && (
                    <div className="flex gap-x-2 items-center ">
                      <Image
                        alt="notice"
                        width={10}
                        height={10}
                        src="/assets/images/NewHomePage/notice.svg"
                        className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                      />
                      <span className="text-red-400">
                        {formik.values.userTypeId == "0"
                          ? `${formik.errors.id}`
                          : `شناسه ملی را وارد کنید`}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <button
                disabled={
                  (formik.values.userTypeId == "0" &&
                    !formik.values.firstName) |
                  !formik.values.lastName |
                  !formik.values.id
                }
                type="buttton"
                onClick={() => setStep(1)}
                className={`bg-primaryColor-1  cursor-pointer  rounded-[5px] flex items-center justify-between px-[16px] text-naturalColor-2 text-[14px] font-medium ab w-[335px] h-[48px] bottom-[30px] align-middle mt-[50.51px] ${
                  (formik.values.userTypeId == "0" &&
                    !formik.values.firstName) |
                    !formik.values.lastName |
                    !formik.values.id &&
                  "disabled  opacity-30 cursor-not-allowed"
                }`}
              >
                <span>مرحله بعدی</span>
                <BiChevronLeft className="w-12 h-12" />
              </button>
            </div>
          ) : (
            // step2
            <div className="flex  flex-col items-center justify-center ">
              {/* contactInfo section */}
              <div className="flex flex-col gap-y-[39.86px]">
                <div className="flex flex-col ">
                  <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[120px] -mt-[5px]  z-10" />
                  <label className="text-[12px] text-neutralColor-2  font-medium px-[10px] py-[16px] bg-naturalColor-2  w-[110px] h-[28px] absolute top-[380px] mx-4 whitespace-nowrap flex items-center ">
                    شماره تلفن همراه
                  </label>
                  <input
                    {...formik.getFieldProps("phoneNumber")}
                    className={`pr-[50px] w-[333px] h-[48px] text-[12px] md:text-[14px] lg:text-[16px]  md:w-[360px] lg:w-[396px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2 ${
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                        ? "focus:border focus:border-errorColor-2"
                        : "focus:border-2 focus:border-primaryColor-1"
                    }`}
                    name="phoneNumber"
                    type="text"
                  />
                  <div className={`absolute mt-[60px] text-[10px]`}>
                    {formik.touched.phoneNumber &&
                      formik.errors.phoneNumber && (
                        <div className="flex gap-x-2 items-center ">
                          <Image
                            alt="notice"
                            width={10}
                            height={10}
                            src="/assets/images/NewHomePage/notice.svg"
                            className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                          />
                          <span className="text-red-400">
                            {formik.errors.phoneNumber}
                          </span>
                        </div>
                      )}
                  </div>
                </div>
                <div className="flex flex-col gap-y-[39.86px]">
                  <div className="flex flex-col ">
                    <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[90px] -mt-[5px]  z-10" />
                    <label className="text-[12px] text-neutralColor-2  font-medium px-[10px] py-[16px] bg-naturalColor-2  w-[80px] h-[28px] absolute top-[480px] mx-4 whitespace-nowrap flex items-center ">
                      آدرس ایمیل
                    </label>
                    <input
                      {...formik.getFieldProps("email")}
                      className={`pr-[50px] w-[333px] h-[48px] text-[12px] md:text-[14px] lg:text-[16px]  md:w-[360px] lg:w-[396px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2 ${
                        formik.touched.email && formik.errors.email
                          ? "focus:border focus:border-errorColor-2"
                          : "focus:border-2 focus:border-primaryColor-1"
                      }`}
                      name="email"
                      type="text"
                    />
                    <div className={`absolute mt-[60px] text-[10px]`}>
                      {formik.touched.email && formik.errors.email && (
                        <div className="flex gap-x-2 items-center ">
                          <Image
                            alt="notice"
                            width={10}
                            height={10}
                            src="/assets/images/NewHomePage/notice.svg"
                            className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                          />
                          <span className="text-red-400">
                            {formik.errors.email}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* code section */}
              <div className="bg-primaryColor-5 w-[335px] h-[164.49px] flex flex-col items-start mt-[16px] pt-[30px] ">
                <div className="flex items-center justify-center w-full  ">
                  {randomGenerating ? (
                    <div className="w-[50px] h-[50px]">
                      <ThreeDots
                        height="40"
                        width="40"
                        radius="9"
                        color="#0050E5"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                      />
                    </div>
                  ) : (
                    <>
                      {" "}
                      <img
                        src={`data:image/png;base64,${randomValue}`}
                        alt="Captcha"
                        {...formik.getFieldProps("random")}
                        name="random"
                      />
                      <MdRefresh
                        className="w-10 h-10 fill-primaryColor-1 mr-[13.13px] cursor-pointer"
                        onClick={captchaGenerator}
                      />
                    </>
                  )}
                </div>
                <div className="flex flex-col items-start w-full mx-[16.73px] mt-[1px] mr-[30px] ">
                  <p className="text-neutralColor-3 text-[12px] font-normal leading-[20.73px] mt-[5px]">
                    کد بالا را وارد کنید
                  </p>
                  <input
                    maxLength={5}
                    isConfirm={isConfirm}
                    onCopy={(e) => e.preventDefault()}
                    onClick={(e) => e.preventDefault()}
                    step={step}
                    className="w-[250px] h-[45px] pr-[45px] tracking-[20px] text-[16px]  font-black  border-white rounded-[5px] -mr-[15px] "
                    name="confirmCaptchaValue"
                    type="text"
                    formik={formik}
                    {...formik.getFieldProps("confirmCaptchaValue")}
                  />
                </div>
              </div>
              <button
                disabled={!formik.isValid || isLoading}
                type="submit"
                className={`bg-primaryColor-1 cursor-pointer  rounded-[5px]  px-[16px] text-naturalColor-2 text-[14px] font-medium ab w-[335px] h-[48px]  bottom-[30px] align-middle mt-[30px] ${
                  !formik.values.confirmCaptchaValue && `opacity-30`
                }`}
              >
                <div className="flex  justify-center relative">
                  <div className=" absolute w-[30px]  top-[8px]">
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
                  <span>ثبت نام</span>
                </div>
              </button>
            </div>
          )}
        </div>
      </form>
    </CustomFontComponent>
  );
};

export default MobileSignUpForm;
