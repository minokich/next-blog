import { Container } from '@mui/material';
import Link from 'next/link';

const Page = () => {
  return (
    <Container maxWidth="sm">
      <Link href={'/articles'}>記事一覧</Link>
    </Container>
  );
};

export default Page;
