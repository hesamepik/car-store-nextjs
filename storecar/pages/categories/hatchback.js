import Carlist from "@/components/template/Carlist";
import carsData from "../../data/carsData";

function Hatchback() {
  const hatchbackCars = carsData.filter((car) => car.category === "hatchback");

  return <Carlist data={hatchbackCars} />;
}

export default Hatchback;
