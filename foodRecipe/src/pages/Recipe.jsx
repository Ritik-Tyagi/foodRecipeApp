import { useParams } from 'react-router-dom';
import { recipes } from '../data';

const Recipe = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-page">
      <div className="recipe-header">
        <h1>{recipe.title}</h1>
        <img  src={recipe.image} alt={recipe.title} className="recipe-image" />
      </div>
      
      <div className="recipe-meta">
        <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
        <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
      </div>
      
      <div className="recipe-content">
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div className="instructions">
          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Recipe;