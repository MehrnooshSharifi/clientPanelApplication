import AppServices from "@/components/applications/applicationDetails/AppServices";
import AppSpecifications from "@/components/applications/applicationDetails/AppSpecifications";
import CallServicesReportsForm from "@/components/applications/applicationDetails/callServicesReports/CallServicesReportsForm";
import { AppAsigned, GetAppById } from "@/server/Service";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi2";

const ApplicationDetails = ({ appDetails, services }) => {
  const [section, setSection] = useState("2");
  // specifications :1 , services : 2 , callServicesReports : 3 => default : 1

  const sectionHandler = (id) => {
    setSection(id);
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
        <div className=" -mr-[30px] lg:-mr-[25px]">
          <HiOutlineChevronLeft className="text-neutralColor-4" />
        </div>
        <div className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center -mr-[5px]">
          <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center  mr-2 gap-x-[5px] ">
            <span className="">نمایش جزییات اپلیکیشن</span>
            <span>{appDetails.appName}</span>
          </div>
        </div>
      </div>
      {/* Title */}
      <div className="flex gap-x-[5px] mb-[24px] h-[31px] items-center text-[14px] md:text-[18px] lg:text-[20px] font-medium lg:font-bold leading-normal">
        <span>نمایش جزییات اپلیکیشن</span>
        <span>{appDetails.appName}</span>
      </div>
      {/* sections */}
      <div className="border-b border-b-neutralColor-4 flex gap-x-[40px] md:gap-x-[100px] mb-[56px] md:mb-[59px] lg:mb-[50px]">
        <span
          id="1"
          onClick={() => sectionHandler("1")}
          className={`text-[12px] md:text-[14px] lg:text-[16px] leading-normal whitespace-nowrap text-neutralColor-1  ${
            section === "1"
              ? "border-b-2 border-primaryColor-1 text-primaryColor-1 font-extrabold"
              : "font-normal"
          } pb-[10px] md:pb-[16px] lg:pb-[17px] cursor-pointer`}
        >
          مشخصات
        </span>
        <span
          id="2"
          onClick={() => sectionHandler("2")}
          className={`text-[12px] md:text-[14px] lg:text-[16px] leading-normal whitespace-nowrap text-neutralColor-1  ${
            section === "2"
              ? "border-b-2 border-primaryColor-1 text-primaryColor-1 font-extrabold"
              : "font-normal"
          } pb-[10px] md:pb-[16px] lg:pb-[17px] cursor-pointer`}
        >
          سرویس ها
        </span>
        <span
          id="3"
          onClick={() => sectionHandler("3")}
          className={`text-[12px] md:text-[14px] lg:text-[16px] leading-normal whitespace-nowrap text-neutralColor-1  ${
            section === "3"
              ? "border-b-2 border-primaryColor-1 text-primaryColor-1 font-extrabold"
              : "font-normal"
          } pb-[10px] md:pb-[16px] lg:pb-[17px] cursor-pointer`}
        >
          گزارشات فراخوانی سرویس ها
        </span>
      </div>
      {/* Appspecifications */}
      {section === "1" && <AppSpecifications appDetails={appDetails} />}
      {/* AppServices */}
      {section === "2" && <AppServices services={services} />}
      {/* CallServicesReports */}
      {section === "3" && <CallServicesReportsForm />}
    </div>
  );
};

export default ApplicationDetails;

export async function getServerSideProps(ctx) {
  try {
    const { params, req } = ctx;
    const appId = params.appId;
    const token = req.cookies.Token;

    // Assuming GetAppById returns an object with a 'data' property
    const { data } = await GetAppById(appId, token);

    // Assuming AppAsigned returns an object with a 'data' property
    const res = await AppAsigned(appId, token);

    return {
      props: {
        appDetails: data,
        services: res.data,
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

