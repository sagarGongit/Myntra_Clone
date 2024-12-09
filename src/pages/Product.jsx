import { Box, Heading, Image, Text } from "@chakra-ui/react";
import "./Product.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import LoadingIndicator from "../Indicators/LoadingIndicator";
import { loading } from "../reduxFiles/actions";

const Product = () => {
  const { id } = useParams();
  const [single, setSingle] = useState({});
  const authCheck = useSelector((state) => state.users.user.isLogged);
  const user_id = useSelector((state) => state.users.user.userId);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();

  const FetchProductDetails = async () => {
    dispatch(loading(true));
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products/mensApparel/${id}.json`
      );
      if (res.status == 200) {
        setSingle(res.data);
        dispatch(loading(false));
      }
    } catch (error) {
      console.log(error);
      dispatch(loading(false));
    }
  };

  const AddToBag = async (info) => {
    const Item = {
      title: info.title,
      description: info.description,
      price: info.price,
      image: info.image,
      discountprice: info.discountprice,
    };
    if (!authCheck) {
      alert("please login first !");
      return;
    }
    try {
      const res = await axios({
        url: `${import.meta.env.VITE_BASE_URL}/users/${user_id}/cartItem.json`,
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: Item,
      });
      if (res.status == 200) {
        alert("product added to Cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const AddToWishlist = async (data) => {
    const Item = {
      title: data.title,
      description: data.description,
      price: data.price,
      image: data.image,
      discountprice: data.discountprice,
    };
    if (!authCheck) {
      alert("please login first !");
      return;
    }
    try {
      const res = await axios({
        url: `${import.meta.env.VITE_BASE_URL}/users/${user_id}/wishlist.json`,
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: Item,
      });
      if (res.status == 200) {
        alert("product added to wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchProductDetails();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  const { title, description, price, image ,discountprice} = single;

  return (
    <>
      <Box className="product-info">
        <Box>
          <Image src={image} />
        </Box>
        <Box>
          <Heading size={"xl"} marginBottom={2}>
            {" "}
            {title}
          </Heading>
          <Text>Description : {description}</Text>
          <Text>Price : {price}</Text>
          <Text as={"b"} color={"green"}>
            inclusive of all taxes
          </Text>{" "}
          <br />
          <Text as={"b"}>SELECT SIZE </Text>
          <Box className="size-section">
            <Box>28</Box>
            <Box>30</Box>
            <Box>32</Box>
            <Box>34</Box>
            <Box>36</Box>
          </Box>
          <Box className="buttons">
            <Box onClick={() => AddToBag({ image, description, price, title, discountprice })}>
              ADD TO BAG <HiOutlineShoppingBag size={24} />
            </Box>
            <Box
              onClick={() =>
                AddToWishlist({ image, description, price, title })
              }
            >
              WISHLIST <CiHeart size={24} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Product;
