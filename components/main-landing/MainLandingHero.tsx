import styles from "./MainLandingHero.module.scss";

const MainLandingHero: React.FC = () => {
  return (
    <div className={styles["main-landing-hero-container"]}>
      <h2>
        <span>For surfers</span>
        <br />
        by surfers
      </h2>
      <img src="/img/landing_bg_desktop_overlay.png" alt="" />
      <img src="/img/landing_bg_desktop.jpg" alt="" />
    </div>
  );
};

export default MainLandingHero;
