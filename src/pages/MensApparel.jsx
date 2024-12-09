import { Box, Checkbox, Image, Input, Radio, Text } from "@chakra-ui/react";
import "./MensApparel.css";
import { TfiAngleDown } from "react-icons/tfi";
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, loading } from "../reduxFiles/actions";
import LoadingIndicator from "../Indicators/LoadingIndicator";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const MensApparel = () => {
  const [cataActive, setCataActive] = useState({});
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.products);
  const authCheck = useSelector((state) => state.users.user.isLogged);
  const user_id = useSelector((state) => state.users.user.userId);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const navigate = useNavigate();
  const [openSearch, setOpenSearch] = useState(null);

  const handleOpen = (section) => {
    setOpenSearch(section);
  };

  const handleClose = () => {
    setOpenSearch(null);
  };

  const FetchActiveCategory = async () => {
    dispatch(loading(true));
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/node1/brand.json`
      );
      if (res.status == 200) {
        dispatch(loading(false));
        setCataActive(res.data);
      }
    } catch (error) {
      console.log(error);
      dispatch(loading(false));
    } finally {
      dispatch(loading(false));
    }
  };

  const FetchProducts = async () => {
    dispatch(loading(true));
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products/mensApparel.json`
      );
      if (res.status == 200) {
        dispatch(loading(false));
        dispatch(getProduct(res.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(loading(false));
    }
  };

  const handleWishlist = async (id, item) => {
    let product = {
      title: item.title,
      description: item.description,
      price: item.price,
      image: item.image,
      size: item.sizes,
      discountprice: item.discountprice,
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
        data: product,
      });
      if (res.status == 200) {
        alert("product added to wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchActiveCategory();
    FetchProducts();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <Box className="mens-apparel">
        <Box>
          <Box>
            <Text marginBottom={5}>
              Home / Clothing / <Text as={"b"}>Mens Apparel</Text>
            </Text>
            <Text marginBottom={5}>
              <Text as={"b"}>Mens Apparel</Text> - 40 items
            </Text>
          </Box>
          <Box className="filter-section">
            <Box>
              <Text as={"b"}>FILTERS</Text>
              <Text as={"b"} fontSize={"12px"} color={"rgb(255, 69, 113)"}>
                CLEAR ALL
              </Text>
            </Box>
            <Box className="bundles">
              <Box>
                Bundles <TfiAngleDown />
              </Box>
              <Box>
                Country Of Origin <TfiAngleDown />
              </Box>
              <Box>
                Size <TfiAngleDown />
              </Box>
            </Box>
            <Box className="sorting">
              Sort by : <Text as={"b"}>Recommended</Text>
              <TfiAngleDown />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box className="category-sidebar"></Box>
        <Box className="content-side">
          <Box className="category-product">
            <Box className="categories">
              {openSearch == "CATEGORY" ? (
                <Box>
                  <Input
                    size={"sm"}
                    backgroundColor={"whitesmoke"}
                    placeholder="Search for Categories"
                    borderRadius={15}
                    p={3}
                  />
                  <IoIosClose
                    onClick={handleClose}
                    size={25}
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "lightgray",
                      padding: "2px",
                    }}
                  />
                </Box>
              ) : (
                <Box>
                  <Text fontSize={13} as={"b"}>
                    CATEGORIES
                  </Text>
                  <IoIosSearch
                    onClick={() => handleOpen("CATEGORY")}
                    size={25}
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "lightgray",
                      padding: "2px",
                    }}
                  />
                </Box>
              )}
              <Box>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <p>Shirts(6738)</p>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <p>Tshirts(4473)</p>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <p>Sweatshirts(1807)</p>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  <p> Jeans(1353)</p>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <p>Jackets(1190)</p>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <p>Trousers(555)</p>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <p>Shorts(520)</p>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  <p>Track Pants(495)</p>
                </Checkbox>
                <Text marginTop={2} color={"rgb(255, 69, 113)"}>
                  + 17 more
                </Text>
              </Box>
            </Box>
            <Box className="brand">
              {openSearch == "BRAND" ? (
                <Box>
                  <Input
                    size={"sm"}
                    backgroundColor={"whitesmoke"}
                    placeholder="Search for Brands"
                    borderRadius={15}
                    p={3}
                  />
                  <IoIosClose
                    onClick={handleClose}
                    size={25}
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "lightgray",
                      padding: "2px",
                    }}
                  />
                </Box>
              ) : (
                <Box>
                  <Text fontSize={13} as={"b"}>
                    BRAND
                  </Text>
                  <IoIosSearch
                    onClick={() => handleOpen("BRAND")}
                    size={25}
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "lightgray",
                      padding: "2px",
                    }}
                  />
                </Box>
              )}
              <Box>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <p>Roadster(5143)</p>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <p>HIGHLANDER(3349)</p>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <p>HRX by Hrithik Roshan(2684)</p>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <p>VIMAL JONNEY(2404)</p>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <p>The Indian Garage Co(2370)</p>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <p>Mast & Harbour(1964)</p>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <p>Campus Sutra(1899)</p>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <p>Being Human(1861)</p>
                </Checkbox>
                <Text marginTop={2} color={"rgb(255, 69, 113)"}>
                  + 482 more
                </Text>
              </Box>
            </Box>
            <Box className="price">
              <Text fontSize={13} as={"b"}>
                PRICE
              </Text>
              <Box>
                <Image src={"https://i.ibb.co/Wn0LkVC/range-bar.png"} />
              </Box>
              <Text>₹100 - ₹1,600+</Text>
            </Box>
            <Box className="color">
              {openSearch == "COLOR" ? (
                <Box>
                  <Input
                    size={"sm"}
                    backgroundColor={"whitesmoke"}
                    placeholder="Search for Color"
                    borderRadius={15}
                    p={3}
                  />
                  <IoIosClose
                    onClick={handleClose}
                    size={25}
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "lightgray",
                      padding: "2px",
                    }}
                  />
                </Box>
              ) : (
                <Box>
                  <Text fontSize={13} as={"b"}>
                    COLOR
                  </Text>
                  <IoIosSearch
                    onClick={() => handleOpen("COLOR")}
                    size={25}
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "lightgray",
                      padding: "2px",
                    }}
                  />
                </Box>
              )}
              <Box>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <Box className="color-box">
                    <Box className="blue"></Box>
                    <p>Blue (3226)</p>
                  </Box>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <Box className="color-box">
                    <Box className="black"></Box>
                    <p>Black (2414)</p>
                  </Box>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <Box className="color-box">
                    <Box className="white"></Box>
                    <p>White (1702)</p>
                  </Box>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <Box className="color-box">
                    <Box className="navy"></Box>
                    <p>Navy Blue (1484)</p>
                  </Box>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <Box className="color-box">
                    <Box className="green"></Box>
                    <p>Green (1308)</p>
                  </Box>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <Box className="color-box">
                    <Box className="grey"></Box>
                    <p>Grey (1305)</p>
                  </Box>
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  {" "}
                  <Box className="color-box">
                    <Box className="beige"></Box>
                    <p>Beige (576)</p>
                  </Box>
                </Checkbox>
                <Text marginTop={2} color={"rgb(255, 69, 113)"}>
                  + 35 more
                </Text>
              </Box>
            </Box>
            <Box className="discount-range">
              <Text as={"b"} fontSize={"13px"}>
                DISCOUNT RANGE
              </Text>
              <Box>
                <Radio marginTop={2} colorScheme="pink">
                  {" "}
                  <p>10% and above</p>
                </Radio>
                <Radio colorScheme="pink">
                  {" "}
                  <p>20% and above</p>
                </Radio>
                <Radio colorScheme="pink">
                  {" "}
                  <p>30% and above</p>
                </Radio>
                <Radio colorScheme="pink">
                  {" "}
                  <p>40% and above</p>
                </Radio>
                <Radio colorScheme="pink">
                  {" "}
                  <p>50% and above</p>
                </Radio>
                <Radio colorScheme="pink">
                  {" "}
                  <p>60% and above</p>
                </Radio>
                <Radio colorScheme="pink">
                  {" "}
                  <p>70% and above</p>
                </Radio>
                <Radio colorScheme="pink">
                  {" "}
                  <p>80% and above</p>
                </Radio>
              </Box>
            </Box>
          </Box>
          <Box flexWrap={"nowrap"}>
            <Box className="active-category">
              {Object.entries(cataActive).map(([id, names]) => (
                <Box key={id}>
                  {names.brand} <IoIosClose size={22} cursor={"pointer"} />
                </Box>
              ))}
            </Box>
            <Box className="product-content">
              {Object.entries(data).map(([id, item]) => (
                <Box className="product-card" key={id}>
                  <Image src={item.image} />
                  <Box
                    cursor={"pointer"}
                    onClick={() => navigate(`product/${id}`)}
                  >
                    <Text as={"b"} fontSize={"15px"}>
                      {item.title}
                    </Text>
                    <Text>{item.description}</Text>
                    <Text as={"b"}>Rs. {item.price}</Text>
                  </Box>
                  <Box
                    cursor={"pointer"}
                    onClick={() => handleWishlist(id, item)}
                  >
                    <CiHeart size={22} />
                    WISHLIST
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MensApparel;
