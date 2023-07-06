import { Flex } from "@chakra-ui/react";
import React from "react";
import ProductPage from "./ProductPage";
import Filter from "./Filter";

const Home = () => {
  return (
    <Flex
      position={"relative"}
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"flex-start"}
      flexWrap={"wrap"}
      // border={"3px solid yellow"}
    >
      <Filter />
      <ProductPage />
    </Flex>
  );
};

export default Home;
