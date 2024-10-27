import { useDedup } from "../../../hooks/useDedup/useDedup";
import SecondaryButton from "../../common/SecondaryButton/SecondaryButton";

function AboutPage(): JSX.Element | null {
  const slowLog = async () => {
    console.log("Hello");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("World");
  };

  const dedup = useDedup(slowLog);

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About Page</p>

      <SecondaryButton onClick={dedup}>Test Dedup</SecondaryButton>
    </div>
  );
}

export default AboutPage;
