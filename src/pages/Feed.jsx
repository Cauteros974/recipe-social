import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Feed = () => {
    const {recipes, loading } = useContext(RecipeCard);
}