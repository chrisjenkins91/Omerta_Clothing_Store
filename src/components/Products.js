import React from "react";
import brand from "../img/Ceege Logo PNG.png";
import edhard from '../img/joggers.png'; 

// The Products component displays information about a single product.
function Products({ itemName, itemPrice, itemCategory, itemRating, itemDesc, itemImage, addToCart }) {

    return (
        // Column layout for each product card
        <div className="col-sm-12 d-flex justify-content-around col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-3 p-4">
            
            {/* Card for displaying product details */}
            <div className="card text-light">
                
                {/* Product category */}
                <div className="category">
                    {/* Display the category name of the product */}
                    <h5 className="text-light rounded my-1 mx-1 col-6 p-1">{itemCategory}</h5>
                </div>
                
                {/* Product image */}
                <div>
                    {/* Display product image */}
                    <img className="card-img-top product-image" src={itemImage} alt={itemName} />
                </div>
                
                {/* Card body containing product info */}
                <div className="card-body item">
                    
                    {/* Product name */}
                    <div>
                        <h4 className="card-title productTitle">
                            {/* If no item name, show "Unnamed Product" */}
                            {itemName || "Unnamed Product"}
                        </h4>
                    </div>

                    {/* Product price */}
                    <div className="productPrice">
                        <h5 className="cart-title">
                            {/* Display price, ensure it's a number with two decimal places */}
                            ${itemPrice.toFixed(2) || "0.00"}
                        </h5>
                    </div>

                    {/* Product rating */}
                    <div>
                        <p className="card-text rating text-muted">
                            {/* Display the rating of the product */}
                            Rating: {itemRating}
                        </p>
                    </div>

                    {/* Product description */}
                    <div className="mb-4">
                        <small className="card-text description">
                            {/* Display product description */}
                            {itemDesc}
                        </small>
                    </div>

                    {/* Button to add item to cart */}
                    <div>
                        <div className="buttonContainer">
                            {/* Button to add the item to the cart */}
                            <button className="btn btn-sm my-2" onClick={() => addToCart(itemName, itemPrice)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products; // Exporting the Products component to be used elsewhere