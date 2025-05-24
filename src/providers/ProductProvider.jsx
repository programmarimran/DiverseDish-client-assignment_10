import React, { useEffect, useState } from "react";
import ProductContext from "../contexts/ProductContext";

const ProductProvider = ({ children }) => {


  const [recipes, setRecipes] = useState([]);

  const [displayRecipes,setDisplayRecipes]=useState(recipes)
  const [darkIstrue,setDarkIStrue]=useState(false);
    const [modalId,setModalId] = useState();
   


  useEffect(() => {
    fetch("http://localhost:3000/recipes") // Replace with your actual API URL
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
//   console.log(recipes);
  const products={
    recipes,
    displayRecipes,
    setDisplayRecipes,
    setDarkIStrue,
    darkIstrue,
     modalId,
     setModalId,
   
    
  }
  // console.log(wishlistRecipe)
  return (
    <div>
      <ProductContext value={products}>{children}</ProductContext>
    </div>
  );
};

export default ProductProvider;
