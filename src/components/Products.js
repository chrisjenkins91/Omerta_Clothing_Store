import React from "react";
import brand from "../img/Ceege Logo PNG.png"
import edhard from '../img/joggers.png'

function Products({itemName, itemPrice, itemCategory, itemRating, itemDesc, itemImage, addToCart}){

    return(
            <div className="col-sm-12 d-flex justify-content-between col-md-4 col-lg-3 col-xl-3 col-xxl-3 mt-3 p-3">
                <div className="card">
                    <div>
                        <h5>{itemCategory}</h5>
                    </div>
                    <div>
                        <img className="card-img-top product-image" src={itemImage} alt={itemName}  />
                    </div>
                    <div className="card-body item">
                        <div>
                            <h4 className="card-title productTitle">{itemName || "Unnamed Prouduct"}</h4>
                        </div>
                        <div>
                            <h5 className="cart-title productPrice">${itemPrice.toFixed(2) || "0.00"}</h5>
                        </div>
                        <div>
                            <p className="card-text rating text-muted">Rating: {itemRating}</p>
                        </div>
                        <div className="mb-4">
                            <small className="card-text description">{itemDesc}</small>
                        </div>
                        <div>
                            <div className="buttonContainer">
                                <button className="btn btn-sm btn-info my-2" onClick={() => addToCart(itemName, itemPrice)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Products;