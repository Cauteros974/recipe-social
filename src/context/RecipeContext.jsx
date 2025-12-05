import { createContext, useState, useEffect } from "react";

export const RecipeContext = createContext();

//Fake Data
const MOCK_RECIPED = [
    {
        id: 1,
        title: 'Homemade Pizza',
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800',
        time: 40,
        author: Mia,
        likes: 120,
    },
    {
        id: 2,
        title: 'Avocado toast',
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800',
        time: 10,
        author: 'HipsterChef',
        likes: 85,
    }
]