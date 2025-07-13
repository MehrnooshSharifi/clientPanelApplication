import AppPublicInfo from "@/components/applications/addApplication/AppPublicInfo";
import { useFormik } from "formik";
import Link from "next/link";
import persianJs from "persianjs";
import { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";

import * as Yup from "yup";
import { useCookies } from "react-cookie";
// import AppLicense from "@/components/applications/addApplication/AppLicense";
import AccordionComponent from "@/common/Accordion";
import Cookies from "js-cookie";
import {
  AssignAppToUser,
  Captcha,
  CreateApp,
  CreateServiceRequest,
  GetAllServiceGroup,
} from "@/server/Service";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import Image from "next/image";
import { generateGUID } from "../../../../../utils/GUIDGenerator";
import { MdRefresh } from "react-icons/md";
import { VscError } from "react-icons/vsc";
const AddNewApplication = ({ AllServicesGroup }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [randomValue, setRandomValue] = useState();
  const [cookies, setCookie] = useCookies();
  const [step, setStep] = useState(1);
  const nationalCode = cookies.nationalCode;
  const router = useRouter();
  var formdata = new FormData();
  formdata.append("file", selectedFile);
  // specifications :1 , services : 2 , callServicesReports : 3 => default : 1
  const initialValues = {
    appName: "",
    appIp: "",
    appCompany: "",
    appRetAddr: "",
    appWeb: "",
    appLogo: null,
    condition: "",
    serviceId: [],
    random: "",
    confirmCaptchaValue: "",
    passwordApplication: "",
  };
  // const validationSchema = Yup.object({
  //   appName: Yup.string().required("نام برنامه را وارد کنید"),
  //   passwordApplication: Yup.string()
  //     .required("رمز برنامه را وارد نمایید")
  //     .min(4, "رمز برنامه باید 4 کاراکتر باشد"),
  //   appIp: Yup.string().required("آدرس IP را وارد کنید"),
  //   random: Yup.string().required(),
  //   confirmRandomValue: Yup.string()
  //     .required("")
  //     .oneOf([Yup.ref("random")], "کد وارد شده صحیح نمی باشد"),
  // });
  useEffect(() => {
    const guid = generateGUID();
    Cookies.set("sessionid_guid", guid);
    captchaGenerator();
    return () => {
      Cookies.remove("sessionid_guid");
    };
  }, []);

  const captchaGenerator = async () => {
    const { data } = await Captcha();
    setRandomValue(data);
  };
  const onSubmit = async (values) => {
    setStep(3);
    setIsLoading(true);
    const res = await CreateApp(values);
    if (res.isSuccess) {
      router.push("/panel/applications");
      const { data } = res;
      const { id } = data;
      const response = await AssignAppToUser(nationalCode, id, values);
      if (response.isSuccess && !values.serviceId) {
        toast.success(res.message, {
          duration: 4000,
          style: {
            backgroundColor: "#4CAF50",
            color: "#fff",
          },
          className: "",
          icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
        });
        toast.success("اپلیکیشن شما با موفقیت ثبت شد", {
          duration: 2000,
          style: {
            backgroundColor: "#4CAF50",
            color: "#fff",
          },
          icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
        });
        setIsLoading(false);
      } else if (response.isSuccess && values.serviceId) {
        const resault = await CreateServiceRequest(values, id);
        if (resault.isSuccess) {
          router.push("/panel/applications");
          toast.success("اپلیکیشن شما با موفقیت ثبت شد", {
            duration: 2000,
            style: {
              backgroundColor: "#4CAF50",
              color: "#fff",
            },
            icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
          });
          setIsLoading(false);
        }
      } else
        toast.error(res.data.message, {
          duration: 4000,
          style: {
            backgroundColor: "#EE3A01",
            color: "#fff",
          },
          className: "",
          icon: <VscError className="w-[28px] h-[28px]" />,
        });
    } else {
      toast.error(res.message);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });
  const changeFileHandler = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];

      // Create a new FileReader
      const reader = new FileReader();

      // Define the onload event handler
      reader.onload = (event) => {
        let binaryData = event.target.result;

        // Remove the prefix
        binaryData = binaryData.replace(/^data:image\/\w+;base64,/, "");
        formik.setFieldValue("appLogo", binaryData); // Set binary data in formik field
        setSelectedFile(file); // Set selected file
      };

      // Read the file as a Data URL
      reader.readAsDataURL(file);
    }
  };
  const removeFileHandler = () => {
    setSelectedFile(null);
  };
  return (
    <div className=" flex flex-col mt-[10px] md:mt-[30px] mx-[26px] mr-[20px] lg:pr-[10px] lg:mx-auto lg:w-[1030px]">
      {/* BreadCrumbs */}
      <div className=" mb-[20px] md:mb-[30px] whitespace-nowrap font-normal  text-[10px] md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px]  md:leading-[24.18px] h-[48px]  flex items-center py-[15.5px] ">
        <Link
          href="/panel/applications"
          className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center"
        >
          <span className="w-[95px] h-[17px] md:w-[133px] md:h-[24px]">
            لیست اپلیکیشن ها
          </span>
        </Link>
        <div className="-mr-[15px]">
          <Image
            width={25}
            height={25}
            src="/assets/images/breadCrumbsDirection.svg"
            className="w-[10px]"
            alt="breadCrumbsDirection"
          />
        </div>
        <div className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center mr-2">
          <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center  mr-2 gap-x-[5px] ">
            <span className="">افزودن اپلیکیشن جدید</span>
          </div>
        </div>
      </div>
      {/* Title */}
      <div className="flex gap-x-[5px] mb-[24px] h-[31px] items-center text-[14px] md:text-[18px] lg:text-[20px] font-medium lg:font-bold leading-normal">
        <span>افزودن اپلیکیشن جدید</span>
      </div>
      {/* steps */}
      <div
        className={`px-[20px] ${step == 2 && "mb-[65px]"} ${
          step == 3 && "mb-[20px]"
        }`}
      >
        <div className="border-b border-b-neutralColor-4  flex  mb-[56px] md:mb-[59px] lg:mb-[50px] items-center relative">
          {/* step1 */}
          <div className="flex flex-col">
            <div
              id="1"
              className={`absolute -mr-[1px] -top-[20px] flex items-center justify-center rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px] border border-successColor-2 ${
                step == 1 ? "bg-naturalColor-2 " : "bg-successColor-2"
              }`}
            >
              <span
                className={`${step == 1 ? "text-successColor-2" : "hidden"}`}
              >
                {persianJs("1").englishNumber().toString()}
              </span>
              {/* //TODO : when step 1 completed display will be bloxk */}
              <div className={`${step !== 1 ? "block" : "hidden"}`}>
                <BsCheck className="fill-naturalColor-2 w-6 h-6 lg:w-9 lg:h-9" />
              </div>
            </div>
            <span
              className={`absolute -mr-[20px] top-[20px] md:top-[30px] text-[12px] md:text-[14px] ${
                step == 1
                  ? "text-successColor-2"
                  : "text-neutralColor-1 lg:text-[16px] lg:font-medium lg:leading-normal"
              }`}
            >
              اطلاعات عمومی
            </span>
          </div>
          {/* step2 */}
          {/* <div
              id="2"
              className={`flex mx-auto -mb-[15px] items-center justify-center rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px]  ${
                step == 1
                  ? "border-neutralColor-4 bg-neutralColor-5 border"
                  : step == 2
                  ? "border-successColor-2 bg-white border-2"
                  : "bg-successColor-2"
              }`}
            >
              <div>
                <span
                  className={`${
                    step == 1
                      ? "text-neutralColor-4"
                      : step == 2
                      ? "text-successColor-2"
                      : "hidden"
                  }`}
                >
                  {persianJs("2").englishNumber().toString()}
                </span>
                <div
                  className={`${
                    (step == 3) | (step == 4) ? "block" : "hidden"
                  }`}
                >
                  <BsCheck className="fill-naturalColor-2 w-6 h-6 lg:w-9 lg:h-9" />
                </div>
                <span
                  className={`absolute -mr-[30px]  top-[35px] md:top-[45px] text-[12px] md:text-[14px] whitespace-nowrap ${
                    step == 1
                      ? " text-neutralColor-3"
                      : step == 2
                      ? "text-successColor-2"
                      : "text-neutralColor-1 lg:text-[16px] lg:font-medium -mr-[9px] lg:leading-normal md:-mr-[15px] "
                  }`}
                >
                  فایل مجوز
                </span>
              </div>
            </div> */}
          {/* step3 */}
          <div className="flex flex-col">
            <div
              id="3"
              className={`absolute -left-[1px] -top-[20px] flex items-center justify-center rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px] border ${
                (step == 1) | (step == 2)
                  ? "border-neutralColor-4 bg-neutralColor-5 border"
                  : step == 3
                  ? "border-successColor-2 bg-white border-2"
                  : step == 4 && "bg-successColor-2"
              }`}
            >
              <span
                className={`${
                  (step == 1) | (step == 2)
                    ? "text-neutralColor-4"
                    : step == 3
                    ? "text-successColor-2"
                    : step == 4 && "hidden"
                }`}
              >
                {persianJs("2").englishNumber().toString()}
              </span>
              <div className={`${step != 4 ? "hidden" : "block"}`}>
                <BsCheck className="fill-naturalColor-2 w-6 h-6 lg:w-9 lg:h-9" />
              </div>
              <span
                className={`absolute -mr-[5px]  top-[35px] md:top-[45px] text-[12px] md:text-[14px] whitespace-nowrap ${
                  (step == 1) | (step == 2)
                    ? "text-neutralColor-3"
                    : step == 3
                    ? "text-successColor-2"
                    : step == 4 &&
                      "text-neutralColor-1 lg:text-[16px] lg:font-medium -mr-[15px] lg:leading-normal"
                }`}
              >
                سرویس ها
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* PublicAppInfo */}
      {step === 1 && (
        <AppPublicInfo
          captchaGenerator={captchaGenerator}
          formik={formik}
          isLoading={isLoading}
          step={step}
          setStep={setStep}
          randomValue={randomValue}
        />
      )}
      {/* {step === 2 && (
        <AppLicense
          step={step}
          setStep={setStep}
          formik={formik}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          changeFileHandler={changeFileHandler}
          removeFileHandler={removeFileHandler}
        />
      )} */}
      {step === 3 && (
        <>
          <div className="bg-primaryColor-5 col-span-12 flex flex-col items-start justify-center h-[177px] ">
            <div className="flex items-center justify-center w-full mt-3">
              <img
                src={`data:image/png;base64,${randomValue}`}
                alt="Captcha"
                {...formik.getFieldProps("random")}
                name="random"
              />
              <MdRefresh
                className="w-8 h-8 fill-primaryColor-1 mr-[13.13px] cursor-pointer"
                onClick={captchaGenerator}
              />
            </div>
            <div className="flex flex-col gap-y-[2px] items-center justify-center w-full -mr-[18px]  mt-[20px] relative">
              <p className="text-neutralColor-3 text-[12px] lg:text-[16px] font-normal leading-[20.73px] -mr-[155px] md:-mr-[550px] lg:-mr-[512px]">
                کد بالا را وارد کنید
              </p>
              <input
                maxLength={5}
                autoComplete="off"
                onBlur={formik.handleBlur}
                className="h-[48px] md:w-[640px] px-[16px] tracking-[20px] md:tracking-[50px] flex justify-center items-center text-center text-neutralColor-1 text-[16px] lg:text-[20px]  font-black leading-normal"
                value={formik.values.confirmCaptchaValue}
                type="text"
                name="confirmCaptchaValue"
                {...formik.getFieldProps("confirmCaptchaValue")}
              />
            </div>
          </div>
          <AccordionComponent
            isLoading={isLoading}
            captchaGenerator={captchaGenerator}
            data={AllServicesGroup.data}
            formik={formik}
            isNew={true}
            setStep={setStep}
            randomValue={randomValue}
            isNewApp={true}
          />
        </>
      )}
    </div>
  );
};
export default AddNewApplication;

export async function getServerSideProps() {
  try {
    const res = await GetAllServiceGroup();
    return {
      props: {
        AllServicesGroup: res,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
