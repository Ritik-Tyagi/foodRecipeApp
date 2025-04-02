import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.title} className="recipe-card-image" />
        <h3>{recipe.title}</h3>
        <p className="recipe-meta">
          {recipe.prepTime} | {recipe.servings} servings | {recipe.difficulty}
        </p>
      </Link>
    </div>
  );
};

export default RecipeCard;