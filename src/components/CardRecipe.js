import styles from './CardRecipe.module.css';

export default function CardRecipe({ recipe }) {
  const { label, image, source } = recipe.recipe;
  return (
    image.match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className={styles.card}>
        <div className={styles.cardThumb}>
          <img src={image} alt={label} />
        </div>
        <div className={styles.cardTitle}>
          <small>Author: {source}</small>
          <h3>{label}</h3>
        </div>
        <div className={styles.btnArea}>
          <a className={styles.favBtn} href="/favourites">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="/" className="btn">
            Read More
          </a>
        </div>
      </div>
    )
  );
}
