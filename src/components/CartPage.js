import { Box } from "@chakra-ui/react";
import React from "react";
import Cart from "./Cart";
import Summary from "./Summary";
import { CartState } from "../context/Context";

const CartPage = () => {
  const {
    state: { cart },
  } = CartState();
  return (
    <>
      <Box
        rounded={"2xl"}
        boxShadow={"lg"}
        // border={"2px solid red"}
        py={2}
        // justifySelf={"center"}
        textAlign={"center"}
        fontSize={40}
        fontWeight={"bolder"}
        mx={"auto"}
        marginTop={"11vh"}
        width={"full"}
      >
        {cart.length > 0 ? "Your Shopping Cart" : "Empty Cart"}
      </Box>
      <Box
        // border={"20px solid red"}
        display={"flex"}
        flexDir={["column-reverse", "row"]}
        justifyContent={"space-around"}
        alignItems={"strech"}
        marginTop={"1vh"}
      >
        <Cart />
        <Summary />
      </Box>
    </>
  );
};

export default CartPage;
