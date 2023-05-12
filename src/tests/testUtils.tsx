import { RenderOptions, render as rtlRender } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { FC, ReactElement } from "react";
import theme from "@theme/themeProvider";
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary";
const queryClient = new QueryClient();

interface WrapperProps {
  children?: React.ReactNode;
}

const renderWithProviders = (ui: ReactElement, options?: RenderOptions) => {
  const Wrapper: FC<WrapperProps> = ({ children }) => {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>{children}</ErrorBoundary>
        </ThemeProvider>
      </QueryClientProvider>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";

export { renderWithProviders as render };
