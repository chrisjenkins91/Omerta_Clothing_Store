import React, { useState, useEffect } from "react"; // Import React, useState, and useEffect
import Hero from "./Hero"; 
import Products from "./Products"; 
import Title from "./Title"; 
import images from "./Images"; 

function Body({ addToCart, decreaseQuantity, removeItem, cart, searchQuery, selectedCategory }) {
    
    // State to store the list of clothing items fetched from the API
    const [clothingItem, setClothingItem] = useState([]);

    // Fetch clothing items from the API when the component first loads
    useEffect(() => {
        fetch(`/api/items/`) // Fetch data from the backend API
            .then((res) => res.json()) // Parse the response as JSON
            .then((data) => {
                // Add images to each clothing item dynamically
                const updatedItems = data.map((item) => ({
                    ...item, // Copy all item properties
                    image_url: images[item.name], // Add image URL based on item name
                }));
                setClothingItem(updatedItems); // Update the state with the fetched items
            });
    }, []); // Empty dependency array ensures this runs only once

    // Filter clothing items based on the search query and selected category
    const filteredClothes = clothingItem.filter((item) => {
        const lowercasedSearchQuery = searchQuery.toLowerCase(); // Convert search query to lowercase
        // Check if the item name or category matches the search query
        const matchesSearchQuery =
            item.name.toLowerCase().includes(lowercasedSearchQuery) ||
            item.category_name.toLowerCase().includes(lowercasedSearchQuery);
        // Check if the item matches the selected category
        const matchesCategory = selectedCategory
            ? selectedCategory === "All" || item.category_name === selectedCategory
            : true;

        return matchesSearchQuery && matchesCategory; // Return true if both match
    });

    // Map the filtered clothing items into Product components
    const clothingProduct = filteredClothes.map((item, index) => (
        <Products
            key={index} // Unique key for each product
            itemName={item.name} // Product name
            itemPrice={item.price} // Product price
            itemDesc={item.description} // Product description
            itemCategory={item.category_name} // Product category
            itemRating={item.rating} // Product rating
            itemImage={item.image_url} // Product image URL
            addToCart={addToCart} // Function to add the product to the cart
        />
    ));

    return (
        <div className="body row">
            {/* Render the Hero section */}
            <Hero />
            {/* Render the Title section */}
            <Title />
            {/* Render all filtered product components */}
            {clothingProduct}
        </div>
    );
}

export default Body; // Export the Body component

