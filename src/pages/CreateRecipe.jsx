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
        ingridients: [''],
        steps: ['']
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    //Processing dynamic arrays (ingredients/steps)
    const handleArrayChange = (index, value, field) => {
        const newArray = [...formData[field]];
        newArray[index] = value;
        setFormData({...formData, [field]: newArray});
    };

    const addField = (field) => {
        setFormData({...formData, [field]: [...formData[field]]});
    };

    const remoteField = (index, field) => {
        const newArray = formData[field].filter((_, i) => i !== index);
        setFormData({...formData, [field]: newArray});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validation
        if(!formData.title || !formData.time) return alert('Please fill in the required fields');

        //Clearing empty strings from arrays
        const cleanData = {
            ...formData,
            ingridients: formData.ingridients.filter(i => i.trim() !== ''),
            steps: formData.steps.filter(s => s.trim() !== '')
        };

        addRecipe(cleanData);
        navigate('/'); //Go to the main page
    };

    //Input Styles
    const inputStyle = {
        width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', marginBottom: '10px'
    };
}