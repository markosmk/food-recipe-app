export default function CardRecipe({ recipe }) {
  const { label, image, source } = recipe.recipe;
  return (
    image.match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="recipe-card">
        <div className="card-image">
          <img src={image} alt={label} />
          <span>Author: {source}</span>
        </div>
        <div className="card-title">{label}</div>
        <div className="card-link">Read More</div>
      </div>
    )
  );
}
