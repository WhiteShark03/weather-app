import React from 'react'

const Error = ({weather}) => {
  return (
    <div>
        {
            weather.cod === '404'?<div className='noCityError'><p className='noCityError-text'>Такой город не найден!</p></div>:<div className='noCityError'>
            <p className='noCityError-text'>Введите город в поле выше!</p>
            </div>
        }
    </div>
  )
}

export default Error