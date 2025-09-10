'use client';

import { useState } from 'react';
import styled from 'styled-components';

type ExampleCardFlipProps = {
  spin?: number;
};

const Card = styled.div`
  position: relative;
  width: 504px;
  height: 722px;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const CardFace = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background-color: #262626;
  transition: transform 0.8s;
  backface-visibility: hidden;
  background-repeat: no-repeat;
`;

const FrontCardFace = styled(CardFace)<{ $spin: number }>`
  transform: none;
  background-image: url('/dragon.png');
  background-size: contain;
  background-position: center;

  .is-flip & {
    transform: ${({ $spin }) => `rotateY(${180 + 360 * ($spin - 1)}deg)`};
  }
`;

const BackCardFace = styled(CardFace)<{ $spin: number }>`
  transform: rotateY(180deg);
  background-image: url('/card_back.png');
  background-size: cover;
  .is-flip & {
    transform: ${({ $spin }) => `rotateY(${360 + 360 * ($spin - 1)}deg)`};
  }
`;

const ExampleCardFlip = ({ spin = 1 }: ExampleCardFlipProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <Card className={`${isFlipped ? 'is-flip' : ''}`}>
      <FrontCardFace $spin={spin} onClick={() => setIsFlipped(!isFlipped)} />
      <BackCardFace $spin={spin} onClick={() => setIsFlipped(!isFlipped)} />
    </Card>
  );
};

export default ExampleCardFlip;
