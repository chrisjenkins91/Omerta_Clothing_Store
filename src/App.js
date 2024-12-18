import React, {useState} from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App(){

    const [cart, setCart] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null)

    function handleCategory(category){
        setSelectedCategory(category);
    }

    //Function to add items to the cart

    function addToCart(itemName, itemPrice){
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.name === itemName);

            if (existingItem) {
                return prevCart.map((item) => 
                item.name === itemName
                ? {...item, quantity: item.quantity + 1, cost: itemPrice * (item.quantity + 1)}
            :item);
            } else {
                return [...prevCart, { name: itemName, quantity: 1, cost: itemPrice}];
            }
        });
    };

    function decreaseQuantity(itemName, itemPrice){
        const updatedCart = cart.map(item => {
            if (item.name === itemName) {
                // Ensure quantity is not reduced to below 1
                const newQuantity = Math.max(item.quantity - 1, 0);
                const newCost = newQuantity * itemPrice;

                // Only update if quantity is > 0
                if(newQuantity > 0) {
                    return {...item, quantity: newQuantity, cost: newCost};
                }
                return null; // Mark item for removal
            }
            return item; //Unchanged items remain as is
        }).filter(item => item !== null); //Remove null items from the cart
        setCart(updatedCart);
    }

    function increaseQuantity(itemName, itemPrice){
        const updatedCart = cart.map(item => {
            if (item.name === itemName) {
                const newQuantity = Math.max(item.quantity + 1, 0);
                const newCost = newQuantity * itemPrice; // Recalculate the cost
                return {...item, quantity: newQuantity, cost: newCost };
            }
            return item;
        });
        setCart(updatedCart);
    }

    function removeItem(itemName){
        setCart(prevCart => prevCart.filter(item => item.name !== itemName))
    }

    return(
        <div className="container-fluid">
            <Header
            cart={cart}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            removeItem={removeItem}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleCategory={handleCategory} />
            <Body
            addToCart={addToCart}
            cart={cart}
            searchQuery={searchQuery} />
            <Footer />
        </div>
    )
}

export default App;