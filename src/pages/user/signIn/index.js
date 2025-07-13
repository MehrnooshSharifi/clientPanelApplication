import SignInForm from "@/components/clientUser/signInForm/SignInForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
const SignIn = () => {
  return (
    <div className="flex items-center justify-center lg:justify-end gap-x-[74px] slg:justify-center overflow-y-hidden">
      <SignInForm />
      {/* <div className="hidden lg:block mt-[150px]">
        <Image
          alt="ramzNegarSignIn"
          src="/assets/images/NewSignIn.svg"
          width={800}
          height={800}
          layout="intrinsic"
          priority
          crossOrigin="anonymous"
        />
      </div> */}
    </div>
  );
};

export default SignIn;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },  
  };
}
