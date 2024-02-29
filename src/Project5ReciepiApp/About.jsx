
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer'
const About = () => {

    const location = useLocation()

    const specificFood = location.state.x;


   const navigate = useNavigate()

    const[meals,setMeals] = useState([])
    useEffect(()=>{
      fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + specificFood.strCategory)
      .then(res=>res.json())
      .then(d=>setMeals(d.meals))
    },[])
    
    
  return (
    <div>
      <div className="asec" style={{textAlign:'center',width:'70%', margin:'auto', marginTop:'20px'}}>
      <img src={specificFood.strCategoryThumb} style={{height:'300px',width:'300px', borderRadius:'10px'}} />
      <h2>{specificFood.strCategory}</h2>
      <p style={{textAlign:'justify'}}>{specificFood.strCategoryDescription}</p>
      </div>
      <h1>Categories</h1>
      <section className='HomeSec' style={{paddingLeft:'20px'}}>
      {meals.map((x)=>{
        return(
            
            <div key={x.idMeal} className='img-sec'>
                <img className='img-res' src={x.strMealThumb} onClick={()=>navigate('/aboutmeals',{state:{x}})} style={{paddingLeft:'10px'}}></img>
                <p>{x.strMeal}</p>
            </div>

        )
      })}
      </section>
      
     
      <Footer/>
    </div>
  )
}

export default About
