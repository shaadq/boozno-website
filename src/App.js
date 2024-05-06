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
import LegalTabs from "./components/pages/legal-tabs/LegalTabs";
import TermsConditions from "./components/pages/legal-tabs/tabs/TermsConditions";
import PrivacyPolicy from "./components/pages/legal-tabs/tabs/PrivacyPolicy";
import CookiesPolicy from "./components/pages/legal-tabs/tabs/CookiesPolicy";
import GDPR from "./components/pages/legal-tabs/tabs/GDPR";
import MPI from "./components/pages/legal-tabs/tabs/MPI";
import DynamicTabContent from "./components/pages/faqs/DynamicTabContent";
import { productFaq, subPlanFaq, servicesFaq } from "./components/pages/faqs/data";

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

          <Route path="/faqs" element={<FaqPage />}>
            <Route path="product" element={<DynamicTabContent data={productFaq} />} />
            <Route path="subscriptionplan" element={<DynamicTabContent data={subPlanFaq} />} />
            <Route path="services" element={<DynamicTabContent data={servicesFaq} />} />
          </Route>

          <Route path="/legal" element={<LegalTabs />}>
            <Route path="termsconditons" element={<TermsConditions />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="cookiespolicy" element={<CookiesPolicy />} />
            <Route path="gdpr" element={<GDPR />} />
            <Route path="mpi" element={<MPI />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
