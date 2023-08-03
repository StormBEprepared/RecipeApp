const apiKey = 'b38fda99bfdc4b389743b7460b46853f';

async function searchRecipes() {
  const searchInput = document.getElementById('searchInput').value;
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchInput}&number=3`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.results && data.results.length > 0) {
      displayRecipes(data.results);
    } else {
      console.error('Error fetching data: No recipes found for the given search keyword');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayRecipes(recipes) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  recipes.forEach((recipe) => {
    const recipeDiv = document.createElement('div');
    recipeDiv.className = 'recipe';

    const recipeTitle = document.createElement('h2');
    recipeTitle.textContent = recipe.title;
    recipeDiv.appendChild(recipeTitle);

    const recipeImage = document.createElement('img');
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.title;
    recipeDiv.appendChild(recipeImage);

    const ingredientsList = document.createElement('ul');
    recipe.extendedIngredients.forEach((ingredient) => {
      const ingredientLi = document.createElement('li');
      ingredientLi.textContent = ingredient.original;
      ingredientsList.appendChild(ingredientLi);
    });
    recipeDiv.appendChild(ingredientsList);

    const timeNeeded = document.createElement('p');
    timeNeeded.textContent = `Ready in ${recipe.readyInMinutes} minutes`;
    recipeDiv.appendChild(timeNeeded);

    const instructionsLink = document.createElement('a');
    instructionsLink.textContent = 'Instructions';
    instructionsLink.href = recipe.sourceUrl;
    instructionsLink.target = '_blank';
    recipeDiv.appendChild(instructionsLink);

    resultsDiv.appendChild(recipeDiv);
  });
}



//b38fda99bfdc4b389743b7460b46853f