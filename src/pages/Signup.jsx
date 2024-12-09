import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      cartItem: "",
      wishlist:""
    };
    try {
      const res = await axios({
        url: `${import.meta.env.VITE_BASE_URL}/users.json`,
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      });
      if (res.status == 200) {
        alert("user register successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box className="signup">
        <Box className="form">
          <VStack>
            <Formik>
              <Form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  borderRadius={"none"}
                  id="name"
                  placeholder="Name"
                  required
                />
                <Input
                  type="email"
                  borderRadius={"none"}
                  id="email"
                  placeholder="Email"
                  required
                />
                <Input
                  type="password"
                  borderRadius={"none"}
                  id="password"
                  placeholder="Password"
                  required
                />
                <Text fontSize={"small"}>
                  By Continuing, I agree to the{" "}
                  <span style={{ color: "rgb(255, 69, 113)" }}>
                    Terms Of Use & Privacy Policy
                  </span>
                </Text>
                <Button
                  borderRadius={"none"}
                  marginTop={5}
                  color={"white"}
                  backgroundColor="rgb(255, 69, 113)"
                  width={"100%"}
                  type="submit"
                >
                  REGISTER
                </Button>
                <Text marginBottom={5} fontSize={"small"}>
                  If you already have a account login{" "}
                  <Link to={"/login"} style={{ color: "rgb(255, 69, 113)" }}>
                    here
                  </Link>
                </Text>
                <Text fontSize={"small"}>
                  Have trouble logging in? Get help
                </Text>
              </Form>
            </Formik>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
