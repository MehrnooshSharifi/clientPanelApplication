import MobileChangePassword from "@/components/clientUser/ChangePassword/MobileChangePassword";
import { ChangePassword } from "@/server/Service";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";

const AdminUserInfo = () => {
  const [cookies, setCookie] = useCookies();
  const [isLoading, setIsLoading] = useState(false);
  const nationalCode = cookies.nationalCode;
  const router = useRouter();
  useEffect(() => {
    if (!cookies.nationalCode) {
      router.push("/user/signIn");
    }
  }, []);
  const initialValues = {
    oldPassword: cookies.password,
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
      router.push("/user/signIn");
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
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });
  return (
    <div className=" mt-[68px] mx-auto w-[375px] md:w-[768px] md:mx-auto px-6 md:pr-5  lg:hidden">
      {/* BreadCrumbs */}
      <div className="w-fit  whitespace-nowrap font-normal  text-[10px] md:w-fit md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center  px-[10px] py-[15.5px] md:mb-5 ">
        <Link
          href="/user/userInfoDetails"
          className=" font-normal -mr-[10px] md:mr-[10px] text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center"
        >
          <span className="w-[95px] h-[17px] md:w-[133px] md:h-[24px] mb-1">
            ویرایش اطلاعات کاربری
          </span>
        </Link>
        <div className=" -mr-[10px] md:-mr-[10px] ">
          <Image
            width={25}
            height={25}
            src="/assets/images/breadCrumbsDirection.svg"
            className="w-[10px]"
            alt="breadCrumbsDirection"
          />
        </div>
        <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2 mr-2">
          <span className="w-[113px] h-[17px]">تغییر رمز عبور</span>
        </div>
      </div>
      <div className="-mr-[45px] md:-mr-[40px] md:mb-[68px]">
        {/* Title */}
        <div className="w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px]  font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px]">
          <span>تغییر رمز عبور</span>
        </div>
      </div>
      {/* MobileChangePassword */}
      <MobileChangePassword formik={formik} isLoading={isLoading} />
    </div>
  );
};

export default AdminUserInfo;
