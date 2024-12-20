import React from "react"; // Importing React library
import brand from '../img/Ceege Logo PNG.png' // Importing an image for the carousel
import heroOne from '../img/[removal.ai]_3c255a87-9b55-46f4-b612-366509afeb88-steetmodel.png' // Importing another image (though it's not used in the current code)
import heroTwo from '../img/[removal.ai]_ea35ce97-e202-4833-bff8-9d165299c3b6-virgil2.png'


function Hero() {
    // The Hero component is the main section that contains the background and carousel
    return (
        <div className="heroBackground col-12"> {/* Container for the hero section */}
            <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div>
                    {/* HeroCarousel component handles the carousel display */}
                    <HeroCarousel />
                </div>
            </div>
        </div>
    );
}

function HeroCarousel() {
    // The HeroCarousel component is used to display a carousel of images
    return (
        <div id="carouselExampleIndicators" className="carousel slide my-5 p-5">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={heroOne} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                    <img src={heroTwo} className="d-block w-100" alt="" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}



export default Hero; // Exporting the Hero component so it can be used elsewhere
