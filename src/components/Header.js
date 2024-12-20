import React, {useState} from "react";
import brand from '../img/[removal.ai]_53a79df7-682d-4f4d-843b-246a591774ab-ologo.png'

function Header({cart, removeItem, decreaseQuantity, searchQuery, setSearchQuery, increaseQuantity, handleCategory, resetCategory}){
    
    const [showSearchBar, setShowSearchBar] = useState(false);
    // To manage if the checkout menu is showing or not
    const [showCheckout, setShowCheckout] = useState(false);
    // Function to toggle the checkout menu visibility
    function toggleCheckoutMenu(){
        setShowCheckout(!showCheckout); // Switch between true and false
    }

    function handleSearchChange(event){
        setSearchQuery(event.target.value);
    }

    function toggleSearchBar(){
        setShowSearchBar(!showSearchBar); // Switch between true and false for search bar
    }

         

    return(
        <div className="header row align-items-center">
            <TopBarLink />
            <Logo />
            <CategoryLinks 
            handleCategory={handleCategory}
            resetCategory={resetCategory} />
            <CartIcons
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearchChange={handleSearchChange}
            toggleCheckoutMenu={toggleCheckoutMenu}
            toggleSearchBar={toggleSearchBar}
            showSearchBar={showSearchBar}
            cart={cart}/>
            {showSearchBar && <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery} 
            handleSearchChange={handleSearchChange}/>}
            {showCheckout && <CheckoutMenu 
            cart={cart} 
            toggleCheckoutMenu={toggleCheckoutMenu} 
            removeItem={removeItem}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity} />}
            {showSearchBar}
        </div>
    )
}

function TopBarLink(){

    return(
        <nav className="col-sm-12 col-md-12 col-lg-12 col-xl-12 nav topBarNav justify-content-center justify-content-md-end">
            <ul className="nav">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#shop">Shop</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

function Logo(){

    return(
        <div className="logo col-sm-12 col-md-2 col-lg-3 col-xl-3 d-flex justify-content-center justify-content-md-start">
            <a href="#" className="navbar-brand d-flex align-items-center">
                <img src={brand} alt="Logo Image" width={80} className="" />
                <div className="brand-text text-white m-0">
                    <h4 className="m-0">Omerta</h4>
                    <h5>Luxury <span>Boutique</span></h5>
                </div>
            </a>
        </div>
    )
}

function CategoryLinks({handleCategory, resetCategory}){
    const categories = ["All", "OuterWear", "Pants", "T-Shirt", "Shoes", "Accessories"]

    return(
        <div className="logo d-flex justify-content-center col-sm-12 col-md-8 col-lg-7 col-xl-7 categoryLinks text-nowrap ">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className="btn btn-sm text-light mx-1 my-1" 
            onClick={() => handleCategory(category)}>
            {category}
          </button>
        ))}
        
        </div>
    )
}

function CartIcons({toggleCheckoutMenu, cart, toggleSearchBar, showSearchBar, searchQuery, handleSearchChange, handleCategory}){

    return(
        <div className="logo col-sm-12 col-md-2 col-lg-2 col-xl-2 d-flex justify-content-center justify-content-md-end">
            <SearchIcon toggleSearchBar={toggleSearchBar}  />
            <ShoppingBag
            toggleCheckoutMenu={toggleCheckoutMenu}
            cart={cart} />
        </div>
    )
}

function SearchIcon({toggleSearchBar}){
    
    

    return(
        <div className="searchIcon">
            <button className="btn btn-sm" onClick={toggleSearchBar}>
                <i className="fas fa-search fa-md"></i>
            </button>
        </div>
    )
}

function SearchBar({searchQuery, handleSearchChange}){

    return(
        <div className="bg-light text-dark text-center container">
            <div className="row">
                <div className="d-flex justify-content-center my-5">
                    <div className="col-sm-12 col-md-6">
                        <label htmlFor="products" className="mb-2 fw-bold">Search Products: </label>
                        <input 
                        type="text" 
                        className="form-control my-2"
                        value={searchQuery} 
                        placeholder="Search..." 
                        onChange={handleSearchChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ShoppingBag({toggleCheckoutMenu, cart}){
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return(
        <div className="d-flex align-items-start shopIcon">
            <button className="btn btn-sm" onClick={toggleCheckoutMenu}>
                <i className="fas fa-shopping-basket fa-md"></i>
                {totalItems > 0 && <span className="cart-count text-light ms-1">{totalItems}</span>}
            </button>
        </div>
    )
}

function CheckoutMenu({ cart, toggleCheckoutMenu, removeItem, decreaseQuantity, increaseQuantity}) {
    const totalCost = cart.reduce((sum, item) => sum + item.cost, 0);
  
    return (
    <div className="d-flex justify-content-center justify-content-md-end align-items-center align-items-md-start align-items-sm-end">
        <div className="checkout-menu border rounded text-dark col-sm-6 col-md-6 col-lg-4 col-xl-4 p-3 m-3 mt-5">
            <div className="checkoutHeader col-12">
                <h2 className="border-bottom border-2">Checkout</h2>
            </div>
            {cart.length > 0 ? (
            cart.map((item, index) => (
                <div key={index} className="cart-item col-12 d-flex justify-content-start align-items-center">
                    <div className="item-details col-5">
                        <p className="fw-bold">{item.name}</p>
                        <p>{item.quantity} - ${item.cost.toFixed(2)}</p>
                    </div>
                    <div className="item-actions col-md-5 d-flex justify-content-start">
                        <button className="btn btn-sm btn-warning me-2" onClick={() => decreaseQuantity(item.name, item.cost / item.quantity)}>-</button>
                        <button className="btn btn-sm btn-warning me-2"
                        onClick={() => increaseQuantity(item.name, item.cost / item.quantity)}>+</button>
                        
                    </div>
                    <div className="removeButton col-md-2">
                        <button className="btn btn-sm btn-danger me-2" onClick={() => removeItem(item.name)}>X</button>
                    </div>
                </div>
            ))
            ) : (
            <p>Your cart is empty!</p>
            )}
            <h4 className="border-top border-2 border-light text-light">Total: ${totalCost.toFixed(2)}</h4>
            <div className="closeButton">
                <button className="btn btn-sm btn-dark mb-3" onClick={toggleCheckoutMenu}>Close</button>
            </div>
        </div>
    </div>
    );
  }

export default Header;