import { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { Clock, ArrowLeft, Heart, User } from 'lucide-react';

const RecipeDetail = () => {
    const {id} = useParams();
    const {getRecipeById, loading} = useContext(RecipeContext);
    const [recipe, setRecipes] = useState(null);

    useEffect(() => {
        if(!loading) {
            const found = getRecipeById(id);
            setRecipes(found);
        };
    }, [id, loading, getRecipeById]);

    if (loading) return <div>Loading...</div>;
    if (!recipe) return <div style={{padding: 20}}>Recipe not found 😢 <Link to="/">Return</Link></div>;
};

export default RecipeContext;