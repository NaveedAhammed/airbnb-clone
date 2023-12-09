import { Outlet } from "react-router-dom";

import styles from "./appLayout.module.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Register from "../features/auth/Register";
import ToasterProvider from "../providers/ToasterProvider";

function AppLayout() {
  return (
    <div className={styles.container}>
      <ToasterProvider />
      <Navbar />
      <main className={styles.main}>
        <Outlet />
        <Register />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
