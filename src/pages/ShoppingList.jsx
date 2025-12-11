import { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { Trash2, CheckSquare, Square } from "lucide-react";

const ShoppingList = () => {
    const { shoppingList, toggleShoppingItem, removeShoppingItem } = useContext(RecipeContext);

    return(
        <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', background: 'white', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px'}}>🛒 Shopping List</h2>

            {shoppingList.lenght === 0 ? (
                <p style={{ textAlign: 'center', color: '#888' }}>The list is empty. Add ingredients from recipes!</p>
            ): (
                <ul style={{listStyle: 'none', padding: 0}}>
                    {shoppingList.map(item => (
                        <li key={item.id} style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            padding: '12px',
                            borderBottom: '1px solid #eee',
                            opacity: item.completed ? 0.5 : 1
                        }}>
                            <div 
                            onClick={() => toggleShoppingItem(item.id)} 
                            style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flex: 1 }}
                            >
                                {item.completed ? <CheckSquare color="green" size={20} /> : <Square color="#ccc" size={20} />}
                                <span style={{ textDecoration: item.completed ? 'line-through' : 'none', fontSize: '1.1rem' }}>
                                    {item.text}
                                </span>
                            </div>
                        </li>
            }}>
            )}
        </div>
    );
};

export default ShoppingList;