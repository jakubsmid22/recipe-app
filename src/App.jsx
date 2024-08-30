import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";

const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const APP_ID = import.meta.env.VITE_APP_ID;

  const [title, setTitle] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}&q=${title}`
      )
      .then((response) => {
        if (response.data.hits.length === 0) {
          alert("No recipes found");
          return;
        }
        setRecipes(response.data.hits);
      })
      .catch((error) => console.log(error))
      .finally(() => setTitle(""));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <form
        onSubmit={searchRecipes}
        className="flex w-full max-w-md space-x-4 mb-8"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Search"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="submit"
          value="Search"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 cursor-pointer"
        />
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {recipes &&
          recipes.map((recipe) => (
            <Recipe recipe={recipe.recipe} key={uuidv4()} />
          ))}
      </div>
    </div>
  );
};

export default App;
