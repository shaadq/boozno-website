import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./components/pages/homepage/Homepage";
import PricingPage from "./components/pages/pricing/PricingPage";
import ProductPage from "./components/pages/products/ProductPage";
import ScrollToTop from "./utils/ScrollToTop";
import TitleUpdater from "./utils/TitleUpdater";

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
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
