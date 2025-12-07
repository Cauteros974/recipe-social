import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RecipeContext from "./RecipeDetail";
import { Plus, Trash, Save } from "lucide-react";

const CreateRecipe = () => {
    const navigate = useNavigate();
    const {addRecipe} = useContext(RecipeContext);

    //State of the form
    const[formData, setFormData] = useState({
        title: '',
        description: '',
        image: 'https://images.unsplash.com/photo-1495521821758-02d0571540fe?w=800',
        time: '',
        ingridients: '',
        steps: ''
    });
}