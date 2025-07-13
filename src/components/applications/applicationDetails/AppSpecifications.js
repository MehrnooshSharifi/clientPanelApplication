import { useFormik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { ChangeApplicationPass } from "@/server/Service";
import toast from "react-hot-toast";
import { VscError } from "react-icons/vsc";
import { BiCheckCircle } from "react-icons/bi";
const AppSpecifications = ({ appDetails }) => {
  const initialValues = {
    oldAppPass: "",
    newAppPass: "",
  };
  const validationSchema = Yup.object({
    oldAppPass: Yup.string()
      .required("رمز قدیم اپلیکیشن را وارد نمایید")
      .max(12, "رمز قدیم اپلیکیشن حداکتر 12 کاراکتر باشد"),
    newAppPass: Yup.string()
      .required("رمز جدید اپلیکیشن را وارد نمایید")
      .max(12, "رمز جدید اپلیکیشن حداکثر 12 کاراکتر باشد"),
  });
  const nationalCode = Cookies.get("nationalCode");
  const scope = appDetails?.id || "";
  const onSubmit = async (values) => {
    const res = await ChangeApplicationPass(nationalCode, scope, values);
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
      resetForm({ user: "" });
    } else if (!res.isSuccess) {
      toast.error(res.error.message, {
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
    validationSchema,
    validateOnMount: true,
  });
  return (
    <form
      className="grid grid-cols-12 gap-y-[40px] gap-x-[20px]"
      onSubmit={formik.handleSubmit}
    >
      <div className="  col-span-12 md:col-span-6 lg:col-span-4 relative h-[48px]">
        <label className="absolute px-[5px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-3 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
          Scope
        </label>
        <input
          value={appDetails?.id || ""}
          readOnly
          className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-3 tracking-[0.42px] border bg-neutralColor-5 px-4 py-3  border-neutralColor-4 rounded-[5px] "
        />
      </div>
      <div className="  col-span-12 md:col-span-6 lg:col-span-4 relative h-[48px] ">
        <label className="absolute px-[5px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-3 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
          نام شرکت
        </label>
        <input
          value={appDetails?.appCompany || ""}
          readOnly
          className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-3 tracking-[0.42px] border bg-neutralColor-5 px-4 py-3  border-neutralColor-4 rounded-[5px] "
        />
      </div>
      <div className="  col-span-12 md:col-span-6 lg:col-span-4 relative h-[48px]">
        <label className="absolute px-[5px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-3 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
          آدرس IP
        </label>
        <input
          value={appDetails?.appIp || ""}
          readOnly
          className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-3 tracking-[0.42px] border bg-neutralColor-5 px-4 py-3  border-neutralColor-4 rounded-[5px] "
        />
      </div>
      <div className="  col-span-12 md:col-span-6 lg:col-span-4 relative h-[48px]">
        <label className="absolute px-[5px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-3 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
          نام اپلیکیشن
        </label>
        <input
          value={appDetails?.appName || ""}
          readOnly
          className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-3 tracking-[0.42px] border bg-neutralColor-5 px-4 py-3  border-neutralColor-4 rounded-[5px] "
        />
      </div>
      <div className="  col-span-12 md:col-span-6 lg:col-span-4 relative h-[48px]">
        <label className="absolute px-[5px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-3 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
          آدرس بازگشت
        </label>
        <input
          value={appDetails?.appRetAddr || ""}
          readOnly
          className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-3 tracking-[0.42px] border bg-neutralColor-5 px-4 py-3  border-neutralColor-4 rounded-[5px] "
        />
      </div>
      <div className="  col-span-12 md:col-span-6 lg:col-span-4 relative h-[48px]">
        <label className="absolute px-[5px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-3 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
          آدرس وب سایت
        </label>
        <input
          value={appDetails?.appWeb || ""}
          readOnly
          className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-3 tracking-[0.42px] border bg-neutralColor-5 px-4 py-3  border-neutralColor-4 rounded-[5px] "
        />
      </div>
      <div className="  col-span-12 md:col-span-6 lg:col-span-4 relative h-[48px]">
        <label className="absolute px-[5px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-2 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
          رمز قدیم اپلیکیشن
        </label>
        <input
          maxlength="12"
          autoComplete="off"
          name="oldAppPass"
          value={formik.values.oldAppPass}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal bg-white text-neutralColor-1 tracking-[0.42px] border  px-4 py-3  border-neutralColor-4 rounded-[5px] "
        />
        {formik.touched.oldAppPass && formik.errors.oldAppPass && (
          <div className="w-[202px] text-errorColor-2 text-[12px] pr-2 pt-1">
            {formik.errors.oldAppPass}
          </div>
        )}
      </div>
      <div className="  col-span-12 md:col-span-6 lg:col-span-4 relative h-[48px]">
        <label className="absolute px-[5px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-2 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
          رمز جدید اپلیکیشن
        </label>
        <input
          autoComplete="off"
          name="newAppPass"
          value={formik.values.newAppPass}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          maxlength="12"
          className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal bg-white text-neutralColor-1 tracking-[0.42px] border  px-4 py-3  border-neutralColor-4 rounded-[5px] "
        />
        {formik.touched.newAppPass && formik.errors.newAppPass && (
          <div className="w-[202px] text-errorColor-2 text-[12px] pr-2 pt-1">
            {formik.errors.newAppPass}
          </div>
        )}

        <button
          disabled={
            (formik.values.oldAppPass.length < 4) |
            (formik.values.oldAppPass.length < 4)
          }
          type="submit"
          className={`bg-primaryColor-1 text-naturalColor-2 w-full h-[48px] flex items-center justify-center rounded-[5px] text-[14px] font-medium md:text-[16px] md:font-bold absolute top-[100px]  lg:-right-[346px] md:top-[100px] 
            ${
              (formik.values.newAppPass.length < 4) |
                (formik.values.newAppPass.length < 4) &&
              "disabled  opacity-30 cursor-not-allowed"
            }
          }`}
        >
          <div className="flex justify-center relative">
            <span>تغییر رمز اپلیکیشن</span>
          </div>
        </button>
      </div>
      {/* <div className="  col-span-12  relative h-[48px]">
        <label className="absolute px-[5px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-3 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
          فایل مجوز
        </label>
        <div className="w-full h-[80px]  md:h-[100px] lg:h-[144px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-3 tracking-[0.42px] border bg-neutralColor-5 px-4 py-3  border-neutralColor-4 rounded-[5px] flex items-center">
          {appDetails.appLogo ? (
            <img
              placeholder="blur"
              blurdataurl={`data:image/pdf;base64,${appDetails?.appLogo || ""}`}
              src={`data:image/pdf;base64,${appDetails?.appLogo || ""}`}
              alt="App Logo"
              className="w-[80px] h-[50px] md:w-[100px] md:h-[60px] lg:w-[120px] lg:h-[70px]"
            />
          ) : (
            <div className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-3 tracking-[0.42px] flex items-center">
              <span>فایل مجوز بارگزاری نشده است</span>
            </div>
          )}
        </div>
      </div> */}
    </form>
  );
};

export default AppSpecifications;
