import { Box, Divider, Typography } from "@mui/material";
import AboutMe from "./components/AboutMe";
import MyStack from "./components/MyStack";
import useScreenSize from "../../hooks/useScreenSize";

const Main = () => {
  const screenSize = useScreenSize();
  return (
    <>
      {screenSize === "small" && (
        <Box mb={4}>
          <Typography sx={{ fontSize: "36px" }}>Issac Liu</Typography>
          <Divider sx={{ marginY: 1 }} />
          <Typography>Web Developer</Typography>
          <Typography sx={{ fontSize: "12px" }}>
            Student in at University of Waterloo
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            Computational Mathematics, BMath
          </Typography>
          <Divider sx={{ marginY: 1 }} />
        </Box>
      )}
      <AboutMe />
      <MyStack />
    </>
  );
};

export default Main;
