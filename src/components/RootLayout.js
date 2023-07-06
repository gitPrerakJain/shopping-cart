import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
