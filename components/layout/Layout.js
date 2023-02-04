import Head from "next/head";

import Footer from "./../footer/footer";
import Header from "../header/Header";

function Layout({ children, title = "My Next.js App" }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
