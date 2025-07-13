import { useEffect, useState } from "react";
import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
const AppServices = ({ services }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = services?.slice(indexOfFirstItem, indexOfLastItem);
  const router = useRouter();
  const appId = router.query.appId;
  return (
    <div className="flex flex-col -mt-[15px]">
      <div className=" flex flex-col overflow-x-auto lg:overflow-hidden">
        <Link
          href={`/panel/applications/applicationDetails/${appId}/addService`}
          className="flex bg-primaryColor-1 w-[127px]  h-[38px] mb-[21px] md:mb-[35px] lg:mb-[20.07px]  md:w-[159px] md:h-[48px] items-center justify-center gap-x-[8px] rounded-[5px]"
        >
          <Image
            src="/assets/images/plus.svg"
            alt="add New Service Group"
            width={14}
            height={14}
          />
          <span className="text-naturalColor-2 text-[12px] font-bold leading-[20.73px] md:text-[16px] md:font-bold md:leading-[27.64px]">
            سرویس جدید
          </span>
        </Link>
        {/* header */}
        {services.length > 0 && (
          <div className="flex min-w-[1200px] md:min-w-[1400px] lg:w-[1030px] h-[55px] bg-neutralColor-5 pt-[6px] ">
            <div className="flex text-[12px] md:text-[16px]  font-medium  text-neutralColor-2 items-center whitespace-nowrap rounded-[6px] h-[43px]">
              <div className=" mr-[20px] ">
                <span className="w-[55px] h-[28px]">وضعیت</span>
              </div>
              <div className=" mr-[100px] md:mr-[150px] lg:mr-[95px] ">
                <span className="w-[96px] h-[28px]">نام سرویس</span>
              </div>
              <div className=" mr-[160px] md:mr-[185px] lg:mr-[160px] ">
                <span className="w-[103px] h-[28px] ">گروه سرویس</span>
              </div>
              <div className=" mr-[180px] md:mr-[200px] lg:mr-[150px] ">
                <span className="w-[103px] h-[28px] ">مبلغ</span>
              </div>
              <div className=" mr-[160px] md:mr-[145px] lg:mr-[120px] ">
                <span className="w-[103px] h-[28px] ">توضیحات</span>
              </div>
            </div>
          </div>
        )}
        {/* body */}
        {currentItems?.map((service, index) => {
          return (
            <div key={service.id} className="min-w-[1200px] md:min-w-[1400px]">
              {/* Services */}
              <div
                key={service.id}
                className={`flex lg:w-[1030px]  h-[61px] md:h-[90px] lg:h-[91px]  items-center py-[12px] text-[12px] md:text-[14px] gap-x-[50px] ${
                  index % 2 == 0
                    ? "bg-naturalColor-2  "
                    : "bg-neutralColor-5  border-t border-t-neutralColor-4 border-b border-b-neutralColor-4 "
                }`}
              >
                <div
                  className={`whitespace-nowrap w-[110px] h-[37px] md:w-[130px] lg:w-[120px] md:h-[45px] ml-[60px] md:ml-[105px] mr-[10px] py-2 rounded-[50px] flex items-center justify-center  ${
                    service.approveStates == 1
                      ? "bg-successColor-5 text-successColor-2"
                      : service.approveStates == 0 && service.adminDesc
                      ? "bg-errorColor-5 text-errorColor-2"
                      : "bg-secondaryColor-5"
                  } `}
                >
                  <span>
                    {service.approveStates == 1
                      ? "فعال"
                      : service.approveStates == 0 && service.adminDesc
                      ? "غیرفعال"
                      : "در حال بررسی"}
                  </span>
                </div>
                <div className=" w-[200px] h-[57px] flex items-center justify-start md:w-[200px]  -mr-[40px] md:-mr-[45px] lg:-mr-[120px]">
                  <span>{service.serviceName}</span>
                </div>
                <div className=" h-[57px] flex items-center justify-start w-[200px] mr-[20px] ">
                  <span className="w-[500px] md:mr-[25px] lg:-mr-[25px]">
                    {service.serviceGroupName}
                  </span>
                </div>
                <div className=" h-[57px] flex items-center justify-start w-[200px] gap-x-[5px] md:mr-[70px]">
                  <span className="max-w-[500px] -mr-[22px] md:-mr-[15px] lg:-mr-[115px] ">
                    {service.servicePrice}
                  </span>
                  <span className="max-w-[500px]">ریال</span>
                </div>
                <div className=" h-[57px] flex items-center justify-start  w-[500px]  lg:w-[170px] lg:flex  -mr-[20px]  lg:-mr-[175px]  ">
                  <Tooltip title={service.adminDesc}>
                    <span className="h-full  g:whitespace-nowrap flex items-center lg:block lg:mt-[25px]  lg:truncate   lg:cursor-pointer">
                      {service.adminDesc}
                    </span>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-10 -mt-[20px]">
        {services && services.length > 4 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(services.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
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

export default AppServices;
