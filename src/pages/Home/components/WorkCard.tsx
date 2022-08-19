/* eslint-disable react/require-default-props */
import React from "react";
import linkBtnIcon from "../../../assets/images/linkBtnIcon.svg";
import gotoBtnIcon from "../../../assets/images/gotoBtnIcon.svg";

type WorkCardProps = {
  title: string;
  pills: string[];
  description: string;
  hasCodeLink?: boolean;
  projectLink: string;
  codeLink?: string | undefined;
  image: string;
};

function WorkCard({
  title,
  pills,
  description,
  hasCodeLink,
  projectLink,
  codeLink = "https://twitter.com/akuoko_konadu",
  image,
}: WorkCardProps) {
  return (
    <div className="work__div__div">
      <img alt="ALT" src={image} className="work__div__div__img" />
      <div className="work__div__div__div">
        <div className="work__divX4">
          <span className="work__divX4__span01 text-3xl">{title}</span>
          <div className="work__divX4__div01">
            {pills.map((pill, index) => {
              return (
                <span id={index.toString()} className="text-sm pill">
                  {pill}
                </span>
              );
            })}
          </div>
          <span className="work__divX4__span02 p-content">{description}</span>
          <div className="work__divX4__div02">
            <a href={projectLink} type="button" className="button-icon">
              <span>Project</span>
              <img alt="ALT" src={gotoBtnIcon} />
            </a>
            {hasCodeLink && (
              <a href={codeLink} className="button-icon">
                <span>Code</span>
                <img alt="ALT" src={linkBtnIcon} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
