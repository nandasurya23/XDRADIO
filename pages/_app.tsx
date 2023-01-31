import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/df82hir2r/image/upload/v1675135466/xdradio/18_utaonl.png"
          type="image/x-icon"
        />
        <title>XD RADIO</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
