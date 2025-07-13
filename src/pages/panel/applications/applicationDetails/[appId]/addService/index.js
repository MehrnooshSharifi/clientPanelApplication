import AccordionComponent from "@/common/Accordion";
import {
  CreateServiceRequest,
  GetAllPublicServicesGroupRequestedByApp,
  GetAppById,
} from "@/server/Service";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import toast from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { VscError } from "react-icons/vsc";
import { Tooltip } from "@mui/material";
const AddService = ({ appDetails, AllPublicServicesGroup }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { appId } = router.query;
  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await CreateServiceRequest(values, appId);
    const { isSuccess } = res;
    if (isSuccess) {
      setIsLoading(false);
      toast.success("سرویس جدید با موفقیت ثبت شد", {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push(`/panel/applications/applicationDetails/${appId}`);
    } else {
      toast.error("ثبت سرویس جدید با خطا روبرو شد", {
        duration: 4000,
        style: {
          backgroundColor: "#EE3A01",
          color: "#fff",
        },
        className: "",
        icon: <VscError className="w-[28px] h-[28px]" />,
      });
    }
    setIsLoading(false);
  };
  const initialValues = {
    serviceId: [],
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });
  return (
    <div className=" flex flex-col mt-[10px] md:mt-[30px] mx-[26px] mr-[20px] lg:pr-[30px] lg:mx-auto lg:w-[1030px] ">
      {/* BreadCrumbs */}
      <div className="mb-[20px] md:mb-[30px] lg:gap-x-[20px] whitespace-nowrap font-normal  text-[10px] md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px]  md:leading-[24.18px] h-[48px]  flex items-center py-[15.5px] overflow-x-scroll overflow-y-hidden">
        <Link
          href="/panel/applications"
          className="  font-normal  text-neutralColor-2  h-[48px]  flex items-center"
        >
          <div className=" font-normal  text-neutralColor-2   h-[48px]  flex items-center  lg:mr-1  ">
            <span className="">لیست اپلیکیشن ها</span>
          </div>
        </Link>
        <div className="lg:-mr-[18px]">
          <HiOutlineChevronLeft className="text-neutralColor-4" />
        </div>
        <Link
          href={`/panel/applications/applicationDetails/${appDetails.id}`}
          className=" font-normal  text-neutralColor-2  h-[48px]  flex items-center max-w-[200px] "
        >
          <div className=" font-normal  text-neutralColor-2   h-[48px]  flex items-center gap-x-[5px] lg:-mr-[20px] ">
            <span className="">نمایش جزییات اپلیکیشن</span>
            <Tooltip title={appDetails.appName}>
              <span className="truncate whitespace-nowrap max-w-[50px]">
                {appId === appDetails.id ? `${appDetails.appName}` : ""}
              </span>
            </Tooltip>
          </div>
        </Link>
        <div className="lg:-mr-[20px]">
          <HiOutlineChevronLeft className="text-neutralColor-4" />
        </div>
        <div className=" font-normal  text-neutralColor-3   h-[48px]  flex items-center  lg:-mr-[18px] ">
          <span className="">سرویس جدید</span>
        </div>
      </div>
      <AccordionComponent
        data={AllPublicServicesGroup}
        formik={formik}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};

export default AddService;

export async function getServerSideProps(ctx) {
  try {
    const { params, req } = ctx;
    const { appId } = params;
    const token = req.cookies.Token;

    // Assuming GetAppById returns an object with a 'data' property
    const { data } = await GetAppById(appId, token);

    // Assuming GetAllPublicServicesGroupRequestedByApp returns an object with a 'data' property
    const res = await GetAllPublicServicesGroupRequestedByApp(appId, token);

    return {
      props: {
        appDetails: data,
        AllPublicServicesGroup: res.data,
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
