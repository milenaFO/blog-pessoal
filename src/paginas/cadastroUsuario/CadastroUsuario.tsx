import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import "./CadastroUsuario.css";
import { toast } from "react-toastify";

function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha && user.senha.length >= 8) {

            //Tenta executar o cadastro
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success("Usuário cadastrado com sucesso", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });

                //Caso tenha algo diferente do padrão solicitado ele mostra mensagem de erro
            } catch (error) {
                console.log(`Error: ${error}`)

                //Mensagem personalizada de acordo com o erro
                toast.error("O usuário já existe", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }

        } else {
            toast.error("Insira no miníno 8 caracteres na senha.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

            setUser({ ...user, senha: "" }) // Reinicia o campo de Senha
            setConfirmarSenha("")           // Reinicia o campo de Confirmar Senha
        }
    }
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className="imagem2"></Grid>
            <Grid item xs={6} alignItems="center">
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos2">Cadastrar</Typography>

                        <TextField value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="nome"
                            label="Nome"
                            variant="outlined"
                            name="nome"
                            margin="normal"
                            placeholder="Digite seu nome"
                            fullWidth />

                        <TextField value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            label="Usuário"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            placeholder="Digite seu e-mail"
                            fullWidth />

                        <TextField value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            placeholder="Insira sua senha que deve conter no mínimo 8 caracteres"
                            fullWidth />

                        <TextField value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id="confirmarSenha"
                            label="Confirmar Senha"
                            variant="outlined"
                            name="confirmarSenha"
                            margin="normal"
                            type="password"
                            placeholder="Confirme sua senha"
                            fullWidth />

                        <TextField value={user.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="foto"
                            label="Foto"
                            variant="outlined"
                            name="foto"
                            margin="normal"
                            placeholder="Insira o link da sua foto"
                            fullWidth />

                        <Box marginTop={2}>
                            <Button type="submit" variant="contained" className="botaoCadastrar">
                                Cadastrar
                            </Button>
                            <Link to="/login" className="text-decorator-none">
                                <Button variant="contained" className="botaoCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;
