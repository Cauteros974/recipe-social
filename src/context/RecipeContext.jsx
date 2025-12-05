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
    }
]