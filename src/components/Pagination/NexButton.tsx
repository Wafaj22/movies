import { memo } from "react";

const NextButton = ({
  totalPages,
  currentPage,
  setNextPage
}: {
  totalPages: number;
  currentPage: number;
  setNextPage: any;
}) => {
  return (
    <button
      className="relative inline-flex items-center rounded bg-white px-2 py-2 text-sm font-medium hover:bg-neutral-90 focus:z-20 disabled:cursor-not-allowed"
      disabled={currentPage === totalPages}
      onClick={setNextPage}
    >
      {/* <FontAwesomeIcon icon={faChevronRight} color={"#1B1839"} /> */}
    </button>
  );
};

export default memo(NextButton);
