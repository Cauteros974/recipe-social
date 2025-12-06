import { Routes, Route, Link } from "react-router-dom";
import { RecipeProvider } from "./context/RecipeContext";
import Feed from "./pages/Feed";

//Navbar
const Navbar = () => (
  <nav style={{ padding: '20px', background: '#333', color: 'white', display: 'flex', gap: '20px'}}>
    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>🍳 RecipeSocial</Link>
    <Link to="/" style={{ color: '#ddd', textDecoration: 'none' }}>Feed</Link>
    <Link to="/create" style={{ color: '#ddd', textDecoration: 'none' }}>Create a recipe</Link>
  </nav>
);

const CreapePage = () => <h2 style={{ padding: '20px'}}>Creation Page (Under Construction)</h2>;

function App() {
  return (
    <RecipeProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </RecipeProvider>
  );
}

export default App;