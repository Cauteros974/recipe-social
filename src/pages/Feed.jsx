import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Feed = () => {
    const {recipes, loading } = useContext(RecipeContext);

    if(loading) return <div style={{ padding: 20, textAlign: 'center'}}>Loading goodies... 🍳</div>

    return(
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Recipe feed</h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto=fill, minmax(300px, 1fr))',
                gap: '20px'
            }}>
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default Feed;