import { useEffect, useState } from "react"
import Header from "./component/Header"
import Topcard from "./component/Topcard"
import Billing from "./component/Billing"




function App() {

  const [kitchendata,setKutchendata] = useState([])

  useEffect(()=>{
    fetch('/dish.json')
    .then((res) => res.json())
    .then((data) => setKutchendata(data))

  },[])


  const newArr = kitchendata.filter((real) => real.rating > 4.7);


const ratings = kitchendata.map((rest) => rest.rating);
const total = ratings.reduce((sum, rating) => sum + rating, 0);
const average = kitchendata.length ? (total / kitchendata.length).toFixed(1) : 0;
console.log(average);

  return (
    <>
      <Header newArr={newArr} kitchendata={kitchendata} average={average}></Header>
      <Topcard newArr={newArr}></Topcard>
      <Billing/>
    </>
  )
}

export default App
