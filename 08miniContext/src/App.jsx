import './App.css'
import Profile from './Components/Profile'
import Login from './Components/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
     <h1>React with chai</h1>
     <Login />
     <Profile />
     <ThemeBtn />
    </UserContextProvider>
  )
}

export default App
