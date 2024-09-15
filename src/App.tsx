// src/App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Layout from "./pages/layout/Layout";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Work from "./pages/work/Work";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the time as necessary

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
