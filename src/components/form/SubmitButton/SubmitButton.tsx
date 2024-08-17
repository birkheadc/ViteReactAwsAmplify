import { useKeyedTranslation } from "../../../hooks/useKeyedTranslation/useKeyedTranslation";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";

type SubmitButtonProps = {
  onClick: () => void;
};

function SubmitButton({ onClick }: SubmitButtonProps): JSX.Element | null {
  const { t } = useKeyedTranslation("components.form.SubmitButton");

  return <PrimaryButton onClick={onClick}>{t("submit")}</PrimaryButton>;
}

export default SubmitButton;
