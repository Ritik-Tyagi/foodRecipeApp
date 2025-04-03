import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductData } from '../ContextApi';
import { recipes } from '../data';
const RecipeCard = ({ recipe }) => {
  const { savedRecipes, setSavedRecipes } = useContext(ProductData);

  function handleSave(id) {
    // Check if recipe is already saved
    const alreadySaved = savedRecipes.some(item => item.id === id);
    
    if (!alreadySaved) {
      // Find the recipe to save
      const recipeToSave = recipes.find(item => item.id === id);
      
      if (recipeToSave) {
        setSavedRecipes(prev => [...prev, recipeToSave]);
      }
    } else {
      // Remove if already saved
      setSavedRecipes(prev => prev.filter(item => item.id !== id));
    }
  }

  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.title} className="recipe-card-image" />
        <h3>{recipe.title}</h3>
        <p className="recipe-meta">
          {recipe.prepTime} | {recipe.servings} servings | {recipe.difficulty}
        </p>
      </Link>
      <button style={{padding:"10px",marginBottom:"4px",borderRadius:"10px"}} onClick={() => handleSave(recipe.id)}>
        {savedRecipes.some(item => item.id === recipe.id) ? 'Saved' : 'Save'}
      </button>
    </div>
  );
};

export default RecipeCard;