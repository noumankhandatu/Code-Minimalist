import React, { useEffect, useState } from "react";
import PortfolioCard from "../molecule/portfolioCard";
import Button from "../molecule/button";
import Prismic from "prismic-javascript";
import { Client } from "../../../prismic-configuration";
const GreatPortfolio = () => {
  const [toggleFn, setToggleFn] = useState<Boolean>(true);
  const [fetchData, setFetchData] = useState<any>("");
  async function getServerSideProps() {
    const portfolio = await Client().query(
      Prismic.Predicates.at("document.type", "portfolio")
    );
    setFetchData(portfolio);
    return {
      props: {
        portfolio,
      },
    };
  }
  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }
  let mapper: any = fetchData?.results;

  const firstLink = mapper?.map((set: any) => {
    return <span>{set?.data.firstLink}</span>;
  });
  const secondLink = mapper?.map((set: any) => {
    return <span>{set?.data.secondLink}</span>;
  });
  const thirdLink = mapper?.map((set: any) => {
    return <span>{set?.data.thirdLink}</span>;
  });
  const fourthLink = mapper?.map((set: any) => {
    return <span>{set?.data.fourthLink}</span>;
  });
  const TabsItems = [
    {
      title: firstLink ? firstLink : `pending`,
      id: 0,
    },
    {
      title: secondLink ? secondLink : `pending`,
      id: 1,
    },
    {
      title: thirdLink ? thirdLink : `pending`,
      id: 2,
    },
    {
      title: fourthLink ? fourthLink : `pending`,
      id: 3,
    },
  ];
  const portfolioButtonText = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioButtonText}</span>;
  });
  const firstImage = mapper?.map((set: any) => {
    return set?.data.firstImage.url;
  });
  const portfolioTitleOne = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioTitleOne}</span>;
  });
  const portfolioSubTitleOne = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioSubTitleOne}</span>;
  });

  const secondImage = mapper?.map((set: any) => {
    return set?.data.secondImage.url;
  });
  const portfolioTitleTwo = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioTitleTwo}</span>;
  });
  const portfolioSubTitleTwo = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioSubTitleTwo}</span>;
  });

  const thirdImage = mapper?.map((set: any) => {
    return set?.data.thirdImage.url;
  });
  const portfolioTitleThree = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioTitleThree}</span>;
  });
  const portfolioSubTitleThree = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioSubTitleTwo}</span>;
  });

  const fourthImage = mapper?.map((set: any) => {
    return set?.data.fourthImage.url;
  });
  const portfolioTitleFourth = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioTitleFourth}</span>;
  });
  const portfolioSubTitleFourth = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioSubTitleFourth}</span>;
  });

  const fifthImage = mapper?.map((set: any) => {
    return set?.data.fifthImage.url;
  });
  const portfolioTitleFifth = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioTitleFifth}</span>;
  });
  const portfolioSubTitleFifth = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioSubTitleFifth}</span>;
  });

  const sixthImage = mapper?.map((set: any) => {
    return set?.data.sixthImage.url;
  });
  const portfolioTitleSixth = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioTitleSixth}</span>;
  });
  const portfolioSubTitleSixth = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioSubTitleSixth}</span>;
  });
  const PortfolioPageArray = [
    {
      title: portfolioTitleOne ? portfolioTitleOne : `pending`,
      description: portfolioSubTitleOne ? portfolioSubTitleOne : `pending`,
      image: firstImage ? firstImage : `pending`,
      catogery: "Graphic Design",
    },
    {
      image: secondImage ? secondImage : `pending`,
      title: portfolioTitleTwo ? portfolioTitleTwo : `pending`,
      description: portfolioSubTitleTwo ? portfolioSubTitleTwo : `pending`,
      catogery: "Design",
    },
    {
      image: thirdImage ? thirdImage : `pending`,
      title: portfolioTitleThree ? portfolioTitleThree : `pending`,
      description: portfolioSubTitleThree ? portfolioSubTitleThree : `pending`,
      catogery: "Branding",
    },
    {
      image: fourthImage ? fourthImage : `pending`,
      title: portfolioTitleFourth ? portfolioTitleFourth : `pending`,
      description: portfolioSubTitleFourth
        ? portfolioSubTitleFourth
        : `pending`,
      catogery: "Design",
    },
    {
      image: fifthImage ? fifthImage : `pending`,
      title: portfolioTitleFifth ? portfolioTitleFifth : `pending`,
      description: portfolioSubTitleFifth ? portfolioSubTitleFifth : `pending`,
      catogery: "Design",
    },
    {
      image: sixthImage ? sixthImage : `pending`,
      title: portfolioTitleSixth ? portfolioTitleSixth : `pending`,
      description: portfolioSubTitleSixth ? portfolioSubTitleSixth : `pending`,
      catogery: "Graphic Design",
    },
  ];
  const [activeBar, setActiveBar] = useState<number>(0);
  const maxFilter = PortfolioPageArray;
  const [newFilter, setNewFilter] = useState([]);
  const handleToggles = (id: number, title: string) => {
    setActiveBar(id);
    if (title === "All") {
      setNewFilter(maxFilter);
    } else {
      const newFilteredData = maxFilter.filter((ele) => {
        console.log(ele.catogery);

        return title === ele.catogery;
      });
      setNewFilter(newFilteredData);
    }
  };
  console.log(newFilter, "new Filder");

  const portfolioTitle = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioTitle}</span>;
  });
  const portfolioDescription = mapper?.map((set: any) => {
    return <span>{set?.data.portfolioDescription}</span>;
  });
  useEffect(() => {
    setNewFilter(maxFilter);
  }, []);
  return (
    <div className="text-center mt-12">
      <p className="lg:text-[42px] text-[32px]  mb-4 font-light">
        {portfolioTitle ? portfolioTitle : `pending`}
      </p>
      <p className="lg:text-[18px] text-[16px]">
        {portfolioDescription ? portfolioDescription : `pending`}
      </p>
      <div className="flex items-center cursor-pointer mt-12 justify-center text-center">
        {TabsItems.map((items, id) => {
          return (
            <p
              onClick={() => {
                handleToggles(id, items.title[0].props.children);
              }}
              className={`${
                items.id === activeBar ? "active text-App-orange" : "unactive"
              } text-[16px] cursor-pointer  lg:ml-8 ml-3 font-semibold hover:border-b-App-purple ease-in-out duration-700`}
            >
              {items.title}
            </p>
          );
        })}
      </div>
      <div>
        {newFilter?.map((items: any) => {
          return (
            <PortfolioCard
              image={items?.image}
              title={items?.title}
              description={items?.description}
            />
          );
        })}
        <div className="flex justify-center pb-32 pt-20">
          <Button path="/portfolio" variant="alpha">
            {portfolioButtonText ? portfolioButtonText : `pending`}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GreatPortfolio;
