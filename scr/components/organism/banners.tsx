import React, { useState } from "react";
import Wrapper from "./wrapper";
import Button from "../molecule/button";
import { AiOutlineRight } from "react-icons/ai";
import { BsSkype } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import Prismic from "prismic-javascript";
import { Client } from "../../../prismic-configuration";

export const ProjectInMindBanner = () => {
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
  const bannerFirstText = mapper?.map((set: any) => {
    return <span>{set?.data.bannerFirstText[0].text}</span>;
  });
  const bannerSecondText = mapper?.map((set: any) => {
    return <span>{set?.data.bannerSecondText[0].text}</span>;
  });
  const bannerThirdText = mapper?.map((set: any) => {
    return <span>{set?.data.bannerThirdText[0].text}</span>;
  });
  const bannerFourthText = mapper?.map((set: any) => {
    return <span>{set?.data.bannerFourthText[0].text}</span>;
  });
  const bannerFifthText = mapper?.map((set: any) => {
    return <span>{set?.data.bannerFifthText[0].text}</span>;
  });
  return (
    <>
      <Wrapper
        full={true}
        className="bg-[#3f1651] bg-opacity-[0.4] lg:p-20 p-5  lg:pl-60 pl-5"
      >
        <div className="grid lg:grid-cols-[2fr,1fr] grid-cols-1 gap-10 items-center">
          <div>
            <p className="lg:text-[42px] text-[32px] font-bold	 mb-4 pt-10">
              {bannerFirstText ? bannerFirstText : `pending`}
            </p>
            <p className="lg:text-[20px]  text-[16px] lg:flex  block items-center">
              {bannerSecondText ? bannerSecondText : `pending`}
              <BsSkype className="ml-2 mr-3" />
              <a href="" className="underline mr-2 ml-2 decoration-2">
                {bannerThirdText ? bannerThirdText : `pending`}
              </a>
              <b>or</b> <IoIosMail className="ml-2 mr-2" />
              <a href="" className="underline decoration-2">
                {bannerFourthText ? bannerFourthText : `pending`}
              </a>
            </p>
          </div>
          <div>
            <Button
              path="/contact"
              variant="alpha"
              endIcon={<AiOutlineRight />}
            >
              {bannerFifthText ? bannerFifthText : `pending`}
            </Button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
