import { Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Club from "./pages/Club";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Adhesion from "./pages/Adhesion";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="le-club" element={<Club />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faq" element={<Faq />} />
        <Route path="adhesion" element={<Adhesion />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}