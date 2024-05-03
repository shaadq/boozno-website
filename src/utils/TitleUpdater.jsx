import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
        document.title = "Boozno";
    }
  }, [location]);
  return null;
};

export default TitleUpdater;
