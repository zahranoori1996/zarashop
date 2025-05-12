import Container from '../Container/Container';
import type { TImage } from '../../types/Type';

function Banner({ src,alt,className }: TImage) {
    return (
      <Container>
        <img className={className} src={src} alt={alt}/>
      </Container>
    );
  }

export default Banner;
