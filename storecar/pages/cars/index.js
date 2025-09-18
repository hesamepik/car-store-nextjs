import Categories from "@/module/Categories"
import carsData from "../../data/carsData"
import Carpage from "@/components/template/Carpage"
import Searchbar from "@/module/Searchbar"
 function Details() {
    console.log(carsData)
  return (
    <>
    <Searchbar/>
    <Categories />
<Carpage data={carsData}/>
   
    </>
  )
}
export default Details