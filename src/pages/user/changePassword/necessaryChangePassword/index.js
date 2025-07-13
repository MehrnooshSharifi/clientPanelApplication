import NecessaryChangePassword from "@/components/clientUser/ChangePassword/NecessaryChangePassword";
import Image from "next/image";
const ResetPassword = () => {
  return (
    <div className="max-h-[1024px] overflow-x-hidden md:mt-[195px] lg:mt-[50px] lg:block">
      <div className="flex items-center justify-center lg:justify-end gap-x-[74px] slg:justify-center overflow-y-hidden">
        <NecessaryChangePassword />
        <Image
          width={50}
          height={50}
          alt="ramzNegarSignIn"
          src="/assets/images/NewSignIn.svg"
          className=" hidden lg:block w-[825px] h-[600px] mt-[157px] "
        />
      </div>
    </div>
  );
};

export default ResetPassword;
