import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // use "auto" if you want instant scroll
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;