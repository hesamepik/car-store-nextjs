import Carlist from "@/components/template/Carlist";
import carsData from "@/data/carsData";

function Sport() {
    const sportCars = carsData.filter((car) => car.category === "sport");
  
    return <Carlist data={sportCars} />;
  }
  
  export default Sport;
  