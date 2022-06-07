import React, { useState, useEffect, ChangeEvent } from 'react';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, post, put } from '../../../services/Service';


function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage("token");
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))
// essa função descobre se vai adicionar um tema ou atualizar um que já existe com base no tema - se tiver id ele atualiza, se não ele adiciona um novo
        if (id !== undefined) {
            console.log(tema)
            put(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema atualizado com sucesso');
        } else {
            post(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema cadastrado com sucesso');
        }
        back()

    }
//redireciona para o componente temas
    function back(): void {
        navigate('/temas')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3"
                 color="textSecondary" 
                 component="h1" 
                 align="center" >Formulário de cadastro tema
                 </Typography>

                <TextField value={tema.descricao} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}  
                id="descricao" 
                label="Descrição" 
                variant="outlined" 
                name="descricao" 
                margin="normal" 
                fullWidth />

                <Button type="submit" 
                variant="contained" 
                color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;