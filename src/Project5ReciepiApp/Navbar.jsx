
import { Link } from 'react-router-dom'


const Navbar = ({setSearch}) => {

  return (
    <div>
      <nav className='navb' style={{backgroundColor:"black",color:"color"}}>
        <img className='r-logo' src="data:image/jpeg;base64,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" alt="" />
        <article className='navit'>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link> 
            <input type="search" id="search" onChange={(e)=>setSearch(e.target.value)} placeholder='Search here' />
            <Link to={'/Dashboard'} style={{textDecoration:'none',color:'white'}}>Dashboard</Link> 
            <Link to={'/Cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link> 
        </article>
      </nav>
    </div>
  )
}

export default Navbar