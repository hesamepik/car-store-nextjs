import React from 'react'
import carsData from '@/data/carsData'
import styles from "./carpage.module.css"
import Card from '@/module/Card'
function Carpage({data}) {
  return (
    <div className={styles.container}>
        {data.map( (car)=>

          <Card  key={car.id} {...car}/>
        )}
        </div>
  )
}

export default Carpage