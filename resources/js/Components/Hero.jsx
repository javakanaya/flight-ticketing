import React from 'react'

function Hero(props){
  return (
    <>
        <div className={props.cName}>
            {/* <img src={props.heroImg} alt="HeroImg"/> */}
        </div>

        <div className='absolute top-[30%] left-[15%] width-[500px]  text-[#fff] leading-14'>
            <h1 className='text-[3rem] font-[800]'>{props.title}</h1>
            <p className=''>{props.text}</p>
        </div>

    </>
  )
}

export default Hero;