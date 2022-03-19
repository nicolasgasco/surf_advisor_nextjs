import "../styles/globals.scss";
import type { AppProps } from "next/app";
import PageLayout from "../components/ui/PageLayout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
