import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import api from "../../api";
import { ApiProvider } from "../ApiContext/ApiProvider";
import { ThemeProvider } from "../ThemeContext/ThemeProvider";
import Toast from "../../components/toast/Toast/Toast";
import { SessionProvider } from "../SessionContext/SessionProvider";
import { MeProvider } from "../MeContext/MeProvider";

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
        <MeProvider>
          <SessionProvider>
            <ThemeProvider>
              <Toast />
              {children}
            </ThemeProvider>
          </SessionProvider>
        </MeProvider>
      </QueryClientProvider>
    </ApiProvider>
  );
}
