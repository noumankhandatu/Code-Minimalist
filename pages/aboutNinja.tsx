import type { NextPage } from "next";
import Image from "next/image";
import Wrapper from "../scr/components/organism/wrapper";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Form from "../scr/components/organism/form";
import ArtCard from "../scr/components/molecule/ArtCard";
import InspireBanner from "../scr/components/molecule/InspireBanner";
import Button from "../scr/components/molecule/button";
import ExpectMoreBanner from "../scr/components/organism/expectMoreBanner";
import SmallCard from "../scr/components/molecule/smallCard";
import AppFont from "../scr/components/atom/AppFont";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
const AboutNinja: NextPage = ({ aboutninja }: any) => {
  let mapper: any = aboutninja?.results;

  const cardTitleOne = mapper?.map((set: any) => {
    return <span>{set?.data.cardTitleOne}</span>;
  });
  const cardTitleTwo = mapper?.map((set: any) => {
    return <span>{set?.data.cardTitleTwo}</span>;
  });
  const cardTitleThree = mapper?.map((set: any) => {
    return <span>{set?.data.cardTitleThree}</span>;
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
  const cardImageOne = mapper?.map((set: any) => {
    return set?.data.cardImageOne.url;
  });
  const cardImageTwo = mapper?.map((set: any) => {
    return set?.data.cardImageTwo.url;
  });
  const cardImageThree = mapper?.map((set: any) => {
    return set?.data.cardImageThree.url;
  });
  const AbsArtCardData = [
    {
      title: cardTitleOne ? cardTitleOne : `pending`,
      des: cardDescriptionOne ? cardDescriptionOne : `pending`,
      img: cardImageOne ? cardImageOne : `pending`,
    },
    {
      title: cardTitleTwo ? cardTitleTwo : `pending`,
      des: cardDescriptionTwo ? cardDescriptionTwo : `pending`,
      img: cardImageTwo ? cardImageTwo : `pending`,
    },
    {
      title: cardTitleThree ? cardTitleThree : `pending`,
      des: cardDescriptionThree ? cardDescriptionThree : `pending`,
      img: cardImageThree ? cardImageThree : `pending`,
    },
  ];

  const title = mapper?.map((set: any) => {
    return <span>{set?.data.title}</span>;
  });
  const titlejoin = mapper?.map((set: any) => {
    return <span>{set?.data.titlejoin}</span>;
  });
  const description = mapper?.map((set: any) => {
    return <span>{set?.data.description}</span>;
  });

  const DigitCardTitleOne = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardTitleOne}</span>;
  });
  const DigitCardTitleTwo = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardTitleTwo}</span>;
  });
  const DigitCardTitleThree = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardTitleThree}</span>;
  });
  const DigitCardTitleFour = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardTitleFour}</span>;
  });
  const DigitCardTitleFive = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardTitleFive}</span>;
  });
  const DigitCardTitleSix = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardTitleSix}</span>;
  });
  const DigitCardDesOne = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardDesOne}</span>;
  });
  const DigitCardDesTwo = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardDesOne}</span>;
  });
  const DigitCardDesThree = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardDesOne}</span>;
  });
  const DigitCardDesFour = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardDesOne}</span>;
  });
  const DigitCardDesFive = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardDesOne}</span>;
  });
  const DigitCardDesSix = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardDesOne}</span>;
  });
  const DigitCardDigitOne = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardDigitOne}</span>;
  });
  const DigitCardDigitTwo = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardDigitTwo}</span>;
  });
  const DigitCardDigitThree = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardDigitThree}</span>;
  });
  const DigitCardDigitFour = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardDigitFour}</span>;
  });
  const DigitCardDigitFive = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardDigitFive}</span>;
  });
  const DigitCardDigitSix = mapper?.map((set: any) => {
    return <span>{set?.data.DigitCardDigitSix}</span>;
  });
  const ArtCardData = [
    {
      title: DigitCardTitleOne ? DigitCardTitleOne : `pending`,
      des: DigitCardDesOne ? DigitCardDesOne : `pending`,
      digit: DigitCardDigitOne ? DigitCardDigitOne : `pending`,
    },
    {
      title: DigitCardTitleTwo ? DigitCardTitleTwo : `pending`,
      des: DigitCardDesTwo ? DigitCardDesTwo : `pending`,
      digit: DigitCardDigitTwo ? DigitCardDigitTwo : `pending`,
    },
    {
      title: DigitCardTitleThree ? DigitCardTitleThree : `pending`,
      des: DigitCardDesThree ? DigitCardDesThree : `pending`,
      digit: DigitCardDigitThree ? DigitCardDigitThree : `pending`,
    },
    {
      title: DigitCardTitleFour ? DigitCardTitleFour : `pending`,
      des: DigitCardDesFour ? DigitCardDesFour : `pending`,
      digit: DigitCardDigitFour ? DigitCardDigitFour : `pending`,
    },
    {
      title: DigitCardTitleFive ? DigitCardTitleFive : `pending`,
      des: DigitCardDesFive ? DigitCardDesFive : `pending`,
      digit: DigitCardDigitFive ? DigitCardDigitFive : `pending`,
    },
    {
      title: DigitCardTitleSix ? DigitCardTitleSix : `pending`,
      des: DigitCardDesSix ? DigitCardDesSix : `pending`,
      digit: DigitCardDigitSix ? DigitCardDigitSix : `pending`,
    },
  ];
  const titleone = mapper?.map((set: any) => {
    return <span>{set?.data.titleone}</span>;
  });
  const descriptionone = mapper?.map((set: any) => {
    return <span>{set?.data.descriptionone}</span>;
  });
  const smallCardOne = mapper?.map((set: any) => {
    return <span>{set?.data.smallCardOne}</span>;
  });
  const smallCardDesOne = mapper?.map((set: any) => {
    return <span>{set?.data.smallCardDesOne}</span>;
  });
  const smallCardTwo = mapper?.map((set: any) => {
    return <span>{set?.data.smallCardTwo}</span>;
  });
  const smallCardDesTwo = mapper?.map((set: any) => {
    return <span>{set?.data.smallCardDesTwo}</span>;
  });
  const smallCardThree = mapper?.map((set: any) => {
    return <span>{set?.data.smallCardThree}</span>;
  });
  const smallCardDesThree = mapper?.map((set: any) => {
    return <span>{set?.data.smallCardDesThree}</span>;
  });
  const ninjatextone = mapper?.map((set: any) => {
    return <span>{set?.data.ninjatextone}</span>;
  });
  const ninjatexttwo = mapper?.map((set: any) => {
    return <span>{set?.data.ninjatexttwo}</span>;
  });
  const ninjatextthree = mapper?.map((set: any) => {
    return <span>{set?.data.ninjatextthree}</span>;
  });
  const ninjatextfour = mapper?.map((set: any) => {
    return <span>{set?.data.ninjatextfour}</span>;
  });
  const ninjatextfive = mapper?.map((set: any) => {
    return <span>{set?.data.ninjatextfive}</span>;
  });
  const ninjaImageTwo = mapper?.map((set: any) => {
    return set?.data.ninjaImageTwo.url;
  });
  const miniImageOne = mapper?.map((set: any) => {
    return set?.data.miniImageOne.url;
  });
  const miniImageTwo = mapper?.map((set: any) => {
    return set?.data.miniImageTwo.url;
  });
  const miniImageThree = mapper?.map((set: any) => {
    return set?.data.miniImageThree.url;
  });
  const miniTextOne = mapper?.map((set: any) => {
    return <span>{set?.data.miniTextOne}</span>;
  });
  const miniTextTwo = mapper?.map((set: any) => {
    return <span>{set?.data.miniTextTwo}</span>;
  });
  const miniTextThree = mapper?.map((set: any) => {
    return <span>{set?.data.miniTextThree}</span>;
  });
  const miniDescriptionOne = mapper?.map((set: any) => {
    return <span>{set?.data.miniDescriptionOne}</span>;
  });
  const miniDescriptionTwo = mapper?.map((set: any) => {
    return <span>{set?.data.miniDescriptionTwo}</span>;
  });
  const miniDescriptionThree = mapper?.map((set: any) => {
    return <span>{set?.data.miniDescriptionThree}</span>;
  });
  const ninjatextsix = mapper?.map((set: any) => {
    return <span>{set?.data.ninjatextsix}</span>;
  });
  const ninjatextseven = mapper?.map((set: any) => {
    return <span>{set?.data.ninjatextseven}</span>;
  });
  const bannerTitle = mapper?.map((set: any) => {
    return <span>{set?.data.bannerTitle}</span>;
  });
  const bannerText = mapper?.map((set: any) => {
    return <span>{set?.data.bannerText}</span>;
  });
  const bannerBtn = mapper?.map((set: any) => {
    return <span>{set?.data.bannerBtn}</span>;
  });

  return (
    <div>
      <ExpectMoreBanner
        titleone={title ? title : `pending`}
        titletwo={titlejoin ? titlejoin : `pending`}
        description={description ? description : `pending`}
      />
      {/* small three boxes */}
      <Wrapper contained={true}>
        <div className="grid lg:grid-cols-2 lg:gap-0 gap-10  grid-cols-1 pt-20 pb-20">
          <div>
            <Image
              src="/intro.png"
              width={600}
              height={600}
              alt="intro pic"
            ></Image>
          </div>
          <div>
            <p className="text-3xl font-bolder ">
              {titleone ? titleone : `pending`}
            </p>
            <p className="pt-10 pb-10 leading-loose ">
              {descriptionone ? descriptionone : `pending`}
            </p>
            <div className="lg:flex lg:flex-row flex flex-col items-center  gap-10 justify-between mt-20">
              <SmallCard
                numbers={smallCardOne ? smallCardOne : `pending`}
                tag={smallCardDesOne ? smallCardDesOne : `pending`}
              />
              <SmallCard
                numbers={smallCardTwo ? smallCardTwo : `pending`}
                tag={smallCardDesTwo ? smallCardDesTwo : `pending`}
              />
              <SmallCard
                numbers={smallCardThree ? smallCardThree : `pending`}
                tag={smallCardDesThree ? smallCardDesThree : `pending`}
              />
            </div>
          </div>
        </div>
      </Wrapper>
      {/* pos absolute cards */}
      <div
        style={{ backgroundColor: "#F5F5F5" }}
        className="pt-20 relative pb-72"
      >
        <Wrapper contained={true}>
          <div className="grid lg:grid-cols-[1fr,2fr] grid-cols-1 lg:gap-0 gap-10 items-center">
            <div>
              <p className="lg:text-[42px] text-[32px]  font-light">
                {ninjatextone ? ninjatextone : `pending`}
              </p>
              <p className="lg:text-[42px] text-[32px]  font-semibold">
                {ninjatexttwo ? ninjatexttwo : `pending`}
              </p>
            </div>
            <div>
              <AppFont className="leading-loose tracking-wide font-[500]		text-[#2A2A2A]		">
                {ninjatextthree ? ninjatextthree : `pending`}
              </AppFont>
            </div>
          </div>
        </Wrapper>
        <Wrapper
          contained
          className="grid lg:grid-cols-3 grid-cols-1 lg:absolute  top-64 gap-10 pt-10 pl-20 pr-20"
        >
          {AbsArtCardData?.map((items) => {
            return <ArtCard items={items} />;
          })}
        </Wrapper>
      </div>
      <div className="pt-72 pb-32">
        <Wrapper contained={true}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            <div>
              <p className="lg:text-5xl text-[42px] pb-5">
                {ninjatextfour ? ninjatextfour : `pending`}
              </p>
              <p className="lg:text-4xl text-[32px] font-bold pb-10">
                {ninjatextfive ? ninjatextfive : `pending`}
              </p>
              <div>
                <InspireBanner
                  title={miniTextOne ? miniTextOne : `pending`}
                  description={
                    miniDescriptionOne ? miniDescriptionOne : `pending`
                  }
                  image={miniImageOne ? miniImageOne : `pending`}
                />
                <InspireBanner
                  title={miniTextTwo ? miniTextTwo : `pending`}
                  description={
                    miniDescriptionTwo ? miniDescriptionTwo : `pending`
                  }
                  image={miniImageTwo ? miniImageTwo : `pending`}
                />
                <InspireBanner
                  title={miniTextThree ? miniTextThree : `pending`}
                  description={
                    miniDescriptionThree ? miniDescriptionThree : `pending`
                  }
                  image={miniImageThree ? miniImageThree : `pending`}
                />
              </div>
            </div>
            <div>
              <img
                src={ninjaImageTwo ? ninjaImageTwo : `pending`}
                width={600}
                height={600}
              />
            </div>
          </div>
        </Wrapper>
      </div>
      {/* bg-gradient */}
      <div className=" bg-gradient-to-t from-[#d09de6] to-[#e2f3ff] pt-20 pb-20">
        <Wrapper contained={true}>
          <p className="text-3xl pt-4 pb-2 text-center">
            {ninjatextsix ? ninjatextsix : `pending`}
          </p>
          <p className="text-1xl pt-5 pb-4 text-center">
            {ninjatextseven ? ninjatextseven : ` pending`}
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 pt-10">
            {ArtCardData?.map((items) => {
              return <ArtCard items={items} />;
            })}
          </div>
        </Wrapper>
      </div>
      {/* join team button */}
      <div className="relative">
        <div className="bg-[url('/carrier.jpg')]  h-96 text-center pt-80 pb-60 bg-no-repeat bg-center p-10"></div>
        <Wrapper
          contained={true}
          className=" absolute lg:top-32 top-16 right-0 left-0 text-center  "
        >
          <p className="lg:text-4xl text-[32px]  pt-10 ">
            {bannerTitle ? bannerTitle : `pending`}
          </p>
          <br />
          <p className="lg:text-2xl text-[18px] lg:ml-52 lg:mr-52">
            {bannerText ? bannerText : `pending`}
          </p>
          <div className="flex mt-12 justify-center">
            <Button path="/contact" variant="contained" className="filled">
              {bannerBtn ? bannerBtn : `pending`}
            </Button>
          </div>
        </Wrapper>
      </div>
      <Form />
      <ProjectInMindBanner />
    </div>
  );
};

export default AboutNinja;
export async function getServerSideProps() {
  const aboutninja = await Client().query(
    Prismic.Predicates.at("document.type", "aboutninja")
  );
  return {
    props: {
      aboutninja,
    },
  };
}
