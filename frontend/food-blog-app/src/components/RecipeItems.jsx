// // import React from 'react'
// // import { useLoaderData } from 'react-router-dom'
// // import foodImg from '../assets/download.jpeg'
// // import { CiStopwatch } from "react-icons/ci";
// // import { FaHeart } from "react-icons/fa";
// // import { BsStopwatchFill } from "react-icons/bs";
// // import { FaEdit } from "react-icons/fa";
// // import { MdDelete } from "react-icons/md";
// // import { Link ,useNavigate} from "react-router-dom";
// // import { useState,useEffect } from "react";




// // // export default function RecipeItems() {
// // //     const recipes=useLoaderData()
// // //     const [allRecipes,setAllRecipes]=useState()
// // //     let path=window.location.pathname==="/myRecipe" ? true :false

// // //     let favItems=JSON.parse(localStorage.getItem("fav")) ?? []

// // //     const [isFavRecipe,setIsFavRecipe]=useState(false)
// // //     console.log(allRecipes)

// // //     useEffect(()=>{
// // // setAllRecipes(recipes)
// // //     },[recipes])


// // //     const onDelete=async(id)=>{
// // //       await axios.delete("http://localhost:5000/recipe/${id}")
// // //       .then((res)=>console.log(res))
// // // setAllRecipes(recipes=>recipes.filter(recipe=>recipe._id !==id))
// // // let filterItem=favItems.filter(recipe=>recipe._id !== item._id)
// // // localStorage.setItem("fav",JSON.stringify(favItems))

// // //     }

// // //     const favRecipe=(item)=>{
// // //       let filterItem=favItems.filter(recipe=>recipe._id !==item._id)
// // // favItems=favItems.filter(recipe=>recipe._id===item._id).length===0 ? [...favItems,item] : filterItem
// // // localStorage.setItem("fav",JSON.stringify(favItems))
// // // setIsFavRecipe(prev=>!prev)
// // //     }
// // //   return (
   
      

// // //       <div className='card-conatainer'>
// // //       {
// // //         allRecipes?.map((item,index)=>{
        
// // //             return (
// // //                 <div key={index} className='card'>
// // //                 <img src={'http://localhost:5000/images/${item.covarImage}'} width="120px" height="100px"></img>
// // //                 <div className='card-body'>
// // //                     <div className='title'>{item.title}</div>
// // //                     <div className='icons'>
// // //                         <div className='timer'><BsStopwatchFill/>{item.time}</div>
// // //                         {(!path)? <FaHeart onClick={()=>favRecipe(item)}
// // //                           style={{color:(favItems).some(res=>res._id ===item._id)? "red" :""}}/> :
// // //                         <div className='action'>
// // //                         <Link to={'/editRecipe/${item._id}'} className="editIcon"><FaEdit/></Link>
// // //                         <MdDelete onClick={()=>onDelete(item._id)}className='deleteIcon'/>
// // //                         </div>}
                        
// // //                     </div>
// // //                 </div>
// // //                 </div>
// // //             )
// // //         })
// // //       }
// // //     </div>
// // //   )
// // // }
// // export default function RecipeItems() {
// //   const recipes = useLoaderData()
// //   const [allRecipes, setAllRecipes] = useState()
// //   let path = window.location.pathname === "/myRecipe" ? true : false
// //   let favItems = JSON.parse(localStorage.getItem("fav")) ?? []
// //   const [isFavRecipe, setIsFavRecipe] = useState(false)
// //   const navigate=useNavigate()
// //   console.log(allRecipes)

// //   useEffect(() => {
// //       setAllRecipes(recipes)
// //   }, [recipes])

// //   const onDelete = async (id) => {
// //       await axios.delete('http://localhost:5000/recipe/${id}')
// //           .then((res) => console.log(res))
// //       setAllRecipes(recipes => recipes.filter(recipe => recipe._id !== id))
// //       let filterItem = favItems.filter(recipe => recipe._id !== id)
// //       localStorage.setItem("fav", JSON.stringify(filterItem))
// //   }

// //   const favRecipe = (item) => {
// //       let filterItem = favItems.filter(recipe => recipe._id !== item._id)
// //       favItems = favItems.filter(recipe => recipe._id === item._id).length === 0 ? [...favItems, item] : filterItem
// //       localStorage.setItem("fav", JSON.stringify(favItems))
// //       setIsFavRecipe(pre => !pre)
// //   }

// //   return (
// //       <>
// //           <div className='card-container'>
// //               {
// //                   allRecipes?.map((item, index) => {
// //                       return (
// //                           <div key={index} className='card'onDoubleClick={()=>navigate(`/recipe/${item._id}`)}>
// //                               <img src={`http://localhost:5000/images/${item.coverImage}`} width="120px" height="100px"></img>
// //                               <div className='card-body'>
// //                                   <div className='title'>{item.title}</div>
// //                                   <div className='icons'>
// //                                       <div className='timer'><BsStopwatchFill />{item.time}</div>
// //                                       {(!path) ? <FaHeart onClick={() => favRecipe(item)}
// //                                           style={{ color: (favItems.some(res => res._id === item._id)) ? "red" : "" }} /> :
// //                                           <div className='action'>
// //                                               <Link to={`/editRecipe/${item._id}`} className="editIcon"><FaEdit /></Link>
// //                                               <MdDelete onClick={() => onDelete(item._id)} className='deleteIcon' />
// //                                           </div>
// //                                       }
// //                                   </div>
// //                               </div>
// //                           </div>
// //                       )
// //                   })
// //               }
// //           </div>
// //       </>
// //   )
// // }

// import React, { useState, useEffect } from 'react';
// import { useLoaderData, useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import { BsStopwatchFill } from "react-icons/bs";
// import { FaHeart, FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import DeleteModal from "./DeleteModal"

// export default function RecipeItems() {
//     const recipes = useLoaderData();
//     const [allRecipes, setAllRecipes] = useState([]);
//     const navigate = useNavigate();
//     let path = window.location.pathname === "/myRecipe";
//     let favItems = JSON.parse(localStorage.getItem("fav")) ?? [];
//     const [isFavRecipe, setIsFavRecipe] = useState(false);

//     useEffect(() => {
//         setAllRecipes(recipes);
//     }, [recipes]);

//     const onDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
//     if (!confirmDelete) return; // Stop function execution if user cancels

//     try {
//         await axios.delete(`http://localhost:5000/recipe/${id}`);
//         console.log("Recipe deleted successfully!");

//         // Update state after deletion
//         setAllRecipes(allRecipes.filter(recipe => recipe._id !== id));

//         // Update local storage
//         let filterItem = favItems.filter(recipe => recipe._id !== id);
//         localStorage.setItem("fav", JSON.stringify(filterItem));
//     } catch (error) {
//         console.error("Error deleting recipe:", error);
//     }
// };

// const confirmDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/recipe/${recipeToDelete._id}`);
//       console.log("Recipe deleted successfully!");

//       // Update state after deletion
//       setAllRecipes(allRecipes.filter(recipe => recipe._id !== recipeToDelete._id));

//       // Update local storage
//       let filterItem = favItems.filter(recipe => recipe._id !== recipeToDelete._id);
//       localStorage.setItem("fav", JSON.stringify(filterItem));

//       // Close the modal after successful deletion
//       setShowModal(false);
//     } catch (error) {
//       console.error("Error deleting recipe:", error);
//     }
//   };

//   const cancelDelete = () => {
//     setShowModal(false); // Close the modal if the user cancels
//   };


//     const favRecipe = (item) => {
//         let filterItem = favItems.filter(recipe => recipe._id !== item._id);
//         favItems = favItems.some(recipe => recipe._id === item._id) ? filterItem : [...favItems, item];
//         localStorage.setItem("fav", JSON.stringify(favItems));
//         setIsFavRecipe(prev => !prev);
//     };

//     return (
//         <div className='card-container'>
//             {allRecipes?.map((item, index) => (
//                 <div key={index} className='card' onDoubleClick={() => navigate(`/recipe/${item._id}`)}>
//                     <img src={`http://localhost:5000/images/${item.coverImage}`} width="120px" height="100px" alt="Recipe Cover" />
//                     <div className='card-body'>
//                         <div className='title'>{item.title}</div>
//                         <div className='icons'>
//                             <div className='timer'><BsStopwatchFill /> {item.time}</div>
//                             {!path ? (
//                                 <FaHeart onClick={() => favRecipe(item)}
//                                     style={{ color: favItems.some(res => res._id === item._id) ? "red" : "" }} />
//                             ) : (
//                                 <div className='action'>
//                                     <Link to={`/editRecipe/${item._id}`} className="editIcon"><FaEdit /></Link>
//                                     <MdDelete onClick={() => onDelete(item._id)} className='deleteIcon' />
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             ))}
            
//         </div>
//     );
// }


import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function RecipeItems() {
    const recipes = useLoaderData();
    const [allRecipes, setAllRecipes] = useState([]);
    const [favItems, setFavItems] = useState(JSON.parse(localStorage.getItem("fav")) ?? []);
    const navigate = useNavigate();
    let path = window.location.pathname === "/myRecipe";

    // Get the logged-in user (with fallback)
    const user = JSON.parse(localStorage.getItem("user")) || {}; 

    useEffect(() => {
        if (path) {
            // Check if user exists before filtering
            const userRecipes = recipes.filter(recipe => recipe.createdBy === user?._id);
            setAllRecipes(userRecipes);
        } else {
            setAllRecipes(recipes);
        }
    }, [recipes, path, user?._id]);

    const onDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:5000/recipe/${id}`);
            console.log("Recipe deleted successfully!");

            // Update state after deletion
            setAllRecipes(allRecipes.filter(recipe => recipe._id !== id));

            // Update local storage
            let updatedFavs = favItems.filter(recipe => recipe._id !== id);
            setFavItems(updatedFavs);
            localStorage.setItem("fav", JSON.stringify(updatedFavs));
        } catch (error) {
            console.error("Error deleting recipe:", error);
        }
    };

    const favRecipe = (item) => {
        if (!item || !item._id) return; // Prevent issues with missing IDs
    
        setFavItems(prevFavItems => {
            const updatedFavs = prevFavItems.some(recipe => recipe._id === item._id)
                ? prevFavItems.filter(recipe => recipe._id !== item._id) // Remove if already favorited
                : [...prevFavItems, item]; // Add if not favorited
    
            localStorage.setItem("fav", JSON.stringify(updatedFavs));
            return updatedFavs;
        });
    };
    

    return (
        <div className='card-container'>
            {allRecipes.length > 0 ? (
                allRecipes.map((item, index) => (
                    <div key={index} className='card' onDoubleClick={() => navigate(`/recipe/${item._id}`)}>
                        <img src={`http://localhost:5000/images/${item.coverImage}`} width="120px" height="100px" alt="Recipe Cover" />
                        <div className='card-body'>
                            <div className='title'>{item.title}</div>
                            <div className='icons'>
                                <div className='timer'><BsStopwatchFill /> {item.time}</div>
                                {!path ? (
                                    <FaHeart onClick={() => favRecipe(item)}
                                        style={{ color: favItems.some(res => res._id === item._id) ? "red" : "" }} />
                                ) : (
                                    <div className='action'>
                                        <Link to={`/editRecipe/${item._id}`} className="editIcon"><FaEdit /></Link>
                                        <MdDelete onClick={() => onDelete(item._id)} className='deleteIcon' />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    );
}
