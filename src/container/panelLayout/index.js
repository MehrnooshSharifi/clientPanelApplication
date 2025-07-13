import DesktopChangePassword from "@/components/clientUser/ChangePassword/DesktopChangePassword";
import DesktopSideBar from "./DesktopLayout/DesktopSideBar";
import TabletAndMobileHeader from "./MobileAndTabletLayout/TabletAndMobileHeader";
import DesktopHeader from "./DesktopLayout/DesktopHeader";
import { useState } from "react";
import DesktopUserInfoDetails from "@/components/clientUser/UserInfoDetails/DesktopUserInfoDetails";
import SignoutModal from "@/components/clientUser/SignOut/SignoutModal";

const Layout = ({ children }) => {
  const [showPassModal, setShowPassModal] = useState(false);
  const [showSignoutModal, setShowSignoutModal] = useState(false);
  const [showPersonalInfoModal, setShowPersonalInfoModal] = useState(false);
  const closeModalHandler = () => {
    setShowPassModal(false);
    setShowSignoutModal(false);
    setShowPersonalInfoModal(false);
  };
  return (
    <div className="flex items-start justify-center lg:pr-[200px]">
      {showPersonalInfoModal && (
        <DesktopUserInfoDetails
          setShowPersonalInfoModal={setShowPersonalInfoModal}
          showPersonalInfoModal={showPersonalInfoModal}
          closeModalHandler={closeModalHandler}
        />
      )}
      {showPassModal && (
        <DesktopChangePassword
          setShowPassModal={setShowPassModal}
          showPassModal={showPassModal}
          closeModalHandler={closeModalHandler}
        />
      )}
      {showSignoutModal && (
        <SignoutModal
          showSignoutModal={showSignoutModal}
          setShowSignoutModal={setShowSignoutModal}
          closeModalHandler={closeModalHandler}
        />
      )}
      <DesktopSideBar
        setShowPersonalInfoModal={setShowPersonalInfoModal}
        showPersonalInfoModal={showPersonalInfoModal}
        showPassModal={showPassModal}
        setShowPassModal={setShowPassModal}
        showSignoutModal={showSignoutModal}
        setShowSignoutModal={setShowSignoutModal}
      />
      <div className="flex flex-col w-full">
        <TabletAndMobileHeader
          showSignoutModal={showSignoutModal}
          setShowSignoutModal={setShowSignoutModal}
        />
        <DesktopHeader />
        {children}
      </div>
    </div>
  );
};

export default Layout;
