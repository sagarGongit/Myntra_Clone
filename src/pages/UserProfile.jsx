import { Box, Button, Checkbox, Image, Input, Text } from "@chakra-ui/react";
import "./UserProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import Footer from "../components/Footer";
import axios from "axios";
import { loading, useraddress } from "../reduxFiles/actions";
import { useEffect, useState } from "react";
import LoadingIndicator from "../Indicators/LoadingIndicator";

const UserProfile = () => {
  const userInfo = useSelector((state) => state.users.user);
  const { username } = userInfo;
  const user_id = useSelector((state) => state.users.user.userId);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const addr = useSelector((state) => state.cart.Address);
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    full_name: "",
    email: "",
    birthday: "",
    gender: "",
  });

  const FetchUserDetails = async () => {
    dispatch(loading(true));
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/${user_id}/address.json`
      );
      if (res.status == 200) {
        dispatch(useraddress(res.data));
        dispatch(loading(false));
      }
    } catch (error) {
      console.log(error);
      dispatch(loading(false));
    }
  };

  const handleChange = (e) => {
    const { type, value, id, checked } = e.target;
    type === "checkbox" ? checked : value;
    setFormState({
      ...formState,
      [id]: value,
    });
  };

  const UpdateAddress = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axios({
        url: `${import.meta.env.VITE_BASE_URL}/users/${user_id}/address/${id}.json`,
        method: "patch",
        headers: {
          "Content-Type": "application/json",
        },
        data: formState,
      });
      if (res.status == 200) {
        alert("data saved successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchUserDetails();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <Box className="user-profile">
        <Box className="profile">
          <Box className="account">
            <Box>
              <Text as="b">Account</Text>
              <Text>{username}</Text>
            </Box>
          </Box>
          <Box className="account-brif">
            <Box className="overview">
              <Box>
                <Box>
                  <Text>Overview</Text>
                </Box>
                <Box>
                  <span>ORDERS</span>
                  <Text>Orders & Returns</Text>
                </Box>
                <Box>
                  <span>CREDITS</span>
                  <Text>Coupons</Text>
                  <Text>Myntra Credit</Text>
                  <Text>MynCash</Text>
                </Box>
                <Box>
                  <span>ACCOUNT</span>
                  <Text color={"lightgreen"}>Profile</Text>
                  <Text>Saved Cards</Text>
                  <Text>Saved UPI</Text>
                  <Text>Saved Wallets/BNPL</Text>
                  <Text>Addresses</Text>
                  <Text>Myntra Insider</Text>
                  <Text>Delete Account</Text>
                </Box>
                <Box>
                  <span>LEGAL </span>
                  <Text>Terms of Use </Text>
                  <Text>Privacy Policy </Text>
                </Box>
              </Box>
            </Box>
            <Box className="edit">
              <Box className="edit-detail">
                <Box>
                  <Box>
                    <Text as={"b"}>Edit Details</Text>
                  </Box>
                  <Box className="user-information">
                    <Box className="mobile-number">
                      <Box>
                        <Text color={"gray"} fontSize={"13px"}>
                          Mobile Number*
                        </Text>
                        <Box>
                          {}
                          <Image src="https://i0.wp.com/pages.milaap.org/wp-content/uploads/2022/07/approve.png?fit=512,512" />
                        </Box>
                      </Box>
                      <Box>CHANGE</Box>
                    </Box>
                    <Box className="personal-detail">
                      {Object.entries(addr).map(([id, info]) => (
                        <Formik key={id}>
                          <Form onSubmit={() => UpdateAddress(event, id)}>
                            <Input
                              placeholder="Full Name*"
                              id="name"
                              value={info.full_name}
                              onChange={handleChange}
                            />
                            <Input
                              placeholder="Email*"
                              value={info.email}
                              id="email"
                              onChange={handleChange}
                            />
                            <Box className="gender">
                              <Box>
                                <Text> Male*</Text>
                                <Checkbox id="male" onChange={handleChange} />
                              </Box>
                              <Box>
                                <Text>Female*</Text>
                                <Checkbox id="female" onChange={handleChange} />
                              </Box>
                            </Box>
                            <Input
                              type="date"
                              id="birthday"
                              placeholder="Birthday*"
                              value={info.birthday}
                              onChange={handleChange}
                            />
                            <Button
                              w={"100%"}
                              variant={"solid"}
                              colorScheme="green"
                              type="submit"
                            >
                              SAVE DETAILS
                            </Button>
                          </Form>
                        </Formik>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default UserProfile;

// for payment integration reference : https://www.youtube.com/watch?v=Q6XSMTQQp_4&t=2033
