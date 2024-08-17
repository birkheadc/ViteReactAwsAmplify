import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import api from "../../api";
import { ApiProvider } from "../ApiContext/ApiContext";
import { ThemeProvider } from "../ThemeContext/ThemeContext";

type ContextProvidersProps = {
  children?: React.ReactNode;
};

export function ContextProviders({
  children,
}: ContextProvidersProps): JSX.Element | null {
  const queryClient = new QueryClient();

  return (
    <ApiProvider api={api}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryClientProvider>
    </ApiProvider>
  );
}
