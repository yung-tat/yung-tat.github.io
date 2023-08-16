import { useMediaQuery } from "@mui/material";

const useScreenSize = () => {
  const medium = useMediaQuery("(min-width:1070px)");
  const small = useMediaQuery("(min-width:680px)");
  const screenSize = medium ? "large" : small ? "medium" : "small";
  return screenSize;
};

export default useScreenSize;
