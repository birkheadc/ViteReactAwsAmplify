const register = async (
  emailAddress: string,
  password: string,
): Promise<void> => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
};

export default register;
