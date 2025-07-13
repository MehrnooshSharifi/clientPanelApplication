import TechnicalDocsServicesTable from "@/components/technicalDocsServices/TechnicalDocsServicesTable";
import { GetAllServiceGroup } from "@/server/Service";
import { Pagination, PaginationItem } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
const TechnicalDocsServices = ({ docsServices }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = docsServices?.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className=" flex flex-col mt-[10px] md:mt-[30px] mx-[16px]  lg:mx-auto lg:w-[1030px] lg:mt-[20px]">
      {/* Title */}
      <div className="flex gap-x-[5px] mb-[24px] h-[31px] items-center text-[14px] md:text-[18px] lg:text-[20px] font-medium lg:font-bold leading-normal lg:mr-[30px]">
        <span>مستندات فنی سرویس ها</span>
      </div>
      {/* documentsSection */}
      <div className="flex flex-col gap-y-[50px] lg:mr-[30px] lg:h-[600px]">
        {docsServices &&
          docsServices.length > 0 &&
          currentItems.map((serviceGroup) => {
            return (
              <div
                className="flex flex-col overflow-x-hidden lg:h-[700px] "
                key={serviceGroup.id}
              >
                <div className="flex gap-x-[5px] mb-[20px] text-[12px] md:text-[16px] font-medium">
                  <span>گروه سرویس : </span>
                  <span>{serviceGroup.serviceGroupName}</span>
                </div>
                {/* tableSection */}
                <div className="flex flex-col lg:-mr-[5px] lg:overflow-x-hidden  ">
                  {/* ticketsList */}
                  {docsServices && docsServices.length !== 0 && (
                    <TechnicalDocsServicesTable
                      services={serviceGroup.services}
                    />
                  )}
                </div>
              </div>
            );
          })}
      </div>
      <div className="z-10  -mt-[20px] lg:mt-[20px]">
        {docsServices && docsServices.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(docsServices.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                slots={{
                  previous: ArrowForwardIosIcon,
                  next: ArrowBackIosIcon,
                }}
                {...item}
              />
            )}
          />
        )}
      </div>
    </div>
  );
};

export default TechnicalDocsServices;

export async function getServerSideProps(ctx) {
  try {
    const { req } = ctx;
    const token = req.cookies.Token;

    // Assuming GetAllServiceGroup returns an object with a 'data' property
    const { data } = await GetAllServiceGroup(token);

    return {
      props: {
        docsServices: data,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
