import { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { Trash2, CheckSquare, Square } from "lucide-react";

const ShoppingList = () => {
    const { shoppingList, toggleShoppingItem, removeShoppingItem } = useContext(RecipeContext);

    return(
        <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', background: 'white', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px'}}>🛒 Shopping List</h2>

            {shoppingList.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#888' }}>The list is empty. Add ingredients from recipes!</p>
            )}
        </div>
    );
};

export default ShoppingList;