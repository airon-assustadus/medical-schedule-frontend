import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from 'src/components/Header/Header';
import { Menu } from 'src/components/Menu/Menu';
import { AppProvider } from 'src/components/app.provider';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Header/>
        <section className="
          flex
          flex-row
          justify-start
          h-full
          w-full
          mt-1">
          <Menu />
          <Component {...pageProps} />
        </section>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
