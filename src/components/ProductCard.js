import {
  Badge,
  Box,
  Flex,
  Image,
  Tooltip,
  useColorModeValue,
  chakra,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { IoBagAdd, IoBagRemove } from "react-icons/io5";
import { CartState } from "../context/Context";
// import { useWindowScroll } from "@uidotdev/usehooks";

function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

const ProductCard = ({ prod }) => {
  // const [{ x, y }, scrollTo] = useWindowScroll();
  const {
    state: { cart },
    dispatch,
  } = CartState();
  // console.log("product: ", prod);
  return (
    <Flex
      _hover={{ boxShadow: "lg" }}
      rounded={"md"}
      // flexWrap={"wrap"}
      overflow={"hidden"}
      maxWidth={"22rem"}
      // m={2}

      py={2}
      px={2}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxWidth="sm"
        flexWrap={"wrap"}
        display={"flex"}
        flexDir={"column"}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={prod.image}
          alt={`Picture of ${prod.name}`}
          roundedTop="lg"
        />

        <Box p="4">
          <Box display="flex" alignItems="baseline">
            {prod.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              wrap={"wrap"}
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {prod.name}
            </Box>
            {/* {console.log(
              "cart",
              cart.find((item) => item.id == prod.id)
            )} */}
            {/* {console.log("cart", cart.indexOf(prod))} */}

            <Tooltip
              label={
                prod.inStock
                  ? cart.find((item) => item.id === prod.id)
                    ? "Remove from cart"
                    : "Add to cart"
                  : "Out of Stock"
              }
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
            <chakra.a href={"#"} display={"flex"}>
              {cart.some((p) => p.id === prod.id) ? (
                <IconButton
                  onClick={() => {
                    // scrollTo({ left: 0, top: 1000 });
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    });
                  }}
                  icon={<IoBagRemove />}
                  fontSize={"2xl"}
                  alignSelf={"center"}
                  color={"red"}
                />
              ) : (
                <IconButton
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: prod,
                    });
                  }}
                  isDisabled={!prod.inStock}
                  icon={<IoBagAdd />}
                  fontSize={"2xl"}
                  alignSelf={"center"}
                />
              )}
            </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={prod.ratings} numReviews={prod.reviews} />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                ₹
              </Box>
              {prod.price.split(".")[0]}
            </Box>
          </Flex>
          {prod.fastDelivery ? (
            <span>Fast Delivery</span>
          ) : (
            <span>4 days delivery</span>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default ProductCard;
