import { MdRefresh } from "react-icons/md";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import { generateGUID } from "../../../../../utils/GUIDGenerator";
import Cookies from "js-cookie";
const CustomFontComponent = styled.div`
  font-family: "iranyekanEnNumBold";
`;
const TabletSignUpForm = ({
  formik,
  isLoading,
  captchaGenerator,
  randomValue,
  randomGenerating,
}) => {
  return (
    <CustomFontComponent>
      <form
        onSubmit={formik.handleSubmit}
        className=" hidden md:flex flex-col items-center"
        autoComplete="off"
      >
        <div
          className="flex gap-x-[20px] items-center -mt-[20px] md:mb-[50px] lg:mb-[10px]
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
          <label for="genuine" className="text-[14px]">
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
          <label for="legal" className="text-[14px]">
            حقوقی
          </label>
          <br />
        </div>
        <div className=" flex flex-col gap-y-[30px] md:gap-y-[28px] lg:gap-y-[20px]">
          <div
            className={`flex flex-col ${
              formik.values.userTypeId == "1" ? "opacity-0" : " opacity-100"
            }`}
          >
            <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[65px] md:mr-[50px] -mt-[5px] md:-mt-[10px] lg:mt-[2px] z-10" />
            <label className="w-[50px] md:w-[40px]  mr-5 h-[28px] whitespace-nowrap  text-neutralColor-2 text-[12px] md:text-[16px] leading-[20.73px] md:leading-[27.64px] lg:leading-[27.64px]  bg-naturalColor-2 absolute  md:top-[295px] lg:top-[250px] pr-1  mx-4  font-medium">
              نام
            </label>
            <input
              // readOnly={formik.values.userTypeId == "1"}
              {...formik.getFieldProps("firstName")}
              className={`${
                formik.values.userTypeId == "1"
                  ? "bg-neutralColor-5 border-neutralColor-3"
                  : ""
              } focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2`}
              name="firstName"
              type="text"
            />
            <div
              className={`absolute md:mt-[55px]  lg:mt-[70px]  md:text-[10px] lg:text-[12px] `}
            >
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
          <div className="flex flex-col">
            <FaStarOfLife
              className={`w-[5px] fill-errorColor-1 flex  ${
                formik.values.userTypeId == "0"
                  ? "md:mr-[100px]  md:-mt-[10px] lg:mt-[2px]"
                  : "md:mr-[80px] lg:mr-[85px]  md:-mt-[10px] lg:mt-[2px]"
              } z-10`}
            />
            <label
              className={`${
                formik.values.userTypeId == "0"
                  ? "w-[100px] h-[15px]"
                  : "w-[70px] h-[15px]"
              } text-neutralColor-2   text-[14px] lg:text-[14px] px-2  whitespace-nowrap leading-[27.64px] bg-naturalColor-2 flex items-center absolute lg:top-[345px] mx-4  font-medium`}
            >
              {formik.values.userTypeId == "0" ? "نام خانوادگی" : "نام شرکت"}
            </label>
            <input
              {...formik.getFieldProps("lastName")}
              className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
              name="lastName"
              type="text"
            />
            <div
              className={`absolute md:mt-[55px]  lg:mt-[68px] lg:text-[12px] text-[10px]`}
            >
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
          <div className="flex flex-col">
            <FaStarOfLife
              className={`w-[5px] fill-errorColor-1 flex  ${
                formik.values.userTypeId == "0"
                  ? "md:mr-[65px]  md:-mt-[10px] lg:mt-[2px]"
                  : "md:mr-[95px] lg:mr-[90px]   md:-mt-[10px] lg:mt-[2px]"
              } z-10`}
            />
            <label
              className={`${
                formik.values.userTypeId == "0"
                  ? "w-[56px]  h-[15px]"
                  : "w-[80px]  h-[15px]"
              }  text-neutralColor-2 flex items-center  text-[14px] lg:text-[14px] px-2  whitespace-nowrap leading-[27.64px]  bg-naturalColor-2 absolute md:top-[460px] lg:top-[430px] mx-4  font-medium`}
            >
              {formik.values.userTypeId == "0" ? "کدملی" : "شناسه ملی"}
            </label>
            <input
              {...formik.getFieldProps("id")}
              className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
              name="id"
              type="text"
            />
            <div
              className={`absolute md:mt-[55px]  lg:mt-[68px] lg:text-[12px] text-[10px]`}
            >
              {formik.touched.id && formik.errors.id && (
                <div className="flex gap-x-2 items-center ">
                  <Image
                    alt="notice"
                    width={10}
                    height={10}
                    src="/assets/images/NewHomePage/notice.svg"
                    className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                  />
                  <span className="text-red-400">{formik.errors.id}</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <FaStarOfLife className="w-[5px] fill-errorColor-1 flex  md:mr-[130px]  md:-mt-[10px] lg:mt-[2px] z-10" />
            <label className="w-[120px]  h-[15px]  text-neutralColor-2 flex items-center  text-[14px] lg:text-[14px] px-2  whitespace-nowrap leading-[27.64px]  bg-naturalColor-2 absolute md:top-[545px] lg:top-[520px] mx-4  font-medium">
              شماره تلفن همراه
            </label>
            <input
              {...formik.getFieldProps("phoneNumber")}
              className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
              name="phoneNumber"
              type="text"
            />
            <div
              className={`absolute md:mt-[55px]  lg:mt-[68px] lg:text-[12px] text-[10px]`}
            >
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
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
          <div className="flex flex-col">
            <FaStarOfLife className="w-[5px] fill-errorColor-1 flex  md:mr-[100px]  md:-mt-[10px] lg:mt-[2px] z-10" />
            <label className="w-[90px]  h-[15px]  text-neutralColor-2 flex items-center  text-[14px] lg:text-[14px] px-2  whitespace-nowrap leading-[27.64px]  bg-naturalColor-2 absolute md:top-[625px] lg:top-[600px] mx-4  font-medium">
              آدرس ایمیل
            </label>
            <input
              {...formik.getFieldProps("email")}
              className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
              name="email"
              type="text"
            />
            <div
              className={`absolute md:mt-[55px]  lg:mt-[68px] lg:text-[12px] text-[10px]`}
            >
              {formik.touched.email && formik.errors.email && (
                <div className="flex gap-x-2 items-center ">
                  <Image
                    alt="notice"
                    width={10}
                    height={10}
                    src="/assets/images/NewHomePage/notice.svg"
                    className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                  />
                  <span className="text-red-400">{formik.errors.email}</span>
                </div>
              )}
            </div>
          </div>
          {/* code section */}
          <div className="bg-primaryColor-5 flex flex-col items-start justify-center mt-[20px] md:-mt-2 lg:mt-[5px] md:w-[360px] md:h-[170px] lg:w-[396px] lg:h-[180px]">
            <div className="flex items-center justify-center w-full mt-2">
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
                  <Image
                    src={`data:image/png;base64,${randomValue}`}
                    alt="Captcha"
                    {...formik.getFieldProps("random")}
                    name="random"
                    width={120}
                    height={120}
                  />
                  <MdRefresh
                    className="w-10 h-10 fill-primaryColor-1 mr-[13.13px] cursor-pointer"
                    onClick={captchaGenerator}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col items-start w-full mx-[16.73px] mt-1 mr-[20px] lg:mr-[20px]  ">
              <p className="text-neutralColor-3 text-[12px] lg:text-[16px] font-normal leading-[20.73px] -mb-3 md:mb-1">
                کد بالا را وارد کنید
              </p>
              <input
                maxLength={5}
                className=" w-[250px] md:w-[267px] pr-[45px] lg:w-[300px] md:h-[45px] rounded-[5px] tracking-[20px] text-[16px]  font-black  border-white lg:text-[20px] lg:font-black lg:text-xl lg:tracking-[25px]"
                formik={formik}
                {...formik.getFieldProps("confirmCaptchaValue")}
                type="text"
                name="confirmCaptchaValue"
              />
            </div>
          </div>
        </div>
        <button
          disabled={!formik.isValid || isLoading}
          type="submit"
          className={`bg-primaryColor-1  rounded-[5px] text-center  px-[16px] text-naturalColor-2 text-[14px] font-medium  w-[360px] h-[48px] lg:w-[396px] lg:text-[16px]  bottom-[30px] lg:mb-2  mt-[17.51px] ${
            !formik.values.confirmCaptchaValue && `opacity-30`
          }`}
        >
          <div className="flex  justify-center relative">
            <div className=" absolute w-[30px]   md:w-[40px]  md:top-[8px] lg:top-[9px]top-[8px]">
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
      </form>
    </CustomFontComponent>
  );
};

export default TabletSignUpForm;
