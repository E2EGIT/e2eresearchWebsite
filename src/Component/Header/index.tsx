"use client";
import { Suspense, useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Link from "next/link";
import E2ELogo from "../../../public/e2e_logo.svg";
import Search from "../Search";
import ToggleMenu from "../../../public/homePage/icons/toggle_menu.svg";
import { usePathname } from "next/navigation";

const Header = (props: any) => {
  const { index } = props;

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const [scrollY, setScrollY] = useState(0);
  const handleScroll_ = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    handleScroll_();

    window.addEventListener("scroll", handleScroll_);
    return () => {
      window.removeEventListener("scroll", handleScroll_);
    };
  }, []);
  const pathname = usePathname();

  return (
    <div>
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <header
        className={`e2e-header left-right-p header-py ${
          pathname != "/" ? "header-color" : ""
        } ${scrollY >= 10 ? "stikey-header" : ""}`}>
        <nav className="container-fluid cu-nav">
          <Link href="/" className="e2e-logo">
            <E2ELogo />
          </Link>
          <div className="d-flex align-item-center seach-blk">
            <Suspense>
              <Search />
            </Suspense>
            <ToggleMenu
              className={`toggle-btn-icon toggle-svg ${index}`}
              onClick={openSidebar}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
