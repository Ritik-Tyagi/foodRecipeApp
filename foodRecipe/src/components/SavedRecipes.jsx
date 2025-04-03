import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductData } from '../ContextApi';
import './SavedRecipe.css'
const SavedRecipes = () => {
    const { savedRecipes,setSavedRecipes} = useContext(ProductData);
    function removeHandle(id){
        if (savedRecipes){
            let newRecipes=savedRecipes.filter((item)=>item.id!==id)
            setSavedRecipes(newRecipes)
        }
    }
    return (
        <div className="saved-recipes-container">
            <h2>Your Saved Recipes</h2>
            {savedRecipes.length === 0 ? (
                <p>You haven't saved any recipes yet.</p>
            ) : (
                <div className="recipes-grid">
                    {savedRecipes.map((recipe) => (
                        <div key={recipe.id} className="recipe-card">
                            <Link to={`/recipe/${recipe.id}`}>
                                <img 
                                    src={recipe.image} 
                                    alt={recipe.title} 
                                    className="recipe-card-image" 
                                />
                                <h3>{recipe.title}</h3>
                                <p className="recipe-meta">
                                    {recipe.prepTime} | {recipe.servings} servings | {recipe.difficulty}
                                </p>
                            </Link>
                            <button onClick={()=> removeHandle(recipe.id)} style={{padding:"10px",marginBottom:"4px",borderRadius:"10px"}}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SavedRecipes;