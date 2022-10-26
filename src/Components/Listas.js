import { Grid, Typography } from "@mui/material";
import React from "react";
import { useNews } from "../Contexts/Newsprovider";
import New from "./New";

function Listas() {
  const { news } = useNews();
  return (
    <>
      <Typography textAlign="center" marginY={5} variant="h3" component="h2">
        Latest News
      </Typography>
      <Grid container spacing={2}>
        {news &&
          news.map((noticia) => <New key={noticia.url} noticia={noticia} />)}
      </Grid>
    </>
  );
}

export default Listas;
