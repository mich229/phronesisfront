import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" })
      );
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <ScrollManager />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}