import {
  Box,
  Image,
  Input,
  Modal,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { BsHandbag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../reduxFiles/actions";
import { LiaAngleRightSolid } from "react-icons/lia";

const Navbar = () => {
  const [toggleLink, setToggleLink] = useState(false);
  const navigate = useNavigate();
  const { onOpen } = useDisclosure();
  const [openModal, setOpenModal] = useState(null);
  const userInfo = useSelector((state) => state.users.user);
  const { isLogged, username } = userInfo;
  const userCart = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();

  const handleMouseEnter = (section) => {
    setOpenModal(section);
  };

  const handleMouseLeave = () => {
    setOpenModal(null);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("Auth");
    dispatch(logout());
  };

  return (
    <>
      <Box className="navbar">
        <Box className="logo" onClick={() => navigate("/")}>
          <Image src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" />
        </Box>
        <Box className="navigation">
          <Box
            borderBottom={
              openModal == "MEN" ? (onOpen ? "2px solid orange" : "none") : null
            }
            onMouseEnter={() => handleMouseEnter("MEN")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={"/mensapparel"}>MEN</Link>
            <Modal
              isOpen={openModal == "MEN"}
              onMouseEnter={openModal == "MEN" && onOpen}
              onMouseLeave={handleMouseLeave}
            >
              <Box className="men-section">
                <Box>
                  <Text color="orange" as={"b"}>
                    Topwear
                  </Text>
                  <Text>
                    <Link>T-Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Casual Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Formal Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Sweatshirts</Link>
                  </Text>
                  <Text>
                    <Link>Sweaters</Link>
                  </Text>
                  <Text>
                    <Link>Jackets</Link>
                  </Text>
                  <Text>
                    <Link>Blazers & Coats</Link>
                  </Text>
                  <Text>
                    <Link>Suits</Link>
                  </Text>
                  <Text>
                    <Link>Rain Jackets</Link>
                  </Text>
                  <hr />
                  <Text color="orange" as={"b"}>
                    Indian & Festive Wear
                  </Text>
                  <Text>
                    <Link>Kurtas & Kurta Sets</Link>
                  </Text>
                  <Text>
                    <Link>Sherwanis</Link>
                  </Text>
                  <Text>
                    <Link>Nehru Jackets</Link>
                  </Text>
                  <Text>
                    <Link>Dhotis</Link>
                  </Text>
                </Box>
                <Box>
                  <Text color="orange" as={"b"}>
                    Bottomwear
                  </Text>
                  <Text>
                    <Link>Jeans</Link>
                  </Text>
                  <Text>
                    <Link>Casual Trousers</Link>
                  </Text>
                  <Text>
                    <Link>Formal Trousers</Link>
                  </Text>
                  <Text>
                    <Link>Shorts</Link>
                  </Text>
                  <Text>
                    <Link>Track Pants & Joggers</Link>
                  </Text>
                  <hr />
                  <Text as={"b"} color="orange">
                    Innerwear & Sleepwear
                  </Text>
                  <Text>
                    <Link>Briefs & Trunks</Link>
                  </Text>
                  <Text>
                    <Link>Boxers</Link>
                  </Text>
                  <Text>
                    <Link>Vests</Link>
                  </Text>
                  <Text>
                    <Link>Sleepwear & Loungewear</Link>
                  </Text>
                  <Text>
                    <Link>Thermals</Link>
                  </Text>
                  <hr />
                  <Text color="orange" as={"b"}>
                    Plus Size
                  </Text>
                </Box>
                <Box>
                  <Text color="orange" as={"b"}>
                    Footwear
                  </Text>
                  <Text>
                    <Link>Casual Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sports Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Formal Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sneakers</Link>
                  </Text>
                  <Text>
                    <Link>Sandals & Floaters</Link>
                  </Text>
                  <Text>
                    <Link>Flip Flops</Link>
                  </Text>
                  <Text>
                    <Link>Socks</Link>
                  </Text>
                  <hr />
                  <Text color="orange" as={"b"}>
                    Personal Care & Grooming
                  </Text>
                  <hr />
                  <Text color="orange" as={"b"}>
                    Sunglasses & Frames
                  </Text>
                  <hr />
                  <Text color="orange" as={"b"}>
                    Watches
                  </Text>
                </Box>
                <Box>
                  <Text color="orange" as={"b"}>
                    Sports & Active Wear
                  </Text>
                  <Text>
                    <Link>Sports Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sports Sandals</Link>
                  </Text>
                  <Text>
                    <Link>Active T-Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Track Pants & Shorts</Link>
                  </Text>
                  <Text>
                    <Link>Tracksuits</Link>
                  </Text>
                  <Text>
                    <Link>Jackets & Sweatshirts</Link>
                  </Text>
                  <Text>
                    <Link>Sports Accessories</Link>
                  </Text>
                  <Text>
                    <Link>Swimwear</Link>
                  </Text>
                  <hr />
                  <Text color="orange" as={"b"}>
                    Gadgets
                  </Text>
                  <Text>
                    <Link>Smart Wearables</Link>
                  </Text>
                  <Text>
                    <Link>Fitness Gadgets</Link>
                  </Text>
                  <Text>
                    <Link>Headphones</Link>
                  </Text>
                  <Text>
                    <Link>Speakers</Link>
                  </Text>
                </Box>
                <Box>
                  <Text color="orange" as={"b"}>
                    Gadgets
                  </Text>
                  <Text>
                    <Link>Fashion Accessories</Link>
                  </Text>
                  <Text>
                    <Link>Wallets</Link>
                  </Text>
                  <Text>
                    <Link>Belts </Link>
                  </Text>
                  <Text>
                    <Link>Perfumes & Body Mists </Link>
                  </Text>
                  <Text>
                    <Link>Trimmers </Link>
                  </Text>
                  <Text>
                    <Link>Deodorants </Link>
                  </Text>
                  <Text>
                    <Link>Ties, Cufflinks & Pocket Squares </Link>
                  </Text>
                  <Text>
                    <Link>Accessory Gift Sets </Link>
                  </Text>
                  <Text>
                    <Link>Caps & Hats </Link>
                  </Text>
                  <Text>
                    <Link>Mufflers, Scarves & Gloves </Link>
                  </Text>
                  <Text>
                    <Link>Phone Cases </Link>
                  </Text>
                  <Text>
                    <Link>Rings & Wristwear </Link>
                  </Text>
                  <Text>
                    <Link>Helmets </Link>
                  </Text>
                  <hr />
                  <Text color="orange" as={"b"}>
                    Bags & Backpacks
                  </Text>
                  <hr />
                  <Text color="orange" as={"b"}>
                    Luggages & Trolleys
                  </Text>
                </Box>
              </Box>
            </Modal>
          </Box>
          <Box
            borderBottom={
              openModal == "WOMEN" && onOpen
                ? "2px solid rgb(255, 69, 113)"
                : "none"
            }
            onMouseEnter={() => handleMouseEnter("WOMEN")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={"/womensection"}>WOMEN</Link>
            <Modal
              isOpen={openModal == "WOMEN"}
              onMouseEnter={openModal == "WOMEN" && onOpen}
              onMouseLeave={handleMouseLeave}
            >
              <Box className="men-section">
                <Box>
                  <Text color="rgb(255, 69, 113)" as={"b"}>
                    Topwear
                  </Text>
                  <Text>
                    <Link>T-Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Casual Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Formal Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Sweatshirts</Link>
                  </Text>
                  <Text>
                    <Link>Sweaters</Link>
                  </Text>
                  <Text>
                    <Link>Jackets</Link>
                  </Text>
                  <Text>
                    <Link>Blazers & Coats</Link>
                  </Text>
                  <Text>
                    <Link>Suits</Link>
                  </Text>
                  <Text>
                    <Link>Rain Jackets</Link>
                  </Text>
                  <hr />
                  <Text color="rgb(255, 69, 113)" as={"b"}>
                    Indian & Festive Wear
                  </Text>
                  <Text>
                    <Link>Kurtas & Kurta Sets</Link>
                  </Text>
                  <Text>
                    <Link>Sherwanis</Link>
                  </Text>
                  <Text>
                    <Link>Nehru Jackets</Link>
                  </Text>
                  <Text>
                    <Link>Dhotis</Link>
                  </Text>
                </Box>
                <Box>
                  <Text color="rgb(255, 69, 113)" as={"b"}>
                    Bottomwear
                  </Text>
                  <Text>
                    <Link>Jeans</Link>
                  </Text>
                  <Text>
                    <Link>Casual Trousers</Link>
                  </Text>
                  <Text>
                    <Link>Formal Trousers</Link>
                  </Text>
                  <Text>
                    <Link>Shorts</Link>
                  </Text>
                  <Text>
                    <Link>Track Pants & Joggers</Link>
                  </Text>
                  <hr />
                  <Text as={"b"} color="rgb(255, 69, 113)">
                    Innerwear & Sleepwear
                  </Text>
                  <Text>
                    <Link>Briefs & Trunks</Link>
                  </Text>
                  <Text>
                    <Link>Boxers</Link>
                  </Text>
                  <Text>
                    <Link>Vests</Link>
                  </Text>
                  <Text>
                    <Link>Sleepwear & Loungewear</Link>
                  </Text>
                  <Text>
                    <Link>Thermals</Link>
                  </Text>
                  <hr />
                  <Text color="rgb(255, 69, 113)" as={"b"}>
                    Plus Size
                  </Text>
                </Box>
                <Box>
                  <Text color="rgb(255, 69, 113)" as={"b"}>
                    Footwear
                  </Text>
                  <Text>
                    <Link>Casual Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sports Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Formal Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sneakers</Link>
                  </Text>
                  <Text>
                    <Link>Sandals & Floaters</Link>
                  </Text>
                  <Text>
                    <Link>Flip Flops</Link>
                  </Text>
                  <Text>
                    <Link>Socks</Link>
                  </Text>
                  <hr />
                  <Text color="rgb(255, 69, 113)" as={"b"}>
                    Personal Care & Grooming
                  </Text>
                  <hr />
                  <Text color="rgb(255, 69, 113)" as={"b"}>
                    Sunglasses & Frames
                  </Text>
                  <hr />
                  <Text color="red" as={"b"}>
                    Watches
                  </Text>
                </Box>
                <Box>
                  <Text color="rgb(255, 69, 113)" as={"b"}>
                    Sports & Active Wear
                  </Text>
                  <Text>
                    <Link>Sports Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sports Sandals</Link>
                  </Text>
                  <Text>
                    <Link>Active T-Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Track Pants & Shorts</Link>
                  </Text>
                  <Text>
                    <Link>Tracksuits</Link>
                  </Text>
                  <Text>
                    <Link>Jackets & Sweatshirts</Link>
                  </Text>
                  <Text>
                    <Link>Sports Accessories</Link>
                  </Text>
                  <Text>
                    <Link>Swimwear</Link>
                  </Text>
                  <hr />
                  <Text color="rgb(255, 69, 113)" as={"b"}>
                    Gadgets
                  </Text>
                  <Text>
                    <Link>Smart Wearables</Link>
                  </Text>
                  <Text>
                    <Link>Fitness Gadgets</Link>
                  </Text>
                  <Text>
                    <Link>Headphones</Link>
                  </Text>
                  <Text>
                    <Link>Speakers</Link>
                  </Text>
                </Box>
                <Box>
                  <Text color="rgb(255, 69, 113)" as={"b"}>
                    Gadgets
                  </Text>
                  <Text>
                    <Link>Fashion Accessories</Link>
                  </Text>
                  <Text>
                    <Link>Wallets</Link>
                  </Text>
                  <Text>
                    <Link>Belts </Link>
                  </Text>
                  <Text>
                    <Link>Perfumes & Body Mists </Link>
                  </Text>
                  <Text>
                    <Link>Trimmers </Link>
                  </Text>
                  <Text>
                    <Link>Deodorants </Link>
                  </Text>
                  <Text>
                    <Link>Ties, Cufflinks & Pocket Squares </Link>
                  </Text>
                  <Text>
                    <Link>Accessory Gift Sets </Link>
                  </Text>
                  <Text>
                    <Link>Caps & Hats </Link>
                  </Text>
                  <Text>
                    <Link>Mufflers, Scarves & Gloves </Link>
                  </Text>
                  <Text>
                    <Link>Phone Cases </Link>
                  </Text>
                  <Text>
                    <Link>Rings & Wristwear </Link>
                  </Text>
                  <Text>
                    <Link>Helmets </Link>
                  </Text>
                  <hr />
                  <Text color="rgb(255, 69, 113)" as={"b"}>
                    Bags & Backpacks
                  </Text>
                  <hr />
                  <Text color="rgb(255, 69, 113)" as={"b"}>
                    Luggages & Trolleys
                  </Text>
                </Box>
              </Box>
            </Modal>
          </Box>
          <Box
            borderBottom={
              openModal == "KIDS" ? (onOpen ? "2px solid brown" : "none") : null
            }
            onMouseEnter={() => handleMouseEnter("KIDS")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={"kidsection"}>KIDS</Link>
            <Modal
              isOpen={openModal == "KIDS"}
              onMouseEnter={openModal == "KIDS" && onOpen}
              onMouseLeave={handleMouseLeave}
            >
              <Box className="men-section">
                <Box>
                  <Text color="brown" as={"b"}>
                    Topwear
                  </Text>
                  <Text>
                    <Link>T-Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Casual Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Formal Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Sweatshirts</Link>
                  </Text>
                  <Text>
                    <Link>Sweaters</Link>
                  </Text>
                  <Text>
                    <Link>Jackets</Link>
                  </Text>
                  <Text>
                    <Link>Blazers & Coats</Link>
                  </Text>
                  <Text>
                    <Link>Suits</Link>
                  </Text>
                  <Text>
                    <Link>Rain Jackets</Link>
                  </Text>
                  <hr />
                  <Text color="brown" as={"b"}>
                    Indian & Festive Wear
                  </Text>
                  <Text>
                    <Link>Kurtas & Kurta Sets</Link>
                  </Text>
                  <Text>
                    <Link>Sherwanis</Link>
                  </Text>
                  <Text>
                    <Link>Nehru Jackets</Link>
                  </Text>
                  <Text>
                    <Link>Dhotis</Link>
                  </Text>
                </Box>
                <Box>
                  <Text color="brown" as={"b"}>
                    Bottomwear
                  </Text>
                  <Text>
                    <Link>Jeans</Link>
                  </Text>
                  <Text>
                    <Link>Casual Trousers</Link>
                  </Text>
                  <Text>
                    <Link>Formal Trousers</Link>
                  </Text>
                  <Text>
                    <Link>Shorts</Link>
                  </Text>
                  <Text>
                    <Link>Track Pants & Joggers</Link>
                  </Text>
                  <hr />
                  <Text as={"b"} color="brown">
                    Innerwear & Sleepwear
                  </Text>
                  <Text>
                    <Link>Briefs & Trunks</Link>
                  </Text>
                  <Text>
                    <Link>Boxers</Link>
                  </Text>
                  <Text>
                    <Link>Vests</Link>
                  </Text>
                  <Text>
                    <Link>Sleepwear & Loungewear</Link>
                  </Text>
                  <Text>
                    <Link>Thermals</Link>
                  </Text>
                  <hr />
                  <Text color="brown" as={"b"}>
                    Plus Size
                  </Text>
                </Box>
                <Box>
                  <Text color="brown" as={"b"}>
                    Footwear
                  </Text>
                  <Text>
                    <Link>Casual Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sports Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Formal Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sneakers</Link>
                  </Text>
                  <Text>
                    <Link>Sandals & Floaters</Link>
                  </Text>
                  <Text>
                    <Link>Flip Flops</Link>
                  </Text>
                  <Text>
                    <Link>Socks</Link>
                  </Text>
                  <hr />
                  <Text color="brown" as={"b"}>
                    Personal Care & Grooming
                  </Text>
                  <hr />
                  <Text color="brown" as={"b"}>
                    Sunglasses & Frames
                  </Text>
                  <hr />
                  <Text color="brown" as={"b"}>
                    Watches
                  </Text>
                </Box>
                <Box>
                  <Text color="brown" as={"b"}>
                    Sports & Active Wear
                  </Text>
                  <Text>
                    <Link>Sports Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sports Sandals</Link>
                  </Text>
                  <Text>
                    <Link>Active T-Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Track Pants & Shorts</Link>
                  </Text>
                  <Text>
                    <Link>Tracksuits</Link>
                  </Text>
                  <Text>
                    <Link>Jackets & Sweatshirts</Link>
                  </Text>
                  <Text>
                    <Link>Sports Accessories</Link>
                  </Text>
                  <Text>
                    <Link>Swimwear</Link>
                  </Text>
                  <hr />
                  <Text color="brown" as={"b"}>
                    Gadgets
                  </Text>
                  <Text>
                    <Link>Smart Wearables</Link>
                  </Text>
                  <Text>
                    <Link>Fitness Gadgets</Link>
                  </Text>
                  <Text>
                    <Link>Headphones</Link>
                  </Text>
                  <Text>
                    <Link>Speakers</Link>
                  </Text>
                </Box>
                <Box>
                  <Text color="brown" as={"b"}>
                    Gadgets
                  </Text>
                  <Text>
                    <Link>Fashion Accessories</Link>
                  </Text>
                  <Text>
                    <Link>Wallets</Link>
                  </Text>
                  <Text>
                    <Link>Belts </Link>
                  </Text>
                  <Text>
                    <Link>Perfumes & Body Mists </Link>
                  </Text>
                  <Text>
                    <Link>Trimmers </Link>
                  </Text>
                  <Text>
                    <Link>Deodorants </Link>
                  </Text>
                  <Text>
                    <Link>Ties, Cufflinks & Pocket Squares </Link>
                  </Text>
                  <Text>
                    <Link>Accessory Gift Sets </Link>
                  </Text>
                  <Text>
                    <Link>Caps & Hats </Link>
                  </Text>
                  <Text>
                    <Link>Mufflers, Scarves & Gloves </Link>
                  </Text>
                  <Text>
                    <Link>Phone Cases </Link>
                  </Text>
                  <Text>
                    <Link>Rings & Wristwear </Link>
                  </Text>
                  <Text>
                    <Link>Helmets </Link>
                  </Text>
                  <hr />
                  <Text color="brown" as={"b"}>
                    Bags & Backpacks
                  </Text>
                  <hr />
                  <Text color="brown" as={"b"}>
                    Luggages & Trolleys
                  </Text>
                </Box>
              </Box>
            </Modal>
          </Box>
          <Box
            borderBottom={
              openModal == "HOME" ? (onOpen ? "2px solid gold" : "none") : null
            }
            onMouseEnter={() => handleMouseEnter("HOME")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={"/homeliving"}>HOME & LIVING</Link>
            <Modal
              isOpen={openModal == "HOME"}
              onMouseEnter={openModal == "HOME" && onOpen}
              onMouseLeave={handleMouseLeave}
            >
              <Box className="men-section">
                <Box>
                  <Text color="gold" as={"b"}>
                    Topwear
                  </Text>
                  <Text>
                    <Link>T-Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Casual Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Formal Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Sweatshirts</Link>
                  </Text>
                  <Text>
                    <Link>Sweaters</Link>
                  </Text>
                  <Text>
                    <Link>Jackets</Link>
                  </Text>
                  <Text>
                    <Link>Blazers & Coats</Link>
                  </Text>
                  <Text>
                    <Link>Suits</Link>
                  </Text>
                  <Text>
                    <Link>Rain Jackets</Link>
                  </Text>
                  <hr />
                  <Text color="gold" as={"b"}>
                    Indian & Festive Wear
                  </Text>
                  <Text>
                    <Link>Kurtas & Kurta Sets</Link>
                  </Text>
                  <Text>
                    <Link>Sherwanis</Link>
                  </Text>
                  <Text>
                    <Link>Nehru Jackets</Link>
                  </Text>
                  <Text>
                    <Link>Dhotis</Link>
                  </Text>
                </Box>
                <Box>
                  <Text color="gold" as={"b"}>
                    Bottomwear
                  </Text>
                  <Text>
                    <Link>Jeans</Link>
                  </Text>
                  <Text>
                    <Link>Casual Trousers</Link>
                  </Text>
                  <Text>
                    <Link>Formal Trousers</Link>
                  </Text>
                  <Text>
                    <Link>Shorts</Link>
                  </Text>
                  <Text>
                    <Link>Track Pants & Joggers</Link>
                  </Text>
                  <hr />
                  <Text as={"b"} color="gold">
                    Innerwear & Sleepwear
                  </Text>
                  <Text>
                    <Link>Briefs & Trunks</Link>
                  </Text>
                  <Text>
                    <Link>Boxers</Link>
                  </Text>
                  <Text>
                    <Link>Vests</Link>
                  </Text>
                  <Text>
                    <Link>Sleepwear & Loungewear</Link>
                  </Text>
                  <Text>
                    <Link>Thermals</Link>
                  </Text>
                  <hr />
                  <Text color="gold" as={"b"}>
                    Plus Size
                  </Text>
                </Box>
                <Box>
                  <Text color="gold" as={"b"}>
                    Footwear
                  </Text>
                  <Text>
                    <Link>Casual Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sports Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Formal Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sneakers</Link>
                  </Text>
                  <Text>
                    <Link>Sandals & Floaters</Link>
                  </Text>
                  <Text>
                    <Link>Flip Flops</Link>
                  </Text>
                  <Text>
                    <Link>Socks</Link>
                  </Text>
                  <hr />
                  <Text color="gold" as={"b"}>
                    Personal Care & Grooming
                  </Text>
                  <hr />
                  <Text color="gold" as={"b"}>
                    Sunglasses & Frames
                  </Text>
                  <hr />
                  <Text color="gold" as={"b"}>
                    Watches
                  </Text>
                </Box>
                <Box>
                  <Text color="gold" as={"b"}>
                    Sports & Active Wear
                  </Text>
                  <Text>
                    <Link>Sports Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sports Sandals</Link>
                  </Text>
                  <Text>
                    <Link>Active T-Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Track Pants & Shorts</Link>
                  </Text>
                  <Text>
                    <Link>Tracksuits</Link>
                  </Text>
                  <Text>
                    <Link>Jackets & Sweatshirts</Link>
                  </Text>
                  <Text>
                    <Link>Sports Accessories</Link>
                  </Text>
                  <Text>
                    <Link>Swimwear</Link>
                  </Text>
                  <hr />
                  <Text color="gold" as={"b"}>
                    Gadgets
                  </Text>
                  <Text>
                    <Link>Smart Wearables</Link>
                  </Text>
                  <Text>
                    <Link>Fitness Gadgets</Link>
                  </Text>
                  <Text>
                    <Link>Headphones</Link>
                  </Text>
                  <Text>
                    <Link>Speakers</Link>
                  </Text>
                </Box>
                <Box>
                  <Text color="gold" as={"b"}>
                    Gadgets
                  </Text>
                  <Text>
                    <Link>Fashion Accessories</Link>
                  </Text>
                  <Text>
                    <Link>Wallets</Link>
                  </Text>
                  <Text>
                    <Link>Belts </Link>
                  </Text>
                  <Text>
                    <Link>Perfumes & Body Mists </Link>
                  </Text>
                  <Text>
                    <Link>Trimmers </Link>
                  </Text>
                  <Text>
                    <Link>Deodorants </Link>
                  </Text>
                  <Text>
                    <Link>Ties, Cufflinks & Pocket Squares </Link>
                  </Text>
                  <Text>
                    <Link>Accessory Gift Sets </Link>
                  </Text>
                  <Text>
                    <Link>Caps & Hats </Link>
                  </Text>
                  <Text>
                    <Link>Mufflers, Scarves & Gloves </Link>
                  </Text>
                  <Text>
                    <Link>Phone Cases </Link>
                  </Text>
                  <Text>
                    <Link>Rings & Wristwear </Link>
                  </Text>
                  <Text>
                    <Link>Helmets </Link>
                  </Text>
                  <hr />
                  <Text color="gold" as={"b"}>
                    Bags & Backpacks
                  </Text>
                  <hr />
                  <Text color="gold" as={"b"}>
                    Luggages & Trolleys
                  </Text>
                </Box>
              </Box>
            </Modal>
          </Box>
          <Box
            borderBottom={
              openModal == "BEAUTY"
                ? onOpen
                  ? "2px solid lightseagreen"
                  : "none"
                : null
            }
            onMouseEnter={() => handleMouseEnter("BEAUTY")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={"/beauty"}>BEAUTY</Link>
            <Modal
              isOpen={openModal == "BEAUTY"}
              onMouseEnter={openModal == "BEAUTY" && onOpen}
              onMouseLeave={handleMouseLeave}
            >
              <Box className="men-section">
                <Box>
                  <Text color="lightseagreen" as={"b"}>
                    Topwear
                  </Text>
                  <Text>
                    <Link>T-Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Casual Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Formal Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Sweatshirts</Link>
                  </Text>
                  <Text>
                    <Link>Sweaters</Link>
                  </Text>
                  <Text>
                    <Link>Jackets</Link>
                  </Text>
                  <Text>
                    <Link>Blazers & Coats</Link>
                  </Text>
                  <Text>
                    <Link>Suits</Link>
                  </Text>
                  <Text>
                    <Link>Rain Jackets</Link>
                  </Text>
                  <hr />
                  <Text color="lightseagreen" as={"b"}>
                    Indian & Festive Wear
                  </Text>
                  <Text>
                    <Link>Kurtas & Kurta Sets</Link>
                  </Text>
                  <Text>
                    <Link>Sherwanis</Link>
                  </Text>
                  <Text>
                    <Link>Nehru Jackets</Link>
                  </Text>
                  <Text>
                    <Link>Dhotis</Link>
                  </Text>
                </Box>
                <Box>
                  <Text color="lightseagreen" as={"b"}>
                    Bottomwear
                  </Text>
                  <Text>
                    <Link>Jeans</Link>
                  </Text>
                  <Text>
                    <Link>Casual Trousers</Link>
                  </Text>
                  <Text>
                    <Link>Formal Trousers</Link>
                  </Text>
                  <Text>
                    <Link>Shorts</Link>
                  </Text>
                  <Text>
                    <Link>Track Pants & Joggers</Link>
                  </Text>
                  <hr />
                  <Text as={"b"} color="lightseagreen">
                    Innerwear & Sleepwear
                  </Text>
                  <Text>
                    <Link>Briefs & Trunks</Link>
                  </Text>
                  <Text>
                    <Link>Boxers</Link>
                  </Text>
                  <Text>
                    <Link>Vests</Link>
                  </Text>
                  <Text>
                    <Link>Sleepwear & Loungewear</Link>
                  </Text>
                  <Text>
                    <Link>Thermals</Link>
                  </Text>
                  <hr />
                  <Text color="lightseagreen" as={"b"}>
                    Plus Size
                  </Text>
                </Box>
                <Box>
                  <Text color="lightseagreen" as={"b"}>
                    Footwear
                  </Text>
                  <Text>
                    <Link>Casual Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sports Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Formal Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sneakers</Link>
                  </Text>
                  <Text>
                    <Link>Sandals & Floaters</Link>
                  </Text>
                  <Text>
                    <Link>Flip Flops</Link>
                  </Text>
                  <Text>
                    <Link>Socks</Link>
                  </Text>
                  <hr />
                  <Text color="lightseagreen" as={"b"}>
                    Personal Care & Grooming
                  </Text>
                  <hr />
                  <Text color="lightseagreen" as={"b"}>
                    Sunglasses & Frames
                  </Text>
                  <hr />
                  <Text color="lightseagreen" as={"b"}>
                    Watches
                  </Text>
                </Box>
                <Box>
                  <Text color="lightseagreen" as={"b"}>
                    Sports & Active Wear
                  </Text>
                  <Text>
                    <Link>Sports Shoes</Link>
                  </Text>
                  <Text>
                    <Link>Sports Sandals</Link>
                  </Text>
                  <Text>
                    <Link>Active T-Shirts</Link>
                  </Text>
                  <Text>
                    <Link>Track Pants & Shorts</Link>
                  </Text>
                  <Text>
                    <Link>Tracksuits</Link>
                  </Text>
                  <Text>
                    <Link>Jackets & Sweatshirts</Link>
                  </Text>
                  <Text>
                    <Link>Sports Accessories</Link>
                  </Text>
                  <Text>
                    <Link>Swimwear</Link>
                  </Text>
                  <hr />
                  <Text color="lightseagreen" as={"b"}>
                    Gadgets
                  </Text>
                  <Text>
                    <Link>Smart Wearables</Link>
                  </Text>
                  <Text>
                    <Link>Fitness Gadgets</Link>
                  </Text>
                  <Text>
                    <Link>Headphones</Link>
                  </Text>
                  <Text>
                    <Link>Speakers</Link>
                  </Text>
                </Box>
                <Box>
                  <Text color="lightseagreen" as={"b"}>
                    Gadgets
                  </Text>
                  <Text>
                    <Link>Fashion Accessories</Link>
                  </Text>
                  <Text>
                    <Link>Wallets</Link>
                  </Text>
                  <Text>
                    <Link>Belts </Link>
                  </Text>
                  <Text>
                    <Link>Perfumes & Body Mists </Link>
                  </Text>
                  <Text>
                    <Link>Trimmers </Link>
                  </Text>
                  <Text>
                    <Link>Deodorants </Link>
                  </Text>
                  <Text>
                    <Link>Ties, Cufflinks & Pocket Squares </Link>
                  </Text>
                  <Text>
                    <Link>Accessory Gift Sets </Link>
                  </Text>
                  <Text>
                    <Link>Caps & Hats </Link>
                  </Text>
                  <Text>
                    <Link>Mufflers, Scarves & Gloves </Link>
                  </Text>
                  <Text>
                    <Link>Phone Cases </Link>
                  </Text>
                  <Text>
                    <Link>Rings & Wristwear </Link>
                  </Text>
                  <Text>
                    <Link>Helmets </Link>
                  </Text>
                  <hr />
                  <Text color="lightseagreen" as={"b"}>
                    Bags & Backpacks
                  </Text>
                  <hr />
                  <Text color="lightseagreen" as={"b"}>
                    Luggages & Trolleys
                  </Text>
                </Box>
              </Box>
            </Modal>
          </Box>
          <Box
            borderBottom={
              openModal == "STUDIO" ? (onOpen ? "2px solid red" : "none") : null
            }
            onMouseEnter={() => handleMouseEnter("STUDIO")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={"/studio"}>STUDIO</Link>
            <span className="tag">NEW</span>
            <Modal
              isOpen={openModal == "STUDIO"}
              onMouseEnter={openModal == "STUDIO" && onOpen}
              onMouseLeave={handleMouseLeave}
            >
              <Box className="studio-section">
                <VStack spacing={4}>
                  <Image
                    width={"10vw"}
                    height={"8vh"}
                    src="https://seeklogo.com/images/M/myntra-studio-logo-CF59389C0F-seeklogo.com.png"
                  />
                  <Text size={"small"}>
                    Your daily inspiration for everything fashion
                  </Text>
                  <Image
                    width={"40vw"}
                    src="https://i.ibb.co/XjDk0WQ/Screenshot-2024-09-30-151541.png"
                  />
                  <Box className="explore-studio">
                    EXPLORE STUDIO <LiaAngleRightSolid />
                  </Box>
                </VStack>
              </Box>
            </Modal>
          </Box>
        </Box>
        <Box className="search-bar">
          <IoIosSearch size={20} />
          <Input
            variant="unstyled"
            placeholder="Search for products,brand and more"
          />
        </Box>
        <Box className="utility">
          <Box
            onMouseEnter={() => setToggleLink(true)}
            onMouseLeave={() => setToggleLink(false)}
          >
            <FaRegUser size={15} style={{ margin: "auto" }} />
            <Text>profile</Text>
            <Box
              onMouseEnter={() => setToggleLink(true)}
              onMouseLeave={() => setToggleLink(false)}
              display={toggleLink == false && "none"}
              className="modal"
            >
              <Box className="modal-content">
                {isLogged ? (
                  <Text>Hello {username}</Text>
                ) : (
                  <>
                    <Text marginBottom={2}>Welcome</Text>
                    <Text as={"small"} color={"gray"}>
                      To access account and manage orders
                    </Text>
                    <Box
                      onClick={() => navigate("/login")}
                      className="login-signup"
                    >
                      LOGIN/SIGNUP
                    </Box>
                  </>
                )}
                <hr />

                <Link>Orders </Link>
                <br />

                <Link>Wishlist </Link>
                <br />

                <Link>Gift Cards </Link>
                <br />

                <Link>Contact Us </Link>
                <br />

                <Link>Myntra InsiderNew </Link>
                <br />

                <hr />

                <Link>Myntra Credit </Link>
                <br />

                <Link>Coupons </Link>
                <br />

                <Link>Saved Cards </Link>
                <br />

                <Link>Saved VPA </Link>
                <br />

                <Link>Saved Addresses </Link>
                <br />
                {isLogged && (
                  <>
                    <Link onClick={handleLogout}>Logout</Link>
                    <br />
                    <Link to={"/editprofile"}>Edit Profile</Link>
                  </>
                )}
              </Box>
            </Box>
          </Box>
          <Box onClick={() => navigate("/wishlist")}>
            <GrFavorite size={15} style={{ margin: "auto" }} />
            <Text>wishlist</Text>
          </Box>
          <Box onClick={() => navigate("/cart")}>
            <BsHandbag size={15} style={{ margin: "auto" }} />
            <Text>bag</Text>
            {isLogged && (
              <span className="cartCount">
                <p>{userCart == null ? 0 : Object.entries(userCart).length}</p>
              </span>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
