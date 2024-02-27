import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipesResponse from "../interfaces/Recipe";
import axios from "axios";
import { Box } from "@mui/material";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipes] = useState<RecipesResponse>();
  console.log(id);
  useEffect(() => {
    const dataFetch = async () => {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
      setRecipes(response.data);
    };
    dataFetch();
  }, []);
  return (
    <>
      <Box
        component={"img"}
        src={recipe?.image}
        width={{ md: 500 }}
        maxHeight={500}
        sx={{ borderRadius: 5, objectFit: "cover" }}
      />
    </>
  );
};

export default Recipe;
