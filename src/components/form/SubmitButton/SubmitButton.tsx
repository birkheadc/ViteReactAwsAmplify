import { useKeyedTranslation } from "../../../hooks/useKeyedTranslation/useKeyedTranslation";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";

function SubmitButton(): JSX.Element | null {
  const { t } = useKeyedTranslation("components.form.SubmitButton");

  return <PrimaryButton type="submit">{t("submit")}</PrimaryButton>;
}

export default SubmitButton;
