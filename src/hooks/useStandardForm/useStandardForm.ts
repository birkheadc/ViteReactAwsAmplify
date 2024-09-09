import { UseMutationResult, useMutation } from "@tanstack/react-query";
import {
  DefaultValues,
  FieldValues,
  Path,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import {
  UseRefreshToastReturn,
  useRefreshToast,
} from "../useRefreshToast/useRefreshToast";
import { z } from "zod";
import { ApiError } from "../../types/apiResult/apiError";
import { zodResolver } from "@hookform/resolvers/zod";
import { useKeyedTranslation } from "../useKeyedTranslation/useKeyedTranslation";

export type UseStandardFormReturn<TSchema extends FieldValues> = {
  form: UseFormReturn<TSchema>;
  mutation: UseMutationResult<void, ApiError, TSchema>;
  toast: UseRefreshToastReturn;
};

export type UseStandardFormOptions<TSchema extends FieldValues> = {
  title: string;
  schema: z.ZodType<TSchema>;
  defaultValues: DefaultValues<TSchema>;
  submitFn: (data: TSchema) => Promise<void>;
  successMessage?: string;
};

export function useStandardForm<TSchema extends FieldValues>({
  title,
  schema,
  defaultValues,
  submitFn,
  successMessage,
}: UseStandardFormOptions<TSchema>): UseStandardFormReturn<TSchema> {
  const { t } = useKeyedTranslation("components.form");

  const toast = useRefreshToast(title);

  const form = useForm<TSchema>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  const mutationFn = async (data: TSchema) => {
    toast("submit", "info", true);
    await submitFn(data);
  };

  const onError = (error: ApiError) => {
    if (error.errorCode) {
      toast(t(`errorCode.${error.errorCode}`), "error");
    } else {
      toast(t(`status.${error.status}`), "error");
    }
    for (const key of Object.keys(defaultValues)) {
      if (error.validationErrors[key]) {
        form.setError(key as Path<TSchema>, {
          message: error.validationErrors[key],
        });
      }
    }
  };

  const onSuccess = () => {
    toast(successMessage ?? "success", "success");
  };

  const mutation = useMutation<void, ApiError, TSchema>({
    mutationFn,
    onError,
    onSuccess,
  });

  return {
    form,
    mutation,
    toast,
  };
}
