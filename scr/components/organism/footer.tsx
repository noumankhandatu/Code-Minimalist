import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "./wrapper";
import AppFont from "../atom/AppFont";
import { BsFacebook } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { AiFillInstagram, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { SiIndeed } from "react-icons/si";
import Button from "../molecule/button";
import Prismic from "prismic-javascript";
import { Client } from "../../../prismic-configuration";
import { RichText } from "prismic-reactjs";
const Footer = () => {
  const [toggleFn, setToggleFn] = useState<Boolean>(true);
  const [fetchData, setFetchData] = useState<any>("");
  async function getServerSideProps() {
    const footer = await Client().query(
      Prismic.Predicates.at("document.type", "footer")
    );
    setFetchData(footer);
    return {
      props: {
        footer,
      },
    };
  }
  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }
  let mapper: any = fetchData?.results;
  const copyWriteText = mapper?.map((set: any) => {
    return <span>{set?.data.copyWriteText}</span>;
  });
  const officeText = mapper?.map((set: any) => {
    return <span>{set?.data.officeText}</span>;
  });
  const phoneNumber = mapper?.map((set: any) => {
    return <span>{set?.data.phoneNumber}</span>;
  });
  const emailText = mapper?.map((set: any) => {
    return <span>{set?.data.emailText}</span>;
  });
  const contactText = mapper?.map((set: any) => {
    return <span>{set?.data.contactText}</span>;
  });
  const buttonText = mapper?.map((set: any) => {
    return <span>{set?.data.buttonText}</span>;
  });
  const work = mapper?.map((set: any) => {
    return <span>{set?.data.work}</span>;
  });
  const iconsProp =
    "h-[42px] w-[42px] p-2 cursor-pointer rounded-full ease-in-out duration-700";
  return (
    <Wrapper contained={true} className="pt-10 pb-10 ">
      <div className="grid  lg:grid-cols-3  grid-cols-1 gap-10 ">
        <div>
          <Image
            src="/Logo.svg"
            alt="Picture of the author"
            width={200}
            height={100}
          ></Image>
          <div className="ml-4 mt-3 font-medium text-[20px]">
            {mapper?.map((set: any) => {
              return <RichText render={set.data.footerLogoText} />;
            })}
          </div>
        </div>
        <div>
          <AppFont className="mb-4 mt-3">{work ? work : `pending`}</AppFont>
          <Button path="/contact" variant="outlined">
            {contactText ? contactText : `pending`}
          </Button>
          <div className="flex pt-6 pb-5">
            <BsFacebook
              className={`${iconsProp} hover:text-[#4970BF] hover:bg-white   bg-[#4970BF] border-2 border-[#4970BF]  text-white`}
            />
            <AiFillInstagram
              className={` ${iconsProp} hover:text-[#FF4D62]  hover:bg-white  bg-[#FF4D62]  border-2 border-[#FF4D62]  ml-2  text-white`}
            />
            <VscGithub
              className={` ${iconsProp} hover:text-black hover:bg-white   bg-black  border-2 border-[black] rounded-full  ml-2     text-white`}
            />
            <SiIndeed
              className={` ${iconsProp} hover:text-[#63C9EB] bg-[#63C9EB] hover:bg-white   border-2 border-[#63C9EB] ml-2 text-white`}
            />
          </div>
        </div>

        <div>
          <p className="text-[25px] font-semibold mb-3">
            {buttonText ? buttonText : `pending`}
          </p>
          <AppFont
            className="mb-2"
            startIcon={<AiOutlineMail className="mr-1 " />}
          >
            {emailText ? emailText : `pending`}
          </AppFont>
          <AppFont
            className="mb-2"
            startIcon={<AiFillPhone className="mr-1" />}
          >
            {phoneNumber ? phoneNumber : `pending`}
          </AppFont>
          <AppFont
            className="mb-2 "
            startIcon={<FaRegAddressCard className="mr-1" />}
          >
            {officeText ? officeText : `pending`}
          </AppFont>
        </div>
      </div>
      <div className="pt-3 pb-3">
        <hr className="mt-20" />
        <p className="text-center pt-5 text-[16px] text-[#707070]">
          {copyWriteText ? copyWriteText : `pending`}
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;
