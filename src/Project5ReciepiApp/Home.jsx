import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import Hero from './Hero'
import Footer from "./Footer"

const Home = ({search}) => {
    const[data,setData] = useState([])
    const[mealList, setMealList] = useState([])
  
   

    useEffect(()=>{
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then(res=>res.json())
      .then(d=>setMealList(d.meals))
    },[mealList])
    
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res=>res.json())
        .then(d=>setData(d.categories))
    },[data])

    const navigate = useNavigate()
  return (
    <div className='Homediv' >
        <Hero></Hero>
        <h1 id='cat-head'>Categories</h1>
        <section className='HomeSec'>
      {data.map((x)=>{
        return(
            
            <div key={x.strCategory} className='img-sec'>
                <img className='img-res' src={x.strCategoryThumb} onClick={()=>navigate('/about',{state:{x}})}></img>
                <p>{x.strCategory}</p>
            </div>

        )
      })}
      </section>
      <h1>Meals</h1>
      <section className='HomeSec'>
      {mealList.map((x)=>{
        return(
            
            <div key={x.idMeal} className='img-sec'>
                <img className='img-res' src={x.strMealThumb} onClick={()=>navigate('/aboutmeals',{state:{x}})}></img>
                <p>{x.strMeal}</p>
            </div>

        )
      })}
      </section>

      <Footer/>
    </div>
    
  )
}

export default Home
