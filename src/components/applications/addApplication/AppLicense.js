import Image from "next/image";
import { BsFillXCircleFill } from "react-icons/bs";
const AppLicense = ({
  formik,
  selectedFile,
  changeFileHandler,
  removeFileHandler,
  setStep,
}) => {
  return (
    <form
      className="flex flex-col gap-y-[40px] "
      onSubmit={formik.handleSubmit}
    >
      {/* choose file section */}
      <div className="lg:flex lg:items-center lg:justify-center">
        <div
          className={`h-[212px]  bg-neutralColor-5 border-2 border-dashed rounded-[5px] border-primaryColor-1 rounded-5px pt-[74.5px] mb-[37.64px] lg:w-[350px] ${
            selectedFile && "cursor-not-allowed disabled opacity-30"
          }`}
        >
          {/* uploadFileImage */}
          <div className="flex flex-col items-center justify-center gap-y-[10px] ">
            <input
              type="file"
              className={`h-[150px] opacity-0 cursor-pointer ${
                selectedFile && "hidden"
              }`}
              onChange={changeFileHandler}
            />
            <Image
              className={`-mt-[170px] ${selectedFile && "-mb-[185px]"}`}
              alt="uploadFile"
              src="/assets/images/uploadFile.svg"
              width={32}
              height={32}
            />
            <span className="text-[12px] text-neutralColor-1 font-medium md:text-[16px] leading-[20.73px] md:leading-[27.64px] absolute top-[450px] md:top-[550px] lg:top-[520px]">
              لطفاً فایل مورد نظر را انتخاب کنید
            </span>
            <div className="absolute top-[470px] md:top-[580px] lg:top-[550px] text-neutralColor-3 text-[10px] font-normal md:text-[12px] lg:text-[14px] lg:font-medium ">
              <span>فرمت فایل :</span>
              <span>PDF</span>
            </div>
          </div>
        </div>
      </div>
      {/* UploadedFile section */}
      <div className="flex flex-col h-[100px]  md:h-[130px] lg:h-[144px] border border-neutralColor-4 relative rounded-[5px] mb-[20px]">
        <span className="w-[109px]  text-[12px] md:text-[14px] font-medium text-neutralColor-2 absolute mr-[35px] md:mr-[55px] -mt-[30px] flex justify-center whitespace-nowrap">
          فایل مجوز که تا کنون آپلود کرده اید
        </span>
        <div className="flex justify-center mt-[30px] ">
          {selectedFile ? (
            <div className="flex items-center md:justify-start mt-[40px]  absolute top-2 md:top-[12px] w-fit h-[27px]  md:h-[44px]  md:rounded-[30px] rounded-[15px] border border-secondaryColor-1 mr-[7.88px] gap-x-[5px] md:gap-x-[15px] justify-center md:pr-[2px]">
              <BsFillXCircleFill
                onClick={removeFileHandler}
                className="fill-errorColor-1 w-4 h-4 md:w-[30px] md:h-[30px] mr-2 cursor-pointer"
              />
              <span className="whitespace-nowrap text-[12px] md:text-[16px] px-[7px] md:-mr-3 ">
                {`${selectedFile.name}`}
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-y-[14px] text-[10px] font-medium text-neutralColor-3 md:text-[14px] lg:text-[16px]">
              <Image
                alt="upload File"
                width={22}
                height={24}
                src="/assets/images/grayUploadFile.svg"
              />
              <span>شما تا کنون فایلی آپلود نکرده اید</span>
            </div>
          )}
        </div>
      </div>
      <button
        disabled={!selectedFile}
        onClick={() => setStep(3)}
        type="button"
        className={`bg-primaryColor-1 text-naturalColor-2  h-[48px] flex items-center justify-center rounded-[5px] text-[14px] -mt-[20px] lg:-mt-[5px] font-medium md:text-[16px] md:font-bold lg:w-[160px] ${
          !selectedFile && "disabled  opacity-30 cursor-not-allowed"
        }`}
      >
        <div className="flex justify-center relative">
          <span>تایید و ادامه</span>
        </div>
      </button>
    </form>
  );
};

export default AppLicense;
