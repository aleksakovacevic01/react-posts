import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const Filter = ({
  setDifficulty,
  difficulty,
}: {
  setDifficulty: any;
  difficulty: string;
}) => {
  //   const [difficulty, setDifficulty] = useState("");
  const handleChange = (e: SelectChangeEvent) => {
    setDifficulty(e.target.value);
  };
  return (
    <Box sx={{ minWidth: 120, maxWidth: 400 }} margin={3}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={difficulty}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Easy"}>Easy</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
