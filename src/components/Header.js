import { useEffect, useState } from 'react';
import styles from './Header.module.css';
export default function Header() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  let mainMenuTop = offset >= 1 ? styles.headerFix : styles.header;

  // var ScrollTop = $('.back-to-top');
  // if ($(window).scrollTop() > 1000) {
  //     ScrollTop.fadeIn(1000);
  // } else {
  //     ScrollTop.fadeOut(1000);
  // }

  return (
    <header className={mainMenuTop}>
      <nav className="container">
        <div className={styles.navbar}>
          <div className={styles.navMobile}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et sit,
            necessitatibus explicabo ea eveniet ex ab saepe molestiae nisi in cumque
            impedit, asperiores temporibus provident natus itaque, repellendus omnis.
          </div>
          <div className={styles.navLogo}>
            <a href="/">
              RECIPE<span>APP</span>
            </a>
          </div>
          <ul className={styles.navMenu}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <ul className={styles.navRight}>
            <li>
              <a href="/favourites">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>2</span>
                <div className={styles.backdropIconContent}>
                  <div className={styles.backdropIcon}></div>
                </div>
              </a>
            </li>
            <li>
              <a href="/github">
                <svg
                  className="w-6 h-6"
                  fill="#000"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                </svg>
                <div className={styles.backdropIconContent}>
                  <div className={styles.backdropIcon}></div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
