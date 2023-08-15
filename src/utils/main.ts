import { StackStyles } from "../types/main";

export const getChipStyle = (
  color: StackStyles
): {
  color?: "success" | "warning" | "error";
  href?: string;
  clickable?: boolean;
  target?: "_blank";
  component?: "a";
  sx?: any;
} => {
  switch (color) {
    case "green":
      return {
        color: "success",
      };
    case "yellow":
      return {
        color: "warning",
      };
    case "red":
      return {
        color: "error",
      };
    case "ultra-instinct":
      return {
        component: "a",
        target: "_blank",
        href: "https://www.youtube.com/watch?v=Upsm3E2NUI8",
        clickable: true,
        sx: {
          "-webkit-box-shadow": "0px 0px 10px 0px rgba(242,242,242,0.9)",
          "-moz-box-shadow": "0px 0px 10px 0px rgba(242,242,242,0.9)",
          boxShadow: "0px 0px 10px 0px rgba(242,242,242,0.9)",
          marginRight: 1,
        },
      };
  }
};
