import React from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from "./pages/Home";
import MainNavigation from "./components/MainNavigation";
import axios from 'axios'
import "@fortawesome/fontawesome-free/css/all.min.css";
import AddFoodRecipe from './pages/AddFoodRecipe';
import EditRecipe from './pages/EditRecipe';
import RecipeDetails from './pages/RecipeDetails';  // ✅ Add this import



const getAllRecipes = async () => {
  try {
    const response = await axios.get("http://localhost:5000/recipe"); // Ensure the correct API URL
    const allRecipes = response.data; // Define `allRecipes`
    return allRecipes;
  } catch (error) {
    console.error("API Fetch Error:", error.message);
    return []; // Return an empty array to avoid breaking the app
  }
};

const getRecipeDetails = async ({ params }) => {
  try {
    const response = await axios.get(`http://localhost:5000/recipe/${params.id}`);
    
    if (response.status !== 200) {
      throw new Error("Recipe not found");
    }
    
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    throw new Response("Not Found", { status: 404 });
  }
};

const getMyRecipe=async()=>{
  let user=JSON.parse(localStorage.getItem(user))
  let allRecipes=await getAllRecipes()
  return allRecipes.filter(item=>item.createdBy===user._id)

}

const getFavRecipes=()=>{
  return JSON.parse(localStorage.getItem("fav"))
}

const router=createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[
  {path:"/",element:<Home/>,loader:getAllRecipes},
  {path:"/myRecipe",element:<Home/>,loader:getAllRecipes},
  {path:"/favRecipe",element:<Home/>,loader:getFavRecipes},
  {path:"/addRecipe",element:<AddFoodRecipe/>},
  {path:"/editRecipe/:id",element:<EditRecipe/>},
  { path: "/recipe/:id", element: <RecipeDetails />, loader: getRecipeDetails }
]}
  
])
 export default function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
  
}





