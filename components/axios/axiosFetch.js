import axios from "axios"

export const getMethod = async (url) => {
    try {
        const res = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const postMethod = async (url, data) => {
    try {
        const res = await axios.post(url, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const deleteMethod = async (url, id) => {
    try {
        const res = await axios.delete(`${url}/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const putMethod = async (url, data) => {
    try {
        const res = await axios.put(url, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}