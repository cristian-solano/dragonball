
import axios from 'axios'



export const getCharactersPosition = async(page) => {
    const URL = `https://dragonball-api.com/api/characters?page=${page}&limit=10`
    const req = await axios.get(URL)
    return req
}

