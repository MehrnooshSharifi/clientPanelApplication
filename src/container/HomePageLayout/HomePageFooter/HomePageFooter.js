import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const HomePageFooter = ({ links }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col  bottom-0 left-0 right-0" id={links[2].id}>
      {/* FooterInfo */}
      <div className="bg-primaryColor-5 w-full rounded-tr-[50px] rounded-tl-[50px]">
        <div className=" flex flex-col rounded-t-3xl mb-3 md:mb-5 lg:mb-[40.8px] md:h-[364px] w-full max-w-[375px] mx-auto md:max-w-[768px] md:mx-auto lg:max-w-[1440px] lg:h-[426.2px]">
          {/* Logo-Be WithUs-SocialIcons Section */}
          <div className="flex mx-auto items-center mb-[20px] md:mb-0 md:flex-col md:items-start md:mr-10 lg:mr-[155px]">
            {/* Logo */}
            <div
              className="w-[48px] h-[48px] ml-[96.91px] md:mt-[40px] lg:w-[70px] lg:h-[70px] lg:-mr-[60px] cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image
                width={100}
                height={100}
                className="w-[50px] h-[50px] md:w-[50.2px] md:h-[50px] lg:w-[70px] lg:h-[70px]"
                src="/assets/images/NewHomePage/TabadolLogo_01.png"
                alt="logo"
              />
            </div>
            {/* BeWithUs and SocialMediaIcons Section */}
            <div className="flex flex-col md:hidden ml-5">
              <p className="font-bold text-[12px] lg:hidden text-neutralColor-1 mt-5 mb-[26px]">
                همراه ما باشید
              </p>
              {/* socialMediaIcons */}
              <div className="flex ">
                <Link href="#" className="cursor-pointer">
                  <span>
                    <Image
                      width={25}
                      height={25}
                      className="ml-[24px] "
                      src="/assets/images/NewHomePage/twitter.svg"
                      alt="twitterIcon"
                    />
                  </span>
                </Link>
                <Link href="#" className="cursor-pointer">
                  <span>
                    <Image
                      width={25}
                      height={25}
                      className="ml-[24px] "
                      src="/assets/images/NewHomePage/insta.svg"
                      alt="instagramIcon"
                    />
                  </span>
                </Link>
                <Link href="#" className="cursor-pointer">
                  <span>
                    <Image
                      width={25}
                      height={25}
                      className="ml-[24px] "
                      src="/assets/images/NewHomePage/linkedin.svg"
                      alt="linkedinIcon"
                    />
                  </span>
                </Link>
                <Link href="#" className="cursor-pointer">
                  <span>
                    <Image
                      width={25}
                      height={25}
                      className="w-[25.5px] h-[25.5px]"
                      src="/assets/images/NewHomePage/telegram.svg"
                      alt="telegramIcon"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* simpleAccess-contactUs Section */}
          <div className="flex mx-auto items-start max-w-[375px] md:max-w-0 md:justify-center md:-mt-[40px] md:mr-[450px] md:container md:mx-auto lg:mr-[900px] lg:-mt-30 ">
            {/* SimpleAccess */}
            <div className="flex flex-col  mr-[22px] md:mr-[50px]">
              <p className="mb-5 md:mb-[32px] lg:mb-[48px] font-bold text-[12px] md:text-[16px] md:w-80 lg:text-[18px]">
                دسترسی آسان
              </p>
              <Link href="/termsAndConditions">
                <span className="  text-neutralColor-2  font-[12px] text-[12px] md:text-[14px] lg:text-[16px] whitespace-nowrap ">
                  قوانین و مقررات
                </span>
              </Link>
            </div>
            <div className="absolute lg:hidden  mt-[80px] mr-[30px] md:-mr-[700px] md:mt-[200px]">
              <Link
                href="https://trustseal.enamad.ir/?id=366863&Code=z2TOzTrNrmKgpzwcCU3w62lG2iRkpbuq"
                referrerPolicy="origin"
                target="_blank"
              >
                <img
                  className="w-[90px] h-[90px] -mr-[10px]  md:w-[100px] md:h-[100px]"
                  referrerPolicy="origin"
                  src="https://trustseal.enamad.ir/logo.aspx?id=366863&Code=z2TOzTrNrmKgpzwcCU3w62lG2iRkpbuq"
                  alt="eNamad"
                  code="z2TOzTrNrmKgpzwcCU3w62lG2iRkpbuq"
                />
              </Link>
            </div>
            {/* ContactUs */}
            <div className="flex flex-col mb-5  mr-[60px] md:-mr-[90px]">
              <p className="mb-5 md:mb-[28px] lg:mb-[48px] font-bold text-[12px] md:text-[16px] lg:text-[18px]">
                تماس با ما
              </p>
              <div className="flex mb-5 md:mb-[32px] lg:mb[34px] ">
                <span className="  text-neutralColor-2  font-[12px] text-[12px] ml-[22px] md:text-[14px] lg:text-[16px]">
                  تلفن
                </span>
                <span className="  text-neutralColor-2  font-[12px] text-[12px] md:text-[14px] lg:text-[16px]">
                  021-42825300
                </span>
              </div>
              <div className="flex mb-5 md:mb-[32px] lg:mb[34px] ">
                <span className="  text-neutralColor-2  font-[12px] text-[12px] ml-[22px] md:text-[14px] lg:text-[16px] whitespace-nowrap">
                  کیش |
                </span>
                <span className="  text-neutralColor-2  font-[12px] text-[12px] md:text-[14px] lg:text-[16px] -mr-[15px]">
                  خیابان نوبنیاد، مجتمع آرین، واحد 78
                </span>
              </div>
              <div className="flex mb-5 md:mb-[32px] lg:mb[34px] ">
                <span className="  text-neutralColor-2  font-[12px] text-[12px] ml-[22px] md:text-[14px] lg:text-[16px] whitespace-nowrap">
                  تهران |
                </span>
                <span className="  text-neutralColor-2  font-[12px] text-[12px] md:text-[14px] lg:text-[16px] -mr-[15px]">
                  کوی نصر، خیابان مشهوری، نبش خیابان کسروی و پیشگام2 ،پلاک 52،
                  واحد 1
                </span>
              </div>
              <div className="flex mb-5 ml-6 lg:mb[34px] opacity-0">
                <span className="  text-neutralColor-2  font-[12px] text-[12px] ml-[22px] md:text-[14px] lg:text-[16px]">
                  آدرس
                </span>
                <span className="  text-neutralColor-2  font-[12px] text-[12px] w-[142px] -mt-[10px] md:-mt-[9px] md:text-[14px] md:w-[250px] lg:text-[16px] lg:w-[400px] leading-10">
                  تهران، شهرک قدس(غرب) ، خیابان شهید دادمان، خیابان شهید حسن
                  سیف، کوچه 24 پلاک5
                </span>
              </div>
            </div>
          </div>
          {/* BeWithUs and SocialMediaIcons Section for md: and lg: screens */}
          <div className="hidden md:flex md:flex-col md:mr-10  md:-mt-[300px] lg:justify-center   lg:mr-[100px]  w-fit">
            <div className="hidden md:flex md:flex-col lg:justify-between lg:mb-12 lg:gap-y-8">
              <p className="font-bold text-[12px] lg:hidden text-neutralColor-1 mt-5 mb-[35px]">
                همراه ما باشید
              </p>
              <p className="hidden lg:block lg:text-[14px] lg:font-normal lg:text-neutralColor-2 w-fit ">
                ارائه وب سرویس های بانکی و خدماتی
              </p>
              <p className="hidden lg:block  text-neutralColor-2 lg:text-[14px] lg:font-normal lg:text-neutralColor-2 w-fit">
                با تبادل کسب و کار خود را گسترش دهید.
              </p>
            </div>
            {/* socialMediaIcons */}
            <div className="flex md:-mt-[1px] items-center">
              <Link href="#" className="cursor-pointer">
                <span>
                  <Image
                    width={25}
                    height={25}
                    className="ml-[24px] lg:w-[25.99px] lg:h-[26px]"
                    src="/assets/images/NewHomePage/twitter.svg"
                    alt="twitterIcon"
                  />
                </span>
              </Link>
              <Link href="#" className="cursor-pointer">
                <span>
                  <Image
                    width={25}
                    height={25}
                    className="ml-[24px] lg:w-[26.65px] lg:h-[26px]"
                    src="/assets/images/NewHomePage/insta.svg"
                    alt="instagramIcon"
                  />
                </span>
              </Link>
              <Link href="#" className="cursor-pointer">
                <span>
                  <Image
                    width={25}
                    height={25}
                    className="ml-[24px] lg:w-[26px] lg:h-[26px]"
                    src="/assets/images/NewHomePage/linkedin.svg"
                    alt="linkedinIcon"
                  />
                </span>
              </Link>
              <Link href="#" className="cursor-pointer">
                <span>
                  <Image
                    width={25}
                    height={25}
                    className="w-[25px] lg:w-[27px]"
                    src="/assets/images/NewHomePage/telegram.svg"
                    alt="telegramIcon"
                  />
                </span>
              </Link>
            </div>
            <div className="hidden lg:block -mt-[30px]">
              <Link
                href="https://trustseal.enamad.ir/?id=366863&Code=z2TOzTrNrmKgpzwcCU3w62lG2iRkpbuq"
                referrerPolicy="origin"
                target="_blank"
              >
                <img
                  className="w-[100px] h-[100px] mt-[50px] "
                  referrerPolicy="origin"
                  src="https://trustseal.enamad.ir/logo.aspx?id=366863&Code=z2TOzTrNrmKgpzwcCU3w62lG2iRkpbuq"
                  alt="eNamad"
                  code="z2TOzTrNrmKgpzwcCU3w62lG2iRkpbuq"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Ownership of the site */}
      <div className=" flex flex-col items-center justify-center lg:flex-row lg:mb-10 lg:mt-10 w-full ">
        <p className="text-neutralColor-1 text-[10px] leading-[25px] font-normal md:text-[14px] md:leading-[35px] lg:text-[16px] lg:leading-[27.64px]">
          تمامی حقوق مادی و معنوی این سایت متعلق به &nbsp;
          <span className=" text-naturalColor-1 font-extrabold text-[10px] md:text-[14px] lg:text-[16px]">
            شرکت تبادل
          </span>
          &nbsp; می باشد
        </p>
        <div className="text-neutralColor-1 text-[10px] leading-[25px] font-normal md:text-[14px] md:leading-[35px] lg:text-[16px] lg:leading-[27.64px]">
          &nbsp; هرگونه کپی برداری از آن پیگرد قانونی دارد
        </div>
      </div>
    </div>
  );
};

export default HomePageFooter;
