import { Box, Image } from "@chakra-ui/react";
import "./MenSection.css";
import { VscTriangleRight } from "react-icons/vsc";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const MenSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box className="men">
        <Box>
          <Image src="https://i.ibb.co/47KtqzD/Screenshot-2024-09-28-201214.png" />
        </Box>
        <Box>
          <Image src="https://i.ibb.co/sK1757L/Screenshot-2024-09-30-191828.png" />
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
        <Box className="men-slider">
          {[
            "https://i.ibb.co/ZXZVFqD/Screenshot-2024-09-30-203443.png",
            "https://i.ibb.co/HpKYZsQ/Screenshot-2024-09-30-203509.png",
          ].map((item, idx) => (
            <Box className="men-brands" key={idx}>
              <Image cursor={"pointer"} onClick={()=>idx==0 ? navigate('/mensapparel'): navigate('/menfootware')} maxW={"container.xl"} src={item} />
              <VscTriangleRight className="arrow arrow-right" />
            </Box>
          ))}
        </Box>
        <Box>
          <Image src="https://i.ibb.co/n74vr8t/Screenshot-2024-09-28-212640.png" />
        </Box>
        <Box className="mens-special-category">
          <Box>
            <Image src="https://i.ibb.co/Tk4LGJC/Screenshot-2024-09-30-211545.png" />
            <Image src="https://i.ibb.co/FbsyQDb/Screenshot-2024-09-30-211606.png" />
            <Image src="https://i.ibb.co/vHnDJp0/Screenshot-2024-09-30-211648.png" />
            <Image src="https://i.ibb.co/QQHN4Nj/Screenshot-2024-09-30-211720.png" />
            <Image src="https://i.ibb.co/qj5Bcj6/Screenshot-2024-09-30-211747.png" />
          </Box>
          <Box>
            <Image src="https://i.ibb.co/d7RpXSR/Screenshot-2024-09-30-211815.png" />
            <Image src="https://i.ibb.co/F3MzkvF/Screenshot-2024-09-30-211845.png" />
            <Image src="https://i.ibb.co/W5TZdXC/Screenshot-2024-09-30-211910.png" />
            <Image src="https://i.ibb.co/j6JgPSV/Screenshot-2024-09-30-211927.png" />
            <Image src="https://i.ibb.co/hL432dn/Screenshot-2024-09-30-211941.png" />
            <Image src="https://i.ibb.co/92TSXHx/Screenshot-2024-09-30-212001.png" />
          </Box>
          <Box>
            <Image src="https://i.ibb.co/SmXPssQ/Screenshot-2024-09-30-212020.png" />
            <Image src="https://i.ibb.co/bL1pTVB/Screenshot-2024-09-30-212038.png" />
            <Image src="https://i.ibb.co/bXYwcMh/Screenshot-2024-09-30-212102.png" />
            <Image src="https://i.ibb.co/7KjSXC0/Screenshot-2024-09-30-212131.png" />
          </Box>
        </Box>
        <Box className="knokout-offers">
          <Image src="https://i.ibb.co/3FWxgfV/Screenshot-2024-09-28-220758.png" />
        </Box>
        <Footer/>
      </Box>
    </>
  );
};

export default MenSection;
