import axios from "axios";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import RecipesResponse from "../interfaces/Recipe";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const [recipes, setRecipes] = useState<RecipesResponse[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setRecipes(response.data.recipes);
    };
    dataFetch();
  }, []);

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {recipes.map((recipe) => (
          <>
            <Grid key={recipe.id} item xs={4}>
              <RecipeCard recipe={recipe} />
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};
export default Home;
