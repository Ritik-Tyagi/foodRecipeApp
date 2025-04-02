import { useEffect, useState } from 'react';
import { recipes } from '../data';
import RecipeCard from '../components/RecipeCard';

const Home = ({ searchTerm = '' }) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    const term = (searchTerm || '').toString().trim().toLowerCase();
    setFilteredRecipes(
      term === '' 
        ? recipes 
        : recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(term)
        ))
  }, [searchTerm]);

  return (
    <div className="home">
      <h1 className="home-title">Delicious Recipes</h1>
      {filteredRecipes.length === 0 ? (
        <p className="no-results">No recipes found matching your search</p>
      ) : (
        <div className="recipes-container">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={`recipe-${recipe.id}`} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;