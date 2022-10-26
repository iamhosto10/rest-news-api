import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  FormControl,
} from "@mui/material/";
import { useNews } from "../Contexts/Newsprovider";

function Form() {
  const { categoria, handlechange } = useNews();
  const CATEGORÍAS = [
    { value: "general", label: "general" },
    { value: "bussiness", label: "bussiness" },
    { value: "enterteiment", label: "enterteiment" },
    { value: "health", label: "health" },
    { value: "science", label: "science" },
    { value: "sports", label: "sports" },
    { value: "technology", label: "technology" },
  ];
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categorías</InputLabel>
        <Select value={categoria} onChange={handlechange} label="Categoría">
          {CATEGORÍAS.map((categorias) => (
            <MenuItem key={categorias.value} value={categorias.value}>
              {categorias.label}
            </MenuItem>
          ))}
        </Select>
        <Box sx={{ marginTop: 2 }}>
          <Button fullWidth variant="contained">
            Search Caregory
          </Button>
        </Box>
      </FormControl>
    </form>
  );
}

export default Form;
