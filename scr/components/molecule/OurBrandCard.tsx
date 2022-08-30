import React from "react";
import { RichText } from "prismic-reactjs";
type OurBranchCard = {
  description: string;
  title: string | any;
  img: string;
};
const OurBranchCard = ({ img, title, description }: OurBranchCard) => {
  return (
    <div className="flex flex-col items-center justify-center text-[#2A2A2A]	 h-[306px]  bg-[#E7F9FE] rounded-xl">
      <img className="w-[80%] h-[60px] animate-bounce" src={img} />
      <div className="lg:text-[28px] text-[22px] font-medium  mt-2 mb-2">
        {RichText.render(title)}
      </div>
      <div className="text-[15px] ">
        <span>{description}</span>
      </div>
    </div>
  );
};

export default OurBranchCard;
