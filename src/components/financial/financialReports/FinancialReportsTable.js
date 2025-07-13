import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import * as XLSX from "xlsx";
import { SiMicrosoftexcel } from "react-icons/si";
const FinancialReportsTable = ({ financialReports }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleExportToExcel = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Convert your financialReports data to a worksheet
    const ws = XLSX.utils.json_to_sheet(financialReports);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "FinancialReports");

    // Save the workbook as an Excel file
    XLSX.writeFile(wb, "financial_reports.xlsx");
  };
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = financialReports.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col overflow-x-auto lg:overflow-hidden">
        {/* header */}
        <div className="flex min-w-[1200px] md:min-w-[1400px] lg:w-[1030px] h-[55px] bg-neutralColor-5 pt-[6px]">
          <div className="flex items-center text-[12px]  md:text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px]">
            <div className="whitespace-nowrap">
              <span className="mr-[10px] md:mr-[7px] lg:mr-[15px]">
                نوع تراکنش
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[160px] md:mr-[100px] lg:mr-[80px]">
                تاریخ و ساعت
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[150px] md:mr-[150px] lg:mr-[60px]">
                مبلغ بدهکاری
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[80px] md:mr-[90px] lg:mr-[80px]">
                مبلغ بستانکاری
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[120px] md:mr-[90px] lg:mr-[110px]">
                توضیحات
              </span>
            </div>
          </div>
        </div>
        {/* body */}
        {currentItems.map((financialReport, index) => {
          return (
            <div
              key={financialReport.id}
              className="min-w-[1200px] md:min-w-[1400px]"
            >
              <div
                className={` px-[20px] flex  h-[70px] md:h-[91px] items-center py-[23px] text-[12px]  md:text-[14px] text-neutralColor-1 leading-[20px] md:leading-[27px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px] ${
                  index % 2 === 0
                    ? "bg-naturalColor-2"
                    : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
                }`}
              >
                <div
                  className={`w-[114px] h-[37px] md:w-[128px]  md:h-[40px] lg:w-[148px]  rounded-[100px] py-3 px-2 flex items-center justify-center ${
                    financialReport.transactionNameDesc === "خرید"
                      ? "bg-successColor-5 text-successColor-2"
                      : financialReport.transactionNameDesc == "تراکنش بازگشتی"
                      ? "bg-errorColor-5 text-errorColor-2"
                      : financialReport.transactionNameDesc == "افزایش اعتبار"
                      ? "bg-primaryColor-5 text-primaryColor-2"
                      : financialReport.transactionNameDesc ==
                        "بازگشت از اعتبار"
                      ? "bg-secondaryColor-5 text-naturalColor-1"
                      : financialReport.transactionNameDesc ==
                        "مالیات ارزش افزوده"
                      ? "bg-purple-50 text-purple-700"
                      : ""
                  }`}
                >
                  <span className="whitespace-nowrap">
                    {financialReport.transactionNameDesc}
                  </span>
                </div>
                <div className="w-[200px] flex items-center justify-start  mr-[110px] md:mr-[60px] lg:mr-[20px]  ">
                  <span className="ml-[5px]">
                    {financialReport.documentDate}
                  </span>
                  <span> {financialReport.documentTime}</span>
                </div>
                <div className="w-[50px] flex items-center justify-start mr-[25px] md:mr-[50px] lg:-mr-[45px] ">
                  <span className="lg:mr-[10px]">
                    {financialReport.amountBed}
                  </span>
                </div>
                <div className="w-[50px] flex items-center justify-start mr-[25px] md:mr-[90px] lg:mr-[120px] ">
                  <span className="mr-[75px] md:mr-[50px] lg:mr-[10px]">
                    {financialReport.amountBes}
                  </span>
                </div>
                <div className="w-[500px] md:w-[600px] lg:w-[400px] lg:flex flex items-center justify-start">
                  <Tooltip title={financialReport.documentDesc}>
                    <span className=" mr-[220px] md:mr-[190px]  lg:mr-[170px]  lg:whitespace-nowrap lg:truncate  cursor-pointer">
                      {financialReport.documentDesc}
                    </span>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        variant="outlined"
        onClick={handleExportToExcel}
        className="mt-[5px] rounded-[5px] text-center px-[16px] text-successColor-1 text-[14px] font-medium  h-[48px] w-[140px] border border-successColor-1 whitespace-nowrap "
      >
        <div className="flex gap-x-[5px] items-center justify-center ">
          <SiMicrosoftexcel className="w-6 h-6 fill-successColor-1" />
          <span>خروجی Excel</span>
        </div>
      </button>
      <div className="z-10 block overflow-y-clip lg:-mt-3 ">
        {financialReports && financialReports.length > 2 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(financialReports.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                size="small"
                slots={{
                  previous: ArrowForwardIosIcon,
                  next: ArrowBackIosIcon,
                }}
                {...item}
              />
            )}
          />
        )}
      </div>
    </div>
  );
};

export default FinancialReportsTable;
