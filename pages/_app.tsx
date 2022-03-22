import "../styles/globals.scss";
import type { AppProps } from "next/app";
import PageLayout from "../components/ui/PageLayout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>SurfAdvisor</title>
        <meta name="description" content="Surf info - For surfers by surfers" />
      </Head>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
