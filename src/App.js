import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./components/pages/homepage/Homepage";
import ProductPage from "./components/pages/products/ProductPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/solution" element={<ProductPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
