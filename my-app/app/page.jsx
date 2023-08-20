import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <>
      <div className="h-screen">Home
      
      
      <Link href="/about">
        <Button>Click me </Button>
      </Link>
      </div>
    </>
  );
}

export default HomePage;
