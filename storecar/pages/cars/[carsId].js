import { useRouter } from 'next/router'
import React from 'react'
import CarsDetails from '@/components/template/CarsDetails';
import carsData from '@/data/carsData';
function Cardetails() {

  const router=useRouter();
  const { carsId }=router.query;
  console.log(router)
  const carDetails = carsData[carsId - 1 ]

  return (
    <div>
<CarsDetails  {...carDetails}/>

    </div>
  )
}

export default Cardetails