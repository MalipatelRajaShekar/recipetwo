const express=require("express");
const {getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,upload}=require("../controller/recipe")
const router=express.Router();
const verifyToken=require("../middleware/auth")

router.get("/",getRecipes);
router.get("/:id",getRecipe);
router.post("/",upload.single('file'),verifyToken,addRecipe)
router.put("/:id",upload.single('file'),verifyToken,editRecipe)
router.delete("/:id",deleteRecipe)

module.exports=router

