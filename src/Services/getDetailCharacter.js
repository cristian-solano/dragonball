import axios from 'axios'

const getDetailCharacter = async(id) => {
    const URL = `https://dragonball-api.com/api/characters/${id}`
    const req = await axios.get(URL) 
    return req  
}

export default getDetailCharacter