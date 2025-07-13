import Image from "next/image";

const InputComponent = ({
  formik,
  label,
  type,
  name,
  className,
  step,
  isTablet,
  isConfirm,
}) => {
  return (
    <div className="flex flex-col mb-3">
      <label htmlFor={name} className={className} dir="rtl ">
        {label}
        <span
          className={` text-errorColor-2 w-[20px] ${step === 1 && "hidden"} ${
            isTablet && "hidden"
          }`}
        >
          *
        </span>
      </label>
      <input
        className={` pr-[50px] w-[333px] h-[48px] text-[12px] md:text-[14px] lg:text-[16px]  md:w-[360px] lg:w-[396px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2 ${
          step === 1
            ? "max-w-[220px] h-[48px] tracking-[20px] text-[16px] font-black border-none mt-4"
            : ""
        } ${
          isTablet &&
          " max-w-[250px] md:max-w-[267px] pl-[45px] lg:max-w-[300px] lg:h-[45px] tracking-[20px] text-[16px]  font-black  border-white lg:text-[20px] lg:font-black lg:text-xl lg:tracking-[25px]"
        } ${
          formik.touched[name] && formik.errors[name]
            ? "focus:border focus:border-errorColor-2"
            : "focus:border-2 focus:border-primaryColor-1"
        } `}
        type={type}
        name={name}
        {...formik.getFieldProps(name)}
        id={name}
      />
      <div
        className={`absolute mt-[50px]  md:mt-[50px] lg:text-[12px] text-[10px] ${
          isConfirm ? "pt-[15px]" : ""
        }`}
      >
        {formik.touched[name] && formik.errors[name] && (
          <div className="flex gap-x-2 items-center ">
            <Image
              alt="notice"
              width={50}
              height={50}
              src="/assets/images/NewHomePage/notice.svg"
              className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
            />
            <span className="text-red-400">{formik.errors[name]}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputComponent;
