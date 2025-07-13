import { DownloadHelpFile } from "@/server/Service";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const TechnicalDocsServicesTable = ({ services }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const openHandler = (id) => {
    for (let element of services) {
      if (element.id === id) {
        setSelectedId(id);
        setIsOpen(!isOpen);
      }
    }
  };
  const downloadFileHandler = async (serviceId) => {
    DownloadHelpFile(serviceId);
  };
  return (
    <div className="flex flex-col gap-y-[70px] lg:w-[1030px] ">
      <div
        className={`flex flex-col  overflow-x-auto lg:w-[1050px] ${
          services.length > 4 ? " lg:h-[700px]" : "lg:h-[500px] "
        } `}
      >
        {/* header */}
        <div className="flex min-w-[900px] lg:max-h-[800px]   lg:w-[1030px] h-[55px] bg-neutralColor-5 pt-[6px] ">
          <div className="flex text-[12px] md:text-[16px]  font-medium  text-neutralColor-2 items-center whitespace-nowrap rounded-[6px] h-[43px]">
            <div className=" mr-[20px] ">
              <span className="w-[55px] h-[28px]">وضعیت</span>
            </div>
            <div className=" mr-[100px] md:mr-[70px] ">
              <span className="w-[103px] h-[28px]">نام سرویس</span>
            </div>
            <div className=" mr-[135px] md:mr-[100px] ">
              <span className="w-[103px] h-[28px] ">مبلغ</span>
            </div>
            <div className=" mr-[100px] md:mr-[100px] lg:mr-[100px] ">
              <span className="w-[103px] h-[28px] ">توضیحات</span>
            </div>
            <div className=" hidden lg:block lg:mr-[290px] ">
              <span className="w-[103px] h-[28px] ">فایل راهنما</span>
            </div>
          </div>
          <div className=" lg:hidden w-[103px] flex items-center justify-center  absolute left-[14px] rounded-tl-[6px] rounded-bl-[6px] h-[43px]  mr-[275px] bg-neutralColor-5 text-[12px] md:text-[16px]  font-medium text-neutralColor-2">
            <span className="mb-1 lg:hidden">عملیات</span>
          </div>
        </div>
        {/* body */}
        {services?.map((service, index) => {
          return (
            <div key={service.id} className="">
              {/* GroupServices */}
              <div
                className={`flex  min-w-[900px]  lg:w-[1030px] lg:max-h-[500px]   h-[61px] md:h-[70px] lg:h-[91px] items-center py-[12px] text-[12px] md:text-[14px]  ${
                  index % 2 == 0
                    ? "bg-naturalColor-2  "
                    : "bg-neutralColor-5  border-t border-t-neutralColor-4 border-b border-b-neutralColor-4 "
                }`}
              >
                <div
                  className={`w-[95px] h-[37px] md:w-[106px]  md:h-[45px] ml-[60px] md:ml-[105px] mr-[10px] py-2 rounded-[50px] flex items-center justify-center  ${
                    !service.isActive
                      ? "bg-errorColor-5 text-errorColor-2"
                      : "bg-successColor-5 text-successColor-2"
                  }`}
                >
                  <span>{service.isActive ? "فعال" : "غیرفعال"}</span>
                </div>
                <div className=" w-[150px] h-[57px] flex items-center  -mr-[10px] md:-mr-[75px] cursor-pointer ">
                  <Tooltip title={service.serviceName}>
                    <span className="truncate whitespace-nowrap">
                      {service.serviceName}
                    </span>
                  </Tooltip>
                </div>
                <div className=" w-[100px] h-[57px] flex items-center  mr-[50px] md:mr-[30px] lg:mr-[30px] ">
                  <span>{service.defaultPrice}</span>
                </div>
                <div className=" h-[57px] flex items-center max-w-[280px] mr-[60px]  md:mr-[70px] cursor-pointer ">
                  <Tooltip title={service.serviceDesc}>
                    <span className="max-w-[500px] truncate whitespace-nowrap">
                      {service.serviceDesc}
                    </span>
                  </Tooltip>
                </div>
              </div>
              {/* operations section */}
              {/* Mobile&Tablet */}
              <div
                id={service.id}
                className={`w-[103px] h-[57px] md:h-[60px] mx-auto absolute left-[14px] -mt-[60px] md:-mt-[65px] flex items-center pr-[45px] lg:hidden ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                {!isOpen && service.id == selectedId ? (
                  <div className="flex items-baseline relative z-10">
                    <div className="flex flex-col w-[145px] h-[48px] md:w-[164px] md:h-[51px] rounded-[10px] border text-[12px] md:text-[14px] text-neutralColor-1 font-medium whitespace-nowrap  z-50   border-neutralColor-4 bg-naturalColor-2 absolute  bottom-5 left-7 top-1  shadow-lg">
                      {/* services */}
                      <div
                        className="flex items-center justify-start w-[103px] h-[49px] gap-x-[10px] p-[10px] "
                        onClick={() => downloadFileHandler(service.id)}
                      >
                        <Image
                          width={20}
                          height={20}
                          alt="download"
                          src="/assets/images/blueDownload.svg"
                          className="w-[18px] h-[18px] absolute right-[15px]"
                        />

                        <span className="mr-[35px]">دانلود فایل راهنما</span>
                      </div>
                    </div>
                    <Image
                      onClick={() => openHandler(service.id)}
                      className="mb-1 "
                      src="/assets/images/multiple.svg"
                      alt="multipleOperation"
                      width={15}
                      height={20}
                    />
                  </div>
                ) : (
                  <Image
                    onClick={() => openHandler(service.id)}
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
                id={service.id}
                className={`w-[103px] h-[57px]  -mt-[73px]  mr-[850px] whitespace-nowrap items-center  hidden lg:flex lg:mr-[850px] lg:max-h-[500px] ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                <div
                  onClick={() => downloadFileHandler(service.id)}
                  className="w-[125px] h-[44px] flex items-center justify-center bg-primaryColor-1 px-4 py-2 rounded-[5px]"
                >
                  <Image
                    className="mb-1  "
                    src="/assets/images/download.svg"
                    alt="download"
                    width={50}
                    height={20}
                  />
                  <span className="w-[166px]  text-[16px] text-neutralColor-5 font-medium leading-normal mr-[10px] cursor-pointer ">
                    دانلود
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnicalDocsServicesTable;
