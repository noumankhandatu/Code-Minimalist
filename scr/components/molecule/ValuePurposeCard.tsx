import React from "react";
type ValueCardProps = {
  items:
    | {
        title: string;
        description: string;
        img: string;
      }[]
    | any;
};

const ValuePurposeCard = ({ items }: ValueCardProps) => {
  const { title, description, img } = items;
  return (
    <div
      className="p-12 rounded-[30px] bg-white maxContent "
      style={{ boxShadow: "0 3px 9px rgb(0 0 0 / 16%)" }}
    >
      <p className="text-[42px] text-left capitalize mb-4	">{title}</p>
      <div className="lg:flex lg:flex-row flex flex-col items-center ">
        <p className="text-[15px] tracking-wider leading-7 text-left">
          {description}
        </p>
        <img src={img} className="lg:w-[240px]" alt="" />
      </div>
    </div>
  );
};

export default ValuePurposeCard;
