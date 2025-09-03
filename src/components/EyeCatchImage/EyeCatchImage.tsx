'use client';
import Image from 'next/image';
import styled from 'styled-components';

type EyeCatchImageProps = {
  src: string;
  alt: string;
};
const EyeCatchWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 100vw;

  img {
    max-width: 100%;
  }
`;

const EyeCatchImage = ({ src, alt }: EyeCatchImageProps) => {
  return (
    <EyeCatchWrapper>
      <Image src={src} alt={alt} width={800} height={400} />
    </EyeCatchWrapper>
  );
};

export default EyeCatchImage;
