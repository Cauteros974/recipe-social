import { useContext } from "react";
import { Clock, Heart } from "lucide-react";
import { RecipeContext } from "../context/RecipeContext";
import style from "./RecipeCard.module.css";

const RecipeCard = ({recipe}) => {
    const {toggleLike} = useContext(RecipeContext);

    
}