import { Box, Button, Image, Input, Text, VStack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LOGIN } from "../reduxFiles/actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users.json`
      );
      if (res.status === 200) {
        var flag = false;
        Object.entries(res.data).map(([id, user]) => {
          if (
            user.email == payload.email &&
            user.password == payload.password
          ) {
            dispatch({
              type: LOGIN,
              payload: {
                token: "skfj3433rkakdfk",
                username: user.name,
                userId: id,
              },
            });
            window.localStorage.setItem(
              "Auth",
              JSON.stringify({
                isLogged: true,
                token: "skfj3433rkakdfk",
                username: user.name,
                userId: id,
              })
            );
            alert("login successfull");
            navigate("/");
            flag = true;
          }
        });
      }
      if (!flag) {
        alert("invalid credientials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box className="login">
        <Box className="form">
          <VStack>
            <Image src="https://i.ibb.co/9hDNG2G/Screenshot-2024-09-29-163734.png" />
            <Formik>
              <Form onSubmit={handleSubmit}>
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
                  LOGIN
                </Button>
                <Text marginBottom={5} fontSize={"small"}>
                  If you have not any account register{" "}
                  <Link to={"/signup"} style={{ color: "rgb(255, 69, 113)" }}>
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

export default Login;
