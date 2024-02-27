import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import RecipesResponse from "../interfaces/Recipe";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  recipe: RecipesResponse;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={recipe.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.instructions.slice(0, 3)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/recipes/${recipe.id}`}>Learn more</Link>
        </Button>
      </CardActions>
    </Card>
  );
};
export default RecipeCard;
