'use client';
import Image from 'next/image';
import styled from 'styled-components';

type EyeCatchImageProps = {
  src: string;
  alt: string;
};

const EyeCatchImage = ({ src, alt }: EyeCatchImageProps) => {
  const EyeCatchWrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
  `;
  return (
    <EyeCatchWrapper>
      <Image src={src} alt={alt} width={800} height={400} />
    </EyeCatchWrapper>
  );
};

export default EyeCatchImage;
