import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";
import { Plus, Trash, Save, Upload, X } from "lucide-react";

const CreateRecipe = () => {
    const navigate = useNavigate();
    const { addRecipe } = useContext(RecipeContext);

    // State of the form
    const [formData, setFormData] = useState({
        title: '',
        category: 'Breakfast',
        description: '',
        image: '',
        time: '',
        ingredients: [],
        steps: ['']
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        
        if(file) {
            //Checking the file types
            if(!file.type.startsWith('image/')){
                alert('Plese select an image file');
                return;
            }

            if (file.size > 5 * 1024 * 1024) {
                alert('Image is too large! Maximum size is 5MB.');
                return;
            }

            //Convestion to base64
            const reader = new FileRead();
            reader.onloadend = () => {
                setFormData({...formData, image: reader.result});
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    //Image Deletion Function
    const handleRemoveImage = () => {
        setFormData({...formData, image: ''});
        setImagePreview(null);
    };

    // Processing dynamic arrays (ingredients/steps)
    const handleArrayChange = (index, value, field) => {
        const newArray = [...formData[field]];
        newArray[index] = value;
        setFormData({ ...formData, [field]: newArray });
    };

    const addField = (field) => {
        setFormData({ ...formData, [field]: [...formData[field], ''] });
    };

    const removeField = (index, field) => {
        const newArray = formData[field].filter((_, i) => i !== index);
        setFormData({ ...formData, [field]: newArray });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation
        if (!formData.title || !formData.time) {
            alert('Please fill in the required fields');
            return;
        }

        // Clearing empty strings from arrays
        const cleanData = {
            ...formData,
            ingredients: formData.ingredients.filter(i => i.trim() !== ''),
            steps: formData.steps.filter(s => s.trim() !== '')
        };

        addRecipe(cleanData);
        alert('Recipe created successfully! 🎉');
        navigate('/'); // Go to the main page
    };

    // Input Styles
    const inputStyle = {
        width: '100%', 
        padding: '10px', 
        borderRadius: '8px', 
        border: '1px solid #ddd', 
        marginBottom: '10px'
    };

    return (
        <div style={{ 
            maxWidth: '600px', 
            margin: '20px auto', 
            padding: '30px', 
            background: 'white', 
            borderRadius: '15px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)' 
        }}>
            <h2 style={{ marginBottom: 20 }}>New Recipe 🍳</h2>
            
            <form onSubmit={handleSubmit}>
                <label>Dish Name *</label>
                <input 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    placeholder="e.g., Spaghetti Carbonara" 
                    required 
                />
                
                <label>Description</label>
                <textarea 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    style={{ ...inputStyle, height: '80px' }} 
                    placeholder="A few words about the dish..."
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    <div>
                        <label>Time (min) *</label>
                        <input 
                            type="number" 
                            name="time" 
                            value={formData.time} 
                            onChange={handleChange} 
                            style={inputStyle} 
                            required 
                        />
                    </div>
                </div>

                <div style={{ marginBottom: 15 }}>
                    <label>Category</label>
                    <select 
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        style={{ 
                            width: '100%', 
                            padding: '10px', 
                            borderRadius: '8px', 
                            border: '1px solid #ddd' 
                        }}
                    >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Drinks">Drinks</option>
                    </select>
                </div>

                {/*Image Upload Block*/}
                <div style={{marginBottom: 20}}>
                    <label style={{display: 'block', marginBottom: 10}}>Recipe Image</label>

                    {!imagePreview ? (
                        <label
                            htmlFor="image-upload"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: '100px',
                                border: '2px dashed #ddd',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                background: '#f9f9f9',
                                transition: 'all 0.3s'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = '#e67e22';
                                e.target.style.background= '#fff5eb';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = '#ddd';
                                e.target.style.background = '#f9f9f9';
                            }}
                        >
                            <Upload size={40} color="#e67e22" />
                            <p style={{margin: '10px 0 0', color: '#666'}}>
                                Click to Upload Image
                            </p>
                            <p style={{margin: '5px 0 0', fontSize: '12px', color: '#999' }}>
                                PNG, JPG up to 5MB
                            </p>
                        </label>
                    ): (
                        <div style={{position: 'relative'}}>
                            <img
                                src={imagePreview}
                                alt="Preview"
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }}
                            />
                            <button 
                                type="button"
                                onClick={handleRemoveImage}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    background: 'rgba(231, 76, 60, 0.9)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '35px',
                                    height: '35px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: 'white',
                                    transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(192, 57, 43, 1)';
                                    e.target.style.transform = 'scale(1,1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(233, 76, 60, 0.9';
                                    e.target.transform = 'scale(1)';
                                }}
                            >
                                <X size={18} />
                            </button>
                        </div>
                    )}
                    
                    <input 
                        id="image-upload"
                        type="file" 
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                    />
                </div>

                {/* Dynamic Ingredients */}
                <h4 style={{ margin: '20px 0 10px' }}>Ingredients</h4>
                {formData.ingredients.map((ing, index) => (
                    <div key={index} style={{ display: 'flex', gap: 10, marginBottom: 5 }}>
                        <input
                            value={ing}
                            onChange={(e) => handleArrayChange(index, e.target.value, 'ingredients')}
                            placeholder={`Ingredient ${index + 1}`}
                            style={inputStyle}
                        />
                        {formData.ingredients.length > 1 && (
                            <button 
                                type="button" 
                                onClick={() => removeField(index, 'ingredients')} 
                                style={{ 
                                    border: 'none', 
                                    background: 'transparent', 
                                    color: 'red', 
                                    cursor: 'pointer' 
                                }}
                            >
                                <Trash size={18} />
                            </button>
                        )}
                    </div>
                ))}
                <button 
                    type="button" 
                    onClick={() => addField('ingredients')} 
                    style={{ 
                        color: '#e67e22', 
                        background: 'none', 
                        border: 'none', 
                        cursor: 'pointer', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 5 
                    }}
                >
                    <Plus size={16} /> Add Ingredient
                </button>

                {/* Dynamic Steps */}
                <h4 style={{ margin: '20px 0 10px' }}>Step-by-Step Recipe</h4>
                {formData.steps.map((step, index) => (
                    <div key={index} style={{ display: 'flex', gap: 10, marginBottom: 5 }}>
                        <span style={{ paddingTop: 10, fontWeight: 'bold', color: '#ccc' }}>
                            {index + 1}.
                        </span>
                        <textarea
                            value={step}
                            onChange={(e) => handleArrayChange(index, e.target.value, 'steps')}
                            placeholder="Step description..."
                            style={{ ...inputStyle, height: '60px' }}
                        />
                        {formData.steps.length > 1 && (
                            <button 
                                type="button" 
                                onClick={() => removeField(index, 'steps')} 
                                style={{ 
                                    border: 'none', 
                                    background: 'transparent', 
                                    color: 'red', 
                                    cursor: 'pointer' 
                                }}
                            >
                                <Trash size={18} />
                            </button>
                        )}
                    </div>
                ))}
                <button 
                    type="button" 
                    onClick={() => addField('steps')} 
                    style={{ 
                        color: '#e67e22', 
                        background: 'none', 
                        border: 'none', 
                        cursor: 'pointer', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 5 
                    }}
                >
                    <Plus size={16} /> Add Step
                </button>

                <hr style={{ margin: '30px 0', borderColor: '#eee' }} />

                <button 
                    type="submit" 
                    style={{ 
                        width: '100%', 
                        padding: '15px', 
                        background: '#e67e22', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '10px', 
                        fontSize: '1.1rem', 
                        cursor: 'pointer', 
                        fontWeight: 'bold',
                        transition: 'background 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#d35400'}
                    onMouseLeave={(e) => e.target.style.background = '#e67e22'}
                >
                    <Save size={18} style={{ display: 'inline', marginRight: 5 }} /> 
                    Publish Recipe
                </button>
            </form>
        </div>
    );
};

export default CreateRecipe;