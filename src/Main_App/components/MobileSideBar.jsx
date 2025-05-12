import styles from "./MobileSideBar.module.css";
import { useEffect, useState } from "react";
import clsx from "clsx";
import progileImage from "/images/profile-pic.jpg";

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
    >
      <div className={styles.sidebarTop}>
        <div className={styles.sidebarTopLeft}>
          <div className={clsx(styles.profilePicContainer)}>
            <img src={progileImage} alt="profile" />
          </div>
        </div>
        <div className={styles.sidebarTopRight}>
          <h4>Emily Johnson</h4>
          <p>Premium Student</p>
        </div>
      </div>
      <div className={styles.sidebarBottom}></div>
    </div>
  );
}

export default MobileSideBar;
