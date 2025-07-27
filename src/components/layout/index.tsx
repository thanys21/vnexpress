import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* TODO: Add menu bar */}
      <main className="flex-1 container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
