import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";

const SiteLayout = ({ children }: { children?: React.ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-1 pt-16 md:pt-20">{children ?? <Outlet />}</main>
    <Footer />
    <FloatingActions />
  </div>
);

export default SiteLayout;
