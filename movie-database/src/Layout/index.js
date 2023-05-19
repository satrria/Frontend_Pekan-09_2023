import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

/**
 * Membuat Component Layout.
 * Layout terdiri dari Navbar, Footer, children.
 * Menggunakan teknik Composition:
 *  - Menampilkan konten dinamis.
 *  - Menggunakan props children.
 */
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {/*
         * Menggunakan Component Container.
         * Konten dibungkus dengan Container.
         */}
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
