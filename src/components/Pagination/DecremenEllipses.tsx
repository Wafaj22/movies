import { memo } from "react";

const DecremenEllipses = ({
  totalPages,
  currentPage,
  minPageLimit,
  setPreviousPage
}: {
  totalPages: number;
  currentPage: number;
  minPageLimit: number;
  setPreviousPage: any;
}) => {
  return minPageLimit > 2 &&
    totalPages - minPageLimit > 1 &&
    currentPage > 5 ? (
    <button
      className={`relative inline-flex items-center p-2 text-base font-medium focus:z-20 bg-white text-primary-10`}
      onClick={setPreviousPage}
    >
      &hellip;
    </button>
  ) : (
    <></>
  );
};
export default memo(DecremenEllipses);
