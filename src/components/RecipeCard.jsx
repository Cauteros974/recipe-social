import { useContext } from "react";
import { Clock, Heart } from "lucide-react";
import { RecipeContext } from "../context/RecipeContext";
import style from "./RecipeCard.module.css";

const RecipeCard = ({recipe}) => {
    const {toggleLike} = useContext(RecipeContext);

    return(
        <div className={style.card}>
            <img src={recipe.image} alt={recipe.title} className={styles.image} />
            <div className={styles.content}>
                <h3 className={styles.title}>{recipe.title}</h3>
                <p className={{marginBottom: '10px', color: '#888'}}>From: {recipe.author}</p>

                <div className={styles.meta}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <Clock size={16} />
                        {recipe.time} Min
                    </div>

                    <button
                        className={styles.button}
                        onClick={() => toggleLike(recipe.id)}
                    >

                    </button>
                </div>
            </div>
        </div>
    )
}