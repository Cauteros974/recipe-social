import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const CATEGORIES = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Desert', 'Drinks'];

const Feed = () => {
    const { recipes, loading, selectedCategory, setSelectedCategory } = useContext(RecipeContext);

    if (loading) {
        return (
            <div style={{ padding: 20, textAlign: 'center' }}>
                Loading goodies... 🍳
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Recipe Feed</h1>

            {/* Category Panel */}
            <div style={{ 
                display: 'flex', 
                gap: '10px', 
                overflowX: 'auto', 
                paddingBottom: '20px', 
                marginBottom: '20px',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                {CATEGORIES.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '20px',
                            border: 'none',
                            background: selectedCategory === cat ? '#e67e22' : '#eee',
                            color: selectedCategory === cat ? 'white' : '#333',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            transition: 'all 0.3s',
                            fontWeight: selectedCategory === cat ? 'bold' : 'normal',
                            fontSize: '14px'
                        }}
                        onMouseEnter={(e) => {
                            if (selectedCategory !== cat) {
                                e.target.style.background = '#ddd';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (selectedCategory !== cat) {
                                e.target.style.background = '#eee';
                            }
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Recipe grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px'
            }}>
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>

            {/* Message if there are no recipes */}
            {recipes.length === 0 && (
                <p style={{ 
                    textAlign: 'center', 
                    padding: '40px', 
                    color: '#888',
                    fontSize: '18px'
                }}>
                    This category is currently empty 😔
                </p>
            )}
        </div>
    );
};

export default Feed;