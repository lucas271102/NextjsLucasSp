import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <>
      <div>Home</div>
      <Link href="/about">
        <Button>Click me </Button>
      </Link>
    </>
  );
}

export default HomePage;
