import { useApi } from "../../../hooks/useApi/useApi";

function RegisterPage(): JSX.Element | null {
  const { api } = useApi();

  const testRegister = async () => {
    await api.auth.register("birkheadc@gmail.com", "Password1!");
  };

  return (
    <div>
      <h1>Register Page</h1>
      <p>Welcome to the Register Page</p>
      <button onClick={testRegister}>Test Register</button>
    </div>
  );
}

export default RegisterPage;
