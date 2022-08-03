import React from "react";
import Form from "../scr/components/organism/form";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Wrapper from "../scr/components/organism/wrapper";
import AppFont from "../scr/components/atom/AppFont";
import ValuePurposeCard from "../scr/components/molecule/ValuePurposeCard";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
const ValueAndPurpose = ({ valueandpurpose }: any) => {
  let mapper: any = valueandpurpose?.results;
  const cardTitleOne = mapper?.map((set: any) => {
    return <span>{set?.data.cardTitleOne}</span>;
  });
  const cardTitleTwo = mapper?.map((set: any) => {
    return <span>{set?.data.cardTitleTwo}</span>;
  });
  const cardTitleThree = mapper?.map((set: any) => {
    return <span>{set?.data.cardTitleThree}</span>;
  });
  const cardTitleFour = mapper?.map((set: any) => {
    return <span>{set?.data.cardTitleFour}</span>;
  });
  const cardTitleFive = mapper?.map((set: any) => {
    return <span>{set?.data.cardTitleFive}</span>;
  });
  const cardTitleSix = mapper?.map((set: any) => {
    return <span>{set?.data.cardTitleSix}</span>;
  });
  const cardTitleSeven = mapper?.map((set: any) => {
    return <span>{set?.data.cardTitleSeven}</span>;
  });
  const cardDescriptionOne = mapper?.map((set: any) => {
    return <span>{set?.data.cardDescriptionOne}</span>;
  });
  const cardDescriptionTwo = mapper?.map((set: any) => {
    return <span>{set?.data.cardDescriptionTwo}</span>;
  });
  const cardDescriptionThree = mapper?.map((set: any) => {
    return <span>{set?.data.cardDescriptionThree}</span>;
  });
  const cardDescriptionFour = mapper?.map((set: any) => {
    return <span>{set?.data.cardDescriptionFour}</span>;
  });
  const cardDescriptionFive = mapper?.map((set: any) => {
    return <span>{set?.data.cardDescriptionFive}</span>;
  });
  const cardDescriptionSix = mapper?.map((set: any) => {
    return <span>{set?.data.cardDescriptionSix}</span>;
  });
  const cardDescriptionSeven = mapper?.map((set: any) => {
    return <span>{set?.data.cardDescriptionSeven}</span>;
  });
  const cardImageOne = mapper?.map((set: any) => {
    return set?.data.cardImageOne.url;
  });
  const cardImageTwo = mapper?.map((set: any) => {
    return set?.data.cardImageTwo.url;
  });
  const cardImageThree = mapper?.map((set: any) => {
    return set?.data.cardImageThree.url;
  });
  const cardImageFour = mapper?.map((set: any) => {
    return set?.data.cardImageFour.url;
  });
  const cardImageFive = mapper?.map((set: any) => {
    return set?.data.cardImageFive.url;
  });
  const cardImageSix = mapper?.map((set: any) => {
    return set?.data.cardImageSix.url;
  });
  const cardImageSeven = mapper?.map((set: any) => {
    return set?.data.cardImageSeven.url;
  });

  const ValuePurpCardData = [
    {
      title: cardTitleOne ? cardTitleOne : `pending`,
      description: cardDescriptionOne ? cardDescriptionOne : `pending`,
      img: cardImageOne ? cardImageOne : `pending`,
    },
    {
      title: cardTitleTwo ? cardTitleTwo : `pending`,
      description: cardDescriptionTwo ? cardDescriptionTwo : `pending`,
      img: cardImageTwo ? cardImageTwo : `pending`,
    },
    {
      title: cardTitleThree ? cardTitleThree : `pending`,
      description: cardDescriptionThree ? cardDescriptionThree : `pending`,
      img: cardImageThree ? cardImageThree : `pending`,
    },
    {
      title: cardTitleFour ? cardTitleFour : `pending`,
      description: cardDescriptionFour ? cardDescriptionFour : `pending`,
      img: cardImageFour ? cardImageFour : `pending`,
    },
    {
      title: cardTitleFive ? cardTitleFive : `pending`,
      description: cardDescriptionFive ? cardDescriptionFive : `pending`,
      img: cardImageFive ? cardImageFive : `pending`,
    },
    {
      title: cardTitleSix ? cardTitleSix : `pending`,
      description: cardDescriptionSix ? cardDescriptionSix : `pending`,
      img: cardImageSix ? cardImageSix : `pending`,
    },
    {
      title: cardTitleSeven ? cardTitleSeven : `pending`,
      description: cardDescriptionSeven ? cardDescriptionSeven : `pending`,
      img: cardImageSeven ? cardImageSeven : `pending`,
    },
  ];
  const bannerTitleOne = mapper?.map((set: any) => {
    return <span>{set?.data.bannerTitleOne}</span>;
  });
  const bannerTitleTwo = mapper?.map((set: any) => {
    return <span>{set?.data.bannerTitleOne}</span>;
  });
  const bannerTitleThree = mapper?.map((set: any) => {
    return <span>{set?.data.bannerTitleOne}</span>;
  });
  const bannerTitleFour = mapper?.map((set: any) => {
    return <span>{set?.data.bannerTitleOne}</span>;
  });
  const bannerTitleFive = mapper?.map((set: any) => {
    return <span>{set?.data.bannerTitleOne}</span>;
  });
  const bannerTitleSix = mapper?.map((set: any) => {
    return <span>{set?.data.bannerTitleOne}</span>;
  });
  const bannerTitleSeven = mapper?.map((set: any) => {
    return <span>{set?.data.bannerTitleOne}</span>;
  });
  const bannerImageone = mapper?.map((set: any) => {
    return set?.data.bannerImageone.url;
  });
  const bannerImageTwo = mapper?.map((set: any) => {
    return set?.data.bannerImageTwo.url;
  });
  const bannerImageThree = mapper?.map((set: any) => {
    return set?.data.bannerImageThree.url;
  });
  const bannerImageFour = mapper?.map((set: any) => {
    return set?.data.bannerImageFour.url;
  });
  const bannerImageFive = mapper?.map((set: any) => {
    return set?.data.bannerImageFive.url;
  });
  const bannerImageSix = mapper?.map((set: any) => {
    return set?.data.bannerImageSix.url;
  });
  const bannerImageSeven = mapper?.map((set: any) => {
    return set?.data.bannerImageSeven.url;
  });

  const ValuesData = [
    {
      title: bannerTitleOne ? bannerTitleOne : `pending`,
      img: bannerImageone ? bannerImageone : `pending`,
    },
    {
      title: bannerTitleTwo ? bannerTitleTwo : `pending`,
      img: bannerImageTwo ? bannerImageTwo : `pending`,
    },
    {
      title: bannerTitleThree ? bannerTitleThree : `pending`,
      img: bannerImageThree ? bannerImageThree : `pending`,
    },
    {
      title: bannerTitleFour ? bannerTitleFour : `pending`,
      img: bannerImageFour ? bannerImageFour : `pending`,
    },
    {
      title: bannerTitleFive ? bannerTitleFive : `pending`,
      img: bannerImageFive ? bannerImageFive : `pending`,
    },
    {
      title: bannerTitleSix ? bannerTitleSix : `pending`,
      img: bannerImageSix ? bannerImageSix : `pending`,
    },
    {
      title: bannerTitleSeven ? bannerTitleSeven : `pending`,
      img: bannerImageSeven ? bannerImageSeven : `pending`,
    },
  ];
  const title = mapper?.map((set: any) => {
    return <span>{set?.data.title}</span>;
  });
  const desc = mapper?.map((set: any) => {
    return <span>{set?.data.desc}</span>;
  });
  const textone = mapper?.map((set: any) => {
    return <span>{set?.data.textone}</span>;
  });
  const backgroundimage = mapper?.map((set: any) => {
    return set?.data.backgroundimage.url;
  });

  return (
    <div>
      <div className="relative text-center ">
        <div
          style={{ backgroundImage: `url(${backgroundimage})` }}
          className={`brightness-25 h-96 pt-96 pb-28 bg-no-repeat bg-center p-10`}
        ></div>
        <Wrapper
          contained={true}
          className=" absolute lg:top-32  top-24 text-white"
        >
          <p className="lg:text-[42px]  text-[32px] lg:pt-10 lg:mb-8 mb-5 text-white">
            {title ? title : `pending`}
          </p>
          <AppFont className="lg:text-[19px] text-[16px]  ">
            {desc ? desc : `pending`}
          </AppFont>
        </Wrapper>
      </div>
      {/* values and purpose  =>*/}
      <div className="relative text-center">
        <div className="bg-[url('/value-banner.png')] bg-[#F5F5F5] h-[500px] bg-no-repeat bg-cover bg-center"></div>
        <Wrapper contained={true} className=" absolute top-32  text-white ">
          <p className="text-[42px] mb-8 text-black">{textone}</p>
          <div className="grid lg:grid-cols-7 md:grid-cols-2 grid-cols-1 gap-16 text-center  items-center  ">
            {ValuesData?.map((items) => {
              return (
                <div className="text-center flex flex-col lg:ml-10 items-center justify-items-center">
                  <img src={items.img} alt="" />
                  <AppFont className="font-[700] mt-6  text-black">
                    {items.title}
                  </AppFont>
                </div>
              );
            })}
          </div>
        </Wrapper>
        {/* All Cards */}
        <Wrapper contained className="">
          <div
            className={`grid lg:grid-cols-2  grid-cols-1 gap-10 relative -top-20 `}
          >
            {ValuePurpCardData?.map((items) => {
              return (
                <div>
                  <ValuePurposeCard items={items} />
                </div>
              );
            })}
          </div>
        </Wrapper>
      </div>
      <Form />
      <ProjectInMindBanner />
    </div>
  );
};

export default ValueAndPurpose;
export async function getServerSideProps() {
  const valueandpurpose = await Client().query(
    Prismic.Predicates.at("document.type", "valueandpurpose")
  );
  return {
    props: {
      valueandpurpose,
    },
  };
}
