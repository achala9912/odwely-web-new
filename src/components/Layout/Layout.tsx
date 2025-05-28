import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-25 dark:bg-lightblack-200">
      <header className="md:h-[70px] h-[40px]">
        <Navbar />
      </header>
      <main className="flex-1 p-4 max-w-[1320px] mx-auto">{children}</main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
