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
    setDado(resposta.data.token) // método de login e autenticação de usuário - método post

}  

export const busca = async(url: any, setDado: any, header: any)=>{
    const resposta = await api.get(url, header)  
    setDado(resposta.data) // só vai listar as postagens e/ou temas se o usuário estiver autenticado | método get | header - token | se a api confimar os dados solicitados, ela responde a solicitação do usuário | os dados estão armazenados na variável resposta


}  

export const buscaId = async(url: any, setDado: any, header: any)=>{
    const resposta = await api.get(url, header)  
    setDado(resposta.data) 


}  

export const post = async(url: any, dados: any, setDado: any, header: any)=>{
    const resposta = await api.post(url, dados, header)  
    setDado(resposta.data) 


} 

export const put = async(url: any, dados: any, setDado: any, header: any)=>{
    const resposta = await api.put(url, dados, header)  
    setDado(resposta.data) 


} 

export const deleteId = async(url: any, header: any)=>{
    await api.delete(url, header)  


} 




