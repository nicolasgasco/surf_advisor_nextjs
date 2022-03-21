import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <small>
        Made with ♡ by{" "}
        <a
          href="https://nicolasgasco.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Nicolas Gasco
        </a>
      </small>
      <small>
        Style inspired by{" "}
        <a
          href="https://jobs.dorfjungs.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          dorfjungs.com
        </a>
        , photo by{" "}
        <a
          href="https://unsplash.com/@matthewchrc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noreferrer noopener"
        >
          Mathieu CHIRICO
        </a>{" "}
        on Unsplash
      </small>
    </footer>
  );
};

export default Footer;
