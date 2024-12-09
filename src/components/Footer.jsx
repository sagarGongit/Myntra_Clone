import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Box className="footer">
        <Box className="layer1">
          <Box>
            <Text as={"b"}>ONLINE SHOPPING</Text>
            <Text>Men</Text>
            <Text>Women</Text>
            <Text>Kids</Text>
            <Text>Home & Living</Text>
            <Text>Beauty</Text>
            <Text>Gift Cards</Text>
            <Text>Myntra Insider</Text>
          </Box>
          <Box>
            <Text as={"b"}>CUSTOMER POLICIES</Text>
            <Text>Contact Us</Text>
            <Text>FAQ</Text>
            <Text>T&C</Text>
            <Text>Terms Of Use</Text>
            <Text>Track Orders</Text>
            <Text>Shipping</Text>
            <Text>Cancellation</Text>
            <Text>Returns</Text>
            <Text>Privacy policy</Text>
            <Text>Grievance Officer</Text>
          </Box>
          <Box className="experience-myntra">
            <VStack spacing={5}>
              <Text as={"b"}>EXPERIENCE MYNTRA APP ON MOBILE</Text>
              <Box>
                <Image src="https://banner2.cleanpng.com/20180719/yx/7c4457ad97426235ec984fe54df2adf5.webp" />
                <Image src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png" />
              </Box>
              <Text as={"b"}>KEEP IN TOUCH</Text>
              <Box>
                <FaFacebook size={40} />
                <AiFillInstagram size={40} />
                <FaTwitter size={40} />
                <IoLogoYoutube size={40} />
              </Box>
            </VStack>
          </Box>
          <Box className="trust-policy">
            <Box>
              <Image src="https://seeklogo.com/images/O/original-logo-27CB108DCF-seeklogo.com.png" />
              <Text>
                <span style={{ fontWeight: "bolder" }}>100% ORIGINAL</span>{" "}
                guarantee for all products at myntra.com
              </Text>
            </Box>
            <Box>
              <Image src="https://st2.depositphotos.com/1915171/5331/v/950/depositphotos_53311091-stock-illustration-return-of-goods-within-14.jpg" />
              <Text>
                <span style={{ fontWeight: "bolder" }}>
                  Return within 14days
                </span>{" "}
                of receiving your order
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
