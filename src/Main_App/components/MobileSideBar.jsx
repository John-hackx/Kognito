import styles from "./MobileSideBar.module.css";
import { useEffect, useState } from "react";

function MobileSideBar({ sidebarRef }) {
  const [windowHeight, setWindowHeight] = useState(() => window.innerHeight);
  useEffect(function () {
    const windowHeight = window.innerHeight;
    setWindowHeight(windowHeight);
  }, []);
  return (
    <div
      ref={sidebarRef}
      style={{ height: `${windowHeight}px` }}
      className={styles.mobileSideBar}
    ></div>
  );
}

export default MobileSideBar;
