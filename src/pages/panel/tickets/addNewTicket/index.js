import AddTicket from "@/components/tickets/addTicket/AddTicket";
import { CreateNewClientTicket } from "@/server/Service";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { VscError } from "react-icons/vsc";
const convertBlobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};
const AddNewTicket = () => {
  const [cookies, setCookie] = useCookies();
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const nationalCode = cookies.nationalCode;
  const router = useRouter();
  const typeIdHandler = (id) => {
    setIsOpenStatus(false);
    formik.values.typeId = id;
  };
  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await CreateNewClientTicket(values, selectedFiles);
    if (res.isSuccess) {
      toast.success("تیکت جدید با موفقیت  ثبت شد", {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push("/panel/tickets");
      setIsLoading(false);
    } else {
      toast.error(res.message, {
        duration: 4000,
        style: {
          backgroundColor: "#EE3A01",
          color: "#fff",
        },
        className: "",
        icon: <VscError className="w-[28px] h-[28px]" />,
      });
      setIsLoading(false);
    }
  };
  const initialValues = {
    typeId: 1,
    title: "",
    usersender: nationalCode,
    ticketdoc: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });

  const changeFileHandler = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      // Create an array to store file objects
      const newFiles = files.map(async (file) => {
        // Convert blob data to Base64
        const fileData = await convertBlobToBase64(file);

        // Create a temporary URL for the blob
        const imageUrl = URL.createObjectURL(file);

        return {
          fileData,
          fileName: file.name,
          imageUrl, // Add imageUrl property for displaying in the UI
        };
      });

      // Use Promise.all to wait for all conversions to complete
      Promise.all(newFiles).then((convertedFiles) => {
        setSelectedFiles((prevFiles) => [...prevFiles, ...convertedFiles]);
      });
    }
  };

  const removeFileHandler = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);
  };
  return (
    <div className=" flex flex-col mt-[10px] md:mt-[30px] mx-[26px] mr-[20px] lg:pr-[30px] lg:mx-auto lg:w-[1030px] ">
      {/* BreadCrumbs */}
      <div className="mb-[20px] md:mb-[30px] lg:gap-x-[20px] whitespace-nowrap font-normal  text-[10px] md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px]  md:leading-[24.18px] h-[48px]  flex items-center py-[15.5px] overflow-x-scroll overflow-y-hidden">
        <Link
          href="/panel/tickets"
          className="  font-normal  text-neutralColor-2  h-[48px]  flex items-center"
        >
          <div className=" font-normal  text-neutralColor-2   h-[48px]  flex items-center  lg:mr-1  ">
            <span className="">لیست تیکت ها</span>
          </div>
        </Link>
        <div className="lg:-mr-[20px]">
          <HiOutlineChevronLeft className="text-neutralColor-4" />
        </div>
        <div className=" font-normal  text-neutralColor-3   h-[48px]  flex items-center  lg:-mr-[18px] ">
          <span className="">ثبت تیکت جدید</span>
        </div>
      </div>
      <AddTicket
        formik={formik}
        typeIdHandler={typeIdHandler}
        onSubmit={onSubmit}
        isOpenStatus={isOpenStatus}
        setIsOpenStatus={setIsOpenStatus}
        isLoading={isLoading}
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        changeFileHandler={changeFileHandler}
        removeFileHandler={removeFileHandler}
      />
    </div>
  );
};

export default AddNewTicket;
