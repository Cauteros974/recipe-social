import { createContext, useState, useEffect, Children } from "react";

export const RecipeContext = createContext();

//Fake Data
const MOCK_RECIPED = [
    {
        id: 1,
        title: 'Homemade Pizza',
        description: 'Delicious thin-crust pizza, just like in Italy.',
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800',
        time: 40,
        author: 'Mia',
        likes: 120,
        ingredients: ['Flour 300g', 'Water 200ml', 'Tomatoes 3pcs', 'Mozzarella cheese'],
        steps: ['Knead the dough', 'Roll out the circle', 'Put in the filling', 'Bake for 15 minutes at 220°C']
    },
    {
        id: 2,
        title: 'Avocado toast',
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800',
        time: 10,
        author: 'HipsterChef',
        likes: 85,
    },
];

export const RecipeProvider = ({children}) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    //Simulation of loading data from the server
    useEffect(() => {
        setTimeout(() => {
            setRecipes(MOCK_RECIPED);
            setLoading(false);
        }, 1000) //Delay 1sec
    }, []);

    const addRecipe = (newRecipe) => {
        setRecipes([newRecipe, ...recipes]);
    };

    const toggleLike = (id) => {
        setRecipes(recipes.map(recipes => 
            recipes.id === id ? {...recipes, likes: recipe.likes + 1} : recipes
        ));
    };

    return(
        <RecipeContext.Provider value={{recipes, loading, addRecipe, toggleLike}}>
            {children}
        </RecipeContext.Provider>
    );
};