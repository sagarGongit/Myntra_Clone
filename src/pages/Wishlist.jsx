import { Box, Image, Text } from "@chakra-ui/react";
import "./Wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loading, wishlistItem } from "../reduxFiles/actions";
import { useEffect, useState } from "react";
import LoadingIndicator from "../Indicators/LoadingIndicator";
import Footer from "../components/Footer";
import Unathorized from "../components/Unathorized";
import EmptyError from "../components/emptyError";

const Wishlist = () => {
  const userWishlist = useSelector((state) => state.cart.wishlist);
  const user_id = useSelector((state) => state.users.user.userId);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const authCheck = useSelector((state) => state.users.user.isLogged);
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();

  const FetchWishlist = async () => {
    dispatch(loading(true));
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/${user_id}/wishlist.json`
      );
      if (res.status == 200) {
        dispatch(wishlistItem(res.data));
        dispatch(loading(false));
      }
    } catch (error) {
      dispatch(loading(false));
      console.log(error);
    }
  };

  const AddToBag = async (id, item) => {
    const Item = {
      title: item.title,
      description: item.description,
      price: item.price,
      image: item.image,
      discountprice:item.discountprice
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

  const deleteItem = async (id) => {
    if (!authCheck) {
      alert("please login first !");
      return;
    }
    try {
      const res = await axios({
        url: `${import.meta.env.VITE_BASE_URL}/users/${user_id}/wishlist/${id}.json`,
        method: "delete",
      });
      if (res.status == 200) {
        setFlag(!flag);
        alert("item deleted from your wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchWishlist();
  }, [flag]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <Text as={"b"}>
        My Wishlist{" "}
        {userWishlist == null ? 0 : Object.entries(userWishlist).length} Item
      </Text>
      {authCheck && userWishlist == null ? (
        <EmptyError value={"whishlist"} />
      ) : !authCheck ? (
        <Unathorized />
      ) : (
        <Box className="wishlist">
          <Box className="wishlist-content">
            {Object.entries(userWishlist).map(([id, item]) => (
              <Box className="wishlist-card" key={id}>
                <Image src={item.image} />
                <Box cursor={"pointer"}>
                  <Text as={"b"} fontSize={"15px"}>
                    {item.title}
                  </Text>
                  <Text>{item.description}</Text>
                  <Text as={"b"}>Rs. {item.price}</Text>
                </Box>
                <Box cursor={"pointer"} onClick={() => AddToBag(id, item)}>
                  MOVE TO BAG
                </Box>
                <Box className="remove-btn" onClick={() => deleteItem(id)}>
                  REMOVE
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
      <Footer />
    </>
  );
};

export default Wishlist;
