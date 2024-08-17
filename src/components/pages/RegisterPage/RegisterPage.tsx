import { ApiProviderContext } from "@/contexts/ApiContext/ApiContext";
import React from "react";

function RegisterPage(): JSX.Element | null {
  const { api } = React.useContext(ApiProviderContext);

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
