import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnnouncementBanner from "./AnnouncementBanner";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner />
      <Navbar />
      <main className="flex-1 pt-[calc(4rem+var(--announcement-height,0px))]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
