import React, { Suspense } from "react";

interface IProps {
  children: JSX.Element;
}

const FallBack = ({ children }: IProps) => {
  return <Suspense fallback={"Loading..."}>{children}</Suspense>;
};

export default FallBack;
