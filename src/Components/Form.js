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
  const { categoria, handlechange, pais, handlechangepais } = useNews();
  const CATEGORÍAS = [
    { value: "general", label: "General" },
    { value: "bussiness", label: "Bussiness" },
    { value: "enterteiment", label: "Enterteiment" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];
  const Paises = [
    { value: "co", label: "Colombia" },
    { value: "mx", label: "Mexico" },
    { value: "us", label: "Estados Unidos" },
    { value: "ve", label: "Venezuela" },
    { value: "au", label: "Australia" },
    { value: "fr", label: "Francia" },
    { value: "gb", label: "Gran bretaña" },
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
      <FormControl fullWidth sx={{ marginTop: 2 }}>
        <InputLabel>Paises</InputLabel>
        <Select value={pais} onChange={handlechangepais} label="Countries">
          {Paises.map((categorias) => (
            <MenuItem key={categorias.value} value={categorias.value}>
              {categorias.label}
            </MenuItem>
          ))}
        </Select>
        <Box sx={{ marginTop: 2 }}>
          <Button fullWidth variant="contained">
            Search Country
          </Button>
        </Box>
      </FormControl>
    </form>
  );
}

export default Form;
