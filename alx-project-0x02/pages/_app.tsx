import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className="min-h-screen flex flex-col bg-amber-50">
    <Header />
    <Component {...pageProps} />
  </main>
  )
  
}
