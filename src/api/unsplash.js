import axios from "axios"

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID CXfK8liModEOV38VkJnXmo50wmHm62NGSZd3r2W7Szs'
    }
})