import { useFormik } from "formik";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";
import { Captcha, GetUserInfo, Login } from "@/server/Service";
import { VscError } from "react-icons/vsc";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { FaBullseye, FaStarOfLife } from "react-icons/fa";
import Image from "next/image";
import { generateGUID } from "../../../../utils/GUIDGenerator";
import { useTranslation } from "react-i18next";
import TextDirectionWrapper from "@/components/TextDirectionWrapper";
const CustomFontComponent = styled.div`
  font-family: "iranyekanEnNumBold";
`;
const SignInForm = () => {
  const [cookies] = useCookies();
  const [isChecked, setIsChecked] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  const [randomValue, setRandomValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [randomGenerating, setRandomGeneraing] = useState(false);
  const { t, i18n } = useTranslation("common");
  const initialValues = {
    userName: cookies.userName || "",
    password: cookies.password || "",
    confirmCaptchaValue: "",
  };

  useEffect(() => {
    const guid = generateGUID();
    Cookies.set("sessionid_guid", guid);
    captchaGenerator();
    return () => {
      Cookies.remove("sessionid_guid");
    };
  }, []);

  const captchaGenerator = async () => {
    setRandomGeneraing(true);
    const { data } = await Captcha();
    setRandomGeneraing(false);
    setRandomValue(data);
  };

  const onSubmit = async ({
    userName,
    password,
    random,
    confirmCaptchaValue,
  }) => {
    if (isChecked) {
      Cookies.set("userName", userName);
      Cookies.set("password", password);
    }
    if (cookies.userName && cookies.password && !isChecked) {
      Cookies.remove("userName");
      Cookies.remove("password");
    }
    setIsLoading(true);
    const res = await Login({ userName, password, confirmCaptchaValue });
    if (res.access_token) {
      const token = res.access_token;
      Cookies.set("Token", token);
      const { data } = await GetUserInfo(userName);
      const {
        nationalCode,
        firstName,
        lastName,
        phoneNumber,
        email,
        account,
        isChangePassword,
        userServicePoint,
        ContractExpirationDate,
      } = data;
      const { balance, benefitAmount } = account;
      Cookies.set("nationalCode", nationalCode);
      Cookies.set("firstName", firstName);
      Cookies.set("lastName", lastName);
      Cookies.set("phoneNumber", phoneNumber);
      Cookies.set("email", email);
      Cookies.set("balance", balance);
      Cookies.set("benefitAmount", benefitAmount);
      Cookies.set("userServicePoint", userServicePoint);
      Cookies.set("ContractExpirationDate", ContractExpirationDate);
      setIsLoading(false);
      if (!isChangePassword) {
        router.push("/panel/userManual");
        toast.success(t("signIn.loginSuccess"), {
          duration: 4000,
          style: {
            backgroundColor: "#4CAF50",
            color: "#fff",
          },
          className: "",
          icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
        });
      } else {
        router.push("/user/changePassword/necessaryChangePassword");
      }
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
    validateOnMount: false,
    onSubmit,
  });
  const checkedHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <CustomFontComponent>
      <div className="overflow-x-clip">
        {/* logo & stepper Section */}
        <div className="flex flex-col items-center justify-center mb-[54px] md:mb-[14px] lg:mb-[20px] lg:mt-[120px]">
          {/* logo&PageTitle */}
          <div className="flex flex-col mt-[41px] md:mb-[10px] lg:mb-[16px]">
            {/* logo */}
            <div className="flex items-center justify-center">
              <Link href="/">
                <span>
                  <Image
                    src="/assets/images/NewHomePage/TabadolLogo_01.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-[50px] h-[50px] mb-[10.55px] md:w-[70px] md:h-[70px]"
                  />
                </span>
              </Link>
            </div>
            <h2 className="text-center text-primarycolor text-lg font-bold md:text-[18px] md:leading-[38.71px] md:font-medium lg:text-[18px] lg:leading-[43.01px] lg:font-medium ">
              {t("signIn.login")}
            </h2>
            {/* Question and loginLink */}
          </div>
          <TextDirectionWrapper>
            <div className="flex items-center justify-center gap-x-[50px] md:gap-x-[70px] lg:gap-x-[90px] w-[193px] h-[48px]  mb-[29px]  md:w-[226px] md:h-[48px]  lg:w-[200px] lg:h-[24px] lg:mb-4">
              <p className="w-[98px] h-[24px] text-neutralColor-2 leading-[24px] text-[12px] font-medium text-center md:w-[131px] md:h-[24px] md:text-[14px] md:font-medium md:leading-[24px] lg:w-[115px] lg:h-[24px]  lg:text-[14px] lg:leading-[24px] lg:font-medium whitespace-nowrap">
                {t("signIn.notRegistered")}
              </p>
              <div className="w-[75px] h-[48px] flex items-center justify-center">
                <Link href="/user/signUp">
                  <span className="text-primaryColor-1 w-[70px] h-[24px] text-[12px] leading-[24px] text-center font-medium  p-[10px] flex items-center cursor-pointer md:w-[67px] md:h-[24px] md:text-[14px] md:font-medium md:leading-[24px] md:whitespace-nowrap md:-mr-[20px] lg:w-[58px] lg:h-[24px] lg:text-[14px] lg:leading-[24px] lg:whitespace-nowrap lg:font-medium">
                    {t("signIn.signUp")}
                  </span>
                </Link>
              </div>
            </div>
          </TextDirectionWrapper>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center"
          autoComplete={`${cookies.userName ? "on" : "off"}`}
        >
          <div className=" flex flex-col gap-y-[20px] mb-[16.51px] ">
            <div className="flex flex-col mb-3">
              <FaStarOfLife
                className={`${
                  i18n.language == "en" ? "md:mr-[168px]" : " md:mr-[148px]"
                } w-[5px] fill-errorColor-1 flex mr-[120px] -mt-[5px] md:-mt-[10px] lg:mt-[2px] z-10`}
              />
              <label
                className={`${
                  i18n.language === "en"
                    ? "w-[155px]"
                    : "w-[100px] md:w-[135px]"
                } mr-5 h-[28px] whitespace-nowrap text-neutralColor-2 text-[12px] md:text-[16px] leading-[20.73px] md:leading-[27.64px] lg:leading-[27.64px] bg-naturalColor-2 absolute top-[260px] md:top-[250px] lg:top-[365px] pr-1 mx-4 font-medium`}
              >
                {t("signIn.username")}
              </label>
              <input
                {...formik.getFieldProps("userName")}
                className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
                name="userName"
                label="کد ملی"
                type="text"
              />
            </div>
            <div className="flex items-center justify-start">
              {showPass ? (
                <AiFillEyeInvisible
                  className=" w-6 h-6 lg:w-8 lg:h-8  absolute top-[380px]  md:top-[375px]  lg:top-[485px] mr-4 fill-primaryColor-1"
                  onClick={() => setShowPass(!showPass)}
                />
              ) : (
                <AiFillEye
                  className=" w-6 h-6 lg:w-8 lg:h-8  absolute top-[380px]  md:top-[375px] lg:top-[485px] mr-4 fill-primaryColor-1"
                  onClick={() => setShowPass(!showPass)}
                />
              )}

              <div className="flex flex-col">
                <FaStarOfLife
                  className={`${
                    i18n.language == "en" ? "mr-[90px]" : "md:mr-[77px] mr-[67px]"
                  } w-[5px] fill-errorColor-1 flex -mt-[2px]   md:-mt-[2px] lg:mt-[2px] z-10`}
                />
                <label
                  className={`${
                    i18n.language == "en" ? " md:w-[70px] " : " md:w-[60px] "
                  } w-[50px] mr-5 h-[28px] whitespace-nowrap  text-neutralColor-2 text-[12px] md:text-[16px] leading-[20.73px] md:leading-[27.64px] lg:leading-[27.64px]  bg-naturalColor-2 absolute top-[355px] md:top-[345px] lg:top-[460px] pr-1  mx-4  font-medium`}
                >
                  {t("signIn.password")}
                </label>
                <input
                  {...formik.getFieldProps("password")}
                  className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
                  name="password"
                  label="رمز عبور"
                  type={`${showPass ? "text" : "password"}`}
                  showPass={showPass}
                />
              </div>
            </div>
            {/* code section */}
            <div className="bg-primaryColor-5 w-[335px] py-3 h-[164.49px] flex flex-col items-start justify-center mt-[16px] md:w-[360px] md:h-[164.49px] lg:w-[396px] lg:h-[189px]">
              <div className="flex items-center justify-center w-full mt-3">
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
                      className="w-8 h-8 fill-primaryColor-1 mr-[13.13px] cursor-pointer"
                      onClick={captchaGenerator}
                    />
                  </>
                )}
              </div>
              <TextDirectionWrapper>
                <div className="flex flex-col items-start w-full mx-[16.73px] mr-[20px] md:mr-[25px] lg:mr-[17px]">
                  <p className="text-neutralColor-3 text-[12px] lg:text-[14px] font-normal leading-[20.73px]  md:mb-1">
                    {t("signIn.captchaInstruction")}
                  </p>
                  <input
                    maxLength={5}
                    formik={formik}
                    type="text"
                    name="confirmCaptchaValue"
                    {...formik.getFieldProps("confirmCaptchaValue")}
                    className="w-[250px] md:w-[267px] lg:w-[325px] pr-[50px] h-[48px] lg:h-[60px] rounded-[5px] tracking-[20px] text-[16px]  font-black outline-none border-none lg:text-[20px] lg:font-black lg:tracking-[30px]"
                  />
                </div>
              </TextDirectionWrapper>
            </div>
          </div>
          {/* RememberMe & ForgetPassword section */}
          <div className="flex w-[335px] h-[48px] md:w-[360px] md:h-[48px] lg:w-[388px] lg:h-[48px] items-center justify-between  mb-[70px] ">
            {/* RememberMe */}
            <TextDirectionWrapper>
              <div className="flex gap-x-[8px] items-center">
                <div
                  onClick={checkedHandler}
                  className={` cursor-pointer ${
                    !isChecked &&
                    "hover:border hover:border-neutralColor-3 hover:bg-neutralColor-4"
                  } w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] flex items-center justify-center  border border-neutralColor-4 rounded-[3px] ${
                    isChecked && "bg-successColor-2 border-none"
                  }`}
                >
                  {isChecked && (
                    <BsCheckLg className="w-8 h-8 fill-naturalColor-2" />
                  )}
                </div>
                <span
                  onClick={checkedHandler}
                  className="text-neutralColor-2 cursor-pointer  text-[10px] font-medium leading-[21.51px] md:text-[14px] md:leading-[30.11px]"
                >
                  {t("signIn.rememberMe")}
                </span>
              </div>
            </TextDirectionWrapper>
            {/* ForgetPassword */}
            <TextDirectionWrapper>
              <Link href="/user/resetPassword">
                <span className="text-[10px] text-primaryColor-1 leading-[21.51px] font-medium md:text-[14px] md:leading-[30.11px]">
                  {t("signIn.forgotPassword")}
                </span>
              </Link>
            </TextDirectionWrapper>
          </div>
          <button
            disabled={!formik.isValid || isLoading}
            type="submit"
            className={`bg-primaryColor-1  rounded-[5px] text-center  px-[16px] text-naturalColor-2 text-[14px] font-medium  w-[335px] md:w-[360px] h-[48px] lg:w-[396px] lg:text-[16px]  bottom-[30px] lg:-mt-[30px]  mt-[17.51px] ${
              !formik.values.confirmCaptchaValue && `opacity-30`
            } `}
          >
            <div className="flex  justify-center relative">
              <div className=" absolute w-[30px] md:w-[40px] top-[8px] md:top-[8px] lg:top-[9px]">
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
              <span> {t("signIn.loginButton")}</span>
            </div>
          </button>
        </form>
      </div>
    </CustomFontComponent>
  );
};

export default SignInForm;
