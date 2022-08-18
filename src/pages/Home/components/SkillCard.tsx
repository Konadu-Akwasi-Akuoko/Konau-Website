import React from "react";

type SkillCardProps = {
  imgSrc: string;
  cardTitle: string;
  cardContent1: string;
  cardContent2: string;
};

function SkillCard({
  imgSrc,
  cardTitle,
  cardContent1,
  cardContent2,
}: SkillCardProps) {
  return (
    <div className="skill__div01__div">
      <div className="skill__div01__div__div">
        <div className="skill__div01__div__div__div">
          <img
            alt="ALt"
            src={imgSrc}
            className="skill__div01__div__div__div__img"
          />
        </div>
        <span className="text-3xl">{cardTitle}</span>
        <span className="skill__div01__div__span02">{cardContent1}</span>
        <span className="skill__div01__div__span03">{cardContent2}</span>
      </div>
    </div>
  );
}

export default SkillCard;
