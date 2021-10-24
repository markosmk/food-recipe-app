import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <ul className={styles.footerNav}>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms</a>
          </li>
          <li>
            <a href="/faq">Faq</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className={styles.footerCopy}>
          <p>Copyright © 2021. Designed by MarkosMk</p>
        </div>
      </div>
    </footer>
  );
}
