import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>My WTF App</title>
        <meta name="description" content="My App" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
