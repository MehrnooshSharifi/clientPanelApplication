import SignUpForm from "@/components/clientUser/SignUpForm/signUp";
import Image from "next/image";
const SignUop = () => {
  return (
    <div className="max-h-[1024px] overflow-x-hidden">
      <div className="flex items-center justify-center lg:justify-end gap-x-[74px] slg:justify-center overflow-y-hidden">
        <SignUpForm />
        {/* <Image
          width={25}
          height={25}
          alt="ramzNegarSignIn"
          src="/assets/images/NewSignIn.svg"
          className=" hidden lg:block w-[825px] h-[600px] mt-[300px] "
        /> */}
      </div>
    </div>
  );
};

export default SignUop;
