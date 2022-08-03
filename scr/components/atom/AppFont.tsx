import React, { ReactElement } from "react";
type AppFontProps = {
  children: string;
  className?: string;
  startIcon?: React.ReactNode | any;
  endIcon?: React.ReactNode | ReactElement | any;
};
const AppFont = ({ children, className, endIcon, startIcon }: AppFontProps) => {
  return (
    <div
      className={`${className} text-[16px] font-normal text-{#1C1B1B} flex `}
    >
      {startIcon && <div className={`${className} mt-1`}>{startIcon}</div>}
      {children}
      {endIcon && endIcon}
    </div>
  );
};

export default AppFont;
