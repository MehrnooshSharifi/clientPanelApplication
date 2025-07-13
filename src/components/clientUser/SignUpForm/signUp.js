import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useEffect, useState } from "react";
import { randomId } from "../../../../utils/Random";
import { useRouter } from "next/router";
import { BiCheck } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import MobileSignUpForm from "./MobileSignUpForm/MobileSignUpForm";
import TabletSignUpForm from "./TabletSignUpForm/TabletSignUpForm";
import { Captcha, CreateUser } from "@/server/Service";
import Image from "next/image";
import { generateGUID } from "../../../../utils/GUIDGenerator";
import Cookies from "js-cookie";
import { VscError } from "react-icons/vsc";
const initialValues = {
  firstName: "",
  lastName: "",
  id: "",
  phoneNumber: "",
  email: "",
  confirmCaptchaValue: "",
  userTypeId: "0",
};

const SignUpForm = () => {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [randomValue, setRandomValue] = useState();
  const [randomGenerating, setRandomGeneraing] = useState(false);
  const router = useRouter();
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

  const onSubmit = async (user, { resetForm }) => {
    setIsLoading(true);
    const res = await CreateUser(user);
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
      toast.success("رمز عبور از طریق پیامک ارسال گردید", {
        duration: 2000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      setIsLoading(false);
      router.push("/user/signIn");
      resetForm({ user: "" });
    } else if (!res.isSuccess) {
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
    <div className="overflow-x-clip lg:mt-[70px] ">
      {/* logo & stepper Section */}
      <div className="flex flex-col items-center justify-center mb-[54px] md:mb-[14px] lg:mb-[20px]">
        {/* logo&PageTitle */}
        <div className="flex flex-col mt-[41px] lg:-mt-[20px] md:mb-[10px] lg:mb-0">
          {/* logo */}
          <div className="flex items-center justify-center">
            <Link href="/">
              <span>
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/NewHomePage/TabadolLogo_01.png"
                  alt="logo"
                  className="w-[50px] h-[50px] mb-[10.55px] md:w-[70px] md:h-[70px] "
                />
              </span>
            </Link>
          </div>
          <h2 className="text-center text-primarycolor text-lg md:mt-1 lg:-mt-4 font-bold md:text-[18px] md:leading-[38.71px] md:font-medium lg:text-[16px] lg:leading-[43.01px] lg:font-medium ">
            ثبت نام
          </h2>
        </div>
        {/* Question and loginLink */}
        <div className="flex items-center justify-center gap-[10px] w-[193px] h-[48px]  mb-[29px] md:-mt-4 lg:-mt-2 lg:mb-[40px]  md:w-[226px] md:h-[48px]  lg:w-[200px] lg:h-[24px] ">
          <p className="w-[98px] h-[24px] text-neutralColor-2 leading-[24px] text-[12px] font-medium text-center md:w-[131px] md:h-[24px] md:text-[14px] md:font-medium md:leading-[24px] lg:w-[115px] lg:h-[24px]  lg:text-[14px] lg:leading-[24px] lg:font-medium">
            قبلاً ثبت نام کردید؟
          </p>
          <div className="w-[75px] h-[48px] flex items-center justify-center">
            <Link href="/user/signIn">
              <span className="text-primaryColor-1 w-[70px] h-[24px] text-[12px] leading-[24px] text-center font-medium  p-[10px] flex items-center cursor-pointer md:w-[67px] md:h-[24px] md:text-[14px] md:font-medium md:leading-[24px] md:whitespace-nowrap md:-mr-10 lg:w-[58px] lg:h-[24px] lg:text-[14px] lg:leading-[24px] lg:whitespace-nowrap lg:font-medium">
                وارد شوید
              </span>
            </Link>
          </div>
        </div>
        {/* Stepper */}
        <div className="w-[258px] h-[55px] mx-[55px] mb-[20px] md:hidden">
          {/* stepperCircles */}
          <div className="flex mb-[4px] ">
            {/* circle1 */}
            <div
              className={`flex bg-naturalColor-2 items-center justify-center w-[30px] h-[30px] border border-successColor-2 text-successColor-2 text-[12px] rounded-full ${
                step === 1 && "bg-successColor-2"
              }`}
            >
              {step === 0 ? (
                <span className={`text-successColor-2 `}>1</span>
              ) : (
                <BiCheck className="fill-naturalColor-2 w-10 h-10" />
              )}
            </div>
            <hr
              className={`w-[192px] mt-5 ${step === 1 && "bg-successColor-2"}`}
            />
            {/* circle2 */}
            {step === 0 ? (
              <div
                className={`flex bg-neutralColor-4 text-neutralColor-3 items-center justify-center w-[30px] h-[30px] border border-neutralColor-4  text-[12px] rounded-full  `}
              >
                <span className={`text-neutralColor-3`}>2</span>
              </div>
            ) : (
              <div
                className={`flex bg-naturalColor-2  items-center justify-center w-[30px] h-[30px] border border-successColor-2 text-[12px] rounded-full ${
                  formik.values.email &&
                  formik.values.phoneNumber &&
                  formik.values.confirmCaptchaValue &&
                  "bg-successColor-2"
                }`}
              >
                {formik.values.phoneNumber &&
                formik.values.email &&
                formik.values.confirmCaptchaValue ? (
                  <BiCheck className="fill-naturalColor-2 w-10 h-10" />
                ) : (
                  <span className={`text-successColor-2`}>2</span>
                )}
              </div>
            )}
          </div>
          {/* title */}
          <div className="flex gap-x-[115px] text-[12px] font-medium leading-[20.73px] whitespace-nowrap">
            <span
              className={`${
                step === 0
                  ? "-mr-8 text-successColor-2"
                  : "text-naturalColor-1 -mr-7"
              }`}
            >
              اطلاعات شخص
            </span>
            <span
              className={`${
                step === 0
                  ? "mr-8 text-neutralColor-3"
                  : (step === 1 && !formik.values.email) ||
                    !formik.values.phoneNumber ||
                    !formik.values.confirmCaptchaValue
                  ? "text-successColor-2 mr-8"
                  : "text-naturalColor-1 mr-8"
              }`}
            >
              اطلاعات تماس
            </span>
          </div>
        </div>
      </div>
      {/* Form Section */}
      <MobileSignUpForm
        randomGenerating={randomGenerating}
        isLoading={isLoading}
        formik={formik}
        step={step}
        setStep={setStep}
        captchaGenerator={captchaGenerator}
        randomValue={randomValue}
      />
      <TabletSignUpForm
        randomGenerating={randomGenerating}
        formik={formik}
        isLoading={isLoading}
        captchaGenerator={captchaGenerator}
        randomValue={randomValue}
      />
    </div>
  );
};

export default SignUpForm;
