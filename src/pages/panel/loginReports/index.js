import LoginReportsTable from "@/components/loginReports/LoginReportsTable";
import { GetLoginReport } from "@/server/Service";

const LoginReports = ({ loginReports }) => {
  return (
    <div className=" flex flex-col mt-[10px] md:mt-[30px] mx-[26px] mr-[20px] lg:pr-[10px] lg:mx-auto lg:w-[1030px]">
      {/* Title */}
      <div className="flex gap-x-[5px] mb-[24px] h-[31px] items-center text-[14px] md:text-[18px] lg:text-[20px] font-medium lg:font-bold leading-normal lg:mr-[20px]">
        گزارشات لاگین
      </div>
      <LoginReportsTable loginReports={loginReports} />
    </div>
  );
};

export default LoginReports;

export async function getServerSideProps(ctx) {
  try {
    const { req } = ctx;
    const nationalCode = req.cookies.nationalCode;
    const token = req.cookies.Token;

    // Assuming GetLoginReport returns an object with a 'data' property
    const { data } = await GetLoginReport(nationalCode, token);

    return {
      props: {
        loginReports: data,
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
