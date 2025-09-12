'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import { CatImageType } from '@/types/CatImage';

type CatImageProps = {
  image: CatImageType;
};

const CatImage = ({ image }: CatImageProps) => {
  return (
    <Box key={image.id} sx={{ flex: '0 0 auto' }}>
      <Image
        src={image.url}
        alt={image.id}
        width={300}
        height={300}
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
      />
    </Box>
  );
};

export default CatImage;
