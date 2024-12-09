import { Box } from "@chakra-ui/react";
import "./MensFootware.css";
import CountDown from "../components/CountDown";

const MensFootware = () => {
  return (
    <>
      <CountDown />
      <Box className="mensfootware">Mens Footware</Box>
    </>
  );
};

export default MensFootware;
