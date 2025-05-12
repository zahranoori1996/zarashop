import React from "react";
import type { IContainer } from "../../types/Type";

function Container({ children }: IContainer) {
  return <div className="mx-auto container">{children}</div>;
}

export default Container;
