import React from 'react'
import profileImg from '../assets/logo.jpeg'
import { useLoaderData } from 'react-router-dom'

export default function RecipeDetails() {
    const recipe = useLoaderData(); // ✅ Make sure data is received correctly
    console.log("Recipe Data:", recipe); // 🔍 Debugging step

    if (!recipe) {
        return <h2>Loading...</h2>; // Show a loading message if data is not available
    }

    return (
        <>
            <div className='outer-container'>
                <div className='profile'>
                    <img src={profileImg} width="50px" height="50px" alt="Profile" />
                    <h5>{recipe.email}</h5>
                </div>
                <h3 className='title'>{recipe.title}</h3>
                <img src={`http://localhost:5000/images/${recipe.coverImage}`} width="220px" height="200px" alt="Recipe" />
                <div className='recipe-details'>
                    <div className='ingredients'>
                        <h4>Ingredients</h4>
                        <ul>{recipe.ingredients?.map((item, index) => (<li key={index}>{item}</li>))}</ul>
                    </div>
                    <div className='instructions'>
                        <h4>Instructions</h4>
                        <span>{recipe.instructions}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
