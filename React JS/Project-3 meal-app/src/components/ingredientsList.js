import React from 'react';


function IngredientsList({ meal }) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && measure) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div>
      <h3 className='ingredient-heading'>Ingredients:</h3>
      <ul className='ingredient-list'>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;
