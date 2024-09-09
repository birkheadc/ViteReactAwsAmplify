const URL = import.meta.env.VITE_COGNITO_URL;
const CLIENT_ID = import.meta.env.VITE_COGNITO_CLIENT_ID;

const cognito = {
  URL,
  CLIENT_ID,
  LOGIN_URL: `${URL}/login?client_id=${CLIENT_ID}&redirect_uri=${window.location.protocol}//${window.location.host}/login&response_type=code`,
  REGISTER_URL: `${URL}/signup?client_id=${CLIENT_ID}&redirect_uri=${window.location.protocol}//${window.location.host}/login&response_type=code`,
};

export default cognito;
