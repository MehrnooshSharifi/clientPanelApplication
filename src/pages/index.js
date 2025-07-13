import React from "react";
import dynamic from "next/dynamic";
import { ScrollToTop } from "react-simple-scroll-up";
import { WebVitals } from "../web-vitals";
import HomePageLayout from "@/container/HomePageLayout/HomePageLayout";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const RamzNegarSystem = dynamic(
  () => import("@/components/HomePageContent/ramzNegarSystem"),
  { ssr: false }
);
const WhyRamzNegar = dynamic(
  () => import("@/components/HomePageContent/whyRamzNegar"),
  { ssr: false }
);
const RamzNegarServices = dynamic(
  () => import("@/components/HomePageContent/ramzNegarServices"),
  { ssr: false }
);
const RamzNegarCustomers = dynamic(
  () => import("@/components/HomePageContent/ramzNegarCustomers"),
  { ssr: false }
);

const HomePage = () => {
  const { t } = useTranslation("common");
  const links = [
    { label: t("whyRamzNegar"), href: "#whyRamzNegar", id: "whyRamzNegar" },
    { label: t("services"), href: "#services", id: "services" },
    { label: t("contactUs"), href: "#contactUs", id: "contactUs" },
  ];
  const router = useRouter();
  const changeLanguage = (lang) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };
  console.log(t("ramzNegarSystem.subtitle1"));
  return (
    <div className="overflow-x-clip">
      <WebVitals />
      <div className="flex flex-col w-screen h-screen pt-[23px] md:pt-[25px] lg:pt-[46px] lg:w-screen lg:h-screen bg-neutralColor-5">
        {/* <div className="flex gap-x-4 mr-[350px] z-50">
          <button onClick={() => changeLanguage("fa")}>فارسی</button>
          <button onClick={() => changeLanguage("en")}>English</button>
        </div> */}
        <HomePageLayout links={links}>
          <ScrollToTop
            bgColor="#F2F6FE"
            strokeEmptyColor="#FAFAFA"
            strokeFillColor="#0050E5"
            className="z-50"
            size="60"
            symbolSize="30"
            symbolColor="#0050E5"
          />
          {/* RamzNegarSeifSystem section */}
          <RamzNegarSystem />
          {/* Why RamzNegar Section */}
          <WhyRamzNegar links={links} />
          {/* RamzNegar Services Section */}
          <RamzNegarServices links={links} />
          {/* RamzNegarCustomers */}
          <RamzNegarCustomers />
        </HomePageLayout>
      </div>
    </div>
  );
};
export default HomePage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
