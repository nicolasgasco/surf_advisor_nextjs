import Image from "next/image";
import styles from "./MainLandingHero.module.scss";

const MainLandingHero: React.FC = () => {
  return (
    <div className={styles["main-landing-hero-container"]}>
      <h2>
        <span>For surfers</span>
        <br />
        by surfers
      </h2>
      <Image
        className={styles.overlay}
        src="/img/landing_bg_desktop_overlay.png"
        layout="fill"
        alt=""
      />
      <Image
        className={styles.background}
        src="/img/landing_bg_desktop.jpg"
        layout="fill"
        alt=""
      />
    </div>
  );
};

export default MainLandingHero;
