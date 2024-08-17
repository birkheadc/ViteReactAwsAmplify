import { FieldError } from "react-hook-form";

type FormFieldErrorProps = {
  error: FieldError | undefined;
};

function FormFieldError({ error }: FormFieldErrorProps): JSX.Element | null {
  console.log({ error });

  if (error === undefined) return null;

  return (
    <div>
      <span className="text-secondary-500">{error.message}</span>
    </div>
  );
}

export default FormFieldError;
