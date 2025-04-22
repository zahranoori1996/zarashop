import { ComponentPropsWithoutRef } from "react";

import Container from "../Container/Container";
type TImage = ComponentPropsWithoutRef<"img">;

function Banner({ src,alt }: TImage) {
  return (
    <Container>
      <img className="w-full" src={src} alt={alt}/>
    </Container>
  );
}

export default Banner;
