import Image from "next/image";
import { FC } from "react";
import rightArrowIcon from "../../../public/assets/chevron_left.svg";
import Link from "next/link";
import { HOME_ROUTE } from "../routes/routes";

interface IProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination: FC<IProps> = ({ currentPage, totalPages }) => {
  const disablePrevButton = currentPage === 1;
  const disableNextButton = currentPage === totalPages;

  return (
    <div className="flex items-center gap-4">
      <Link
        href={`${HOME_ROUTE.basePath}?page=${currentPage - 1}`}
        className={disablePrevButton ? "pointer-events-none" : ""}
        aria-disabled={disablePrevButton}
        tabIndex={disablePrevButton ? -1 : undefined}
        data-testid="previous-button"
      >
        <Image
          className="cursor-pointer"
          aria-hidden
          alt="Previous button"
          src={rightArrowIcon}
          width={16}
          height={16}
        />
      </Link>
      Page {currentPage} of {totalPages}
      <Link
        href={`${HOME_ROUTE.basePath}?page=${currentPage + 1}`}
        aria-disabled={disableNextButton}
        className={disableNextButton ? "pointer-events-none" : ""}
        tabIndex={disableNextButton ? -1 : undefined}
        data-testid="next-button"
      >
        <Image
          className=" cursor-pointer rotate-180"
          aria-hidden
          alt="Next button"
          src={rightArrowIcon}
          width={16}
          height={16}
        />
      </Link>
    </div>
  );
};
