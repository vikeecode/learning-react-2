import UserCard from "./Components/UserCard"
import love from"./assets/love.jpeg"
import lovepic from"./assets/lovepic.jpeg"
import sexy from"./assets/sexy.avif"

function App() {
     

  return (
    <div className="conatainer">
    <UserCard name="Vishal" description="decr1" image={love} style={{"border-radius":"40px"}}/>
    <UserCard name="Naveen" description="decr2" image={lovepic} style={{"border-radius":"40px"}}/>
    <UserCard name="Vikas" description="decr3" image={sexy} style={{"border-radius":"40px"}}/>
   </div>
  )
}

export default App
