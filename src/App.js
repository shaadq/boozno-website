import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./components/pages/homepage/Homepage";
import ProductPage from "./components/pages/products/ProductPage";
import PricingPage from "./components/pages/pricing/PricingPage";
import { useEffect } from "react";

const TitleUpdater = () => {
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Boozno - Homepage";
        break;
      case "/solution":
        document.title = "Boozno - Solutions";
        break;
      case "/pricing":
        document.title = "Boozno - Pricing";
        break;
      case "/blog":
        document.title = "Boozno - Blog";
        break;
      default:
        document.title = "My App";
    }
  }, [location]);
};
function App() {
  return (
    <div className="App">
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
