import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Header from "../scr/components/organism/header";
import Footer from "../scr/components/organism/footer";
import Button from "../scr/components/molecule/button";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Button path="/contact" variant={"fixed"}>
        CONTACT US
      </Button>
      <Footer />
    </>
  );
}

export default MyApp;
