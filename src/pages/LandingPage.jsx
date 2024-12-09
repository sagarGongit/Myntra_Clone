import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import "./LandingPage.css";
import CountDown from "../components/CountDown";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loading, specialcategory } from "../reduxFiles/actions";
import LoadingIndicator from "../Indicators/LoadingIndicator";

const LandingPage = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const specialCata = useSelector((state) => state.product.specialCategory);
  const isLoading = useSelector((state) => state.loading.isLoading);

  const nextSlide = () => {
    setSlide(slide == 2 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide > 0 ? slide - 1 : 2);
  };

  const FetchSpecialCategory = async () => {
    dispatch(loading(true));
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/categories/specialCategory.json`
      );
      if (res.status == 200) {
        dispatch(specialcategory(res.data));
        dispatch(loading(false));
      }
    } catch (error) {
      console.log(error);
      dispatch(loading(false));
    }
  };

  useEffect(() => {
    FetchSpecialCategory();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <Box className="landing-page">
        <CountDown />
        <Box>
          <Image src="https://i.ibb.co/47KtqzD/Screenshot-2024-09-28-201214.png" />
        </Box>
        <Box>
          <Image src="https://i.ibb.co/5RTqTHk/Screenshot-2024-09-28-201134.png" />
        </Box>
        <Box>
          <Image src="https://i.ibb.co/X2L2nmT/Screenshot-2024-09-28-201329.png" />
        </Box>
        <Box>
          <Image src="https://i.ibb.co/0BvydhN/Screenshot-2024-09-28-201348.png" />
        </Box>
        <Box>
          <Image src="https://i.ibb.co/rZjpYdr/Screenshot-2024-09-28-201406.png" />
        </Box>
        <Box className="brand-slider">
          <FaAngleLeft size={35} className="left" onClick={prevSlide} />
          {[
            "https://i.ibb.co/hdbQvWT/Screenshot-2024-10-03-111218.png",
            "https://i.ibb.co/GFt3vz8/Screenshot-2024-10-03-111249.png",
            "https://i.ibb.co/Y3fLXr0/Screenshot-2024-10-03-111319.png",
          ].map((item, idx) => (
            <Image
              src={item}
              key={idx}
              className={slide === idx ? "slider-Image" : "hidden-slider"}
              onClick={() =>
                navigate(
                  idx == 0
                    ? "/mensapparel"
                    : idx == 1
                    ? "/mensfootware"
                    : "/womensection"
                )
              }
            />
          ))}
          <FaAngleRight size={35} className="right" onClick={nextSlide} />
        </Box>
        <Box>
          <Image src="https://i.ibb.co/n74vr8t/Screenshot-2024-09-28-212640.png" />
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 6 }}
          gap={8}
          p={8}
          className="category-special"
        >
          {Object.entries(specialCata).map(([id, item]) => (
            <Box className="category" key={id}>
              <Box>
                <Image src={item.images} />
              </Box>
            </Box>
          ))}
        </SimpleGrid>
        <Box className="knokout-offers">
          <Image src="https://i.ibb.co/3FWxgfV/Screenshot-2024-09-28-220758.png" />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default LandingPage;
