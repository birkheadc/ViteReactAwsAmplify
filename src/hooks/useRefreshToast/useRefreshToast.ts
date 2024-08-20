import React from "react";
import { toast } from "react-toastify";

export default function useRefreshToast(toastId?: string) {
  const refreshToast = (
    content: React.ReactNode,
    type?: "info" | "success" | "warning" | "error" | "default",
  ) => {
    if (toastId && toast.isActive(toastId)) {
      toast.update(toastId, {
        render: content,
        type: type ?? "default",
      });
      return;
    }
    toast(content, {
      type: type ?? "default",
      toastId: toastId,
    });
  };

  return refreshToast;
}
