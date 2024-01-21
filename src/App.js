import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RouterMap from "./routes/index";
import { navLinks } from "./data/NavLinks";
import { footerLinks } from "./data/FooterLinks";

function App() {
  return (
    <>
      <ScrollToTop />

      <Header data={navLinks} />
      <Main>
        <RouterMap />
      </Main>
      <Footer data={footerLinks} />
    </>
  );
}

export default App;
