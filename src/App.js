import React, { useState } from "react"; // Import React and useState for state management
import Header from "./components/Header"; // Import Header component
import Body from "./components/Body"; // Import Body component
import Footer from "./components/Footer"; // Import Footer component

function App() {
    // State to manage the cart (array of items in the cart)
    const [cart, setCart] = useState([]);

    // State to manage the search query for filtering items
    const [searchQuery, setSearchQuery] = useState("");

    // State to manage the currently selected category
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Function to set the selected category (used for filtering items by category)
    function handleCategory(category) {
        setSelectedCategory(category);
    }

    // Function to add items to the cart
    function addToCart(itemName, itemPrice) {
        setCart((prevCart) => {
            // Check if the item already exists in the cart
            const existingItem = prevCart.find((item) => item.name === itemName);

            if (existingItem) {
                // If it exists, update its quantity and cost
                return prevCart.map((item) =>
                    item.name === itemName
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                              cost: itemPrice * (item.quantity + 1),
                          }
                        : item
                );
            } else {
                // If it doesn't exist, add it as a new item
                return [...prevCart, { name: itemName, quantity: 1, cost: itemPrice }];
            }
        });
    }

    // Function to decrease the quantity of an item in the cart
    function decreaseQuantity(itemName, itemPrice) {
        const updatedCart = cart
            .map((item) => {
                if (item.name === itemName) {
                    // Ensure the quantity doesn't go below 0
                    const newQuantity = Math.max(item.quantity - 1, 0);
                    const newCost = newQuantity * itemPrice;

                    // Only update if quantity is greater than 0
                    if (newQuantity > 0) {
                        return { ...item, quantity: newQuantity, cost: newCost };
                    }
                    return null; // Mark item for removal if quantity is 0
                }
                return item; // Keep other items unchanged
            })
            .filter((item) => item !== null); // Remove items marked as null
        setCart(updatedCart);
    }

    // Function to increase the quantity of an item in the cart
    function increaseQuantity(itemName, itemPrice) {
        const updatedCart = cart.map((item) => {
            if (item.name === itemName) {
                const newQuantity = item.quantity + 1; // Increase quantity
                const newCost = newQuantity * itemPrice; // Update cost
                return { ...item, quantity: newQuantity, cost: newCost };
            }
            return item; // Keep other items unchanged
        });
        setCart(updatedCart);
    }

    // Function to remove an item from the cart
    function removeItem(itemName) {
        setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
    }

    // Main structure of the app
    return (
        <div className="container-fluid">
            {/* Header component: Pass down props to handle cart, search, and category */}
            <Header
                cart={cart}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                removeItem={removeItem}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleCategory={handleCategory}
                selectedCategory={selectedCategory}
            />
            {/* Body component: Pass down props to handle adding to cart, cart data, search query, and category */}
            <Body
                addToCart={addToCart}
                cart={cart}
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
            />
            {/* Footer component: Simple footer section */}
            <Footer />
        </div>
    );
}

export default App; // Export the App component for use in other parts of the project
