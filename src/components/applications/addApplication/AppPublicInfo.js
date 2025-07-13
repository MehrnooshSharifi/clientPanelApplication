import { MdRefresh } from "react-icons/md";
import { Checkbox, Tooltip } from "@mui/material";
import Link from "next/link";
import { BsQuestionCircleFill } from "react-icons/bs";
import styled from "styled-components";
const CustomFontComponent = styled.div`
  font-family: "iranyekanEnNumBold";
`;
const AppPublicInfo = ({
  captchaGenerator,
  formik,
  step,
  setStep,
  randomValue,
}) => {
  return (
    <CustomFontComponent>
      <form
        className="flex flex-col gap-y-[40px] "
        onSubmit={formik.handleSubmit}
      >
        <div className="grid grid-cols-12 gap-y-[40px] gap-x-[20px] lg:gap-x-[40px] mt-[36px]">
          <div className="col-span-12 md:col-span-6  relative h-[48px]">
            <label className="absolute px-[10px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-2 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
              نام برنامه
            </label>
            <span className="absolute text-errorColor-2 right-[60px] -top-[14px] md:-top-[18px] md:right-[67px] lg:right-[77px]">
              *
            </span>
            <input
              autoComplete="off"
              onBlur={formik.handleBlur}
              name="appName"
              onChange={formik.handleChange}
              value={formik.values.appName}
              className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-2 tracking-[0.42px] border  px-4 py-3  border-neutralColor-4 rounded-[5px] "
            />
            {formik.touched.appName && formik.errors.appName && (
              <div className="w-[202px] text-errorColor-2 text-[12px] pr-2 pt-1">
                {formik.errors.appName}
              </div>
            )}
          </div>
          <div className="col-span-12 md:col-span-6  relative h-[48px] ">
            <label className="absolute px-[10px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-2 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
              آدرس IP
            </label>
            <span className="absolute text-errorColor-2 right-[60px] -top-[14px] md:-top-[18px] md:right-[67px] lg:right-[77px]">
              *
            </span>
            <div className="flex items-center ">
              <Tooltip
                placement="left"
                title="آدرس IP های سرورهای شما که سرویس های تبادل را فراخوانی می‌کنید. * به معنی تمام IP‌ ها می باشد."
                className="absolute cursor-pointer"
              >
                <div className="flex items-center">
                  <BsQuestionCircleFill className=" hidden lg:block absolute -right-[20px] fill-neutralColor-3" />
                </div>
              </Tooltip>
              <input
                autoComplete="off"
                onBlur={formik.handleBlur}
                name="appIp"
                onChange={formik.handleChange}
                value={formik.values.appIp}
                className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-2 tracking-[0.42px] border  px-4 py-3  border-neutralColor-4 rounded-[5px] "
              />
            </div>
            {formik.touched.appIp && formik.errors.appIp && (
              <div className="w-[202px] text-errorColor-2 text-[12px] pr-2 pt-1">
                {formik.errors.appIp}
              </div>
            )}
          </div>
          <div className="col-span-12 md:col-span-6  relative h-[48px]">
            <label className="absolute px-[5px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-2 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
              نام شرکت
            </label>
            <input
              autoComplete="off"
              name="appCompany"
              onChange={formik.handleChange}
              value={formik.values.appCompany}
              className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-2 tracking-[0.42px] border  px-4 py-3  border-neutralColor-4 rounded-[5px] "
            />
          </div>
          <div className="col-span-12 md:col-span-6  relative h-[48px]">
            <label className="absolute px-[5px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-2 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
              آدرس برگشت داده
            </label>
            <div className="flex items-center ">
              <Tooltip
                placement="left"
                title="کاربر پس از اعطای دسترسی به این آدرس هدایت خواهد شد."
                className="absolute cursor-pointer"
              >
                <div className="flex items-center">
                  <BsQuestionCircleFill className=" hidden lg:block absolute -right-[20px] fill-neutralColor-3" />
                </div>
              </Tooltip>
              <input
                autoComplete="off"
                name="appRetAddr"
                value={formik.values.appRetAddr}
                onChange={formik.handleChange}
                className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-2 tracking-[0.42px] border  px-4 py-3  border-neutralColor-4 rounded-[5px] "
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6  relative h-[48px]">
            <label className="absolute px-[5px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-2 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
              آدرس وب سایت
            </label>
            <input
              autoComplete="off"
              name="appWeb"
              onChange={formik.handleChange}
              value={formik.values.appWeb}
              className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-2 tracking-[0.42px] border  px-4 py-3  border-neutralColor-4 rounded-[5px] "
            />
          </div>
          <div className="col-span-12 md:col-span-6  relative h-[48px]">
            <label className="absolute px-[5px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-2 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
              رمز برنامه
            </label>
            <span className="absolute text-errorColor-2 right-[74px] -top-[14px] md:-top-[18px] md:right-[87px] lg:right-[80px]">
              *
            </span>
            <div className="flex items-center ">
              <Tooltip
                placement="left"
                title="امکان بازیابی رمز عبور وجود ندارد . بنابراین نسبت به حفظ و نگهداری آن کوشا باشید"
                className="absolute cursor-pointer"
              >
                <div className="flex items-center">
                  <BsQuestionCircleFill className=" hidden lg:block absolute -right-[20px] fill-neutralColor-3" />
                </div>
              </Tooltip>
              <input
                maxlength="4"
                autoComplete="off"
                name="passwordApplication"
                value={formik.values.passwordApplication}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-2 tracking-[0.42px] border  px-4 py-3  border-neutralColor-4 rounded-[5px] "
              />
            </div>
            {formik.touched.passwordApplication &&
              formik.errors.passwordApplication && (
                <div className="w-[202px] text-errorColor-2 text-[12px] pr-2 pt-1">
                  {formik.errors.passwordApplication}
                </div>
              )}
          </div>
          {/* reCaptcha */}

          {/* Conditions */}
          <div className="flex items-center text-[12px] md:text-[16px] text-neutralColor-2 font-medium -mt-[20px] -mr-[12px]">
            <Checkbox
              color="success"
              value={formik.values.condition}
              name="condition"
              onChange={formik.handleChange}
            />
            <div className="flex gap-x-[5px]">
              <span className="whitespace-nowrap">من با تمام </span>
              <Link
                target="_blank"
                href="/panel/applications/addNewApplication/appTermsAndConditions"
                className="whitespace-nowrap text-primaryColor-1 border-b border-primaryColor-1"
              >
                قوانین و مقررات
              </Link>
              <span>موافقم.</span>
            </div>
          </div>
        </div>
        <button
          disabled={
            (formik.values.passwordApplication.length < 4) |
            !formik.values.appName |
            !formik.values.appIp |
            !formik.values.condition |
            !formik.values.passwordApplication
          }
          onClick={() => setStep(3)}
          type="button"
          className={`bg-primaryColor-1 text-naturalColor-2  h-[48px] flex items-center justify-center rounded-[5px] text-[14px] -mt-[20px] font-medium md:text-[16px] md:font-bold lg:w-[160px] ${
            !formik.values.appName ||
            !formik.values.appIp ||
            !formik.values.condition ||
            formik.values.passwordApplication < 4
              ? "opacity-30"
              : "opacity-100"
          }`}
        >
          <div className="flex justify-center relative">
            <span>تایید و ادامه</span>
          </div>
        </button>
      </form>
    </CustomFontComponent>
  );
};

export default AppPublicInfo;
