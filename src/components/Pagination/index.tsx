import { memo, useEffect, useState } from "react";
import DecremenEllipses from "./DecremenEllipses";
import IncrementEllipses from "./IncrementEllipses";
import NextButton from "./NexButton";
import PageNumbers from "./PageNumber";
import PreviousButton from "./PreviousButton";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  currentPage: number
  setCurrentPage: any;
  totalPages: number;
}) => {
  const [pages, setPages] = useState<number[]>([]);

  const [maxPageLimit, setMaxPageLimit] = useState<number>(1);
  const [minPageLimit, setMinPageLimit] = useState<number>(1);

  useEffect(() => {
    if (minPageLimit && maxPageLimit) {
      const list = [];
      for (let i = minPageLimit; i <= maxPageLimit; i++) {
        list.push(i);
      }
      setPages(list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minPageLimit, maxPageLimit]);

  useEffect(() => {
    if (totalPages) {
      if (totalPages <= 10) {
        setMaxPageLimit(totalPages - 1);
        setMinPageLimit(2);
        return;
      }
      if (currentPage > totalPages) return;
      if (currentPage < 1) return;
      if (currentPage <= 5) {
        setMaxPageLimit(totalPages > 10 ? 8 : totalPages - 1);
        setMinPageLimit(totalPages > 1 ? 2 : totalPages - 1);
      }
      if (currentPage > 5) {
        setMaxPageLimit(
          totalPages - currentPage <= 5 ? totalPages - 1 : currentPage + 3
        );
        setMinPageLimit(
          totalPages - currentPage <= 5 ? totalPages - 7 : currentPage - 2
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, totalPages]);

  const setNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };
  const setPreviousPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  return currentPage >= 1 && totalPages && totalPages > 0 ? (
        <nav
          className="isolate inline-flex space-x-1 rounded-md"
          aria-label="Pagination"
        >
          <PreviousButton
            currentPage={currentPage}
            setPreviousPage={setPreviousPage}
          />
          <PageNumbers
            index={1}
            isSelected={currentPage === 1}
            setCurrentPage={setCurrentPage}
          />
          <DecremenEllipses
            totalPages={totalPages}
            currentPage={currentPage}
            minPageLimit={minPageLimit}
            setPreviousPage={setPreviousPage}
          />
          {totalPages > 2 &&
            [...pages].map((index) => (
              <PageNumbers
                key={index}
                index={index}
                isSelected={index === currentPage}
                setCurrentPage={setCurrentPage}
              />
            ))}
          <IncrementEllipses
            totalPages={totalPages}
            currentPage={currentPage}
            maxPageLimit={maxPageLimit}
            setNextPage={setNextPage}
          />
          {totalPages > 1 && (
            <PageNumbers
              index={totalPages}
              isSelected={currentPage === totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}
          <NextButton
            totalPages={totalPages}
            currentPage={currentPage}
            setNextPage={setNextPage}
          />
        </nav>
  ) : (
    <></>
  );
};

export default memo(Pagination);
