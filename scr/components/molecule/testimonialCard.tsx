import React from "react";
import AppFont from "../atom/AppFont";
import Image from "next/image";
type TestimonialCardProps = {
  img: string;
  name: string;
  place: string;
  description: string;
};
const TestimonialCard = ({
  img,
  name,
  place,
  description,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white shadow mb-20 mr-4 p-14 lg:h-[420px] h-auto rounded relative">
      <div className="flex items-center ">
        <div>
          <img className="w-[70px] h-[70px] rounded-full" src={img} alt="" />
        </div>
        <div className="ml-4">
          <p className="text-[20px font-medium]">{name}</p>
          <AppFont className="text-App-orange">{place}</AppFont>
        </div>
      </div>
      <AppFont className="mt-8 leading-loose ">{description}</AppFont>
      <div className="absolute -bottom-14">
        <Image src="/cliper.png" width={48} height={52}></Image>
      </div>
    </div>
  );
};

export default TestimonialCard;
// ""
