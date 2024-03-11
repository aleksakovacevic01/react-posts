import { Box, Button } from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <Box textAlign={"center"}>
      <h1>VIT</h1>
      <Button
        variant="contained"
        onClick={() => setCount((count) => count + 1)}
      >
        {count}
      </Button>
    </Box>
  );
};

export default Home;
