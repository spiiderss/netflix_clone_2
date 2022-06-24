import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import SEO from "../../next-seo.config.js";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

// eslint-disable-next-line require-jsdoc
/**
 * 描述
 * @date 2022-04-27
 * @param {any} {Component
 * @param {any} pageProps}:AppProps
 * @return {any}
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* the default seo , see :https://github.com/garmeeh/next-seo*/}

      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
