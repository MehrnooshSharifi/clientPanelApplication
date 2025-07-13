import { useFormik } from "formik";
import * as Yup from "yup";
// import { suggestionPrices } from "../../../../../data/increaseCreditData/IncreaseCreditData";
// import persianJs from "persianjs";
import { GoCheckCircle } from "react-icons/go";
import { useEffect, useState } from "react";
import { paymentGateways } from "../../../../../data/increaseCreditData/PaymentGatewaysData";
import { ThreeDots } from "react-loader-spinner";
import { Cookies, useCookies } from "react-cookie";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { PaymentRequest } from "@/server/Service";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
const IncreaseCredit = () => {
  const router = useRouter();
  const { query } = router;
  const status = query.status;
  const RRN = query.RRN;
  const [cookies] = useCookies();
  const [selectPayItem, setSelectPayItem] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [selectePricedItem, setSelectedPriceItem] = useState();
  // const [selectedPrice, setSelectedPrice] = useState();
  // const selectPriceHandler = (id, price) => {
  //   setSelectedPriceItem(id);
  //   setSelectedPrice(price);
  // };
  useEffect(() => {
    if (status == 0) {
      const toastId = toast.custom(
        (t) => (
          <div className="flex flex-col items-center mt-[200px] w-[300px] h-[300px] bg-neutralColor-5 shadow-lg rounded-md ">
            <div className="flex flex-col mt-[50px] items-center">
              <div className="border border-successColor-2 bg-naturalColor-2 rounded-full w-[50px] h-[50px] flex items-center justify-center -mt-[80px] mb-[30px]">
                <FaCheckCircle className="w-10 h-10 fill-successColor-2" />
              </div>
              <div className="flex flex-col  items-center gap-y-[10px] top-[140px] text-successColor-2 mb-[50px]">
                <div>
                  <span>تراکنش موفق</span>
                </div>
                <div>
                  <span>از خرید شما متشکریم</span>
                </div>
              </div>
              <div className="transition-all duration-700 rounded-3xl flex  top-[250px] mb-[70px] ">
                <div className="flex gap-x-[70px]">
                  <span>شماره پیگیری</span>
                  <span>{RRN}</span>
                </div>
              </div>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-[300px] h-[48px]  bg-successColor-2 rounded-b-md rounded-none  p-4 flex items-center justify-center  font-medium text-naturalColor-2 "
              >
                متوجه شدم
              </button>
            </div>
          </div>
        ),
        { duration: 8000 }
      );
      setIsLoading(false);
      return () => toast.dismiss(toastId);
    } else if (status == -1) {
      const toastId = toast.custom(
        (t) => (
          <div className="flex flex-col items-center mt-[200px] w-[300px] h-[150px] bg-neutralColor-5 shadow-lg rounded-md  ">
            <div className="flex flex-col mt-[50px] items-center">
              <div className="border border-errorColor-2 bg-naturalColor-2 rounded-full w-[50px] h-[50px] flex items-center justify-center -mt-[80px] mb-[30px]">
                <FaCheckCircle className="w-10 h-10 fill-errorColor-2" />
              </div>
              <div className="flex flex-col  items-center gap-y-[10px] top-[140px] text-errorColor-2 mb-[50px]">
                <div>
                  <span>تراکنش ناموفق</span>
                </div>
              </div>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-[300px] h-[48px]  bg-errorColor-2 rounded-b-md rounded-none  p-4 flex items-center justify-center  font-medium text-naturalColor-2 "
              >
                متوجه شدم
              </button>
            </div>
          </div>
        ),
        { duration: 8000 }
      );
      setIsLoading(false);
      return () => toast.dismiss(toastId);
    }
  }, [status, RRN]);

  const nationalCode = cookies.nationalCode;
  const selectPaymentHandler = (id) => {
    // setSelectPayItem(id);
    setSelectPayItem(!selectPayItem);
  };
  const validationSchema = Yup.object({
    amount: Yup.string().required("مبلغ را وارد کنید"),
  });
  const onSubmit = async (values, { resetForm }) => {
    console.log(router);
    setIsLoading(true);
    const amountWithoutCommas = Number(values.amount.replace(/,/g, ""));
    const res = await PaymentRequest({
      ...values,
      amount: amountWithoutCommas,
      pathName: router.pathname,
    });
    if (res.isSuccess && res.statusCode == 0) {
      const { data } = res;
      const { token, url } = data;
      const userURL = url + token;
      router.push(userURL);
    }
  };
  const initialValues = {
    amount: 0,
    nationalCode: `${nationalCode}`,
    pathName: router.pathname,
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: false,
  });
  const formatNumber = (value) => {
    return Number(value).toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };
  const handleAmountChange = (e) => {
    const formattedValue = formatNumber(e.target.value.replace(/,/g, ""));
    formik.handleChange({
      target: {
        name: "amount",
        value: formattedValue,
      },
    });
  };
  return (
    <div className=" flex flex-col mt-[10px] md:mt-[30px] mx-[26px] mr-[20px] lg:pr-[10px] lg:mx-auto lg:w-[1030px]">
      {/* Title */}
      <div className="flex gap-x-[5px] mb-[35px] md:mb-[50px] lg:mb-[39.93px] h-[31px] items-center text-[14px] md:text-[18px] lg:text-[20px] font-medium lg:font-bold leading-normal lg:mr-[20px]">
        افزایش اعتبار
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="col-span-12 md:col-span-6  relative h-[48px] lg:mr-[20px] mb-[40.82px] md:mb-[45px] lg:mb-[80px]">
          <label className="absolute px-[10px] md:px-[10px] bottom-[40px] mr-[5px]  bg-white  text-neutralColor-2 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
            مبلغ را وارد کنید
          </label>
          <input
            type="text"
            dir="ltr"
            autoComplete="off"
            onBlur={formik.handleBlur}
            name="amount"
            onChange={handleAmountChange}
            value={formik.values.amount}
            className="w-full h-[48px] text-[14px] md:text-[16px] lg:text-[14px] font-medium  leading-normal text-neutralColor-2 tracking-[0.42px] border  px-4 py-3 pl-[50px]  border-neutralColor-4 rounded-[5px] lg:max-w-[360px] "
          />
          <label className="absolute px-[10px] md:px-[10px] bottom-[15px] -mr-[50px]  text-neutralColor-3 text-[12px] md:text-[14px] lg:text-[16px]  font-medium md:font-bold lg:font-medium leading-normal">
            ریال
          </label>
          {formik.touched.amount && formik.errors.amount && (
            <div className="w-[202px] text-errorColor-2 text-[12px] pr-2 pt-1">
              {formik.errors.amount}
            </div>
          )}
        </div>
        <div className="mr-[3px] lg:mr-[20px] text-[12px] md:text-[16px] lg:text-[18px] font-medium leading-normal text-neutralColor-1 mb-[20px] md:mb-[45px] lg:mb-[20px]">
          درگاه پرداخت مورد نظر را انتخاب کنید
        </div>
        {/* \PaymentGateway */}
        <div className="grid grid-cols-12 lg:mr-[20px] gap-[24px] md:gap-[35px] lg:gap-[16.5px] mb-[20px] md:mb-[35px] lg:mb-[130px] ">
          {paymentGateways.map((pay) => {
            return (
              <div
                key={pay.id}
                onClick={() => selectPaymentHandler(pay.id)}
                className={`flex col-span-6 md:col-span-4 lg:col-span-3 bg-neutralColor-5 hover:bg-primaryColor-5 cursor-pointer rounded-[10px] h-[147px] md:h-[168px] lg:max-w-[245.5px] ${
                  selectPayItem == pay.id && !formik.values.amount
                    ? "border-[2px] lg:border-[3px] border-primaryColor-1 bg-primaryColor-5"
                    : ""
                }`}
              >
                <div className="relative">
                  <GoCheckCircle
                    className={`absolute fill-successColor-1 w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px] rounded-full -top-[10px] -right-[10px] bg-white ${
                      selectPayItem == pay.id ? "block" : "hidden"
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-y-[5px] md:gap-y-[15px] py-[21px] items-center justify-center rounded-[10px] flex-1">
                  <div className="flex-1">
                    <Image
                      width={25}
                      height={25}
                      className="w-[100px] h-[100px]"
                      src={pay.image}
                      alt={pay.title}
                    />
                  </div>
                  <div className="">
                    <span className="">{pay.title}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          disabled={!selectPayItem || !formik.values.amount}
          type="submit"
          className={`bg-primaryColor-1 text-naturalColor-2 w-full  h-[48px] flex items-center justify-center rounded-[5px] text-[14px] font-medium md:text-[16px] md:font-bold lg:w-[160px] lg:mr-[20px] ${
            !selectPayItem || !formik.values.amount
              ? "opacity-30 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
        >
          <div className="flex justify-center relative">
            <span className={`${isLoading ? "hidden" : "block"}`}>
              افزایش اعتبار
            </span>
            <div className="absolute -top-[17px] block">
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
      </form>
    </div>
  );
};

export default IncreaseCredit;
