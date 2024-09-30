import React, { useEffect, useState } from 'react'
import {getCharactersPosition} from '../Services/getCharacters'
import { Link } from 'react-router-dom'
import logo from '../Images/logo-dragonball.png'
import planet from '../Images/planet.png'
import kamehameha from '../Images/kamehameha.png'
import "../Style/allcharacters.css"
import Radar from '../Components/Radar'


const Characters = () => {

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1) 

    

    const getCharacterPos = () => {
        getCharactersPosition(page)
        .then((res) => {
            setPage(res.data?.meta?.currentPage)
            setCharacters(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getCharacterPos(page)
    }, [page])

  return (
    <div className='all-container'>
        <section className='all-characters-content'>
            {characters.items?.length > 0 && 
            characters?.items.map(warrior => (
                <div className='all-character' key={warrior.id}>
                    <img className='all-character-logo' src={logo} alt="logo"/>
                    <div className='all-character-planet'>
                        <img src={planet} className='all-character-planet-image' alt="planet" />
                        <p>{warrior.affiliation}</p>
                    </div>
                    <img className='all-character-image' src={warrior.image} alt={`warrior-${warrior.id}`}/>
                    <div className='all-content'>
                        <Link to={`/character/${warrior.id}`}>
                            <h2>{warrior.name}</h2>
                        </Link>
                        <div className='all-content-power'>
                            <div className='all-content-their-power'>
                                <p>Ki:</p>
                                <h3>{warrior.ki}</h3>
                            </div>
                            <div className='all-content-their-power'>
                                <p>MaxKi:</p>
                                <h3>{warrior.maxKi}</h3>
                            </div> 
                        </div>
                        
                    </div>
                </div>
            ))}
        </section>
        <section className='all-buttons'>
            <button onClick={() => setPage(page - 1)}>
                <img src={kamehameha} alt="back" />
            </button>
            <button onClick={() => setPage(page + 1)}>
                <img src={kamehameha} alt="next" />
            </button>
        </section>
        <Radar/>
    </div>
  )
}

export default Characters