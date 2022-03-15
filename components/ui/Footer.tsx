import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://nicolasgasco.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Made with ♡ by Nicolas Gasco
      </a>
      <span>
        Photo by{" "}
        <a href="https://unsplash.com/@alwig64?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Alex Wigan
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </footer>
  );
};

export default Footer;
