import React from "react";

function Contact() {
  return (
    <div className="contact padding-vertical padding-horizontal">
      <div className="home-container12">
        <div className="home-container13">
          <p className="home-hero-sub-heading-text1 sub-Heading-Light">
            Let&apos;s talk...
          </p>
          <p className="home-text39 content-Lg-Text">
            Ask me anything or just say hi 🤗
          </p>
        </div>
        <div className="home-container14">
          <div className="home-container15">
            <img
              alt="ALT"
              src="/playground_assets/akar-icons_twitter-fill%20%5B1%5D.svg"
              className="home-ALT12"
            />
          </div>
          <div className="home-container16">
            <img
              alt="ALT"
              src="/playground_assets/akar-icons_linkedin-v2-fill%20%5B1%5D.svg"
              className="home-ALT13"
            />
          </div>
          <div className="home-container17">
            <img
              alt="ALT"
              src="/playground_assets/ant-design_medium-outlined%20%5B1%5D.svg"
              className="home-ALT14"
            />
          </div>
        </div>
      </div>
      <div className="home-container18">
        <div className="home-container19">
          <div className="home-container20">
            <span className="home-text40 content-Lg-Text">Name</span>
            <input
              type="text"
              placeholder="Jhon Doe"
              className="home-textinput input"
            />
          </div>
          <div className="home-container21">
            <span className="home-text41 content-Lg-Text">Email</span>
            <input
              type="text"
              placeholder="someone@somemail.com"
              className="home-textinput1 input"
            />
          </div>
        </div>
        <div className="home-container22">
          <div className="home-container23">
            <span className="home-text42 content-Lg-Text">Message</span>
            <input
              type="text"
              placeholder="Hello, Konadu..."
              className="home-textinput2 input"
            />
          </div>
        </div>
        <div className="home-container24 sendButton">
          <span>Send Message</span>
          <img
            alt="ALT"
            src="/playground_assets/bxs_send.svg"
            className="home-ALT15"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
