import {
  Box,
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const Filter = () => {
  const {
    filterState: { sort, byRating, byNew, byFastDel, byStock },
    filterDispatch,
  } = CartState();
  // console.log(sort);

  return (
    <Box
      // marginLeft={"25px"}
      position={["", "sticky"]}
      marginTop={"12vh"}
      top={"12vh"}
      padding={2}
      rounded={"xl"}
      // border={"2px solid red"}
      // marginRight={"10px"}
      display={["block", "flex"]}
      justifyContent={"center"}
      h={["auto", "100vh"]}
      width={["100%", "20%"]}
      boxShadow={" 7px 1px 31px -4px rgba(0,0,0,0.75)"}
    >
      <VStack mx={"auto"} align={"center"}>
        <Text fontSize="2xl"> Filter Products</Text>
        <Text
          mt={2}
          mb={0}
          width={"full"}
          fontSize={"xl"}
          fontWeight={"bolder"}
        >
          Sort by:
        </Text>

        <RadioGroup textAlign={"center"} m={4}>
          <Radio
            onChange={() => {
              filterDispatch({
                type: "SORT_BY_PRICE",
                payload: "LTH",
              });
            }}
            size="lg"
            m={4}
            value="asc"
            checked={sort === "LTH" ? true : false}
          >
            Price: Low to High
          </Radio>
          <Radio
            onChange={() => {
              filterDispatch({
                type: "SORT_BY_PRICE",
                payload: "HTL",
              });
            }}
            size="lg"
            m={4}
            value="desc"
            checked={sort === "HTL" ? true : false}
          >
            Price: High to low
          </Radio>
        </RadioGroup>
        <Text
          mt={2}
          mb={0}
          width={"full"}
          fontSize={"xl"}
          fontWeight={"bolder"}
        >
          Filter:
        </Text>
        <Checkbox
          onChange={() => {
            filterDispatch({ type: "FILTER_BY_NEW" });
          }}
          size="lg"
          m={4}
          mt={0}
          checked={byNew}
          // colorScheme="orange"
        >
          New Products
        </Checkbox>
        <Checkbox
          onChange={() => {
            filterDispatch({ type: "FILTER_BY_FASTDEL" });
          }}
          size="lg"
          m={4}
          checked={byFastDel}
          // colorScheme="orange"
        >
          Fast Delivery only
        </Checkbox>
        <Checkbox
          onChange={() => {
            filterDispatch({ type: "FILTER_BY_STOCK" });
          }}
          size="lg"
          m={4}
          checked={byStock}
          // colorScheme="orange"
          // defaultChecked
        >
          Include Out of Stock
        </Checkbox>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          m={4}
          alignItems={"center"}
        >
          Ratings:
          <Rating
            rating={byRating}
            onClick={(e) => {
              filterDispatch({ type: "FILTER_BY_RATING", payload: e + 1 });
            }}
          />
        </Box>
        <Button
          onClick={() => {
            filterDispatch({ type: "CLEAR_FILTERS" });
          }}
        >
          Clear Filters
        </Button>
      </VStack>
    </Box>
  );
};

export default Filter;
