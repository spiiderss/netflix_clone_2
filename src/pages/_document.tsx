import { Head, Html, Main, NextScript } from "next/document";

// eslint-disable-next-line require-jsdoc
export default function Document() {
  return (
    <Html>
      <Head />
      <body className="dark:bg-gray-800 transition-all duration-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
