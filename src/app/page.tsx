import CustomButton from "@/components/ExampleCustomButton/ExampleCustomButton";
import { Container } from "@mui/material";
import Link from "next/link";

const Page = () => {
  return (
    <Container maxWidth="sm">
      <Link href={"/articles"}>記事一覧</Link>
      <div>
        <CustomButton label="てすと" />
      </div>
    </Container>
  );
}

export default Page;