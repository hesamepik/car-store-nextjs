import React, { useState } from 'react'
import styles from './Searcgbar.module.css'
import { useRouter } from 'next/router'
function Searchbar() {
    const router = useRouter();


    const [min , setmin]=useState("")
    const [max , setmax]=useState("")
    const searchhandeler=()=>{
if(min && max){

  router.push(`/filter/${min}/${max}`)
}else{

    alert("inter price")
}
    }
  return (
    <div className={styles.container}>
    <div>
        <input placeholder='minprice' value={min} onChange={e=>setmin(e.target.value)}/>
        <input placeholder='maxprice' value={max} onChange={e=>setmax(e.target.value)}/> 
        <button onClick={searchhandeler}>search</button>
    </div>
    
    </div>
  )
}

export default Searchbar