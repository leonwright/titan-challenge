import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const ReactQueryContextProvider = ({ children }) => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <>{children}</>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
