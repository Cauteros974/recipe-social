import { createContext, useState, useEffect } from 'react';
import pizza from '../../public/images/pizza.jpeg';

export const RecipeContext = createContext();

//Fake Data
const MOCK_RECIPES = [
  {
    id: 1,
    title: 'Homemade Pizza',
    category: 'Dinner',
    Description: 'Delicious thin-crust pizza, just like in Italy.',
    image: pizza,
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

  const [shoppingList, setShoppingList] = useState(() => {
    const saved = localStorage.getItem('shoppingList');
    return saved ? JSON.parse(saved) : [];
  });

  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Save on every change
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }, [shoppingList]);

  //Recipe methods
  const addRecipe = (newRecipe) => {
    const recipeWithId = { ...newRecipe, id: Date.now(), likes: 0, author: 'Me' };
    setRecipes([recipeWithId, ...recipes]);
  };

  const toggleLike = (id) => {
    setRecipes(recipes.map(r => r.id === id ? { ...r, likes: r.likes + 1 } : r));
  };

  const getRecipeById = (id) => recipes.find(r => r.id === parseInt(id));

  //Shopping list methods
  const addToShoppingList = (ingredients) => {
    const newItems = ingredients.map(ing => ({
      id: Date.now() + Math.random(),
      text: ing,
      completed: false
    }));
    setShoppingList([...shoppingList, ...newItems]);
  };

  const toggleShoppingItem = (itemId) => {
    setShoppingList(shoppingList.map(item => 
      item.id === itemId ? { ...item, completed: !item.completed } : item
    ));
  };

  const removeShoppingItem = (itemId) => {
    setShoppingList(shoppingList.filter(item => item.id !== itemId));
  };

  //Filtering for search
  const filteredRecipes = recipes.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
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
      setSelectedCategory,
      shoppingList,        
      addToShoppingList,   
      toggleShoppingItem,  
      removeShoppingItem   
    }}>
      {children}
    </RecipeContext.Provider>
  );
};