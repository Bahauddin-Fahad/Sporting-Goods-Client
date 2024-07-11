import { useEffect } from "react";
import MainLayout from "./components/layout/MainLayout";
import Navbar from "./components/layout/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);
  return (
    <>
      <Navbar />
      <MainLayout />
      <ToastContainer />
    </>
  );
}

export default App;
