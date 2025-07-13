import FinancialReportsForm from "@/components/financial/financialReports/FinancialReportsForm";

const FinancialReports = () => {
  return (
    <div className=" flex flex-col mt-[10px] md:mt-[30px] mx-[26px] mr-[20px] lg:pr-[10px] lg:mx-auto lg:w-[1030px]">
      {/* Title */}
      <div className="flex gap-x-[5px] mb-[24px] h-[31px] items-center text-[14px] md:text-[18px] lg:text-[20px] font-medium lg:font-bold leading-normal lg:mr-[20px]">
        گزارشات مالی
      </div>
      <FinancialReportsForm />
    </div>
  );
};

export default FinancialReports;
