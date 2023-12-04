import React, { useState, useEffect } from 'react';
import IngredientsList from './ingredientsList'; 

function MealApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setMeals([]);
    setError(null);

    if (searchQuery.trim() === '') {
      return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Meal not found. Please check your spelling.');
        }
        return response.json();
      })
      .then((data) => {
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setError('No meals found. Please try a different search term.');
        }
      })
      .catch((error) => setError(error.message));
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className='container'>
      <h2 className='main-heading'>Find the Recipe for your meal</h2>
      <form onSubmit={handleSearch}>
        <input 
          type="text"
          placeholder="Type your dish name....."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      {error ? (
        <p className='error-msg'>{error}</p>
      ) : (
      <div className='meal-container'>
        {meals.map((meal) => (
          <div className='meals' key={meal.idMeal}>
            <h1 className='meal-heading'>{meal.strMeal}</h1>
            <img className='meal-img' src={meal.strMealThumb} alt={meal.strMeal} />
            <IngredientsList meal={meal} /> 
            <h2 className='instruction-heading'>Instructions: </h2>
            <p className='instruction-para'>{meal.strInstructions} </p>
            <a className='youtube-link' href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
              Click here to Watch Video
            </a>
            </div>
          ))}
      </div>
      )}
    </div>
  );
}
export default MealApp;