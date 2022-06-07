import React from "react";
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./Navbar.css"

function Navbar() {
    const [token, setToken] = useLocalStorage("token")
    let navigate = useNavigate()

    function goLogout() {
        setToken('') //essa função remove o token, substitiu ele pelo valor vazio
        alert("Usuário deslogado!")
        navigate("/login")
    }
    return (
        <>
            <AppBar position="static" className="boxTeste">
                <Toolbar variant="dense">
                    <Box className="cursor">
                        <Typography variant="h6" color="inherit" className="fonteCursor">
                            Blog da Mi |
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Home |
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Postagens |
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Temas |
                            </Typography>
                        </Box>
                        </Link>

                        <Link to="/formulariotema" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema |
                            </Typography>
                        </Box>
                        </Link>

                        
                            <Box mx={1} className="cursor" onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;