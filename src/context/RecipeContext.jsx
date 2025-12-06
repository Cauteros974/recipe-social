import { createContext, useState, useEffect } from 'react';

export const RecipeContext = createContext();

//Fake Data
const MOCK_RECIPES = [
  {
    id: 1,
    title: 'Homemade Pizza',
    Description: 'Delicious thin-crust pizza, just like in Italy.',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800',
    time: 40,
    author: 'Mia',
    likes: 120,
    ingredients: ['Мука 300г', 'Вода 200мл', 'Томаты 3шт', 'Сыр Моцарелла'],
    steps: ['Замесить тесто', 'Раскатать круг', 'Выложить начинку', 'Печь 15 мин при 220°C']
  },
  {
    id: 2,
    title: 'Avocado Toast',
    description: 'The perfect breakfast in 5 minutes.',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800',
    time: 10,
    author: 'HipsterChef',
    likes: 85,
    ingredients: ['Хлеб 2 куска', 'Авокадо 1шт', 'Соль, Перец', 'Лимонный сок'],
    steps: ['Toast the bread', 'Mash the avocado with a fork', 'Spread on the bread', 'Sprinkle with spices']
  },
];

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Query simulation
    setTimeout(() => {
      setRecipes(MOCK_RECIPES);
      setLoading(false);
    }, 500);
  }, []);

  const addRecipe = (newRecipe) => {
    // Generate an ID and add the date
    const recipeWithId = { ...newRecipe, id: Date.now(), likes: 0, author: 'I (User)' };
    setRecipes([recipeWithId, ...recipes]);
  };

  const toggleLike = (id) => {
    setRecipes(recipes.map(r => r.id === id ? { ...r, likes: r.likes + 1 } : r));
  };

  const getRecipeById = (id) => {
    return recipes.find(r => r.id === parseInt(id));
  };

  // Filtering for search
  const filteredRecipes = recipes.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <RecipeContext.Provider value={{ 
      recipes: filteredRecipes, 
      loading, 
      addRecipe, 
      toggleLike, 
      getRecipeById,
      searchQuery,
      setSearchQuery
    }}>
      {children}
    </RecipeContext.Provider>
  );
};