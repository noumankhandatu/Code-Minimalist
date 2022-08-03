import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "../molecule/testimonialCard";
import Prismic from "prismic-javascript";
import { Client } from "../../../prismic-configuration";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
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
  const testimonialFirstPlace = mapper?.map((set: any) => {
    return <span>{set.data.testimonialFirstPlace[0].text}</span>;
  });
  const testimonialFirstImage = mapper?.map((set: any) => {
    return set.data.testimonialFirstImage.url;
  });
  const testimonialFirstDescription = mapper?.map((set: any) => {
    return <span>{set.data.testimonialFirstDescription[0].text}</span>;
  });
  const testimonialFirstName = mapper?.map((set: any) => {
    return <span>{set.data.testimonialFirstName[0].text}</span>;
  });

  const testimonialSecondPlace = mapper?.map((set: any) => {
    return <span>{set.data.testimonialFirstPlace[0].text}</span>;
  });
  const testimonialSecondImage = mapper?.map((set: any) => {
    return set.data.testimonialFirstImage.url;
  });
  const testimonialSecondDescription = mapper?.map((set: any) => {
    return <span>{set.data.testimonialFirstDescription[0].text}</span>;
  });
  const testimonialSecondName = mapper?.map((set: any) => {
    return <span>{set.data.testimonialFirstName[0].text}</span>;
  });

  const testimonialThirdPlace = mapper?.map((set: any) => {
    return <span>{set.data.testimonialFirstPlace[0].text}</span>;
  });
  const testimonialThirdImage = mapper?.map((set: any) => {
    return set.data.testimonialFirstImage.url;
  });
  const testimonialThirdDescription = mapper?.map((set: any) => {
    return <span>{set.data.testimonialFirstDescription[0].text}</span>;
  });
  const testimonialThirdName = mapper?.map((set: any) => {
    return <span>{set.data.testimonialFirstName[0].text}</span>;
  });

  const testimonialFourthPlace = mapper?.map((set: any) => {
    return <span>{set.data.testimonialFirstPlace[0].text}</span>;
  });
  const testimonialFourthImage = mapper?.map((set: any) => {
    return set.data.testimonialFirstImage.url;
  });
  const testimonialFourthDescription = mapper?.map((set: any) => {
    return <span>{set.data.testimonialFirstDescription[0].text}</span>;
  });
  const testimonialFourthName = mapper?.map((set: any) => {
    return <span>{set.data.testimonialFirstName[0].text}</span>;
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
          <TestimonialCard
            img={testimonialFirstImage ? testimonialFirstImage : `image error`}
            name={testimonialFirstName ? testimonialFirstName : "Name error"}
            place={
              testimonialFirstPlace ? testimonialFirstPlace : "Place error"
            }
            description={
              testimonialFirstDescription
                ? testimonialFirstDescription
                : `description error`
            }
          />
        </div>
        <div>
          <TestimonialCard
            img={
              testimonialSecondImage ? testimonialSecondImage : `image error`
            }
            name={testimonialSecondName ? testimonialSecondName : "Name error"}
            place={
              testimonialSecondPlace ? testimonialSecondPlace : "Place error"
            }
            description={
              testimonialSecondDescription
                ? testimonialSecondDescription
                : `description error`
            }
          />
        </div>
        <div>
          <TestimonialCard
            img={testimonialThirdImage ? testimonialThirdImage : `image error`}
            name={testimonialThirdName ? testimonialThirdName : "Name error"}
            place={
              testimonialThirdPlace ? testimonialThirdPlace : "Place error"
            }
            description={
              testimonialThirdDescription
                ? testimonialThirdDescription
                : `description error`
            }
          />
        </div>
        <div>
          <TestimonialCard
            img={
              testimonialFourthImage ? testimonialFourthImage : `image error`
            }
            name={testimonialFourthName ? testimonialFourthName : "Name error"}
            place={
              testimonialFourthPlace ? testimonialFourthPlace : "Place error"
            }
            description={
              testimonialFourthDescription
                ? testimonialFourthDescription
                : `description error`
            }
          />
        </div>
      </Carousel>
    </div>
  );
}
