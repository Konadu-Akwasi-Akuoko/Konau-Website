import React from "react";
import githubSocialIcon from "../../../assets/images/githubSocial.svg";
import twitterSocialIcon from "../../../assets/images/twitterSocial.svg";
import mediumSocialIcon from "../../../assets/images/mediumSocial.svg";
import linkedInSocialIcon from "../../../assets/images/linkedInSocial.svg";

function Contact() {
  return (
    <div className="contact body__padding-vertical body__padding-horizontal">
      <div className="contact__div01">
        <div className="contact__div01__div01">
          <p className="contact__div01__div01__p01 h2-light">
            Let&apos;s talk...
          </p>
          <p className="contact__div01__div01__p02 h3-medium">
            Ask me anything or just say hi 🤗
          </p>
        </div>
        <div className="contact__div01__div02">
          <div className="contact__divX2__div">
            <img
              alt="ALT"
              src={twitterSocialIcon}
              className="contact__divX2__div__img"
            />
          </div>
          <div className="contact__divX2__div">
            <img
              alt="ALT"
              src={githubSocialIcon}
              className="contact__divX2__div__img"
            />
          </div>
          <div className="contact__divX2__div">
            <img
              alt="ALT"
              src={linkedInSocialIcon}
              className="contact__divX2__div__img"
            />
          </div>
          <div className="contact__divX2__div">
            <img
              alt="ALT"
              src={mediumSocialIcon}
              className="contact__divX2__div__img"
            />
          </div>
        </div>
      </div>
      <form className="contact__div02">
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
        <button className="home-container24 sendButton" type="submit">
          <span>Send Message</span>
          <img
            alt="ALT"
            src="/playground_assets/bxs_send.svg"
            className="home-ALT15"
          />
        </button>
      </form>
    </div>
  );
}

export default Contact;
