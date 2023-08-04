const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('resultContainer');

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php';

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();

    if (searchTerm !== '') {
        fetch(`${API_URL}?s=${searchTerm}`)
            .then((response) => response.json())
            .then((data) => {
                showMeals(data.meals);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }
});

function showMeals(meals) {
    resultContainer.innerHTML = '';

    if (meals === null) {
        resultContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    meals.forEach((meal) => {
        const mealCard = createMealCard(meal);
        resultContainer.appendChild(mealCard);
    });
}

function createMealCard(meal) {
    const mealCard = document.createElement('div');
    mealCard.classList.add('meal-card');

    const image = document.createElement('img');
    image.src = meal.strMealThumb;
    image.alt = meal.strMeal;

    const mealTitle = document.createElement('h3');
    mealTitle.innerText = meal.strMeal;

    const mealCategory = document.createElement('p');
    mealCategory.innerText = `Category: ${meal.strCategory}`;

    const mealInstructions = document.createElement('p');
    mealInstructions.innerText = meal.strInstructions;

    mealCard.appendChild(image);
    mealCard.appendChild(mealTitle);
    mealCard.appendChild(mealCategory);
    mealCard.appendChild(mealInstructions);

    return mealCard;
}// ... (previous code)

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();

  if (searchTerm !== '') {
      fetch(`${API_URL}?s=${searchTerm}`)
          .then((response) => response.json())
          .then((data) => {
              showMeals(data.meals);
          })
          .catch((error) => {
              console.error('Error fetching data:', error);
          });
  }
});

function showMeals(meals) {
  resultContainer.innerHTML = '';

  if (meals === null) {
      resultContainer.innerHTML = '<p>No results found.</p>';
      return;
  }

  meals.forEach((meal) => {
      const mealCard = createMealCard(meal);
      resultContainer.appendChild(mealCard);
  });
}

function createMealCard(meal) {
  const mealCard = document.createElement('div');
  mealCard.classList.add('meal-card');

  const image = document.createElement('img');
  image.src = meal.strMealThumb;
  image.alt = meal.strMeal;

  const mealTitle = document.createElement('h3');
  mealTitle.innerText = meal.strMeal;

  const mealCategory = document.createElement('p');
  mealCategory.innerText = `Category: ${meal.strCategory}`;

  const mealTime = document.createElement('p');
  mealTime.innerText = `Cooking Time: ${meal.strTime}`;

  const ingredientsTitle = document.createElement('p');
  ingredientsTitle.innerText = 'Ingredients:';

  const ingredientList = document.createElement('ul');
  for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
          const ingredientItem = document.createElement('li');
          ingredientItem.innerText = `${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}`;
          ingredientList.appendChild(ingredientItem);
      }
  }

  const mealInstructions = document.createElement('p');
  mealInstructions.innerText = `Instructions: ${meal.strInstructions}`;

  mealCard.appendChild(image);
  mealCard.appendChild(mealTitle);
  mealCard.appendChild(mealCategory);
  mealCard.appendChild(mealTime);
  mealCard.appendChild(ingredientsTitle);
  mealCard.appendChild(ingredientList);
  mealCard.appendChild(mealInstructions);

  return mealCard;
}



searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.trim();

    if (searchTerm !== '') {
        fetch(`${API_URL}?s=${searchTerm}`)
            .then((response) => response.json())
            .then((data) => {
                showMeals(data.meals);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }
}

// ... (previous code)

const emojiContainer = document.getElementById('animatedBackground');

// List of food-related emojis
const emojis = ['🍔', '🍕', '🌮', '🍩', '🍓', '🍦', '🍟', '🍗', '🥗', '🍪', '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🥭', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🫐', '🥝', '🍅', '🫒', '🥥', '🥑', '🍆', '🥔', '🥕', '🌽', '🌶️', '🫑', '🥒', '🥬', '🥦', '🧄', '🧅', '🥜', '🌰', '🍞', '🥐', '🥖', '🫓', '🥨', '🥯', '🥞', '🧇', '🧀', '🍖', '🍗', '🥩', '🥓', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🫔', '🥙', '🧆', '🥚', '🍳', '🥘', '🍲', '🫕', '🥣', '🥗', '🍿', '🧈', '🧂', '🥫', '🍝', '🍱', '🍘', '🍙', '🍚', '🍛', '🍜', '🍠', '🍢', '🍣', '🍤', '🍥', '🥮', '🍡', '🥟', '🥠', '🥡', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🧁', '🥧', '🍫', '🍬', '🍭', '🍮', '🍯', '🪔'];

// Function to create and animate emojis
function createEmoji() {
  const emoji = document.createElement('span');
  emoji.classList.add('emoji');
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  const containerWidth = emojiContainer.clientWidth;
  const containerHeight = emojiContainer.clientHeight;

  const startOffsetLeft = Math.random() * (containerWidth - 50);
  const startOffsetTop = Math.random() * (containerHeight - 50);
  emoji.style.left = `${startOffsetLeft}px`;
  emoji.style.top = `${startOffsetTop}px`;

  const fontSize = Math.floor(Math.random() * 24) + 18; // Random font size between 18px and 42px
  emoji.style.fontSize = `${fontSize}px`;

  const animationDuration = 5 + Math.random() * 5;
  const animationDelay = Math.random() * 2;
  emoji.style.animationDuration = `${animationDuration}s`;
  emoji.style.animationDelay = `${animationDelay}s`;

  emojiContainer.appendChild(emoji);

  // Schedule the removal of the emoji after the fade-out animation completes
  setTimeout(() => {
      emojiContainer.removeChild(emoji);
  }, (animationDuration + animationDelay) * 1000);
}


// Function to add emojis periodically
function addEmojis() {
    setInterval(createEmoji, 1000);
}

addEmojis();

// ... (remaining code)



//b38fda99bfdc4b389743b7460b46853f