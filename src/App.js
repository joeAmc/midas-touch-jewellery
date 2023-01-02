import React, { Suspense, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useEffect } from "react";
import LoadingSpinner from "react-spinners/DotLoader";
// import useSticky from "./useSticky";

const HomePage = React.lazy(() => import("./pages/Home"));
const RingsPage = React.lazy(() => import("./pages/Rings"));
const EarringsPage = React.lazy(() => import("./pages/Earrings"));
const NecklacesPage = React.lazy(() => import("./pages/Necklaces"));

const App = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#839F87");

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const location = useLocation();

  return (
    <>
      {(() => {
        if (location.pathname === "/") {
          return <Banner />;
        } else {
          return null;
        }
      })()}
      <Header />
      <Suspense
        fallback={
          <div className="spinner">
            <LoadingSpinner color={color} loading={loading} size={100} />
          </div>
        }
      >
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/rings" element={<RingsPage />} />
          <Route path="/earrings" element={<EarringsPage />} />
          <Route path="/necklaces" element={<NecklacesPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
