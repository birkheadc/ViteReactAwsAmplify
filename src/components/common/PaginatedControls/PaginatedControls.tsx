import SecondaryButton from "@/components/common/SecondaryButton/SecondaryButton";
import { ArrowLeft, ArrowLeftToLine, ArrowRight } from "lucide-react";

export type PaginatedControlsProps = {
  currentPage: number;
  goToFirstPage: () => void;
  goToPrevPage: () => void;
  goToNextPage: () => void;
  canGoToPrev: boolean;
  canGoToNext: boolean;
};

function PaginatedControls({
  currentPage,
  goToFirstPage,
  goToPrevPage,
  goToNextPage,
  canGoToPrev,
  canGoToNext,
}: PaginatedControlsProps): JSX.Element | null {
  return (
    <div className="flex flex-row items-center justify-between gap-20 m-auto w-fit">
      <div className="flex flex-row justify-between w-40 gap-4">
        <SecondaryButton
          aria-label="go to first page"
          disabled={!canGoToPrev}
          onClick={goToFirstPage}
        >
          <ArrowLeftToLine />
        </SecondaryButton>
        <SecondaryButton
          aria-label="go to previous page"
          disabled={!canGoToPrev}
          onClick={goToPrevPage}
        >
          <ArrowLeft />
        </SecondaryButton>
      </div>
      <span>{currentPage}</span>
      <div className="w-40">
        <SecondaryButton
          aria-label="go to next page"
          disabled={!canGoToNext}
          onClick={goToNextPage}
        >
          <ArrowRight />
        </SecondaryButton>
      </div>
    </div>
  );
}

export default PaginatedControls;
