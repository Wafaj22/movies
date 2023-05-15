import { memo } from "react";

const IncrementEllipses = ({
  totalPages,
  currentPage,
  maxPageLimit,
  setNextPage
}: {
  totalPages: number;
  currentPage: number;
  maxPageLimit: number;
  setNextPage: any
}) => {
  return totalPages - maxPageLimit > 1 && totalPages - currentPage > 5 ? (
    <button
      className={`relative inline-flex items-center p-2 text-base font-medium focus:z-20 bg-white text-primary-10`}
      onClick={setNextPage}
    >
      &hellip;
    </button>
  ) : (
    <></>
  );
};
export default memo(IncrementEllipses);
