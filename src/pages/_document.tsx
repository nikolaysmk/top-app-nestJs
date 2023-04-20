import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      {/* The lang attribute is needed for accessibility */}
      <Head />
      <body>
        <Main />
        <NextScript  />
      </body>
    </Html>
  );
}
