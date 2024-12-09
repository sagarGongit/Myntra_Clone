import { Box, Spinner } from "@chakra-ui/react";
import "./LoadingIndicator.css";

const LoadingIndicator = () => {
  return (
    <Box className="loader">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="orange.500"
        size="md"
      />
    </Box>
  );
};

export default LoadingIndicator;
