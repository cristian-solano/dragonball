import axios from 'axios'
import React from 'react'

const getDetailCharacter = async(id) => {
    const URL = `https://dragonball-api.com/api/characters/${id}`
    const req = await axios.get(URL) 
    return req  
}

export default getDetailCharacter