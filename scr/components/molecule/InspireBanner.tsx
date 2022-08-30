import React from "react";
type InspireBannerProps = {
  title: string;
  image: string;
  description: string;
};
const InspireBanner = ({ title, image, description }: InspireBannerProps) => {
  return (
    <div className="grid lg:grid-cols-[1fr,5fr] grid-cols-1  gap-10  pt-5">
      <div className="p-[24px] mb-10 bg-gray-100 rounded-3xl ">
        <img src={image} alt="" width={46} height={42} />
      </div>
      <div className="">
        <p className="text-3xl font-semibold pb-4">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InspireBanner;
