import './App.css'
import NavBar from './components/NavBar/NavBar'


function App() {
  const items = ["Home" , "About" , "Service" , "New Property" , "Contact"]
  return (
    <>
    <NavBar logo= "assets/img/logo.png" items={items} btn="Login" />
    <h1>hello my friend I'm alaa</h1>
    </>
  )
}

export default App
