import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "./wrapper";
import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import Button from "../molecule/button";
import Drawer from "./drawer";
import Prismic from "prismic-javascript";
import { Client } from "../../../prismic-configuration";
import { RichText } from "prismic-reactjs";

const Header = () => {
  const [activeLink, setActiveLink] = useState<number>(8);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [toggleFn, setToggleFn] = useState<Boolean>(true);
  const [fetchData, setFetchData] = useState<any>("");
  async function getServerSideProps() {
    const navbar = await Client().query(
      Prismic.Predicates.at("document.type", "navbar")
    );
    setFetchData(navbar);
    return {
      props: {
        navbar,
      },
    };
  }
  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }
  let mapper: any = fetchData?.results;
  const firstLink = mapper?.map((set: any) => {
    return <span>{set?.data.navfirstlink}</span>;
  });
  const secondLink = mapper?.map((set: any) => {
    return <span>{set?.data.navsecondlink}</span>;
  });
  const thirdLink = mapper?.map((set: any) => {
    return <span>{set?.data.navthirdlink}</span>;
  });
  const fourthLink = mapper?.map((set: any) => {
    return <span>{set?.data.navfourthlink}</span>;
  });
  const fifthLink = mapper?.map((set: any) => {
    return <span>{set?.data.navfifthlink}</span>;
  });
  const headerEle = [
    {
      title: firstLink ? firstLink : `pending`,
      path: "/aboutNinja",
      id: 0,
    },
    {
      title: secondLink ? secondLink : `pending`,
      path: "/services",
      id: 1,
    },
    {
      title: thirdLink ? thirdLink : `pending`,
      path: "/valueAndPurpose",
      id: 2,
    },
    {
      title: fourthLink ? fourthLink : `pending`,
      path: "/branch",
      id: 3,
    },
    {
      title: fifthLink ? fifthLink : `pending`,
      path: "/portfolio",
      id: 4,
    },
  ];

  return (
    <div className="pb-10">
      <Wrapper
        contained={true}
        className="flex shadow  fixed ease-in-out duration-1000 bg-white z-10 top-0 left-0 right-0 justify-between items-center p-5 pb-2 pt-2"
      >
        <div className="flex items-center ">
          <Link href="/">
            <div className="flex items-center justify-center  flex-col">
              <Image
                className="cursor-pointer object-contain"
                src="/Logo.svg"
                alt="Picture of the author"
                width={60}
                height={60}
              ></Image>
              <div className="flex items-center">
                {mapper?.map((set: any) => {
                  return (
                    <div className="font-medium text-[16px]">
                      <RichText render={set.data.headerLogoText} />
                    </div>
                  );
                })}
              </div>
            </div>
          </Link>
          <div className="lg:flex  hidden ml-14 items-center">
            {headerEle?.map((items, id) => {
              return (
                <Link href={`${items.path}`}>
                  <p
                    onClick={() => setActiveLink(id)}
                    className={`${
                      items.id == activeLink ? "active" : "unactive"
                    } ml-6 p-1 text-[17px] font-medium cursor-pointer hover:border-b-App-purple ease-in-out duration-700`}
                  >
                    {items.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <Button variant="primary" path="/services" className="lg:flex hidden">
            {mapper?.map((set: any) => {
              return <span>{set?.data?.navbuttontext}</span>;
            })}
          </Button>
          <CgMenuLeft
            onClick={() => [setDrawerOpen(!drawerOpen)]}
            className="w-8 h-8 lg:hidden block"
          />
          {drawerOpen ? (
            <Drawer setActiveLink={setActiveLink} activeLink={activeLink} />
          ) : null}
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
