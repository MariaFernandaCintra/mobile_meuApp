import axios from "axios";
import Evento from "../screens/CadastroEventoScreen";

const api = axios.create({
    baseURL:"http://10.89.240.83:5000/api/v1",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    postLogin:(user)=> api.post("/login", user),
    postCadastro:(user)=> api.post("/user", user),
    postEvento:(evento)=> api.post("/evento", evento),
    postIngresso:(ingresso)=> api.post("/ingresso", ingresso),
    postOrganizador:(organizador)=> api.post("/organizador", organizador),
}
export default sheets;