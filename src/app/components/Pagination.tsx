"use client";

import Image from "next/image";
import { FC } from "react";
import rightArrowIcon from "../../../public/assets/chevron_left.svg";

interface IProps {
  next: () => void;
  previous: () => void;
  loadMore: () => void;
  currentPage: number;
  totalPages: number;
}

export const Pagination: FC<IProps> = ({
  next,
  previous,
  loadMore,
  currentPage,
  totalPages,
}) => (
  <div className="flex flex-col gap-2">
    <button
      className="mx-auto"
      onClick={loadMore}
      disabled={currentPage === totalPages}
    >
      Load more
    </button>
    <div className="flex items-center gap-4">
      <button onClick={previous} disabled={currentPage === 1}>
        <Image
          className="cursor-pointer"
          aria-hidden
          alt="Previous button"
          src={rightArrowIcon}
          width={16}
          height={16}
        />
      </button>
      Page {currentPage} of {totalPages}
      <button onClick={next} disabled={currentPage === totalPages}>
        <Image
          className=" cursor-pointer rotate-180"
          aria-hidden
          alt="Next button"
          src={rightArrowIcon}
          width={16}
          height={16}
        />
      </button>
    </div>
  </div>
);
