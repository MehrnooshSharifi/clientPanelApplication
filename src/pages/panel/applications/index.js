import ApplicationsTable from "@/components/applications/ApplicationsTable";
import { GetAllAppInfoByNationalCode } from "@/server/Service";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Applications = ({ applications }) => {
  return (
    <>
      <div
        className={`${
          applications.length == 0 ? "px-5" : "px-4"
        } flex-col lg:mx-auto`}
      >
        {/* applicationsContent */}
        <div className="felx flex-col mt-[22px] md:mt-[34.88px] lg:mt-[35px]  lg:mx-auto ">
          {/* title */}
          <div
            className={`${
              applications.length == 0
                ? "lg:-mr-[280px] mb-[123.8px] md:mb-[164.79px] lg:mb-[178px]"
                : "lg:mr-[50px]"
            } mb-[33px] md:mb-[43px] lg:mb-[35px] mr-[5px] `}
          >
            <span className="text-neutralColor-1 text-[14px] leading-[24.18px] font-medium w-[172px] h-[31px] md:text-[18px] md:leading-[31.09px] md:w-[134px] md:h-[24px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:w-[193px] lg:h-[35px]">
              {applications && applications.length > 0
                ? "لیست اپلیکیشن ها"
                : ""}
            </span>
          </div>
          {applications.length == 0 && (
            <div className="  flex flex-col items-center mb-[20px] mg:mb-[25px] lg:mb-[30px] text-[14px] md:text-[16px] lg:text-[18px] text-neutralColor-2 leading-[24.18px] md:leading-[27.64px] lg:leading-normal font-medium">
              <div className="mb-[25.94px] ">
                <Image
                  width={25}
                  height={25}
                  src="/assets/images/noApplication.svg"
                  alt="no Application"
                  className="w-[120px] h-[150px] md:w-[148px] md:h-[155px] lg:w-[200px] lg:h-[218px]"
                />
              </div>
              <div className="mb-[10px] md:mb-[6px] lg:mb-[10px]">
                <span>شما تا کنون اپلیکیشنی ثبت نکرده اید.</span>
              </div>
              <div>
                <span>برای افزودن اپلیکیشن جدید روی دکمه زیر کلیک کنید.</span>
              </div>
            </div>
          )}
          {/* addNewApplication */}
          <div
            className={`${
              applications.length == 0 && "flex justify-center lg:-mr-[50px]"
            }`}
          >
            <Link
              href="/panel/applications/addNewApplication"
              className="flex bg-primaryColor-1 w-[154px] lg:mr-[50px] h-[38px] mb-[21px] md:mb-[35px] lg:mb-[20.07px]  md:w-[169px] md:h-[48px] lg:w-[194px] lg:h-[48px] items-center justify-center gap-x-[8px] rounded-[5px]"
            >
              <Image
                src="/assets/images/plus.svg"
                alt="add New Service Group"
                width={14}
                height={14}
              />
              <span className="text-naturalColor-2 text-[12px] font-bold leading-[20.73px] md:text-[16px] md:font-bold md:leading-[27.64px]">
                اپلیکیشن جدید
              </span>
            </Link>
          </div>
          {/* tableSection */}
          <div className="flex flex-col lg:mr-[50px]">
            {/* applicatopnsList */}
            {applications && applications.length !== 0 && (
              <ApplicationsTable applications={applications} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Applications;

export async function getServerSideProps(ctx) {
  try {
    const { req } = ctx;
    const nationalCode = req.cookies.nationalCode;
    const token = req.cookies.Token;

    // Assuming GetAllAppInfoByNationalCode returns an object with a 'data' property
    const { data } = await GetAllAppInfoByNationalCode(nationalCode, token);

    return {
      props: {
        applications: data,
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
