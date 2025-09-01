'use client';
import { Button } from "@mui/material";
import { useState } from "react";

export default function ExampleCustomButton({ label }: { label: string }) {
  const [flag, setFlag] = useState(true);

  const clickAction = () => {
    setFlag(!flag);
  };

  return <Button variant="contained" disabled={!flag} onClick={clickAction}>{label}</Button>;
}