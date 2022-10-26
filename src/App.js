import { Container, Grid, Typography } from "@mui/material/";
import Form from "./Components/Form";
import Listas from "./Components/Listas";
import { Newsprovider } from "./Contexts/Newsprovider";

function App() {
  return (
    <>
      <Newsprovider>
        <Container>
          <header>
            <Typography align="center" marginY={4} variant="h2" component="h1">
              News
            </Typography>
          </header>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={6} xs={12} lg={4}>
              <Form />
            </Grid>
          </Grid>{" "}
          <Listas />
        </Container>
      </Newsprovider>
    </>
  );
}

export default App;
