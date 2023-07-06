import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle, AiFillDelete } from "react-icons/ai";
import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  MenuDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { Link } from "react-router-dom";
// import { useWindowScroll } from "@uidotdev/usehooks";
import { CartState } from "../context/Context";

const Links = ["Dashboard", "Projects", "Team"];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    state: { cart },
    dispatch,
    filterDispatch,
  } = CartState();

  return (
    <div style={{ postion: "sticky", top: 0 }}>
      <Box
        position={"fixed"}
        top={"0"}
        right={0}
        left={0}
        opacity={1}
        zIndex={2}
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <AiFillCloseCircle /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box p={2}>
              <Link to="/">Let's Shop</Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Input
            onChange={(e) => {
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
            type="search"
            placeholder="Search an item here..."
            mx={5}
          />
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton as={Button} rightIcon={<BsFillCartFill />}>
                Your Cart ({cart.length})
              </MenuButton>
              <MenuList>
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <div key={prod.id}>
                        <MenuItem cursor={"default"} minH="48px">
                          <Image
                            boxSize="5rem"
                            //borderRadius='full'
                            src={prod.image}
                            alt={`image of ${prod.name}`}
                            mr="12px"
                          />
                          <HStack
                            width={"full"}
                            // border={"2px solid red"}
                            justifyContent={"space-between"}
                          >
                            <VStack>
                              <Text ml={2} fontSize={"xl"} fontWeight={700}>
                                {prod.name}
                              </Text>
                              <Text p={1} fontSize={"xl"} fontWeight={600}>
                                ₹ {prod.price.split(".")[0]}
                              </Text>
                            </VStack>
                            <AiFillDelete
                              size={"25px"}
                              position="relative"
                              color="red"
                              cursor={"pointer"}
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: prod,
                                })
                              }
                            />
                          </HStack>
                        </MenuItem>
                        <MenuDivider />
                      </div>
                    ))}
                  </>
                ) : (
                  <MenuItem minH="48px">
                    <span>Your cart is empty</span>
                  </MenuItem>
                )}
                <Button marginInline={"20"} colorScheme="telegram">
                  <Link to="/cart">Go to Cart</Link>
                </Button>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(
                (link) =>
                  // <NavLink key={link}>{link}</NavLink>
                  link
              )}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
