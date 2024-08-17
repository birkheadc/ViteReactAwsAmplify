import { ApiProviderContext } from "@/contexts/ApiContext/ApiContext";
import React from "react";

function LoginPage(): JSX.Element | null {
  const { api } = React.useContext(ApiProviderContext);

  const testLogin = async () => {
    const accessToken = await api.auth.login(
      "birkheadc@gmail.com",
      "Password1!"
    );
    console.log(`Bearer ${accessToken}`);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <p>Welcome to the Login Page</p>
      <button onClick={testLogin}>Test Login</button>
    </div>
  );
}

export default LoginPage;
