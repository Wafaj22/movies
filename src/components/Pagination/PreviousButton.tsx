import { memo } from "react";

const PreviousButton = ({ currentPage, setPreviousPage }: { currentPage: number; setPreviousPage: any }) => {
  return (
    <button
      onClick={setPreviousPage}
      className="relative inline-flex items-center rounded bg-white px-2 py-2 text-sm font-medium hover:bg-neutral-90 focus:z-20 disabled:cursor-not-allowed"
      disabled={currentPage === 1}
    >
      {/* <FontAwesomeIcon icon={faChevronLeft} color={"#1B1839"} /> */}
    </button>
  );
};

export default memo(PreviousButton);
