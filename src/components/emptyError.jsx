import { Box, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./emptyError.css";

// eslint-disable-next-line react/prop-types
const EmptyError = ({ value }) => {
  return (
    <>
      <Box className="empty-error">
        <Box>
          <Image
            width={"55vw"}
            height={"50vh"}
            src="https://i.gifer.com/XZ9.gif"
          />
          <Heading>
            Your {value} is Empty Click <Link to={"/"}>Here</Link> To Add
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default EmptyError;
