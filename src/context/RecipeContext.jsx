import { createContext, useState, useEffect } from 'react';

export const RecipeContext = createContext();

//Fake Data
const MOCK_RECIPES = [
  {
    id: 1,
    title: 'Homemade Pizza',
    category: 'Dinner',
    Description: 'Delicious thin-crust pizza, just like in Italy.',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800',
    time: 40,
    author: 'Mia',
    likes: 120,
    ingredients: ['Flour 300g', 'Water 200ml', 'Tomatoes 3pcs', 'Mozzarella cheese'],
    steps: ['Knead the dough', 'Roll out the circle', 'Put in the filling', 'Bake for 15 minutes at 220°C']
  },
  {
    id: 2,
    title: 'Avocado Toast',
    category: 'Breakfast',
    description: 'The perfect breakfast in 5 minutes.',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800',
    time: 10,
    author: 'HipsterChef',
    likes: 85,
    ingredients: ['Bread 2 slices', 'Avocado 1 pc', 'Salt, Pepper', 'Lemon juice'],
    steps: ['Toast the bread', 'Mash the avocado with a fork', 'Spread on the bread', 'Sprinkle with spices']
  },
];

export const RecipeProvider = ({ children }) => {
  //Initialization LocalStorage
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem('recipes');
    return saved ? JSON.parse(saved) : MOCK_RECIPES;
  });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
  const filteredRecipes = recipes.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <RecipeContext.Provider value={{ 
      recipes: filteredRecipes, 
      loading, 
      addRecipe, 
      toggleLike, 
      getRecipeById,
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory
    }}>
      {children}
    </RecipeContext.Provider>
  );
};