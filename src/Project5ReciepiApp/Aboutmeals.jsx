import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from 'react-router-dom';
import DishGraph from './DishGraph'; // Assuming you have a component for the graph
import Footer from './Footer'
const Aboutmeals = ({ search }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [mealList, setMealList] = useState([]);
    const specificMeals = location.state.x;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            .then(res => res.json())
            .then(d => setMealList(d.meals));
    }, []);

    return (
        <div>
            <div className="asec" style={{ width: '90%', margin: 'auto', marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                <img src={specificMeals.strMealThumb} style={{ height: '300px', width: '300px', borderRadius: '10px' }} alt={specificMeals.strMeal} />
                <div style={{ padding: '10px', color: 'gray', lineHeight: '22px' }}>
                    <h3><span style={{ color: 'red' }}>Name : </span>{specificMeals.strMeal}</h3>
                    <h3><span style={{ color: 'red' }}>Category : </span>{specificMeals.strCategory}</h3>
                    <h3><span style={{ color: 'red' }}>Area : </span>{specificMeals.strArea}</h3>
                    <p>{specificMeals.strInstructions}</p>
                </div>
            </div>
            <ReactPlayer url={specificMeals.strYoutube} style={{ margin: 'auto' }} width={'95%'} height={'400px'} controls />

            {/* Render the dummy graph component */}
            <DishGraph meal={specificMeals} />

            <h1>Meals</h1>
            <section className='HomeSec'>
                {mealList.map((x) => (
                    <div key={x.idMeal} className='img-sec'>
                        <img className='img-res' src={x.strMealThumb} onClick={() => navigate('/aboutmeals', { state: { x } })} alt={x.strMeal} />
                        <p>{x.strMeal}</p>
                    </div>
                ))}
            </section>
            <Footer/>
        </div>
    );
}

export default Aboutmeals;
