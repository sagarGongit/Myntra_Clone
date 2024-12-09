import {
  Box,
  Button,
  Checkbox,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { cartitem, loading, useraddress } from "../reduxFiles/actions";
import { useEffect, useState } from "react";
import LoadingIndicator from "../Indicators/LoadingIndicator";
import Footer from "../components/Footer";
import EmptyError from "../components/emptyError";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { BsTag } from "react-icons/bs";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const userCart = useSelector((state) => state.cart.cartItem);
  const pin_code = useSelector((state) => state.cart.Address);
  const user_id = useSelector((state) => state.users.user.userId);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const authCheck = useSelector((state) => state.users.user.isLogged);
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const [Changeaddress, setchangeAddress] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const navigate = useNavigate();

  const FetchCartItems = async () => {
    dispatch(loading(true));
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/${user_id}/cartItem.json`
      );
      if (res.status == 200 && res.data) {
        dispatch(loading(false));
        dispatch(cartitem(res.data));
      } else {
        dispatch(loading(true));
      }
    } catch (error) {
      dispatch(loading(false));
      console.log(error);
    } finally {
      dispatch(loading(false));
    }
  };

  const FetchLocality = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/${user_id}/address.json`
      );
      if (res.status == 200) {
        dispatch(useraddress(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const AddLocality = async (e) => {
    e.preventDefault();
    const Useraddress = {
      name: e.target.name.value,
      mobile: e.target.mobile.value,
      pincode: e.target.pincode.value,
      address: e.target.address.value,
      locality: e.target.locality.value,
      district: e.target.district.value,
    };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/${user_id}/address.json`,
        Useraddress
      );
      if (res.status == 200) {
        alert("address added successfully");
        setchangeAddress(false);
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
        url: `${
          import.meta.env.VITE_BASE_URL
        }/users/${user_id}/cartItem/${id}.json`,
        method: "delete",
      });
      if (res.status == 200) {
        setFlag(!flag);
        alert("item deleted from cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleItems = (e, item) => {
    e.target.checked
      ? setItemCount(itemCount + 1)
      : e.target.checked == false
      ? setItemCount(itemCount - 1)
      : null;
    var totalPrice = 0;
    e.target.checked ? (totalPrice += item.price) : totalPrice - item.price;
    console.log(totalPrice);
  };

  useEffect(() => {
    FetchCartItems();
    FetchLocality();
  }, [flag]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      {authCheck && userCart.length == 0 ? (
        <EmptyError value={"Cart"} />
      ) : (
        <Box className="cart-list">
          <Box className="address-product">
            <Box>
              {Changeaddress ? (
                <Box className="change-address">
                  <Formik>
                    <Form onSubmit={AddLocality}>
                      <label>
                        CONTACT DETAILS*
                        <Input id="name" placeholder="Name" required />
                        <Input id="mobile" placeholder="Mobile No" required />
                      </label>
                      <label>
                        ADDRESS*
                        <Input id="pincode" placeholder="Pin Code" required />
                        <Input
                          id="address"
                          placeholder="Address(House No,Building,Street,Area)"
                          required
                        />
                        <Input id="locality" placeholder="Locality/Town" />
                        <Input id="district" placeholder="District" />{" "}
                        <Input id="state" placeholder="State" required />
                      </label>
                      <Button
                        variant={"solid"}
                        colorScheme="green"
                        type="submit"
                      >
                        ADD ADDRESS
                      </Button>
                    </Form>
                  </Formik>
                </Box>
              ) : null}
              <Box className="address-info">
                <Text>
                  Deliver to :{" "}
                  {pin_code == null
                    ? "address not found"
                    : Object.entries(pin_code).map(
                        ([, local]) => local.pincode
                      )}
                </Text>
                <Button
                  fontSize={12}
                  size={"sm"}
                  variant={"outline"}
                  colorScheme="red"
                  onClick={() => setchangeAddress(!Changeaddress)}
                >
                  CHANGE ADDRESS
                </Button>
              </Box>
              <Box className="available-offers">
                <Box>
                  <Image src="https://cdn-icons-png.flaticon.com/128/573/573682.png" />{" "}
                  Available Offers
                </Box>
                <Text>
                  10% Instant Discount on ICICI Bank Credit and Debit Cards on
                  min spend of ₹3,500 . TCA
                </Text>
                <Box>
                  Show More <IoIosArrowDown />
                </Box>
              </Box>
              <Box className="selected-item">
                <Box>
                  {" "}
                  <Checkbox
                    isChecked={itemCount == Object.entries(userCart).length}
                  />{" "}
                  {itemCount} / {Object.entries(userCart).length} ITEMS SELECTED
                </Box>
                <Box>REMOVE</Box>
                <Box>WHISHLIST</Box>
              </Box>
              <Box className="item-des">
                {Object.entries(userCart).map(([id, item]) => (
                  <Box className="cart-card" key={id}>
                    <Box>
                      <Image src={item.image} />
                      <Checkbox
                        className="select-item"
                        onChange={() => handleItems(event, item)}
                      />
                    </Box>
                    <Box>
                      <IoMdClose
                        cursor={"pointer"}
                        className="close-btn"
                        onClick={() => deleteItem(id)}
                      />
                      <Text as={"b"} fontSize={"15px"}>
                        {item.title}
                      </Text>
                      <Text>{item.description}</Text>
                      <Text as={"b"}>
                        {item.price}{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          {item.discountprice}
                        </span>
                      </Text>
                      <Box className="quantity">
                        <Select variant="filled" size={"sm"}>
                          <option value={28}>Size</option>
                          <option value={28}>28</option>
                          <option value={30}>30</option>
                          <option value={32}>32</option>
                          <option value={34}>34</option>
                          <option value={36}>36</option>
                        </Select>
                        <Select variant="filled" size={"sm"}>
                          <option>Qty</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </Select>
                      </Box>
                      <Text
                        fontSize={"12px"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={2}
                      >
                        <Image src="https://kconway.gallerycdn.vsassets.io/extensions/kconway/vscode-undo-buttons/1.1.1/1641422787208/Microsoft.VisualStudio.Services.Icons.Default" />
                        <span style={{ fontWeight: "bold" }}>14 days</span>
                        return available
                      </Text>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box
                className="add-to-wishlist"
                onClick={() => navigate("/wishlist")}
              >
                <Box>
                  <CiBookmark /> Add More From Wishlist
                </Box>
                <Box>
                  <FaAngleRight />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="order-placed">
            <Box className="coupon-card">
              <Text>COUPONS</Text>
              <Box>
                <Box>
                  <BsTag size={25} /> Apply Coupons
                </Box>
                <Box>APPLY</Box>
              </Box>
            </Box>
            <hr />
            <Box className="donation">
              <Text>SUPPORT TRASFORMATIVE SOCIAL WORK IN INDIA </Text>
              <Box className="donate">
                <Checkbox /> <Text>Donate Make Diffrence</Text>
              </Box>
              <Box>
                <Box>₹10</Box>
                <Box>₹20</Box>
                <Box>₹50</Box>
                <Box>₹100</Box>
              </Box>
              <Text marginTop={6} color={"rgb(255, 69, 113)"}>
                Know More
              </Text>
            </Box>
            <hr />
            <Box className="price-details">
              <Text>PRICE DETAILS({itemCount} Item)</Text>
              <Box>
                <Text>TOTAL MRP</Text>
                {0}
              </Box>
            </Box>
            <hr />
            <Box className="total-amount">
              <Box>
                <Text>Total Amount</Text>
                {0}
              </Box>
              <Box>PLACE ORDER</Box>
            </Box>
          </Box>
        </Box>
      )}
      <Footer />
    </>
  );
};

export default CartPage;
