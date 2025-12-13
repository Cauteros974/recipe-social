import { useContext } from "react";
import { Clock, Heart, Trash2 } from "lucide-react";
import { RecipeContext } from "../context/RecipeContext";
import style from "./RecipeCard.module.css";
import { Link, useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    const { toggleLike, deleteRecipe } = useContext(RecipeContext);
    const navigate = useNavigate('')

    const handleDelete = (e) => {
        e.stopPropagation();
        e.preventDefault();

        const deleted = deleteRecipe(recipe.id);
        if(deleted) {
            navigate('/'); //Redirect to the main page
        }
    };

    return (
        <div className={style.card}>
            <Link 
                to={`/recipe/${recipe.id}`} 
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
                <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className={style.image} 
                />
            </Link>

            <div className={style.content}>
                <Link 
                    to={`/recipe/${recipe.id}`} 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <h3 className={style.title}>{recipe.title}</h3>
                </Link>

                <p style={{ marginBottom: '10px', color: '#888' }}>
                    From: {recipe.author}
                </p>

                <div className={style.meta}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Clock size={16} />
                        {recipe.time} Min
                    </div>

                    <button
                        className={style.button}
                        onClick={() => toggleLike(recipe.id)}
                    >
                        <Heart size={20} /> {recipe.likes}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;