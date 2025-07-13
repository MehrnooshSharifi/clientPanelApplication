import HomePageFooter from "./HomePageFooter/HomePageFooter";
import HomePageDesktopHeader from "./HomePageHeader/Desktop/HomePageDesktopHeader";
import HomePageTabletAndMobileHeader from "./HomePageHeader/MobileAndTablet/HomePageTabletAndMobileHeader";
const HomePageLayout = ({ children, links }) => {
  return (
    <div className="flex flex-col bg-neutralColor-5">
      <HomePageTabletAndMobileHeader links={links} />
      <HomePageDesktopHeader links={links} />
      {children}
      <HomePageFooter links={links} />
    </div>
  );
};
export default HomePageLayout;


