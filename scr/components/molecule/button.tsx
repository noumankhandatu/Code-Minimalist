import React from "react";
import Link from "next/link";

type ButtonProps = {
  variant: string;
  children: React.ReactNode;
  className?: string;
  endIcon?: React.ReactNode | any;
  path: string;
};

const Button = ({
  variant,
  className,
  children,
  endIcon,
  path,
}: ButtonProps) => {
  const fixed =
    "bg-App-purple pt-3 pb-3 pl-8 pr-8 text-white w-[174px]  h-[44px]  top-80 align-middle -right-[60px]  fixed -rotate-90";
  const primary =
    "text-center rounded text-white px-[10px]  py-[23px] h-[42px] w-[127px] text-[17px]  bg-black hover:bg-App-orange  ease-in-out duration-500";
  const outlined =
    "text-center rounded text-black hover:text-white  border-2 border-black py-[11px]  h-[50px] w-[142px] text-[16px]  bg-white hover:bg-black ease-in-out duration-500";
  //  contained === orange color up btn
  const contained =
    "text-white w-[170px] py-[14px] h-[52px] bg-App-orange  text-center text-[16px] ";
  // with radius btn
  const secondary =
    "bg-App-orange hover:bg-slate-900 font-bold text-white rounded-full ease-in-out duration-700 w-[190px] h-[40px]   text-center";
  // big btn
  const alpha =
    "lg:w-[280px] w-[162px] bg-App-orange lg:text-[25px] text-[16px]  text-center  lg:py-[48px] py-[20px] lg:h-[81px] h-[56] text-white rounded filled";
  const danger = "bg-App-light-purple pt-3 pb-3 text-black  w-[183px]";
  return (
    <Link href={path ? path : "/"}>
      <div
        className={`${variant === "fixed" ? fixed : null}   ${
          variant === "primary" ? primary : null
        } ${variant === "outlined" ? outlined : null}  ${
          variant === "contained" ? contained : null
        }   ${variant === "secondary" ? secondary : null} ${
          variant === "alpha" ? alpha : null
        } 
        ${variant === "danger" ? danger : null}
          ${className} cursor-pointer flex items-center justify-center  text-[16px]`}
      >
        {children}
        {endIcon && <span className="ml-2"> {endIcon}</span>}
      </div>
    </Link>
  );
};

export default Button;
