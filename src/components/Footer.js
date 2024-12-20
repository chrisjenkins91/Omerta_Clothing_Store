import React from "react";

// The Footer component contains two main sections: MailingList and FooterLinks
function Footer() {
    return (
        // Container for the mailing list and footer links
        <div className="mailList row">
            {/* Mailing list section */}
            <MailingList />
            {/* Footer links section */}
            <FooterLinks />
        </div>
    );
}

// The MailingList component displays a form to join the mailing list
function MailingList() {
    return (
        <div>
            {/* Title for the mailing list section */}
            <div className="col-12 d-flex justify-content-center" id="contact">
                <h1 className="my-5 text-light text-center">Join Our Mailing List</h1>
            </div>

            {/* Input form for email address */}
            <div className="d-flex justify-content-center align-items-center col-12 my-5">
                <div className="form-group">
                    {/* Label for the email input field */}
                    <label htmlFor="email" className="text-light">Email Address:</label>
                    {/* Email input field */}
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="emailHelpId"
                        placeholder="Ex. info@omerta.com"/>
                </div>
                <div className="d-flex align-items-center submitButton">
                    <button className="btn btn mt-4 ms-3" type="submit">Submit</button>
                </div>
            </div>
        </div>
    );
}

// The FooterLinks component displays a footer with a privacy policy link
function FooterLinks() {
    return (
        <div className="footer col-12">
            <div className="col-12 d-flex justify-content-start text-white">
                {/* Footer text with privacy policy link */}
                <p>Omerta &#169; <a href="">Privacy Policy</a></p>
            </div>
        </div>
    );
}

export default Footer; // Exporting the Footer component to be used elsewhere
