import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from 'src/components/Header/Header';
import { Menu } from 'src/components/Menu/Menu';
import { AppProvider, useAppContext } from 'src/components/app.provider';

const queryClient = new QueryClient();

function AppContent({ Component, pageProps }: AppProps) {

  const {state: {menu: {isMenuOpened}, interface: {isMobile} }} = useAppContext();

  const content = (!isMobile || !isMenuOpened) && <Component {...pageProps}/> || <></>

  return (
    <>
      <Header />
      <section className="app-content">
        <Menu />
        {content}
      </section>
    </>
  )
}

function MyApp(appProps: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <AppContent {...appProps} />
      </AppProvider>
    </QueryClientProvider>
  );
}



export default MyApp;
