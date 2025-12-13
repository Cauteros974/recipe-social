import { Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import CreateRecipe from './pages/CreateRecipe';
import RecipeDetail from './pages/RecipeDetail';
import ShoppingList from './pages/ShoppingList';

function App() {
  return (
    
    <RecipeProvider>
      <div style={{ minHeight: '100vh', background: '#f8f9fa', fontFamily: 'sans-serif' }}>
        
        {/* Navigation (Navbar) is always on top */}
        <Navbar />

        {/* Content varies depending on URL */}
        <div style={{ paddingBottom: '50px' }}>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/create" element={<CreateRecipe />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
          </Routes>
        </div>

      </div>
    </RecipeProvider>
  );
}

export default App;