import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { DateObject } from "react-multi-date-picker";
import { BsDatabaseFillX } from "react-icons/bs";
import { ServiceCallReportByApp } from "@/server/Service";
import Image from "next/image";
import CallServicesReportsTable from "./CallServicesReportsTable";
import { BiSearch } from "react-icons/bi";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
const CallServicesReportsForm = () => {
  const [cookies] = useCookies();
  const router = useRouter();
  const [openFilter, setOpenFilter] = useState(true);
  const [startvalue, setStartValue] = useState(new DateObject());
  const [endvalue, setEndValue] = useState(new DateObject());
  const [callServicesReports, setCallServicesReports] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // let currentDate = new Date();
  // let currentMonth = currentDate.getMonth();
  // let lastMonth = currentMonth - 1;
  //TODO if we want just show exactly last mount we have to pass lastMonth same as Argument to const dateRange = currentDate.setMonth({lastMonth});
  // const dateRange = currentDate.setMonth();
  const dateObject = {
    dateFrom: [
      startvalue.year.toString(),
      `${
        startvalue.month.number.toString().length == 1
          ? "0" + startvalue.month.number.toString()
          : startvalue.month.number
      }`,
      startvalue.day.toString(),
    ].join("/"),
    dateTo: [
      endvalue.year.toString(),
      `${
        endvalue.month.number.toString().length == 1
          ? "0" + endvalue.month.number.toString()
          : endvalue.month.number
      }`,
      endvalue.day.toString(),
    ].join("/"),
  };
  useEffect(() => {
    if (!cookies.nationalCode) {
      router.push("/");
    }
  }, [cookies.nationalCode, router]);
  const { appId } = router.query;
  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await ServiceCallReportByApp(dateObject, appId);

    if (res.data) {
      setCallServicesReports(res.data);
      setOpenFilter(false);
      setIsLoading(false);
    }
    if (res.isSuccess && res.data.length == 0) {
      toast("با فیلترهای انتخاب شده اطلاعاتی برای نمایش موجود نیست.", {
        style: {
          fontSize: 14,
          backgroundColor: "#FAFAFA",
          color: "#212121",
          width: 400,
          height: 100,
          lineHeight: 2,
        },
        icon: (
          <BsDatabaseFillX className="w-[30px] h-[30px] fill-primaryColor-1 " />
        ),
      });
    }
  };
  return (
    <>
      <div
        className={` h-[500px]  lg:w-[1024px] flex flex-col gap-y-[20px] ${
          callServicesReports && openFilter && "overflow-y-scroll"
        }`}
      >
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-y-[36px] mt-[5px]"
        >
          {/* Desktop filterForm */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-[20px]">
            <span className="hidden lg:block">فیلتر کن :</span>
            <div className="flex flex-col gap-y-[44px] md:flex-row md:gap-x-[20px]">
              <div className="flex flex-col relative w-full  ">
                <label
                  className=" w-[63px] h-[20px] absolute -top-2 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
                  htmlFor="dateFrom"
                >
                  <span className="">از تاریخ</span>
                </label>
                <div className="flex border  border-neutralColor-3 rounded-[5px] w-full  px-4 lg:w-[310px]  items-center">
                  <DatePicker
                    // minDate={dateRange}
                    // maxDate={new Date()}
                    value={startvalue}
                    onChange={setStartValue}
                    calendar={persian}
                    locale={persian_fa}
                    className="custom-calendar"
                    style={{
                      outline: "none",
                      fontSize: "14px",
                      color: "#212121",
                      background: "#FFFFFF",
                      width: "100%",
                      border: "none",
                      height: "48px",
                      paddingRight: "25px",
                      cursor: "pointer",
                    }}
                    containerStyle={{
                      width: "100%",
                    }}
                    inputClass="outline:none"
                  />
                  <Image
                    src="/assets/images/calendar.svg"
                    alt="Date Picker"
                    width={34}
                    height={34}
                    className="absolute left-4 cursor-pointer "
                  />
                </div>
              </div>
              <div className="flex flex-col relative w-full  ">
                <label
                  className=" z w-[63px] h-[20px] absolute -top-2 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
                  htmlFor="dateFrom"
                >
                  <span className="">تا تاریخ</span>
                </label>
                <div className="flex border  border-neutralColor-3 rounded-[5px]  px-4 lg:w-[310px] items-center ">
                  <DatePicker
                    // minDate={dateRange}
                    // maxDate={new Date()}
                    value={endvalue}
                    onChange={setEndValue}
                    calendar={persian}
                    locale={persian_fa}
                    className="custom-calendar"
                    style={{
                      outline: "none",
                      fontSize: "14px",
                      color: "#212121",
                      background: "#FFFFFF",
                      width: "100%",
                      border: "none",
                      height: "48px",
                      paddingRight: "25px",
                      cursor: "pointer",
                    }}
                    containerStyle={{
                      width: "100%",
                    }}
                    inputClass="outline:none"
                  />
                  <Image
                    src="/assets/images/calendar.svg"
                    alt="Date Picker"
                    width={34}
                    height={34}
                    className="absolute left-4 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* submit */}
            <button
              type="submit"
              className="bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  h-[48px] lg:w-[137px] lg:text-[16px] "
            >
              <div className="flex justify-center relative">
                <BiSearch
                  className={isLoading ? "hidden" : "block w-6 h-6 ml-[4px]"}
                />
                <div className={isLoading ? "hidden" : "block"}>جستجو کن</div>
                <div className="absolute -top-[18px]">
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
              </div>
            </button>
          </div>
          {/* MobileAndTabletFilterForm */}
          {openFilter && (
            <div className="flex flex-col gap-y-[30px] lg:hidden">
              <span className="hidden lg:block">فیلتر کن :</span>
              <div className="flex flex-col gap-y-[44px] md:flex-row md:gap-x-[20px]">
                <div className="flex flex-col relative w-full  ">
                  <label
                    className=" w-[63px] h-[20px] absolute -top-2 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
                    htmlFor="dateFrom"
                  >
                    <span className="">از تاریخ</span>
                  </label>
                  <div className="flex border  border-neutralColor-3 rounded-[5px] w-full  px-4 lg:w-[310px]  items-center">
                    <DatePicker
                      // minDate={dateRange}
                      // maxDate={new Date()}
                      value={startvalue}
                      onChange={setStartValue}
                      calendar={persian}
                      locale={persian_fa}
                      className="custom-calendar"
                      style={{
                        outline: "none",
                        fontSize: "14px",
                        color: "#212121",
                        background: "#FFFFFF",
                        width: "100%",
                        border: "none",
                        height: "48px",
                        paddingRight: "25px",
                        cursor: "pointer",
                      }}
                      containerStyle={{
                        width: "100%",
                      }}
                      inputClass="outline:none"
                    />
                    <Image
                      src="/assets/images/calendar.svg"
                      alt="Date Picker"
                      width={34}
                      height={34}
                      className="absolute left-4 cursor-pointer "
                    />
                  </div>
                </div>
                <div className="flex flex-col relative w-full  ">
                  <label
                    className=" z w-[63px] h-[20px] absolute -top-2 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
                    htmlFor="dateFrom"
                  >
                    <span className="">تا تاریخ</span>
                  </label>
                  <div className="flex border  border-neutralColor-3 rounded-[5px]  px-4 lg:w-[310px] items-center ">
                    <DatePicker
                      // minDate={dateRange}
                      // maxDate={new Date()}
                      value={endvalue}
                      onChange={setEndValue}
                      calendar={persian}
                      locale={persian_fa}
                      className="custom-calendar"
                      style={{
                        outline: "none",
                        fontSize: "14px",
                        color: "#212121",
                        background: "#FFFFFF",
                        width: "100%",
                        border: "none",
                        height: "48px",
                        paddingRight: "25px",
                        cursor: "pointer",
                      }}
                      containerStyle={{
                        width: "100%",
                      }}
                      inputClass="outline:none"
                    />
                    <Image
                      src="/assets/images/calendar.svg"
                      alt="Date Picker"
                      width={34}
                      height={34}
                      className="absolute left-4 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              {/* submit */}
              <button
                type="submit"
                className="bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  h-[48px] lg:w-[137px] lg:text-[16px] "
              >
                <div className="flex justify-center relative">
                  <HiOutlineAdjustmentsVertical
                    className={
                      isLoading ? "hidden" : " block w-6 h-6 ml-[9.25px]"
                    }
                  />
                  <div className={isLoading ? "hidden" : "block"}>فیلتر کن</div>
                  <div className="absolute -top-[18px]">
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
                </div>
              </button>
            </div>
          )}
          {!openFilter && (
            <button
              onClick={() => setOpenFilter(true)}
              type="button"
              className="bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium   h-[48px] lg:hidden  -mt-[16px] "
            >
              نمایش فیلترها
            </button>
          )}
        </form>
        {callServicesReports && callServicesReports.length > 0 && (
          <CallServicesReportsTable callServicesReports={callServicesReports} />
        )}
      </div>
    </>
  );
};

export default CallServicesReportsForm;
