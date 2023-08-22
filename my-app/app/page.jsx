import PostCards from "@/components/PostCards";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";



/*Funcion para realizar peticiones del lado del servidor con next   */

async function Homeposts(){
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?limit=50')
  const data = await res.json();
  await new Promise ((resolve)=>setTimeout(resolve, 3000))
  return data 
}

   async function HomePage() {
  const cars = await Homeposts()
  console.log(cars)
  return (
    <>
      <div className="h-screen">Home
      
      
      <Link href="/about">
        <Button>Click me </Button>
      </Link>
      <div>
        {cars.map((car)=>(
        <PostCards  car={car} key={car.id}/>
        ))}
      </div>
      </div>
    </>
  );
}

export default HomePage;
