import "../assets/styles/scss/globals.scss";
import MainLayout from "../components/main-layout/index";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
