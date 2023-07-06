import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";

const Summary = () => {
  const {
    state: { cart },
  } = CartState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
      {cart.length > 0 ? (
        <VStack
          mx={"auto"}
          rounded={"2xl"}
          shadow={"2xl"}
          justifyContent={"full"}
          height={"full"}
          alignItems={"stretch"}
          // border={"2px solid red"}
          my={1}
          p={1}
          // textAlign={"center"}
          width={["95vw", "25vw"]}
        >
          <Text alignSelf={"center"} fontSize={"xl"} fontWeight={800}>
            Summary
          </Text>
          <Box alignSelf={"center"}>Total {cart.length} items</Box>
          {cart.map((prod) => (
            <Box
              key={prod.id}
              display={"flex"}
              justifyContent={"space-between"}
              shadow={"md"}
              p={4}
              // border={"2px solid red"}
            >
              <Image
                // border={"2px solid red"}
                h={"75px"}
                w={"75px"}
                src={`${prod.image}`}
                mr={"20px"}
              />
              <Text
                alignSelf={"center"}
                display={"inline"}
                width={"full"}
                fontSize={"xl"}
              >
                {prod.name}
                <Text
                  as={"span"}
                  marginLeft={1}
                  fontSize={"sm"}
                  color={"gray"}
                  display={"inline"}
                >
                  {" "}
                  x{prod.qty}
                </Text>
              </Text>
              <Text
                alignSelf={"center"}
                textAlign={"right"}
                width={"full"}
                fontWeight={"bold"}
                fontSize={"lg"}
                letterSpacing={"0.05rem"}
              >
                ₹ {prod.price * prod.qty}
              </Text>
            </Box>
          ))}
          <Box p={4} display={"flex"} justifyContent={"space-between"}>
            <Text
              fontWeight={"extrabold"}
              fontSize={"2xl"}
              letterSpacing={"0.05rem"}
            >
              SubTotal
            </Text>
            <Text
              fontWeight={"extrabold"}
              fontSize={"2xl"}
              letterSpacing={"0.05rem"}
            >
              ₹{total}
            </Text>
          </Box>
          <Button
            my={5}
            bgColor={"facebook.600"}
            fontSize={["xl", "3xl", "4xl"]}
            py={10}
            color={"white"}
            variant={"solid"}
            rounded={"3xl"}
          >
            Checkout
          </Button>
        </VStack>
      ) : (
        ""
      )}
    </>
  );
};

export default Summary;
