import "@/styles/globals.css";
import localFont from "next/font/local"

import { ThemeProvider } from "@material-tailwind/react";

export default function MyApp({ Component, pageProps }) {
  // const myfont=localFont({
  //   src:[{
  //     path:'/fonts//coolvetica rg.ttf',
  //     weight:'400'
  //   }],
  //   variable: '--font-coolvetica'
  // })
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
