import { Box } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { CartState } from "../context/Context";

const ProductPage = () => {
  const {
    state: { products },
    filterState: { byStock, byFastDel, bySearch, byRating, byNew, sort },
  } = CartState();

  const filteredProducts = () => {
    let filteredProducts = products;

    if (sort) {
      filteredProducts = filteredProducts.sort((a, b) =>
        sort === "LTH" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      filteredProducts = filteredProducts.filter((prod) => prod.inStock);
    }
    if (byNew) {
      filteredProducts = filteredProducts.filter((prod) => prod.isNew);
    }
    if (byFastDel) {
      filteredProducts = filteredProducts.filter((prod) => prod.fastDelivery);
    }
    if (byRating) {
      filteredProducts = filteredProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }
    if (bySearch) {
      filteredProducts = filteredProducts.filter((prod) =>
        prod.name.toLowerCase().includes(bySearch.toLowerCase())
      );
    }

    return filteredProducts;
  };

  return (
    <Box
      padding={2}
      rounded={"xl"}
      display={"flex"}
      flexWrap={"wrap"}
      mt={["auto", "12vh"]}
      justifyContent={"space-around"}
      // border={"2px solid red"}
      width={["95%", "65%", "75%"]}
      boxShadow={" 7px 1px 31px -4px rgba(0,0,0,0.75)"}
    >
      {/* <SimpleGrid columns={[1, 2, 3]} spacing={5}> */}
      {filteredProducts().map((product) => {
        // console.log(product);
        return <ProductCard prod={product} key={product.id} />;
      })}
      {/* </SimpleGrid> */}
    </Box>
  );
};

export default ProductPage;
