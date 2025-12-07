import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RecipeContext from "./RecipeDetail";
import { Plus, Trash, Save } from "lucide-react";

const CreateRecipe = () => {
    const navigate = useNavigate();
    const {addRecipe} = useContext(RecipeContext);

    //State of the form
}