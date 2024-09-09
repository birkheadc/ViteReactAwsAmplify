import { useApi } from "../../../hooks/useApi/useApi";
import RegisterForm from "./RegisterForm/RegisterForm";
import { RegisterFormSchema } from "./RegisterForm/RegisterForm.schema";

function RegisterPage(): JSX.Element | null {
  const api = useApi();

  const handleSubmit = async (data: RegisterFormSchema) => {
    await api.auth.register(data);
  };

  return (
    <div>
      <RegisterForm submitFn={handleSubmit} />
    </div>
  );
}

export default RegisterPage;
