import React from "react";
import Link from "next/link";
import Button from "../molecule/button";
type DrawerProps = {
  setActiveLink: any;
  activeLink: any;
};
const headerEle = [
  {
    title: `About Ninja`,
    path: "/aboutNinja",
    id: 0,
  },
  {
    title: "Services",
    path: "/services",
    id: 1,
  },
  {
    title: "Values and Purpose ",
    path: "/valueAndPurpose",
    id: 2,
  },
  {
    title: "Branch",
    path: "/branch",
    id: 3,
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    id: 4,
  },
];
const Drawer = ({ setActiveLink, activeLink }: DrawerProps) => {
  return (
    <div className="bg-white md:w-[700px]   sm:w-[600px]  w-[300px]  shadow-[0_3px_9px_rgba(0,0,0,0.2)] p-2 absolute z-10 top-12 right-0 ">
      <div className="block  items-center p-2 ">
        {headerEle?.map((items: {}[] | any, id: number) => {
          return (
            <Link href={`${items.path}`}>
              <p
                onClick={() => setActiveLink(id)}
                className={`${
                  items.id == activeLink ? "active" : "unactive"
                } text-[17px] mb-5 font-medium cursor-pointer hover:border-b-[#ff5b2e] ease-in-out duration-700`}
              >
                {items.title}
              </p>
            </Link>
          );
        })}
        <Button variant="primary" className="" path={"/"}>
          Lets Talk
        </Button>
      </div>
    </div>
  );
};

export default Drawer;
