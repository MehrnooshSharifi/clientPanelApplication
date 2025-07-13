import { useRouter } from "next/router";
import clsx from "clsx";

const TextDirectionWrapper = ({
  children,
  className = "",
  rtlClass = "",
  ltrClass = "",
}) => {
  const { locale } = useRouter();
  const isRTL = locale === "fa";

  return (
    <div
      className={clsx(
        isRTL ? "text-right" : "text-left",
        className,
        isRTL ? rtlClass : ltrClass
      )}
    >
      {children}
    </div>
  );
};

export default TextDirectionWrapper;
