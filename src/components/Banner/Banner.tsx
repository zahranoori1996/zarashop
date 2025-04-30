import { ComponentPropsWithoutRef } from "react";

import Container from "../Container/Container";
type TImage = ComponentPropsWithoutRef<"img">;

function Banner({ src,alt,className }: TImage) {
  return (
    <Container>
      <img className={className} src={src} alt={alt}/>
    </Container>
  );
}

export default Banner;
