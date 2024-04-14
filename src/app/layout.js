import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";
import Boxx from "@/components/Boxx";
import Head from "next/head";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "Movie rating app",

};

export default function RootLayout({ children }) {
  // <Head>
  // <title>Wetin dey xup</title>
  // <meta property="og:image" content="/IMDB.svg.png" />
  // </Head>
  return (
    <html lang="en">
      <body className={inter.className} >
        <Provider>
          <Suspense>
          <div className=" max-sm: sticky max-sm:top-0 max-sm: z-10 max-sm:dark:bg-gray-500 max-sm:bg-white">
          <Header/>
          <Navbar/>
          <Boxx/>
          </div>
          
          {children}
          </Suspense>
        </Provider>
        </body>
       
    </html>
  );
}
