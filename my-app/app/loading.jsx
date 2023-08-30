"use client";

import React from "react";

import { Spinner } from "@chakra-ui/react";
const loading = () => {
  return (
    <div className="flex gap-2 p-4 h-screen justify-center items-center">
      <h1 className="text-2xl">Cargando...</h1>
      <Spinner />
    </div>
  );
};

export default loading;
