import { useContext } from "react"
import { StationsContext } from "../../context/StationsProvider"
const Home = () => {
  const { StationsState } = useContext(StationsContext)
  console.log(StationsState)
  return (
    <>
      <h1>Home</h1>
    </>
  )
}

export default Home