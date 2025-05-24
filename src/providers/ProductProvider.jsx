import React, { useEffect, useState } from "react";
import ProductContext from "../contexts/ProductContext";

const ProductProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [darkIstrue,setDarkIStrue]=useState(false);
    const [modalId,setModalId] = useState();
   


  useEffect(() => {
    fetch("https://diverse-dish-server.vercel.app/recipes") // Replace with your actual API URL
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
//   console.log(recipes);
  const products={
    recipes,
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
