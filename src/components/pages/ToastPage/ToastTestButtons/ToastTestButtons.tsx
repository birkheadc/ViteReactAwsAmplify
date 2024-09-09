import { useKeyedTranslation } from "../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import { useRefreshToast } from "../../../../hooks/useRefreshToast/useRefreshToast";
import SecondaryButton from "../../../common/SecondaryButton/SecondaryButton";

function ToastTestButtons(): JSX.Element | null {
  const { t } = useKeyedTranslation(
    "components.pages.ToastPage.ToastTestButtons"
  );

  const toast = useRefreshToast("toast-page");

  const toast2 = useRefreshToast();

  const infoToast = (refresh: boolean = true) => {
    refresh
      ? toast(t("info.message"), "info")
      : toast2(t("info.message"), "info");
  };

  const successToast = (refresh: boolean = true) => {
    refresh
      ? toast(t("success.message"), "success")
      : toast2(t("success.message"), "success");
  };

  const warningToast = (refresh: boolean = true) => {
    refresh
      ? toast(t("warning.message"), "warning")
      : toast2(t("warning.message"), "warning");
  };

  const errorToast = (refresh: boolean = true) => {
    refresh
      ? toast(t("error.message"), "error")
      : toast2(t("error.message"), "error");
  };

  const defaultToast = (refresh: boolean = true) => {
    refresh
      ? toast(t("default.message"), "default")
      : toast2(t("default.message"), "default");
  };

  return (
    <div className="flex flex-col items-center gap-4 m-auto w-fit">
      <span>{t("message")}</span>
      <div className="flex gap-4">
        <SecondaryButton onClick={() => infoToast(true)}>
          {t("info.button")}
        </SecondaryButton>
        <SecondaryButton onClick={() => successToast(true)}>
          {t("success.button")}
        </SecondaryButton>
        <SecondaryButton onClick={() => warningToast(true)}>
          {t("warning.button")}
        </SecondaryButton>
        <SecondaryButton onClick={() => errorToast(true)}>
          {t("error.button")}
        </SecondaryButton>
        <SecondaryButton onClick={() => defaultToast(true)}>
          {t("default.button")}
        </SecondaryButton>
      </div>
      <span>{t("explanation")}</span>
      <div className="flex gap-4">
        <SecondaryButton onClick={() => infoToast(false)}>
          {t("info.button")}
        </SecondaryButton>
        <SecondaryButton onClick={() => successToast(false)}>
          {t("success.button")}
        </SecondaryButton>
        <SecondaryButton onClick={() => warningToast(false)}>
          {t("warning.button")}
        </SecondaryButton>
        <SecondaryButton onClick={() => errorToast(false)}>
          {t("error.button")}
        </SecondaryButton>
        <SecondaryButton onClick={() => defaultToast(false)}>
          {t("default.button")}
        </SecondaryButton>
      </div>
    </div>
  );
}

export default ToastTestButtons;
