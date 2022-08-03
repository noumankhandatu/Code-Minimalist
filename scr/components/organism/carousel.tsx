import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Prismic from "prismic-javascript";
import { Client } from "../../../prismic-configuration";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
export default function ItemCarousel() {
  const [toggleFn, setToggleFn] = useState<Boolean>(true);
  const [fetchData, setFetchData] = useState<any>("");
  async function getServerSideProps() {
    const home = await Client().query(
      Prismic.Predicates.at("document.type", "home")
    );
    setFetchData(home);

    return {
      props: {
        home,
      },
    };
  }
  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }
  let mapper: any = fetchData?.results;
  const itemImageOne = mapper?.map((set: any) => {
    return set.data.itemImageOne.url;
  });
  const itemImageFour = mapper?.map((set: any) => {
    return set.data.itemImageFour.url;
  });
  const itemImageSix = mapper?.map((set: any) => {
    return set.data.itemImageSix.url;
  });
  const itemImageTwo = mapper?.map((set: any) => {
    return set.data.itemImageTwo.url;
  });
  const itemImageThree = mapper?.map((set: any) => {
    return set.data.itemImageThree.url;
  });
  const itemImageFive = mapper?.map((set: any) => {
    return set.data.itemImageFive.url;
  });
  return (
    <div>
      <Carousel
        arrows={false}
        autoPlay={true}
        draggable={true}
        infinite={true}
        slidesToSlide={1}
        responsive={responsive}
      >
        <div>
          <img
            src={itemImageOne ? itemImageOne : "Image Error"}
            width={220}
            height={89}
          />
        </div>
        <div>
          <img
            src={itemImageFour ? itemImageFour : "Image Error"}
            width={220}
            height={89}
          />
        </div>
        <div>
          <img
            src={itemImageSix ? itemImageSix : "Image Error"}
            width={220}
            height={89}
          />
        </div>
        <div>
          <img
            src={itemImageTwo ? itemImageTwo : "Image Error"}
            width={220}
            height={89}
          />
        </div>
        <div>
          <img
            src={itemImageThree ? itemImageThree : "Image Error"}
            width={220}
            height={89}
          />
        </div>
        <div>
          <img
            src={itemImageFive ? itemImageFive : "Image Error"}
            width={220}
            height={89}
          />
        </div>
      </Carousel>
    </div>
  );
}
