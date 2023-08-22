"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
export function Providers({ children }) {
  return (
    <ChakraProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ChakraProvider>
  );
}
