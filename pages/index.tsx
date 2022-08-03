import React, { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Wrapper from "../scr/components/organism/wrapper";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Button from "../scr/components/molecule/button";
import ItemCarousel from "../scr/components/organism/carousel";
import OurBranchCard from "../scr/components/molecule/OurBrandCard";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import OurTechnologyCard from "../scr/components/molecule/OurTechnologyCard";
import TestimonialCarousel from "../scr/components/organism/testimonialCarousel";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import CountUp from "react-countup";
const Home: NextPage = ({ home }: any) => {
  const [activeMobile, setActiveMobile] = useState<string>("");
  const [activeFront, setActiveFront] = useState<string>("");
  const [activePlateform, setActivePlateform] = useState<string>("");
  const [activeCms, setActiveCms] = useState<string>("");

  const positionRef = useRef<any>(20);
  const imageRef = useRef<any>(20);
  let mapper: any = home?.results;
  const reactText = mapper?.map((set: any) => {
    return <RichText render={set?.data.reactText} />;
  });
  const reactImage = mapper?.map((set: any) => {
    return set?.data.reactImage.url;
  });
  const gatsbyImage = mapper?.map((set: any) => {
    return set?.data.gatsbyImage.url;
  });
  const gatsbyText = mapper?.map((set: any) => {
    return <RichText render={set?.data.gatsbyText} />;
  });
  const nextjsImage = mapper?.map((set: any) => {
    return set?.data.nextjsImage.url;
  });
  const nextjsText = mapper?.map((set: any) => {
    return <RichText render={set?.data.nextjsText} />;
  });
  const nodejsimage = mapper?.map((set: any) => {
    return set?.data.nodejsimage.url;
  });
  const nodejsText = mapper?.map((set: any) => {
    return <RichText render={set?.data.nodejsText} />;
  });

  const expressImage = mapper?.map((set: any) => {
    return set?.data.expressImage.url;
  });
  const expressText = mapper?.map((set: any) => {
    return <RichText render={set?.data.expressText} />;
  });
  const reactNativeImage = mapper?.map((set: any) => {
    return set?.data.reactNativeImage.url;
  });
  const reactNativeText = mapper?.map((set: any) => {
    return <RichText render={set?.data.reactNativeText} />;
  });
  const flutterImage = mapper?.map((set: any) => {
    return set?.data.flutterImage.url;
  });
  const flutterText = mapper?.map((set: any) => {
    return <RichText render={set?.data.flutterText} />;
  });
  const kotlineImage = mapper?.map((set: any) => {
    return set?.data.kotlineImage.url;
  });
  const kotlineText = mapper?.map((set: any) => {
    return <RichText render={set?.data.kotlineText} />;
  });

  const swiftImage = mapper?.map((set: any) => {
    return set?.data.swiftImage.url;
  });
  const swiftText = mapper?.map((set: any) => {
    return <RichText render={set?.data.swiftText} />;
  });
  const prismicImage = mapper?.map((set: any) => {
    return set?.data.prismicImage.url;
  });
  const prismicText = mapper?.map((set: any) => {
    return <RichText render={set?.data.prismicText} />;
  });
  const sanityImage = mapper?.map((set: any) => {
    return set?.data.sanityImage.url;
  });
  const sanityText = mapper?.map((set: any) => {
    return <RichText render={set?.data.sanityText} />;
  });
  const drupalImage = mapper?.map((set: any) => {
    return set?.data.drupalImage.url;
  });
  const druptalText = mapper?.map((set: any) => {
    return <RichText render={set?.data.druptalText} />;
  });

  const strapiImage = mapper?.map((set: any) => {
    return set?.data.strapiImage.url;
  });
  const strapiText = mapper?.map((set: any) => {
    return <RichText render={set?.data.strapiText} />;
  });
  const wordpressImage = mapper?.map((set: any) => {
    return set?.data.wordpressImage.url;
  });
  const wordpressText = mapper?.map((set: any) => {
    return <RichText render={set?.data.wordpressText} />;
  });
  const shopifyImage = mapper?.map((set: any) => {
    return set?.data.shopifyImage.url;
  });
  const shopifyText = mapper?.map((set: any) => {
    return <RichText render={set?.data.shopifyText} />;
  });
  const firebaseImage = mapper?.map((set: any) => {
    return set?.data.firebaseImage.url;
  });
  const firebaseText = mapper?.map((set: any) => {
    return <RichText render={set?.data.firebaseText} />;
  });

  const awsImage = mapper?.map((set: any) => {
    return set?.data.awsImage.url;
  });
  const awsText = mapper?.map((set: any) => {
    return <RichText render={set?.data.awsText} />;
  });
  const mangodbImage = mapper?.map((set: any) => {
    return set?.data.mangodbImage.url;
  });
  const mangodbText = mapper?.map((set: any) => {
    return <RichText render={set?.data.mangodbText} />;
  });

  const couchDBImage = mapper?.map((set: any) => {
    return set?.data.couchDBImage.url;
  });
  const couchText = mapper?.map((set: any) => {
    return <RichText render={set?.data.couchText} />;
  });
  const mysqlImage = mapper?.map((set: any) => {
    return set?.data.mysqlImage.url;
  });
  const mysqlText = mapper?.map((set: any) => {
    return <RichText render={set?.data.mysqlText} />;
  });
  const OurTechnologyCardData = [
    // web
    {
      title: reactText ? reactText : `pending`,
      img: reactImage ? reactImage : `pending`,
      catogrey: "web",
    },
    {
      title: gatsbyText ? gatsbyText : `pending`,
      img: gatsbyImage ? gatsbyImage : `pending`,
      catogrey: "web",
    },
    {
      title: nextjsText ? nextjsText : `pending`,
      img: nextjsImage ? nextjsImage : `pending`,
      catogrey: "web",
    },
    {
      title: nodejsText ? nodejsText : `pending`,
      img: nodejsimage ? nodejsimage : `pending`,
      catogrey: "web",
    },
    {
      title: expressText ? expressText : `pending`,
      img: expressImage ? expressImage : `pending`,
      catogrey: "web",
      // mobile
    },
    {
      img: reactNativeImage ? reactNativeImage : `pending`,
      title: reactNativeText ? reactNativeText : `pending`,
      catogrey: "mobile",
    },
    {
      img: flutterImage ? flutterImage : `pending`,
      title: flutterText ? flutterText : `pending`,
      catogrey: "mobile",
    },
    {
      img: kotlineImage ? kotlineImage : `pending`,
      title: kotlineText ? kotlineText : `pending`,
      catogrey: "mobile",
    },
    {
      img: swiftImage ? swiftImage : `pending`,
      title: swiftText ? swiftText : `pending`,
      catogrey: "mobile",
    },
    ,
    // cms
    {
      img: prismicImage ? prismicImage : `pending`,
      title: prismicText ? prismicText : `pending`,
      catogrey: "cms",
    },
    ,
    {
      img: sanityImage ? sanityImage : `pending`,
      title: sanityText ? sanityText : `pending`,
      catogrey: "cms",
    },
    {
      img: drupalImage ? drupalImage : `pending`,
      title: druptalText ? druptalText : `pending`,
      catogrey: "cms",
    },
    {
      img: strapiImage ? strapiImage : `pending`,
      title: strapiText ? strapiText : `pending`,
      catogrey: "cms",
    },
    {
      img: wordpressImage ? wordpressImage : `pending`,
      title: wordpressText ? wordpressText : `pending`,
      catogrey: "cms",
    },
    // other
    {
      img: shopifyImage ? shopifyImage : `pending`,
      title: shopifyText ? shopifyText : `pending`,
      catogrey: "other",
    },
    {
      img: firebaseImage ? firebaseImage : `pending`,
      title: firebaseText ? firebaseText : `pending`,
      catogrey: "other",
    },
    {
      img: awsImage ? awsImage : `pending`,
      title: awsText ? awsText : `pending`,
      catogrey: "other",
    },
    {
      img: mangodbImage ? mangodbImage : `pending`,
      title: mangodbText ? mangodbText : `pending`,
      catogrey: "other",
    },
    {
      img: couchDBImage ? couchDBImage : `pending`,
      title: couchText ? couchText : `pending`,
      catogrey: "other",
    },
    {
      img: mysqlImage ? mysqlImage : `pending`,
      title: mysqlText ? mysqlText : `pending`,
      catogrey: "other",
    },
  ];
  const [activeCards, setActiveCards] = useState(OurTechnologyCardData);
  const handleCardsToggle = (e: string) => {
    if (e === "web") {
      setActiveMobile("active");
      setActiveFront("unactive");
      setActivePlateform("unactive");
      setActiveCms("unactive");
      setActiveCards(OurTechnologyCardData);
    }
    if (e === "other") {
      setActiveMobile("unactive");
      setActiveFront("active");
      setActivePlateform("unactive");
      setActiveCms("unactive");
    }
    if (e === "mobile") {
      setActiveMobile("unactive");
      setActiveFront("unactive");
      setActivePlateform("active");
      setActiveCms("unactive");
    }
    if (e === "cms") {
      setActiveMobile("unactive");
      setActiveFront("unactive");
      setActivePlateform("unactive");
      setActiveCms("active");
    }
    if (e !== "web") {
      const newState = OurTechnologyCardData.filter((ele) => {
        return ele.catogrey === e;
      });
      setActiveCards(newState);
    }
  };
  function useMouse() {
    const [mousePosition, setMousePosition] = useState({
      x: null,
      y: null,
    });
    useEffect(() => {
      function handle(e: any) {
        setMousePosition({
          x: e.pageX,
          y: e.pageY,
        });
      }
      document.addEventListener("mousemove", handle);
    }, []);
    return mousePosition;
  }
  const { x, y } = useMouse();
  if (x && y < 701) {
    const minusX: number = x / 100;
    const minusY: number = y / 100;
    if (positionRef.current) {
      positionRef.current.style.right = `-${minusX}px`;
      positionRef.current.style.top = `${minusY}px`;
      positionRef.current.style.marginTop = `80px`;
      positionRef.current.style.marginRight = `110px`;
    }
  }

  if (x && y) {
    const bgX: number = x / 300;
    const bgY: number = y / 300;
    if (imageRef.current) {
      imageRef.current.style.top = `-${bgY}px`;
      imageRef.current.style.right = `${bgX}px`;
      imageRef.current.style.marginTop = `2px`;
      // imageRef.current.style.marginRight = `180px`;
    }
  }
  const boxText = mapper?.map((set: any) => {
    return <RichText render={set?.data.boxText} />;
  });
  const buttonText = mapper?.map((set: any) => {
    return <RichText render={set?.data.buttonText} />;
  });
  const backgroundImage = mapper?.map((set: any) => {
    return set?.data.backgroundImage.url;
  });
  return (
    <div>
      <Head>
        <title>Code Minimalist</title>
        <link
          rel="icon"
          href="https://codeminimalist.atlassian.net/jira/software/projects/COM/boards/3?selectedIssue=COM-5"
        />
        <script
          async
          defer
          src="https://static.cdn.prismic.io/prismic.js?new=true&repo=codeminimalist"
        ></script>
      </Head>

      {/* Banner */}
      <Wrapper contained className={"lg:mt-32 mt-32 "}>
        <div className="relative overflow-auto">
          <div className="flex justify-center">
            <div
              style={{
                backgroundImage: `url(${
                  backgroundImage ? backgroundImage : `pending`
                })`,
              }}
              ref={imageRef}
              className="   relative  h-96 lg:w-[80%] md:w-[80%] w-screen bg-red-300 bg-no-repeat bg-cover"
            >
              <div
                ref={positionRef}
                className={`bg-App-orange text-white p-4 w-[250px] md:w-[300px] boxOrange absolute  top-20 right-5 lg:right-10 `}
              >
                <div className="leading-loose">
                  {" "}
                  {boxText ? boxText : `pending`}
                </div>

                <Link href="services">
                  <div className="flex items-center lg:mt-10 mt-5 cursor-pointer">
                    <Button
                      className="filled w-screen"
                      variant="contained"
                      path={"/contact"}
                    >
                      {buttonText ? buttonText : `pending`}
                    </Button>
                    <BsArrowRight className="ml-4" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* grid 4 */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-5   justify-around text-center  bg-[#F5F5F5] p-5">
          <div>
            <p className="font-semibold lg:text-[55px]  text-[32px] ">
              <CountUp end={4} />+
            </p>
            <p className="lg:text-[24px] text-[16px]   font-medium">
              years of industry experience
            </p>
          </div>
          <div>
            <p className="font-semibold lg:text-[55px] text-[32px] ">
              <CountUp end={38} />
            </p>
            <p className="lg:text-[24px] text-[16px]   font-medium">
              clients served
            </p>
          </div>
          <div>
            <p className="font-semibold lg:text-[55px] text-[32px] ">
              <CountUp end={250} />+
            </p>
            <p className="lg:text-[24px]  text-[16px]  font-medium">
              projects worked on
            </p>
          </div>
        </div>
      </Wrapper>
      {/* Brand Cards Rendering */}
      <Wrapper contained className="text-center lg:p-20  p-10">
        {home.results.map((items) => {
          return (
            <div>
              <div className="lg:text-[42px] text-[32px] font-medium">
                {RichText.render(items.data.title)}
              </div>
              <div className="lg:text-[18px] text-[16px] lg:ml-52 lg:mr-52  mt-5 lg:mb-20 mb-10">
                <span>{items.data.description}</span>
              </div>
            </div>
          );
        })}
        {home.results.map((items) => {
          return (
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 ">
              <OurBranchCard
                description={items.data.description}
                title={items.data.devCardFirstTitle}
                img={items.data.devCardFirstImage.url}
              />
              <OurBranchCard
                description={items.data.devCardSecondDescription}
                title={items.data.devCardSecondTitle}
                img={items.data.devCardSecondImage.url}
              />
              <OurBranchCard
                description={items.data.devCardThirdDescription}
                title={items.data.devCardThirdTitle}
                img={items.data.devCardThirdImage.url}
              />
            </div>
          );
        })}
      </Wrapper>
      {/* Get an opportunity */}
      <div className="lg:p-20 p-5 bg-[#3f1651] bg-opacity-[0.7]">
        <Wrapper contained>
          <div>
            {home.results.map((items) => {
              return (
                <div className="grid lg:grid-cols-2 grid-cols-1 text-white  items-center">
                  <div>
                    <div className="lg:text-[42px] text-[32px]  font-medium">
                      {RichText.render(items.data.opportunityTitle)}
                    </div>
                    <div className="lg:pt-10 pt-5">
                      <Button
                        variant="primary"
                        className="filled"
                        path={"/contact"}
                      >
                        <span>{items.data.opportunityBtnText}</span>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <img
                      className=""
                      src={items.data.opportunityImage.url}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Wrapper>
      </div>
      {/* TechnologyCards */}
      <Wrapper contained className="p-20 ">
        <div className="lg:text-[42px] text-[32px] text-center font-medium text-[#2A2A2A]">
          {home.results.map((items) => {
            return <div>{RichText.render(items.data.techText)}</div>;
          })}
        </div>
        <div className="flex justify-center mt-16">
          <div
            onClick={() => {
              handleCardsToggle("web");
            }}
            className={`hover:text-[#785B85]  ease-in-out duration-500 lg:text-[22px]   text-[15px] ml-8 cursor-pointer  font-semibold ${activeMobile}`}
          >
            {home.results.map((items) => {
              return <div>{RichText.render(items.data.techTabOne)}</div>;
            })}
          </div>
          <div
            onClick={() => {
              handleCardsToggle("mobile");
            }}
            className={`hover:text-[#785B85] ease-in-out duration-500 lg:text-[22px]  text-[15px] ml-8 cursor-pointer font-semibold #2A2A2A  ${activePlateform}`}
          >
            {home.results.map((items) => {
              return <div>{RichText.render(items.data.techTabTwo)}</div>;
            })}
          </div>
          <div
            onClick={() => {
              handleCardsToggle("cms");
            }}
            className={`hover:text-[#785B85] ease-in-out duration-500 lg:text-[22px]  text-[15px] ml-8 cursor-pointer font-semibold #2A2A2A ${activeCms}`}
          >
            {home.results.map((items) => {
              return <div>{RichText.render(items.data.techTabThree)}</div>;
            })}
          </div>
          <div
            onClick={() => {
              handleCardsToggle("other");
            }}
            className={`hover:text-[#785B85] ease-in-out duration-500 lg:text-[22px]  text-[15px] ml-8  cursor-pointer font-semibold #2A2A2A  ${activeFront}`}
          >
            {home.results.map((items) => {
              return <div>{RichText.render(items.data.techTabFour)}</div>;
            })}
          </div>
        </div>
        <hr className="mb-10" />

        <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-4">
          {activeCards?.map((items) => {
            return <OurTechnologyCard items={items} />;
          })}
        </div>
      </Wrapper>
      {/* carousel  =>*/}
      <div className="bg-[#3f1651] bg-opacity-[0.7] lg:pt-20 pt-10  lg:pb-20 pb-10">
        <div>
          {home.results.map((items) => {
            return (
              <div className="font-medium text-center lg:text-[42px] text-[32px] lg:mb-20 mb-1 lg:mt-20 mt-10">
                {RichText.render(items.data.testimonialTitle)}
              </div>
            );
          })}
        </div>
        <Wrapper contained={true} className="lg:mt-20 mt-10  lg:mb-40 mb-20">
          <div>{<TestimonialCarousel />}</div>
          <div className="mt-20">{<ItemCarousel />}</div>
        </Wrapper>
      </div>
      <ProjectInMindBanner />
    </div>
  );
};

export default Home;

// this function is called everytime a request/refresh is made
export async function getServerSideProps() {
  const home = await Client().query(
    Prismic.Predicates.at("document.type", "home")
  );
  return {
    props: {
      home,
    },
  };
}
