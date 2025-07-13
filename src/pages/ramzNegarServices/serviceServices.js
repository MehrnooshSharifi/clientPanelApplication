import ServiceLandingLayout from "@/container/LandingLayout/serviceLandingLayout";
import { ScrollToTop } from "react-simple-scroll-up";
import serviceServicesData from "../../../data/ramzNegarServicesData/serviceServicesData";
import RamzNegarServicesSection from "@/components/ramzNegarServicesSection/ramzNegarServicesSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const ServiceServices = () => {
  return (
    <div className="overflow-x-clip">
      <div className="flex flex-col  w-screen h-screen pt-[23px] md:pt-[25px] lg:pt-[44px] lg:w-screen lg:h-screen  bg-neutralColor-5">
        <ServiceLandingLayout>
          <ScrollToTop
            bgColor="#F2F6FE"
            strokeEmptyColor="#FAFAFA"
            strokeFillColor="#0050E5"
            className="z-50"
            size="60"
            symbolSize="30"
            symbolColor="#0050E5"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[30px] md:gap-x-[22px] md:mx-auto md:gap-y-[40px] lg:gap-x-[29.69px] lg:gap-y-[70.61px] mx-4 mb-[60px] md:mb-[70px] lg:mb-[100px]">
            {serviceServicesData.map((service) => {
              return (
                <div key={service.id}>
                  <RamzNegarServicesSection service={service} />
                </div>
              );
            })}
          </div>
        </ServiceLandingLayout>
      </div>
    </div>
  );
};

export default ServiceServices;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
