import React from "react";
import {Typography, Box, Grid, Button} from '@material-ui/core';
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import "./Home.css";



function Home() {
    return (
        // o <> é uma função abreviada
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Bem-vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Estou muito feliz com a sua visita!!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/BNu8g0t.gif" alt="" width="500px" height="300" />
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem />
                </Grid>
            </Grid>

        </>
    );
}
export default Home