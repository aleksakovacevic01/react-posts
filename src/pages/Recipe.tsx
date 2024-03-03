import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipesResponse from "../interfaces/Recipe";
import axios from "axios";
import { Box, Grid, Typography } from "@mui/material";

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
    <Grid container spacing={3}>
      <Grid item>
        <Box
          component={"img"}
          src={recipe?.image}
          width={{ md: 500 }}
          maxHeight={500}
          sx={{ borderRadius: 5, objectFit: "cover" }}
        />
        <Typography variant="h3" gutterBottom>
          {recipe?.name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3" gutterBottom>
          Ingredients
        </Typography>
        {recipe?.ingredients.map((ingredient, index) => (
          <Typography variant="h6">
            {index + 1}.{ingredient}
          </Typography>
        ))}
      </Grid>
      <Grid item>
        <Typography variant="h3" gutterBottom>
          Instruction
        </Typography>
        {recipe?.instructions.map((instruction, index) => (
          <Typography width={"100%"} maxWidth={400} variant="h6">
            {index + 1}.{instruction}
          </Typography>
        ))}
      </Grid>
      <Grid item>
        <Box>
          <Typography variant="h3" gutterBottom>
            Description
          </Typography>
          <Typography variant="h6" gutterBottom>
            Preparation time: {recipe?.prepTimeMinutes} mins
          </Typography>
          <Typography variant="h6" gutterBottom>
            Cooking time: {recipe?.cookTimeMinutes} mins
          </Typography>
          <Typography variant="h6" gutterBottom>
            Serving: {recipe?.servings} person
          </Typography>
          <Typography variant="h6" gutterBottom>
            Cousin: {recipe?.cuisine}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Recipe;
