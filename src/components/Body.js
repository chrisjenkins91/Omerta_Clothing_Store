import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Products from "./Products";
import Title from "./Title";
import images from "./Images";

function Body({addToCart, decreaseQuantity, removeItem, cart, searchQuery}){
    const [clothingItem, setClothingItem] = useState([]);
    const [category, setCategory] = useState();
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
      fetch(`/api/items/`)
        .then((res) => res.json())
        .then((data) => {
          // Attach images dynamically
          const updatedItems = data.map((item) => ({
            ...item,
            image_url: images[item.name], 
          }));
          setClothingItem(updatedItems);
        });
    }, []);

  // Filter products based on search query and selected category
  const filteredClothes = clothingItem.filter((item) => {
    const lowercasedSearchQuery = searchQuery.toLowerCase(); // Convert search query to lowercase
    // Check if the product matches the search query or category
    const matchesSearchQuery =
      item.name.toLowerCase().includes(lowercasedSearchQuery) ||
      item.category_name.toLowerCase().includes(lowercasedSearchQuery);
    const matchesCategory = selectedCategory ? item.category_name === selectedCategory : true;

    return matchesSearchQuery && matchesCategory;
  });

  function handleCategory(category){
    setSelectedCategory(category);
  }

  function resetCategory(){
    setSelectedCategory(null);
  }


    const clothingProduct = filteredClothes.map((item, index) => (
        <Products
        key={index}
        itemName={item.name}
        itemPrice={item.price}
        itemDesc={item.description}
        itemCategory={item.category_name}
        itemRating={item.rating} 
        itemImage={item.image_url}
        addToCart={addToCart} />
    ));


    return(
        <div className="body row">
            <Hero />
            <Title />
            {clothingProduct}
        </div>
    )
}


export default Body;