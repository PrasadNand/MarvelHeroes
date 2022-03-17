import React from 'react'

const CharacterItems = ({item}) => {
  return (
      <div className='content'>
          <div className='content-inner'>
          <div className='content-front'>
              <img src={item.thumbnail.path + "/portrait_xlarge.jpg"}alt =''/>
              
          </div>
          <div className='content-back'>
              <h1>{item.name}</h1>
              <ul>
                  <l1>
                      <strong>Name:</strong>{item.name}
                      </l1>
                      <li>
                          <strong>Description:</strong>{item.description}
                          </li>
                          </ul>
                          </div>
                          </div>
                          </div>

    
  )
}

export default CharacterItems