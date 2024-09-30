import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getDetailCharacter from '../Services/getDetailCharacter'
import '../Style/character.css'
import esfera from '../Images/esfera.png'

const Character = () => {

    const id = useParams()
    const [character, setCharacter] = useState({})
    const [transform, setTransform] = useState("")
    
    
    const handleOnChange = (image) => {
        setTransform(image)
    }


    const getCharacter = (id) => {
        getDetailCharacter(id)
        .then(res => {
            setCharacter(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getCharacter(id.id)
    },[id])

  return (
    <div className='character-container' style={{backgroundSize: "cover",background: `url(${character?.originPlanet?.image})`}}>
        <div className='character-content'>
            <label htmlFor='nav' className='character-nav'>
                <img src={esfera} alt="the-transform"/>
            </label>
            <input id="nav" type='checkbox' style={{display: 'none'}}/>
            <div className='character-content-transform'>
                {character.transformations ? character.transformations.map(items => (
                    <div key={items.id} className='character-content-data'>
                         <div key={items.id} className='character-content-data'>
                            <button onClick={() => handleOnChange(items.image)}>
                                <img src={items.image} alt="transformation" />
                                <div className='character-items'>
                                    <p>{items.name}</p>
                                    <p>{items.ki}</p>
                                </div>
                            </button>
                        </div>
                    </div>
                
                )) :
                <div>
                    <p>No Transformations</p>
                </div>}
            </div>
            <div className='character-image'>
                <div className='character-card-info'>
                    <div className='character-card-first'>
                        <div className='character-card-first-img'>
                            <img src={character.image} alt="character"/>
                        </div>
                        <div className='character-card-first-data'>
                            <h2>{character.name}</h2>
                            <p>{character.race}</p>
                            <div className='character-card-first-descr'>
                                <span>{character.ki}</span>
                                <p>{character?.originPlanet?.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className='character-card-second'>
                        <p>{character.description}</p>
                    </div>
                </div>
                <div className='character-card-image'>
                    <img src={transform === "" ? character.image : transform} alt="transform"/>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Character