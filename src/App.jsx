import { Routes, Route } from "react-router-dom";
import { RecipeProvider } from "./context/RecipeContext";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import CreateRecipe from "./pages/CreateRecipe";
import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <RecipeProvider>
      <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
        <Navbar />
        <div style={{ paddingBottom: '50px' }}>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/create" element={<CreateRecipe />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </div>
      </div>
    </RecipeProvider>
  );
}

export default App;