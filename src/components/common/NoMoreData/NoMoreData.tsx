import { useKeyedTranslation } from "../../../hooks/useKeyedTranslation/useKeyedTranslation";
import DialogueBox from "../DialogueBox/DialogueBox";

type NoMoreDataProps = {
  data: unknown[];
  pageLength: number;
  isFetched: boolean;
};

function NoMoreData({
  data,
  pageLength,
  isFetched,
}: NoMoreDataProps): JSX.Element | null {
  const { t } = useKeyedTranslation("components.common.NoMoreData");

  if (!isFetched) return <></>;
  if (data.length === pageLength) return <></>;

  return <DialogueBox type="alert" message={t("noMoreData")} />;
}

export default NoMoreData;
