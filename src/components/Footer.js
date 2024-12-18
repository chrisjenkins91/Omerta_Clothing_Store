import React from "react";

function Footer(){

    return(
        <div className="mailList row">
            <MailingList />
            <FooterLinks />
        </div>
    )
}

function MailingList(){

    return(
        <div>
            <div className="col-12 d-flex justify-content-center">
                <h1 className="mt-5 text-light">Join Our Mailing List</h1>
            </div>
            <div className="d-flex justify-content-center col-12">
                <div className="form-group">
                  <label for="email" className="text-light">Email Address:</label>
                  <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="Ex. info@omerta.com"/>
                  <small id="emailHelpId" class="form-text text-muted"></small>
                </div>
            </div>
        </div>
    )
}

function FooterLinks(){

    return(
        <div className="row">
            <div className="col-12 d-flex justify-content-start">
                <p>Omerta &#169; <a href="">Privacy Policy</a></p>
            </div>
        </div>
    )
}

export default Footer;