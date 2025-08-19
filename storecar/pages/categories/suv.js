import Carlist from "@/components/template/Carlist";
import carsData from "@/data/carsData";

function Suv() {
    const suvCars = carsData.filter((car) => car.category === "suv");
  
    return <Carlist data={suvCars} />;
  }
  
  export default Suv;
  