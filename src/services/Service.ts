import axios from "axios";



export const api = axios.create({
    baseURL: "https://blogdami.herokuapp.com/"
})
export const cadastroUsuario = async(url: any, dados: any, setDado: any)=>{
    const resposta = await api.post(url, dados)
    setDado(resposta.data) // método de login e autenticação de usuário

}  

export const login = async(url: any, dados: any, setDado: any)=>{
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token) // método de login e autenticação de usuário

}  
