import React from 'react'
import '../../css/heroStyle.css'

function Hero(props){
  return (
    <>
        <div className={props.cName}>
            {/* <img src={props.heroImg} alt="HeroImg"/> */}
        </div>

        <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>

    </>
  )
}

export default Hero;