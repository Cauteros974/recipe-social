import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';
import { RecipeContext } from '../context/RecipeContext';

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useContext(RecipeContext);

  const activeItemsCount = shoppingList.filter(i => !i.completed).length;

  return (
    <nav style={{ 
      padding: '15px 20px', 
      background: '#fff', 
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#e67e22', textDecoration: 'none', fontWeight: '900', fontSize: '1.2rem' }}>
          🍳 SocialCook
        </Link>
        <Link to="/create" style={{ color: '#555', textDecoration: 'none' }}>+ Recipe</Link>

        {/*Link to shopping list*/}
        <Link to="/shopping-list" style={{ color: '#555', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
            <ShoppingCart size={18} />
            {activeItemsCount > 0 &&(
              <span style={{
                background: '#e74c3c', color: 'white', borderRadius: '40%',

              }}>
                {activeItemsCount}
              </span>
            ) }
        </Link>

        
      </div>

      <div style={{ position: 'relative' }}>
        <Search size={18} style={{ position: 'absolute', left: '10px', top: '8px', color: '#999' }} />
        <input 
          type="text" 
          placeholder="Search for recipes..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: '8px 10px 8px 35px',
            borderRadius: '20px',
            border: '1px solid #ddd',
            outline: 'none',
            width: '200px'
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;