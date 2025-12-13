import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';
import { RecipeContext } from '../context/RecipeContext';
import Timer from './Timer';

const Navbar = () => {
  const { searchQuery, setSearchQuery, shoppingList } = useContext(RecipeContext);
  const activeItemsCount = shoppingList.filter(i => !i.completed).length;

  return (
    <nav style={{ 
      padding: '10px 20px', 
      background: '#fff', 
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/*Logo and Links */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#e67e22', textDecoration: 'none', fontWeight: '900', fontSize: '1.2rem' }}>
          🍳 SocialCook
        </Link>
        <Link to="/create" style={{ color: '#555', textDecoration: 'none', fontSize: '0.9rem' }}>+ Recipe</Link>
      </div>

      {/* Searcg */}
      <div style={{ position: 'relative', flex: 1, maxWidth: '300px', margin: '0 40px' }}>
        <Search size={16} style={{ position: 'absolute', left: '10px', top: '10px', color: '#999' }} />
        <input 
          type="text" 
          placeholder="Search for recipe..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: '8px 10px 8px 35px',
            borderRadius: '20px',
            border: '1px solid #eee',
            outline: 'none',
            width: '100%',
            fontSize: '0.9rem'
          }}
        />
      </div>

      {/* Timer and Basket */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        
        <Timer /> {/* Global timer */}

        <Link to="/shopping-list" style={{ color: '#555', textDecoration: 'none', position: 'relative', display: 'flex' }}>
            <ShoppingCart size={22} />
            {activeItemsCount > 0 && (
                <span style={{ 
                    position: 'absolute', top: '-5px', right: '-8px',
                    background: '#e74c3c', color: 'white', borderRadius: '50%', 
                    padding: '2px 6px', fontSize: '0.65rem', fontWeight: 'bold'
                }}>
                    {activeItemsCount}
                </span>
            )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;