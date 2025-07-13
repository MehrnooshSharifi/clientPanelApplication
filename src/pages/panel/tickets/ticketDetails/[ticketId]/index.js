import {
  ChangeTicketStatus,
  GetTicketDetails,
  ReplyToTicket,
} from "@/server/Service";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiCheckCircle, BiSolidUser } from "react-icons/bi";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import persianJs from "persianjs";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { BsFillXCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";
import toast from "react-hot-toast";
import { VscError } from "react-icons/vsc";
import { Tooltip } from "@mui/material";
import { FiChevronDown } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";
const ticketStatusType = [
  // { id: 1, title: "باز" },
  // { id: 2, title: "در حال اقدام" },
  // { id: 3, title: "بررسی شده" },
  { id: 4, title: "بسته" },
  // { id: 5, title: "اطلاع رسانی" },
];
const TicketDetails = ({ ticketInfo, allTickets }) => {
  const [isOpenType, setIsOpenType] = useState(false);
  const [ticketDocStatus, setTicketDocStatus] = useState(true);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [cookies, setCookie] = useCookies();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const textareaRef = useRef(null);
  const nationalCode = cookies.nationalCode;
  const router = useRouter();
  const { ticketId } = router.query;
  const ticketLengthHandler = () => {
    setTicketDocStatus(!ticketDocStatus);
  };
  const { lstTicketDettailBean, ticketFiles, ticketHeader } = ticketInfo;
  let userReciver;
  for (const item of lstTicketDettailBean) {
    userReciver = item?.userReciver;
  }
  // let info;
  // for (const item of allTickets) {
  //   if (item?.id == ticketId) {
  //     info = {
  //       id: item?.id || "",
  //       statusId: item?.statusId || "",
  //       statusName: item?.statusName || "",
  //       ticketDateTime: item?.ticketDateTime || "",
  //       title: item?.title || "",
  //       typeName: item?.typeName || "",
  //       typeId: item?.typeId || "",
  //     };
  //   }
  // }
  const handleTextareaInput = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      setTextareaHeight("auto"); // Reset to auto to get the new scrollHeight
      setTextareaHeight(`${textarea.scrollHeight}px`);
    }
  };
  const changeFileHandler = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      // Create an array to store file objects
      const newFiles = files.map(async (file) => {
        // Convert blob data to Base64
        const fileData = await convertBlobToBase64(file);

        // Create a temporary URL for the blob
        const imageUrl = URL.createObjectURL(file);

        return {
          fileData,
          fileName: file.name,
          imageUrl, // Add imageUrl property for displaying in the UI
        };
      });

      // Use Promise.all to wait for all conversions to complete
      Promise.all(newFiles).then((convertedFiles) => {
        setSelectedFiles((prevFiles) => [...prevFiles, ...convertedFiles]);
      });
    }
  };
  const removeFileHandler = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);
  };
  const convertBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };
  const initialValues = {
    ticketId,
    userSender: nationalCode,
    userReciver,
    ticketdoc: "",
    statusId: null,
  };
  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await ReplyToTicket(values, selectedFiles);
    if (res.isSuccess) {
      toast.success(" پاسخ شما با موفقیت  ثبت شد", {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push("/panel/tickets");
      setIsLoading(false);
    } else {
      toast.error(res.message, {
        duration: 4000,
        style: {
          backgroundColor: "#EE3A01",
          color: "#fff",
        },
        className: "",
        icon: <VscError className="w-[28px] h-[28px]" />,
      });
      setIsLoading(false);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });
  const changeTicketStatusHandler = (id) => {
    formik.values.statusId = id;
    setIsOpenType(false);
  };
  const changeStatusHandler = async () => {
    const statusNum = formik.values.statusId;
    const ticketNum = formik.values.ticketId;
    const res = await ChangeTicketStatus(statusNum, ticketNum);
    if (res.isSuccess) {
      toast.success("تغییر وضعیت با موفقیت انجام شد", {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push("/panel/tickets");
    } else {
      toast.error(res.message, {
        duration: 4000,
        style: {
          backgroundColor: "#EE3A01",
          color: "#fff",
        },
        className: "",
        icon: <VscError className="w-[28px] h-[28px]" />,
      });
    }
  };
  return (
    <div className=" flex flex-col mt-[10px] md:mt-[30px] mx-[16px]  lg:mx-auto lg:w-[1030px]  md:h-[820px]">
      {/* BreadCrumbs */}
      <div className=" mb-[20px] md:mb-[30px] whitespace-nowrap font-normal  text-[10px] md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px]  md:leading-[24.18px] h-[48px]  flex items-center py-[15.5px] ">
        <Link
          href="/panel/tickets"
          className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center"
        >
          <span className="w-[95px] h-[17px] md:w-[133px] md:h-[24px]">
            تیکت ها
          </span>
        </Link>
        <div className=" -mr-[70px] md:-mr-[95px] lg:-mr-[90px]">
          <HiOutlineChevronLeft className="text-neutralColor-4" />
        </div>
        <div className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center -mr-[5px]">
          <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center  mr-2 gap-x-[5px] ">
            <span className="">مشاهده جزییات تیکت</span>
          </div>
        </div>
      </div>
      {/* Title */}
      <div className="flex gap-x-[5px] mb-[24px] h-[31px] items-center text-[14px] md:text-[18px] lg:text-[20px] font-medium lg:font-bold leading-normal">
        <span>مشاهده جزییات تیکت</span>
      </div>
      {/* ticketHeaders */}
      <div className="overflow-y-scroll">
        {/* Ticket number , Ticket status , Ticket title , Ticket Unit */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[12px] gap-y-[14px] mb-[18px] md:mb-[20px] lg:mb-[25.51px] ">
          <div className=" bg-neutralColor-5 h-[45px] md:h-[72px] lg:h-[103px] rounded-[10px] text-[12px] md:text-[14px] lg:text-[16px] font-medium flex items-center py-3 pr-4 relative md:flex-col md:gap-y-[16px] md:items-center md:justify-center ">
            <span className="whitespace-nowrap text-neutralColor-3">
              شماره تیکت
            </span>
            <div className=" absolute left-4 md:relative md:mr-[30px]">
              {ticketHeader?.id.slice(0, 8)}
            </div>
          </div>
          <div className=" bg-neutralColor-5 h-[45px] md:h-[72px] lg:h-[103px] rounded-[10px] text-[12px] md:text-[14px] lg:text-[16px] font-medium flex items-center py-3 pr-4 relative md:flex-col md:gap-y-[16px] md:items-center md:justify-center ">
            {/* //TODO : base on ticket status color of text change */}
            <span className="whitespace-nowrap text-neutralColor-3">
              وضعیت تیکت
            </span>
            <div
              className={`absolute left-3 md:relative md:mr-[30px] ${
                ticketHeader?.statusId == 1
                  ? " text-errorColor-2"
                  : ticketHeader?.statusId == 2
                  ? " text-secondaryColor-1 "
                  : ticketHeader?.statusId == 3
                  ? " text-purple-600"
                  : ticketHeader?.statusId == 4
                  ? " text-successColor-2"
                  : " text-primaryColor-1"
              }`}
            >
              {ticketHeader?.ticketStatus?.statusName || ""}
            </div>
          </div>
          <div className=" bg-neutralColor-5 h-[45px] md:h-[72px] lg:h-[103px] rounded-[10px] text-[12px] md:text-[14px] lg:text-[16px] font-medium flex items-center py-3 pr-4 relative md:flex-col md:gap-y-[16px] md:items-center md:justify-center ">
            <span className="whitespace-nowrap text-neutralColor-3">
              عنوان تیکت
            </span>
            <div className=" w-[60px] md:w-[100px] mr-[10px] flex items-center justify-center  md:mr-[5px]  lg:mr-[10px]">
              <Tooltip title={ticketHeader?.title || ""}>
                <span className="whitespace-nowrap truncate cursor-pointer absolute left-4 md:relative md:mr-[30px]">
                  {ticketHeader?.title || ""}
                </span>
              </Tooltip>
            </div>
          </div>
          <div className=" bg-neutralColor-5  h-[45px] md:h-[72px] lg:h-[103px] rounded-[10px] text-[12px] md:text-[14px] lg:text-[16px] font-medium flex items-center py-3 pr-4 relative md:flex-col md:gap-y-[16px] md:items-center md:justify-center">
            <span className="whitespace-nowrap text-neutralColor-3">واحد</span>
            <div className=" absolute left-4 md:relative md:mr-[30px]">
              {ticketHeader?.ticketType?.typeName || ""}
            </div>
          </div>
          {/* changeTicketStatus */}
          {ticketHeader.statusId !== 4 && (
            <div className="mt-[5px] w-full text-neutralColor-3 bg-neutralColor-5  h-[45px] md:h-[72px] lg:h-[103px] rounded-[10px] text-[12px] md:text-[14px] lg:text-[16px] font-medium flex items-center gap-x-[50px]  py-3 pr-4  relative  md:items-center md:justify-center">
              <div className="">
                <label
                  className=" -mr-[10px] flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2 bg-naturalColor-2"
                  htmlFor="isPublic"
                >
                  <span
                    className={`${
                      isOpenType ? "text-primaryColor-1" : "text-errorColor-1"
                    } whitespace-nowrap text-[12px] md:text-[14px] lg:text-[16px]`}
                  >
                    تغییر وضعیت تیکت
                  </span>
                </label>
                <div
                  onClick={() => setIsOpenType(!isOpenType)}
                  className={` w-[100px] md:w-[120px] lg:w-[150px] h-[20px] lg:h-[48px] text-[12px]  lg:text-[14px] leading-[24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer relative ${
                    isOpenType && "border-2 border-primaryColor-1"
                  }`}
                  name="statusId"
                  value={formik.values.statusId}
                  onChange={formik.handleChange}
                >
                  <span className="absolute right-[35px] -top-[1px] md:right-[45px] lg:right-[56px] lg:top-[10px]">
                    بسته
                  </span>
                </div>
                <div
                  className={`w-[20px]  flex justify-center items-center mr-[10px] -mt-[20px] lg:-mt-[40px] cursor-pointer${
                    isOpenType && "transition-all duration-300 rotate-180"
                  }`}
                  onClick={() => setIsOpenType(!isOpenType)}
                >
                  <FiChevronDown className="lg:w-8 lg:h-8 cursor-pointer" />
                </div>
                {/* openIsPublicSection */}
                {isOpenType && (
                  <div className="flex w-[100px] md:w-[120px] lg:w-[150px] h-[30px] mt-[10px] lg:h-[50px] text-[12px]  lg:text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2 rounded-[5px] shadow-lg  py-[12px]  absolute   border-2 border-neutralColor-4">
                    {ticketStatusType.map((item) => {
                      return (
                        <div
                          key={item.id}
                          id={item.id}
                          value={item.title}
                          className={`w-full  h-[50px] text-center   flex justify-center items-center ${
                            item.id == 4
                              ? "cursor-pointer"
                              : "cursor-not-allowed"
                          }`}
                          onClick={() => changeTicketStatusHandler(item.id)}
                        >
                          <span
                            className={`${
                              item.title == "بسته"
                                ? "text-neutralColor-1"
                                : "text-neutralColor-3"
                            } hover:bg-secondaryColor-5 active:bg-secondaryColor-3 lg:w-[365px]  lg:h-[48px] flex items-center justify-center`}
                          >
                            {item.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <button
                type="button"
                className="cursor-pointer relative"
                onClick={changeStatusHandler}
              >
                <FaCircleCheck className=" w-5 h-5 lg:w-8 lg:h-8 fill-primaryColor-1 absolute left-[20px] -top-[8px]  lg:-top-[10px] lg:left-[5px]" />
              </button>
            </div>
          )}
        </div>
        {/* Files Uploaded section */}
        <div className="flex flex-col ">
          <span className="text-[12px] md:text-[16px] lg:text-[18px] font-bold leading-[40px] mb-[10px]">
            فایل هایی که تا کنون آپلود کرده اید
          </span>
          <div className="w-[full] h-[80px] px-[5px]  md:h-[144px] lg:h-[144px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-3 tracking-[0.42px] border bg-neutralColor-5  border-neutralColor-4 rounded-[5px] flex items-center overflow-x-scroll overflow-y-hidden py-[77px] ">
            {ticketFiles && ticketFiles.length > 0 ? (
              ticketFiles.map((file) => {
                return (
                  <img
                    key={file.id}
                    placeholder="blur"
                    blurdataurl={`data:image/pdf;base64,${
                      file?.fileData || ""
                    }`}
                    src={`data:image/pdf;base64,${file?.fileData || ""}`}
                    alt="ticket image"
                    className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px] ml-[20px] md:ml-[40px]"
                  />
                );
              })
            ) : (
              <div className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-3 tracking-[0.42px] flex items-center">
                <span>شما تا کنون فایلی آپلود نکرده اید</span>
              </div>
            )}
          </div>
        </div>
        {/* ticket Section */}
        <div className="flex flex-col mt-[10px] gap-y-[20px]">
          {/* Ticket Details */}
          {lstTicketDettailBean &&
            lstTicketDettailBean.length > 0 &&
            lstTicketDettailBean
              .sort((a, b) => new Date(a.logDateTime) - new Date(b.logDateTime))
              .map((ticket, index) => {
                return (
                  <div
                    key={ticket?.id || index}
                    className={`w-full  p-4 flex-col  rounded-[5px] ${
                      ticket?.userSender == cookies.nationalCode
                        ? "bg-neutralColor-5"
                        : "bg-primaryColor-5"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[12px] md:text-[14px] lg:text-[16px] font-bold text-neutralColor-3 mb-[12px]">
                      {/* senderInfo */}
                      <div className="flex gap-x-[12px] ">
                        {/* Avatar */}
                        <div className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] rounded-full bg-neutralColor-4 flex items-center justify-center">
                          <BiSolidUser className="fill-neutralColor-3 w-[15px] h-[15px] md:w-[20px] md:h-[20px]" />
                        </div>
                        {/* senderName */}
                        <div className="flex gap-x-[5px] items-center ">
                          <span>{ticket?.firstName || ""}</span>
                          <span>{ticket?.lastName || ""}</span>
                        </div>
                      </div>
                      {/* dateInfo */}
                      <div>
                        <span>
                          {persianJs(`${ticket?.logDateTime || ""}`)
                            .englishNumber()
                            .toString()}
                        </span>
                      </div>
                    </div>
                    {/* Tickets Desc */}
                    <div
                      className={`${
                        ticket?.ticketDoc?.length > 100 && ticketDocStatus
                          ? "truncate"
                          : ticket?.ticketDoc?.length > 100 && !ticketDocStatus
                          ? "whitespace-pre-line"
                          : ""
                      } mb-[10px] `}
                    >
                      <span className="">{ticket?.ticketDoc || ""}</span>
                    </div>
                    <span
                      onClick={ticketLengthHandler}
                      className="text-[14px] underline cursor-pointer font-normal  text-neutralColor-3"
                    >
                      {ticket?.ticketDoc?.length > 100 && ticketDocStatus
                        ? "ادامه متن"
                        : ticket?.ticketDoc?.length > 100 && !ticketDocStatus
                        ? "بستن متن"
                        : ""}
                    </span>
                  </div>
                );
              })}
        </div>
      </div>
      {/* Text section */}
      {ticketHeader.statusId == 4 ? (
        <div className="mt-[50px] text-[14px] mb-[50px] text-neutralColor-3 flex items-center justify-center">
          <span>
            برای تیکت با وضعیت بسته امکان ثبت پاسخ وجود ندارد . در صورت نیاز
            تیکت جدید ثبت نمایید.
          </span>
        </div>
      ) : (
        <form
          onSubmit={formik.handleSubmit}
          className="flex items-center w-full h-auto  sticky bottom-0 bg-white  mt-[20px] lg:w-[1040px]"
        >
          {/* textContent */}
          <div className="w-full min-h-[52px]  px-[16px] flex flex-col items-start border-2 border-neutralColor-4 rounded-[25px] lg:rounded-[10px]  lg:min-h-[178px] relative ml-[14px]  bg-neutralColor-5 overflow-hidden ">
            <div className="flex w-full items-center py-[5px]">
              <textarea
                readOnly={ticketHeader.statusId == 4 && "on"}
                name="ticketdoc"
                ref={textareaRef}
                placeholder="پاسخ خود را وارد کنید..."
                className="w-full ml-[20px] px-[10px] rounded-[25px] text-[14px] font-normal leading-[32px] min-h-[52px] lg:min-h-[178px] lg:w-[600px]"
                style={{ height: textareaHeight, overflowY: "hidden" }}
                onInput={handleTextareaInput}
                value={formik.values?.ticketdoc || ""}
                onChange={formik.handleChange}
              />
              <input
                type="file"
                className=" lg:hidden w-[20px] absolute left-[10px] z-50 opacity-0"
                onChange={changeFileHandler}
              />
              <Image
                width={25}
                height={25}
                alt="uploadFile"
                src="/assets/images/grayUploadFile.svg"
                className="w-[15px] h-[16px] md:w-[22.8px] md:h-[24px]  absolute left-[10px] lg:hidden"
              />
              {/* Desktop uploadFile section */}
              <div
                className={`hidden lg:flex w-[142px] h-[55px] bg-primaryColor-5  border border-dashed border-primaryColor-1 py-[8px] px-4 rounded-[5px] mt-[107px] mr-[55px] cursor-pointer ${
                  !formik.values.ticketdoc && "opacity-30 cursor-not-allowed"
                }`}
              >
                <input
                  type="file"
                  className="w-[150px] z-50 opacity-0 cursor-pointer "
                  onChange={changeFileHandler}
                />
                <Image
                  width={25}
                  height={25}
                  alt="uploadFile"
                  src="/assets/images/upload.svg"
                  className="hidden lg:flex w-[15px] h-[16px]  absolute left-[295px] top-[137px]  cursor-pointer"
                />
                <span className="whitespace-nowrap z-20 w-[68px] h-[28px] absolute left-[205px] top-[135px] text-primaryColor-1 text-[16px] font-medium cursor-pointer ">
                  آپلود فایل
                </span>
              </div>
              <button
                disabled={!formik.values.ticketdoc}
                className={`hidden lg:flex w-[142px] h-[55px] bg-primaryColor-1 py-[8px] px-4 rounded-[5px] absolute right-[855px] top-[120px] ${
                  !formik.values.ticketdoc && "opacity-30 cursor-not-allowed"
                }`}
              >
                <span className="whitespace-nowrap  w-[68px] h-[28px] absolute mt-[5px] text-white text-[16px] font-medium ">
                  {!isLoading ? "ارسال پاسخ" : ""}
                </span>
                <div className="absolute left-[50px] top-[25px]">
                  {isLoading && (
                    <ThreeDots
                      height="40"
                      width="40"
                      radius="9"
                      color="#FAFAFA"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClassName=""
                      visible={true}
                    />
                  )}
                </div>
                {!isLoading && (
                  <Image
                    width={25}
                    height={25}
                    alt="sendTicket"
                    src="/assets/images/whiteSendTicket.svg"
                    className="hidden lg:flex w-[15px] h-[16px]  absolute mr-[95px] mt-[10px]"
                  />
                )}
              </button>
            </div>
            {/* uploaded file section */}
            {selectedFiles && selectedFiles.length > 0 && (
              <div className="flex  mt-[10px] mb-[20px] overflow-x-scroll w-full ">
                {selectedFiles?.map((file, index) => (
                  <div key={index}>
                    <div className="flex   items-center md:justify-start   w-fit h-[27px]  md:h-[44px]  md:rounded-[30px] rounded-[15px] border border-secondaryColor-1 mr-[7.88px] gap-x-[5px] md:gap-x-[15px] justify-center md:pr-[2px]">
                      <BsFillXCircleFill
                        onClick={removeFileHandler}
                        className="fill-errorColor-1 w-4 h-4 md:w-[30px] md:h-[30px] mr-2 cursor-pointer"
                      />
                      <span className="whitespace-nowrap text-[12px] md:text-[16px] px-[7px] md:-mr-3 ">
                        {`${file?.fileName || ""}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/*Mobile Send Button */}
          <button type="submit">
            <Image
              width={25}
              height={25}
              alt="sendTicket"
              src="/assets/images/sendTicket.svg"
              className="ml-[10px] lg:hidden"
            />
          </button>
        </form>
      )}
    </div>
  );
};

export default TicketDetails;

export async function getServerSideProps(ctx) {
  try {
    const { params, req } = ctx;
    const ticketId = params.ticketId;
    const token = req.cookies.Token;
    const { data } = await GetTicketDetails(ticketId, token);
    return {
      props: {
        ticketInfo: data,
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
