import Carlist from "@/components/template/Carlist";
import carsData from "@/data/carsData";

function Sedan() {
    const sedanCars = carsData.filter((car) => car.category === "sedan");
  
    return <Carlist data={sedanCars} />;
  }
  
  export default Sedan;
  