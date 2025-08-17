import React from 'react'
import carsData from '@/data/carsData'
import styles from "./carpage.module.css"
function Carpage({data}) {
  return (
    <div className={styles.container}>
        {data.map(car=><p key={car.id}>{car.name}</p>)}
        </div>
  )
}

export default Carpage