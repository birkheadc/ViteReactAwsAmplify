import SecondaryButton from "@/components/common/SecondaryButton/SecondaryButton";
import { ArrowLeft, ArrowLeftToLine, ArrowRight } from "lucide-react";

type PaginatedControlsProps = {
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
    <div className="flex flex-row justify-between w-full gap-4">
      <div className="flex flex-row gap-4">
        <SecondaryButton disabled={!canGoToPrev} onClick={goToFirstPage}>
          <ArrowLeftToLine />
        </SecondaryButton>
        <SecondaryButton disabled={!canGoToPrev} onClick={goToPrevPage}>
          <ArrowLeft />
        </SecondaryButton>
      </div>
      <span>{currentPage}</span>
      <SecondaryButton disabled={!canGoToNext} onClick={goToNextPage}>
        <ArrowRight />
      </SecondaryButton>
    </div>
  );
}

export default PaginatedControls;
