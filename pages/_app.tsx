import "../styles/globals.scss";
import type { AppProps } from "next/app";
import PageLayout from "../components/ui/PageLayout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=UnifrakturCook:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}

export default MyApp;
