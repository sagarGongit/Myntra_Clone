import { Box, Heading, Image } from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import "./Unathorized.css";

const Unathorized = () => {
  return (
    <>
      <Box className="unathorized">
        <Box>
          <Image
            width={"55vw"}
            height={"50vh"}
            src="https://i.gifer.com/XZ9.gif"
          />
          <Heading>
            Seems Like You Are Not Login Click <Link to={"/login"}>Here</Link>
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default Unathorized;
