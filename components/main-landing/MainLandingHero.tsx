import styles from "./MainLandingHero.module.scss";

const MainLandingHero: React.FC = () => {
  return (
    <div className={styles["main-landing-hero-container"]}>
      <h2>
        <span>For surfers</span>
        <br />
        by surfers
      </h2>
      <img src="/img/landing-bg-desktop.jpg" />
    </div>
  );
};

export default MainLandingHero;
