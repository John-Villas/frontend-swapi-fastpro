const axios = require("axios").default

export interface RegisterData {
  name: string
  email: string
  phone: string
  password: string
  passwordRepeat?: string
}

export interface LoginData {
  email: string
  password: string
}

export interface CharactersData {
  token: string | null
  page: string
}

export const axiosInstance = axios.create({
  baseUrl: "http://localhost:3003/",
})

export function registerUser(data: RegisterData) {
  return axios({
    method: "post",
    url: `${process.env.REACT_APP_API_URL}user`,
    data,
  })
}

export function login(data: LoginData) {
  return axios({
    method: "post",
    url: `${process.env.REACT_APP_API_URL}auth`,
    data,
  })
}

export function getCharacters(
  token: CharactersData["token"],
  page: CharactersData["page"]
) {
  return axios({
    method: "get",
    url: `${process.env.REACT_APP_API_URL}characters?page=${page}`,
    headers: { Authorization: `Bearer ${token}` },
  })
}
