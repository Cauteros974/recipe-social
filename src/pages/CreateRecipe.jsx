import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RecipeContext from "../context/RecipeContext";
import { Plus, Trash, Save } from "lucide-react";

const CreateRecipe = () => {
    const navigate = useNavigate();
    const {addRecipe} = useContext(RecipeContext);

    //State of the form
    const[formData, setFormData] = useState({
        title: '',
        category: 'Breakfast',
        description: '',
        image: 'https://images.unsplash.com/photo-1495521821758-02d0571540fe?w=800',
        time: '',
        ingredients: [''],
        steps: ['']
    });

    const handleChange = (e) => {
        setFormData({...formData, [field]: [...formData[field], '']});
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

    return(
        <div style={{ maxWidth: '600px', margin: '20px auto', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>
            <h2 style={{ marginBottom: 20 }}>New recipe 🍳</h2>
            
            <form onSubmit={handleSubmit}>
                <label>Name of the dish</label>
                <input name="title" value={formData.title} onChange={handleChange} style={inputStyle} placeholder="For example: Spaghetti Carbonara" required />
                
                <label>Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} style={{...inputStyle, height: '80px'}} placeholder="A few words about the dish..."/>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    <div>
                        <label>Time (min) *</label>
                        <input type="number" name="time" value={formData.time} onChange={handleChange} style={inputStyle} required />
                    </div>
                    <div>
                        <label>Link to photo</label>
                        <input name="image" value={formData.image} onChange={handleChange} style={inputStyle} />
                    </div>
                </div>

                <div style={{marginBottom: 15}}>
                    <label>Category</label>
                    <select 
                        name= "category"
                        value={formData.category}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd'}}
                    >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Desert">Desert</option>
                        <option value="Drinks">Drinks</option>
                    </select>
                </div>

                {/* Dynamic Ingredients */}
                <h4 style={{margin: '20px 0 10px'}}>Ingredients</h4>
                {formData.ingridients.map((ing, index) => (
                    <div key={index} style={{display: 'flex', gap: 10, marginBottom: 5}}>
                        <input
                            value={ing}
                            onChange={(e) => handleArrayChange(index, e.target.value, 'ingredients')}
                            placeholder={`Ingredient ${index + 1}`}
                            style={inputStyle}
                        />
                        {formData.ingridients.map.length > 1 && (
                            <button type="button" onClick={() => remoteField(index, 'ingridients')} style={{border: 'none', background: 'transparent', color: 'red', cursor: 'pointer'}}>
                                <Trash size={18}/>
                            </button>
                        )}
                    </div>
                ))}
                <button type="button" onClick={() => addField(index, 'ingridients')} style={{ color: '#e67e22', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Plus size={16} /> Add ingridient
                </button>

                {/*Dynamic Steps*/}
                <h4 style={{margin: '20px 0 10px'}}>Step-by-step recipe</h4>
                {formData.steps.map((step, index) => (
                    <div key={index} style={{ display: 'flex', gap: 10, marginBottom: 5 }}>
                        <span style={{paddingTop: 10, fontWeight: 'bold', color: '#ccc'}}>{index+1}.</span>
                        <textarea
                            value={step}
                            onChange={(e) => handleArrayChange(index, e.target.value, 'steps')}
                            placeholder={'Step description...'}
                            style={{...inputStyle, height: '60px'}}
                        />
                        {formData.steps.length > 1 &&(
                            <button type="button" onClick={() => remoteField(index, 'steps')} style={{ border: 'none', background: 'transparent', color: 'red', cursor: 'pointer' }}>
                                <Trash size={18} />
                            </button>
                        )}
                    </div>
                ))}
                <button type="buttom" onClick={() => addField('steps')} style={{color: '#e67e22', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5}}>
                    <Plus size={16} /> Add Step
                </button>

                <hr style={{margin: '30px 0', borderColor: '#eee'}} />

                <button type="submit" style={{ 
                    width: '100%', 
                    padding: '15px', 
                    background: '#e67e22', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '10px', 
                    fontSize: '1.1rem', 
                    cursor: 'pointer', 
                    fontWeight: 'bold' }}>
                    <Save size={18} style={{ display: 'inline', marginRight: 5 }} /> Publish a recipe
                </button>
            </form>
        </div>
    );
};
export default CreateRecipe;