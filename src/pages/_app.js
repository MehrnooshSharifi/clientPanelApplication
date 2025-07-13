import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { CookiesProvider } from "react-cookie";
import UserProvider from "@/context/UserProvider";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Router from "next/router";
import Cookies from "js-cookie";
import { appWithTranslation } from "next-i18next";
// import { WebVitals } from "../web-vitals"
// Dynamically import Layout
const Layout = dynamic(() => import("@/container/panelLayout"), {
  ssr: false, // Only load on the client side
});

function App({ Component, pageProps, ...appProps }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    let inactivityTimer;
    const INACTIVITY_TIMEOUT = 20 * 60 * 1000;
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(handleInactivity, INACTIVITY_TIMEOUT);
    };

    const handleInactivity = () => {
      Cookies.remove("Token");
      Cookies.remove("phoneNumber");
      Cookies.remove("nationalCode");
      Cookies.remove("lastName");
      Cookies.remove("firstName");
      Cookies.remove("email");
      Cookies.remove("ContractExpirationDate");
      Cookies.remove("benefitAmount");
      Cookies.remove("balance");
      Cookies.remove("userServicePoint");
      Router.push("/user/signIn");
    };

    // Listen for user activity
    const handleUserActivity = () => {
      resetInactivityTimer();
    };

    // Event listeners for activity (mousemove, keydown, click)
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);
    window.addEventListener("click", handleUserActivity);
    // Set the initial inactivity timer
    resetInactivityTimer();

    // Clean up event listeners and timers on unmount
    return () => {
      clearTimeout(inactivityTimer);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      window.removeEventListener("click", handleUserActivity);
    };
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isPublicPage = [
    "/",
    "/ramzNegarServices/serviceServices",
    "/ramzNegarServices/coinServices",
    "/ramzNegarServices/myPoliceServices",
    "/termsAndConditions",
    "/user/signIn",
    "/user/resetPassword",
    "/user/changePassword/necessaryChangePassword",
    "/user/signUp",
    "/404",
  ].includes(appProps.router.pathname);

  return (
    <CookiesProvider>
      {/* <WebVitals /> */}
      <UserProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              width: "338px",
              height: "48px",
              fontSize: "14px",
            },
          }}
        />
        {isClient && (
          <>
            {isPublicPage ? (
              // For public pages without Layout
              <Component {...pageProps} />
            ) : (
              // For pages with Layout
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </>
        )}
      </UserProvider>
    </CookiesProvider>
  );
}
export default appWithTranslation(App);
