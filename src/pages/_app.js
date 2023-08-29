import "@/styles/globals.css";

import { IBM_Plex_Sans } from "next/font/google";
import { Inter } from "next/font/google";

// const plex = IBM_Plex_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   style: ["normal", "italic"],
// });

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
