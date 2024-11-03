import './App.css'
import NavBar from './components/NavBar/NavBar'


function App() {
  const items = ["Home" , "About" , "Service" , "New Property" , "Contact" , "from alaa"]
  return (
    <>
    <NavBar logo= "assets/img/logos.png" items={items} btn="Login test" />
    <h1>hello world</h1>
    </>
  )
}

export default App
