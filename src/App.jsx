// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from "./Food/Home"
// import About from "./Food/About"
// import Search from "./Food/Search"
// import Navbar from "./Food/Navbar"
// import AboutMeals from "./Food/AboutMeals"
// import { useState } from 'react'


// const App = () => {
//   const[search,setSearch]=useState('b')
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar setSearch={setSearch}/>
//         <Routes>
//           <Route path="/" element={<Home search={search}/>}/>
//           <Route path="/about" element={<About/>}/>
//           <Route path="/aboutmeals" element={<AboutMeals search={search}/>}/>
//           <Route path="/search" element={<Search/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App


import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Project5ReciepiApp/Navbar'
import Home from './Project5ReciepiApp/Home'
import About from './Project5ReciepiApp/About'
import Dashboard from './Project5ReciepiApp/Dashboard'
import Aboutmeals from './Project5ReciepiApp/Aboutmeals'
import './Project5ReciepiApp/style.css'
import { useState } from 'react'


const App = () => {

  const[search,setSearch] = useState('b')
  return (
   
    
    <div>
      <BrowserRouter>
      <Navbar setSearch={setSearch}></Navbar>
        <Routes>
          <Route path='/' element={<Home search={search}></Home>}></Route>
          <Route path='/Dashboard' element={<Dashboard search={search}></Dashboard>}></Route>

          <Route path='/about' element={<About/>}></Route>
          <Route path='/aboutmeals' element={<Aboutmeals search={search}/>}></Route>
          
        </Routes>
       
      </BrowserRouter>
      
    </div>
  )
}

export default App