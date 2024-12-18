import React from "react";
import brand from '../img/Ceege Logo PNG.png'
import heroOne from '../img/edhardy_tee.png'

function Hero(){

    return(
        <div className="heroBackground col-12">
            <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div>
                    <HeroCarousel />
                    <HeroButtons />
                </div>
            </div>
        </div>
    )
}

function HeroCarousel(){

    return(
        <div className="col-12 my-5">
            <div id="carouselId" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="img-fluid"src={brand} alt="First slide" width={500}/>
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid" src={brand} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img src={brand} alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

function HeroButtons(){

    return(
        <div className="heroButton d-flex justify-content-center">
            <button className="btn btn-sm btn-secondary mx-2">Men</button>
            <button className="btn btn-sm btn-secondary mx-2">Women</button>
        </div>
    )
}

export default Hero;