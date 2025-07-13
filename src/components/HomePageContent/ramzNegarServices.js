import Image from "next/image";
import Link from "next/link";
const RamzNegarServices = ({ links }) => {
  return (
    <div
      className="flex flex-col md:mx-auto relative mt-[50.5px]"
      id={links[1].id}
    >
      <div className="flex leading-[31.09px] text-neutralColor-1 gap-x-2 items-center justify-center text-[18px] md:text-[24px] md:leading-[41.45px] lg:text-[32px] lg:leading-[55.27px] lg:mb-[151px] lg:items-center lg:justify-center">
        <p className="font-extrabold">سرویس های</p>
        <p className="">تبادل</p>
      </div>
      {/* cornDotImage */}
      <div className="hidden md:block absolute md:-mr-[140px] lg:right-[5px]">
        <Image
          width={100}
          height={100}
          src="/assets/images/NewHomePage/cornerDot.svg"
          alt="cornerDot"
        />
      </div>
      {/* lineImage */}
      <div className="hidden md:block">
        <Image
          width={150}
          height={150}
          src="/assets/images/NewHomePage/line.svg"
          className="absolute -left-[140px] top-[250px] lg:right-[1100px]"
          alt="lineImage"
        />
      </div>
      {/* authentication */}
      <div className="flex flex-col items-center lg:flex-row relative md:mb-[250px] lg:mr-[40px] lg:mb-[190.7px] h-[450px] mb-[137px]">
        {/* BoxSection */}
        <div className=" relative flex items-center justify-center mt-[60px] mb-[33.14px] lg:mr-[40px]">
          <Image
            width={150}
            height={150}
            alt="authenticationPic"
            src="/assets/images/NewHomePage/authenticationPic.svg"
            className="w-[150px] h-[100px] md:w-[250px] md:h-[150px]  lg:w-[330px] lg:h-[300px] lg:-mr-[150px]"
          />

          <Image
            width={150}
            height={150}
            alt="authenticationTick"
            src="/assets/images/NewHomePage/authenticationTick.svg"
            className="absolute w-[26.35px] h-[55.74px] md:w-[34.83px] md:h-[74.51px]  lg:w-[66.75px] lg:h-[126.28px] right-[45px] top-[60px] md:right-[80px] md:top-[100px] lg:-right-[60px] lg:top-[220px] animate-twBounce animate-infinite animate-duration-[2s]"
          />
        </div>
        {/* DescSection */}
        <div className="flex flex-col items-center lg:items-start lg:absolute lg:right-[400px] ">
          <span className="text-[16px] font-bold leading-[27.64px] md:text-[20px] md:leading-[34.55px] mb-[6px] md:mb-[18px] lg:text-[24px]  lg:font-bold lg:leading-[41.45px] ">
            سرویس های ثبت احوال
          </span>
          <p className="w-[255px] h-[114px] text-[14px] leading-[35px] font-medium text-center text-neutralColor-2   md:text-[16px] md:font-medium md:leading-[45px] lg:text-[20px] lg:font-medium lg:leading-[40px] lg:w-[700px] lg:h-[89px] lg:text-start">
            این مجموعه ارایه دهنده سرویس های احراز هویت هوشمند براساس کارت ملی،
            تغییر رمز کارت ملی، استعلام کارت ملی، استعلام اطلاعات هویتی، استعلام
            تصویر کارت ملی و سایر سرویس های هویتی می‌باشد.
          </p>
        </div>
        <Link
          href=""
          className="hover:bg-naturalColor-2  hover:border-[2px] hover:border-primaryColor-1 hover:text-primaryColor-1 focus:bg-neutralColor-5 focus:border-primaryColor-1 focus:text-primaryColor-1 text-center mt-[80px] md:mt-[180px] w-[202px] h-[48px] lg:w-[223px] lg:absolute lg:right-[820px] lg:top-[200px] cursor-pointer bg-primaryColor-1 text-naturalColor-2 py-[10px] px-[16px] lg:py-[8.5px] text-[16px] lg:text-[18px] leading-[27.64px] lg:leading-[31.09px] lg:mr-[10px]  font-bold rounded-[5px] mb-[139.19px] md:mb-[134.31px] "
        >
          <span>مشاهده سرویس ها</span>
        </Link>
        <div className="hidden lg:block lg:absolute lg:-left-20 top-[370px]">
          <Image
            width={50}
            height={50}
            src="/assets/images/NewHomePage/rightDirection.svg"
            alt="rightDirection"
          />
        </div>
      </div>
      {/* Electronic wallet */}
      <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between mt-[61.63px] lg:mt-0 mb-[120px] md:mb-8">
        {/* DescSection */}
        <div className="flex flex-col items-center lg:items-start  lg:ml-[200px] ">
          {/* LeftDirection */}
          <div className="hidden lg:block absolute top-[880px] -right-[55px]">
            <Image
              width={40}
              height={40}
              src="/assets/images/NewHomePage/leftDirection.svg"
              alt="leftDirection"
            />
          </div>
          <span className="text-[16px] font-bold leading-[27.64px] md:text-[20px] md:leading-[34.55px] mb-[6px] md:mb-[18px] lg:text-[24px]  lg:font-bold lg:leading-[41.45px] ">
            کیف پول الکترونیکی
          </span>
          <p className="w-[255px] h-[114px] text-[14px] leading-[35px] font-medium text-center text-neutralColor-2 md:w-[444px] md:h-[114px] md:text-[16px] md:font-medium md:leading-[45px] lg:text-[20px] lg:font-medium lg:leading-[40px] lg:w-[663px] lg:h-[89px] lg:text-start">
            کیف پول الکترونیکی یک سرویس آنلاین است که با استفاده از آن می‌توانید
            تراکنش‌های اینترنتی را به راحتی انجام دهید.
          </p>
        </div>
        {/* walletSection */}
        <div className="flex items-center justify-center  mb-[33.14px]">
          <Image
            width={40}
            height={40}
            alt="wallet"
            src="/assets/images/NewHomePage/wallet.svg"
            className="w-[72.36px] h-[99.08px] md:w-[92.27px] md:h-[125.18px]  lg:w-[157.31px] lg:h-[215.38px]"
          />
          <Image
            width={40}
            height={40}
            alt="cart"
            src="/assets/images/NewHomePage/cart.svg"
            className="w-[48.64px] h-[58.17px] md:w-[66.98px] md:h-[80.51px] -mr-8 -mb-[50px] md:-mb-[90px]  lg:w-[104.65px] lg:h-[125.8px] lg:-mb-[170px] lg:-mr-10 animate-twBounce animate-infinite animate-duration-[2s]"
          />
        </div>
      </div>
      {/* Service services */}
      <div className="flex flex-col items-center lg:flex-row relative md:mb-[250px] lg:mr-[40px] lg:mb-[190.7px] h-[450px] mb-[137px]">
        {/* BoxSection */}
        <div className=" relative flex items-center justify-center mt-[60px] mb-[33.14px] lg:mr-[40px]">
          <Image
            width={40}
            height={40}
            alt="MobileSign"
            src="/assets/images/NewHomePage/Mobile.svg"
            className="w-[110px] h-[74px] md:w-[193px] md:h-[119.71px]  lg:w-[480px] lg:h-[222px] lg:-mr-[150px]"
          />

          <Image
            width={40}
            height={40}
            alt="smsSign"
            src="/assets/images/NewHomePage/SMS.svg"
            className="absolute w-[26.35px] h-[55.74px] md:w-[34.83px] md:h-[74.51px]  lg:w-[66.75px] lg:h-[126.28px] right-[40px] bottom-[30px] md:right-[70px] md:bottom-[50px] lg:right-[125px] lg:bottom-[110px] animate-twBounce animate-infinite animate-duration-[2s]"
          />
        </div>
        {/* DescSection */}
        <div className="flex flex-col items-center lg:items-start lg:absolute lg:right-[400px] ">
          <span className="text-[16px] font-bold leading-[27.64px] md:text-[20px] md:leading-[34.55px] mb-[6px] md:mb-[18px] lg:text-[24px]  lg:font-bold lg:leading-[41.45px] ">
            سرویس های خدماتی
          </span>
          <p className="w-[255px] h-[114px] text-[14px] leading-[35px] font-medium text-center text-neutralColor-2   md:text-[16px] md:font-medium md:leading-[45px] lg:text-[20px] lg:font-medium lg:leading-[40px] lg:w-[700px] lg:h-[89px] lg:text-start">
            این مجموعه دارای سرویس های کاربردی مانند ارسال پیامک، ارسال و بررسی
            کد تایید و شاهکار می باشد.
          </p>
        </div>
        <Link
          href="/ramzNegarServices/serviceServices"
          className="hover:bg-naturalColor-2  hover:border-[2px] hover:border-primaryColor-1 hover:text-primaryColor-1 focus:bg-neutralColor-5 focus:border-primaryColor-1 focus:text-primaryColor-1 text-center mt-[30px] md:mt-[50px] w-[202px] h-[48px] lg:w-[223px] lg:absolute lg:right-[820px] lg:top-[300px] cursor-pointer bg-primaryColor-1 text-naturalColor-2 py-[10px] px-[16px] lg:py-[8.5px] text-[16px] lg:text-[18px] leading-[27.64px] lg:leading-[31.09px] lg:mr-[10px]  font-bold rounded-[5px] mb-[139.19px] md:mb-[134.31px] "
        >
          <span>مشاهده سرویس ها</span>
        </Link>
        <div className="hidden lg:block lg:absolute lg:-left-20 top-[330px] ">
          <Image
            width={40}
            height={40}
            src="/assets/images/NewHomePage/rightDirection.svg"
            alt="rightDirection"
          />
        </div>
      </div>
      {/* lineImage */}
      <div className="hidden md:block">
        <Image
          alt="lineImage"
          width={150}
          height={150}
          src="/assets/images/NewHomePage/line.svg"
          className="absolute md:-right-[150px]"
        />
      </div>
      {/* Coin buying services */}
      <div className="flex flex-col-reverse items-center -mt-12 md:mt-0 lg:flex-row lg:justify-between lg:mb-[219px]">
        <div className="hidden lg:block lg:absolute lg:top-[1990px] lg:-right-[55px]">
          <Image
            width={40}
            height={40}
            src="/assets/images/NewHomePage/leftDirection.svg"
            alt="leftDirection"
          />
        </div>
        <Link
          href="/ramzNegarServices/coinServices"
          className="hover:bg-naturalColor-2  hover:border-[2px] hover:border-primaryColor-1 hover:text-primaryColor-1 focus:bg-neutralColor-5 focus:border-primaryColor-1 focus:text-primaryColor-1 text-center w-[202px] h-[48px] lg:w-[223px] lg:absolute lg:top-[2000px] cursor-pointer bg-primaryColor-1 text-naturalColor-2 py-[10px] px-[16px] lg:py-[8.5px] text-[16px] lg:text-[18px] leading-[27.64px] lg:leading-[31.09px] font-bold rounded-[5px] mb-[139.19px]   "
        >
          <span>مشاهده سرویس ها</span>
        </Link>
        {/* DescSection */}
        <div className="flex flex-col items-center lg:items-start  lg:ml-[200px] mb-[30px] md:mb-[6px]">
          <span className="text-[16px] font-bold leading-[27.64px] md:text-[20px] md:leading-[34.55px] mb-[6px] md:mb-[18px] lg:text-[24px]  lg:font-bold lg:leading-[41.45px] ">
            سرویس های خرید سکه
          </span>
          <p className="w-[255px] h-[114px] text-[14px] leading-[35px] font-medium text-center text-neutralColor-2 md:w-[444px] md:h-[114px] md:text-[16px] md:font-medium md:leading-[45px] lg:text-[20px] lg:font-medium lg:leading-[40px] lg:w-[663px] lg:h-[89px] lg:text-start">
            سرویس هایی جهت استعلام مبلغ خرید سکه و تحویل آن در اختیار مشتریان
            قرار می گیرد.
          </p>
        </div>
        {/* CoinSection */}
        <div className="flex items-center justify-center relative mb-[10px] md:mb-10  ">
          <Image
            width={40}
            height={40}
            alt="coinJam"
            src="/assets/images/NewHomePage/coinJam.svg"
            className="w-[48.68px] h-[84.53px] md:w-[64.9px] md:h-[112.71px]  lg:w-[121.69px] lg:h-[212.27px]"
          />
          <Image
            width={40}
            height={40}
            alt="coin"
            src="/assets/images/NewHomePage/coin.svg"
            className="absolute mb-20 md:bottom-[18px] lg:bottom-[100px] lg:left-10 w-[12.91px] h-[17.33px] md:w-[19.48px] md:h-[24.48px] lg:w-[36.53px] lg:h-[45.91px] animate-twBounce animate-infinite animate-duration-[2s]"
          />
        </div>
      </div>
      {/* Registration and userManagement */}
      <div className="flex flex-col items-center -mt-7 lg:flex-row relative lg:mr-[40px] lg:mb-[190.7px] mb-[135.83px]">
        {/* searchSection */}
        <div className="flex items-center justify-center mt-[60px] mb-[33.14px] lg:mr-[40px]">
          <Image
            width={40}
            height={40}
            alt="userManagement"
            src="/assets/images/NewHomePage/userManagement.svg"
            className="w-[101.27px] h-[120px] md:w-[135.03px] md:h-[160px]  lg:w-[230.3px] lg:h-[280px] lg:-mr-[50px]"
          />
          <Image
            width={40}
            height={40}
            alt="search"
            src="/assets/images/NewHomePage/search.svg"
            className="absolute w-[90.27px] h-[120px] mr-[70px] md:w-[90.03px] md:h-[160px] lg:w-[163.33px] lg:h-[200px] lg:right-[50px] lg:top-3 animate-twBounce animate-infinite animate-duration-[2s]"
          />
        </div>
        {/* DescSection */}
        <div className="flex flex-col items-center lg:items-start lg:absolute lg:right-[400px]">
          <span className="text-[16px] font-bold leading-[27.64px] md:text-[20px] md:leading-[34.55px] mb-[6px] md:mb-[18px] lg:text-[24px]  lg:font-bold lg:leading-[41.45px] ">
            ثبت و مدیریت کـــــاربران
          </span>
          <p className="w-[255px] h-[114px] text-[14px] leading-[35px] font-medium text-center text-neutralColor-2 md:w-[444px] md:h-[114px] md:text-[16px] md:font-medium md:leading-[45px] lg:text-[20px] lg:font-medium lg:leading-[40px] lg:w-[663px] lg:h-[89px] lg:text-start">
            این مجموعه سرویس‌ها وظیفه ثبت و احراز هویت کاربران را بر عهده دارد.
          </p>
          <div className="hidden lg:block lg:absolute lg:top-[40px] lg:-left-[20px]">
            <Image
              width={40}
              height={40}
              src="/assets/images/NewHomePage/rightDirection.svg"
              alt="leftDirection"
            />
          </div>
        </div>
      </div>
      {/* My police services */}
      <div className="flex flex-col-reverse items-center -mt-7 lg:flex-row lg:justify-between lg:mb-[350px] ">
        <Link
          href="/ramzNegarServices/myPoliceServices"
          className="hover:bg-naturalColor-2  hover:border-[2px] hover:border-primaryColor-1 hover:text-primaryColor-1 focus:bg-neutralColor-5 focus:border-primaryColor-1 focus:text-primaryColor-1 text-center w-[202px] h-[48px] lg:w-[223px] lg:absolute bottom-6 lg:bottom-[970px] cursor-pointer bg-primaryColor-1 text-naturalColor-2 py-[10px] px-[16px] lg:py-[8.5px] text-[16px] lg:text-[18px] leading-[27.64px] lg:leading-[31.09px] font-bold rounded-[5px] mb-[139.19px]   "
        >
          <span>مشاهده سرویس ها</span>
        </Link>
        {/* DescSection */}
        <div className="flex flex-col items-center lg:items-start  lg:ml-[200px] mb-[70px] md:mb-[50px] ">
          {/* LeftDirection */}
          <div className="hidden lg:block absolute mt-[220px] -right-[60px]">
            <Image
              alt="leftDirection"
              src="/assets/images/NewHomePage/leftDirection.svg"
              width={50}
              height={50}
              className=""
            />
          </div>
          <span className="text-[16px] font-bold leading-[27.64px] md:text-[20px] md:leading-[34.55px] mb-[6px] md:mb-[18px] lg:text-[24px]  lg:font-bold lg:leading-[41.45px] ">
            سرویس‌های پلیـــس من
          </span>
          <p className="w-[255px] h-[114px] text-[14px] leading-[35px] font-medium text-center text-neutralColor-2 md:w-[444px] md:h-[114px] md:text-[16px] md:font-medium md:leading-[45px] lg:text-[20px] lg:font-medium lg:leading-[40px] lg:w-[663px] lg:h-[89px] lg:text-start">
            پلیس من دارای وب سرویس های بسیار ساده و کاربردی است که با آن می‌توان
            بسیاری از خدمات انجام شده در پلیس+۱۰ از جمله استعلام خلافی خودرو را
            انجام داد.
          </p>
        </div>
        {/* myPolice */}
        <div className="flex items-center justify-center relative mb-[10px] md:mb-10">
          <Image
            alt="myPolice"
            width={40}
            height={40}
            src="/assets/images/NewHomePage/myPolice.svg"
            className="w-[71.85px] h-[98.88px] md:w-[99.97px] md:h-[137.57]  lg:w-[121.69px] lg:h-[212.27px]"
          />
          <Image
            alt="myPoliceTick"
            width={40}
            height={40}
            src="/assets/images/NewHomePage/myPoliceTick.svg"
            className="absolute bottom-[20px] right-[20px] md:mr-[15px] md:bottom-[28px] lg:bottom-[70px] lg:mr-[15px]  w-[29.86px] h-[27.99px] md:w-[19.48] md:h-[24.48px] lg:w-[36.53px] lg:h-[45.91px] animate-twBounce animate-infinite animate-duration-[2s]"
          />
        </div>
      </div>
      {/* lineImage */}
      <div className="hidden md:block">
        <Image
          alt="line"
          width={150}
          height={150}
          src="/assets/images/NewHomePage/line.svg"
          className="absolute -left-[140px] bottom-[500px] lg:bottom-[1000px] lg:right-[1100px] "
        />
      </div>
      {/* InsuranceServices */}
      <div className="flex flex-col items-center -mt-7 md:-mt-[60px] lg:flex-row relative lg:mr-[40px] lg:-mt-[170px] mb-[135.83px]">
        {/* InsuranceSection */}
        <div className="flex items-center justify-center mt-[150px] md:mt-[220px] mb-[33.14px] lg:mr-[5px]">
          <Image
            width={40}
            height={40}
            alt="insurans"
            src="/assets/images/NewHomePage/insurance.svg"
            className="absolute w-[103.15px]  bottom-[190px] h-[127.8px] -mr-[20px] md:w-[125.25px] md:h-[155.08px] md:bottom-[210px] lg:w-[229.87px] lg:h-[286.66px] lg:right-[40px] lg:-bottom-[150px] animate-twBounce animate-infinite animate-duration-[2s]"
          />
          <Image
            width={40}
            height={40}
            alt="insurans"
            src="/assets/images/NewHomePage/insuransConis.svg"
            className="w-[42.59px] h-[56.75px] mr-[80px] md:w-[51.7px] md:h-[68.91px] md:mr-[90px]  lg:w-[94.59px] lg:h-[126.51px]  lg:absolute lg:right-[100px] lg:top-[270px] "
          />
        </div>
        {/* DescSection */}
        <div className="flex flex-col items-center lg:items-start lg:absolute lg:right-[400px] lg:mt-[420px]">
          <span className="text-[16px] font-bold leading-[27.64px] md:text-[20px] md:leading-[34.55px] mb-[6px] md:mb-[18px] lg:text-[24px]  lg:font-bold lg:leading-[41.45px] ">
            سرویس های بیمه
          </span>
          <p className="w-[255px] h-[114px] text-[14px] leading-[35px] font-medium text-center text-neutralColor-2 md:w-[444px] md:h-[114px] md:text-[16px] md:font-medium md:leading-[45px] lg:text-[20px] lg:font-medium lg:leading-[40px] lg:w-[663px] lg:h-[89px] lg:text-start">
            این مجموعه دارای سرویس‌های مقایسه،استعلام قیمت و خرید انواع بیمه
            است.
          </p>
          <div className="hidden lg:block lg:absolute lg:top-[40px] lg:-left-[50px]">
            <Image
              width={40}
              height={40}
              src="/assets/images/NewHomePage/rightDirection.svg"
              alt="leftDirection"
            />
          </div>
        </div>
      </div>
      {/* RoadTolls */}
      <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between mt-[61.63px] md:mt-[150px] lg:mt-[250px] mb-[120px] lg:mb-[200px] md:mb-8">
        {/* DescSection */}
        <div className="flex flex-col items-center lg:items-start  lg:ml-[200px] ">
          {/* LeftDirection */}
          <div className="hidden lg:block absolute top-[3860px] -right-[60px]">
            <Image
              width={40}
              height={40}
              src="/assets/images/NewHomePage/leftDirection.svg"
              alt="leftDirection"
            />
          </div>
          <span className="text-[16px] font-bold leading-[27.64px] md:text-[20px] md:leading-[34.55px] mb-[6px] md:mb-[18px] lg:text-[24px]  lg:font-bold lg:leading-[41.45px] ">
            سرویس های عوارض جاده ای
          </span>
          <p className="w-[255px] h-[114px] text-[14px] leading-[35px] font-medium text-center text-neutralColor-2 md:w-[444px] md:h-[114px] md:text-[16px] md:font-medium md:leading-[45px] lg:text-[20px] lg:font-medium lg:leading-[40px] lg:w-[663px] lg:h-[89px] lg:text-start">
            سرویس‌هایی جهت استعلام و پرداخت عوارض آزادراهی در اختیار مشتریان
            قرار می‌گیرد.
          </p>
        </div>
        {/* RoadSection */}
        <div className="flex items-center justify-center  mb-[33.14px] ">
          <Image
            width={40}
            height={40}
            alt="car"
            src="/assets/images/NewHomePage/stop.svg"
            className="w-[37.94px] h-[53.77px] md:w-[51.59px] md:h-[73.13px]  lg:w-[104.65px] lg:h-[125.8px]  absolute bottom-[350px] ml-[110px]  md:right-[120px] md:bottom-[310px]  lg:right-[780px] lg:bottom-[280px] animate-twBounce animate-infinite animate-duration-[2s]"
          />
          <Image
            width={40}
            height={40}
            alt="stop"
            src="/assets/images/NewHomePage/car.svg"
            className="w-[105.72px] h-[69.59px] md:w-[146.77px] md:h-[94.65px]  lg:w-[285px] lg:h-[215.38px] absolute bottom-[300px] md:mb-[30px] md:bottom-[210px] lg:bottom-[80px] lg:right-[850px]"
          />
        </div>
      </div>
    </div>
  );
};

export default RamzNegarServices;
