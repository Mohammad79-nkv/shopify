import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <ToastContainer />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
