import { useEffect, useState } from 'react'

const Hero = () => {
    const[ranImg, setRandImag] = useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res=>res.json())
        .then(d=>setRandImag(d.meals))
    },[])
  return (
    ranImg.map((x)=>{
        return(
            <>
            <div className='Hero' >
            <h1 id="hero-head">Today's Special <br /> <span style={{color:'red',fontSize:'50px'}}>{x.strMeal}</span></h1>
            <img src={x.strMealThumb} id='hero-img' />
    </div></>
        )
    })
  )
}

export default Hero
