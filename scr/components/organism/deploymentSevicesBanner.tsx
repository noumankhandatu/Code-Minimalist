import React from "react";
type DeployProps = {
  title: string;
  description: string;
  tagone: string;
  tagtwo: string;
  tagthree?: string;
  tagfour?: string;
  tagfive?: string;
  image: string;
};
const DeploymentSevicesBanner = ({
  image,
  title,
  description,
  tagone,
  tagtwo,
  tagthree,
  tagfive,
  tagfour,
}: DeployProps) => {
  const cssProps =
    "text-[16px] font-medium text-App-orange mr-8  cursor-pointer";
  return (
    <div>
      <div className="">
        <div className="grid lg:grid-cols-[0.5fr,1fr]  grid-cols-1  lg:gap-40 gap-10 items-center">
          <div className="relative bg-[#F5F5F5] lg:h-[450px] h-auto lg:w-[400px] w-auto p-10 ">
            <img
              className="lg:absolute lg:-right-32"
              src={image}
              alt="images"
            />
          </div>
          <div className="p-5">
            <p className="text-[36px]">{title}</p>
            <div className="flex  flex-wrap mt-5 mb-8 ">
              <p className={`${cssProps}`}>{tagone}</p>
              <p className={`${cssProps}`}>{tagtwo}</p>
              <p className={`${cssProps}`}>{tagthree}</p>
              <p className={`${cssProps}`}>{tagfour}</p>
              <p className={`${cssProps}`}>{tagfive}</p>
            </div>
            <p className="text-[16px]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentSevicesBanner;
