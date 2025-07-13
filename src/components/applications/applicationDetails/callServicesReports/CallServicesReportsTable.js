import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SiMicrosoftexcel } from "react-icons/si";
import * as XLSX from "xlsx";
const CallServicesReportsTable = ({ callServicesReports }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = callServicesReports.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const handleExportToExcel = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Convert your callServicesReports data to a worksheet
    const ws = XLSX.utils.json_to_sheet(callServicesReports);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "callServicesReports");

    // Save the workbook as an Excel file
    XLSX.writeFile(wb, "callServices_reports.xlsx");
  };
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col overflow-x-auto lg:overflow-hidden">
        {/* header */}
        <div className="flex min-w-[1200px] md:min-w-[1400px] lg:w-[1030px] h-[55px] bg-neutralColor-5 pt-[6px]">
          <div className="flex items-center text-[12px]  md:text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px]">
            <div className="whitespace-nowrap">
              <span className="mr-[10px] md:mr-[7px] lg:mr-[15px]">
                نام سرویس
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[160px] md:mr-[150px] lg:mr-[130px]">
                تاریخ فراخوانی سرویس
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[150px] md:mr-[150px] lg:mr-[120px]">
                پاسخ سرویس
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[150px] md:mr-[145px] lg:mr-[130px]">
                توضیحات
              </span>
            </div>
          </div>
        </div>
        {/* body */}
        {currentItems.map((callServiceReport, index) => {
          return (
            <div
              key={callServiceReport.id}
              className="min-w-[1200px] md:min-w-[1400px]"
            >
              <div
                className={` px-[20px] flex  h-[70px] md:h-[91px] items-center py-[23px] text-[12px]  md:text-[14px] text-neutralColor-1 leading-[20px] md:leading-[27px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px] ${
                  index % 2 === 0
                    ? "bg-naturalColor-2"
                    : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
                }`}
              >
                <div className=" w-[200px] md:w-[200px] mr-[7px] flex items-center justify-start  md:mr-[5px]  lg:mr-[10px]">
                  <span className="">{callServiceReport.serviceName}</span>
                </div>
                <div className="w-[200px] flex items-center justify-start  mr-[22px] md:mr-[30px] lg:mr-[17px]  ">
                  <span className="">{callServiceReport.logDateTime}</span>
                </div>
                <div className="w-[50px] flex items-center justify-start mr-[65px] md:mr-[107px] lg:mr-[80px] ">
                  <span className="">{callServiceReport.publicResCode}</span>
                </div>
                <div className="w-[500px] md:w-[600px] lg:w-[400px] lg:flex flex items-center justify-start">
                  <Tooltip title={callServiceReport.serviceDesc}>
                    <span className=" mr-[170px] md:mr-[190px]  lg:mr-[170px]  lg:whitespace-nowrap lg:truncate  cursor-pointer">
                      {callServiceReport.serviceDesc}
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
        className="mt-[5px] rounded-[5px] text-center px-[16px] text-successColor-1 text-[14px] font-medium  h-[48px] w-[137px] border border-successColor-1 whitespace-nowrap z-50 "
      >
        <div className="flex gap-x-[5px] items-center justify-center ">
          <SiMicrosoftexcel className="w-6 h-6 fill-successColor-1" />
          <span>خروجی Excel</span>
        </div>
      </button>
      <div className="z-10 block overflow-y-clip lg:-mt-[65px] ">
        {callServicesReports && callServicesReports.length > 2 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(callServicesReports.length / itemsPerPage)}
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

export default CallServicesReportsTable;
