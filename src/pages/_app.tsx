import type { AppProps } from "next/app";
import "../styles/globals.css";

// eslint-disable-next-line require-jsdoc
/**
 * 描述
 * @date 2022-04-27
 * @param {any} {Component
 * @param {any} pageProps}:AppProps
 * @return {any}
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
