import axios from 'axios'

const instance = axios.create({
    baseURL: "https://dev-fe-exam.viajsc.com"
})

export const get = async (path) => {
    const response = await instance.get(path)
    return response.data
}

export const put = async (path, data = {}) => {
    const response = await instance.put(path, data)
    return response.data
}

export const post = async (path, data = {}) => {
    const response = await instance.post(path, data)
    return response.data
}

export const deleteRequest = async (path) => {
    const response = await instance.delete(path)
    return response.data
}