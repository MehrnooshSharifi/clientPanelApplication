import { Pagination, PaginationItem} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HiEye } from "react-icons/hi2";
const ApplicationsTable = ({ applications }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = applications?.slice(indexOfFirstItem, indexOfLastItem);
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const openHandler = (id) => {
    for (let element of applications) {
      if (element.id === id) {
        setSelectedId(id);
        setIsOpen(!isOpen);
      }
    }
  };
  return (
    <div className="flex flex-col gap-y-[70px] ">
      <div className=" flex flex-col  overflow-x-auto">
        {/* header */}
        <div className="flex min-w-[900px] lg:w-[1030px] h-[55px] bg-neutralColor-5 pt-[6px] ">
          <div className="flex text-[12px] md:text-[16px]  font-medium  text-neutralColor-2 items-center whitespace-nowrap rounded-[6px] h-[43px]">
            <div className=" mr-[20px] ">
              <span className="w-[55px] h-[28px]">وضعیت</span>
            </div>
            <div className=" mr-[100px] md:mr-[140px] lg:mr-[250px] ">
              <span className="w-[96px] h-[28px]">نام اپلیکیشن</span>
            </div>
            <div className=" mr-[89px] md:mr-[168px] ">
              <span className="w-[103px] h-[28px] ">آدرس سایت</span>
            </div>
          </div>
          <div className=" lg:hidden w-[103px]  flex items-center justify-center  absolute left-[15px] rounded-tl-[6px] rounded-bl-[6px] h-[43px]  mr-[275px] bg-neutralColor-5 text-[12px] md:text-[16px]  font-medium text-neutralColor-2">
            <span className="mb-1 lg:hidden">عملیات</span>
          </div>
        </div>
        {/* body */}
        {currentItems?.map((application, index) => {
          return (
            <div key={application.id} className="min-w-[900px] ">
              {/* GroupServices */}
              <div
                className={`flex lg:w-[1030px]  h-[61px] md:h-[70px] lg:h-[91px] items-center py-[12px] text-[12px] md:text-[16px]  ${
                  index % 2 == 0
                    ? "bg-naturalColor-2  "
                    : "bg-neutralColor-5  border-t border-t-neutralColor-4 border-b border-b-neutralColor-4 "
                }`}
              >
                <div
                  className={`w-[95px] h-[37px] md:w-[106px] md:h-[45px] ml-[60px] md:ml-[105px] mr-[10px] py-2 rounded-[50px] flex items-center justify-center  ${
                    application.isActive
                      ? "bg-successColor-5 text-successColor-2"
                      : "bg-errorColor-5 text-errorColor-2"
                  }`}
                >
                  <span>{application.isActive ? "فعال" : "غیرفعال"}</span>
                </div>
                <div className=" w-[100px] h-[57px] flex items-center md:w-[200px] -mr-[5px] lg:mr-[100px]">
                  <span>{application.publicApp.appName}</span>
                </div>
                <div className=" h-[57px] flex items-center w-[200px] mr-[60px]">
                  <span className="max-w-[500px]">
                    {application.publicApp.appWeb}
                  </span>
                </div>
              </div>
              {/* operations section */}
              {/* Mobile&Tablet */}
              <div
                id={application.id}
                className={`w-[103px] h-[57px] mx-auto absolute left-[15px] -mt-[60px] flex items-center pr-[45px] lg:hidden ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                {!isOpen && application.id == selectedId ? (
                  <div className="flex items-baseline relative">
                    <div className="flex flex-col w-[145px] h-[48px] md:w-[164px] md:h-[51px] rounded-[10px] border text-[12px] md:text-[14px] text-neutralColor-1 font-medium whitespace-nowrap  z-30   border-neutralColor-4 bg-naturalColor-2 absolute  bottom-5 left-7 top-1  shadow-lg">
                      {/* services */}
                      <Link
                        className="flex items-center justify-start w-[103px] h-[49px] gap-x-[10px] p-[10px]"
                        href={`/panel/applications/applicationDetails/${application.publicAppId}`}
                      >
                        <div>
                          <HiEye className="w-6 h-6 fill-primaryColor-1" />
                        </div>
                        <span>مشاهده جزییات</span>
                      </Link>
                    </div>
                    <Image
                      onClick={() => openHandler(application.id)}
                      className="mb-1  "
                      src="/assets/images/multiple.svg"
                      alt="multipleOperation"
                      width={15}
                      height={20}
                    />
                  </div>
                ) : (
                  <Image
                    onClick={() => openHandler(application.id)}
                    className="mb-1  "
                    src="/assets/images/operationDots.svg"
                    alt="operationDots"
                    width={20}
                    height={20}
                  />
                )}
              </div>
              {/* Desktop */}
              <div
                id={application.id}
                className={`w-[103px] h-[57px]  -mt-[73px] absolute mr-[850px] whitespace-nowrap items-center  hidden lg:flex  ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                <Link
                  className="w-[134px] h-[44px] bg-naturalColor-2 flex items-center justify-center border border-primaryColor-1 px-4 py-2 rounded-[5px]"
                  href={`/panel/applications/applicationDetails/${application.publicAppId}`}
                >
                  <span className="w-[102px] h-[28px] text-[16px] text-primaryColor-1 font-medium leading-normal ">
                    نمایش جزییات
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-10  -mt-[80px]">
        {applications && applications.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(applications.length / itemsPerPage)}
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

export default ApplicationsTable;
