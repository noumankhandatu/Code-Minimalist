import React, { useState } from "react";
import Wrapper from "./wrapper";
import Input from "../atom/input";
import TextArea from "../atom/textarea";
import Button from "../molecule/button";
import Prismic from "prismic-javascript";
import { Client } from "../../../prismic-configuration";
const Form = () => {
  const [toggleFn, setToggleFn] = useState<Boolean>(true);
  const [fetchData, setFetchData] = useState<any>("");
  async function getServerSideProps() {
    const contact = await Client().query(
      Prismic.Predicates.at("document.type", "contact")
    );
    setFetchData(contact);
    return {
      props: {
        contact,
      },
    };
  }
  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }
  let mapper: any = fetchData?.results;
  const contactTitle = mapper?.map((set: any) => {
    return <span>{set?.data.contactTitle}</span>;
  });
  const name = mapper?.map((set: any) => {
    return <span>{set?.data.name}</span>;
  });
  const number = mapper?.map((set: any) => {
    return <span>{set?.data.number}</span>;
  });
  const email = mapper?.map((set: any) => {
    return <span>{set?.data.email}</span>;
  });
  const message = mapper?.map((set: any) => {
    return <span>{set?.data.message}</span>;
  });
  const buttonText = mapper?.map((set: any) => {
    return <span>{set?.data.buttonText}</span>;
  });
  return (
    <Wrapper contained={true} className="pb-20 pt-16">
      <p className="lg:text-[42px] text-[32px]  font-normal text-center pb-20">
        {contactTitle ? contactTitle : `pending`}
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:pl-20 lg:gap-10 lg:pr-20 p-2">
        <Input label={name ? name : "pending"} />
        <Input label={number ? number : `pending`} />
        <Input label={email ? email : `pending`} />
      </div>
      <TextArea title={message ? message : `pending`} />
      <div className="flex pt-10 justify-center">
        <Button path="/" variant="secondary">
          {buttonText ? buttonText : `pending`}
        </Button>
      </div>
    </Wrapper>
  );
};

export default Form;
