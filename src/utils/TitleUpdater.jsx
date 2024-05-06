import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitleUpdater = () => {
  // Mapping paths to titles
  const pathToTitle = {
    "/": "Boozno - Homepage",
    "/solution": "Boozno - Solutions",
    "/pricing": "Boozno - Pricing",
    "/blog": "Boozno - Blog",
    "/faqs/product": "Boozno - FAQs",
    "/faqs/subscriptionplan": "Boozno - FAQs",
    "/faqs/services": "Boozno - FAQs",
    "/legal/termsconditons": "Boozno - Legal",
    "/legal/privacypolicy": "Boozno - Legal",
    "/legal/cookiespolicy": "Boozno - Legal",
    "/legal/gdpr": "Boozno - Legal",
    "/legal/mpi": "Boozno - Legal",
  };
  const location = useLocation();
  useEffect(() => {
    // Use the map to set the document title, with a default value if the path isn't found
    const title = pathToTitle[location.pathname] || "Boozno";
    document.title = title;
  }, [location]);
  return null;
};

export default TitleUpdater;
