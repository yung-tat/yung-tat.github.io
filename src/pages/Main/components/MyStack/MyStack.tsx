import { Box, Chip, Typography } from "@mui/material";
import InfoCard from "../../../../components/InfoCard";
import { myStack } from "../../../../constants/main";
import { getChipStyle } from "../../../../utils/main";

const MyStack = () => (
  <InfoCard>
    <Typography
      width="100%"
      sx={{ fontSize: "20px", borderBottom: "1px solid", marginBottom: 1 }}
    >
      My Stack
    </Typography>
    {myStack.map((stack) => (
      <Box mb={1}>
        <Typography>{stack.name}:</Typography>
        {stack.items.map((item) => (
          <Chip
            size="small"
            variant="outlined"
            sx={{ mr: 1 }}
            label={item.name}
            {...getChipStyle(item.color)}
          />
        ))}
      </Box>
    ))}
  </InfoCard>
);

export default MyStack;
