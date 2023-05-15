import { memo } from "react";
import { motion } from "framer-motion";

const PageNumbers = ({
  index,
  isSelected,
  setCurrentPage
}: {
  index: number;
  isSelected: boolean;
  setCurrentPage: any;
}) => {
  return (
    // ""
    isSelected ? (
      <motion.button
        layoutId="highlight"
        className={`relative inline-flex items-center px-[6.5px] py-2  rounded text-base font-medium focus:z-20 z-10 bg-primary text-white`}
        onClick={() => setCurrentPage(index)}
      >
        {index}
      </motion.button>
    ) : (
      <button
        className={`relative inline-flex items-center px-[6.5px] py-2  rounded text-base font-medium focus:z-20 z-10 bg-white text-primary-10 hover:bg-neutral-90`}
        onClick={() => setCurrentPage(index)}
      >
        {index}
      </button>
    )
  );
};

export default memo(PageNumbers);
