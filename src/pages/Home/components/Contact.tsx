/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import githubSocialIcon from "../../../assets/images/githubSocial.svg";
import twitterSocialIcon from "../../../assets/images/twitterSocial.svg";
import mediumSocialIcon from "../../../assets/images/mediumSocial.svg";
import linkedInSocialIcon from "../../../assets/images/linkedInSocial.svg";
import sendBtnIcon from "../../../assets/images/sendBtnIcon.svg";

function Contact() {
  return (
    <>
      <div
        id="contact"
        className="contact body__padding-vertical body__padding-horizontal"
      >
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
        <form className="contact__form">
          <div className="contact__form__div01">
            <div className="contact__form__div01__div01">
              <label
                htmlFor="name"
                className="contact__form__div01__div01__label h3-medium"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="contact__form__div01__div01__input"
              />
            </div>
            <div className="contact__form__div01__div01">
              <label
                htmlFor="email"
                className="contact__form__div01__div01__label h3-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="someone@somemail.com"
                className="contact__form__div01__div01__input"
              />
            </div>
          </div>
          <div className="contact__form__div01__div02">
            <div className="contact__form__divX3">
              <label
                htmlFor="message"
                className="contact__form__divX3__label h3-medium"
              >
                Message
              </label>
              <input
                id="message"
                type="text"
                placeholder="Hello, Konadu..."
                className="contact__form__div01__div01__input"
              />
            </div>
          </div>
          <button
            className="button-icon-white-bg contact__form__div01__button"
            type="submit"
          >
            <span>Send Message</span>
            <img alt="A send button icon" src={sendBtnIcon} />
          </button>
        </form>
      </div>
      <div className="footer">
        <span className="content">
          <span>Built with by ❤️</span>
          <a href="https://twitter.com/akuoko_konadu"> @akuoko_konadu</a>
        </span>
      </div>
    </>
  );
}

export default Contact;

// TODO: Heavy refactoring, extract to smaller functions and call them.
