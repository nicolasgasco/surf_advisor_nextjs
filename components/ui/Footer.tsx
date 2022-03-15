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
    </footer>
  );
};

export default Footer;
