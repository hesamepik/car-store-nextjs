import React from 'react'
import Categories from "@/module/Categories"
import carsData from '@/data/carsData'
import Carpage from "@/components/template/Carpage"
import Searchbar from '@/module/Searchbar'

function Home() {
  const cars = carsData.slice(0,3)
  return (
    <div>

<Searchbar/>
    <Categories />
<Carpage data={cars}/>

    </div>
  )
}

export default Home