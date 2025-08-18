import Categories from "@/module/Categories"
import carsData from "../../data/carsData"
import Carpage from "@/components/template/Carpage"
 function Details() {
    console.log(carsData)
  return (
    <>
    <Categories />
<Carpage data={carsData}/>
   
    </>
  )
}
export default Details