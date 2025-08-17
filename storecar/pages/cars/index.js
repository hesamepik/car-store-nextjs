import carsData from "../../data/carsData"
import Carpage from "@/components/template/Carpage"
 function Details() {
    console.log(carsData)
  return (
    <>
<Carpage data={carsData}/>
   
    </>
  )
}
export default Details