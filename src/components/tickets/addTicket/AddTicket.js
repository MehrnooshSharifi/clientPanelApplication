import Image from "next/image";
import { BsFillXCircleFill } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";

const AddTicket = ({
  formik,
  typeIdHandler,
  isOpenStatus,
  setIsOpenStatus,
  isLoading,
  selectedFiles,
  changeFileHandler,
  removeFileHandler,
}) => {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-y-[30px] lg:-mt-[10px]"
    >
      <div className="flex flex-col gap-y-[36px] md:flex-row md:gap-x-[20px]  lg:w-1/2">
        {/* ticketTitle */}
        <div className="flex flex-col relative w-full ">
          <label
            className=" w-[90px] h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
            htmlFor="title"
          >
            <span className="">عنوان تیکت</span>
          </label>
          <span className="absolute text-errorColor-2 right-[80px] -top-[17px] md:-top-[18px] md:right-[80px] lg:right-[80px]">
            *
          </span>
          <input
            maxLength={30}
            autoComplete="off"
            className="h-[50px] lg:h-[48px] lg:w-[310px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>
        {/* ticketUnit */}
        <div className="flex flex-col relative w-full ">
          <label
            className="w-[50px] flex flex-col px-[10px] absolute -top-2 text-[12px] mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="typeId"
          >
            <span className={`${isOpenStatus && "text-primaryColor-1"}`}>
              واحد
            </span>
          </label>
          <span className="absolute text-errorColor-2 right-[42px] -top-[12px] md:-top-[15px]  lg:right-[42px]">
            *
          </span>
          <div
            onClick={() => setIsOpenStatus(!isOpenStatus)}
            className={`h-[50px] lg:h-[48px] lg:w-[310px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer ${
              isOpenStatus && "border-2 border-primaryColor-1"
            }`}
          >
            {formik.values.typeId == 1
              ? "فنی"
              : formik.values.typeId == 2
              ? "مالی"
              : formik.values.typeId == 3
              ? "بازرگانی"
              : formik.values.typeId == 4
              ? "شکایات"
              : "اطلاعیه"}
          </div>
          <div
            className={`absolute left-4 top-[16px] cursor-pointer ${
              isOpenStatus && "transition-all duration-300 rotate-180"
            }`}
            onClick={() => setIsOpenStatus(!isOpenStatus)}
          >
            <Image
              src="/assets/images/down.svg"
              alt="down"
              width={20}
              height={20}
            />
          </div>
          {isOpenStatus && (
            <div className="flex z-20 w-full text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px] px-[12px]  absolute top-[52px] border-2 border-neutralColor-4">
              <div
                id="1"
                value={1}
                className="cursor-pointer w-full  h-[45px] text-center  flex justify-center items-center pt-[10px]  "
                onClick={() => typeIdHandler(1)}
              >
                <div className="w-full border-b lg:pb-[10px] pb-[18px] ">
                  <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 w-full lg:h-[38px] lg:rounded-[5px] flex items-center justify-center  ">
                    فنی
                  </span>
                </div>
              </div>
              <div
                id="2"
                value={2}
                className="cursor-pointer w-full  lg:h-[63px] h-[70px] text-center  flex justify-center items-center pt-[10px] "
                onClick={() => typeIdHandler(2)}
              >
                <div className="w-full border-b pb-[15px]  lg:pt-[5px] lg:pb-[9px]">
                  <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 w-full lg:h-[38px] lg:rounded-[5px] flex items-center justify-center ">
                    مالی
                  </span>
                </div>
              </div>
              <div
                id="3"
                value={3}
                className="cursor-pointer w-full h-[30px] lg:h-[40px] text-center  flex justify-center items-center pt-[10px] "
                onClick={() => typeIdHandler(3)}
              >
                <div className="w-full border-b pb-[15px] lg:-pt-[10px] lg:pb-[8px] ">
                  <span className=" hover:bg-secondaryColor-5 mt-4 active:bg-secondaryColor-3 w-full lg:h-[38px] lg:rounded-[5px] flex items-center justify-center ">
                    بازرگانی
                  </span>
                </div>
              </div>
              <div
                id="4"
                value={4}
                className="cursor-pointer w-full h-[55px]  lg:h-[60px] text-center  flex justify-center items-center pt-[10px] "
                onClick={() => typeIdHandler(4)}
              >
                <div className="w-full border-b pt-[40px] pb-[15px] lg:pb-[10px] lg:pt-[30px]">
                  <span className=" hover:bg-secondaryColor-5  active:bg-secondaryColor-3 w-full lg:h-[38px] lg:rounded-[5px] flex items-center justify-center ">
                    شکایت
                  </span>
                </div>
              </div>
              <div
                id="5"
                value={5}
                className="cursor-pointer w-full  h-[65px] text-center  flex justify-center items-center pt-[10px]  "
                onClick={() => typeIdHandler(5)}
              >
                <div className="w-full  pt-[15px] ">
                  <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 w-full lg:h-[38px] lg:rounded-[5px] flex items-center justify-center  ">
                    اطلاعیه
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-y-[36px] md:flex-row md:gap-x-[20px]">
        {/* ticketDesc */}
        <div className="flex flex-col relative z-0  w-full">
          <label
            className=" w-[117px] flex flex-col px-[10px] absolute mr-2 -top-2 text-[12px] font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="ticketdoc"
          >
            <span className="">توضیحات تیکت</span>
          </label>
          <span className="absolute text-errorColor-2 right-[100px] -top-[14px] md:-top-[16px] md:right-[100px] lg:right-[100px]">
            *
          </span>
          <textarea
            className="h-[130px] md:h-[140px] lg:w-[640px] lg:h-[134px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            id="ticketdoc"
            name="ticketdoc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.ticketdoc}
          />
        </div>
        {/* UploadFile */}
        <div className=" w-full h-[140px] lg:-mt-[85px]">
          <div className="lg:flex lg:items-center lg:justify-center ">
            <div
              className={`h-[140px]   lg:h-[219px]  w-full  bg-neutralColor-5 border-2 border-dashed rounded-[5px] border-primaryColor-1 rounded-5px pt-[74.5px] mb-[37.64px] lg:w-[350px]`}
            >
              {/* uploadFileImage */}
              <div className="flex flex-col items-center justify-center gap-y-[10px] ">
                <input
                  type="file"
                  className={`h-[150px] opacity-0 -mt-[80px] cursor-pointer `}
                  onChange={changeFileHandler}
                />
                <Image
                  className={`-mt-[120px]`}
                  alt="uploadFile"
                  src="/assets/images/uploadFile.svg"
                  width={32}
                  height={32}
                />
                <span className="text-[12px] text-neutralColor-1 font-medium md:text-[16px] leading-[20.73px] md:leading-[27.64px] absolute top-[570px] md:top-[390px] lg:top-[300px]">
                  لطفاً فایل مورد نظر را انتخاب کنید
                </span>
                <div className="absolute top-[590px] md:top-[420px] lg:top-[330px] text-neutralColor-3 text-[10px] font-normal md:text-[12px] lg:text-[14px] lg:font-medium ">
                  <span>حداکثر حجم 200 مگابایت</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UploadedFile section */}
      <span className="w-[109px] -mb-[25px] md:-mb-[50px] -mt-[20px] md:mt-[10px]  text-[12px] md:text-[14px] font-medium text-neutralColor-1  mr-[35px] md:mr-[55px] flex justify-center whitespace-nowrap">
        فایل هایی که تا کنون آپلود شده
      </span>
      <div className="flex flex-col h-[100px]   md:h-[130px] lg:h-[144px] border border-neutralColor-4 relative rounded-[5px] mb-[20px] md:mt-[30px] overflow-x-scroll overflow-y-hidden">
        {selectedFiles && selectedFiles.length > 0 ? (
          <div className="flex  mt-[30px] gap-x-[100px] md:gap-x-[100px] lg:gap-x-[150px] ">
            {selectedFiles.map((file, index) => (
              <div key={index}>
                <div className="flex items-center justify-center w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] absolute bg-neutralColor-5 mr-[40px] lg:mr-[63px] rounded-[8px]">
                  <BsFillXCircleFill
                    onClick={() => removeFileHandler(index)}
                    className="fill-errorColor-1 absolute cursor-pointer ring-2 ring-neutralColor-5 rounded-full -top-[15px] -right-[10px] w-[20px] h-[20px]  lg:w-[30px] lg:h-[30px]"
                  />
                  <Image
                    width={50}
                    height={50}
                    src={file.imageUrl}
                    alt={file.fileName}
                    className="lg:w-[90px] lg:h-[90px]  rounded-md object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center mt-[32px] md:mt-[40px] lg:mt-[45px]">
            <div className="flex items-center justify-center flex-col gap-y-[5px]">
              <Image
                alt="noAddedFile"
                width={50}
                height={50}
                src="/assets/images/noAddedFile.svg"
                className="w-[17px] h-[16px] md:w-[26px] md:h-[24px] "
              />
              <span className="text-neutralColor-3 text-[10px] md:text-[14px] lg:text-[16px] font-medium ">
                شما تا کنون فایلی آپلود نکرده اید
              </span>
            </div>
          </div>
        )}
      </div>
      {/* submit */}
      <button
        disabled={!formik.values.title | !formik.values.ticketdoc}
        type="submit"
        className={`bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium   h-[48px] lg:w-[105px] lg:text-[16px]  lg:mt-[200px] md:mt-[230px]  -mt-[30px] mb-[20px] ${
          !formik.values.title | !formik.values.ticketdoc &&
          "disabled  opacity-30 cursor-not-allowed"
        }`}
      >
        <div className="flex justify-center relative">
          <span> ثبت تیکت</span>
          <div className="absolute left-[125px] top-[7px]">
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
      {/* openIsActiveSection */}
    </form>
  );
};

export default AddTicket;
