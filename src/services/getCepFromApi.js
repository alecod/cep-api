import axios from "axios";

export const getCepFromApi = (currentCep) => axios.get(
`https://viacep.com.br/ws/${currentCep}/json/`
).then((response)=> response)
