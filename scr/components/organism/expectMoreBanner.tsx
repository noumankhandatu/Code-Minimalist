import React from "react";
import Wrapper from "./wrapper";
import { AiOutlineRight } from "react-icons/ai";
import Button from "../molecule/button";
type ExpectMoreBannerProps = {
  titleone?: string;
  titletwo?: string;
  description?: string;
  button?: boolean;
};
const ExpectMoreBanner = ({
  titleone,
  titletwo,
  description,
  button,
}: ExpectMoreBannerProps) => {
  return (
    <div>
      <div className="relative">
        <div className="bg-[url('/homebg.jpg')]   brightness-25 h-96 pt-96 pb-52 bg-no-repeat bg-center p-10"></div>
        <Wrapper contained={true} className=" absolute lg:top-32  top-10 text-white">
          <p className="lg:text-6xl text-[42px] pt-10 text-white">{titleone}</p>
          <p className="lg:text-6xl text-[42px] pb-10">{titletwo}</p>
          <p className="text-[18px] ">{description}</p>
          {button && (
            <Button
              path="/services"
              variant="contained"
              className="rounded mt-10 filled"
              endIcon={<AiOutlineRight />}
            >
              Get a Quote
            </Button>
          )}
        </Wrapper>
      </div>
    </div>
  );
};

export default ExpectMoreBanner;
