import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./components/pages/homepage/Homepage";
import PricingPage from "./components/pages/pricing/PricingPage";
import ProductPage from "./components/pages/products/ProductPage";
import ScrollToTop from "./utils/ScrollToTop";
import TitleUpdater from "./utils/TitleUpdater";
import AboutUsPage from "./components/pages/aboutus/AboutUsPage";
import NotFoundPage from "./components/pages/notfound/NotFoundPage";
import FaqPage from "./components/pages/faqs/FaqPage";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <TitleUpdater />
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/solution" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
