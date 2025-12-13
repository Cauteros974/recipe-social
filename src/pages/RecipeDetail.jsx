import { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { Clock, ArrowLeft, Heart, User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

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

    return(
        <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', background: 'white', borderRadius: '15px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#666', textDecoration: 'none', marginBottom: 15 }}>
                <ArrowLeft size={16} /> Back
            </Link>

            <img 
                src={recipe.image} 
                alt={recipe.title} 
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px' }} 
            />

            <div style={{padding: '20px 0'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '2rem', margin: '0 0 10px 0' }}>{recipe.title}</h1>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#e74c3c' }}>
                        <Heart fill="#e74c3c" size={24} /> {recipe.likes}
                    </span>
                </div>

                <p style={{ color: '#666', fontSize: '1.1rem' }}>{recipe.description}</p>

                <div style={{ display: 'flex', gap: 20, marginTop: 15, color: '#555' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5}}>
                        <Clock size={18} /> {recipe.time} Min
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <User size={18} /> {recipe.author}
                    </span>
                </div>

                <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid #eee' }} />

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1.5fr',gap: '40px'}}>
                    {/*Ingredients*/}
                    <div>
                        <h3>🛒 Ingredients</h3>
                        <button
                            onClick={() => {
                                addToShoppingList(recipe.ingredients);
                                alert('Ingrdients added to to the list');
                            }}
                            style={{
                                display:'flex', alignItems: 'center', gap: 5,
                                background: '#e67e22', color: 'white', border: 'none', 
                                padding: '5px 10px', borderRadius: '5px', cursor: 'pointer'
                            }}
                        >
                            <ShoppingCart size={16} /> To the list
                        </button>
                        <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
                            {recipe.ingredients.map((ing, i) => (
                                <li key={i}>{ing}</li>
                            ))}
                        </ul>
                    </div>
                    {/*Instructions*/}
                    <div>
                        <h3>👩‍🍳 Preparation</h3>
                        <ol style={{ paddingLeft: 20, lineHeight: 1.6 }}>
                            {recipe.steps.map((step, i) => (
                                <li key={i} style={{ marginBottom: 10 }}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;