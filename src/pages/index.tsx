import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const a = 20;
  console.log('some');

  return (
    <>
      <Head>
        <title>INdex WTF INDEX</title>
      </Head>
      <main>
        <h1 className="">Hello</h1>
        <h2> {a ?? 'some'}</h2>
      </main>
    </>
  );
}
