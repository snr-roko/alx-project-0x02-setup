import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className="min-h-screen flex flex-col">
    <Header />
    <Component {...pageProps} />
  </div>
  )
  
}
