import React from "react";
type WrapperProps = {
  children: React.ReactNode;
  full?: boolean;
  contained?: boolean;
  className?: string;
};
const Wrapper = ({ children, contained, full, className }: WrapperProps) => {
  return (
    <>
      {full ? <div className={`${className}`}>{children}</div> : null}
      {contained ? (
        <div className={`${className} lg:pl-32 lg:pr-32 pl-5 pr-5`}>
          {children}
        </div>
      ) : null}
    </>
  );
};

export default Wrapper;
