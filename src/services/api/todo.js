import axios from "axios";

export const todoApi = {
    create: async (data) => {
        return await axios.post(`${import.meta.env.VITE_SV_API_URL}/api/v1/todo`, data)
    },
    findAll: async () => {
        return await axios.get(`${import.meta.env.VITE_SV_API_URL}/api/v1/todo/${localStorage.getItem("token")}`)
    }
}