
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Tema from "../../../models/Tema"
import './ListaTema.css';
import { useState, useEffect } from 'react'
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([]) // o ([]) é para inicializar o array que contém todos os temas
  const [token, setToken] = useLocalStorage("token") //usar o token para enviar requisição para api
  let navigate = useNavigate() //redireciona as páginas de acordo com a solicitação - neste caso o login

  useEffect(() => {
    if (token == "") {
      alert("É necessário fazer login para acessar este conteúdo")
      navigate("/login") //se o usuário não estiver logado, vai ser direcionado para a tela de login
    }
  }, [token])

  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        "authorization": token
      }
    }) //método busca criado no service.ts
  }

  useEffect(() => {
    getTema()
  }, [temas.length])


return (
  <>
    {
      temas.map(tema => (
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Tema
              </Typography>
              <Typography variant="h5" component="h2">
                {tema.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5} >
                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))
      }
  </>
);
}


export default ListaTema;