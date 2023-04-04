import Photo from "../../public/NidhishPic.jpeg";
import { motion } from "framer-motion";
import { ChakraImage } from "../Misc/ChakraImage";

const MyPhoto = () => {
  return (
    <>
      <motion.div
        className="svg"
        animate={{ translateY: [-5, 0, 5, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <ChakraImage
          loading="lazy"
          src={Photo}
          margin="auto"
          width="auto"
          maxW="300px"
          borderRadius={"200px"}
          border="2px solid"
          data-aos="fade-up"
          // data-aos-anchor-placement="bottom-center"
          data-aos-duration="3000"
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        />
      </motion.div>
    </>
  );
};

export default MyPhoto;
