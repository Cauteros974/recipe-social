import { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { Trash2, CheckSquare, Square } from "lucide-react";

const ShoppingList = () => {
    const { shoppingList, toggleShoppingItem, removeShoppingItem } = useContext(RecipeContext);

    return(
        <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', background: 'white', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>

        </div>
    )
};

export default ShoppingList