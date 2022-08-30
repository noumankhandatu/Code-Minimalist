import React from "react";
import Button from "./button";

type CardTypes = {
  image: string;
  title: string;
  description: string;
};

const PortfolioCard = ({ image, title, description }: CardTypes) => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col  items-center bg-App-extraLight mt-10 mb-10">
      <img src={image} alt="" />
      <div className="p-10">
        <p className="text-[18px] mb-4">{title}</p>
        <p className={"text-[29px] mb-4 font-bold text-left"}>{description}</p>
        <div>
          <Button path="/portfolio" variant="danger">
            VIEW PROJECTS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
