import { useState } from 'react';
import './NavBar.css'

const NavBar = ({logo , items , btn}) => {
    const [show, setshow] = useState(false);
  return (
    <>
        <nav>
        <img src={logo} alt="" />
        <ul>
        {items?.map((item , index) => {return(
            <li key={index}>{item}</li>
        )})}
        </ul>
        <button className='btn'>{btn}</button>
        <button className='bars' onClick={()=>setshow(prev=>!prev)}><img src="/assets/img/bars.svg" alt="" /></button>
    </nav>
    <div className="navMenu" style={{display: show? "block" : "none"}}>
    <ul>
        {items?.map((item , index) => {return(
            <li key={index}>{item}</li>
        )})}
        </ul>
        <button className='btn'>{btn}</button>
    </div>
    </>

  )
}

export default NavBar