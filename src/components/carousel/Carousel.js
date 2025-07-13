import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const CarouselComponent = () => {
  var settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 3,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 3000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 3000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <div className=" max-w-[375px]  mx-auto xsm:max-w-[600px] md:max-w-[768px] md:mx-auto lg:max-w-[1440px]  lg:mx-auto text-center ">
      <Slider {...settings}>
        <div className="bg-naturalColor-2 relative max-w-[148px] h-[148px] lg:max-w-[207px] lg:h-[207px] rounded-full flex items-center justify-center text-center">
          <Image
            width={50}
            alt="ramzNegarCustomers"
            height={50}
            src="/assets/images/NewHomePage/melliBank.svg"
            className="w-[90px] lg:w-[99px] lg:h-[145px] absolute left-[32px] top-[10px] md:left-[30px]  lg:left-[55px] lg:top-[30px]"
          />
        </div>
        <div className="bg-naturalColor-2 relative max-w-[148px] h-[148px] lg:max-w-[207px] lg:h-[207px] rounded-full flex items-center justify-center text-center">
          <Image
            width={50}
            alt="ramzNegarCustomers"
            height={50}
            src="/assets/images/NewHomePage/tajaratBank2.svg"
            className="w-[80px] absolute left-[35px] top-[20px] md:left-[35px]  lg:w-[111px] lg:h-[117px] lg:left-[45px] lg:top-[40px]"
          />
        </div>
        <div className="bg-naturalColor-2 relative max-w-[148px] h-[148px] lg:max-w-[207px] lg:h-[207px] rounded-full flex items-center justify-center text-center">
          <Image
            width={50}
            alt="ramzNegarCustomers"
            height={50}
            src="/assets/images/NewHomePage/shahrBank.svg"
            className="w-[90px] absolute left-[30px] top-[30px] md:left-[30px] lg:w-[139px] lg:h-[121px] lg:left-[30px] lg:top-[40px]"
          />
        </div>
        <div className="bg-naturalColor-2 relative max-w-[148px] h-[148px] lg:max-w-[207px] lg:h-[207px] rounded-full flex items-center justify-center text-center">
          <Image
            width={50}
            alt="ramzNegarCustomers"
            height={50}
            src="/assets/images/NewHomePage/sinaBank.svg"
            className="w-[90px] absolute  left-[30px] top-[20px] md:left-[33px] lg:w-[119px] lg:h-[134px] lg:left-[45px] lg:top-[40px]"
          />
        </div>
        <div className="bg-naturalColor-2 relative max-w-[148px] h-[148px] lg:max-w-[207px] lg:h-[207px] rounded-full flex items-center justify-center text-center">
          <Image
            width={50}
            alt="ramzNegarCustomers"
            height={50}
            src="/assets/images/NewHomePage/eghtesadNovinBank.svg"
            className="w-[90px] absolute  left-[30px] top-[30px] md:left-[30px] lg:w-[127px] lg:h-[121px] lg:left-[35px] lg:top-[40px]"
          />
        </div>
      </Slider>
    </div>
  );
};
export default CarouselComponent;
