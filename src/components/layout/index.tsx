import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col gap-16">
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
