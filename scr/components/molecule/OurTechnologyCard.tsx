import React from "react";
type TechProps = {
  items:
    | {
        title: string;
        img: string;
      }[]
    | any;
};
const OurTechnologyCard = ({ items }: TechProps) => {
  const { img, title } = items;
  return (
    <div className="bg-[#F8F8F8] p-10 lg:pt-8 lg:p-8 flex items-center flex-col text-center rounded-2xl">
      <img src={img} className="w-[56px] h-[56px]" alt="" />
      <div className="text-[18px]  font-semibold mt-5">{title}</div>
    </div>
  );
};

export default OurTechnologyCard;
