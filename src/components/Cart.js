import React from "react";
import { CartState } from "../context/Context";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillCaretDown, AiFillDelete } from "react-icons/ai";
import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Box
      // border={"2px solid red"}
      mx={"auto"}
      display={"flex"}
      rounded={"2xl"}
      shadow={"4xl"}
      flexDir={"column"}
    >
      {cart.map((prod) => (
        <Box
          key={prod.id}
          rounded={"2xl"}
          shadow={"4xl"}
          my={1}
          p={1}
          width={["95vw", "60vw"]}
        >
          <Card
            size={["sm,md,lg"]}
            key={prod.id}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            gap={2}
            padding={2}
            rounded={"2xl"}
            shadow={"4xl"}
          >
            <Image
              display={"flex"}
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={prod.image}
              alt={`Image of ${prod.name}`}
              rounded={"md"}
            />

            <Stack>
              <CardBody>
                <Heading size="md">{prod.name}</Heading>

                <Text py="1">
                  {prod.description.length > 200
                    ? `${prod.description.slice(0, 200)}...`
                    : prod.description}
                </Text>
                <Text as={"span"} py="1">
                  ₹ {prod.price}
                </Text>
                <HStack my={2}>
                  <Rating rating={prod.ratings} />
                </HStack>
                <Select
                  onChange={(e) => {
                    dispatch({
                      type: "CHANGE_QTY",
                      payload: { id: prod.id, qty: e.target.value },
                    });
                  }}
                  icon={<AiFillCaretDown />}
                  placeholder="Select quantity"
                  value={prod.qty}
                >
                  {[...Array(prod.inStock).keys()].map((qty) => (
                    <option value={qty + 1} key={qty}>
                      {qty + 1}
                    </option>
                  ))}
                </Select>
              </CardBody>

              <CardFooter>
                <Button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    })
                  }
                  variant="solid"
                  colorScheme="red"
                >
                  Remove from cart <AiFillDelete size={"25px"} />
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default Cart;
