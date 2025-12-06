import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Feed = () => {
    const {recipes, loading } = useContext(RecipeContext);

    if(loading) return <div style={{ padding: 20, textAlign: 'center'}}>Loading goodies... 🍳</div>
}