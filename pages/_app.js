import "@/styles/globals.css";
import NavBar from "@/Components/modules/NavBar/NavBar";
import Footer from "@/Components/modules/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
